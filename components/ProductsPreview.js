'use client';

import Link from 'next/link';
import Image from 'next/image';
import Reveal from './Reveal';

/**
 * Catálogo resumido en portada.
 *
 * Antes: todo centrado —nombre, serie, descripción y especificaciones— dentro
 * de tarjetas que no alineaban entre sí porque las fotos tienen proporciones
 * distintas. El texto centrado en una ficha de producto es lo menos escaneable
 * que hay, y la falta de alineación es lo primero que delata una plantilla.
 *
 * Ahora: alineación a la izquierda, retícula de altura común y las cifras como
 * fila de datos. El comprador compara tres productos leyendo en vertical, que
 * es como se comparan las cosas.
 */

export default function ProductsPreview({ products = [] }) {
  return (
    <section id="productos-preview" className="scroll-mt-24 border-t border-slate-200 bg-white py-24 lg:py-28">
      <div className="container-premium">
        {/* Encabezado */}
        <Reveal className="mb-14 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#0E8FAB]" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0E8FAB]">
              Catálogo Breezair
            </span>
          </div>
          <h2 className="mb-5 font-display text-[clamp(2rem,4.2vw,3.25rem)] font-bold uppercase leading-[1.03] text-[#0A121C]">
            Tres series para
            <span className="block text-[#0A4FA0]">tres tipos de instalación</span>
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            La serie correcta no la decide el catálogo: la decide el volumen de tu nave, su carga
            térmica y por dónde puede salir el aire. Estas son las tres familias y para qué es cada una.
          </p>
        </Reveal>

        {/* Retícula de productos */}
        <div className="grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 lg:grid-cols-3">
          {products.map((product, i) => (
            <Reveal key={product.id} delay={i * 0.07} className="contents">
              <article className="group flex flex-col bg-white">
                {/* Fotografía en contenedor de proporción común */}
                <div className="relative aspect-[5/4] overflow-hidden bg-slate-50">
                  <Image
                    src={`/images/breezair-product-${i + 1}.jpg`}
                    alt={product.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-contain p-8 transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  {product.badge && (
                    <span className="absolute left-5 top-5 rounded-md bg-[#0A121C] px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
                      {product.badge}
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-7 lg:p-8">
                  <p className="mb-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                    Serie {product.series}
                  </p>
                  <h3 className="mb-3 text-xl font-semibold text-[#0A121C] transition-colors duration-200 group-hover:text-[#0A4FA0]">
                    {product.title}
                  </h3>
                  <p className="mb-7 text-[15px] leading-relaxed text-slate-600">{product.summary}</p>

                  {/* Cifras como fila de datos */}
                  <dl className="mb-7 flex gap-8 border-y border-slate-100 py-5">
                    <div>
                      <dd className="font-display text-2xl font-bold leading-none text-[#0A121C] tabular">
                        {product.specs?.capacity}
                      </dd>
                      <dt className="mt-1.5 font-mono text-[10px] uppercase tracking-wider text-slate-400">
                        Capacidad
                      </dt>
                    </div>
                    <div>
                      <dd className="font-display text-2xl font-bold leading-none text-[#0A121C] tabular">
                        {product.specs?.efficiency}
                      </dd>
                      <dt className="mt-1.5 font-mono text-[10px] uppercase tracking-wider text-slate-400">
                        Eficiencia
                      </dt>
                    </div>
                  </dl>

                  {/* Características */}
                  <ul className="mb-8 space-y-2.5">
                    {(product.features || []).slice(0, 3).map((f) => (
                      <li key={f} className="flex gap-3 text-[15px] leading-snug text-slate-600">
                        <svg
                          className="mt-1 h-4 w-4 shrink-0 text-[#0A4FA0]"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2.6}
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/productos/${product.slug}`}
                    className="mt-auto inline-flex items-center gap-2 font-semibold text-[#0A4FA0] underline-offset-4 hover:underline"
                  >
                    Ver ficha técnica
                    <svg
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.2}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" />
                    </svg>
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Cierre */}
        <Reveal
          delay={0.12}
          className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-xl text-slate-600">
            ¿No sabes cuál te corresponde? Dinos el tamaño de tu espacio y un ingeniero te lo dice —
            incluso si la respuesta es que esta tecnología no aplica a tu caso.
          </p>
          <div className="flex shrink-0 gap-3">
            <Link href="/productos" className="btn-premium btn-premium-steel">
              Ver catálogo completo
            </Link>
            <Link href="#cotizar" className="btn-premium btn-premium-primary">
              Cotizar
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
