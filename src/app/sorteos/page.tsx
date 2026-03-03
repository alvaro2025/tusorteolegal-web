import Image from 'next/image'
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
    title: 'Avenida Nueva Central 4588, Conchalí',
    description: 'Propiedad ubicada en la comuna de Conchalí, con excelente conectividad y acceso a servicios. Una oportunidad única para tener tu hogar propio.',
    price: '$5.000 CLP',
    image: '/images/images/depto1-principal.jpg',
    gallery: ['/images/images/depto1.jpg'],
    gradient: 'from-orange-500 to-red-500',
  },
  {
    id: 'B',
    title: 'Villasana 1451, Quinta Normal',
    description: 'Propiedad en Quinta Normal, sector residencial consolidado con fácil acceso a transporte público, comercio y áreas verdes.',
    price: '$5.000 CLP',
    image: '/images/images/depto2-principal.jpg',
    gallery: ['/images/images/depto2.jpg'],
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    id: 'C',
    title: 'Blanco Garces 154, Estación Central',
    description: 'Propiedad en Estación Central, zona estratégica con acceso directo a Metro, Terminal de buses y principales vías de Santiago.',
    price: '$5.000 CLP',
    image: '/images/images/depto3-principal.jpg',
    gallery: ['/images/images/depto3.jpg'],
    gradient: 'from-orange-600 to-red-600',
  },
  {
    id: 'D',
    title: 'Camioneta JAC T8 Azul',
    description: 'Camioneta JAC T8 Azul, motor 2.0 Turbo Diésel 147HP, pantalla táctil 8", Android Auto, Apple CarPlay, tracción 4x2, año 2022. Un vehículo potente y versátil.',
    price: '$1.500 CLP',
    image: '/images/images/camioneta-principal.jpg',
    gallery: ['/images/images/camioneta.jpg'],
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
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden`}
            >
              {/* Image */}
              <div className="lg:w-1/2 relative h-64 lg:h-auto min-h-[300px]">
                <Image
                  src={sorteo.image}
                  alt={sorteo.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
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

                <div className="flex gap-3">
                  {sorteo.gallery.map((img, i) => (
                    <div key={i} className="relative w-20 h-20 rounded-lg overflow-hidden border border-gray-700">
                      <Image src={img} alt={`${sorteo.title} ${i + 1}`} fill className="object-cover" sizes="80px" />
                    </div>
                  ))}
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
