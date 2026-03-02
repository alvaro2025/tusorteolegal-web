import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
