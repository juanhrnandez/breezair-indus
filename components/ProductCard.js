'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

export default function ProductCard({ product, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false);

  const glassStyle = {
    background: 'linear-gradient(135deg, rgba(0, 76, 151, 0.25) 0%, rgba(0, 43, 92, 0.35) 50%, rgba(47, 58, 69, 0.30) 100%)',
    backdropFilter: 'blur(55px) saturate(200%)',
    WebkitBackdropFilter: 'blur(55px) saturate(200%)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
    boxShadow: '0 20px 40px rgba(47, 58, 69, 0.4)'
  };

  return (
    <Link href={`/productos/${product.slug || product.id}`} className="block h-full group">
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ 
          delay: index * 0.15, 
          duration: 0.7,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        className="h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
      <div className="card-premium h-full flex flex-col relative overflow-hidden">
        {/* Premium Product Image Section */}
        <div className="relative overflow-hidden bg-gradient-hero">
          <div className="aspect-4/3 flex items-center justify-center relative">
            {/* Product Image */}
            {product.image ? (
              <div className="absolute inset-0 bg-gray-50">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain p-4"
                />
              </div>
            ) : (
              /* Industrial Pattern Background when no image */
              <div className="absolute inset-0">
                <div 
                  className="w-full h-full opacity-5"
                  style={{
                    backgroundImage: `
                      linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%),
                      linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%),
                      linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.1) 75%),
                      linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.1) 75%)
                    `,
                    backgroundSize: '20px 20px',
                    backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
                  }}
                ></div>
              </div>
            )}
            
            {/* Premium Badges */}
            {product.badge && (
              <motion.div 
                className="absolute top-4 left-4"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <div 
                  className="rounded-full px-3 py-1"
                  style={glassStyle}
                >
                  <span className="text-white text-xs font-semibold tracking-wide">
                    {product.badge}
                  </span>
                </div>
              </motion.div>
            )}
            
            {/* Series Indicator */}
            <motion.div 
              className="absolute top-4 right-4"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.4 }}
            >
              <div 
                className="rounded-xl px-4 py-2"
                style={glassStyle}
              >
                <span className="text-white font-bold text-sm">
                  {product.series || 'PRO'}
                </span>
              </div>
            </motion.div>

            {/* Parallax Overlay Effect */}
            <motion.div 
              className="absolute inset-0 bg-linear-to-br from-white/0 via-white/5 to-white/10"
              animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Premium Content Section */}
        <div className="p-8 flex-1 flex flex-col relative">
          {/* Product Title */}
          <motion.h3 
            className="heading-premium-3 mb-4 group-hover:text-primary transition-colors duration-300"
            animate={isHovered ? { y: -2 } : { y: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {product.title}
          </motion.h3>

          {/* Product Description */}
          <p className="text-premium-body flex-1 mb-6 leading-relaxed">
            {product.summary}
          </p>

          {/* Premium Features List */}
          {product.features && (
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-steel-dark mb-3 tracking-wide">
                CARACTERÍSTICAS PRINCIPALES
              </h4>
              <ul className="space-y-2">
                {product.features.slice(0, 3).map((feature, idx) => (
                  <motion.li 
                    key={idx} 
                    className="flex items-start gap-3 text-sm text-steel-light"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx + 0.5 }}
                  >
                    <div className="w-5 h-5 bg-gradient-primary rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.5,8L11,13.5L7.5,10L6,11.5L11,16.5Z"/>
                      </svg>
                    </div>
                    <span className="font-medium">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          {/* Technical Specifications Premium */}
          {product.specs && (
            <div className="mb-6">
              <div className="card-industrial p-4 bg-linear-to-br from-gray-50 to-white border border-gray-100">
                <h4 className="text-sm font-semibold text-steel-dark mb-3 tracking-wide">
                  ESPECIFICACIONES TÉCNICAS
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient-premium mb-1">
                      {product.specs.capacity}
                    </div>
                    <div className="text-xs text-steel-light font-medium">
                      Capacidad de Enfriamiento
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient-premium mb-1">
                      {product.specs.efficiency}
                    </div>
                    <div className="text-xs text-steel-light font-medium">
                      Eficiencia Energética
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}


          {/* Premium Action Buttons */}
          <div className="space-y-3 mt-auto">
            <Link 
              href={`/productos/${product.slug || product.id}`}
              className="btn-premium btn-premium-primary w-full group/btn"
            >
              <svg className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Ver Especificaciones Completas
            </Link>
            
            <Link 
              href="#contacto" 
              className="btn-premium btn-premium-steel w-full group/btn"
            >
              <svg className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Solicitar Cotización 
            </Link>
          </div>

          {/* Premium Quality Indicator */}
          <div className="flex items-center justify-center gap-2 mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <span className="text-xs text-steel-light font-medium">
              Calidad Industrial 
            </span>
          </div>
        </div>

        {/* Premium Shimmer Effect */}
        <div className="shimmer opacity-0 group-hover:opacity-100"></div>

        {/* Premium Border Glow */}
        <motion.div 
          className="absolute inset-0 border-2 border-transparent rounded-3xl pointer-events-none"
          animate={isHovered ? { 
            borderColor: 'rgba(0, 76, 151, 0.3)',
            boxShadow: '0 0 30px rgba(0, 76, 151, 0.2)'
          } : { 
            borderColor: 'transparent',
            boxShadow: '0 0 0px rgba(0, 76, 151, 0)'
          }}
          transition={{ duration: 0.5 }}
        />
      </div>
      </motion.div>
    </Link>
  );
}
