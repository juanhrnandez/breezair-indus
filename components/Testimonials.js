'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Ing. Carlos Mendoza Rivera',
    position: 'Director de Operaciones Industriales',
    company: 'Grupo Industrial Monterrey S.A. de C.V.',
    avatar: 'CM',
    rating: 5,
    text: 'La implementación de sistemas Breezair transformó completamente nuestras operaciones. Alcanzamos un 72% de reducción en costos energéticos y mejoramos significativamente el ambiente laboral. ROI en 16 meses.',
    industry: 'Manufactura Automotriz',
    location: 'Monterrey, Nuevo León',
    savings: '72%',
    payback: '16 meses'
  },
  {
    name: 'Dra. Ana Patricia Ruiz Vega',
    position: 'Gerente de Sustentabilidad Corporativa',
    company: 'Textiles del Pacífico Internacional',
    avatar: 'AR',
    rating: 5,
    text: 'Breezair nos permitió cumplir objetivos ambientales críticos mientras optimizamos procesos. La tecnología evaporativa es perfecta para nuestra estrategia de sostenibilidad y eficiencia operativa.',
    industry: 'Textil Industrial',
    location: 'Guadalajara, Jalisco',
    savings: '68%',
    payback: '18 meses'
  },
  {
    name: 'Ing. Roberto Silva Hernández',
    position: 'Jefe de Ingeniería y Mantenimiento',
    company: 'Corporativo Alimentos del Norte',
    avatar: 'RS',
    rating: 5,
    text: 'Tres años de operación continua sin fallas. La confiabilidad y bajo mantenimiento de Breezair superó expectativas. Reducción del 85% en intervenciones de mantenimiento vs. sistemas anteriores.',
    industry: 'Procesamiento de Alimentos',
    location: 'Tijuana, Baja California',
    savings: '85%',
    payback: '12 meses'
  },
  {
    name: 'Lic. María Elena Castillo',
    position: 'Directora de Infraestructura',
    company: 'Logística y Distribución Continental',
    avatar: 'MC',
    rating: 5,
    text: 'La solución integral de CG International para nuestros centros de distribución es excepcional. Control de temperatura preciso en 45,000 m² con mínimo consumo energético.',
    industry: 'Logística Industrial',
    location: 'Estado de México',
    savings: '79%',
    payback: '14 meses'
  }
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
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
    <section className="section-dark relative overflow-hidden">
      {/* Background Image with Blur Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image 
          src="/images/breezair-1.jpg"
          alt="Breezair Industrial Installation"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover object-center scale-110"
          priority
        />
        {/* Blue blur overlay - controlado para ver la imagen */}
        <div className="absolute inset-0 bg-linear-to-br from-blue-900/50 via-blue-800/40 to-slate-900/70 backdrop-blur-[1px]"></div>
      </div>
      {/* Background Pattern Premium */}
      <div className="absolute inset-0 z-10 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, white 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px, 40px 40px'
          }}
        ></div>
        
        {/* Industrial facility images as background */}
        <div className="absolute top-16 left-16 w-40 h-32 rounded-2xl overflow-hidden opacity-10">
          <Image 
            src="/images/breezair-8.png"
            alt="Industrial Facility"
            width={160}
            height={128}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="absolute bottom-20 right-20 w-36 h-28 rounded-xl overflow-hidden opacity-10">
          <Image 
            src="/images/breezair-9.png"
            alt="Breezair Installation"
            width={144}
            height={112}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="container-premium relative z-20">
        {/* Section Header Premium */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center mt-8 gap-3 glass-effect rounded-full px-6 py-3 mb-8 border border-white/20">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27Z"/>
                </svg>
              ))}
            </div>
            <span className="text-white/90 font-semibold text-sm tracking-wide">
              TESTIMONIOS VERIFICADOS
            </span>
            <div className="w-1 h-1 bg-white/40 rounded-full"></div>
            <span className="text-white/60 text-xs font-medium">500+ INSTALACIONES</span>
          </div>

          <h2 className="heading-premium-title text-white max-w-4xl mx-auto mb-6">
            Líderes Industriales Confían en
            <span className="text-gradient-premium bg-linear-to-r from-blue-200 via-white to-blue-100 bg-clip-text text-transparent">
              {' '}Nuestra Tecnología evaporativa
            </span>
          </h2>

          <p className="text-premium-large text-white/90 max-w-3xl mx-auto">
            Casos de éxito comprobados en manufactura, logística y procesamiento industrial 
            con ahorros energéticos documentados del 65% al 85%.
          </p>
        </motion.div>

        {/* Desktop: Premium Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="hidden lg:grid lg:grid-cols-2 gap-8 mb-20"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <TestimonialCardPremium testimonial={testimonial} index={index} />
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile: Premium Carousel */}
        <div className="lg:hidden mb-20">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <TestimonialCardPremium 
                  testimonial={testimonials[currentTestimonial]} 
                  index={currentTestimonial}
                />
              </motion.div>
            </AnimatePresence>
            
            {/* Premium Carousel Controls */}
            <div className="flex justify-center items-center gap-6 mt-8">
              <button
                onClick={() => {
                  setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
                  setIsAutoPlay(false);
                }}
                className="w-12 h-12 glass-effect rounded-full flex items-center justify-center border border-white/20 text-white hover:bg-white/10 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentTestimonial(index);
                      setIsAutoPlay(false);
                    }}
                    className={`transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'w-8 h-3 bg-white rounded-full' 
                        : 'w-3 h-3 bg-white/40 rounded-full hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => {
                  setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
                  setIsAutoPlay(false);
                }}
                className="w-12 h-12 glass-effect rounded-full flex items-center justify-center border border-white/20 text-white hover:bg-white/10 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Premium Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative"
        >
          <div className="card-premium p-12 mb-8 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-linear-to-r from-white via-gray-50 to-white rounded-3xl"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-10">
                <h3 className="heading-premium-3 text-gray-800 mb-4">
                  Resultados Comprobados a Nivel Industrial
                </h3>
                <p className="text-premium-body text-gray-700 max-w-2xl mx-auto">
                  Más de 15 años liderando la transformación energética en el sector industrial mexicano
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { 
                    number: '500+', 
                    label: 'Instalaciones Activas', 
                    icon: (
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    )
                  },
                  { 
                    number: '98.7%', 
                    label: 'Satisfacción Cliente', 
                    icon: (
                      <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    )
                  },
                  { 
                    number: '15+', 
                    label: 'Años de Experiencia', 
                    icon: (
                      <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    )
                  },
                  { 
                    number: '24/7', 
                    label: 'Soporte Especializado', 
                    icon: (
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 110 19.5 9.75 9.75 0 010-19.5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                      </svg>
                    )
                  }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index + 0.6 }}
                    className="group"
                  >
                    <div className="flex justify-center mb-2">{stat.icon}</div>
                    <div className="text-4xl font-bold text-gradient-premium mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-800 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialCardPremium({ testimonial, index }) {
  return (
    <motion.div 
      className="card-testimonial h-full relative group overflow-hidden"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Premium Quote Icon */}
      <div className="absolute top-2 right-2 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z"/>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Quote Text */}
        <div className="mb-8">
          <p className=" text-white leading-relaxed italic">
            &ldquo;{testimonial.text}&rdquo;
          </p>
        </div>

        {/* Premium Rating */}
        <div className="flex items-center gap-2 mb-6">
          <div className="flex gap-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <motion.svg 
                key={i} 
                className="w-5 h-5 text-yellow-400" 
                fill="currentColor" 
                viewBox="0 0 24 24"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * i + 0.5 }}
              >
                <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27Z"/>
              </motion.svg>
            ))}
          </div>
          <span className="text-white/70 text-sm font-medium">Verificado</span>
        </div>

        {/* Author Section Premium */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-16 h-16 bg-linear-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center text-white font-bold text-lg border border-white/20 shrink-0">
            {testimonial.avatar}
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-bold text-white text-lg leading-tight">
              {testimonial.name}
            </div>
            <div className="text-white/80 text-sm font-medium mt-1">
              {testimonial.position}
            </div>
            <div className="text-white/90 font-semibold mt-2">
              {testimonial.company}
            </div>
          </div>
        </div>

        {/* Industry & Metrics */}
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            <span className="glass-effect px-3 py-1 rounded-full text-white/90 text-xs font-medium border border-white/20">
              {testimonial.industry}
            </span>
            <span className="glass-effect px-3 py-1 rounded-full text-white/80 text-xs border border-white/20 flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              {testimonial.location}
            </span>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="glass-effect p-3 rounded-xl border border-white/20 text-center">
              <div className="text-white font-bold text-lg">{testimonial.savings}</div>
              <div className="text-white/70 text-xs">Ahorro Energético</div>
            </div>
            <div className="glass-effect p-3 rounded-xl border border-white/20 text-center">
              <div className="text-white font-bold text-lg">{testimonial.payback}</div>
              <div className="text-white/70 text-xs">Retorno Inversión</div>
            </div>
          </div>
        </div>
      </div>

      {/* Shimmer effect */}
      <div className="shimmer opacity-0 group-hover:opacity-100"></div>
    </motion.div>
  );
}
