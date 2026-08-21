import { getAllPosts } from '../lib/posts'
import { getSectorSlugs } from '../data/soluciones'
import { getTecnologiaSlugs } from '../data/tecnologia'
import { getZonaSlugs } from '../data/zonas'

export default function sitemap() {
  const baseUrl = 'https://www.breezair.com.mx'
  
  // Páginas estáticas
  const staticRoutes = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/nosotros/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/productos/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contacto/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/soluciones/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tecnologia/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/enfriamiento-evaporativo-vs-aire-acondicionado/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cobertura/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/aviso-de-privacidad/`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  // Páginas dinámicas del blog
  const posts = getAllPosts()
  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}/`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  // Páginas de productos dinámicas
  const products = [
    'tbsi-series',
    'exs-series', 
    'icon-series',
    'custom-solutions'
  ]
  
  const productRoutes = products.map((productId) => ({
    url: `${baseUrl}/productos/${productId}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // Páginas de solución por sector
  const sectorRoutes = getSectorSlugs().map((slug) => ({
    url: `${baseUrl}/soluciones/${slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.85,
  }))

  // Páginas de tecnología de marca
  const techRoutes = getTecnologiaSlugs().map((slug) => ({
    url: `${baseUrl}/tecnologia/${slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // Páginas de cobertura por zona climática
  const zonaRoutes = getZonaSlugs().map((slug) => ({
    url: `${baseUrl}/cobertura/${slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [...staticRoutes, ...sectorRoutes, ...techRoutes, ...zonaRoutes, ...blogRoutes, ...productRoutes]
}