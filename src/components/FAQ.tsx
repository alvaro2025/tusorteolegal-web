'use client';
import { useState } from 'react';

const FAQS = [
  { q: '¿Esto es real? ¿Es legal?', a: 'Sí. TuSorteoLegal opera con bases legales publicadas y respaldadas por escritura notarial. La Fundación CHAG es una entidad constituida legalmente en Chile.' },
  { q: '¿Qué pasa si no se llega a la meta?', a: 'La venta se extiende hasta el 19 de agosto de 2026. Tu ticket sigue vigente hasta que se complete la meta y se realice el sorteo.' },
  { q: '¿Cuánto cuesta un ticket?', a: '$5.000 CLP por ticket de departamento, $1.500 CLP por ticket de camioneta. Packs: 3 tickets $14.000 / 5 tickets $23.000 / 10 tickets $45.000.' },
  { q: '¿Cómo recibo mi ticket?', a: 'Inmediatamente después de tu compra recibes tu ticket digital por WhatsApp y por correo electrónico. Cada ticket tiene un número único y un código QR de verificación.' },
  { q: '¿Es verdad que parte va al hospital?', a: 'Sí. El 50% de cada ticket va directo a financiar el primer Hospital Público y Gratuito de Mascotas de Chile.' },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(249,115,22,0.05),_transparent_70%)]" />
      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-primary-orange to-primary-purple bg-clip-text text-transparent">
            Preguntas Frecuentes
          </span>
        </h2>
        {FAQS.map((faq, i) => (
          <div key={i} className="border-b border-gray-800/50">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left py-4 flex justify-between items-center group"
            >
              <span className="text-white font-semibold group-hover:text-primary-orange transition-colors">
                {faq.q}
              </span>
              <span className="text-primary-orange ml-4 text-xl flex-shrink-0">
                {open === i ? '-' : '+'}
              </span>
            </button>
            {open === i && (
              <p className="text-gray-400 pb-4 leading-relaxed">{faq.a}</p>
            )}
          </div>
        ))}
        <div className="text-center mt-10">
          <a
            href="/preguntas"
            className="text-primary-orange hover:text-primary-purple font-bold transition-colors"
          >
            Ver todas las preguntas
          </a>
        </div>
      </div>
    </section>
  );
}
