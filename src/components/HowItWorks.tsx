'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: 1,
    title: 'Compra tu Boleto',
    description: 'Selecciona la cantidad de boletos que deseas y paga solo $5.000 CLP cada uno',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    number: 2,
    title: 'Recibe tu Número',
    description: 'Te asignaremos un número único para participar en el sorteo',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    number: 3,
    title: 'Espera el Sorteo',
    description: 'El 19 de abril de 2026 se realizará el sorteo ante notario público',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(124,58,237,0.05)_50%,transparent_100%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-purple to-primary-orange bg-clip-text text-transparent">
              ¿Cómo Participar?
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Solo 3 simples pasos para tener la oportunidad de ganar tu premio soñado
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary-purple to-primary-orange opacity-30" />
              )}

              <div className="text-center">
                {/* Number circle */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative inline-flex items-center justify-center w-16 h-16 mb-6"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-purple to-primary-orange rounded-full opacity-20" />
                  <div className="absolute inset-0 border-2 border-primary-purple/50 rounded-full" />
                  <span className="text-2xl font-bold text-primary-purple">
                    {step.number}
                  </span>
                </motion.div>

                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.3, type: 'spring' }}
                  viewport={{ once: true }}
                  className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-2xl bg-gray-900 border border-gray-800 text-primary-orange"
                >
                  {step.icon}
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
