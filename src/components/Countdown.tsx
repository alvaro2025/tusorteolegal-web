'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    const targetDate = new Date('2025-12-31T00:00:00').getTime()

    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  const timeBlocks = [
    { label: 'Días', value: timeLeft.days, color: 'from-primary-orange to-orange-600' },
    { label: 'Horas', value: timeLeft.hours, color: 'from-primary-purple to-purple-600' },
    { label: 'Minutos', value: timeLeft.minutes, color: 'from-primary-orange to-orange-600' },
    { label: 'Segundos', value: timeLeft.seconds, color: 'from-primary-purple to-purple-600' },
  ]

  if (!isMounted) {
    return null
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(249,115,22,0.1),_transparent_70%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            El Gran Sorteo se Realiza en
          </h2>
          <p className="text-xl text-primary-orange font-semibold mb-8">
            31 de Diciembre de 2025
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {timeBlocks.map((block, index) => (
            <motion.div
              key={block.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${block.color} rounded-2xl blur opacity-20`} />
              <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-4 md:p-6">
                <div className="text-4xl md:text-6xl font-bold text-white mb-2">
                  {String(block.value).padStart(2, '0')}
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">
                  {block.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 text-gray-500"
        >
          No te pierdas esta oportunidad única
        </motion.p>
      </div>
    </section>
  )
}
