import Link from 'next/link'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import React from 'react'

export const dynamic = 'force-dynamic'

interface Props {
  params: {
    slug: string
  }
}

// Datos de los artículos (en producción, esto vendría de una base de datos o CMS)
const blogPosts: Record<string, any> = {
  'como-funcionan-sorteos-legales-chile': {
    slug: 'como-funcionan-sorteos-legales-chile',
    title: 'Cómo funcionan los sorteos legales en Chile',
    date: '2026-02-15',
    category: 'Legal',
    readTime: '5 min',
    excerpt: 'Conoce el marco legal que regula los sorteos y concursos en Chile, y qué hace que un sorteo sea legal y confiable para los participantes.',
    content: `# Cómo funcionan los sorteos legales en Chile

En Chile, los sorteos y concursos están regulados por un marco legal específico que busca proteger a los participantes y garantizar la transparencia en el proceso. En este artículo, te explicaremos cómo funcionan los sorteos legales en nuestro país.

## Marco Legal

Los sorteos en Chile están regulados principalmente por:

- **Ley de Protección al Consumidor**: Establece derechos y obligaciones de los participantes
- **Código Civil**: Define los contratos y obligaciones legales
- **Resoluciones de la Superintendencia de Economía y Negocios (SERNAC)**: Proporciona directrices específicas

## Requisitos para un Sorteo Legal

Para que un sorteo sea considerado legal en Chile, debe cumplir con:

1. **Transparencia**: Todos los términos y condiciones deben ser claros y accesibles
2. **Bases legales publicadas**: Deben estar disponibles antes del sorteo
3. **Proceso aleatorio verificable**: El método de selección debe ser imparcial
4. **Identificación clara del organizador**: Debe haber responsabilidad legal clara
5. **Cumplimiento de plazos**: Los premios deben entregarse en los tiempos establecidos

## Proceso de un Sorteo Legal

### 1. Publicación de Bases
El organizador debe publicar las bases legales con al menos 15 días de anticipación, incluyendo:
- Descripción del premio
- Requisitos de participación
- Fecha y hora del sorteo
- Método de selección

### 2. Período de Participación
Los interesados pueden participar durante el período establecido, cumpliendo con los requisitos especificados.

### 3. Realización del Sorteo
El sorteo debe realizarse de forma pública o con testigos, utilizando un método aleatorio verificable.

### 4. Comunicación de Resultados
Los ganadores deben ser notificados dentro de los plazos establecidos.

### 5. Entrega de Premios
El organizador debe entregar los premios en las condiciones y plazos especificados.

## Protección del Consumidor

La ley protege a los participantes garantizando:

- **Derecho a información clara**: Todos los términos deben ser comprensibles
- **Derecho a reclamación**: Si hay incumplimiento, pueden reclamar ante SERNAC
- **Prohibición de prácticas engañosas**: No se permite publicidad falsa o engañosa
- **Garantía de cumplimiento**: El organizador es responsable de entregar los premios

## Conclusión

Los sorteos legales en Chile ofrecen una forma segura y transparente de participar en concursos. Al elegir participar en sorteos que cumplen con la normativa legal, te proteges a ti mismo y contribuyes a mantener un mercado justo y transparente.

En **TuSorteoLegal**, nos comprometemos a cumplir con todos los requisitos legales para garantizar que tu experiencia sea segura y confiable.`
  },
  'consejos-para-participar-sorteos': {
    slug: 'consejos-para-participar-sorteos',
    title: '5 consejos para participar en sorteos de forma inteligente',
    date: '2026-01-28',
    category: 'Consejos',
    readTime: '4 min',
    excerpt: 'Aprende a identificar sorteos confiables, gestionar tu presupuesto y maximizar tus oportunidades de ganar de forma responsable.',
    content: `# 5 consejos para participar en sorteos de forma inteligente

Participar en sorteos puede ser emocionante y divertido, pero es importante hacerlo de forma inteligente. Aquí te compartimos 5 consejos para maximizar tus oportunidades y protegerte.

## 1. Verifica la Legalidad del Sorteo

Antes de participar, asegúrate de que el sorteo sea legal:

- **Revisa las bases legales**: Deben estar publicadas y ser claras
- **Identifica al organizador**: Debe ser una empresa o persona identificable
- **Busca referencias**: Investiga si otros han participado exitosamente
- **Verifica regulaciones**: Confirma que cumple con la normativa chilena

## 2. Gestiona tu Presupuesto

Participa de forma responsable:

- **Establece un límite**: Decide cuánto estás dispuesto a gastar
- **No gastes más de lo que puedas perder**: Recuerda que es un juego de azar
- **Diversifica**: Participa en varios sorteos en lugar de uno solo
- **Mantén registros**: Anota tus participaciones y gastos

## 3. Lee Cuidadosamente los Términos y Condiciones

No ignores la letra pequeña:

- **Requisitos de participación**: Asegúrate de cumplir con todos
- **Plazos de entrega**: Conoce cuándo recibirás el premio
- **Impuestos y costos**: Verifica si hay costos adicionales
- **Privacidad**: Entiende cómo se usarán tus datos

## 4. Identifica Señales de Alerta

Ten cuidado con:

- **Promesas poco realistas**: Si suena demasiado bueno para ser verdad, probablemente lo sea
- **Solicitud de dinero por adelantado**: Los sorteos legales no cobran para participar
- **Falta de información clara**: Si no puedes encontrar las bases, es sospechoso
- **Presión para decidir rápido**: Los sorteos legales dan tiempo para decidir

## 5. Mantén tus Datos Seguros

Protege tu información personal:

- **Usa contraseñas fuertes**: Si necesitas crear una cuenta
- **No compartas información sensible**: Evita dar más datos de los necesarios
- **Verifica URLs**: Asegúrate de estar en el sitio correcto
- **Desconfía de correos sospechosos**: No hagas clic en enlaces de correos no verificados

## Conclusión

Participar en sorteos puede ser una forma divertida de intentar ganar premios emocionantes. Siguiendo estos consejos, puedes hacerlo de forma inteligente y segura, minimizando riesgos y maximizando tu experiencia.

Recuerda: **la diversión y la responsabilidad van de la mano**. En **TuSorteoLegal**, nos comprometemos a ofrecerte una experiencia segura y transparente.`
  },
  'por-que-elegir-tusorteolegal': {
    slug: 'por-que-elegir-tusorteolegal',
    title: 'Por qué elegir TuSorteoLegal para tu próximo sorteo',
    date: '2026-01-10',
    category: 'Empresa',
    readTime: '3 min',
    excerpt: 'Descubre las razones por las que somos la opción más confiable para participar en sorteos de propiedades y vehículos en Chile.',
    content: `# Por qué elegir TuSorteoLegal para tu próximo sorteo

En el mercado de sorteos en Chile, hay muchas opciones disponibles. Pero ¿qué nos hace diferentes? Aquí te presentamos las razones por las que **TuSorteoLegal** es tu mejor opción.

## Transparencia Total

En TuSorteoLegal, la transparencia es nuestro compromiso fundamental:

- **Bases legales claras**: Todas nuestras bases están publicadas y son fáciles de entender
- **Proceso verificable**: Puedes seguir cada paso del sorteo
- **Resultados públicos**: Los ganadores se anuncian públicamente
- **Auditoría externa**: Nuestros sorteos son auditados por terceros independientes

## Seguridad Garantizada

Tu seguridad es nuestra prioridad:

- **Cumplimiento legal**: Cumplimos con toda la normativa chilena
- **Protección de datos**: Tus datos personales están protegidos
- **Plataforma segura**: Utilizamos tecnología de encriptación de última generación
- **Garantía de premios**: Todos los premios están asegurados

## Premios Emocionantes

Ofrecemos premios que realmente valen la pena:

- **Propiedades de lujo**: Departamentos y casas en ubicaciones privilegiadas
- **Vehículos de última generación**: Autos nuevos de marcas reconocidas
- **Experiencias únicas**: Viajes, eventos y más
- **Valores competitivos**: Precios justos para participar

## Experiencia del Usuario

Participar en TuSorteoLegal es fácil y cómodo:

- **Plataforma intuitiva**: Interfaz amigable y fácil de usar
- **Múltiples formas de pago**: Aceptamos tarjetas, transferencias y más
- **Soporte 24/7**: Nuestro equipo está siempre disponible
- **Seguimiento en tiempo real**: Puedes ver el estado de tu participación

## Comunidad Confiable

Somos parte de una comunidad de ganadores satisfechos:

- **Miles de participantes**: Más de 50,000 personas confían en nosotros
- **Testimonios reales**: Lee historias de ganadores verificados
- **Redes sociales activas**: Síguenos para noticias y actualizaciones
- **Reputación establecida**: Años de operación exitosa

## Responsabilidad Social

Nos comprometemos con la comunidad:

- **Juego responsable**: Promovemos la participación consciente
- **Educación**: Compartimos información sobre sorteos legales
- **Contribución social**: Parte de nuestras ganancias van a causas sociales
- **Transparencia regulatoria**: Trabajamos con autoridades competentes

## Conclusión

Elegir **TuSorteoLegal** significa elegir:

✓ **Transparencia** en cada paso
✓ **Seguridad** garantizada
✓ **Premios** emocionantes
✓ **Confianza** en la comunidad

No dejes pasar la oportunidad de ser parte de nuestra comunidad de ganadores. **¡Participa hoy en TuSorteoLegal y vive la emoción de ganar!**`
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts[params.slug]

  if (!post) {
    return {
      title: 'Artículo no encontrado',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://tusorteolegal.cl/blog/${params.slug}`,
    },
  }
}

export default function BlogPost({ params }: Props) {
  const post = blogPosts[params.slug]

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

      <div className="relative z-10 max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary-orange hover:text-orange-400 transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al blog
          </Link>

          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="px-3 py-1 bg-primary-orange/10 text-primary-orange text-xs font-bold rounded-full">
              {post.category}
            </span>
            <span className="text-gray-500 text-sm">{post.date}</span>
            <span className="text-gray-500 text-sm">{post.readTime} lectura</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {post.title}
          </h1>

          <p className="text-gray-400 text-lg">{post.excerpt}</p>
        </div>

        {/* Content */}
        <article className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 md:p-12">
          <MarkdownContent content={post.content} />
        </article>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary-orange hover:text-orange-400 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver a todos los artículos
          </Link>
        </div>
      </div>
    </main>
  )
}

