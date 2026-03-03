'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'

const SORTEOS = [
  { key: 'A', label: 'Propiedad en Conchalí', price: 5000 },
  { key: 'B', label: 'Propiedad en Quinta Normal', price: 5000 },
  { key: 'C', label: 'Propiedad en Estación Central', price: 5000 },
  { key: 'D', label: 'Camioneta JAC T8 Azul', price: 1500 },
]

export default function BuyTicket() {
  const [selectedSorteo, setSelectedSorteo] = useState(SORTEOS[0])
  const [quantity, setQuantity] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const triggerConfetti = useCallback(() => {
    const duration = 3 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min

    const interval: ReturnType<typeof setInterval> = setInterval(() => {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#F97316', '#7C3AED', '#FFFFFF', '#FFD700'],
      })
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#F97316', '#7C3AED', '#FFFFFF', '#FFD700'],
      })
    }, 250)
  }, [])

  const handleBuy = async () => {
    setIsLoading(true)
    setError('')

    try {
      triggerConfetti()

      const response = await fetch('/api/create-preference', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sorteo: selectedSorteo.key,
          quantity,
        }),
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

  const total = selectedSorteo.price * quantity

  return (
    <section id="comprar" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,_rgba(249,115,22,0.15),_transparent_60%)]" />

      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-orange to-primary-purple bg-clip-text text-transparent">
              Compra tu Boleto Ahora
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Elige tu sorteo y la cantidad de boletos
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
        >
          {/* Sorteo selector */}
          <div className="mb-8">
            <label className="block text-gray-300 mb-3 text-center font-medium">
              Selecciona el sorteo
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SORTEOS.map((sorteo) => (
                <button
                  key={sorteo.key}
                  onClick={() => {
                    setSelectedSorteo(sorteo)
                    setError('')
                  }}
                  className={`p-4 rounded-xl border-2 transition-all text-left ${
                    selectedSorteo.key === sorteo.key
                      ? 'border-primary-orange bg-primary-orange/10'
                      : 'border-gray-700 bg-gray-800/50 hover:border-gray-600'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-gray-500">Sorteo {sorteo.key}</span>
                      <p className={`font-bold text-sm ${
                        selectedSorteo.key === sorteo.key ? 'text-primary-orange' : 'text-white'
                      }`}>
                        {sorteo.label}
                      </p>
                    </div>
                    <span className={`text-lg font-bold ${
                      selectedSorteo.key === sorteo.key ? 'text-primary-orange' : 'text-gray-400'
                    }`}>
                      ${sorteo.price.toLocaleString('es-CL')}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Quantity selector */}
          <div className="mb-8">
            <label className="block text-gray-300 mb-3 text-center">
              Cantidad de boletos
            </label>
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-12 h-12 rounded-full bg-gray-800 text-white text-2xl font-bold hover:bg-gray-700 transition-colors"
              >
                -
              </button>
              <span className="text-4xl font-bold text-white w-20 text-center">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(Math.min(10, quantity + 1))}
                className="w-12 h-12 rounded-full bg-gray-800 text-white text-2xl font-bold hover:bg-gray-700 transition-colors"
              >
                +
              </button>
            </div>
          </div>

          {/* Total */}
          <div className="text-center mb-8 p-4 bg-gray-800/50 rounded-xl">
            <p className="text-gray-400 mb-1">Total a pagar</p>
            <p className="text-4xl font-bold text-primary-orange">
              ${total.toLocaleString('es-CL')} CLP
            </p>
            <p className="text-gray-500 text-sm mt-1">
              {quantity} boleto{quantity > 1 ? 's' : ''} &times; ${selectedSorteo.price.toLocaleString('es-CL')} CLP
            </p>
          </div>

          {/* Error message */}
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

          {/* Buy button */}
          <motion.button
            onClick={handleBuy}
            disabled={isLoading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 bg-gradient-to-r from-primary-orange to-orange-600 text-white font-bold text-xl rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
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
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Comprar Boleto{quantity > 1 ? `s (${quantity})` : ''}
              </>
            )}
          </motion.button>

          {/* Security badge */}
          <div className="mt-6 flex items-center justify-center gap-2 text-gray-500 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Pago seguro con MercadoPago
          </div>
        </motion.div>
      </div>
    </section>
  )
}
