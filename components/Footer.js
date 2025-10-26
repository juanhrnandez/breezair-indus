'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = {
    company: {
      title: 'CG International',
      links: [
        { name: 'Nosotros', href: '/nosotros' },
        { name: 'Nuestra historia', href: '/nosotros#historia' },
        { name: 'Certificaciones', href: '/nosotros#certificaciones' },
        { name: 'Sustentabilidad', href: '/nosotros#sustentabilidad' }
      ]
    },
    products: {
      title: 'Productos',
      links: [
        { name: 'Productos Breezair', href: '/productos' },
        { name: 'Sistemas Industriales', href: '/productos#industriales' },
        { name: 'Climatización Comercial', href: '/productos#comercial' },
        { name: 'Accesorios', href: '/productos#accesorios' }
      ]
    },
    services: {
      title: 'Servicios',
      links: [
        { name: 'Contacto', href: '/contacto' },
        { name: 'Soporte técnico', href: '/contacto#soporte' },
        { name: 'Instalación', href: '/contacto#instalacion' },
        { name: 'Mantenimiento', href: '/contacto#mantenimiento' }
      ]
    },
    resources: {
      title: 'Recursos',
      links: [
        { name: 'Blog técnico', href: '/blog' },
        { name: 'Casos de éxito', href: '/nosotros#casos-exito' },
        { name: 'Descargas', href: '/productos#descargas' },
        { name: 'FAQ', href: '/contacto#faq' }
      ]
    }
  }

  return (
    <footer className="bg-linear-to-br from-blue-900 via-blue-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-6">
            {/* Company Info */}
            <div className="md:col-span-2 lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Logo */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-64 h-24 shrink-0">
                    <Image
                      src="/images/breezair-logo-2.png"
                      alt="Breezair Logo"
                      width={236}
                      height={96}
                      className="w-full h-full object-contain"
                      priority
                    />
                  </div>
                  
                </div>

                <p className="text-blue-100 mb-6 leading-relaxed text-sm lg:text-base">
                  Líderes en soluciones de enfriamiento evaporativo industrial para México y Latinoamérica. 
                  Más de 15 años transformando espacios industriales con tecnología sustentable.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-200 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"/>
                    </svg>
                    <a href="mailto:ventas@cg.international" className="text-white hover:text-blue-200 transition-colors text-sm break-all">
                      ventas@cg.international
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-200 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    <a href="tel:+5215512281088" className="text-white hover:text-blue-200 transition-colors text-sm">
                      +52 55 1228-1088
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-200 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 01-2.5-2.5 2.5 2.5 0 012.5-2.5 2.5 2.5 0 012.5 2.5 2.5 2.5 0 01-2.5 2.5z"/>
                    </svg>
                    <span className="text-white text-sm">Ciudad de México, México</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Navigation Sections */}
            {Object.entries(footerSections).map(([key, section], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="md:col-span-1 lg:col-span-1"
              >
                <h3 className="font-semibold text-lg mb-4 text-white border-b border-blue-700/30 pb-2">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-blue-100 hover:text-white transition-colors text-sm flex items-start gap-2 group py-1"
                      >
                        <span className="w-1 h-1 bg-blue-300 rounded-full group-hover:w-2 group-hover:bg-white transition-all mt-2 shrink-0"></span>
                        <span className="leading-relaxed">{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-blue-200 text-sm text-center md:text-left">
                © {currentYear} CG International. Todos los derechos reservados.
              </div>

              {/* Legal Links */}
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Link href="/contacto#privacidad" className="text-blue-100 hover:text-white transition-colors">
                  Privacidad
                </Link>
                <span className="text-blue-300">•</span>
                <Link href="/contacto#terminos" className="text-blue-100 hover:text-white transition-colors">
                  Términos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
