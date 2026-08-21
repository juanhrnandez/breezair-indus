import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ZONAS, getZona, getZonaSlugs } from '@/data/zonas';
import { SECTORES } from '@/data/soluciones';
import { TECNOLOGIAS } from '@/data/tecnologia';
import { registerSectors, registerTech, registerZonas } from '@/lib/internal-links';
import StructuredData from '@/components/StructuredData';
import RelatedLinks from '@/components/RelatedLinks';
import QuickQuoteForm from '@/components/QuickQuoteForm';
import { PHONE_SCHEMA } from '@/lib/site';

registerSectors(SECTORES);
registerTech(TECNOLOGIAS);
registerZonas(ZONAS);

export const revalidate = 86400;
export const dynamic = 'force-static';

const BASE = 'https://www.breezair.com.mx';

/** Estilos del distintivo de aptitud: alta, media o limitada. */
const APTITUD = {
  alta: {
    chip: 'border-emerald-400/40 bg-emerald-400/15 text-emerald-200',
    dot: 'bg-emerald-400',
    card: 'border-emerald-200 bg-emerald-50',
    accent: 'text-emerald-700',
  },
  media: {
    chip: 'border-cyan-400/40 bg-cyan-400/15 text-cyan-200',
    dot: 'bg-cyan-400',
    card: 'border-blue-200 bg-blue-50',
    accent: 'text-blue-700',
  },
  limitada: {
    chip: 'border-amber-400/40 bg-amber-400/15 text-amber-200',
    dot: 'bg-amber-400',
    card: 'border-amber-200 bg-amber-50',
    accent: 'text-amber-700',
  },
};

export function generateStaticParams() {
  return getZonaSlugs().map((zona) => ({ zona }));
}

export async function generateMetadata({ params }) {
  const { zona } = await params;
  const data = getZona(zona);
  if (!data) return { title: 'Zona no encontrada' };

  const url = `${BASE}/cobertura/${data.slug}/`;

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: data.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url,
      type: 'article',
      locale: 'es_MX',
      siteName: 'Breezair Industrial México',
    },
    twitter: {
      card: 'summary_large_image',
      title: data.metaTitle,
      description: data.metaDescription,
    },
    robots: { index: true, follow: true },
  };
}

