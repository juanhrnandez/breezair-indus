'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Páginas que necesitan header con fondo desde el inicio
  const needsBackground = ['/productos', '/nosotros', '/contacto'];
  const shouldHaveBackground = scrolled || needsBackground.includes(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants = {
    hidden: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.2 }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${shouldHaveBackground ? 'py-4' : 'py-6'} px-4 md:px-6`}
      style={{
        background: shouldHaveBackground 
          ? 'linear-gradient(135deg, rgba(0, 76, 151, 0.25) 0%, rgba(0, 43, 92, 0.35) 50%, rgba(47, 58, 69, 0.30) 100%)'
          : 'transparent',
        backdropFilter: shouldHaveBackground ? 'blur(55px) saturate(200%)' : 'none',
        WebkitBackdropFilter: shouldHaveBackground ? 'blur(55px) saturate(200%)' : 'none',
        border: shouldHaveBackground ? '1px solid rgba(255, 255, 255, 0.15)' : 'none',
        borderBottom: shouldHaveBackground ? '1px solid rgba(255, 255, 255, 0.15)' : 'none',
        boxShadow: shouldHaveBackground ? '0 20px 40px rgba(47, 58, 69, 0.4)' : 'none'
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
    >
      {/* Overlay de brillo cuando tiene background */}
      {shouldHaveBackground && (
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.05) 50%, transparent 100%)'
            }}
          />
                      <div 
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(0, 76, 151, 0.5) 20%, rgba(59, 130, 246, 0.4) 50%, rgba(0, 76, 151, 0.5) 80%, transparent 100%)'
                }}
              />
        </div>
      )}

      <div className="container-premium relative z-10">
        <nav className="flex items-center justify-between">
          {/* Logo Premium */}
                    {/* Logo Premium */}
          <Link href="/" className="flex items-center group">
            {/* Placeholder para el logo de Breezair - reemplaza el src con tu archivo de logo */}
            <Image 
              src="/images/breezair-logo-2.png" 
              alt="Breezair Logo" 
              width={120}
              height={120}
              className="object-contain" 
            />
          </Link>

          {/* Navegación Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            {[
              { href: '/', label: 'Inicio' },
              { href: '/productos', label: 'Productos' },
              { href: '#servicios', label: 'Servicios' },
              { href: '/nosotros', label: 'Nosotros' },
              { href: '/contacto', label: 'Contacto' }
            ].map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <Link 
                  href={item.href}
                  className="relative font-medium transition-all duration-300 py-2 px-1 group text-white/90 hover:text-white"
                  style={{
                    color: shouldHaveBackground ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.9)',
                    textShadow: shouldHaveBackground ? '0 2px 4px rgba(0, 0, 0, 0.2)' : 'none'
                  }}
                >
                  {item.label}
                  <span 
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"
                    style={{
                      filter: shouldHaveBackground ? 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))' : 'none'
                    }}
                  ></span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link 
                href="/contacto" 
                className={scrolled ? "btn-premium btn-premium-primary" : "btn-premium btn-premium-outline"}
                style={{
                  background: scrolled 
                    ? 'linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%)' 
                    : 'rgba(255, 255, 255, 0.1)',
                  borderColor: scrolled ? 'rgba(59, 130, 246, 0.5)' : 'rgba(255, 255, 255, 0.3)',
                  backdropFilter: scrolled ? 'blur(10px)' : 'blur(20px)',
                  boxShadow: scrolled ? '0 4px 15px rgba(59, 130, 246, 0.3)' : 'none'
                }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Cotizar Ahora
              </Link>
            </motion.div>
          </div>

          {/* Botón Hamburguesa */}
          <motion.button
            className="lg:hidden relative w-10 h-10 rounded-lg glass-effect flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <motion.span
                className="block w-5 h-0.5 bg-white rounded-full"
                animate={{
                  rotate: isOpen ? 45 : 0,
                  y: isOpen ? 2 : -2
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-5 h-0.5 bg-white rounded-full mt-1"
                animate={{
                  opacity: isOpen ? 0 : 1
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-5 h-0.5 bg-white rounded-full mt-1"
                animate={{
                  rotate: isOpen ? -45 : 0,
                  y: isOpen ? -2 : 2
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </nav>

        {/* Menú Mobile */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden absolute top-full left-0 right-0 mt-4 mx-6"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div 
                className="rounded-2xl shadow-industrial-lg border border-white/20 py-6"
                style={{
                  background: shouldHaveBackground 
                    ? 'linear-gradient(135deg, rgba(0, 76, 151, 0.20) 0%, rgba(0, 43, 92, 0.30) 50%, rgba(47, 58, 69, 0.25) 100%)'
                    : 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: shouldHaveBackground ? 'blur(25px) saturate(180%)' : 'blur(20px)',
                  WebkitBackdropFilter: shouldHaveBackground ? 'blur(25px) saturate(180%)' : 'blur(20px)'
                }}
              >
                <div className="space-y-1">
                  {[
                    { href: '/', label: 'Inicio', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
                    { href: '/productos', label: 'Productos', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10' },
                    { href: '#servicios', label: 'Servicios', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
                    { href: '/nosotros', label: 'Nosotros', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
                    { href: '/contacto', label: 'Contacto', icon: 'M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' }
                  ].map((item, index) => (
                    <motion.div
                      key={item.href}
                      variants={menuItemVariants}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center space-x-3 px-6 py-3 text-white hover:bg-white/10 rounded-lg transition-all duration-300 group"
                        onClick={() => setIsOpen(false)}
                      >
                        <svg className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                        </svg>
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-6 px-6">
                  <Link 
                    href="/contacto" 
                    className="btn-premium btn-premium-primary w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Solicitar Cotización
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
