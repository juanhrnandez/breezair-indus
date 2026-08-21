import Link from 'next/link';
import { getLinks } from '@/lib/internal-links';

/**
 * Bloque de enlaces internos.
 *
 * Toma claves del registro de lib/internal-links.js en lugar de rutas sueltas,
 * de modo que el texto ancla sea el mismo en todo el sitio y ningún enlace
 * apunte a una página que ya no existe.
 */
export default function RelatedLinks({
  keys = [],
  title = 'Sigue leyendo',
  subtitle,
  columns = 3,
  tone = 'light',
}) {
  const items = getLinks(keys);
  if (items.length === 0) return null;

  const dark = tone === 'dark';
  const gridCols =
    columns === 2 ? 'sm:grid-cols-2' : columns === 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-2 lg:grid-cols-3';

  return (
    <section className={dark ? 'bg-slate-900 py-16' : 'border-t border-slate-200 bg-slate-50 py-16'}>
      <div className="container-premium">
        <div className="mb-8 max-w-2xl">
          <h2 className={`text-2xl font-bold md:text-3xl ${dark ? 'text-white' : 'text-slate-800'}`}>{title}</h2>
          {subtitle && <p className={`mt-3 ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{subtitle}</p>}
        </div>

        <div className={`grid gap-4 ${gridCols}`}>
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`group flex flex-col rounded-2xl border p-6 transition-all duration-300 ${
                dark
                  ? 'border-white/10 bg-white/5 hover:border-white/25 hover:bg-white/10'
                  : 'border-slate-200 bg-white hover:border-blue-300 hover:shadow-lg'
              }`}
            >
              <span className={`mb-2 font-bold leading-snug ${dark ? 'text-white' : 'text-slate-800'}`}>
                {item.title}
              </span>
              <span className={`mb-4 flex-1 text-sm leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
                {item.text}
              </span>
              <span className={`inline-flex items-center gap-2 text-sm font-semibold ${dark ? 'text-cyan-300' : 'text-blue-600'}`}>
                Ver más
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
