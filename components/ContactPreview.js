'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const quickContactMethods = [
  {
    icon: (
      <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: 'Llamada Directa',
    description: 'Habla con un especialista',
    action: 'tel:+521(55)12281088',
    label: 'Llamar Ahora',
    highlight: 'Respuesta inmediata'
  },
  {
    icon: (
      <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Email Comercial',
    description: 'ventas@cg.international',
    action: 'mailto:ventas@cg.international',
    label: 'Enviar Email',
    highlight: 'Respuesta en 2 horas'
  },
  {
    icon: (
      <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Formulario Completo',
    description: 'Cotización personalizada',
    action: '/contacto',
    label: 'Completar Formulario',
    highlight: 'Análisis técnico detallado'
  }
]

const contactStats = [
  { number: '500+', label: 'Empresas Atendidas' },
  { number: '24h', label: 'Tiempo de Respuesta' },
  { number: '15+', label: 'Años de Experiencia' },
  { number: '98%', label: 'Satisfacción Cliente' }
]

export default function ContactPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <section 
      className="section-premium relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50"
      ref={ref}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-primary opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-steel opacity-10 rounded-full blur-2xl"></div>
       
        
        <div className="absolute bottom-32 right-16 w-36 h-28 rounded-xl overflow-hidden opacity-15">
          <Image 
            src="/images/breezair-2.jpg"
            alt="Technical Consultation"
            width={144}
            height={112}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Geometric Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, var(--color-primary) 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, var(--color-steel) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      <div className="container-premium relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 glass-effect rounded-full px-6 py-3 mb-8 border border-black/5">
            <div className="w-3 h-3 bg-gradient-steel rounded-full pulse-glow"></div>
            <span className="text-sm font-semibold text-steel tracking-wide">CONTACTO ESPECIALIZADO</span>
            <div className="w-1 h-1 bg-steel/40 rounded-full"></div>
            <span className="text-xs text-steel/60 font-medium">RESPUESTA EN 24H</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
            ¿Listo para
            <span className="block bg-gradient-to-r from-blue-600 to-slate-700 bg-clip-text text-transparent">
              Optimizar tu Climatización?
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Nuestro equipo de especialistas está listo para analizar tu proyecto y ofrecerte 
            la solución más eficiente para tu industria.
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {quickContactMethods.map((method, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card-premium p-8 text-center hover-float group"
            >
              <div className="flex justify-center mb-4">{method.icon}</div>
              
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                {method.title}
              </h3>
              
              <p className="text-slate-600 mb-4">
                {method.description}
              </p>
              
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  {method.highlight}
                </span>
              </div>

              {method.action.startsWith('/') ? (
                <Link 
                  href={method.action}
                  className="btn-premium btn-premium-primary w-full"
                >
                  {method.label}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              ) : (
                <a 
                  href={method.action}
                  className="btn-premium btn-premium-primary w-full"
                >
                  {method.label}
                  {method.action.startsWith('tel:') ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )}
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">
              Confía en Nuestra Experiencia
            </h3>
            <p className="text-slate-600">
              Números que respaldan nuestro compromiso con la excelencia
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {contactStats.map((stat, index) => (
              <motion.div
                key={index}
                variants={statVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: 0.8 + (index * 0.1) }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-slate-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-slate-600 mb-6">
            ¿Necesitas una consulta más detallada? Nuestro equipo técnico está listo para ayudarte.
          </p>
          
          <Link 
            href="/contacto"
            className="btn-premium btn-premium-steel btn-premium-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Formulario Completo de Contacto
          </Link>
        </motion.div>
      </div>
    </section>
  )
}