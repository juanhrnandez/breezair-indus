import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts } from '../../lib/posts'
import StructuredData from '../../components/StructuredData'

// Configuración de rendering y caching
export const revalidate = 3600; // ISR - Revalidar cada hora
export const dynamic = 'force-static'; // Forzar generación estática cuando sea posible

export const metadata = {
  title: 'Blog - Breezair Industrial México | Artículos sobre Enfriamiento Evaporativo',
  description: 'Artículos técnicos, guías especializadas y actualizaciones de la industria sobre sistemas de enfriamiento evaporativo industrial. Aprende sobre eficiencia energética, mantenimiento y mejores prácticas.',
  openGraph: {
    title: 'Blog Técnico | Breezair Industrial México',
    description: 'Conocimiento especializado en enfriamiento evaporativo industrial. Artículos técnicos, casos de éxito y tendencias de la industria.',
    url: 'https://www.breezair.com.mx/blog',
    images: [
      {
        url: '/images/og-blog.jpg',
        width: 1200,
        height: 630,
        alt: 'Blog Técnico Breezair Industrial'
      }
    ]
  },
  alternates: {
    canonical: 'https://www.breezair.com.mx/blog'
  }
}

export default function Blog(){
  const posts = getAllPosts()
  
  // Estadísticas del blog
  const uniqueCategories = [...new Set(posts.map(post => post.category))].filter(Boolean)
  const stats = {
    totalArticles: posts.length,
    categories: uniqueCategories.length > 0 ? uniqueCategories : ['Eficiencia Energética', 'Mantenimiento', 'Casos de Éxito', 'Tecnología'],
    lastUpdated: posts.length > 0 ? posts[0].date : '2024-11-01'
  }

  // Structured Data para el blog
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog Técnico Breezair Industrial",
    "description": "Artículos técnicos y guías especializadas sobre sistemas de enfriamiento evaporativo industrial",
    "url": "https://www.breezair.com.mx/blog",
    "publisher": {
      "@type": "Organization",
      "name": "CG International",
      "url": "https://www.breezair.com.mx"
    },
    "mainEntity": posts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.summary,
      "url": `https://www.breezair.com.mx/blog/${post.slug}`,
      "datePublished": post.date || stats.lastUpdated
    }))
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
      }
    ]
  }

  return (
    <div>
      <StructuredData data={blogSchema} />
      <StructuredData data={breadcrumbSchema} />

      {/* Hero Section del Blog */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-20 md:pt-24">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 py-16 lg:py-20 relative">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-white border border-blue-200 rounded-full px-6 py-3 mb-8 shadow-sm">
              <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold tracking-wide text-gray-700">CONOCIMIENTO TÉCNICO</span>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              <span className="text-xs text-gray-500 font-medium">ACTUALIZADO REGULARMENTE</span>
            </div>

            {/* Título principal */}
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Blog Técnico
              <span className="block text-blue-600">Breezair Industrial</span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
              Conocimiento especializado, artículos técnicos y las últimas tendencias en sistemas de 
              enfriamiento evaporativo industrial. Contenido creado por ingenieros expertos para 
              profesionales de la industria.
            </p>

            {/* Estadísticas */}
            <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              {[
                { 
                  icon: <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>, 
                  title: `${stats.totalArticles} Artículos`, 
                  desc: 'Contenido técnico especializado' 
                },
                { 
                  icon: <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>, 
                  title: `${stats.categories.length} Categorías`, 
                  desc: 'Temas especializados cubiertos' 
                },
                { 
                  icon: <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, 
                  title: 'Actualizado Semanalmente', 
                  desc: 'Contenido fresco y relevante' 
                }
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categorías de contenido */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              <span>Categorías:</span>
            </div>
            {stats.categories.map((category, idx) => (
              <span 
                key={idx}
                className="inline-flex items-center px-4 py-2 border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-blue-300 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Lista de artículos mejorada */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {posts.length > 0 ? (
              <div className="grid lg:grid-cols-3 gap-8">
                {posts.map((post, index) => (
                  <article 
                    key={post.slug} 
                    className="group bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl hover:border-blue-200 transition-all duration-300 overflow-hidden"
                  >
                    {/* Imagen destacada del artículo */}
                    <div className="relative aspect-video bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-16 h-16 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      {/* Badge de artículo destacado */}
                      {index === 0 && (
                        <div className="absolute top-4 left-4 inline-flex items-center px-3 py-1 border border-blue-600 text-blue-600 rounded-full text-xs font-semibold bg-white">
                          DESTACADO
                        </div>
                      )}
                    </div>

                    {/* Contenido del artículo */}
                    <div className="p-6 space-y-4">
                      <div className="space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 leading-tight">
                          <Link href={`/blog/${post.slug}`} className="block">
                            {post.title}
                          </Link>
                        </h3>
                        <p className="text-gray-600 leading-relaxed line-clamp-3">
                          {post.summary}
                        </p>
                      </div>

                      {/* Categoría y tiempo de lectura */}
                      <div className="flex items-center gap-3 mb-3">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                          {post.category || 'Técnico'}
                        </span>
                        {post.readTime && (
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{post.readTime}</span>
                          </div>
                        )}
                      </div>

                      {/* Metadata del artículo */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>{new Date(post.date).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                          </div>
                          {post.author && (
                            <div className="flex items-center gap-2 text-xs text-gray-400">
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                              <span>Por {post.author}</span>
                            </div>
                          )}
                        </div>
                        <Link 
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-200"
                        >
                          Leer más
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="max-w-md mx-auto">
                  <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Contenido en desarrollo</h3>
                  <p className="text-gray-600 mb-6">
                    Estamos preparando artículos técnicos especializados para compartir contigo. 
                    Pronto tendrás acceso a guías detalladas y casos de éxito.
                  </p>
                  <Link 
                    href="/contacto"
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-xl font-semibold transition-all duration-300"
                  >
                    Contáctanos para más información
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter y CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Mantente Actualizado
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Recibe los últimos artículos técnicos, guías de mejores prácticas y actualizaciones 
              de la industria directamente en tu correo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-8">
              <input 
                type="email" 
                placeholder="tu-email@empresa.com"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200 whitespace-nowrap">
                Suscribirse
              </button>
            </div>
            
            <p className="text-sm text-gray-500">
              Sin spam. Solo contenido técnico de valor. Cancela cuando quieras.
            </p>
          </div>
        </div>
      </section>

      {/* CTA de contacto técnico */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            ¿Necesitas Asesoramiento Técnico Personalizado?
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Nuestros ingenieros especialistas están disponibles para consultas técnicas específicas 
            sobre sistemas de enfriamiento evaporativo industrial.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://api.whatsapp.com/send/?phone=5255591975333&text=Hola%2C+vengo+del+blog+de+breezair.com.mx+y+necesito+asesoramiento+t%C3%A9cnico.&type=phone_number&app_absent=0"
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
      </section>
    </div>
  )
}
