'use client';
import { useState } from 'react';

const CATEGORIAS = [
  {
    titulo: 'Confianza y Legalidad',
    preguntas: [
      { q: '¿Esto es real? ¿Es legal?', a: 'Sí. TuSorteoLegal opera con bases legales publicadas y respaldadas por escritura notarial. La Fundación CHAG es una entidad constituida legalmente en Chile.' },
      { q: '¿Quién está detrás de esto?', a: 'Fundación CHAG, constituida legalmente en Chile. Toda la documentación es pública y verificable. El sorteo se realiza ante notario con acta oficial.' },
      { q: '¿Cómo sé que el ganador es real?', a: 'El sorteo se realiza ante notario público, se graba en video HD completo, se publica el acta notarial, y se contacta al ganador públicamente (con su autorización).' },
    ]
  },
  {
    titulo: 'El Sorteo',
    preguntas: [
      { q: '¿Cuándo es el sorteo?', a: 'La fecha del sorteo se define una vez que se completen los 50.000 tickets del sorteo correspondiente. Todos los compradores serán notificados con anticipación.' },
      { q: '¿Qué pasa si no se llega a la meta de 50.000 tickets?', a: 'La fecha del sorteo se extiende hasta completar los 50.000 tickets. No se realiza el sorteo con menos tickets. Tu ticket sigue vigente hasta que se complete la meta.' },
      { q: '¿Cuántos sorteos hay?', a: 'Hay 3 sorteos de departamento (50.000 tickets cada uno) y sorteos de camioneta. Cada sorteo es independiente. Al comprar, eliges en cuál participas.' },
    ]
  },
  {
    titulo: 'Los Tickets',
    preguntas: [
      { q: '¿Cuánto cuesta un ticket?', a: '$5.000 CLP por ticket individual. Packs: 3 tickets $14.000 (ahorras $1.000) / 5 tickets $23.000 (ahorras $2.000) / 10 tickets $45.000 (ahorras $5.000).' },
      { q: 'Si compro un pack, ¿cómo se aplica el descuento?', a: 'El descuento se aplica automáticamente al elegir el pack. Pagas el precio del pack y recibes todos tus tickets, cada uno con su número único.' },
      { q: '¿Cómo recibo mi ticket?', a: 'Inmediatamente después de tu compra recibes tu ticket digital por WhatsApp y por correo electrónico. Cada ticket tiene un número único, un código QR de verificación y tu nombre.' },
      { q: '¿Puedo regalar un ticket?', a: 'Sí. Al comprar puedes elegir la opción Ticket Regalo y poner el nombre de la persona que lo recibe.' },
      { q: '¿Puedo comprar más de un ticket?', a: 'Sí, no hay límite. Mientras más tickets tengas, más probabilidades de ganar.' },
    ]
  },
  {
    titulo: 'El Hospital',
    preguntas: [
      { q: '¿Es verdad que parte de mi ticket va al hospital?', a: 'Sí. El 50% de cada ticket ($2.500) va directo a financiar el primer Hospital Público y Gratuito de Mascotas de Chile.' },
      { q: '¿Cómo sé que la plata llega al hospital?', a: 'Tenemos un dashboard público que muestra en tiempo real: total recaudado, cuánto se ha destinado al hospital, y un desglose de gastos. Transparencia total.' },
    ]
  },
  {
    titulo: 'Pagos y Devoluciones',
    preguntas: [
      { q: '¿Cómo pago?', a: 'A través de MercadoPago, la plataforma de pagos más segura de Chile. Aceptamos tarjetas de crédito, débito y transferencia bancaria.' },
      { q: '¿Es seguro pagar?', a: 'Sí. Usamos MercadoPago, que cuenta con encriptación bancaria y protección al comprador.' },
    ]
  },
  {
    titulo: 'Contacto',
    preguntas: [
      { q: '¿Cómo puedo comunicarme?', a: 'WhatsApp: +56 9 5669 3126 / Email: contacto@tusorteolegal.cl — Nuestro asistente está disponible 24/7 por WhatsApp.' },
    ]
  },
];

export default function PreguntasPage() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <main style={{ backgroundColor: '#1A1A1A', minHeight: '100vh', padding: '64px 16px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ color: '#D4AF37', fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '8px' }}>Preguntas Frecuentes</h1>
        <p style={{ color: '#aaa', textAlign: 'center', marginBottom: '48px' }}>Todo lo que necesitas saber sobre TuSorteoLegal</p>
        {CATEGORIAS.map((cat) => (
          <div key={cat.titulo} style={{ marginBottom: '40px' }}>
            <h2 style={{ color: '#D4AF37', fontSize: '1.1rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '16px', borderBottom: '1px solid #333', paddingBottom: '8px' }}>{cat.titulo}</h2>
            {cat.preguntas.map((faq, i) => {
              const key = cat.titulo + i;
              return (
                <div key={key} style={{ borderBottom: '1px solid #2a2a2a', marginBottom: '4px' }}>
                  <button onClick={() => setOpen(open === key ? null : key)} style={{ width: '100%', textAlign: 'left', padding: '16px 0', background: 'none', border: 'none', color: '#fff', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer', display: 'flex', justifyContent: 'space-between' }}>
                    {faq.q} <span style={{ color: '#D4AF37', marginLeft: '16px' }}>{open === key ? '−' : '+'}</span>
                  </button>
                  {open === key && <p style={{ color: '#aaa', paddingBottom: '16px', lineHeight: '1.6' }}>{faq.a}</p>}
                </div>
              );
            })}
          </div>
        ))}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <a href="/packs" style={{ backgroundColor: '#D4AF37', color: '#1A1A1A', fontWeight: 'bold', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontSize: '1rem' }}>Comprar tickets →</a>
        </div>
      </div>
    </main>
  );
}
