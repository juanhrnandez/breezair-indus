'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const companyStats = [
  { number: '25+', label: 'Años de Experiencia', icon: <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg> },
  { number: '500+', label: 'Proyectos Completados', icon: <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/></svg> },
  { number: '50+', label: 'Clientes Satisfechos', icon: <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
  { number: '87%', label: 'Ahorro Energético Promedio', icon: <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> }
];

const timeline = [
  {
    year: '1999',
    title: 'Fundación de CG International',
    description: 'Inicio como distribuidores especializados en soluciones industriales sustentables.',
    icon: <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
  },
  {
    year: '2005',
    title: 'Alianza Estratégica con Breezair',
    description: 'Nos convertimos en distribuidores oficiales de Breezair para México.',
    icon: <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
  },
  {
    year: '2010', 
    title: 'Expansión Nacional',
    description: 'Cobertura completa en territorio mexicano con equipo técnico especializado.',
    icon: <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  },
  {
    year: '2020',
    title: 'Innovación Digital',
    description: 'Implementación de IoT y monitoreo remoto en sistemas de enfriamiento.',
    icon: <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
  },
  {
    year: '2024',
    title: 'Líderes en Sustentabilidad',
    description: 'Reconocidos como la empresa #1 en soluciones de enfriamiento sustentable.',
    icon: <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
  }
];

const values = [
  {
    icon: <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" /></svg>,
    title: 'Excelencia Técnica',
    description: 'Cada solución está respaldada por ingeniería de precisión y estándares internacionales.'
  },
  {
    icon: <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
    title: 'Compromiso Ambiental',
    description: 'Promovemos tecnologías limpias que reducen el impacto ambiental y los costos operativos.'
  },
  {
    icon: <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    title: 'Servicio Integral',
    description: 'Desde el análisis inicial hasta el mantenimiento preventivo, acompañamos cada proyecto.'
  },
  {
    icon: <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    title: 'Innovación Constante',
    description: 'Adoptamos las últimas tecnologías para ofrecer las soluciones más eficientes del mercado.'
  }
];

