'use client'

import { motion } from 'framer-motion'

interface Prize {
  id: number
  title: string
  description: string
  icon: string
  color: string
  gradient: string
}

const prizes: Prize[] = [
  {
    id: 1,
    title: 'Departamento 1',
    description: '2 dormitorios, 1 baño, cocina americana, ubicado en sector exclusivo',
    icon: '🏢',
    color: 'primary-orange',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    id: 2,
    title: 'Departamento 2',
    description: '2 dormitorios, 2 baños, balcón con vista panorámica, parking incluido',
    icon: '🏙️',
    color: 'primary-purple',
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    id: 3,
    title: 'Departamento 3',
    description: '3 dormitorios, 2 baños, amplitud total, Sector Santa Clara',
    icon: '🏘️',
    color: 'white',
    gradient: 'from-gray-600 to-gray-800',
  },
  {
    id: 4,
    title: 'Camioneta 4x4',
    description: 'Camioneta 0km 4x4, la mejor para tu aventura',
    icon: '🚙',
    color: 'primary-orange',
    gradient: 'from-primary-orange to-yellow-500',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
}

export default function Prize() {
  return (
    <section id="premios" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(124,58,237,0.1),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_rgba(249,115,22,0.1),_transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-orange to-primary-purple bg-clip-text text-transparent">
              ¡Los Premios que Puedes Ganar!
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Participa con un solo boleto y tienes la oportunidad de llevarte uno de estos increíbles premios
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {prizes.map((prize, index) => (
            <motion.div
              key={prize.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: prize.color === 'primary-orange' 
                  ? '0 20px 40px rgba(249, 115, 22, 0.3)'
                  : prize.color === 'primary-purple'
                    ? '0 20px 40px rgba(124, 58, 237, 0.3)'
                    : '0 20px 40px rgba(255, 255, 255, 0.1)',
              }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${prize.gradient} rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
              <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 h-full">
                <div className="text-5xl mb-4">{prize.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{prize.title}</h3>
                <p className="text-gray-400 text-sm">{prize.description}</p>
                
                {/* Decorative line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${prize.gradient} rounded-b-2xl`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm">
            * Los premios serán entregados después del sorteo oficial el 31 de diciembre de 2025
          </p>
        </motion.div>
      </div>
    </section>
  )
}
