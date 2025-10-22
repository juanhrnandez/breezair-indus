import ContactSection from '@/components/ContactSection'
import StructuredData from '@/components/StructuredData'
import Image from 'next/image'

export const metadata = {
  title: 'Contacto - Breezair Industrial | Soluciones de Enfriamiento Evaporativo',
  description: 'Contacta a nuestros especialistas en enfriamiento evaporativo industrial. Asesoría técnica, cotizaciones y soporte post-venta. Respuesta garantizada en 24 horas.',
  keywords: [
    'contacto breezair',
    'cotización enfriamiento industrial',
    'asesoría técnica climatización',
    'soporte post-venta',
    'consultores enfriamiento evaporativo',
    'CG International contacto',
    'distribuidores breezair méxico'
  ],
  openGraph: {
    title: 'Contacto - Breezair Industrial',
    description: 'Contacta a nuestros especialistas para tu proyecto de enfriamiento industrial. Asesoría técnica especializada y respuesta en 24 horas.',
    url: 'https://breezair-industrial.com/contacto',
    siteName: 'Breezair Industrial',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: '/images/og-contacto.jpg',
        width: 1200,
        height: 630,
        alt: 'Contacto Breezair Industrial - Especialistas en Enfriamiento Evaporativo'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contacto - Breezair Industrial',
    description: 'Especialistas en enfriamiento evaporativo industrial. Contacta para asesoría técnica y cotizaciones.',
    images: ['/images/twitter-contacto.jpg']
  },
  alternates: {
    canonical: 'https://breezair-industrial.com/contacto'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
}

const contactStructuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contacto - Breezair Industrial",
  "description": "Página de contacto para solicitar información, cotizaciones y soporte técnico de sistemas de enfriamiento evaporativo industrial Breezair.",
  "url": "https://breezair-industrial.com/contacto",
  "mainEntity": {
    "@type": "Organization",
    "name": "CG International - Breezair Industrial",
    "url": "https://breezair-industrial.com",
    "logo": "https://breezair-industrial.com/images/logo-breezair.png",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+52-55-5555-5555",
        "contactType": "sales",
        "availableLanguage": ["Spanish", "English"],
        "areaServed": ["MX", "LatAm"],
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": "19.4326",
            "longitude": "-99.1332"
          },
          "geoRadius": "2000000"
        }
      },
      {
        "@type": "ContactPoint",
        "telephone": "+52-55-5555-5556",
        "contactType": "technical support",
        "availableLanguage": ["Spanish", "English"],
        "areaServed": ["MX", "LatAm"]
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ciudad de México",
      "addressRegion": "CDMX",
      "addressCountry": "MX"
    },
    "email": "ventas@cg.international",
    "foundingDate": "2008",
    "numberOfEmployees": "50-100",
    "industry": "Industrial HVAC Systems",
    "slogan": "Líderes en Enfriamiento Evaporativo Industrial"
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://breezair-industrial.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contacto",
        "item": "https://breezair-industrial.com/contacto"
      }
    ]
  },
  "potentialAction": {
    "@type": "ContactAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://breezair-industrial.com/contacto#formulario",
      "inLanguage": "es-MX",
      "actionPlatform": [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform"
      ]
    },
    "result": {
      "@type": "Thing",
      "name": "Respuesta técnica especializada"
    }
  }
}

export default function ContactoPage() {
  return (
    <>
      <StructuredData data={contactStructuredData} />
      
      {/* Hero Header */}
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-24 pt-20 overflow-hidden">
        {/* Imagen principal de fondo */}
        <div className="absolute inset-0">
          <Image 
            src="/images/breezair-1.jpg"
            alt="Contacto Breezair Industrial - Sistemas de enfriamiento evaporativo"
            fill
            className="object-cover"
            style={{ filter: 'blur(1px)' }}
            priority
          />
          {/* Overlay gris */}
          <div className="absolute inset-0 bg-gray-800/70"></div>
        </div>
        
        <div className="container-premium relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 glass-effect rounded-full px-6 py-3 mb-8 border border-white/20">
              <div className="w-3 h-3 bg-white rounded-full pulse-glow"></div>
              <span className="text-sm font-semibold tracking-wide">CONTACTO ESPECIALIZADO</span>
              <div className="w-1 h-1 bg-white/40 rounded-full"></div>
              <span className="text-xs font-medium opacity-80">RESPUESTA EN 24H</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Hablemos de tu
              <span className="block bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                Proyecto Industrial
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Nuestro equipo de especialistas está listo para analizar tu proyecto y ofrecerte 
              la solución de enfriamiento más eficiente y sustentable para tu industria.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <ContactSection />

      {/* Additional CTA Section */}
      <div className="bg-gradient-to-r from-blue-50 to-slate-50 py-20">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              ¿Listo para optimizar tu climatización industrial?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Únete a más de 500 empresas que ya confían en nuestras soluciones Breezair
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+525555555555" 
                className="btn-premium btn-premium-primary btn-premium-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Llamar Ahora
              </a>
              <a 
                href="/productos" 
                className="btn-premium btn-premium-primary btn-premium-lg text-slate-700 border-slate-300 hover:bg-slate-700 hover:text-white"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
                </svg>
                Ver Productos
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
