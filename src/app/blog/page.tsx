import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Artículos sobre sorteos legales en Chile, consejos para participar y noticias de Tu Sorteo Legal.',
  alternates: {
    canonical: 'https://tusorteolegal.cl/blog',
  },
}

interface BlogPostMetadata {
  slug: string
  title: string
  date: string
  category: string
  readTime: string
  excerpt: string
}

export default function Blog() {
  const articles: BlogPostMetadata[] = [
    {
      slug: 'como-funcionan-sorteos-legales-chile',
      title: 'Cómo funcionan los sorteos legales en Chile',
      date: '2026-02-15',
      category: 'Legal',
      readTime: '5 min',
      excerpt: 'Conoce el marco legal que regula los sorteos y concursos en Chile, y qué hace que un sorteo sea legal y confiable para los participantes.',
    },
    {
      slug: 'consejos-para-participar-sorteos',
      title: '5 consejos para participar en sorteos de forma inteligente',
      date: '2026-01-28',
      category: 'Consejos',
      readTime: '4 min',
      excerpt: 'Aprende a identificar sorteos confiables, gestionar tu presupuesto y maximizar tus oportunidades de ganar de forma responsable.',
    },
    {
      slug: 'por-que-elegir-tusorteolegal',
      title: 'Por qué elegir TuSorteoLegal para tu próximo sorteo',
      date: '2026-01-10',
      category: 'Empresa',
      readTime: '3 min',
      excerpt: 'Descubre las razones por las que somos la opción más confiable para participar en sorteos de propiedades y vehículos en Chile.',
    },
  ]

  return (
    <main className="min-h-screen py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-orange to-primary-purple bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Artículos, consejos y noticias sobre sorteos legales en Chile.
          </p>
        </div>

        <div className="space-y-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="block"
            >
              <article className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-colors cursor-pointer hover:bg-gray-900">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <span className="px-3 py-1 bg-primary-orange/10 text-primary-orange text-xs font-bold rounded-full">
                    {article.category}
                  </span>
                  <span className="text-gray-500 text-sm">{article.date}</span>
                  <span className="text-gray-500 text-sm">{article.readTime} lectura</span>
                </div>

                <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
                  {article.title}
                </h2>

                <p className="text-gray-400 mb-4">{article.excerpt}</p>

                <span className="text-primary-orange hover:text-orange-400 transition-colors font-medium text-sm inline-flex items-center gap-1">
                  Leer artículo
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </article>
            </Link>
          ))}
        </div>

        {articles.length === 0 && (
          <div className="mt-12 text-center">
            <p className="text-gray-500">
              No hay artículos disponibles en este momento.
            </p>
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="text-gray-500">
            Próximamente más artículos. Síguenos para mantenerte informado.
          </p>
        </div>
      </div>
    </main>
  )
}