export default function AboutSection() {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  const timelineInView = useInView(timelineRef, { once: true });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

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
  };

  return (
    <section 
      id="nosotros"
      className="section-premium relative overflow-hidden bg-gray-50"
      ref={sectionRef}
    >
      {/* Background Premium Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-steel opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-primary opacity-10 rounded-full blur-3xl"></div>
      </div>

      {/* Animated Background Pattern */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 opacity-[0.02]"
      >
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, var(--color-primary) 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, var(--color-steel) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px, 40px 40px'
          }}
        ></div>
      </motion.div>

      <div className="container-premium relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 glass-effect rounded-full px-6 py-3 mb-8 border border-black/5">
            <div className="w-3 h-3 bg-gradient-steel rounded-full pulse-glow"></div>
            <span className="text-sm font-semibold text-steel tracking-wide">ACERCA DE CG INTERNATIONAL</span>
            <div className="w-1 h-1 bg-steel/40 rounded-full"></div>
            <span className="text-xs text-steel/60 font-medium">DISTRIBUIDORES OFICIALES</span>
          </div>

          <h2 className="heading-premium-1 max-w-4xl mx-auto mb-8">
            Líderes en
            <span className="text-gradient-premium"> Enfriamiento Evaporativo Industrial</span>
          </h2>

          <p className="text-premium-large text-center max-w-4xl mx-auto">
            Desde 1999, CG International ha sido el distribuidor oficial de Breezair en México, 
            ofreciendo soluciones de enfriamiento sustentable que han transformado más de 500 
            proyectos industriales en todo el país.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-24"
        >
          {companyStats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center group"
            >
              <div className="card-premium p-8 hover-float">
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-gradient-premium mb-2">{stat.number}</div>
                <div className="text-steel font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
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
                la eficiencia energética, mejoren la calidad del aire y reduzcan significativamente 
                los costos operativos en aplicaciones industriales, contribuyendo a un futuro 
                más sustentable para la industria mexicana.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="card-premium p-10 h-full">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-steel rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="heading-premium-3 text-steel-dark">Nuestra Visión</h3>
              </div>
              <p className="text-premium-body text-steel-light leading-relaxed">
                Ser reconocidos como la empresa líder en México en soluciones de climatización 
                industrial sustentable, estableciendo el estándar de excelencia técnica, 
                innovación y compromiso ambiental que inspire a la transformación de la 
                industria hacia prácticas más eficientes y responsables.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-24"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h3 className="heading-premium-2 text-steel-dark mb-6">Nuestros Valores</h3>
            <p className="text-premium-large text-steel-light max-w-3xl mx-auto">
              Los principios que guían cada decisión y cada proyecto que desarrollamos.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card-premium p-8 hover-float group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex justify-center">{value.icon}</div>
                  <div>
                    <h4 className="heading-premium-4 text-steel-dark mb-3">{value.title}</h4>
                    <p className="text-premium-body text-steel-light leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          ref={timelineRef}
          initial={{ opacity: 0, y: 50 }}
          animate={timelineInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h3 className="heading-premium-2 text-steel-dark mb-6">Nuestra Historia</h3>
            <p className="text-premium-large text-steel-light max-w-3xl mx-auto">
              25 años de crecimiento, innovación y excelencia en el mercado mexicano.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary opacity-20 rounded-full"></div>
            
            <div className="space-y-16">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col lg:gap-16 gap-8`}
                >
                  <div className="lg:w-5/12 w-full">
                    <div className={`card-premium p-8 ${
                      index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                    } text-center`}>
                      <div className="flex justify-center mb-4">{item.icon}</div>
                      <div className="text-2xl font-bold text-gradient-primary mb-3">{item.year}</div>
                      <h4 className="heading-premium-4 text-steel-dark mb-4">{item.title}</h4>
                      <p className="text-premium-body text-steel-light">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Point */}
                  <div className="relative z-10 lg:block hidden">
                    <div className="w-6 h-6 bg-gradient-primary rounded-full shadow-industrial-md pulse-glow"></div>
                  </div>
                  
                  <div className="lg:w-5/12 w-full lg:block hidden"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="relative"
        >
          <div className="card-premium p-12 text-center max-w-5xl mx-auto relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-steel opacity-95 rounded-3xl"></div>
            
            {/* Content */}
            <div className="relative z-10 text-white">
              <div className="inline-flex items-center gap-2 glass-effect rounded-full px-4 py-2 mb-6 border border-white/20">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span className="text-sm font-medium">Experiencia Comprobada</span>
              </div>
              
              <h3 className="heading-premium-2 text-white mb-6">
                ¿Por Qué Elegir CG International?
              </h3>
              
              <p className="text-premium-products text-white/90 mb-10 max-w-4xl mx-auto">
                Con 25 años de experiencia, somos más que distribuidores: somos sus socios 
                estratégicos en eficiencia energética y sustentabilidad industrial.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-10">
                {[
                  { 
                    icon: <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>, 
                    title: 'Certificación Oficial', 
                    desc: 'Distribuidores autorizados y certificados por Breezair'
                  },
                  { 
                    icon: <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>, 
                    title: 'Soporte Técnico 24/7', 
                    desc: 'Equipo de ingenieros especializados siempre disponible'
                  },
                  { 
                    icon: <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>, 
                    title: 'ROI Demostrable', 
                    desc: 'Proyectos con retorno de inversión garantizado'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="text-center">
                    <div className="flex justify-center mb-4">{item.icon}</div>
                    <h4 className="font-semibold text-lg text-black mb-3">{item.title}</h4>
                    <p className="text-black/80 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#contacto" className="btn-premium btn-premium-primary btn-premium-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-2M9 4h6a2 2 0 012 2v4a2 2 0 01-2 2H9a2 2 0 01-2-2V6a2 2 0 012-2z" />
                  </svg>
                  Conoce Nuestros Proyectos
                </Link>
                
                <Link href="#contacto" className="btn-premium btn-premium-primary btn-premium-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Solicitar Propuesta Técnica
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}