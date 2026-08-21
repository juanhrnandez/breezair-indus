'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { whatsappLink } from '@/lib/site';
import { trackContactClick } from '@/lib/analytics';

/**
 * Hero de portada.
 *
 * Composición editorial asimétrica en lugar de la pila centrada de siempre: el
 * texto ocupa la columna izquierda sobre el degradado más denso —donde el tipo
 * es legible— y la fotografía respira a la derecha.
 *
 * La imagen es una nave logística real, no un primer plano del logotipo: el
 * comprador tiene que reconocer su propio espacio en la primera pantalla.
 *
 * Las tres cifras van en una regla técnica al pie, con retícula y tipografía
 * monoespaciada, no en tarjetas de cristal flotantes.
 */

const EASE = [0.22, 1, 0.36, 1];

const CIFRAS = [
  { valor: '87', unidad: '%', label: 'Menos consumo eléctrico', nota: 'vs. aire acondicionado' },
  { valor: '100', unidad: '%', label: 'Aire exterior filtrado', nota: 'sin recirculación' },
  { valor: '1.5', unidad: 'kW', label: 'Por equipo industrial', nota: '≈ 17,000 m³/h' },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const entrada = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 22 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : i * 0.08, ease: EASE },
    }),
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#0A121C]">
      {/* ── Fotografía ─────────────────────────────────────────────────── */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/breezair-3.jpg"
          alt="Interior de un centro de distribución climatizado con sistemas Breezair"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Degradado direccional: denso donde va el texto, limpio donde va la foto */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A121C] via-[#0A121C]/88 to-[#0A121C]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A121C] via-transparent to-[#0A121C]/70" />
      </div>

      {/* Retícula técnica: textura de plano, casi imperceptible */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)',
          backgroundSize: '88px 88px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 30% 40%, #000 30%, transparent 75%)',
        }}
      />

      <div className="container-premium relative">
        <div className="grid items-center gap-12 pb-16 pt-36 lg:min-h-[86vh] lg:grid-cols-12 lg:gap-8 lg:pb-24 lg:pt-44">
          <div className="lg:col-span-7 xl:col-span-6">
            {/* Antetítulo */}
            <motion.div
              custom={0}
              variants={entrada}
              initial="hidden"
              animate="visible"
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-[#22B8D6]" />
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#22B8D6]">
                Enfriamiento evaporativo industrial
              </span>
            </motion.div>

            {/* Titular */}
            <motion.h1
              custom={1}
              variants={entrada}
              initial="hidden"
              animate="visible"
              className="font-display text-[clamp(2.75rem,6.2vw,5rem)] font-bold uppercase leading-[0.94] tracking-[-0.01em] text-white"
            >
              Climatiza tu nave
              <span className="mt-1 block text-[#5FD3EB]">sin la factura del aire acondicionado</span>
            </motion.h1>

            {/* Bajada */}
            <motion.p
              custom={2}
              variants={entrada}
              initial="hidden"
              animate="visible"
              className="mt-7 max-w-xl text-lg leading-relaxed text-slate-300 md:text-xl"
            >
              Un equipo Breezair trata el aire de una nave completa con el consumo de un par de
              electrodomésticos. Somos el distribuidor oficial de Seeley International en México:
              dimensionamos el proyecto antes de cotizarlo.
            </motion.p>

            {/* Acciones */}
            <motion.div
              custom={3}
              variants={entrada}
              initial="hidden"
              animate="visible"
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Link
                href="#cotizar"
                onClick={() => trackContactClick('form', 'hero_primary')}
                className="group inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#0A4FA0] px-7 py-4 text-base font-semibold text-white shadow-[0_16px_40px_-12px_rgba(10,79,160,0.7)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1E6FCC]"
              >
                Cotizar mi proyecto
                <svg
                  className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.2}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" />
                </svg>
              </Link>

              <Link
                href="#calculadora"
                onClick={() => trackContactClick('calculator', 'hero_secondary')}
                className="inline-flex items-center justify-center gap-2.5 rounded-lg border border-white/25 px-7 py-4 text-base font-semibold text-white transition-all duration-200 hover:border-white/60 hover:bg-white/5"
              >
                Calcular mi ahorro
              </Link>
            </motion.div>

            {/* Alternativa inmediata */}
            <motion.p
              custom={4}
              variants={entrada}
              initial="hidden"
              animate="visible"
              className="mt-6 text-sm text-slate-400"
            >
              Cotización sin costo y sin compromiso · o{' '}
              <a
                href={whatsappLink('Hola, vi el sitio de Breezair y quiero información para climatizar mi planta.')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackContactClick('whatsapp', 'hero')}
                className="font-semibold text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
              >
                escríbenos por WhatsApp
              </a>
            </motion.p>
          </div>
        </div>

        {/* ── Regla técnica de cifras ────────────────────────────────────── */}
        <motion.dl
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.5, ease: EASE }}
          className="relative grid grid-cols-1 border-t border-white/12 sm:grid-cols-3"
        >
          {CIFRAS.map((c, i) => (
            <div
              key={c.label}
              className={`py-7 sm:py-8 ${i > 0 ? 'border-t border-white/12 sm:border-l sm:border-t-0 sm:pl-8' : ''} ${
                i < 2 ? 'sm:pr-8' : ''
              }`}
            >
              <dd className="flex items-baseline gap-1.5">
                <span className="font-display text-5xl font-bold leading-none tracking-tight text-white tabular">
                  {c.valor}
                </span>
                <span className="font-display text-2xl font-semibold text-[#5FD3EB]">{c.unidad}</span>
              </dd>
              <dt className="mt-2.5 text-[15px] font-semibold text-white/85">{c.label}</dt>
              <p className="mt-0.5 font-mono text-[11px] uppercase tracking-wider text-slate-400">{c.nota}</p>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
