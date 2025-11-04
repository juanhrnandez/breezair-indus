import Hero from '../components/Hero'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import ProductsPreview from '../components/ProductsPreview'
import AboutPreview from '../components/AboutPreview'
import ContactPreview from '../components/ContactPreview'

export const metadata = {
  title: 'Breezair México | Soluciones de Enfriamiento Industrial',
  description: 'Breezair Industrial México: Líderes en enfriamiento evaporativo industrial. Ahorro energético hasta 87%, aire 100% exterior filtrado para naves industriales.',
  keywords: [
    'enfriamiento evaporativo',
    'climatización industrial',
    'Breezair México',
    'ahorro energético industrial',
    'sistemas de refrigeración industrial',
    'naves industriales climatización'
  ],
  openGraph: {
    title: 'Breezair Industrial México | Soluciones de Enfriamiento Evaporativo',
    description: 'Líderes en enfriamiento evaporativo industrial. Ahorro energético hasta 87%, aire 100% exterior filtrado.',
    url: 'https://www.breezair.com.mx',
    type: 'website',
    images: [
      {
        url: '/images/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Soluciones Breezair para enfriamiento industrial',
        type: 'image/jpeg'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Breezair Industrial México | Soluciones de Enfriamiento Evaporativo',
    description: 'Líderes en enfriamiento evaporativo industrial. Ahorro energético hasta 87%.',
    images: ['/images/og-home.jpg']
  },
  alternates: {
    canonical: 'https://www.breezair.com.mx'
  }
}

const products = [
  {
    id: 'tbsi-series',
    title: 'Breezair TBSI',
    summary: 'Unidad robusta para grandes instalaciones industriales con máxima eficiencia energética.',
    series: 'TBSI',
    badge: 'MÁS VENDIDO',
    slug: 'tbsi-series',
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
    id: 'exs-series',
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
    id: 'icon-series',
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

export default function Home() {
  // Datos estructurados mejorados para la organización
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "name": "Breezair Industrial México",
    "legalName": "CG International México",
    "url": "https://www.breezair.com.mx",
    "logo": "https://www.breezair.com.mx/images/logo.png",
    "image": "https://www.breezair.com.mx/images/company-photo.jpg",
    "description": "Distribuidor oficial de Breezair en México. Líderes en soluciones de enfriamiento evaporativo industrial con más de 10 años de experiencia.",
    "foundingDate": "2010",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "MX",
      "addressRegion": "México"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+52-800-BREEZAIR",
        "contactType": "sales",
        "availableLanguage": ["Spanish"],
        "areaServed": "MX"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+52-800-BREEZAIR",
        "contactType": "customer service",
        "availableLanguage": ["Spanish"],
        "areaServed": "MX"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/breezair.mx",
      "https://www.linkedin.com/company/breezair-mexico",
      "https://www.instagram.com/breezair_mx"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Sistemas de Enfriamiento Evaporativo",
      "itemListElement": products.map(product => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": product.title,
          "description": product.summary,
          "category": "Equipos de Climatización Industrial"
        }
      }))
    }
  }

  // Datos estructurados del sitio web con breadcrumb
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Breezair Industrial México",
    "alternateName": "Breezair MX",
    "url": "https://www.breezair.com.mx",
    "description": "Soluciones de enfriamiento evaporativo industrial con ahorro energético hasta 87%",
    "inLanguage": "es-MX",
    "publisher": {
      "@type": "Organization",
      "name": "CG International México"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.breezair.com.mx/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }

  // Datos estructurados de productos con especificaciones técnicas
  const productListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Productos Breezair Industrial",
    "description": "Línea completa de sistemas de enfriamiento evaporativo industrial",
    "numberOfItems": products.length,
    "itemListElement": products.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": product.title,
        "description": product.summary,
        "category": "Equipos de Climatización Industrial",
        "brand": {
          "@type": "Brand",
          "name": "Breezair"
        },
        "manufacturer": {
          "@type": "Organization",
          "name": "CG International"
        },
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "Capacidad",
            "value": product.specs.capacity
          },
          {
            "@type": "PropertyValue",
            "name": "Eficiencia Energética",
            "value": product.specs.efficiency
          }
        ],
        "url": `https://www.breezair.com.mx/productos/${product.slug}`
      }
    }))
  }

  // FAQ Schema para mejorar el SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Qué es el enfriamiento evaporativo industrial?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El enfriamiento evaporativo industrial es un sistema de climatización que utiliza la evaporación del agua para reducir la temperatura del aire, ofreciendo hasta 87% de ahorro energético comparado con sistemas tradicionales."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuáles son los beneficios de Breezair?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Los sistemas Breezair ofrecen ahorro energético hasta 87%, aire 100% exterior filtrado, bajo costo de mantenimiento y son ideales para naves industriales y espacios de gran volumen."
        }
      }
    ]
  }

  return (
    <div>
      {/* Structured Data optimizado */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productListSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
      
      <Hero />
      <Features />
      <ProductsPreview products={products} />
      <AboutPreview />
      <Testimonials />
      <ContactPreview />
    </div>
  )
}

