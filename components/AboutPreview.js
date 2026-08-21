'use client';

import Link from 'next/link';
import Image from 'next/image';
import Reveal from './Reveal';
import { FUNDACION, EXPERIENCIA_TEXTO, CIFRAS } from '@/lib/company';

/**
 * Presentación de la empresa en portada.
 *
 * Reescrita por tres motivos, no sólo por estética:
 *
 *  1. El CTA «Agendar Reunión» apuntaba a `#contacto`, un ancla que no existe
 *     en la portada. Clic muerto.
 *  2. Declaraba «ENERGY STAR Partner». Es un programa de la EPA con marca
 *     registrada y no hay nada que respalde esa afiliación; afirmarlo es un
 *     riesgo innecesario. Se sustituye por la credencial que sí es verificable
 *     y que además vale más aquí: distribuidor oficial de Seeley International.
 *  3. Presumía «30+ años de experiencia promedio» del equipo en una empresa de
 *     27 años. Retirado.
 *
 * Composición: declaración a la izquierda, fotografía real a la derecha con
 * placa de pie —no un rótulo translúcido encima— y las cifras en regla técnica.
 */

const CREDENCIALES = [
  {
    titulo: 'Distribuidor oficial',
    detalle: `Breezair · Seeley International en México desde ${FUNDACION}`,
  },
  {
    titulo: 'Ingeniería de proyecto propia',
    detalle: 'Cálculo de carga térmica y dimensionamiento antes de cotizar',
  },
  {
    titulo: 'Refacciones originales',
    detalle: 'Paneles Chillcel® y componentes de fábrica, no genéricos',
  },
  {
    titulo: 'Servicio post-venta nacional',
    detalle: 'Instalación, mantenimiento y soporte técnico en todo el país',
  },
];

const CIFRAS_RAIL = [
  { valor: EXPERIENCIA_TEXTO.replace(' años', ''), label: 'Años de experiencia', nota: `desde ${FUNDACION}` },
  { valor: CIFRAS.proyectos, label: 'Proyectos completados', nota: 'instalaciones industriales' },
  { valor: CIFRAS.ahorroPromedio, label: 'Ahorro energético', nota: 'vs. aire acondicionado' },
];

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-28">
      <div className="container-premium">
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          {/* ── Declaración ───────────────────────────────────────────── */}
          <Reveal>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#0E8FAB]" />
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0E8FAB]">
                CG International
              </span>
            </div>

            <h2 className="mb-6 font-display text-[clamp(2rem,4vw,3rem)] font-bold uppercase leading-[1.03] text-[#0A121C]">
              No vendemos equipos.
              <span className="block text-[#0A4FA0]">Dimensionamos instalaciones.</span>
            </h2>

            <p className="mb-10 max-w-xl text-lg leading-relaxed text-slate-600">
              Somos el distribuidor oficial de Breezair y Seeley International en México. Eso
              significa acceso a la documentación técnica de fábrica, a las refacciones correctas y
              a ingenieros que conocen estos equipos por dentro — no un catálogo con precios.
            </p>

            <ul className="mb-10 space-y-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200">
              {CREDENCIALES.map((c) => (
                <li key={c.titulo} className="flex gap-4 bg-white p-5">
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#0A4FA0]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.4}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    <span className="block font-semibold text-slate-900">{c.titulo}</span>
                    <span className="mt-0.5 block text-sm leading-snug text-slate-500">{c.detalle}</span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/nosotros" className="btn-premium btn-premium-primary">
                Conocer la empresa
              </Link>
              <Link href="#cotizar" className="btn-premium btn-premium-steel">
                Solicitar cotización
              </Link>
            </div>
          </Reveal>

          {/* ── Fotografía con placa de pie ───────────────────────────── */}
          <Reveal delay={0.1} className="lg:pt-4">
            <figure className="overflow-hidden rounded-2xl border border-slate-200">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/breezair-5.jpg"
                  alt="Equipos Breezair instalados en cubierta de una nave industrial"
                  fill
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="flex items-baseline justify-between gap-4 border-t border-slate-200 bg-slate-50 px-6 py-4">
                <span className="text-sm font-semibold text-slate-900">
                  Instalación en cubierta
                </span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500">
                  Equipos Breezair en operación
                </span>
              </figcaption>
            </figure>

            {/* Regla técnica de cifras */}
            <dl className="mt-8 grid grid-cols-3 border-t border-slate-200">
              {CIFRAS_RAIL.map((c, i) => (
                <div key={c.label} className={`py-6 ${i > 0 ? 'border-l border-slate-200 pl-5' : ''} ${i < 2 ? 'pr-5' : ''}`}>
                  <dd className="font-display text-3xl font-bold leading-none text-[#0A121C] tabular">{c.valor}</dd>
                  <dt className="mt-2 text-sm font-semibold leading-snug text-slate-700">{c.label}</dt>
                  <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-slate-400">{c.nota}</p>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
