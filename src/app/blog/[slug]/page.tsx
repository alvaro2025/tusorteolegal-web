import Link from 'next/link'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getBlogPostBySlug, getAllBlogSlugs } from '@/lib/mdx'

export const dynamic = 'force-dynamic'

interface Props {
  params: {
    slug: string
  }
}

// Custom MDX components with styling
const components = {
  h1: (props: any) => (
    <h1 className="text-3xl font-bold text-white mt-8 mb-4" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-2xl font-bold text-white mt-6 mb-3" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="text-xl font-bold text-white mt-4 mb-2" {...props} />
  ),
  p: (props: any) => (
    <p className="text-gray-300 mb-4 leading-relaxed" {...props} />
  ),
  ul: (props: any) => (
    <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2 ml-4" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal list-inside text-gray-300 mb-4 space-y-2 ml-4" {...props} />
  ),
  li: (props: any) => (
    <li className="ml-4" {...props} />
  ),
  strong: (props: any) => (
    <strong className="font-bold text-white" {...props} />
  ),
  em: (props: any) => (
    <em className="italic text-gray-200" {...props} />
  ),
  a: (props: any) => (
    <a className="text-primary-orange hover:text-orange-400 underline transition-colors" {...props} />
  ),
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-primary-orange pl-4 italic text-gray-400 my-4" {...props} />
  ),
  code: (props: any) => (
    <code className="bg-gray-800 text-primary-orange px-2 py-1 rounded text-sm" {...props} />
  ),
  pre: (props: any) => (
    <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto mb-4" {...props} />
  ),
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}


export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug)

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
  const post = getBlogPostBySlug(params.slug)

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
          <div className="prose prose-invert max-w-none">
            <MDXRemote source={post.content} components={components} />
          </div>
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
