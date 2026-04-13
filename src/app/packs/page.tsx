'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const PACKS = [
  { id: 'individual', nombre: '1 Ticket', precio: 5000, precioTachado: null, ahorro: null, porTicket: '$5.000 c/u', hospital: '$2.500', popular: false },
  { id: 'triple', nombre: 'Pack 3 Tickets', precio: 14000, precioTachado: 15000, ahorro: '$1.000', porTicket: '$4.667 c/u', hospital: '$7.000', popular: false },
  { id: 'cinco', nombre: 'Pack 5 Tickets', precio: 23000, precioTachado: 25000, ahorro: '$2.000', porTicket: '$4.600 c/u', hospital: '$11.500', popular: true },
  { id: 'decena', nombre: 'Pack 10 Tickets', precio: 45000, precioTachado: 50000, ahorro: '$5.000', porTicket: '$4.500 c/u', hospital: '$22.500', popular: false },
];

const SORTEOS = [
  { id: 'A', label: 'Sorteo A - Departamento' },
  { id: 'B', label: 'Sorteo B - Departamento' },
  { id: 'C', label: 'Sorteo C - Departamento' },
  { id: 'D', label: 'Sorteo D - Camioneta' },
];

export default function PacksPage() {
  const [sorteoSeleccionado, setSorteoSeleccionado] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleComprar = async (packId: string) => {
    if (!sorteoSeleccionado) return;
    setLoading(true);
    try {
      const res = await fetch('/api/create-preference', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pack_tipo: packId, sorteo: sorteoSeleccionado }),
      });
      const data = await res.json();
      if (data.init_point) window.location.href = data.init_point;
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(124,58,237,0.1),_transparent_70%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-orange to-primary-purple bg-clip-text text-transparent">
              Elige tu Pack
            </span>
          </h1>
          <p className="text-gray-400 text-lg">Mientras más tickets, más chances de ganar</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-10"
        >
          <p className="text-white mb-3 font-bold">¿En qué sorteo quieres participar?</p>
          <div className="flex gap-3 justify-center flex-wrap">
            {SORTEOS.map((s) => (
              <button
                key={s.id}
                onClick={() => setSorteoSeleccionado(s.id)}
                className={`px-5 py-2.5 rounded-full font-bold transition-all duration-300 ${
                  sorteoSeleccionado === s.id
                    ? 'bg-gradient-to-r from-primary-orange to-orange-600 text-white shadow-lg shadow-orange-500/30'
                    : 'bg-gray-900/80 border border-gray-700 text-gray-300 hover:border-primary-orange'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {PACKS.map((pack, index) => (
            <motion.div
              key={pack.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 relative flex flex-col gap-3 ${
                pack.popular
                  ? 'border-2 border-primary-orange shadow-lg shadow-orange-500/20'
                  : 'border border-gray-800'
              }`}
            >
              {pack.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary-orange to-orange-600 text-white font-bold text-xs px-4 py-1 rounded-full">
                  MÁS POPULAR
                </div>
              )}
              <h2 className="text-white text-xl font-bold">{pack.nombre}</h2>
              <div>
                <span className="text-primary-orange text-3xl font-bold">
                  ${pack.precio.toLocaleString('es-CL')}
                </span>
                {pack.precioTachado && (
                  <span className="text-gray-600 line-through ml-2">
                    ${pack.precioTachado.toLocaleString('es-CL')}
                  </span>
                )}
              </div>
              {pack.ahorro && (
                <span className="bg-green-900/40 text-green-400 px-3 py-1 rounded-lg text-sm font-bold w-fit">
                  Ahorras {pack.ahorro}
                </span>
              )}
              <p className="text-gray-500 text-sm">{pack.porTicket}</p>
              <span className="bg-primary-purple/20 text-primary-purple px-3 py-1 rounded-lg text-sm w-fit">
                50% al Hospital ({pack.hospital})
              </span>
              <button
                onClick={() => handleComprar(pack.id)}
                disabled={loading || !sorteoSeleccionado}
                className={`mt-auto py-3 rounded-full font-bold text-base transition-all duration-300 ${
                  sorteoSeleccionado
                    ? 'bg-gradient-to-r from-primary-orange to-orange-600 text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105'
                    : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                }`}
              >
                {sorteoSeleccionado
                  ? pack.id === 'individual'
                    ? 'Comprar'
                    : 'Comprar Pack'
                  : 'Selecciona un sorteo'}
              </button>
            </motion.div>
          ))}
        </div>

        <div className="text-center text-gray-400 space-y-2">
          <p>El 50% de cada ticket va directo al Hospital de Mascotas</p>
          <p>
            <a href="https://chag.cl" target="_blank" className="text-primary-purple hover:text-primary-orange transition-colors font-semibold">
              Conoce el hospital → chag.cl
            </a>
          </p>
          <p>Los sorteos se realizan al completar 50.000 tickets por sorteo (200.000 total)</p>
        </div>
      </div>
    </main>
  );
}
