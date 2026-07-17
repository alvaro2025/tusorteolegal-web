import { MercadoPagoConfig, Preference } from 'mercadopago'
import { NextRequest, NextResponse } from 'next/server'

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN!,
})

const PACKS = {
  individual: { cantidad: 1, precio: 5000, nombre: '1 Ticket' },
  triple: { cantidad: 3, precio: 14000, nombre: 'Pack 3 Tickets' },
  cinco: { cantidad: 5, precio: 23000, nombre: 'Pack 5 Tickets' },
  decena: { cantidad: 10, precio: 45000, nombre: 'Pack 10 Tickets' },
} as const

const SORTEOS = {
  A: { label: 'Sorteo A - Departamento', precio: 5000 },
  B: { label: 'Sorteo B - Departamento', precio: 5000 },
  C: { label: 'Sorteo C - Departamento', precio: 5000 },
  D: { label: 'Sorteo D - Camioneta', precio: 1500 },
} as const

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const preferenceItems = Array.isArray(body.items) && body.items.length > 0
      ? body.items.map((item: { sorteo: keyof typeof SORTEOS; quantity: number }) => {
          const sorteo = SORTEOS[item.sorteo]

          if (!sorteo) {
            return null
          }

          return {
            id: `ticket-${item.sorteo}`,
            title: sorteo.label,
            description: `Boleto sorteo ${sorteo.label}`,
            quantity: Math.max(1, Number(item.quantity) || 1),
            unit_price: sorteo.precio,
            currency_id: 'CLP' as const,
          }
        }).filter(Boolean)
      : null

    let preferenceBody: {
      items: Array<{
        id: string
        title: string
        description: string
        quantity: number
        unit_price: number
        currency_id: 'CLP'
      }>
      metadata: Record<string, unknown>
      back_urls: {
        success: string
        failure: string
        pending: string
      }
      auto_return: 'approved'
      statement_descriptor: string
      external_reference: string
    }

    if (preferenceItems && preferenceItems.length > 0) {
      preferenceBody = {
        items: preferenceItems,
        metadata: {
          sorteo_items: body.items,
        },
        back_urls: {
          success: 'https://tusorteolegal.cl/?status=approved',
          failure: 'https://tusorteolegal.cl/?status=failure',
          pending: 'https://tusorteolegal.cl/?status=pending',
        },
        auto_return: 'approved',
        statement_descriptor: 'TUSORTEOLEGAL',
        external_reference: `items-${Date.now()}`,
      }
    } else {
      if (!body?.pack_tipo) {
        return NextResponse.json({ error: 'pack_tipo es requerido' }, { status: 400 })
      }

      const pack = PACKS[body.pack_tipo as keyof typeof PACKS]
      const sorteo = SORTEOS[body.sorteo as keyof typeof SORTEOS]

      if (!pack || !sorteo) {
        return NextResponse.json({ error: 'Pack o sorteo invalido' }, { status: 400 })
      }

      if (body.sorteo === 'D' && body.pack_tipo !== 'individual') {
        return NextResponse.json(
          { error: 'Sorteo D solo permite ticket individual de $1.500 CLP' },
          { status: 400 }
        )
      }

      const unitPrice = body.sorteo === 'D' ? 1500 : pack.precio

      preferenceBody = {
        items: [
          {
            id: `pack-${body.pack_tipo}-${body.sorteo}`,
            title: `${pack.nombre} - ${sorteo.label}`,
            description: `Boleto sorteo ${sorteo.label}`,
            quantity: 1,
            unit_price: unitPrice,
            currency_id: 'CLP' as const,
          },
        ],
        metadata: {
          cantidad_tickets: body.sorteo === 'D' ? 1 : pack.cantidad,
          sorteo: body.sorteo,
          hospital_50: Math.round(unitPrice * 0.5),
        },
        back_urls: {
          success: 'https://tusorteolegal.cl/?status=approved',
          failure: 'https://tusorteolegal.cl/?status=failure',
          pending: 'https://tusorteolegal.cl/?status=pending',
        },
        auto_return: 'approved',
        statement_descriptor: 'TUSORTEOLEGAL',
        external_reference: `pack-${body.pack_tipo}-${body.sorteo}-${Date.now()}`,
      }
    }

    const preference = new Preference(client)
    const result = await preference.create({
      body: preferenceBody,
    })

    return NextResponse.json({ init_point: result.init_point })
  } catch (error) {
    console.error('Error creating preference:', error)
    return NextResponse.json({ error: 'Error al crear la preferencia de pago' }, { status: 500 })
  }
}
