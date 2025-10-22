'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { 
      number: '25+', 
      label: 'Años de Experiencia', 
      icon: (
        <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    },
    { 
      number: '500+', 
      label: 'Proyectos Completados', 
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    { 
      number: '50+', 
      label: 'Clientes Satisfechos', 
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    { 
      number: '87%', 
      label: 'Ahorro Energético Promedio', 
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
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

          <p className="text-premium-products text-center max-w-3xl mx-auto">
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
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-gradient-primary mb-2">{stat.number}</div>
                <div className="text-steel font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Mission & Values Preview */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="lg:col-span-1"
          >
            <div className="card-premium p-0 overflow-hidden h-full">
              <div className="relative h-80 lg:h-full">
                <Image 
                  src="/images/breezair-3.jpg"
                  alt="CG International - Breezair Industrial Installation"
                  width={400}
                  height={600}
                  className="w-full object-fill h-full blur-[3px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                <div className="bg-black/20 max-w-full rounded-lg absolute bottom-6 left-6 text-white">
                  <h4 className="text-xl font-bold p-1 mb-2">25 Años de Excelencia</h4>
                  <p className="text-white/90 text-sm p-1">Liderando la industria desde 1999</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="lg:col-span-1"
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

          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="lg:col-span-1"
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
              
              <p className=" text-black/90 mb-8 max-w-3xl mx-auto">
                Descubre cómo hemos evolucionado durante 25 años, conoce a nuestro equipo 
                y explora los casos de éxito que nos han convertido en líderes del mercado.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  { 
                    icon: (
                      <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    ), 
                    title: 'Certificaciones', 
                    desc: 'ISO 9001, ENERGY STAR Partner'
                  },
                  { 
                    icon: (
                      <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ), 
                    title: 'Equipo Experto', 
                    desc: '30+ años de experiencia promedio'
                  },
                  { 
                    icon: (
                      <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    ), 
                    title: 'Casos de Éxito', 
                    desc: 'Proyectos documentados con ROI'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="text-center">
                    <div className="flex justify-center mb-3">{item.icon}</div>
                    <h4 className="font-semibold text-lg text-black mb-2">{item.title}</h4>
                    <p className="text-black/80 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/nosotros" 
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-semibold text-white border-2 border-white bg-transparent hover:bg-white hover:text-gray-800 transition-all duration-300"
                  style={{
                    borderColor: 'gray',
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    color: 'black'
                  }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Conocer Nuestra Historia
                </Link>
                
                <Link 
                  href="#contacto" 
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300"
                >
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