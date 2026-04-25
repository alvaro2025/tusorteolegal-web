'use client';
import { motion } from 'framer-motion';

export default function GoldenPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(124,58,237,0.1),_transparent_70%)]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-primary-purple to-primary-orange bg-clip-text text-transparent">Golden Ticket</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-2xl text-gray-300 max-w-2xl mx-auto mb-12"
          >
            Cuatro chilenos lo recibiran.
            <br />
            <span className="text-white font-semibold">Ninguno lo olvidara jamas.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mx-auto max-w-lg mb-12"
          >
            <img
              src="/images/golden-ticket-muestra.jpg"
              alt="Golden Ticket TuSorteoLegal"
              className="rounded-lg shadow-2xl w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg text-gray-400 space-y-4"
          >
            <p>Cuando se vendan los 200.000 tickets, se hara un solo sorteo final.</p>
            <p>Los 4 ganadores recibiran su <span className="text-[#D4AF37] font-bold">Golden Ticket</span>.</p>
            <p>Tres se llevan departamento. Uno se lleva camioneta.</p>
            <p className="text-white font-bold">Todos entran a la historia de Chile.</p>
          </motion.div>
        </div>
      </section>

      {/* Como conseguirlo */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(124,58,237,0.1),_transparent_70%)]" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Como conseguir el tuyo
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: '1', title: 'Compra tu ticket', desc: 'Un ticket = una posibilidad. Mas tickets, mas opciones.' },
              { num: '2', title: 'Espera el sorteo final', desc: 'Cuando se alcancen los 200.000 tickets vendidos.' },
              { num: '3', title: 'Si ganas: Golden Ticket', desc: 'Entrega ceremonial. Prensa. Testimonio. Entrega fisica del premio.' },
            ].map((step) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#D4AF37] text-black text-3xl font-bold flex items-center justify-center mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a
              href="/packs"
              className="inline-block bg-[#E8793A] hover:bg-[#d66628] text-white font-bold py-4 px-10 rounded-lg text-lg transition-colors"
            >
              Conseguir mi ticket ahora â†’
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}

