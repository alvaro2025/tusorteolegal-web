'use client';
import { motion } from 'framer-motion';

export default function TicketColeccionSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(124,58,237,0.1),_transparent_70%)]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-[#D4AF37] mb-4">
            Tu Ticket de Coleccion
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Compra tu ticket. Recibe tu obra dorada.
            <br />
            <span className="text-[#E8793A]">Imprime. Enmarca. Guarda. Compartelo.</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="/images/ticket-escritorio-muestra.jpg"
              alt="Ticket dorado de escritorio TuSorteoLegal"
              className="rounded-lg shadow-2xl w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <span className="text-3xl">✨</span>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Dorado y elegante</h3>
                <p className="text-gray-400">
                  Cada ticket es una pieza de arte. Diseno premium, embossed dorado.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-3xl">🔐</span>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">100% verificable</h3>
                <p className="text-gray-400">
                  QR unico por ticket. Escaneas y ves tu participacion en tiempo real.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-3xl">📧</span>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Llega a tu correo y WhatsApp</h3>
                <p className="text-gray-400">
                  En segundos. Junto con tu boleta oficial de MercadoPago.
                </p>
              </div>
            </div>

            <motion.a
              href="/packs"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-[#E8793A] hover:bg-[#d66628] text-white font-bold py-4 px-8 rounded-lg transition-colors"
            >
              Consigue el tuyo →
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
