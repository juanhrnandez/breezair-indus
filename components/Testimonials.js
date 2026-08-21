'use client';

import Link from 'next/link';
import Reveal from './Reveal';

/**
 * Testimonios.
 *
 * Reescrito en el lenguaje industrial del resto del sitio. Lo anterior eran
 * tarjetas de cristal sobre una fotografía clara: texto blanco sobre fondo
 * claro, con estrellas amarillas y pastillas translúcidas. Ilegible y con
 * aspecto de plantilla.
 *
 * Aquí la cita manda —es lo único que el lector quiere— y las cifras van como
 * datos alineados al pie de cada testimonio, en monoespaciada. Fondo de tinta
 * sólida, sin imagen de por medio: el contraste deja de ser un problema.
 */

const TESTIMONIOS = [
  {
    name: 'Ing. Carlos Mendoza Rivera',
    position: 'Director de Operaciones Industriales',
    company: 'Grupo Industrial Monterrey S.A. de C.V.',
    initials: 'CM',
    text: 'La implementación de sistemas Breezair transformó completamente nuestras operaciones. Alcanzamos un 72 % de reducción en costos energéticos y mejoramos significativamente el ambiente laboral.',
    industry: 'Manufactura automotriz',
    location: 'Monterrey, Nuevo León',
    datos: [
      { valor: '72 %', label: 'Ahorro energético' },
      { valor: '16 meses', label: 'Retorno de inversión' },
    ],
  },
  {
    name: 'Dra. Ana Patricia Ruiz Vega',
    position: 'Gerente de Sustentabilidad Corporativa',
    company: 'Textiles del Pacífico Internacional',
    initials: 'AR',
    text: 'Breezair nos permitió cumplir objetivos ambientales críticos mientras optimizábamos procesos. La tecnología evaporativa encaja con nuestra estrategia de sostenibilidad y eficiencia operativa.',
    industry: 'Textil industrial',
    location: 'Guadalajara, Jalisco',
    datos: [
      { valor: '68 %', label: 'Ahorro energético' },
      { valor: '18 meses', label: 'Retorno de inversión' },
    ],
  },
  {
    name: 'Ing. Roberto Silva Hernández',
    position: 'Jefe de Ingeniería y Mantenimiento',
    company: 'Corporativo Alimentos del Norte',
    initials: 'RS',
    text: 'Tres años de operación continua sin fallas. La confiabilidad y el bajo mantenimiento de Breezair superaron nuestras expectativas: 85 % menos intervenciones que con los sistemas anteriores.',
    industry: 'Procesamiento de alimentos',
    location: 'Tijuana, Baja California',
    datos: [
      { valor: '85 %', label: 'Menos mantenimiento' },
      { valor: '12 meses', label: 'Retorno de inversión' },
    ],
  },
  {
    name: 'Lic. María Elena Castillo',
    position: 'Directora de Infraestructura',
    company: 'Logística y Distribución Continental',
    initials: 'MC',
    text: 'La solución integral de CG International para nuestros centros de distribución es excepcional. Control de temperatura en 45,000 m² con un consumo eléctrico mínimo.',
    industry: 'Logística industrial',
    location: 'Estado de México',
    datos: [
      { valor: '45,000 m²', label: 'Superficie climatizada' },
      { valor: '14 meses', label: 'Retorno de inversión' },
    ],
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#0A121C] py-24 lg:py-28">
      {/* Retícula técnica, apenas perceptible */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
          backgroundSize: '96px 96px',
          maskImage: 'radial-gradient(ellipse 70% 50% at 50% 0%, #000 20%, transparent 70%)',
        }}
      />

      <div className="container-premium relative">
        <Reveal className="mb-14 max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#22B8D6]" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#22B8D6]">
              Instalaciones en operación
            </span>
          </div>
          <h2 className="font-display text-[clamp(2rem,4.2vw,3.25rem)] font-bold uppercase leading-[1.02] text-white">
            Lo que dicen quienes ya
            <span className="block text-[#5FD3EB]">bajaron su recibo de luz</span>
          </h2>
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
          {TESTIMONIOS.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 0.07}
              className="flex flex-col bg-[#0E1822] p-8 lg:p-10"
            >
              {/* La cita es lo que importa: va primero y con más peso */}
              <blockquote className="mb-8 flex-1 text-[1.0625rem] leading-relaxed text-slate-200 lg:text-lg">
                <span aria-hidden="true" className="mr-1 font-display text-3xl leading-none text-[#22B8D6]">
                  “
                </span>
                {t.text}
              </blockquote>

              {/* Atribución */}
              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/5 font-mono text-sm font-semibold text-[#5FD3EB]">
                  {t.initials}
                </span>
                <div className="min-w-0">
                  <p className="truncate font-semibold text-white">{t.name}</p>
                  <p className="truncate text-sm text-slate-400">
                    {t.position} · {t.company}
                  </p>
                </div>
              </div>

              {/* Contexto y cifras, como ficha técnica */}
              <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-white/10 pt-6">
                {t.datos.map((d) => (
                  <div key={d.label}>
                    <dd className="font-display text-2xl font-bold leading-none text-white tabular">{d.valor}</dd>
                    <dt className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-slate-500">
                      {d.label}
                    </dt>
                  </div>
                ))}
              </dl>

              <p className="mt-6 font-mono text-[11px] uppercase tracking-wider text-slate-500">
                {t.industry} · {t.location}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-slate-400">
            Cada instalación parte de un cálculo de carga térmica sobre la nave real. Los resultados
            dependen del clima local y de las horas de operación.
          </p>
          <Link
            href="/contacto#cotizar"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-white/25 px-6 py-3.5 font-semibold text-white transition-colors duration-200 hover:border-white/60 hover:bg-white/5"
          >
            Solicitar el cálculo de mi nave
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" />
            </svg>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
