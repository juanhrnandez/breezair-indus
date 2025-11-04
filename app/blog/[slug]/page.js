import { getPostBySlug, getAllPosts } from '../../../lib/posts'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import StructuredData from '../../../components/StructuredData'

// Generar metadata dinámico para cada post
export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Artículo no encontrado | Breezair Industrial México',
      description: 'El artículo que buscas no existe o ha sido movido'
    }
  }

  return {
    title: post.seoTitle || `${post.title} | Blog Breezair Industrial México`,
    description: post.seoDescription || post.summary,
    keywords: post.tags?.join(', ') || 'breezair méxico, enfriamiento evaporativo, eficiencia energética',
    openGraph: {
      title: post.title,
      description: post.summary,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author || 'CG International'],
      section: post.category || 'Industrial HVAC',
      tags: post.tags || ['enfriamiento industrial', 'Breezair', 'eficiencia energética'],
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
  const allPosts = getAllPosts()
  
  if (!post) {
    notFound()
  }

  // Encontrar artículos relacionados (misma categoría o los más recientes)
  const relatedPosts = allPosts
    .filter(p => p.slug !== post.slug && (p.category === post.category || allPosts.length <= 3))
    .slice(0, 2)

  // Función auxiliar para renderizar texto con negritas
  const renderTextWithBold = (text) => {
    // Usar una expresión regular global para capturar TODOS los casos de **texto**
    const parts = text.split(/(\*\*[^*]+?\*\*)/g)
    return parts.map((part, partIndex) => {
      if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
        return (
          <strong key={partIndex} className="font-semibold text-gray-900">
            {part.slice(2, -2)} {/* Remover los ** del inicio y final */}
          </strong>
        )
      }
      return part
    })
  }

  // Función para renderizar el contenido con formato
  const renderContent = (content) => {
    if (!content) return null
    
    // Dividir el contenido en párrafos y títulos
    const sections = content.split('\n\n')
    
    return sections.map((section, index) => {
      // Si es un título H2
      if (section.startsWith('## ')) {
        return (
          <h2 key={index} className="text-2xl lg:text-3xl font-bold text-gray-900 mt-12 mb-6 first:mt-0">
            {section.replace('## ', '')}
          </h2>
        )
      }
      
      // Si es un título H3
      if (section.startsWith('### ')) {
        return (
          <h3 key={index} className="text-xl lg:text-2xl font-bold text-gray-900 mt-8 mb-4">
            {section.replace('### ', '')}
          </h3>
        )
      }
      
      // Si es un título H4
      if (section.startsWith('#### ')) {
        return (
          <h4 key={index} className="text-lg lg:text-xl font-semibold text-gray-900 mt-6 mb-3">
            {section.replace('#### ', '')}
          </h4>
        )
      }
      
      // Si es una lista con viñetas
      if (section.includes('- ') && section.split('\n').some(line => line.trim().startsWith('- '))) {
        const listItems = section.split('\n').filter(item => item.trim().startsWith('- '))
        return (
          <ul key={index} className="space-y-3 mb-6">
            {listItems.map((item, itemIndex) => {
              const itemText = item.replace('- ', '')
              
              return (
                <li key={itemIndex} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 leading-relaxed">
                    {renderTextWithBold(itemText)}
                  </span>
                </li>
              )
            })}
          </ul>
        )
      }
      
      // Si es una lista numerada
      if (/^\d+\./.test(section) && section.split('\n').some(line => /^\d+\./.test(line.trim()))) {
        const listItems = section.split('\n').filter(item => /^\d+\./.test(item.trim()))
        return (
          <ol key={index} className="space-y-3 mb-6">
            {listItems.map((item, itemIndex) => {
              const itemText = item.replace(/^\d+\.\s*/, '')
              
              return (
                <li key={itemIndex} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                    {itemIndex + 1}
                  </div>
                  <span className="text-gray-700 leading-relaxed">
                    {renderTextWithBold(itemText)}
                  </span>
                </li>
              )
            })}
          </ol>
        )
      }
      
      // Si contiene texto en negrita (debe ir DESPUÉS de las listas para evitar conflictos)
      if (section.includes('**')) {
        return (
          <div key={index} className="text-gray-700 leading-relaxed mb-6">
            {renderTextWithBold(section)}
          </div>
        )
      }
      
      // Párrafo normal
      if (section.trim()) {
        return (
          <p key={index} className="text-gray-700 leading-relaxed mb-6">
            {section}
          </p>
        )
      }
      
      return null
    }).filter(Boolean)
  }

  // Structured Data para el artículo
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.summary,
    "image": `https://www.breezair.com.mx/images/blog/${post.slug}.jpg`,
    "author": {
      "@type": "Person",
      "name": post.author || "CG International"
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
    },
    "keywords": post.tags?.join(', '),
    "articleSection": post.category,
    "wordCount": post.content?.split(' ').length || 0
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://www.breezair.com.mx"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://www.breezair.com.mx/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://www.breezair.com.mx/blog/${post.slug}`
      }
    ]
  }

  return (
    <div>
      <StructuredData data={articleSchema} />
      <StructuredData data={breadcrumbSchema} />

      {/* Breadcrumb Navigation */}
      <section className="bg-white border-b border-gray-200 py-4 mt-20 md:mt-24">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link 
              href="/" 
              className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
            >
              Inicio
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link 
              href="/blog" 
              className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
            >
              Blog
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-900 font-medium truncate">{post.title}</span>
          </nav>
        </div>
      </section>

      {/* Artículo Principal */}
      <article className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header del Artículo */}
            <header className="mb-12">
              {/* Categoría y badges */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                {post.category && (
                  <span className="inline-flex items-center px-4 py-2 border border-blue-200 text-blue-700 rounded-full text-sm font-semibold bg-blue-50">
                    {post.category}
                  </span>
                )}
                {post.featured && (
                  <span className="inline-flex items-center px-3 py-1 border border-yellow-400 text-yellow-700 rounded-full text-xs font-semibold bg-yellow-50">
                    DESTACADO
                  </span>
                )}
                {post.readTime && (
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{post.readTime} de lectura</span>
                  </div>
                )}
              </div>

              {/* Título principal */}
              <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                {post.title}
              </h1>

              {/* Sumario */}
              {post.summary && (
                <p className="text-xl text-gray-600 leading-relaxed mb-8 border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 rounded-r-lg">
                  {post.summary}
                </p>
              )}

              {/* Metadata del autor y fecha */}
              <div className="flex flex-wrap items-center gap-6 py-6 border-t border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{post.author || 'CG International'}</div>
                    <div className="text-sm text-gray-500">Especialista en Enfriamiento Industrial</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-gray-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('es-MX', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>

                {/* Compartir en redes sociales */}
                <div className="flex items-center gap-3 ml-auto">
                  <span className="text-sm text-gray-500">Compartir:</span>
                  <a 
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://www.breezair.com.mx/blog/${post.slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-blue-600 transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a 
                    href={`https://api.whatsapp.com/send/?text=${encodeURIComponent(`${post.title} - ${`https://www.breezair.com.mx/blog/${post.slug}`}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-green-600 transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </a>
                </div>
              </div>
            </header>

            {/* Contenido del Artículo */}
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-800 leading-relaxed">
                {renderContent(post.content)}
              </div>
            </div>

            {/* Tags del artículo */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-medium text-gray-500">Etiquetas:</span>
                  {post.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </article>

      {/* CTA de contacto */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              ¿Te Interesa Implementar una Solución Breezair?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Nuestros ingenieros especialistas pueden realizar un análisis técnico gratuito 
              y diseñar la solución óptima para tu instalación industrial.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`https://api.whatsapp.com/send/?phone=5255591975333&text=Hola%2C+le%C3%AD+el+art%C3%ADculo+${encodeURIComponent(post.title)}+y+me+interesa+una+consulta+t%C3%A9cnica.&type=phone_number&app_absent=0`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-xl font-semibold transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Consulta por WhatsApp
              </a>
              <Link 
                href="/contacto" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-gray-400 text-gray-600 hover:border-gray-600 hover:text-gray-800 rounded-xl font-semibold transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contacto Directo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Artículos Relacionados */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Artículos Relacionados
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl hover:border-blue-200 transition-all duration-300 overflow-hidden"
                  >
                    <div className="relative aspect-video bg-gradient-to-br from-blue-50 to-blue-100">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-16 h-16 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                          {relatedPost.category}
                        </span>
                        {relatedPost.readTime && (
                          <span className="text-xs text-gray-500">{relatedPost.readTime}</span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 mb-3 leading-tight">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed line-clamp-3 mb-4">
                        {relatedPost.summary}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          {new Date(relatedPost.date).toLocaleDateString('es-MX')}
                        </span>
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
                          Leer más
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
