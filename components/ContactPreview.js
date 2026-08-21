'use client';

import Link from 'next/link';
import Reveal from './Reveal';
import {
  PHONE_DISPLAY,
  TEL_LINK,
  EMAIL_SALES,
  MAILTO_LINK,
  whatsappLink,
  BUSINESS_HOURS,
  RESPONSE_PROMISE,
} from '@/lib/site';
import { trackContactClick } from '@/lib/analytics';

/**
 * Banda de cierre con los canales de contacto.
 *
 * Antes esta sección repetía lo que ya hacían sus vecinas: un segundo bloque de
 * cifras idéntico al de la presentación de empresa, y una llamada a cotizar
 * justo debajo del formulario de LeadSection. Dos secciones de contacto
 * seguidas no dan más conversión: dan la sensación de un sitio armado por partes.
 *
 * Queda sólo lo que no está en ningún otro lugar: los tres canales, con lo que
 * el visitante necesita saber de cada uno —a quién llega y en cuánto tiempo—.
 */

const CANALES = [
  {
    id: 'telefono',
    canal: 'phone',
    etiqueta: 'Llamada directa',
    valor: PHONE_DISPLAY,
    nota: BUSINESS_HOURS,
    detalle: 'Hablas con un especialista, no con un conmutador.',
    href: TEL_LINK,
    externo: false,
    icono: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    ),
  },
  {
    id: 'whatsapp',
    canal: 'whatsapp',
    etiqueta: 'WhatsApp',
    valor: 'Escríbenos ahora',
    nota: 'Respuesta el mismo día',
    detalle: 'El canal más rápido si sólo quieres una orientación inicial.',
    href: whatsappLink('Hola, quiero información sobre enfriamiento evaporativo Breezair para mi planta.'),
    externo: true,
    icono: null,
  },
  {
    id: 'correo',
    canal: 'email',
    etiqueta: 'Correo',
    valor: EMAIL_SALES,
    nota: RESPONSE_PROMISE,
    detalle: 'Para enviar planos, superficies y condiciones del sitio.',
    href: MAILTO_LINK,
    externo: false,
    icono: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
  },
];

const WhatsAppGlifo = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 016.988 2.898 9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export default function ContactPreview() {
  return (
    <section id="contacto" className="scroll-mt-24 border-t border-slate-200 bg-slate-50 py-20 lg:py-24">
      <div className="container-premium">
        <Reveal className="mb-12 max-w-2xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#0E8FAB]" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0E8FAB]">
              Contacto directo
            </span>
          </div>
          <h2 className="font-display text-[clamp(1.85rem,3.6vw,2.75rem)] font-bold uppercase leading-[1.05] text-[#0A121C]">
            ¿Prefieres hablar antes de llenar un formulario?
          </h2>
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 md:grid-cols-3">
          {CANALES.map((c) => {
            const clases =
              'group flex flex-col bg-white p-8 transition-colors duration-200 hover:bg-[#FAFCFE]';
            const extra = c.externo ? { target: '_blank', rel: 'noopener noreferrer' } : {};

            return (
              <a
                key={c.id}
                href={c.href}
                {...extra}
                onClick={() => trackContactClick(c.canal, 'contact_preview')}
                className={clases}
              >
                <span className="mb-6 flex h-11 w-11 items-center justify-center rounded-lg bg-[#EAF2FC] text-[#0A4FA0] transition-colors duration-200 group-hover:bg-[#0A4FA0] group-hover:text-white">
                  {c.icono ? (
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.9} viewBox="0 0 24 24" aria-hidden="true">
                      {c.icono}
                    </svg>
                  ) : (
                    <WhatsAppGlifo />
                  )}
                </span>

                <span className="mb-1 block font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                  {c.etiqueta}
                </span>
                <span className="mb-2 block text-xl font-semibold text-[#0A121C] transition-colors duration-200 group-hover:text-[#0A4FA0]">
                  {c.valor}
                </span>
                <span className="mb-6 block text-[15px] leading-relaxed text-slate-600">{c.detalle}</span>

                <span className="mt-auto flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-slate-400">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#22B8D6]" />
                  {c.nota}
                </span>
              </a>
            );
          })}
        </div>

        <Reveal
          delay={0.12}
          className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-slate-600">
            También puedes dejarnos los datos de tu nave y te llamamos nosotros.
          </p>
          <Link
            href="#cotizar"
            onClick={() => trackContactClick('form', 'contact_preview')}
            className="inline-flex shrink-0 items-center gap-2 font-semibold text-[#0A4FA0] underline-offset-4 hover:underline"
          >
            Ir al formulario de cotización
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" />
            </svg>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
