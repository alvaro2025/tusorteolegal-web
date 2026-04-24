import Hero from '@/components/Hero'
import Prize from '@/components/Prize'
import HowItWorks from '@/components/HowItWorks'
import Countdown from '@/components/Countdown'
import BuyTicket from '@/components/BuyTicket'
import TicketWall from '@/components/TicketWall'
import FAQ from '@/components/FAQ'
import TicketColeccionSection from '@/components/TicketColeccionSection'
import GoldenTicketMisterio from '@/components/GoldenTicketMisterio'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TuSorteoLegal - Gana un Departamento o Camioneta JAC T8',
  description: 'Participa en nuestro sorteo de 3 departamentos y 1 Camioneta JAC T8 Azul. Boletos: $5.000 (depto) y $1.500 (camioneta). Sorteo certificado ante notario.',
  openGraph: {
    title: 'TuSorteoLegal - Gana un Departamento o Camioneta JAC T8',
    description: 'Participa en nuestro sorteo y podrías ganar uno de 3 departamentos o una Camioneta JAC T8 Azul. Desde $1.500 CLP por boleto.',
    url: 'https://tusorteolegal.cl',
    siteName: 'TuSorteoLegal',
    locale: 'es_CL',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TuSorteoLegal - Gana un Departamento o Camioneta',
      },
    ],
  },
  alternates: {
    canonical: 'https://tusorteolegal.cl',
  },
}

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Sweepstakes',
    name: 'TuSorteoLegal - Sorteo de Departamentos y Camioneta JAC T8',
    description: 'Sorteo de 3 departamentos y 1 Camioneta JAC T8 Azul. Desde $1.500 CLP por boleto.',
    url: 'https://tusorteolegal.cl',
    startDate: '2026-01-01T00:00:00-04:00',
    endDate: '2026-08-21T12:00:00-04:00',
    drawDate: '2026-08-21T12:00:00-04:00',
    organizer: {
      '@type': 'Organization',
      name: 'Tu Sorteo Legal Limitada',
      url: 'https://tusorteolegal.cl',
    },
    prize: [
      {
        '@type': 'Thing',
        name: 'Av. Nueva Central 4588, Conchalí',
        description: 'Departamento en Conchalí',
      },
      {
        '@type': 'Thing',
        name: 'Villasana 1451, Quinta Normal',
        description: 'Departamento en Quinta Normal',
      },
      {
        '@type': 'Thing',
        name: 'Blanco Garces 154, Estación Central',
        description: 'Departamento en Estación Central',
      },
      {
        '@type': 'Thing',
        name: 'Camioneta JAC T8 Azul',
        description: 'Camioneta JAC T8 Azul, motor 2.0, 4x2, año 2022',
      },
    ],
    price: {
      '@type': 'MonetaryAmount',
      currency: 'CLP',
      value: '1500',
    },
    eligibility: {
      '@type': 'EligibilityRequirement',
      description: 'Pueden participar residentes en Chile mayores de 18 años',
    },
  }

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Prize />
      <HowItWorks />
      <Countdown />
      <BuyTicket />
      <TicketColeccionSection />
      <GoldenTicketMisterio />

      {/* Nuestra Promesa */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(124,58,237,0.1),_transparent_70%)]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-purple to-primary-orange bg-clip-text text-transparent">
              Nuestra Promesa
            </span>
          </h2>
          <p className="text-gray-300 text-lg mb-4 max-w-2xl mx-auto">
            Tu Sorteo Legal Limitada es una empresa constituida legalmente en Chile (RUT 78.114.381-2).
            Nuestro sorteo se realiza ante la Notaría N°42 de Santiago, garantizando total transparencia y legalidad.
          </p>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Cada boleto vendido queda registrado. Los sorteos se realizan al completar 200.000 boletos
            (50.000 por sorteo), o como fecha máxima el 21 de agosto de 2026 a las 12:00 hrs,
            cumpliendo con todas las normativas vigentes.           
          </p>
          <a
            href="/terminos-y-condiciones.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-primary-purple text-primary-purple font-bold text-lg rounded-full hover:bg-primary-purple hover:text-white transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Ver Bases Legales
          </a>
        </div>
      </section>
      <TicketWall />
      <FAQ />
    </main>
  )
}
