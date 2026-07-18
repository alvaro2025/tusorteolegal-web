import { NextRequest, NextResponse } from "next/server";
  import crypto from "crypto";

  export const runtime = "nodejs";
  export const dynamic = "force-dynamic";

  const MP_ACCESS_TOKEN = process.env.MERCADOPAGO_ACCESS_TOKEN ?? "";
  const MP_WEBHOOK_SECRET = process.env.MERCADOPAGO_WEBHOOK_SECRET ?? "";
  const JARVIS_REGISTER_URL = process.env.JARVIS_REGISTER_URL ?? "";
  const JARVIS_INTERNAL_WRITE_TOKEN = process.env.JARVIS_INTERNAL_WRITE_TOKEN ?? "";
  const META_CAPI_TOKEN = process.env.META_CAPI_TOKEN ?? "";
  const META_PIXEL_ID = process.env.META_PIXEL_ID ?? "";

  type AnyRecord = Record<string, any>;
  type Sorteo = "D" | "A/B/C" | "UNKNOWN";

  function json(body: AnyRecord, status = 200) {
    return NextResponse.json(body, { status });
  }

  function sha256(value: string) {
    return crypto.createHash("sha256").update(value.trim().toLowerCase()).digest("hex");
  }

  function parseSignatureHeader(header: string | null) {
    if (!header) return null;

    const parts = Object.fromEntries(
      header
        .split(",")
        .map((part) => part.trim().split("="))
        .filter((pair) => pair.length === 2)
        .map(([k, v]) => [k, v]),
    );

    const ts = typeof parts.ts === "string" ? parts.ts : "";
    const v1 = typeof parts.v1 === "string" ? parts.v1 : "";

    if (!ts || !v1) return null;
    return { ts, v1 };
  }

  function safeHexCompare(a: string, b: string) {
    const ab = Buffer.from(a, "hex");
    const bb = Buffer.from(b, "hex");
    if (ab.length !== bb.length) return false;
    return crypto.timingSafeEqual(ab, bb);
  }

  function validateMercadoPagoSignature(args: {
    signatureHeader: string | null;
    requestId: string | null;
    dataId: string | null;
    secret: string;
  }) {
    const parsed = parseSignatureHeader(args.signatureHeader);
    if (!parsed) return false;
    if (!args.requestId || !args.dataId || !args.secret) return false;

    // Mercado Pago signature manifest:
    // id:<data.id>;request-id:<x-request-id>;ts:<ts>;
    const manifest = `id:${args.dataId};request-id:${args.requestId};ts:${parsed.ts};`;
    const expected = crypto.createHmac("sha256", args.secret).update(manifest).digest("hex");

    return safeHexCompare(expected, parsed.v1);
  }

  function normalizePaymentId(body: AnyRecord, queryPaymentId: string | null) {
    return String(
      queryPaymentId ??
        body?.data?.id ??
        body?.id ??
        body?.payment_id ??
        "",
    ).trim();
  }

  function rawSorteoText(payment: AnyRecord) {
    return String(
      payment?.metadata?.sorteo ??
        payment?.external_reference ??
        payment?.description ??
        payment?.additional_info?.items?.[0]?.title ??
        "",
    ).toUpperCase();
  }

  function normalizeSorteo(payment: AnyRecord): Sorteo {
    const raw = rawSorteoText(payment);

    if (/\bCAMIONETA\b/.test(raw) || /\bSORTEO\s+D\b/.test(raw)) return "D";
    if (/\bDEPARTAMENTO\b/.test(raw) || /\bSORTEO\s+[ABC]\b/.test(raw)) return "A/B/C";

    return "UNKNOWN";
  }

  function cantidadTickets(payment: AnyRecord) {
    const qty =
      payment?.metadata?.cantidad_tickets ??
      payment?.additional_info?.items?.[0]?.quantity ??
      payment?.quantity ??
      1;

    const parsed = Number(qty);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : 1;
  }

  function inferUuid(payment: AnyRecord, fallback: string) {
    return String(
      payment?.metadata?.uuid ??
        payment?.external_reference ??
        fallback,
    ).trim();
  }

  function inferTicketId(payment: AnyRecord, fallback: string) {
    return String(
      payment?.metadata?.ticket_id ??
        payment?.external_reference ??
        fallback,
    ).trim();
  }

  function compactObject<T extends Record<string, any>>(obj: T) {
    return Object.fromEntries(
      Object.entries(obj).filter(([, value]) => value !== undefined && value !== null && value !== ""),
    ) as T;
  }

  async function fetchPaymentReal(paymentId: string) {
    const resp = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${MP_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!resp.ok) {
      const text = await resp.text().catch(() => "");
      throw new Error(`MercadoPago GET /v1/payments/${paymentId} failed: ${resp.status} ${text}`);
    }

    return resp.json();
  }

  async function postJson(url: string, body: AnyRecord, headers: Record<string, string>) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4500);

    try {
      const resp = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
        body: JSON.stringify(body),
        signal: controller.signal,
        cache: "no-store",
      });

      const text = await resp.text().catch(() => "");
      return { ok: resp.ok, status: resp.status, text };
    } finally {
      clearTimeout(timeout);
    }
  }

  async function registerInJarvis(payment: AnyRecord, paymentId: string) {
    if (!JARVIS_REGISTER_URL) throw new Error("missing JARVIS_REGISTER_URL");
    if (!JARVIS_INTERNAL_WRITE_TOKEN) throw new Error("missing JARVIS_INTERNAL_WRITE_TOKEN");

    const sorteo = normalizeSorteo(payment);
    const payload = {
      ...payment,
      uuid: inferUuid(payment, paymentId),
      ticket_id: inferTicketId(payment, paymentId),
      payment_id: paymentId,
      status: payment?.status,
      transaction_amount: Number(payment?.transaction_amount ?? payment?.transaction_details?.total_paid_amount ?? 0),
      sorteo,
      cantidad_tickets: cantidadTickets(payment),
    };

    const result = await postJson(JARVIS_REGISTER_URL, payload, {
      "x-jarvis-internal-write-token": JARVIS_INTERNAL_WRITE_TOKEN,
    });

    if (!result.ok) {
      throw new Error(`JARVIS register failed: ${result.status} ${result.text}`);
    }

    return payload;
  }

  async function sendPurchaseToMeta(payment: AnyRecord, paymentId: string) {
    if (!META_CAPI_TOKEN) throw new Error("missing META_CAPI_TOKEN");
    if (!META_PIXEL_ID) throw new Error("missing META_PIXEL_ID");

    const sorteo = normalizeSorteo(payment);
    const value = Number(payment?.transaction_amount ?? 0);

    if (sorteo === "UNKNOWN") {
      console.warn("[webhook-mercadopago] sorteo_unknown", {
        paymentId,
        rawText: rawSorteoText(payment),
      });
    }

    const email = String(payment?.payer?.email ?? "").trim();
    const phone = String(payment?.payer?.phone?.number ?? "").trim();

    const user_data = compactObject({
      em: email ? [sha256(email)] : undefined,
      ph: phone ? [sha256(phone)] : undefined,
    });

    const payload = {
      data: [
        {
          event_name: "Purchase",
          event_time: Math.floor(Date.now() / 1000),
          action_source: "website",
          event_id: paymentId,
          user_data,
          custom_data: {
            currency: "CLP",
            value,
            content_type: "product",
            content_name: sorteo,
            content_ids: [paymentId],
            contents: [
              {
                id: paymentId,
                quantity: cantidadTickets(payment),
                item_price: value,
              },
            ],
          },
        },
      ],
    };

    const result = await postJson(
      `https://graph.facebook.com/v19.0/${META_PIXEL_ID}/events?access_token=${encodeURIComponent(META_CAPI_TOKEN)}`,
      payload,
      {},
    );

    if (!result.ok) {
      throw new Error(`Meta CAPI failed: ${result.status} ${result.text}`);
    }
  }

  export async function POST(req: NextRequest) {
    if (!MP_WEBHOOK_SECRET) {
      console.error("[webhook-mercadopago] missing_webhook_secret");
      return json({ ok: false, error: "missing_webhook_secret" }, 500);
    }
    if (!MP_ACCESS_TOKEN) {
      console.error("[webhook-mercadopago] missing_mercadopago_access_token");
      return json({ ok: false, error: "missing_mercadopago_access_token" }, 500);
    }

    const rawBody = await req.text();
    let body: AnyRecord = {};
    try {
      body = rawBody ? JSON.parse(rawBody) : {};
    } catch {
      console.warn("[webhook-mercadopago] invalid_json");
      return json({ ok: false, error: "invalid_json" }, 400);
    }

    const queryPaymentId = req.nextUrl.searchParams.get("data.id");
    const paymentId = normalizePaymentId(body, queryPaymentId);

    const signatureHeader = req.headers.get("x-signature");
    const requestId = req.headers.get("x-request-id");

    const signatureOk = validateMercadoPagoSignature({
      signatureHeader,
      requestId,
      dataId: paymentId || queryPaymentId,
      secret: MP_WEBHOOK_SECRET,
    });

    if (!signatureOk) {
      console.warn("[webhook-mercadopago] invalid_signature", {
        paymentId,
        hasSignatureHeader: Boolean(signatureHeader),
        hasRequestId: Boolean(requestId),
      });
      return json({ ok: false, error: "invalid_signature" }, 401);
    }

    if (!paymentId) {
      console.warn("[webhook-mercadopago] missing_payment_id");
      return json({ ok: false, error: "missing_payment_id" }, 400);
    }

    const payment = await fetchPaymentReal(paymentId);

    if (String(payment?.status ?? "").toLowerCase() !== "approved") {
      console.warn("[webhook-mercadopago] status_not_approved", {
        paymentId,
        status: payment?.status,
      });
      return json(
        {
          ok: true,
          ignored: true,
          reason: "status_not_approved",
          payment_id: paymentId,
          status: payment?.status,
        },
        200,
      );
    }

    try {
      await registerInJarvis(payment, paymentId);
    } catch (err) {
      console.error("[webhook-mercadopago] jarvis_register_failed", {
        paymentId,
        error: err instanceof Error ? err.message : "unknown_error",
      });
      return json(
        {
          ok: false,
          error: "jarvis_register_failed",
          detail: err instanceof Error ? err.message : "unknown_error",
        },
        502,
      );
    }

    try {
      await sendPurchaseToMeta(payment, paymentId);
    } catch (err) {
      console.error("[webhook-mercadopago] meta_capi_failed", {
        paymentId,
        error: err instanceof Error ? err.message : "unknown_error",
      });
      return json(
        {
          ok: false,
          error: "meta_capi_failed",
          detail: err instanceof Error ? err.message : "unknown_error",
        },
        502,
      );
    }

    return json(
      {
        ok: true,
        payment_id: paymentId,
        status: payment.status,
      },
      200,
    );
  }
