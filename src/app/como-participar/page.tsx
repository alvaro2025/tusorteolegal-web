import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cómo Participar',
  description: 'Aprende cómo participar en el sorteo de TuSorteoLegal en 3 simples pasos. Compra tu boleto, recibe tu número y espera el sorteo.',
  alternates: {
    canonical: 'https://tusorteolegal.cl/como-participar',
  },
}

const steps = [
  {
    number: 1,
    title: 'Elige tu Sorteo',
    description: 'Selecciona entre nuestros 4 sorteos disponibles: 3 propiedades en Santiago y una Camioneta JAC T8 Azul. Cada sorteo tiene su propio boleto y precio.',
    details: [
      'Sorteo A: Propiedad en Conchalí — $5.000 CLP',
      'Sorteo B: Propiedad en Quinta Normal — $5.000 CLP',
      'Sorteo C: Propiedad en Estación Central — $5.000 CLP',
      'Sorteo D: Camioneta JAC T8 Azul — $1.500 CLP',
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    number: 2,
    title: 'Compra tu Boleto',
    description: 'Realiza el pago seguro a través de MercadoPago. Aceptamos tarjetas de crédito, débito y transferencia bancaria. Tu boleto se registra automáticamente con un número único.',
    details: [
      'Pago 100% seguro con MercadoPago',
      'Tarjetas de crédito, débito y transferencia',
      'Confirmación inmediata por email',
      'Puedes comprar múltiples boletos',
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    number: 3,
    title: 'Espera el Sorteo',
    description: 'Los 4 sorteos se realizan al completar los 200.000 boletos totales, o como fecha máxima el 21 de agosto de 2026 a las 12:00 hrs ante la Notaría N°42 de Santiago. Los resultados se publicarán en nuestro sitio web y se notificará a los ganadores.',
    details: [
      'Al completar 200.000 boletos o máximo 21 de agosto de 2026',
      'Lugar: Notaría N°42 de Santiago',
      'Los 4 sorteos se realizan al mismo tiempo',
      'Resultados publicados en tusorteolegal.cl',
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

export default function ComoParticipar() {
  return (
    <main className="min-h-screen py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-purple to-primary-orange bg-clip-text text-transparent">
              Cómo Participar
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Participar es muy fácil. Solo sigue estos 3 simples pasos y podrías ganar tu premio soñado.
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((step) => (
            <div key={step.number} className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-purple to-primary-orange rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="text-primary-orange">{step.icon}</div>
                    <h2 className="text-2xl font-bold text-white">{step.title}</h2>
                  </div>
                  <p className="text-gray-400 mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-300">
                        <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/#comprar"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-orange to-orange-600 text-white font-bold text-lg rounded-full shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transform hover:scale-105 transition-all duration-300"
          >
            Comprar mi Boleto Ahora
          </Link>
          <p className="mt-4 text-gray-500 text-sm">
            Boletos desde $1.500 CLP. Pago seguro con MercadoPago.
          </p>
        </div>
      </div>
    </main>
  )
}
