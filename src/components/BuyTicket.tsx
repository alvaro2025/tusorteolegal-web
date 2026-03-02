'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'

const MERCADO_PAGO_PUBLIC_KEY = 'APP_USR-6ef629d8-ea6c-4927-8428-3441841dd1d5'

export default function BuyTicket() {
  const [quantity, setQuantity] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const triggerConfetti = useCallback(() => {
    const duration = 3 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min

    const interval: any = setInterval(() => {
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
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    triggerConfetti()
    setShowSuccess(true)
    setIsLoading(false)
  }

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
              ¡Compra tu Boleto Ahora!
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Cada boleto tiene un valor de <span className="text-white font-bold">$5.000 CLP</span>
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {showSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="bg-gray-900/80 backdrop-blur-sm border border-green-500/30 rounded-2xl p-8 text-center"
            >
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-green-400 mb-2">
                ¡Gracias por tu compra!
              </h3>
              <p className="text-gray-300 mb-4">
                Tu boleto ha sido registrado exitosamente. Recibirás un correo con tu número de participación.
              </p>
              <p className="text-gray-500 text-sm">
                * Esta es una demo. En producción, serás redirigido a MercadoPago.
              </p>
              <button
                onClick={() => setShowSuccess(false)}
                className="mt-6 px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Comprar otro boleto
              </button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
            >
              {/* Quantity selector */}
              <div className="mb-8">
                <label className="block text-gray-300 mb-3 text-center">
                  ¿Cuántos boletos quieres comprar?
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
                  ${(quantity * 5000).toLocaleString('es-CL')} CLP
                </p>
              </div>

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
                    Procesando...
                  </>
                ) : (
                  <>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Comprar Boleto {quantity > 1 ? `(${quantity} boletos)` : ''}
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
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
