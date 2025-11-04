import { getPostBySlug, getAllPosts } from '../../../lib/posts'
import { notFound } from 'next/navigation'

// Generar metadata dinámico para cada post
export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Artículo no encontrado',
      description: 'El artículo que buscas no existe'
    }
  }

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: 'article',
      publishedTime: post.date,
      authors: ['CG International'],
      section: 'Industrial HVAC',
      tags: ['enfriamiento industrial', 'Breezair', 'eficiencia energética'],
      images: [
        {
          url: `/images/blog/${post.slug}.jpg`,
          width: 1200,
          height: 630,
          alt: post.title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images: [`/images/blog/${post.slug}.jpg`]
    },
    alternates: {
      canonical: `https://www.breezair.com.mx/blog/${post.slug}`
    }
  }
}

// Generar parámetros estáticos para pre-renderizado
export function generateStaticParams() {
  const posts = getAllPosts()
  
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function Post({ params }) {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    notFound()
  }

  return (
    <article className="section">
      <div className="container-wide">
        {/* JSON-LD para artículo */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": post.title,
              "description": post.summary,
              "image": `https://www.breezair.com.mx/images/blog/${post.slug}.jpg`,
              "author": {
                "@type": "Organization",
                "name": "CG International"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Breezair Industrial México",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.breezair.com.mx/images/logo.png"
                }
              },
              "datePublished": post.date,
              "dateModified": post.date,
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://www.breezair.com.mx/blog/${post.slug}`
              }
            })
          }}
        />
        
        <header className="mb-8">
          <h1 className="heading-1">{post.title}</h1>
          <time className="muted" dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('es-MX', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </header>
        
        <div className="mt-6 bg-white p-6 rounded prose max-w-none">
          {post.content}
        </div>
      </div>
    </article>
  )
}