function MarkdownContent({ content }: { content: string }) {
  const lines = content.split('\n')
  const elements: React.ReactNode[] = []
  let listItems: string[] = []

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`list-${elements.length}`} className="list-disc list-inside text-gray-300 mb-4 space-y-2">
          {listItems.map((item, idx) => (
            <li key={idx} className="ml-4">
              {item}
            </li>
          ))}
        </ul>
      )
      listItems = []
    }
  }

  lines.forEach((line, index) => {
    const trimmed = line.trim()

    if (trimmed.startsWith('# ')) {
      flushList()
      elements.push(
        <h1 key={index} className="text-3xl font-bold text-white mt-8 mb-4">
          {trimmed.replace('# ', '')}
        </h1>
      )
    } else if (trimmed.startsWith('## ')) {
      flushList()
      elements.push(
        <h2 key={index} className="text-2xl font-bold text-white mt-6 mb-3">
          {trimmed.replace('## ', '')}
        </h2>
      )
    } else if (trimmed.startsWith('### ')) {
      flushList()
      elements.push(
        <h3 key={index} className="text-xl font-bold text-white mt-4 mb-2">
          {trimmed.replace('### ', '')}
        </h3>
      )
    } else if (trimmed.startsWith('- ')) {
      listItems.push(trimmed.replace('- ', ''))
    } else if (trimmed.startsWith('✓ ')) {
      flushList()
      elements.push(
        <div key={index} className="text-gray-300 mb-2 flex items-center gap-2">
          <span className="text-primary-orange font-bold">✓</span>
          <span>{trimmed.replace('✓ ', '')}</span>
        </div>
      )
    } else if (trimmed === '') {
      flushList()
      elements.push(<div key={index} className="mb-4" />)
    } else if (trimmed) {
      flushList()
      elements.push(
        <p key={index} className="text-gray-300 mb-4 leading-relaxed">
          {trimmed}
        </p>
      )
    }
  })

  flushList()

  return <div className="markdown-content space-y-4">{elements}</div>
}
