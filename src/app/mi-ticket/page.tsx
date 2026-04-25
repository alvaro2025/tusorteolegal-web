'use client';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function MiTicketContent() {
  const params = useSearchParams();
  const uuid = params.get('uuid');

  if (!uuid) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-black text-white">
        <p>UUID no provisto</p>
      </main>
    );
  }

  const ticketUrl = `https://jarvis.ecosistemachile.com/ticket-image/${uuid}`;

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1A1A1A] to-black text-white p-4 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-[#D4AF37] mb-2">
          Tu ticket esta listo!
        </h1>
        <p className="text-gray-400 mb-8">
          Te lo enviamos por email y WhatsApp. Tambien puedes guardarlo aqui.
        </p>

        <img
          src={ticketUrl}
          alt="Tu ticket"
          className="w-full rounded-lg shadow-2xl mb-8"
        />

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
            href={ticketUrl}
            download={`ticket-${uuid}.png`}
            className="bg-[#E8793A] hover:bg-[#d66628] text-white font-bold py-3 px-6 rounded-lg"
          >
            Descargar
          </a>
          
            href={`https://wa.me/?text=Compre%20mi%20ticket%20TSL!%20https://tusorteolegal.cl/verificar/${uuid}`}
            target="_blank"
            rel="noopener"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg"
          >
            Compartir WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}

export default function MiTicketPage() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <MiTicketContent />
    </Suspense>
  );
}