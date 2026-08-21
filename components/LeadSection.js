'use client';

import Reveal from './Reveal';
import QuickQuoteForm from './QuickQuoteForm';
import { PHONE_DISPLAY, TEL_LINK, BUSINESS_HOURS, whatsappLink } from '@/lib/site';
import { trackContactClick } from '@/lib/analytics';

const STEPS = [
  {
    title: 'Cuéntanos de tu espacio',
    detail: 'Dos preguntas rápidas: superficie y tipo de operación.',
  },
  {
    title: 'Un ingeniero analiza tu caso',
    detail: 'Calculamos carga térmica, equipos necesarios y ahorro estimado.',
  },
  {
    title: 'Recibes propuesta y ahorro proyectado',
    detail: 'Con inversión, retorno estimado y plan de instalación.',
  },
];

/**
 * Sección principal de conversión de la home.
 * Combina el "qué pasa después de dejar mis datos" (elimina la incertidumbre
 * que frena a los compradores industriales) con el formulario corto.
 */
export default function LeadSection() {
  return (
    <section id="cotizar" className="section-premium relative overflow-hidden bg-white scroll-mt-24">
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'linear-gradient(var(--color-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="container-premium relative z-10">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal >
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-blue-100 bg-blue-50 px-5 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-blue-600 pulse-glow" />
              <span className="text-sm font-bold tracking-wide text-blue-700">SOLICITA TU COTIZACIÓN</span>
            </div>

            <h2 className="mb-5 text-4xl font-bold leading-tight text-slate-800 md:text-5xl">
              Del primer contacto a tu propuesta
              <span className="block bg-gradient-to-r from-blue-600 to-slate-700 bg-clip-text text-transparent">
                en menos de 24 horas
              </span>
            </h2>

            <p className="mb-10 text-lg leading-relaxed text-slate-600">
              No vendemos equipos de catálogo: dimensionamos la solución para tu nave, tu clima y
              tus horas de operación. Así trabajamos:
            </p>

            <ol className="mb-10 space-y-6">
              {STEPS.map((step, i) => (
                <li key={step.title} className="flex gap-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-bold text-slate-800">{step.title}</p>
                    <p className="mt-1 text-slate-600">{step.detail}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="mb-4 font-bold text-slate-800">¿Prefieres hablar directo?</p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={TEL_LINK}
                  onClick={() => trackContactClick('phone', 'lead_section')}
                  className="btn-premium btn-premium-primary flex-1"
                >
                  {PHONE_DISPLAY}
                </a>
                <a
                  href={whatsappLink('Hola, quiero cotizar un sistema de enfriamiento evaporativo para mi empresa.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackContactClick('whatsapp', 'lead_section')}
                  className="btn-premium btn-premium-steel flex-1"
                >
                  WhatsApp
                </a>
              </div>
              <p className="mt-4 text-sm text-slate-500">{BUSINESS_HOURS}</p>
            </div>
          </Reveal>

          <Reveal className="lg:sticky lg:top-28">
            <QuickQuoteForm context="home" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
