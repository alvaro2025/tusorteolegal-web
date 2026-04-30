import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://tusorteolegal.cl'),
  title: {
    default: 'TuSorteoLegal - Gana un Departamento o Camioneta JAC T8',
    template: '%s | TuSorteoLegal',
  },
  description: 'Participa en nuestro sorteo y podrías ganar uno de 3 departamentos o una Camioneta JAC T8 Azul. Desde $1.500 CLP por boleto. Sorteo el 19 de abril de 2026.',
  keywords: 'sorteo, departamento, camioneta, JAC T8, Chile, sorteo legal, concurso',
  authors: [{ name: 'Tu Sorteo Legal Limitada' }],
  verification: {
  google: 'H6674V1xoJAGd',
  },
  openGraph: {
    title: 'TuSorteoLegal - Gana un Departamento o Camioneta JAC T8',
    description: 'Participa en nuestro sorteo y podrías ganar uno de 3 departamentos o una Camioneta JAC T8 Azul. Desde $1.500 CLP por boleto.',
    url: 'https://tusorteolegal.cl',
    siteName: 'TuSorteoLegal',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TuSorteoLegal - Gana un Departamento o Camioneta JAC T8',
    description: 'Participa en nuestro sorteo y podrías ganar uno de 3 departamentos o una Camioneta JAC T8 Azul. Desde $1.500 CLP por boleto.',
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
      <body className={inter.className}>
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1265988922339145');
              fbq('track', 'PageView');
            `,
          }}
        />
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "w0lbu92de0");
            `,
          }}
        />
        <Navigation />
        <div className="pt-16">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
