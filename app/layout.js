import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: {
    default: 'Breezair Industrial México | Enfriamiento Evaporativo Industrial',
    template: '%s | Breezair Industrial México'
  },
  description: 'Líderes en soluciones de enfriamiento evaporativo industrial en México. Ahorro energético hasta 87%, aire 100% exterior filtrado. CG International distribuidor oficial.',
  keywords: [
    'enfriamiento evaporativo industrial',
    'Breezair México',
    'ahorro energético industrial',
    'climatización industrial',
    'CG International',
    'aire acondicionado industrial',
    'naves industriales',
    'eficiencia energética'
  ],
  authors: [{ name: 'CG International' }],
  creator: 'CG International',
  publisher: 'CG International',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://breezair-industrial.mx',
    title: 'Breezair Industrial México | Enfriamiento Evaporativo Industrial',
    description: 'Líderes en soluciones de enfriamiento evaporativo industrial en México. Ahorro energético hasta 87%, aire 100% exterior filtrado.',
    siteName: 'Breezair Industrial México',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Breezair Industrial México - Soluciones de Enfriamiento Evaporativo'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Breezair Industrial México | Enfriamiento Evaporativo Industrial',
    description: 'Líderes en soluciones de enfriamiento evaporativo industrial en México. Ahorro energético hasta 87%.',
    images: ['/images/og-image.jpg']
  },
  alternates: {
    canonical: 'https://breezair-industrial.mx'
  },
  verification: {
    google: 'your-google-verification-code'
  }
}

export default function RootLayout({ children }){
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans` }>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
