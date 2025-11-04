'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductsPreview({ products }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
      id="productos-preview"
      className="section-premium relative overflow-hidden bg-white"
      ref={ref}
    >
      {/* Background Premium Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-primary opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-steel opacity-5 rounded-full blur-3xl"></div>
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
            <span className="text-sm font-semibold text-steel tracking-wide">NUESTROS PRODUCTOS</span>
            <div className="w-1 h-1 bg-steel/40 rounded-full"></div>
            <span className="text-xs text-steel/60 font-medium">TECNOLOGÍA BREEZAIR</span>
          </div>

          <h2 className="heading-premium-2 max-w-4xl mx-auto mb-6">
            Soluciones de
            <span className="text-gradient-premium"> Enfriamiento Evaporativo</span>
          </h2>

          <p className="text-premium-products text-center max-w-3xl mx-auto">
            Descubre nuestra línea completa de sistemas Breezair diseñados para maximizar 
            la eficiencia energética en aplicaciones industriales.
          </p>
        </motion.div>

        {/* Products Grid Resumido */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-3 gap-8 mb-16"
        >
          {products.slice(0, 3).map((product, index) => (
            <motion.div 
              key={product.slug} 
              variants={itemVariants}
              className="card-premium p-8 hover-float group text-center"
            >
              {/* Product Image */}
              <div className="w-full h-48 bg-gray-50 rounded-2xl overflow-hidden mb-6 group-hover:scale-105 transition-transform duration-300">
                <Image 
                  src={`/images/breezair-product-${index + 1}.jpg`}
                  alt={`${product.title} - ${product.series} Series`}
                  width={300}
                  height={192}
                  className="w-full h-full object-contain p-4"
                />
              </div>

              {/* Badge */}
              {product.badge && (
                <div className="inline-block bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold mb-4">
                  {product.badge}
                </div>
              )}

              {/* Title and Series */}
              <h3 className="heading-premium-4 text-steel-dark mb-3">{product.title}</h3>
              <div className="text-primary font-semibold text-sm mb-4">{product.series} Series</div>

              {/* Summary */}
              <p className="text-premium-body text-steel-light mb-6 leading-relaxed">
                {product.summary}
              </p>

              {/* Key Specs */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient-primary">{product.specs.efficiency}</div>
                  <div className="text-xs text-steel-light">Eficiencia</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient-primary">{product.specs.capacity}</div>
                  <div className="text-xs text-steel-light">Capacidad</div>
                </div>
              </div>

              {/* Top Features */}
              <div className="space-y-2 mb-6">
                {product.features.slice(0, 2).map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-steel">
                    <svg className="w-4 h-4 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link 
                href={`/productos/${product.id}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all duration-300 group-hover:bg-blue-700 w-full"
              >
                <span>Ver Especificaciones Completas</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center"
        >
          <div className="card-premium p-12 max-w-4xl mx-auto relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-hero opacity-95 rounded-3xl"></div>
            
            {/* Content */}
            <div className="relative z-10 text-white">
              <h3 className="heading-premium-3 text-white mb-6">
                ¿Necesitas Ver Todas Nuestras Series?
              </h3>
              
              <p className="text-premium-products text-white/90 mb-8 max-w-3xl mx-auto">
                Explora nuestro catálogo completo con especificaciones técnicas detalladas, 
                comparaciones entre series y configuraciones personalizadas.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/productos" className="btn-premium btn-premium-outline btn-premium-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <p className="text-sm text-black">Ver Catálogo Completo</p>
                </Link>
                
                <Link href="#contacto" className="btn-premium btn-premium-primary btn-premium-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Consultoría Gratuita
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}