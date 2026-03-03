import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Contáctanos por WhatsApp, email o formulario. Tu Sorteo Legal Limitada - contacto@tusorteolegal.cl - +569 5669 3126.',
  alternates: {
    canonical: 'https://tusorteolegal.cl/contacto',
  },
}

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
