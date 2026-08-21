import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Analytics from '../components/Analytics'
import FloatingCTA from '../components/FloatingCTA'
import { Barlow, Barlow_Condensed, IBM_Plex_Mono } from 'next/font/google'

/* Barlow nace de la señalética industrial y vehicular: tiene el carácter
   técnico que pide una marca de equipo industrial, y su versión condensada
   da titulares con presencia sin gritar. El mono se reserva para datos. */
const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://www.breezair.com.mx'),
  title: {
    default: 'Breezair Industrial México | Enfriamiento Evaporativo Industrial',
    template: '%s | Breezair México'
  },
  description: 'Líderes en soluciones de enfriamiento evaporativo industrial en México. Ahorro energético hasta 87%, aire 100% exterior filtrado. CG International distribuidor oficial.',
  keywords: [
    'enfriamiento evaporativo industrial',
    'Breezair México',
    'ahorro energético industrial',
    'climatización industrial',
    'Breezair Industrial México',
    'aire acondicionado industrial',
    'naves industriales',
    'eficiencia energética',
    'sistemas de refrigeración',
    'climatización industrial México',
    'enfriamiento industrial sustentable'
  ],
  authors: [{ name: 'Breezair Industrial México', url: 'https://www.breezair.com.mx' }],
  creator: 'Breezair Industrial México',
  publisher: 'Breezair Industrial México',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://www.breezair.com.mx',
    title: 'Breezair Industrial México | Enfriamiento Evaporativo Industrial',
    description: 'Líderes en soluciones de enfriamiento evaporativo industrial en México. Ahorro energético hasta 87%, aire 100% exterior filtrado.',
    siteName: 'Breezair Industrial México',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Breezair Industrial México - Soluciones de Enfriamiento Evaporativo',
        type: 'image/jpeg'
      }
    ]
  },

  alternates: {
    canonical: 'https://www.breezair.com.mx/',
    languages: {
      'es-MX': 'https://www.breezair.com.mx',
    }
  },

  category: 'Industrial Equipment',
  classification: 'Business',
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="es-MX">
      <head>
        <meta name="theme-color" content="#1e40af" />
        <meta name="color-scheme" content="light" />
      </head>
      <body className={`${barlow.variable} ${barlowCondensed.variable} ${plexMono.variable} font-sans antialiased`}>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Breezair Industrial México",
              "url": "https://www.breezair.com.mx",
              "logo": "https://www.breezair.com.mx/images/logo.svg",
              "description": "Líderes en soluciones de enfriamiento evaporativo industrial en México",
              
              "sameAs": [
                "https://www.facebook.com/breezair.mx",
                "https://www.linkedin.com/company/breezair-mexico"
              ]
            })
          }}
        />
        <Analytics />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  )
}
