'use client'
import Link from 'next/link'
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
        { name: 'Breezair TBSI', href: '/productos/tbsi' },
        { name: 'Breezair EXS Series', href: '/productos/exs-series' },
        { name: 'Breezair Icon Series', href: '/productos/icon-series' },
        { name: 'Accesorios', href: '/productos#accesorios' }
      ]
    },
    services: {
      title: 'Servicios',
      links: [
        { name: 'Instalación', href: '/servicios/instalacion' },
        { name: 'Mantenimiento', href: '/servicios/mantenimiento' },
        { name: 'Soporte técnico', href: '/servicios/soporte' },
        { name: 'Consultoría', href: '/servicios/consultoria' }
      ]
    },
    resources: {
      title: 'Recursos',
      links: [
        { name: 'Blog técnico', href: '/blog' },
        { name: 'Manuales', href: '/recursos/manuales' },
        { name: 'Calculadora de ahorro', href: '/recursos/calculadora' },
        { name: 'Casos de éxito', href: '/recursos/casos-exito' }
      ]
    }
  }

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="container-wide py-16">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Logo */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">B</span>
                  </div>
                  <div>
                    <div className="font-bold text-xl text-white">Breezair Industrial</div>
                    <div className="text-sm text-white">Powered by CG International</div>
                  </div>
                </div>

                <p className="text-white mb-6 leading-relaxed">
                  Líderes en soluciones de enfriamiento evaporativo industrial para México y Latinoamérica. 
                  Más de 15 años transformando espacios industriales con tecnología sustentable.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"/>
                    </svg>
                    <a href="mailto:ventas@cg.international" className="text-white hover:text-blue-200 transition-colors">
                      ventas@cg.international
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    <a href="tel:+525555555555" className="text-white hover:text-blue-200 transition-colors">
                      +52 55 5555-5555
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 01-2.5-2.5 2.5 2.5 0 012.5-2.5 2.5 2.5 0 012.5 2.5 2.5 2.5 0 01-2.5 2.5z"/>
                    </svg>
                    <span className="text-white">Ciudad de México, México</span>
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
              >
                <h3 className="font-semibold text-lg mb-4 text-white">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-white hover:text-blue-200 transition-colors text-sm flex items-center gap-2 group"
                      >
                        <span className="w-1 h-1 bg-white rounded-full group-hover:w-2 transition-all"></span>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 pt-8 border-t border-white/20"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Mantente actualizado</h3>
                  <p className="text-white">
                    Recibe las últimas noticias sobre tecnología industrial y tips de eficiencia energética.
                  </p>
                </div>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="tu.email@empresa.com"
                    className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:border-white/40"
                  />
                  <button className="btn btn-primary">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20">
          <div className="container-wide py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-white text-sm">
                © {currentYear} CG International. Todos los derechos reservados.
              </div>
              
              {/* Social Links */}
              <div className="flex items-center gap-4">
                <span className="text-white text-sm">Síguenos:</span>
                <div className="flex gap-2">
                  <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="https://www.cg.international/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Legal Links */}
              <div className="flex gap-4 text-sm">
                <Link href="/legal/privacidad" className="text-white hover:text-blue-200 transition-colors">
                  Privacidad
                </Link>
                <Link href="/legal/terminos" className="text-white hover:text-blue-200 transition-colors">
                  Términos
                </Link>
                <Link href="/sitemap.xml" className="text-white hover:text-blue-200 transition-colors">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
