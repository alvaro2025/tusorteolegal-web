const faqs = [
  { q: 'Cuando puedo comprar boletos?', a: 'La venta esta disponible desde el 25 de mayo de 2026 hasta el 25 de julio de 2026 a las 23:59 hrs.' },
  { q: 'Que pasa si no se llega a la meta antes del 25 de julio de 2026?', a: 'La venta sera prorrogada hasta el 25 de septiembre de 2026 a las 23:59 hrs. Los sorteos el 25 de septiembre de 2026 a las 12:00 hrs.' },
  { q: 'Cuantos sorteos hay?', a: 'Hay 4 sorteos con 50.000 boletos cada uno (200.000 total): Sorteo A Conchali, Sorteo B Quinta Normal, Sorteo C Estacion Central, Sorteo D Camioneta JAC T8.' },
  { q: 'Puede realizarse antes de las fechas limite?', a: 'Si. Si se completan los 200.000 boletos antes del cierre, los 4 sorteos se realizan inmediatamente.' },
  { q: 'Esto es real? Es legal?', a: 'Si. TuSorteoLegal opera con bases legales publicadas y respaldadas por escritura notarial.' },
  { q: 'Quien esta detras de esto?', a: 'Fundacion CHAG, constituida legalmente en Chile. Toda la documentacion es publica y verificable.' },
  { q: 'Como se que el ganador es real?', a: 'El sorteo se realiza ante notario publico, se graba en video HD y se publica el acta notarial.' },
  { q: 'Cuando es el sorteo?', a: 'Los sorteos se realizan al completar 50.000 boletos cada uno, o el 25 de julio de 2026 a las 12:00 hrs.' },
  { q: 'Que pasa si no se llega a la meta?', a: 'La venta se extiende hasta el 25 de julio de 2026. Tu ticket sigue vigente.' },
  { q: 'Cuantos sorteos hay (detalle)?', a: 'Hay 4 sorteos: 3 de departamento ($5.000 CLP) y 1 de camioneta JAC T8 ($1.500 CLP).' },
  { q: 'Cuanto cuesta un ticket?', a: 'Sorteos A, B y C: $5.000 CLP. Sorteo D camioneta: $1.500 CLP. Packs: 3x$14.000 / 5x$23.000 / 10x$45.000.' },
  { q: 'Como recibo mi ticket?', a: 'Inmediatamente por WhatsApp y correo con numero unico y codigo QR.' },
  { q: 'Puedo regalar un ticket?', a: 'Si. Al comprar puedes elegir Ticket Regalo y poner el nombre del destinatario.' },
  { q: 'Puedo comprar mas de un ticket?', a: 'Si, no hay limite. Mas tickets, mas probabilidades de ganar.' },
  { q: 'Es verdad que parte va al hospital?', a: 'Si. El 50% de cada ticket va directo al primer Hospital Publico y Gratuito de Mascotas de Chile (CHAG).' },
  { q: 'Como se que la plata llega al hospital?', a: 'Tenemos un dashboard publico con total recaudado y desglose de gastos en tiempo real.' },
  { q: 'Como pago?', a: 'A traves de MercadoPago. Aceptamos tarjetas de credito, debito y transferencia bancaria.' },
  { q: 'Es seguro pagar?', a: 'Si. MercadoPago cuenta con encriptacion bancaria y proteccion al comprador.' },
  { q: 'Como puedo comunicarme?', a: 'WhatsApp: +56 9 5669 3126 / Email: contacto@tusorteolegal.cl' },
];

export default function PreguntasLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {children}
    </>
  );
}
