import Hero from '@/components/Hero'
import Prize from '@/components/Prize'
import HowItWorks from '@/components/HowItWorks'
import Countdown from '@/components/Countdown'
import BuyTicket from '@/components/BuyTicket'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://tusorteolegal.cl'),
  title: 'TuSorteoLegal - Gana un Departamento o Camioneta 0km',
  description: 'Participa en nuestro sorteo y podrías ganar uno de 3 departamentos o una camioneta 0km. Solo $5.000 CLP por boleto. Sorteo el 31 de diciembre de 2025.',
  keywords: 'sorteo, departamento, camioneta, 0km, Chile, luck, lottery',
  authors: [{ name: 'TuSorteoLegal' }],
  openGraph: {
    title: 'TuSorteoLegal - Gana un Departamento o Camioneta 0km',
    description: 'Participa en nuestro sorteo y podrías ganar uno de 3 departamentos o una camioneta 0km. Solo $5.000 CLP por boleto.',
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
  twitter: {
    card: 'summary_large_image',
    title: 'TuSorteoLegal - Gana un Departamento o Camioneta 0km',
    description: 'Participa en nuestro sorteo y podrías ganar uno de 3 departamentos o una camioneta 0km. Solo $5.000 CLP por boleto.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://tusorteolegal.cl',
  },
}

export default function Home() {
  // Schema.org structured data for the sweepstakes
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Sweepstakes',
    name: 'TuSorteoLegal - Sorteo de Departamentos y Camioneta',
    description: 'Sorteo de 3 departamentos y 1 camioneta 0km. Solo $5.000 CLP por boleto.',
    url: 'https://tusorteolegal.cl',
    startDate: '2025-01-01T00:00:00-04:00',
    endDate: '2025-12-31T23:59:59-04:00',
    drawDate: '2025-12-31T23:59:59-04:00',
    organizer: {
      '@type': 'Organization',
      name: 'TuSorteoLegal',
      url: 'https://tusorteolegal.cl',
    },
    prize: [
      {
        '@type': 'Thing',
        name: 'Departamento 1',
        description: '2 dormitorios, 1 baño, cocina americana',
      },
      {
        '@type': 'Thing',
        name: 'Departamento 2',
        description: '2 dormitorios, 2 baños, balcón con vista panorámica',
      },
      {
        '@type': 'Thing',
        name: 'Departamento 3',
        description: '3 dormitorios, 2 baños, Sector Santa Clara',
      },
      {
        '@type': 'Thing',
        name: 'Camioneta 4x4',
        description: 'Camioneta 0km 4x4',
      },
    ],
    price: {
      '@type': 'MonetaryAmount',
      currency: 'CLP',
      value: '5000',
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
      <Footer />
    </main>
  )
}
