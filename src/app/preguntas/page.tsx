'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

const CATEGORIAS = [
  {
    titulo: 'Fechas y Disponibilidad',
    preguntas: [
      { q: 'Cuando puedo comprar boletos?', a: 'La venta esta disponible desde el 14 de abril de 2026 hasta el 19 de junio de 2026 a las 23:59 hrs.' },
      { q: 'Que pasa si no se llega a la meta antes del 19 de junio?', a: 'La venta sera prorrogada hasta el 19 de agosto de 2026 a las 23:59 hrs. Los sorteos el 21 de agosto de 2026 a las 12:00 hrs.' },
      { q: 'Cuantos sorteos hay?', a: 'Hay 4 sorteos con 50.000 boletos cada uno (200.000 total): Sorteo A Conchali, Sorteo B Quinta Normal, Sorteo C Estacion Central, Sorteo D Camioneta JAC T8.' },
      { q: 'Puede realizarse antes de las fechas limite?', a: 'Si. Si se completan los 200.000 boletos antes del cierre, los 4 sorteos se realizan inmediatamente.' },
    ],
  },
  {
    titulo: 'Confianza y Legalidad',
    preguntas: [
      { q: 'Esto es real? Es legal?', a: 'Si. TuSorteoLegal opera con bases legales publicadas y respaldadas por escritura notarial.' },
      { q: 'Quien esta detras de esto?', a: 'Fundacion CHAG, constituida legalmente en Chile. Toda la documentacion es publica y verificable.' },
      { q: 'Como se que el ganador es real?', a: 'El sorteo se realiza ante notario publico, se graba en video HD y se publica el acta notarial.' },
    ],
  },
  {
    titulo: 'El Sorteo',
    preguntas: [
      { q: 'Cuando es el sorteo?', a: 'Los sorteos se realizan al completar 50.000 boletos cada uno, o el 21 de agosto de 2026 a las 12:00 hrs.' },
      { q: 'Que pasa si no se llega a la meta?', a: 'La venta se extiende hasta el 19 de agosto de 2026. Tu ticket sigue vigente.' },
      { q: 'Cuantos sorteos hay?', a: 'Hay 4 sorteos: 3 de departamento ($5.000 CLP) y 1 de camioneta JAC T8 ($1.500 CLP).' },
    ],
  },
  {
    titulo: 'Los Tickets',
    preguntas: [
      { q: 'Cuanto cuesta un ticket?', a: 'Sorteos A, B y C: $5.000 CLP. Sorteo D camioneta: $1.500 CLP. Packs: 3x$14.000 / 5x$23.000 / 10x$45.000.' },
      { q: 'Como recibo mi ticket?', a: 'Inmediatamente por WhatsApp y correo con numero unico y codigo QR.' },
      { q: 'Puedo regalar un ticket?', a: 'Si. Al comprar puedes elegir Ticket Regalo y poner el nombre del destinatario.' },
      { q: 'Puedo comprar mas de un ticket?', a: 'Si, no hay limite. Mas tickets, mas probabilidades de ganar.' },
    ],
  },
  {
    titulo: 'El Hospital',
    preguntas: [
      { q: 'Es verdad que parte va al hospital?', a: 'Si. El 50% de cada ticket va directo al primer Hospital Publico y Gratuito de Mascotas de Chile (CHAG).' },
      { q: 'Como se que la plata llega al hospital?', a: 'Tenemos un dashboard publico con total recaudado y desglose de gastos en tiempo real.' },
    ],
  },
  {
    titulo: 'Pagos y Devoluciones',
    preguntas: [
      { q: 'Como pago?', a: 'A traves de MercadoPago. Aceptamos tarjetas de credito, debito y transferencia bancaria.' },
      { q: 'Es seguro pagar?', a: 'Si. MercadoPago cuenta con encriptacion bancaria y proteccion al comprador.' },
    ],
  },
  {
    titulo: 'Contacto',
    preguntas: [
      { q: 'Como puedo comunicarme?', a: 'WhatsApp: +56 9 5669 3126 / Email: contacto@tusorteolegal.cl' },
    ],
  },
];

export default function PreguntasPage() {
  const [open, setOpen] = useState<string | null>(null);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <main className="min-h-screen py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(124,58,237,0.1),_transparent_70%)]" />
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: particle.x + '%',
            top: particle.y + '%',
            width: particle.size,
            height: particle.size,
            background: particle.id % 3 === 0 ? '#F97316' : particle.id % 3 === 1 ? '#7C3AED' : '#FFFFFF',
            opacity: 0.4,
          }}
          animate={{ y: [0, -80, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: particle.duration, repeat: Infinity, delay: particle.delay, ease: 'easeInOut' }}
        />
      ))}
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-orange to-primary-purple bg-clip-text text-transparent">
              Preguntas Frecuentes
            </span>
          </h1>
          <p className="text-gray-400 text-lg">Todo lo que necesitas saber sobre TuSorteoLegal</p>
        </motion.div>
        {CATEGORIAS.map((cat, catIndex) => (
          <motion.div
            key={cat.titulo}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            className="mb-10"
          >
            <h2 className="text-sm font-bold uppercase tracking-widest mb-4 pb-2 border-b border-gray-800">
              <span className="bg-gradient-to-r from-primary-orange to-primary-purple bg-clip-text text-transparent">
                {cat.titulo}
              </span>
            </h2>
            {cat.preguntas.map((faq, i) => {
              const key = cat.titulo + i;
              return (
                <div key={key} className="border-b border-gray-800/50">
                  <button
                    onClick={() => setOpen(open === key ? null : key)}
                    className="w-full text-left py-4 flex justify-between items-center group"
                  >
                    <span className="text-white font-semibold group-hover:text-primary-orange transition-colors">
                      {faq.q}
                    </span>
                    <span className="text-primary-orange ml-4 text-xl flex-shrink-0">
                      {open === key ? '-' : '+'}
                    </span>
                  </button>
                  {open === key && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="text-gray-400 pb-4 leading-relaxed"
                    >
                      {faq.a}
                    </motion.p>
                  )}
                </div>
              );
            })}
          </motion.div>
        ))}
        <div className="text-center mt-12">
          <a
            href="/packs"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-orange to-orange-600 text-white font-bold text-lg rounded-full shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transform hover:scale-105 transition-all duration-300"
          >
            Comprar tickets
          </a>
        </div>
      </div>
    </main>
  );
}
