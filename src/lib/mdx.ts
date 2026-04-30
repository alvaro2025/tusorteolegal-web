import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const blogDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  date: string
  category: string
  readTime: string
  excerpt: string
  content: string
}

export interface BlogPostMetadata {
  slug: string
  title: string
  date: string
  category: string
  readTime: string
  excerpt: string
}

export function getAllBlogPosts(): BlogPostMetadata[] {
  try {
    const files = fs.readdirSync(blogDirectory)
    
    const posts = files
      .filter((file) => file.endsWith('.mdx'))
      .map((file) => {
        const filePath = path.join(blogDirectory, file)
        const fileContents = fs.readFileSync(filePath, 'utf8')
        const { data } = matter(fileContents)
        
        return {
          slug: file.replace('.mdx', ''),
          title: data.title,
          date: data.date,
          category: data.category,
          readTime: data.readTime,
          excerpt: data.excerpt,
        }
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    return posts
  } catch (error) {
    console.error('Error reading blog posts:', error)
    return []
  }
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const filePath = path.join(blogDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title,
      date: data.date,
      category: data.category,
      readTime: data.readTime,
      excerpt: data.excerpt,
      content,
    }
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error)
    return null
  }
}

export function getAllBlogSlugs(): string[] {
  try {
    const files = fs.readdirSync(blogDirectory)
    return files
      .filter((file) => file.endsWith('.mdx'))
      .map((file) => file.replace('.mdx', ''))
  } catch (error) {
    console.error('Error reading blog slugs:', error)
    return []
  }
}
