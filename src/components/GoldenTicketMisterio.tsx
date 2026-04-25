'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function GoldenTicketMisterio() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(124,58,237,0.1),_transparent_70%)]" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse" />
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-[#D4AF37] rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-pulse" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm mb-4">
            Y si ganas...
          </p>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            El <span className="text-[#D4AF37]">Golden Ticket</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Solo 4 personas en Chile lo tendran en sus manos.
            <br />
            <span className="text-white font-semibold">El resto nunca sabra lo que se siente.</span>
          </p>

          <motion.div className="relative mx-auto w-full max-w-md my-12">
            <img
              src="/images/golden-ticket-muestra.jpg"
              alt="Golden Ticket TuSorteoLegal"
              className="rounded-lg shadow-2xl w-full"
            />
          </motion.div>

          <Link
            href="/golden"
            className="inline-block border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-bold py-4 px-10 rounded-lg transition-all uppercase tracking-wider"
          >
            Descubre mas
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
