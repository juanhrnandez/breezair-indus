'use client'
import Link from 'next/link'
import Image from 'next/image'
import Reveal from './Reveal'
import { EXPERIENCIA_TEXTO } from '@/lib/company'
import { PHONE_DISPLAY, TEL_LINK, EMAIL_SALES, MAILTO_LINK, whatsappLink, BUSINESS_HOURS } from '@/lib/site'
import { trackContactClick } from '@/lib/analytics'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  // Todos los enlaces apuntan a páginas o secciones que existen: un enlace que
  // no lleva a ningún lado quema la confianza justo donde el usuario busca contacto.
  const footerSections = {
    company: {
      title: 'CG International',
      links: [
        { name: 'Nosotros', href: '/nosotros' },
        { name: 'Blog técnico', href: '/blog' },
        { name: 'Contacto', href: '/contacto' }
      ]
    },
    products: {
      title: 'Productos',
      links: [
        { name: 'Todos los productos', href: '/productos' },
        { name: 'Breezair TBSI', href: '/productos/tbsi-series' },
        { name: 'Breezair EXS', href: '/productos/exs-series' },
        { name: 'Breezair Icon', href: '/productos/icon-series' },
        { name: 'Soluciones a medida', href: '/productos/custom-solutions' }
      ]
    },
    solutions: {
      title: 'Soluciones',
      links: [
        { name: 'Todas las soluciones', href: '/soluciones' },
        { name: 'Naves industriales', href: '/soluciones/naves-industriales' },
        { name: 'Centros de distribución', href: '/soluciones/centros-de-distribucion' },
        { name: 'Industria alimentaria', href: '/soluciones/industria-alimentaria' },
        { name: 'Talleres y metalmecánica', href: '/soluciones/talleres-y-metalmecanica' },
        { name: 'Agroindustria', href: '/soluciones/agroindustria' },
        { name: 'Espacios comerciales', href: '/soluciones/espacios-comerciales' }
      ]
    },
    services: {
      title: 'Servicios',
      links: [
        { name: 'Solicitar cotización', href: '/contacto#cotizar' },
        { name: 'Calculadora de ahorro', href: '/#calculadora' },
        { name: 'Asesoría técnica', href: '/contacto' },
        { name: 'Soporte post-venta', href: '/contacto' }
      ]
    },
    technology: {
      title: 'Tecnología',
      links: [
        { name: 'Tecnología Breezair', href: '/tecnologia' },
        { name: 'Paneles Chillcel®', href: '/tecnologia/chillcel-black-opal' },
        { name: 'WaterManager™', href: '/tecnologia/watermanager' },
        { name: 'MagIQtouch™', href: '/tecnologia/magiqtouch' },
        { name: 'Gabinete Prematuf™', href: '/tecnologia/prematuf' }
      ]
    },
    coverage: {
      title: 'Cobertura',
      links: [
        { name: 'Cobertura nacional', href: '/cobertura' },
        { name: 'El Bajío', href: '/cobertura/bajio' },
        { name: 'Monterrey y noreste', href: '/cobertura/monterrey-y-noreste' },
        { name: 'Frontera norte', href: '/cobertura/frontera-norte' },
        { name: 'Centro y occidente', href: '/cobertura/centro-y-occidente' },
        { name: 'Sureste y Golfo', href: '/cobertura/sureste-y-golfo' }
      ]
    },
    resources: {
      title: 'Recursos',
      links: [
        { name: 'Evaporativo vs aire acondicionado', href: '/enfriamiento-evaporativo-vs-aire-acondicionado' },
        { name: 'Blog técnico', href: '/blog' },
        { name: 'Eficiencia energética', href: '/blog/eficiencia-energetica-breezair-mexico-2024' },
        { name: 'Guía de mantenimiento', href: '/blog/guia-mantenimiento-sistemas-breezair-mexico' },
        { name: 'Caso de éxito', href: '/blog/caso-exito-walmart-mexico-breezair-enfriamiento-evaporativo' }
      ]
    }
  }

  return (
    <footer className="bg-[#0A121C] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="relative">
        {/* Banda de conversión: última oportunidad antes de que se vayan */}
        <div className="border-b border-white/10 bg-white/[0.04]">
          <div className="container mx-auto flex flex-col items-center gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:justify-between lg:px-8">
            <div className="text-center lg:text-left">
              <p className="text-xl font-bold text-white">¿Listo para bajar tu recibo de luz?</p>
              <p className="mt-1 text-sm text-slate-300">
                Cotización sin costo · {BUSINESS_HOURS}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink('Hola, quiero información sobre enfriamiento evaporativo Breezair para mi empresa.')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackContactClick('whatsapp', 'footer')}
                className="btn-premium bg-[#25D366] text-white hover:opacity-90"
              >
                Escribir por WhatsApp
              </a>
              <Link
                href="/contacto#cotizar"
                onClick={() => trackContactClick('form', 'footer')}
                className="btn-premium btn-premium-primary"
              >
                Solicitar cotización
              </Link>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 lg:gap-6">
            {/* Company Info */}
            <div className="md:col-span-2 lg:col-span-2">
              <Reveal >
                {/* Logo */}
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    src="/images/breezair-logo-2.png"
                    alt="Breezair"
                    width={236}
                    height={96}
                    className="h-16 w-auto object-contain"
                  />
                  
                </div>

                <p className="text-slate-300 mb-6 leading-relaxed text-sm lg:text-base">
                  Líderes en soluciones de enfriamiento evaporativo industrial para México y Latinoamérica. 
                  Más de {EXPERIENCIA_TEXTO.replace('+ años','')} años transformando espacios industriales con tecnología sustentable.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-slate-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"/>
                    </svg>
                    <a
                      href={MAILTO_LINK}
                      onClick={() => trackContactClick('email', 'footer')}
                      className="text-white hover:text-slate-400 transition-colors text-sm break-all"
                    >
                      {EMAIL_SALES}
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-slate-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    <a
                      href={TEL_LINK}
                      onClick={() => trackContactClick('phone', 'footer')}
                      className="text-white hover:text-slate-400 transition-colors text-sm"
                    >
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-slate-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 01-2.5-2.5 2.5 2.5 0 012.5-2.5 2.5 2.5 0 012.5 2.5 2.5 2.5 0 01-2.5 2.5z"/>
                    </svg>
                    <span className="text-white text-sm">Ciudad de México, México</span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Navigation Sections */}
            {Object.entries(footerSections).map(([key, section], index) => (
              <Reveal
                key={key}
                delay={index * 0.06}
                className="md:col-span-1 lg:col-span-1"
              >
                <h3 className="font-semibold text-lg mb-4 text-white border-b border-white/10 pb-2">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-slate-300 hover:text-white transition-colors text-sm flex items-start gap-2 group py-1"
                      >
                        <span className="w-1 h-1 bg-[#22B8D6] rounded-full group-hover:w-2 group-hover:bg-white transition-all mt-2 shrink-0"></span>
                        <span className="leading-relaxed">{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>

        

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-slate-400 text-sm text-center md:text-left">
                © {currentYear} CG International. Todos los derechos reservados.
              </div>

              {/* Legal Links */}
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Link href="/aviso-de-privacidad" className="text-slate-300 hover:text-white transition-colors">
                  Aviso de privacidad
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
