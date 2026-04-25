async function getTicketData(uuid: string) {
  try {
    const res = await fetch(
      `https://jarvis.ecosistemachile.com/verificar-ticket/${uuid}`,
      { next: { revalidate: 30 } }
    );
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export default async function VerificarPage({
  params,
}: {
  params: { uuid: string };
}) {
  const data = await getTicketData(params.uuid);

  if (!data || !data.valido) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-black text-white p-4">
        <div className="max-w-md w-full bg-red-900/20 border border-red-500 rounded-lg p-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Ticket no valido</h1>
          <p className="text-gray-300">
            Este codigo QR no corresponde a un ticket emitido por TuSorteoLegal.cl
          </p>
          <a href="/" className="inline-block mt-6 text-[#E8793A] underline">
            Volver al inicio
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1A1A1A] to-black text-white p-4 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="bg-gradient-to-br from-[#D4AF37]/10 to-[#E8793A]/10 border-2 border-[#D4AF37] rounded-xl p-8 text-center">
          <h1 className="text-4xl font-bold text-[#D4AF37] mb-8">
            Ticket Valido
          </h1>
          <div className="space-y-4 text-left bg-black/40 rounded-lg p-6">
            <Dato label="Comprador" valor={data.nombre_comprador} />
            <Dato label="Numero de ticket" valor={data.ticket_id} />
            <Dato label="Sorteo" valor={data.sorteo} />
            <Dato label="Fecha compra" valor={data.fecha_compra} />
            <Dato label="Estado" valor={data.estado} />
          </div>
          <p className="mt-8 text-gray-400 text-sm">
            Este ticket participa del sorteo final al completarse 200.000 tickets vendidos.
          </p>
          
            href="/packs"
            className="inline-block mt-8 bg-[#E8793A] hover:bg-[#d66628] text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Comprar mi ticket tambien
          </a>
        </div>
      </div>
    </main>
  );
}

function Dato({ label, valor }: { label: string; valor: string }) {
  return (
    <div className="flex justify-between border-b border-gray-700 pb-2">
      <span className="text-gray-400">{label}:</span>
      <span className="font-semibold">{valor}</span>
    </div>
  );
}