'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { TEL_LINK, PHONE_DISPLAY, whatsappLink } from '@/lib/site';
import { trackContactClick } from '@/lib/analytics';

const WhatsAppIcon = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 016.988 2.898 9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export default function FloatingCTA() {
  const [showLabel, setShowLabel] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Aparece tras un scroll mínimo para no competir con el CTA del hero.
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // Invitación discreta: la etiqueta se abre sola una vez a los 6 s.
    const t = setTimeout(() => setShowLabel(true), 6000);
    const t2 = setTimeout(() => setShowLabel(false), 12000);
    return () => {
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, []);

  const waHref = whatsappLink(
    'Hola, estoy en breezair.com.mx y quiero cotizar un sistema de enfriamiento evaporativo industrial.'
  );

  return (
    <>
      {/* Burbuja WhatsApp */}
      <AnimatePresence>
        {visible && (
          <motion.a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackContactClick('whatsapp', 'floating_bubble')}
            aria-label="Cotizar por WhatsApp"
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 20 }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            onMouseEnter={() => setShowLabel(true)}
            onMouseLeave={() => setShowLabel(false)}
            className="fixed right-4 bottom-24 lg:bottom-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] pl-4 pr-4 py-4 text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)]"
          >
            <WhatsAppIcon className="w-7 h-7 shrink-0" />
            <AnimatePresence>
              {showLabel && (
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  exit={{ opacity: 0, width: 0 }}
                  className="hidden sm:block whitespace-nowrap font-semibold text-sm overflow-hidden"
                >
                  Cotiza por WhatsApp
                </motion.span>
              )}
            </AnimatePresence>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-60" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-white" />
            </span>
          </motion.a>
        )}
      </AnimatePresence>

      {/* Barra de acción móvil */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 grid grid-cols-3 border-t border-white/10 bg-slate-900/95 backdrop-blur-md text-white pb-[env(safe-area-inset-bottom)]">
        <a
          href={TEL_LINK}
          onClick={() => trackContactClick('phone', 'mobile_bar')}
          className="flex flex-col items-center justify-center gap-1 py-3 text-[11px] font-semibold active:bg-white/10"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Llamar
        </a>
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackContactClick('whatsapp', 'mobile_bar')}
          className="flex flex-col items-center justify-center gap-1 py-3 text-[11px] font-semibold border-x border-white/10 active:bg-white/10"
        >
          <WhatsAppIcon className="w-5 h-5" />
          WhatsApp
        </a>
        <Link
          href="/contacto#cotizar"
          onClick={() => trackContactClick('form', 'mobile_bar')}
          className="flex flex-col items-center justify-center gap-1 py-3 text-[11px] font-bold bg-blue-600 active:bg-blue-700"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Cotizar
        </Link>
      </div>

      {/* Evita que la barra tape el final del contenido en móvil */}
      <div className="lg:hidden h-[68px]" aria-hidden="true" />
      <span className="sr-only">Teléfono de ventas {PHONE_DISPLAY}</span>
    </>
  );
}
