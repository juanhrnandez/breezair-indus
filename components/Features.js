'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    title: 'Eficiencia Energética Extrema',
    desc: 'Hasta 87% de ahorro energético comparado con sistemas tradicionales. Tecnología que reduce significativamente los costos operativos.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    stats: '87%',
    metric: 'Ahorro Energético',
    gradient: 'from-emerald-500 via-green-500 to-teal-600',
    bgGradient: 'from-emerald-50 to-green-50'
  },
  {
    title: 'Aire 100% Exterior Filtrado',
    desc: 'Renovación continua del aire con filtrado avanzado. Ambientes industriales más saludables y productivos para el personal.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    stats: '100%',
    metric: 'Aire Renovado',
    gradient: 'from-blue-500 via-cyan-500 to-sky-600',
    bgGradient: 'from-blue-50 to-cyan-50'
  },
  {
    title: 'Diseño Industrial Robusto',
    desc: 'Especialmente diseñado para naves industriales y grandes volúmenes. Operación continua 24/7 en condiciones exigentes.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    stats: '24/7',
    metric: 'Operación Continua',
    gradient: 'from-violet-500 via-purple-500 to-indigo-600',
    bgGradient: 'from-violet-50 to-purple-50'
  },
  {
    title: 'Tecnología Evaporativa Avanzada',
    desc: 'Proceso natural de enfriamiento por evaporación optimizado con tecnología de última generación para máximo rendimiento.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5v12s0 2 2 2 2-2 2-2V3z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 12s3-1 3-4-3-4-3-4-3 1-3 4 3 4 3 4z" />
      </svg>
    ),
    stats: 'ECO',
    metric: 'Sostenible',
    gradient: 'from-orange-500 via-amber-500 to-yellow-600',
    bgGradient: 'from-orange-50 to-amber-50'
  },
  {
    title: 'Control Inteligente',
    desc: 'Sistemas de control automático y monitoreo remoto. Optimización continua del rendimiento y mantenimiento predictivo.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    stats: 'IoT',
    metric: 'Smart Control',
    gradient: 'from-rose-500 via-pink-500 to-fuchsia-600',
    bgGradient: 'from-rose-50 to-pink-50'
  },
  {
    title: 'Instalación y Mantenimiento',
    desc: 'Servicio completo de instalación profesional y programa de mantenimiento preventivo para garantizar máximo rendimiento.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      </svg>
    ),
    stats: '365',
    metric: 'Días de Soporte',
    gradient: 'from-slate-500 via-gray-500 to-zinc-600',
    bgGradient: 'from-slate-50 to-gray-50'
  }
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section className="section-premium bg-white relative overflow-hidden">
      {/* Background Premium Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-primary opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-steel opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white opacity-10 rounded-full blur-2xl"></div>
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
            backgroundSize: '60px 60px'
          }}
        ></div>
      </div>

      <div className="container-premium relative z-10" ref={ref}>
        {/* Section Header Premium */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 glass-effect rounded-full px-6 py-3 mb-8 border border-black/5">
            <div className="w-3 h-3 bg-gradient-primary rounded-full pulse-glow"></div>
            <span className="text-sm font-semibold text-steel tracking-wide">VENTAJAS COMPETITIVAS</span>
            <div className="w-1 h-1 bg-steel/40 rounded-full"></div>
            <span className="text-xs text-steel/60 font-medium">BREEZAIR INDUSTRIAL</span>
          </div>

          <h2 className="heading-premium-2 max-w-4xl mx-auto mb-6">
            Tecnología Industrial de
            <span className="text-gradient-premium"> Vanguardia Global</span>
          </h2>

          <p className="text-premium-large text-center max-w-3xl mx-auto">
            Soluciones de enfriamiento evaporativo que combinan eficiencia energética extrema, 
            sostenibilidad ambiental y rendimiento industrial superior.
          </p>
        </motion.div>

        {/* Features Grid Premium */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group h-full"
            >
              <div className="card-feature relative h-full overflow-hidden">
                {/* Background Pattern */}
                <div 
                  className={`absolute inset-0 bg-linear-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Section */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 bg-linear-to-br ${feature.gradient} rounded-2xl flex items-center justify-center text-white shadow-industrial-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      {feature.icon}
                    </div>
                    
                    {/* Stats Badge */}
                    <div className="text-right">
                      <div className="text-2xl font-bold text-steel-dark group-hover:text-primary transition-colors duration-300">
                        {feature.stats}
                      </div>
                      <div className="text-xs text-steel-light font-medium tracking-wide">
                        {feature.metric}
                      </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="space-y-4">
                    <h3 className="heading-premium-3 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    
                    <p className="text-premium-body leading-relaxed">
                      {feature.desc}
                    </p>
                    
                    {/* Action Link */}
                    <div className="pt-4">
                      <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-4 transition-all duration-300 cursor-pointer">
                        <span>Más información</span>
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Shimmer Effect */}
                <div className="shimmer opacity-0 group-hover:opacity-100"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section Premium */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="relative"
        >
          <div className="card-premium p-12 text-center max-w-4xl mx-auto relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-hero opacity-95 rounded-3xl"></div>
            
            {/* Content */}
            <div className="relative z-10 text-white">
              <div className="inline-flex items-center gap-2 glass-effect rounded-full px-4 py-2 mb-6 border border-white/20">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span className="text-sm font-medium">Consultoría Premium</span>
              </div>
              
              <h3 className="heading-premium-3 text-white mb-4">
                ¿Necesitas una Solución Industrial Personalizada?
              </h3>
              
              <p className="text-premium-large text-white/90 mb-8 max-w-2xl mx-auto">
                Nuestro equipo de ingenieros especialistas puede diseñar y dimensionar 
                la solución perfecta para tu aplicación industrial específica.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contacto" className="btn-premium btn-premium-outline btn-premium-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Consultoría Gratuita
                </a>
                
                <a href="#productos" className="btn-premium btn-premium-steel btn-premium-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Ver Productos
                </a>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-6 right-6 w-12 h-12 glass-effect rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
