'use client';

import Link from 'next/link';
import Reveal from './Reveal';

/**
 * Prueba social: las empresas que ya operan con Breezair.
 *
 * Es el activo de conversión más fuerte que tiene la marca y hasta ahora sólo
 * existía como una línea suelta dentro de un artículo del blog.
 *
 * Los nombres se muestran como texto para que la franja funcione desde hoy.
 * En cuanto ventas entregue los logotipos autorizados (SVG o PNG con fondo
 * transparente en /public/images/clientes) basta con añadir `logo` a cada
 * entrada y la franja los usa en lugar del texto.
 *
 * Nota legal: publicar el nombre o el logotipo de un cliente normalmente
 * requiere su autorización por escrito. Conviene tener firmada la cláusula de
 * referencia comercial antes de publicar esta sección.
 */
const CLIENTES = [
  // Logotipos que ya vivían en /public/images sin usarse.
  { name: 'Coca-Cola', sector: 'Bebidas', logo: '/images/breezair-6.png' },
  { name: 'Bimbo', sector: 'Alimentos', logo: '/images/breezair-8.png' },
  { name: 'Starbucks', sector: 'Comercial', logo: '/images/breezair-9.png' },
  { name: 'Banorte', sector: 'Corporativo', logo: '/images/breezair-7.png' },
  // Confirmados por el cliente; pendientes de archivo de logotipo.
  { name: 'Ford', sector: 'Automotriz', logo: null },
  { name: 'Volkswagen', sector: 'Automotriz', logo: null },
  { name: 'Nissan', sector: 'Automotriz', logo: null },
  { name: 'Walmart de México', sector: 'Logística', logo: null },
];

export default function ClientsBar({ tone = 'light' }) {
  const dark = tone === 'dark';

  return (
    <section className={dark ? 'bg-slate-900 py-14' : 'border-b border-slate-200 bg-slate-50 py-14'}>
      <div className="container-premium">
        <div className="mb-10 text-center">
          <p
            className={`text-xs font-bold tracking-[0.2em] ${dark ? 'text-cyan-300' : 'text-blue-600'}`}
          >
            Empresas que ya operan con Breezair
          </p>
          <p className={`mt-3 text-lg ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
            Plantas automotrices y centros de distribución de algunas de las mayores operaciones
            industriales de México.
          </p>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16">
          {CLIENTES.map((cliente, i) => (
            <Reveal as="li" key={cliente.name} delay={i * 0.05} y={12} className="text-center">
              {cliente.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={cliente.logo}
                  alt={cliente.name}
                  loading="lazy"
                  className={`h-9 w-auto max-w-[140px] object-contain transition-all duration-300 ${
                    dark ? 'opacity-75 hover:opacity-100' : 'opacity-100 grayscale hover:grayscale-0'
                  }`}
                />
              ) : (
                <span
                  className={`block font-display text-xl font-semibold uppercase tracking-wide transition-colors duration-300 sm:text-2xl ${
                    dark ? 'text-white/45 hover:text-white/75' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {cliente.name}
                </span>
              )}
            </Reveal>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <Link
            href="/blog/caso-exito-walmart-mexico-breezair-enfriamiento-evaporativo"
            className={`inline-flex items-center gap-2 font-semibold ${
              dark ? 'text-cyan-300 hover:text-cyan-200' : 'text-blue-600 hover:text-blue-800'
            }`}
          >
            Ver el caso de un centro de distribución
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
