'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'

const SORTEOS = [
  {
    key: 'A',
    label: 'Depto Conchalí',
    address: 'Av. Nueva Central 4588',
    price: 5000,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&q=80',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    key: 'B',
    label: 'Depto Quinta Normal',
    address: 'Villasana 1451',
    price: 5000,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&q=80',
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    key: 'C',
    label: 'Depto Estación Central',
    address: 'Blanco Garces 154',
    price: 5000,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&q=80',
    gradient: 'from-orange-600 to-red-600',
  },
  {
    key: 'D',
    label: 'Camioneta JAC T8',
    address: 'Azul motor 2.0 4x2 año 2022',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&q=80',
    gradient: 'from-purple-500 to-yellow-500',
  },
]

export default function BuyTicket() {
  const [quantities, setQuantities] = useState<Record<string, number>>({
    A: 0, B: 0, C: 0, D: 0,
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [buyer, setBuyer] = useState({
    nombre: '',
    rut: '',
    email: '',
    telefono: '',
  })

  const updateQty = (key: string, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [key]: Math.min(50, Math.max(0, prev[key] + delta)),
    }))
    setError('')
  }

  const totalTickets = Object.values(quantities).reduce((a, b) => a + b, 0)
  const totalPrice = SORTEOS.reduce(
    (sum, s) => sum + s.price * quantities[s.key],
    0
  )
  const cartItems = SORTEOS.filter((s) => quantities[s.key] > 0)

  const triggerConfetti = useCallback(() => {
    const duration = 3 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }
    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min

    const interval: ReturnType<typeof setInterval> = setInterval(() => {
      const timeLeft = animationEnd - Date.now()
      if (timeLeft <= 0) return clearInterval(interval)
      const particleCount = 50 * (timeLeft / duration)
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }, colors: ['#F97316', '#7C3AED', '#FFFFFF', '#FFD700'] })
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }, colors: ['#F97316', '#7C3AED', '#FFFFFF', '#FFD700'] })
    }, 250)
  }, [])

  const handleBuy = async () => {
    if (!buyer.nombre.trim() || !buyer.rut.trim() || !buyer.email.trim() || !buyer.telefono.trim()) {
      setError('Completa todos los datos para continuar.')
      return
    }

    setIsLoading(true)
    setError('')

    try {
      triggerConfetti()

      const items = SORTEOS
        .filter((s) => quantities[s.key] > 0)
        .map((s) => ({ sorteo: s.key, quantity: quantities[s.key] }))

      const response = await fetch('/api/create-preference', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items, buyer }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Error al procesar el pago')
      }

      if (data.init_point) {
        window.location.href = data.init_point
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error inesperado. Intenta nuevamente.')
      setIsLoading(false)
    }
  }

  return (
    <section id="comprar" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,_rgba(249,115,22,0.15),_transparent_60%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-orange to-primary-purple bg-clip-text text-transparent">
              Elige tus Boletos
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Selecciona la cantidad de tickets para cada sorteo
          </p>
        </motion.div>

        {/* 4 Prize Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {SORTEOS.map((sorteo, index) => (
            <motion.div
              key={sorteo.key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${sorteo.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

              <div className={`relative bg-gray-900/80 backdrop-blur-sm border rounded-2xl overflow-hidden transition-all duration-300 ${
                quantities[sorteo.key] > 0
                  ? 'border-primary-orange shadow-lg shadow-orange-500/20'
                  : 'border-gray-800 group-hover:border-gray-600'
              }`}>
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={sorteo.image}
                    alt={sorteo.label}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    style={{ height: '160px' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                  <div className={`absolute top-3 left-3 px-2 py-0.5 bg-gradient-to-r ${sorteo.gradient} text-white text-xs font-bold rounded-full`}>
                    Sorteo {sorteo.key}
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="text-white font-bold text-sm mb-1">{sorteo.label}</h3>
                  <p className="text-gray-500 text-xs mb-3 leading-snug">{sorteo.address}</p>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-primary-orange font-bold text-lg">
                      ${sorteo.price.toLocaleString('es-CL')}
                    </span>
                    <span className="text-gray-600 text-xs">por boleto</span>
                  </div>

                  {/* Quantity selector */}
                  <div className="flex items-center justify-center gap-3">
                    <button
                      onClick={() => updateQty(sorteo.key, -1)}
                      className="w-9 h-9 rounded-full bg-gray-800 text-white text-lg font-bold hover:bg-gray-700 active:scale-95 transition-all flex items-center justify-center"
                    >
                      &minus;
                    </button>
                    <span className={`text-2xl font-bold w-10 text-center ${
                      quantities[sorteo.key] > 0 ? 'text-primary-orange' : 'text-gray-600'
                    }`}>
                      {quantities[sorteo.key]}
                    </span>
                    <button
                      onClick={() => updateQty(sorteo.key, 1)}
                      className="w-9 h-9 rounded-full bg-gray-800 text-white text-lg font-bold hover:bg-gray-700 active:scale-95 transition-all flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>

                  {/* Subtotal per card */}
                  <AnimatePresence>
                    {quantities[sorteo.key] > 0 && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-3 pt-3 border-t border-gray-800 text-center"
                      >
                        <span className="text-gray-400 text-xs">
                          Subtotal:{' '}
                          <span className="text-white font-bold">
                            ${(sorteo.price * quantities[sorteo.key]).toLocaleString('es-CL')} CLP
                          </span>
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cart Summary */}
        <AnimatePresence>
          {totalTickets > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 mb-6">
                <h3 className="text-white font-bold text-lg mb-4 text-center">Resumen de tu compra</h3>

                {/* Line items */}
                <div className="space-y-2 mb-4">
                  {cartItems.map((s) => (
                    <div key={s.key} className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">
                        Sorteo {s.key} &mdash; {s.label}
                      </span>
                      <span className="text-white font-medium">
                        {quantities[s.key]} &times; ${s.price.toLocaleString('es-CL')} = ${(s.price * quantities[s.key]).toLocaleString('es-CL')}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-800 pt-4 flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-xs">Total tickets</p>
                    <p className="text-white font-bold text-lg">{totalTickets} boleto{totalTickets > 1 ? 's' : ''}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500 text-xs">Total a pagar</p>
                    <p className="text-primary-orange font-bold text-2xl">
                      ${totalPrice.toLocaleString('es-CL')} CLP
                    </p>
                  </div>
                </div>
              </div>

              {/* Buyer form */}
              {!showForm ? (
                <motion.button
                  onClick={() => setShowForm(true)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-5 bg-gradient-to-r from-primary-orange to-orange-600 text-white font-bold text-2xl rounded-2xl shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <span>Quiero ganar!</span>
                  <span className="text-3xl" role="img" aria-label="target">&#127919;</span>
                </motion.button>
              ) : (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6"
                >
                  <h3 className="text-white font-bold text-lg mb-1 text-center">Datos del comprador</h3>
                  <p className="text-gray-500 text-xs text-center mb-5">Requeridos por las bases legales del sorteo</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label htmlFor="nombre" className="block text-gray-400 text-xs font-medium mb-1">Nombre completo *</label>
                      <input
                        type="text"
                        id="nombre"
                        required
                        value={buyer.nombre}
                        onChange={(e) => setBuyer({ ...buyer, nombre: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-primary-orange transition-colors text-sm"
                        placeholder="Juan Pérez López"
                      />
                    </div>
                    <div>
                      <label htmlFor="rut" className="block text-gray-400 text-xs font-medium mb-1">RUT *</label>
                      <input
                        type="text"
                        id="rut"
                        required
                        value={buyer.rut}
                        onChange={(e) => setBuyer({ ...buyer, rut: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-primary-orange transition-colors text-sm"
                        placeholder="12.345.678-9"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-400 text-xs font-medium mb-1">Email *</label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={buyer.email}
                        onChange={(e) => setBuyer({ ...buyer, email: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-primary-orange transition-colors text-sm"
                        placeholder="tu@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="telefono" className="block text-gray-400 text-xs font-medium mb-1">Teléfono *</label>
                      <input
                        type="tel"
                        id="telefono"
                        required
                        value={buyer.telefono}
                        onChange={(e) => setBuyer({ ...buyer, telefono: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-primary-orange transition-colors text-sm"
                        placeholder="+569 1234 5678"
                      />
                    </div>
                  </div>

                  {/* Error */}
                  <AnimatePresence>
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm text-center"
                      >
                        {error}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Pay button */}
                  <motion.button
                    onClick={handleBuy}
                    disabled={isLoading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-5 bg-gradient-to-r from-primary-orange to-orange-600 text-white font-bold text-xl rounded-2xl shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Redirigiendo a MercadoPago...
                      </>
                    ) : (
                      <>
                        Pagar ${totalPrice.toLocaleString('es-CL')} CLP
                        <span className="text-2xl" role="img" aria-label="target">&#127919;</span>
                      </>
                    )}
                  </motion.button>

                  <div className="mt-4 flex items-center justify-center gap-2 text-gray-500 text-xs">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Pago seguro con MercadoPago
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
