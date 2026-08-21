'use client';

import Reveal from './Reveal';
import { RESPONSE_PROMISE } from '@/lib/site';

/**
 * Franja de credibilidad justo debajo del hero.
 *
 * Responde las tres objeciones que frenan una solicitud de cotización:
 * "¿son de verdad?", "¿me va a costar pedir información?" y "¿me van a contestar?".
 *
 * La prueba social con nombres de clientes vive en ClientsBar, que va justo
 * debajo de esta franja.
 */
const TRUST_ITEMS = [
  {
    title: 'Distribuidor oficial',
    detail: 'Breezair · Seeley International en México',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-.34-.014-.677-.042-1.01z" />
    ),
  },
  {
    title: 'Cotización sin costo',
    detail: 'Ingeniería de proyecto incluida, sin compromiso',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    ),
  },
  {
    title: RESPONSE_PROMISE,
    detail: 'Un especialista asignado a tu proyecto',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
  },
  {
    title: 'Cobertura nacional',
    detail: 'Instalación, refacciones y servicio post-venta',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    ),
  },
];

export default function TrustBar() {
  return (
    <section className="border-b border-slate-200 bg-white py-10 lg:py-12">
      <div className="container-premium">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.07} className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#EAF2FC] text-[#0A4FA0]">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  {item.icon}
                </svg>
              </div>
              <div>
                <p className="font-semibold leading-snug text-slate-900">{item.title}</p>
                <p className="mt-0.5 text-sm leading-snug text-slate-500">{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
