 'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 1]); // Mantener opacidad hasta 80% del scroll

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const floatingVariants = {
    floating: {
      y: [-20, 20, -20],
      rotate: [0, 5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section 
      ref={ref}
      className="section-hero relative overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image 
          src="/images/breezair-1.jpg"
          alt="Breezair Industrial Installation"
          fill
          className="object-cover" 
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/85 via-slate-500/75 to-blue-900/85"></div>
        <div className="absolute inset-0 "></div>
      </div>
      {/* Parallax Background Elements - Converted to Particles */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        style={{ y }}
      >
        {/* Subtle animated particles */}
        <div className="absolute top-10 right-10 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-32 w-1 h-1 bg-blue-200/30 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 left-10 w-3 h-3 bg-white/15 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-40 w-1.5 h-1.5 bg-blue-100/25 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-white/10 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-blue-200/20 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-16 left-16 w-8 h-8 border border-white/10 rounded-lg rotate-45 animate-pulse"></div>
        <div className="absolute bottom-24 right-24 w-6 h-6 border border-blue-200/15 rounded-full animate-ping" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-3/4 left-1/4 w-4 h-4 border border-white/8 rotate-12 animate-pulse" style={{animationDelay: '2.5s'}}></div>
      </motion.div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      <motion.div 
        className="container-premium relative z-20"
      >
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge Industrial */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-md rounded-full px-6 py-3 mt-22 mb-8 border border-white/30 shadow-xl"
          >
            <div className="relative">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
            </div>
            <span className="text-white font-medium text-sm tracking-wide">
              Tecnología industrial líder en México
            </span>
            <div className="w-1 h-1 bg-white/60 rounded-full"></div>
            <span className="text-white/90 text-xs font-medium">2024</span>
          </motion.div>

          {/* Título Principal */}
          <div className="mb-8">
            {[
              "Transformamos Ambientes",
              "Industriales con Tecnología",
              "Breezair Premium"
            ].map((line, lineIndex) => (
              <div key={lineIndex} className="overflow-hidden">
                <motion.h1
                  className="heading-premium-1"
                  variants={itemVariants}
                  custom={lineIndex}
                >
                  {line.split(' ').map((word, wordIndex) => (
                    <motion.span
                      key={wordIndex}
                      className="inline-block mr-4"
                      variants={wordVariants}
                      custom={lineIndex * 3 + wordIndex}
                    >
                      {wordIndex === 1 && lineIndex === 2 ? (
                        <span className="text-gradient-premium bg-linear-to-r from-blue-200 via-white to-blue-100 bg-clip-text text-transparent">
                          {word}
                        </span>
                      ) : (
                        word
                      )}
                    </motion.span>
                  ))}
                </motion.h1>
              </div>
            ))}
          </div>

          {/* Descripción Premium */}
          <motion.p
            variants={itemVariants}
            className="text-premium-hero text-center mb-12"
          >
            Soluciones de enfriamiento evaporativo industrial con{' '}
            <span className="font-semibold text-white">hasta 87% de ahorro energético</span>,
            aire 100% filtrado del exterior y máximo confort térmico para grandes espacios.
          </motion.p>

          {/* Estadísticas Hero */}
          <motion.div
            variants={itemVariants}
            className="hero-stats"
          >
            {[
              { 
                number: "87%", 
                label: "Ahorro Energético", 
                icon: <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" /></svg>
              },
              { 
                number: "100%", 
                label: "Aire Exterior", 
                icon: <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
              },
              { 
                number: "24/7", 
                label: "Operación Continua", 
                icon: <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="hero-stat hover-float bg-white/10 backdrop-blur-md border border-white/20"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="mb-3">{stat.icon}</div>
                <div className="hero-stat-number text-white font-bold">{stat.number}</div>
                <div className="hero-stat-label text-white/90">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs Premium */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
          >
            <Link href="#productos" className="btn-premium btn-premium-primary btn-premium-lg group bg-blue-600 hover:bg-blue-700 text-white shadow-xl">
              <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Explorar Productos
            </Link>
            <Link href="#contacto" className="btn-premium btn-premium-outline btn-premium-lg group bg-white/10 backdrop-blur-md border-2 border-white text-white hover:bg-white hover:text-blue-700 shadow-xl">
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Consultoría Gratuita
            </Link>
          </motion.div>

          {/* Floating Industrial Elements - Converted to Subtle Particles */}
          <div className="absolute top-20 right-10 hidden lg:block">
            <motion.div
              variants={floatingVariants}
              animate="floating"
              className="w-12 h-12 border-2 border-white/20 rounded-2xl backdrop-blur-sm bg-white/5 flex items-center justify-center"
            >
              <div className="w-3 h-3 bg-white/40 rounded-full animate-pulse"></div>
            </motion.div>
          </div>

          <div className="absolute bottom-32 left-10 hidden lg:block">
            <motion.div
              variants={floatingVariants}
              animate="floating"
              style={{ animationDelay: "2s" }}
              className="w-8 h-8 border border-white/15 rounded-xl backdrop-blur-sm bg-white/5 flex items-center justify-center"
            >
              <div className="w-2 h-2 bg-blue-200/50 rounded-full animate-ping"></div>
            </motion.div>
          </div>

          <div className="absolute top-1/2 right-32 hidden xl:block">
            <motion.div
              variants={floatingVariants}
              animate="floating"
              style={{ animationDelay: "4s" }}
              className="w-10 h-10 border border-white/10 rounded-full backdrop-blur-sm bg-white/5 flex items-center justify-center"
            >
              <div className="w-2.5 h-2.5 bg-white/30 rounded-full animate-pulse"></div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator Premium */}
        <motion.div
          className="scroll-indicator text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
         
        </motion.div>
      </motion.div>
    </section>
  );
}
