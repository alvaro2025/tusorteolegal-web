'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

export default function Hero() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-purple/20 via-transparent to-transparent" />

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: particle.id % 3 === 0 
              ? '#F97316' 
              : particle.id % 3 === 1 
                ? '#7C3AED' 
                : '#FFFFFF',
            opacity: 0.6,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.sin(particle.id) * 30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary-orange via-white to-primary-purple bg-clip-text text-transparent">
              ¿Te imaginas despertar
            </span>
            <br />
            <span className="text-white">
              y ser{' '}
              <span className="text-primary-orange">dueño</span> de un{' '}
              <span className="text-primary-purple">departamento</span>?
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Participa en el sorteo más esperado del año y podrías ganar uno de{' '}
          <span className="text-primary-orange font-bold">3 departamentos</span> o una{' '}
          <span className="text-primary-purple font-bold">camioneta 0km</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#comprar"
            className="px-8 py-4 bg-gradient-to-r from-primary-orange to-orange-600 text-white font-bold text-lg rounded-full shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transform hover:scale-105 transition-all duration-300"
          >
            Comprar Boleto - $5.000 CLP
          </a>
          <a
            href="#premios"
            className="px-8 py-4 bg-transparent border-2 border-primary-purple text-primary-purple font-bold text-lg rounded-full hover:bg-primary-purple hover:text-white transition-all duration-300"
          >
            Ver Premios
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
