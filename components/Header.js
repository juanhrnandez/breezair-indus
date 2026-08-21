'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { MENU } from '@/lib/navigation';
import { PHONE_DISPLAY, TEL_LINK, EMAIL_SALES, MAILTO_LINK, BUSINESS_HOURS } from '@/lib/site';
import { trackContactClick } from '@/lib/analytics';

/**
 * Encabezado principal.
 *
 * Dos franjas con trabajos distintos:
 *   1. Utilidad — condición de distribuidor oficial y datos de contacto. Sacar
 *      el teléfono de la fila principal es lo que descongestiona el conjunto.
 *   2. Navegación — logotipo, tres entradas con mega-menú y un único CTA.
 *
 * Antes había seis destinos compitiendo en una sola fila. El problema no era
 * el espaciado sino la cantidad: seis decisiones simultáneas no se leen.
 *
 * El mega-menú se abre con clic o con teclado, se cierra con Escape, con clic
 * fuera y al cambiar de ruta. No se abre al pasar el ratón: en escritorio eso
 * dispara paneles que el usuario no pidió.
 */

const EASE = [0.22, 1, 0.36, 1];

export default function Header() {
  const [openId, setOpenId] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef(null);
  const reduceMotion = useReducedMotion();

  // El encabezado flota sólo sobre el hero de la portada; en el resto es sólido.
  const overHero = pathname === '/' && !scrolled && !openId && !mobileOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpenId(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!openId && !mobileOpen) return;

    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpenId(null);
        setMobileOpen(false);
      }
    };
    const onPointer = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) setOpenId(null);
    };

    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onPointer);
    };
  }, [openId, mobileOpen]);

  // Con el menú móvil abierto, el fondo no debe desplazarse
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isActive = useCallback(
    (href) => (href === '/' ? pathname === '/' : pathname.startsWith(href.split('#')[0])),
    [pathname]
  );

  const panel = MENU.find((m) => m.id === openId);

  return (
    <motion.header
      ref={headerRef}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.5, ease: EASE }}
      className="fixed inset-x-0 top-0 z-50"
    >
      {/* ── Franja de utilidad ─────────────────────────────────────────── */}
      <div
        className={`hidden lg:block border-b transition-colors duration-300 ${
          overHero ? 'border-white/15 bg-[#0A121C]/40 backdrop-blur-sm' : 'border-[#1F2D3D] bg-[#0A121C]'
        }`}
      >
        <div className="container-premium">
          <div className="flex h-10 items-center justify-between text-[13px]">
            <p className="flex items-center gap-2.5 font-medium text-white/70">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#22B8D6]" />
              Distribuidor oficial de Breezair · Seeley International en México
            </p>

            <div className="flex items-center gap-6 text-white/70">
              <span className="hidden xl:inline">{BUSINESS_HOURS}</span>
              <a
                href={MAILTO_LINK}
                onClick={() => trackContactClick('email', 'header_utility')}
                className="transition-colors hover:text-white"
              >
                {EMAIL_SALES}
              </a>
              <a
                href={TEL_LINK}
                onClick={() => trackContactClick('phone', 'header_utility')}
                className="flex items-center gap-2 font-semibold text-white transition-colors hover:text-[#22B8D6]"
              >
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Franja de navegación ───────────────────────────────────────── */}
      <div
        className={`border-b transition-[background-color,border-color,box-shadow] duration-300 ${
          overHero
            ? 'border-transparent bg-transparent'
            : 'border-slate-200 bg-white/92 shadow-[0_1px_3px_rgba(10,18,28,0.06)] backdrop-blur-xl backdrop-saturate-150'
        }`}
      >
        <div className="container-premium">
          <nav
            aria-label="Navegación principal"
            className={`flex items-center justify-between transition-[height] duration-300 ${
              scrolled ? 'h-16' : 'h-[4.75rem]'
            }`}
          >
            <Link href="/" className="relative z-10 flex shrink-0 items-center" aria-label="Breezair Industrial México, ir al inicio">
              <Image
                src={overHero ? '/images/breezair-logo-2.png' : '/dark-logo.svg'}
                alt="Breezair"
                width={132}
                height={40}
                className="h-9 w-auto object-contain"
                style={{ width: 'auto', height: 'auto', maxHeight: '2.25rem' }}
                priority
              />
            </Link>

            <ul className="hidden lg:flex items-center gap-1">
              {MENU.map((item) => {
                const open = openId === item.id;
                const active =
                  isActive(item.href) || item.columns.some((c) => c.items.some((i) => isActive(i.href)));

                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => setOpenId(open ? null : item.id)}
                      aria-expanded={open}
                      aria-haspopup="true"
                      className={`relative flex items-center gap-1.5 rounded-md px-4 py-2.5 text-[15px] font-medium transition-colors duration-200 ${
                        overHero
                          ? 'text-white/85 hover:text-white'
                          : open || active
                            ? 'text-[#0A4FA0]'
                            : 'text-slate-700 hover:text-[#0A4FA0]'
                      }`}
                    >
                      {item.label}
                      <svg
                        className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.2}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>

                      {active && !overHero && (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-[#0A4FA0]"
                          transition={{ duration: reduceMotion ? 0 : 0.35, ease: EASE }}
                        />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-2">
              <Link
                href="/contacto#cotizar"
                onClick={() => trackContactClick('form', 'header_cta')}
                className={`hidden lg:inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-[15px] font-semibold transition-all duration-200 ${
                  overHero
                    ? 'border border-white/35 bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-[#073A78]'
                    : 'bg-[#0A4FA0] text-white shadow-[0_12px_32px_-8px_rgba(10,79,160,0.38)] hover:-translate-y-px hover:bg-[#073A78]'
                }`}
              >
                Cotizar proyecto
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" />
                </svg>
              </Link>

              <button
                type="button"
                onClick={() => setMobileOpen((v) => !v)}
                aria-expanded={mobileOpen}
                aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
                className={`lg:hidden flex h-11 w-11 items-center justify-center rounded-lg border transition-colors ${
                  overHero ? 'border-white/25 text-white' : 'border-slate-200 text-slate-800'
                }`}
              >
                <span className="relative block h-4 w-5" aria-hidden="true">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="absolute left-0 block h-[2px] w-full rounded-full bg-current"
                      initial={false}
                      animate={
                        mobileOpen
                          ? i === 1
                            ? { opacity: 0, top: 7 }
                            : { top: 7, rotate: i === 0 ? 45 : -45, opacity: 1 }
                          : { top: i * 7, rotate: 0, opacity: 1 }
                      }
                      transition={{ duration: reduceMotion ? 0 : 0.25, ease: EASE }}
                    />
                  ))}
                </span>
              </button>
            </div>
          </nav>
        </div>

        {/* ── Panel del mega-menú ──────────────────────────────────────── */}
        <AnimatePresence>
          {panel && (
            <motion.div
              key={panel.id}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: reduceMotion ? 0 : 0.22, ease: EASE }}
              className="absolute inset-x-0 top-full hidden lg:block border-b border-slate-200 bg-white shadow-[0_24px_48px_-24px_rgba(10,18,28,0.28)]"
            >
              <div className="container-premium">
                <div className="grid gap-10 py-9 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)_minmax(0,1.1fr)]">
                  <div className="border-r border-slate-100 pr-8">
                    <p className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0E8FAB]">
                      {panel.label}
                    </p>
                    <p className="mb-3 font-display text-2xl font-bold leading-[1.1] text-[#0A121C]">
                      {panel.intro.title}
                    </p>
                    <p className="mb-5 text-[15px] leading-relaxed text-slate-600">{panel.intro.text}</p>
                    <Link
                      href={panel.intro.href}
                      className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#0A4FA0] underline-offset-4 hover:underline"
                    >
                      {panel.intro.cta}
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" />
                      </svg>
                    </Link>
                  </div>

                  {panel.columns.map((col, ci) => (
                    <div key={col.title}>
                      <p className="mb-4 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                        {col.title}
                      </p>
                      <ul className="space-y-0.5">
                        {col.items.map((it, ii) => (
                          <motion.li
                            key={it.href}
                            initial={{ opacity: 0, x: -6 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: reduceMotion ? 0 : 0.25,
                              delay: reduceMotion ? 0 : 0.03 + ci * 0.04 + ii * 0.025,
                              ease: EASE,
                            }}
                          >
                            <Link
                              href={it.href}
                              className="group flex items-baseline justify-between gap-4 rounded-md px-3 py-2 transition-colors duration-150 hover:bg-[#EAF2FC]"
                            >
                              <span
                                className={`text-[15px] leading-snug transition-colors ${
                                  it.strong
                                    ? 'font-semibold text-[#0A4FA0]'
                                    : 'font-medium text-slate-700 group-hover:text-[#0A4FA0]'
                                }`}
                              >
                                {it.label}
                              </span>
                              {it.note && (
                                <span className="shrink-0 font-mono text-[11px] uppercase tracking-wider text-slate-400">
                                  {it.note}
                                </span>
                              )}
                            </Link>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Menú móvil ─────────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
            className="lg:hidden fixed inset-x-0 bottom-0 top-16 overflow-y-auto overscroll-contain bg-white"
          >
            <div className="container-premium py-6">
              {MENU.map((section, si) => (
                <motion.section
                  key={section.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: reduceMotion ? 0 : 0.3, delay: reduceMotion ? 0 : si * 0.06, ease: EASE }}
                  className="border-b border-slate-100 py-5 first:pt-0"
                >
                  <Link href={section.href} className="mb-3 block font-display text-2xl font-bold text-[#0A121C]">
                    {section.label}
                  </Link>
                  <div className="space-y-4">
                    {section.columns.map((col) => (
                      <div key={col.title}>
                        <p className="mb-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                          {col.title}
                        </p>
                        <ul>
                          {col.items.map((it) => (
                            <li key={it.href}>
                              <Link
                                href={it.href}
                                className={`block py-2 text-[15px] ${
                                  it.strong ? 'font-semibold text-[#0A4FA0]' : 'text-slate-700'
                                }`}
                              >
                                {it.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.section>
              ))}

              <div className="mt-6 space-y-3 border-t border-slate-200 pt-5">
                <Link
                  href="/contacto#cotizar"
                  onClick={() => trackContactClick('form', 'header_mobile')}
                  className="btn-premium btn-premium-primary w-full"
                >
                  Cotizar proyecto
                </Link>
                <a
                  href={TEL_LINK}
                  onClick={() => trackContactClick('phone', 'header_mobile')}
                  className="flex items-center justify-center gap-2 py-2 font-semibold text-slate-700"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