export default async function ZonaPage({ params }) {
  const { zona } = await params;
  const data = getZona(zona);
  if (!data) notFound();

  const url = `${BASE}/cobertura/${data.slug}/`;
  const otras = ZONAS.filter((z) => z.slug !== data.slug);
  const estilo = APTITUD[data.aptitud] ?? APTITUD.media;

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: data.h1,
      description: data.metaDescription,
      serviceType: 'Climatización industrial por enfriamiento evaporativo',
      areaServed: data.ciudades.map((c) => ({ '@type': 'City', name: c, addressCountry: 'MX' })),
      provider: {
        '@type': 'Organization',
        name: 'CG International',
        alternateName: 'Breezair Industrial México',
        url: BASE,
        telephone: PHONE_SCHEMA,
      },
      url,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: data.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${BASE}/` },
        { '@type': 'ListItem', position: 2, name: 'Cobertura', item: `${BASE}/cobertura/` },
        { '@type': 'ListItem', position: 3, name: data.nav, item: url },
      ],
    },
  ];

  return (
    <>
      <StructuredData data={schema} />

      <header className="relative overflow-hidden bg-slate-900 pt-32 pb-20 text-white">
        <div className="absolute inset-0">
          <Image src="/images/breezair-1.jpg" alt={data.h1} fill
            sizes="100vw" className="object-cover opacity-20" priority />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/92 via-slate-900/85 to-blue-900/80" />
        </div>

        <div className="container-premium relative z-10">
          <nav aria-label="Ruta de navegación" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-blue-200">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span aria-hidden="true">/</span>
            <Link href="/cobertura" className="hover:text-white">Cobertura</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white">{data.nav}</span>
          </nav>

          <div className="max-w-4xl">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 backdrop-blur">
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 pulse-glow" />
                <span className="text-sm font-semibold tracking-wide">{data.eyebrow.toUpperCase()}</span>
              </span>
              <span className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold backdrop-blur ${estilo.chip}`}>
                <span className={`h-2 w-2 rounded-full ${estilo.dot}`} />
                {data.aptitudLabel}
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">{data.h1}</h1>
            <p className="mb-8 max-w-3xl text-xl leading-relaxed text-blue-100">{data.subtitle}</p>

            <ul className="flex flex-wrap gap-2">
              {data.ciudades.map((c) => (
                <li key={c} className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-blue-100">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      {/* Clima */}
      <section className="bg-white py-20">
        <div className="container-premium">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            <div>
              <h2 className="mb-6 text-3xl font-bold leading-tight text-slate-800 md:text-4xl">{data.clima.title}</h2>
              {data.clima.paragraphs.map((p, i) => (
                <p key={i} className="mb-5 text-lg leading-relaxed text-slate-600">{p}</p>
              ))}
            </div>

            <div className="space-y-4">
              {data.clima.datos.map((d) => (
                <div key={d.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <div className="text-3xl font-bold text-blue-600">{d.value}</div>
                  <div className="mt-1 font-semibold text-slate-800">{d.label}</div>
                  <div className="mt-1 text-sm text-slate-500">{d.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Veredicto */}
      <section className="bg-slate-50 py-20">
        <div className="container-premium">
          <div className={`mx-auto max-w-4xl rounded-3xl border-2 p-8 md:p-12 ${estilo.card}`}>
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className={`text-xs font-bold tracking-[0.18em] ${estilo.accent}`}>
                {data.aptitudLabel.toUpperCase()}
              </span>
            </div>
            <h2 className="mb-6 text-3xl font-bold leading-tight text-slate-800 md:text-4xl">{data.veredicto.title}</h2>
            {data.veredicto.paragraphs.map((p, i) => (
              <p key={i} className="mb-5 text-lg leading-relaxed text-slate-700 last:mb-0">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Industria de la zona */}
      <section className="bg-white py-20">
        <div className="container-premium">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="mb-6 text-3xl font-bold leading-tight text-slate-800 md:text-4xl">{data.industria.title}</h2>
              {data.industria.paragraphs.map((p, i) => (
                <p key={i} className="mb-5 text-lg leading-relaxed text-slate-600">{p}</p>
              ))}
            </div>

            <div>
              <p className="mb-4 font-bold text-slate-800">Cómo lo resolvemos según el tipo de instalación</p>
              <ul className="space-y-3">
                {data.industria.sectores.map((key) => {
                  const sector = SECTORES.find((s) => `sector-${s.slug}` === key);
                  if (!sector) return null;
                  return (
                    <li key={key}>
                      <Link
                        href={`/soluciones/${sector.slug}`}
                        className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-colors hover:border-blue-300 hover:bg-white"
                      >
                        <svg className="mt-1 h-5 w-5 shrink-0 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                        <span>
                          <span className="block font-bold text-slate-800 group-hover:text-blue-700">{sector.linkTitle}</span>
                          <span className="mt-1 block text-sm leading-relaxed text-slate-600">{sector.linkText}</span>
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Claves de diseño locales */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="container-premium">
          <div className="mb-12 max-w-3xl">
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">{data.diseno.title}</h2>
          </div>

          <ol className="grid gap-8 md:grid-cols-3">
            {data.diseno.items.map((item, i) => (
              <li key={item.title} className="border-t-2 border-cyan-400 pt-6">
                <span className="mb-3 block font-mono text-sm font-bold text-cyan-300">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mb-3 text-lg font-bold">{item.title}</h3>
                <p className="leading-relaxed text-slate-300">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="container-premium">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-3xl font-bold leading-tight text-slate-800 md:text-4xl">
              Preguntas frecuentes de la zona
            </h2>

            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {data.faqs.map((faq) => (
                <details key={faq.q} className="group py-6">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-lg font-bold text-slate-800 marker:content-['']">
                    {faq.q}
                    <svg
                      className="mt-1 h-5 w-5 shrink-0 text-blue-600 transition-transform duration-300 group-open:rotate-45"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </summary>
                  <p className="mt-4 leading-relaxed text-slate-600">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conversión */}
      <section id="cotizar" className="bg-slate-50 py-20 scroll-mt-24">
        <div className="container-premium">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="mb-6 text-3xl font-bold leading-tight text-slate-800 md:text-4xl">
                Evaluación con los datos de tu sitio
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-slate-600">
                Estas cifras son orientativas para la zona. El cálculo real se hace con el bulbo
                húmedo de tu emplazamiento, la carga térmica de tu proceso y las horas de operación.
                Es lo que hacemos sin costo antes de cotizar.
              </p>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="mb-4 font-bold text-slate-800">Otras zonas</p>
                <ul className="space-y-2">
                  {otras.map((z) => (
                    <li key={z.slug}>
                      <Link
                        href={`/cobertura/${z.slug}`}
                        className="inline-flex items-center gap-2 font-medium text-blue-600 hover:underline"
                      >
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                        {z.linkTitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <QuickQuoteForm
              context={`zona_${data.slug}`}
              title={`Cotiza tu proyecto en ${data.nav}`}
              subtitle="Un ingeniero evalúa tu caso con los datos climáticos de tu localidad."
              prefill={{ message: `Solicitud desde la página de cobertura de ${data.nav}.` }}
            />
          </div>
        </div>
      </section>

      <RelatedLinks
        keys={[...data.relacionados, 'blog-renovaciones', 'blog-agua']}
        title="Recursos relacionados"
        subtitle="Otras zonas, tecnología y herramientas para dimensionar el proyecto."
      />
    </>
  );
}
