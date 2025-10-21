'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

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
      style={{
        backgroundImage: `
          radial-gradient(circle at 20% 80%, rgba(0, 76, 151, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(47, 58, 69, 0.4) 0%, transparent 50%),
          linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 30%, var(--color-steel) 100%)
        `
      }}
    >
      {/* Parallax Background Elements */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        style={{ y }}
      >
        <div className="absolute top-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-primary opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
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
        className="container-premium relative z-10"
        style={{ opacity }}
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
            className="inline-flex items-center gap-3 glass-effect rounded-full px-6 py-3 mb-8 border border-white/20"
          >
            <div className="relative">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
            </div>
            <span className="text-white/90 font-medium text-sm tracking-wide">
              Tecnología industrial líder en México
            </span>
            <div className="w-1 h-1 bg-white/40 rounded-full"></div>
            <span className="text-white/70 text-xs">2024</span>
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
              { number: "87%", label: "Ahorro Energético", icon: "⚡" },
              { number: "100%", label: "Aire Exterior", icon: "🌿" },
              { number: "24/7", label: "Operación Continua", icon: "🔄" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="hero-stat hover-float"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="hero-stat-number">{stat.number}</div>
                <div className="hero-stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs Premium */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
          >
            <Link href="#productos" className="btn-premium btn-premium-primary btn-premium-lg group">
              <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Explorar Productos
            </Link>
            <Link href="#contacto" className="btn-premium btn-premium-outline btn-premium-lg group">
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Consultoría Gratuita
            </Link>
          </motion.div>

          {/* Floating Industrial Elements */}
          <div className="absolute top-20 right-10 hidden lg:block">
            <motion.div
              variants={floatingVariants}
              animate="floating"
              className="w-24 h-24 glass-effect rounded-2xl border border-white/20 flex items-center justify-center"
            >
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
              </svg>
            </motion.div>
          </div>

          <div className="absolute bottom-32 left-10 hidden lg:block">
            <motion.div
              variants={floatingVariants}
              animate="floating"
              style={{ animationDelay: "2s" }}
              className="w-16 h-16 glass-effect rounded-xl border border-white/20 flex items-center justify-center"
            >
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </motion.div>
          </div>

          <div className="absolute top-1/2 right-32 hidden xl:block">
            <motion.div
              variants={floatingVariants}
              animate="floating"
              style={{ animationDelay: "4s" }}
              className="w-20 h-20 glass-effect rounded-full border border-white/20 flex items-center justify-center"
            >
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator Premium */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <div className="scroll-mouse"></div>
          <p className="text-sm font-medium tracking-wide">Descubre más</p>
        </motion.div>
      </motion.div>

      {/* Bottom Gradient Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white via-white/50 to-transparent"></div>
    </section>
  );
}
