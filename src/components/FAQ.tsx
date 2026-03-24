'use client';
import { useState } from 'react';

const FAQS = [
  { q: '¿Esto es real? ¿Es legal?', a: 'Sí. TuSorteoLegal opera con bases legales publicadas y respaldadas por escritura notarial. La Fundación CHAG es una entidad constituida legalmente en Chile.' },
  { q: '¿Qué pasa si no se llega a la meta?', a: 'La fecha del sorteo se extiende hasta completar los 50.000 tickets. Tu ticket sigue vigente hasta que se complete y se realice el sorteo.' },
  { q: '¿Cuánto cuesta un ticket?', a: '$5.000 CLP por ticket individual. Packs: 3 tickets $14.000 / 5 tickets $23.000 / 10 tickets $45.000. El descuento se aplica automáticamente.' },
  { q: '¿Cómo recibo mi ticket?', a: 'Inmediatamente después de tu compra recibes tu ticket digital por WhatsApp y por correo electrónico. Cada ticket tiene un número único y un código QR de verificación.' },
  { q: '¿Es verdad que parte va al hospital?', a: 'Sí. El 50% de cada ticket ($2.500) va directo a financiar el primer Hospital Público y Gratuito de Mascotas de Chile.' },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section style={{ backgroundColor: '#111', padding: '64px 16px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ color: '#D4AF37', fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '40px' }}>Preguntas Frecuentes</h2>
        {FAQS.map((faq, i) => (
          <div key={i} style={{ borderBottom: '1px solid #333', marginBottom: '8px' }}>
            <button onClick={() => setOpen(open === i ? null : i)} style={{ width: '100%', textAlign: 'left', padding: '16px 0', background: 'none', border: 'none', color: '#fff', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer', display: 'flex', justifyContent: 'space-between' }}>
              {faq.q} <span style={{ color: '#D4AF37' }}>{open === i ? '−' : '+'}</span>
            </button>
            {open === i && <p style={{ color: '#aaa', paddingBottom: '16px', lineHeight: '1.6' }}>{faq.a}</p>}
          </div>
        ))}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a href="/preguntas" style={{ color: '#D4AF37', fontWeight: 'bold', fontSize: '1rem' }}>Ver todas las preguntas →</a>
        </div>
      </div>
    </section>
  );
}