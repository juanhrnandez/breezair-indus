'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';
import ProductCard from './ProductCard';

const productCategories = [
  { id: 'all', name: 'Todos los Productos', icon: <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/></svg> },
  { id: 'industrial', name: 'Industrial Heavy Duty', icon: <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.53 5.47a.75.75 0 00-1.06 0L6.72 12.47a.75.75 0 101.06 1.06L12 9.31l4.22 4.22a.75.75 0 101.06-1.06l-4.75-4.75z"/></svg> },
  { id: 'commercial', name: 'Comercial Premium', icon: <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M4 21V9l8-6 8 6v12h-6v-7h-4v7H4zm2-2h2v-5h8v5h2v-9L12 6 6 10v9z"/></svg> },
  { id: 'specialized', name: 'Aplicaciones Especiales', icon: <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg> }
];

export default function ProductsSection({ products }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

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

  // Expandir productos con más datos para la demo
  const expandedProducts = [
    {
      ...products[0],
      category: 'industrial',
      applications: ['Manufactura', 'Automotriz', 'Textil'],
      certifications: ['ISO 14001', 'ENERGY STAR', 'ASHRAE'],
      warranty: '5 años',
      installation: 'Profesional incluida'
    },
    {
      ...products[1],
      category: 'commercial',
      applications: ['Centros Comerciales', 'Oficinas', 'Hospitales'],
      certifications: ['ISO 9001', 'ENERGY STAR'],
      warranty: '3 años',
      installation: 'Simplificada'
    },
    {
      ...products[2],
      category: 'specialized',
      applications: ['Laboratorios', 'Salas Limpias', 'Farmacéutica'],
      certifications: ['FDA Compliant', 'GMP', 'ISO 14644'],
      warranty: '7 años',
      installation: 'Especializada'
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? expandedProducts 
    : expandedProducts.filter(p => p.category === activeCategory);

  return (
    <section 
      id="productos"
      className="section-premium relative overflow-hidden bg-white"
      ref={ref}
    >
      {/* Background Premium Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-primary opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-steel opacity-5 rounded-full blur-3xl"></div>
      </div>

      {/* Geometric Pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(30deg, var(--color-primary) 12%, transparent 12.5%, transparent 87%, var(--color-primary) 87.5%, var(--color-primary)),
              linear-gradient(150deg, var(--color-primary) 12%, transparent 12.5%, transparent 87%, var(--color-primary) 87.5%, var(--color-primary))
            `,
            backgroundSize: '80px 80px'
          }}
        ></div>
      </div>

      <div className="container-premium relative z-10">
        {/* Section Header Premium */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 glass-effect rounded-full px-6 py-3 mb-8 border border-black/5">
            <div className="w-3 h-3 bg-gradient-primary rounded-full pulse-glow"></div>
            <span className="text-sm font-semibold text-steel tracking-wide">PORTAFOLIO DE PRODUCTOS</span>
            <div className="w-1 h-1 bg-steel/40 rounded-full"></div>
            <span className="text-xs text-steel/60 font-medium">TECNOLOGÍA BREEZAIR</span>
          </div>

          <h2 className="heading-premium-2 max-w-4xl mx-auto mb-6">
            Soluciones Industriales de
            <span className="text-blue-900 font-bold"> Climatización Premium</span>
          </h2>

          <p className="text-premium-products text-center max-w-3xl mx-auto mb-12">
            Desde naves industriales hasta aplicaciones especializadas, 
            nuestra línea completa ofrece la solución perfecta para cada necesidad.
          </p>

          {/* Category Filter Premium */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {productCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-2xl font-medium text-sm transition-all duration-300 flex items-center justify-center ${
                  activeCategory === category.id
                    ? 'bg-gradient-primary text-blue-500 shadow-industrial-md'
                    : 'glass-effect border border-gray-200 text-steel hover:bg-gray-50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2 flex items-center">{category.icon}</span>
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex justify-center items-center gap-4 mb-12">
            <span className="text-sm text-steel-light font-medium">Vista:</span>
            <div className="glass-effect rounded-xl p-1 border border-gray-200">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  viewMode === 'grid'
                    ? 'bg-gradient-primary text-blue-500 shadow-sm'
                    : 'text-steel hover:bg-gray-50'
                }`}
              >
                <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  viewMode === 'list'
                    ? 'bg-gradient-primary text-blue-500 shadow-sm'
                    : 'text-steel hover:bg-gray-50'
                }`}
              >
                <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
                Lista
              </button>
            </div>
          </div>
        </motion.div>

        {/* Products Grid/List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className={`mb-20 ${
            viewMode === 'grid' 
              ? 'grid lg:grid-cols-3 md:grid-cols-2 gap-8' 
              : 'space-y-6'
          }`}
        >
          {filteredProducts.map((product, index) => (
            <motion.div key={product.slug} variants={itemVariants}>
              {viewMode === 'grid' ? (
                <ProductCard product={product} index={index} />
              ) : (
                <ProductListItem product={product} index={index} />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section Premium */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="relative"
        >
          <div className="card-premium p-12 text-center max-w-5xl mx-auto relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-hero opacity-95 rounded-3xl"></div>
            
            {/* Content */}
            <div className="relative z-10 text-white">
              <div className="inline-flex items-center gap-2 glass-effect rounded-full px-4 py-2 mb-6 border border-white/20">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span className="text-black text-sm font-medium">Asesoría Técnica Especializada</span>
              </div>
              
              <h3 className="heading-premium-3 text-white mb-6">
                ¿Necesitas Ayuda para Elegir la Solución Perfecta?
              </h3>
              
              <p className="text-premium-products text-white/90 mb-8 max-w-3xl mx-auto">
                Nuestro equipo de ingenieros especialistas puede analizar tu aplicación específica 
                y recomendar la configuración óptima para tu proyecto industrial.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                {[
                  { icon: <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>, title: 'Análisis Gratuito', desc: 'Evaluación técnica sin costo' },
                  { icon: <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" /></svg>, title: 'Solución Personalizada', desc: 'Diseño específico para tu necesidad' },
                  { icon: <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, title: 'ROI Garantizado', desc: 'Retorno de inversión demostrable' }
                ].map((item, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-3xl mb-3 flex justify-center">{item.icon}</div>
                    <h4 className="font-semibold text-lg text-black mb-2">{item.title}</h4>
                    <p className="text-black/80 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#contacto" className="btn-premium btn-premium-primary btn-premium-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Consultoría Técnica Gratuita
                </Link>
                
                <a 
                  href="tel:+525555555555" 
                  className="btn-premium btn-premium-steel btn-premium-lg"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Llamar Ahora: +52 55 5555-5555
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Componente para vista de lista
function ProductListItem({ product, index }) {
  return (
    <div className="card-premium p-6 flex flex-col lg:flex-row gap-6 hover-float">
      {/* Image Section */}
      <div className="lg:w-1/3">
        <div className="aspect-4/3 bg-gradient-hero rounded-xl flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: `
                  linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%),
                  linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%)
                `,
                backgroundSize: '20px 20px'
              }}
            ></div>
          </div>
          
          <div className="relative z-10 text-center text-white">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
              </svg>
            </div>
            <div className="text-xs font-semibold">{product.series}</div>
          </div>

          {product.badge && (
            <div className="absolute top-3 left-3 glass-effect px-2 py-1 rounded-full text-white text-xs font-semibold border border-white/20">
              {product.badge}
            </div>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="lg:w-2/3 flex flex-col">
        <div className="flex-1">
          <div className="flex items-start justify-between mb-4">
            <h3 className="heading-premium-3 text-steel-dark">{product.title}</h3>
            <div className="text-right">
              <div className="text-2xl font-bold text-gradient-premium">{product.specs.efficiency}</div>
              <div className="text-xs text-steel-light">Eficiencia</div>
            </div>
          </div>

          <p className="text-premium-body text-steel-light mb-4">{product.summary}</p>

          {/* Specifications Grid */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <h4 className="font-semibold text-sm text-steel-dark mb-2">Aplicaciones</h4>
              <div className="flex flex-wrap gap-1">
                {product.applications?.map((app, idx) => (
                  <span key={idx} className="bg-gradient-primary/10 text-primary px-2 py-1 rounded text-xs">
                    {app}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-steel-dark mb-2">Certificaciones</h4>
              <div className="flex flex-wrap gap-1">
                {product.certifications?.map((cert, idx) => (
                  <span key={idx} className="bg-gray-100 text-steel px-2 py-1 rounded text-xs">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Link href="#contacto" className="btn-premium btn-premium-primary flex-1">
            Ver Especificaciones
          </Link>
          <Link href="#contacto" className="btn-premium btn-premium-steel">
            Cotizar
          </Link>
        </div>
      </div>
    </div>
  );
}