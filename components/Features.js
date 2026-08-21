'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

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
    gradient: 'from-[#0A4FA0] to-[#073A78]',
    bgGradient: 'from-[#EAF2FC] to-white'
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
    gradient: 'from-[#0A4FA0] to-[#073A78]',
    bgGradient: 'from-[#EAF2FC] to-white'
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
    gradient: 'from-[#0A4FA0] to-[#073A78]',
    bgGradient: 'from-[#EAF2FC] to-white'
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
    gradient: 'from-[#0A4FA0] to-[#073A78]',
    bgGradient: 'from-[#EAF2FC] to-white'
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
    gradient: 'from-[#0A4FA0] to-[#073A78]',
    bgGradient: 'from-[#EAF2FC] to-white'
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
    gradient: 'from-[#0A4FA0] to-[#073A78]',
    bgGradient: 'from-[#EAF2FC] to-white'
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
          className="mb-16 max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#0E8FAB]" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0E8FAB]">
              Por qué el evaporativo
            </span>
          </div>

          <h2 className="mb-5 max-w-3xl font-display text-[clamp(2rem,4.2vw,3.25rem)] font-bold uppercase leading-[1.03] text-[#0A121C]">
            Seis razones por las que
            <span className="block text-[#0A4FA0]">una nave no se climatiza como una oficina</span>
          </h2>

          <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
            El aire acondicionado enfría un aire que recircula. Esto sustituye el aire del edificio.
            De esa diferencia sale todo lo demás.
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
                  className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Section */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center text-white shadow-industrial-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
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
                    <h3 className="text-[1.35rem] font-semibold leading-snug text-[#0A121C] transition-colors duration-300 group-hover:text-[#0A4FA0]">
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
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-[#0A121C]">
            <div className="grid items-center gap-8 p-9 lg:grid-cols-[1.4fr_auto] lg:p-12">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#22B8D6]" />
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#22B8D6]">
                    Ingeniería de proyecto
                  </span>
                </div>
                <h3 className="mb-3 font-display text-[clamp(1.6rem,2.6vw,2.25rem)] font-bold uppercase leading-[1.05] text-white">
                  ¿Tu instalación no encaja en ningún caso estándar?
                </h3>
                <p className="max-w-xl leading-relaxed text-slate-300">
                  Calculamos la carga térmica de tu nave, las renovaciones necesarias y el área de
                  salida de aire antes de proponer nada. Sin costo, y con la respuesta honesta si
                  esta tecnología no es la adecuada para tu caso.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href="#cotizar"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0A4FA0] px-7 py-3.5 font-semibold text-white transition-colors duration-200 hover:bg-[#1E6FCC]"
                >
                  Solicitar el cálculo
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" />
                  </svg>
                </a>
                <a
                  href="#productos-preview"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 px-7 py-3.5 font-semibold text-white transition-colors duration-200 hover:border-white/60 hover:bg-white/5"
                >
                  Ver los equipos
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
