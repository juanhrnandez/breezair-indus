'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

export default function AboutPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { number: '25+', label: 'Años de Experiencia', icon: '🏆' },
    { number: '500+', label: 'Proyectos Completados', icon: '🏭' },
    { number: '50+', label: 'Clientes Satisfechos', icon: '🤝' },
    { number: '87%', label: 'Ahorro Energético Promedio', icon: '⚡' }
  ];

  return (
    <section 
      className="section-premium relative overflow-hidden bg-gray-50"
      ref={ref}
    >
      {/* Background Premium Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-steel opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-primary opacity-10 rounded-full blur-3xl"></div>
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
            <span className="text-sm font-semibold text-steel tracking-wide">CG INTERNATIONAL</span>
            <div className="w-1 h-1 bg-steel/40 rounded-full"></div>
            <span className="text-xs text-steel/60 font-medium">DISTRIBUIDORES OFICIALES</span>
          </div>

          <h2 className="heading-premium-2 max-w-4xl mx-auto mb-6">
            Líderes en
            <span className="text-gradient-premium"> Enfriamiento Evaporativo Industrial</span>
          </h2>

          <p className="text-premium-large text-center max-w-3xl mx-auto">
            Desde 1999, somos el distribuidor oficial de Breezair en México, 
            transformando la industria con soluciones sustentables y eficientes.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="card-premium p-8 hover-float">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-gradient-primary mb-2">{stat.number}</div>
                <div className="text-steel font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Mission & Values Preview */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="card-premium p-10 h-full">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="heading-premium-3 text-steel-dark">Nuestra Misión</h3>
              </div>
              <p className="text-premium-body text-steel-light leading-relaxed">
                Proporcionar soluciones de enfriamiento evaporativo de clase mundial que maximicen 
                la eficiencia energética y reduzcan significativamente los costos operativos en 
                aplicaciones industriales.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="card-premium p-10 h-full">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-steel rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="heading-premium-3 text-steel-dark">Por Qué Elegirnos</h3>
              </div>
              <div className="space-y-3">
                {[
                  'Distribuidores oficiales certificados desde 1999',
                  'Más de 500 proyectos industriales completados',
                  'Soporte técnico especializado 24/7',
                  'ROI demostrable en cada proyecto'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span className="text-premium-body text-steel-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center"
        >
          <div className="card-premium p-12 max-w-4xl mx-auto relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-steel opacity-95 rounded-3xl"></div>
            
            {/* Content */}
            <div className="relative z-10 text-white">
              <h3 className="heading-premium-3 text-white mb-6">
                ¿Quieres Conocer Nuestra Historia Completa?
              </h3>
              
              <p className="text-premium-large text-white/90 mb-8 max-w-3xl mx-auto">
                Descubre cómo hemos evolucionado durante 25 años, conoce a nuestro equipo 
                y explora los casos de éxito que nos han convertido en líderes del mercado.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  { 
                    icon: '🏆', 
                    title: 'Certificaciones', 
                    desc: 'ISO 9001, ENERGY STAR Partner'
                  },
                  { 
                    icon: '🔧', 
                    title: 'Equipo Experto', 
                    desc: '30+ años de experiencia promedio'
                  },
                  { 
                    icon: '📊', 
                    title: 'Casos de Éxito', 
                    desc: 'Proyectos documentados con ROI'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h4 className="font-semibold text-lg text-white mb-2">{item.title}</h4>
                    <p className="text-white/80 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/nosotros" className="btn-premium btn-premium-outline btn-premium-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Conocer Nuestra Historia
                </Link>
                
                <Link href="#contacto" className="btn-premium btn-premium-primary btn-premium-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Agendar Reunión
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}