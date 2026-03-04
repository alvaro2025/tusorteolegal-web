import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sorteos',
  description: 'Conoce los 4 premios disponibles: 3 propiedades en Santiago y una Camioneta JAC T8 Azul. Desde $1.500 CLP por boleto.',
  alternates: {
    canonical: 'https://tusorteolegal.cl/sorteos',
  },
}

const sorteos = [
  {
    id: 'A',
    anchor: 'sorteo-a',
    title: 'Avenida Nueva Central 4588, Conchalí',
    description: 'Propiedad ubicada en la comuna de Conchalí, con excelente conectividad y acceso a servicios. Una oportunidad única para tener tu hogar propio.',
    price: '$5.000 CLP',
    image: '/images/images/depto1-principal.jpg%20%20%E2%86%92%20foto%20de%20Nueva%20Centra.jpeg',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    id: 'B',
    anchor: 'sorteo-b',
    title: 'Villasana 1451, Quinta Normal',
    description: 'Propiedad en Quinta Normal, sector residencial consolidado con fácil acceso a transporte público, comercio y áreas verdes.',
    price: '$5.000 CLP',
    image: '/images/images/depto2-principal.jpg%20%20%E2%86%92%20foto%20de%20Villasana.jpeg',
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    id: 'C',
    anchor: 'sorteo-c',
    title: 'Blanco Garces 154, Estación Central',
    description: 'Propiedad en Estación Central, zona estratégica con acceso directo a Metro, Terminal de buses y principales vías de Santiago.',
    price: '$5.000 CLP',
    image: '/images/images/depto3-principal.jpg%20%20%E2%86%92%20foto%20de%20Blanco%20Garc%C3%A9s.jpeg',
    gradient: 'from-orange-600 to-red-600',
  },
  {
    id: 'D',
    anchor: 'sorteo-d',
    title: 'Camioneta JAC T8 Azul',
    description: 'Camioneta JAC T8 Azul, motor 2.0 Turbo Diésel 147HP, pantalla táctil 8", Android Auto, Apple CarPlay, tracción 4x2, año 2022. Un vehículo potente y versátil.',
    price: '$1.500 CLP',
    image: '/images/images/camioneta-principal.jpg%20%E2%86%92%20JAC%20T8%20azul.jpeg',
    gradient: 'from-purple-500 to-yellow-500',
  },
]

export default function Sorteos() {
  return (
    <main className="min-h-screen py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-orange to-primary-purple bg-clip-text text-transparent">
              Nuestros Sorteos
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            4 premios increíbles esperan por ti. Elige tu sorteo favorito y participa desde $1.500 CLP por boleto.
          </p>
        </div>

        <div className="space-y-16">
          {sorteos.map((sorteo, index) => (
            <div
              key={sorteo.id}
              id={sorteo.anchor}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden scroll-mt-24`}
            >
              {/* Image */}
              <div className="lg:w-1/2 relative">
                <img
                  src={sorteo.image}
                  alt={sorteo.title}
                  className="w-full h-full object-cover"
                  style={{ minHeight: '300px' }}
                />
                <div className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${sorteo.gradient} text-white text-sm font-bold rounded-full`}>
                  Sorteo {sorteo.id}
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{sorteo.title}</h2>
                <p className="text-gray-400 mb-6">{sorteo.description}</p>

                <div className="bg-gray-800/50 rounded-xl p-4 mb-6">
                  <p className="text-gray-500 text-sm">Valor por boleto</p>
                  <p className="text-3xl font-bold text-primary-orange">{sorteo.price}</p>
                </div>

                <Link
                  href="/#comprar"
                  className="mt-6 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary-orange to-orange-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-orange-500/30 transition-all"
                >
                  Comprar Boleto
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
