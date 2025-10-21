import Hero from '../components/Hero'
import Features from '../components/Features'
import ProductCard from '../components/ProductCard'
import Testimonials from '../components/Testimonials'
import StructuredData from '../components/StructuredData'
import ProductsPreview from '../components/ProductsPreview'
import AboutPreview from '../components/AboutPreview'
import ContactSection from '../components/ContactSection'

export const metadata = {
  title: 'Inicio',
  description: 'Breezair Industrial México: Líderes en enfriamiento evaporativo industrial. Ahorro energético hasta 87%, aire 100% exterior filtrado para naves industriales.',
  openGraph: {
    title: 'Breezair Industrial México | Soluciones de Enfriamiento Evaporativo',
    description: 'Líderes en enfriamiento evaporativo industrial. Ahorro energético hasta 87%, aire 100% exterior filtrado.',
    url: 'https://breezair-industrial.mx',
    images: [
      {
        url: '/images/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Soluciones Breezair para enfriamiento industrial'
      }
    ]
  }
}

const products = [
  {
    title: 'Breezair TBSI',
    summary: 'Unidad robusta para grandes instalaciones industriales con máxima eficiencia energética.',
    series: 'TBSI',
    badge: 'MÁS VENDIDO',
    slug: 'tbsi',
    features: [
      'Hasta 87% ahorro energético',
      'Capacidad 18,000-50,000 m³/h',
      'Control automático inteligente'
    ],
    specs: {
      capacity: '50,000 m³/h',
      efficiency: '87%'
    },
    priceRange: 'Consultar'
  },
  {
    title: 'Breezair EXS Series',
    summary: 'Eficiencia y adaptabilidad para procesos industriales exigentes y aplicaciones especializadas.',
    series: 'EXS',
    slug: 'exs-series',
    features: [
      'Diseño modular flexible',
      'Filtración HEPA opcional',
      'Resistente a ambientes corrosivos'
    ],
    specs: {
      capacity: '35,000 m³/h',
      efficiency: '82%'
    },
    priceRange: 'Consultar'
  },
  {
    title: 'Breezair Icon Series',
    summary: 'Diseño compacto con alto rendimiento, ideal para espacios industriales medianos.',
    series: 'ICON',
    badge: 'COMPACTO',
    slug: 'icon-series',
    features: [
      'Instalación simplificada',
      'Bajo mantenimiento',
      'Control remoto WiFi'
    ],
    specs: {
      capacity: '25,000 m³/h',
      efficiency: '78%'
    },
    priceRange: 'Consultar'
  }
]

export default function Home(){
  // Structured Data para la página principal
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CG International - Breezair Industrial México",
    "url": "https://breezair-industrial.mx",
    "logo": "https://breezair-industrial.mx/images/logo.svg",
    "description": "Distribuidores oficiales de Breezair en México. Especialistas en enfriamiento evaporativo industrial.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "MX",
      "addressLocality": "Ciudad de México"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+52-55-5555-5555",
      "contactType": "sales",
      "email": "ventas@cg.international"
    },
    "sameAs": [
      "https://www.cg.international/",
      "https://www.linkedin.com/company/cg-international"
    ]
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Breezair Industrial México",
    "url": "https://breezair-industrial.mx",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://breezair-industrial.mx/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Sistema de Enfriamiento Evaporativo Breezair Industrial",
    "description": "Sistemas de enfriamiento evaporativo industrial con hasta 87% de ahorro energético y 100% aire exterior filtrado.",
    "brand": {
      "@type": "Brand",
      "name": "Breezair"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "CG International"
    },
    "category": "Equipos de Climatización Industrial",
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Ahorro Energético",
        "value": "Hasta 87%"
      },
      {
        "@type": "PropertyValue", 
        "name": "Tipo de Aire",
        "value": "100% Exterior Filtrado"
      }
    ]
  }

  return (
    <div>
      <StructuredData data={organizationSchema} />
      <StructuredData data={websiteSchema} />
      <StructuredData data={productSchema} />
      
      <Hero />
      <Features />
      <ProductsPreview products={products} />
      <AboutPreview />
      <Testimonials />
      <ContactSection />
    </div>
  )
}
