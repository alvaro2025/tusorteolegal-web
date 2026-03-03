import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nosotros',
  description: 'Conoce a Tu Sorteo Legal Limitada, empresa chilena dedicada a organizar sorteos transparentes y legales. RUT 78.114.381-2.',
  alternates: {
    canonical: 'https://tusorteolegal.cl/nosotros',
  },
}

const valores = [
  {
    title: 'Transparencia',
    description: 'Todos nuestros sorteos se realizan ante notario público, garantizando un proceso limpio y verificable.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: 'Legalidad',
    description: 'Somos una empresa constituida legalmente en Chile, cumpliendo con toda la normativa vigente para sorteos.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Compromiso',
    description: 'Nos comprometemos a entregar los premios en los plazos establecidos y a mantener informados a todos los participantes.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
]

export default function Nosotros() {
  return (
    <main className="min-h-screen py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-orange to-primary-purple bg-clip-text text-transparent">
              Sobre Nosotros
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Somos una empresa chilena comprometida con hacer realidad los sueños de las personas a través de sorteos legales y transparentes.
          </p>
        </div>

        {/* Quiénes somos */}
        <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Quiénes Somos</h2>
          <p className="text-gray-300 mb-4">
            <strong className="text-white">Tu Sorteo Legal Limitada</strong> (RUT 78.114.381-2) es una empresa
            chilena fundada con el propósito de organizar sorteos accesibles, transparentes y completamente legales.
          </p>
          <p className="text-gray-300 mb-4">
            Representada por <strong className="text-white">Sandra Evelyn Díaz Cifuentes</strong> y
            <strong className="text-white"> Álvaro Rodrigo Donoso Díaz</strong>, nuestra empresa nace de la
            convicción de que todos merecen la oportunidad de acceder a una vivienda propia o un vehículo
            de calidad a un precio accesible.
          </p>
          <p className="text-gray-300">
            Cada sorteo que organizamos se realiza ante notario público, garantizando la máxima transparencia
            y cumplimiento de la ley. Nuestro compromiso es entregar premios reales a personas reales.
          </p>
        </div>

        {/* Valores */}
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Nuestros Valores</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {valores.map((valor) => (
            <div key={valor.title} className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-primary-purple/20 to-primary-orange/20 text-primary-orange">
                {valor.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{valor.title}</h3>
              <p className="text-gray-400 text-sm">{valor.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Participa en Nuestro Sorteo</h2>
          <p className="text-gray-400 mb-6">
            Nuestro próximo sorteo se realiza el 19 de abril de 2026. No pierdas la oportunidad de ganar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#comprar"
              className="px-8 py-3 bg-gradient-to-r from-primary-orange to-orange-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-orange-500/30 transition-all"
            >
              Comprar Boleto
            </Link>
            <Link
              href="/bases-legales"
              className="px-8 py-3 border-2 border-primary-purple text-primary-purple font-bold rounded-full hover:bg-primary-purple hover:text-white transition-all"
            >
              Ver Bases Legales
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
