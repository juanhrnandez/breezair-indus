import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { SECTORES, getSector, getSectorSlugs } from '@/data/soluciones';
import { TECNOLOGIAS } from '@/data/tecnologia';
import { ZONAS } from '@/data/zonas';
import { registerSectors, registerTech, registerZonas } from '@/lib/internal-links';
import StructuredData from '@/components/StructuredData';
import RelatedLinks from '@/components/RelatedLinks';
import QuickQuoteForm from '@/components/QuickQuoteForm';

// Registrar los sectores en el mapa de enlaces internos para que cualquier
// página pueda enlazarlos por clave.
registerSectors(SECTORES);
registerTech(TECNOLOGIAS);
registerZonas(ZONAS);

export const revalidate = 86400;
export const dynamic = 'force-static';

const BASE = 'https://www.breezair.com.mx';

export function generateStaticParams() {
  return getSectorSlugs().map((sector) => ({ sector }));
}

export async function generateMetadata({ params }) {
  const { sector } = await params;
  const data = getSector(sector);
  if (!data) return { title: 'Solución no encontrada' };

  const url = `${BASE}/soluciones/${data.slug}`;

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: data.keywords,
    alternates: { canonical: `${url}/` },
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

export default async function SectorPage({ params }) {
  const { sector } = await params;
  const data = getSector(sector);
  if (!data) notFound();

  const url = `${BASE}/soluciones/${data.slug}`;
  const otros = SECTORES.filter((s) => s.slug !== data.slug);

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: data.h1,
      description: data.metaDescription,
      serviceType: 'Climatización industrial por enfriamiento evaporativo',
      areaServed: { '@type': 'Country', name: 'México' },
      provider: {
        '@type': 'Organization',
        name: 'CG International',
        alternateName: 'Breezair Industrial México',
        url: BASE,
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
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE },
        { '@type': 'ListItem', position: 2, name: 'Soluciones', item: `${BASE}/soluciones` },
        { '@type': 'ListItem', position: 3, name: data.nav, item: url },
      ],
    },
  ];

  return (
    <>
      <StructuredData data={schema} />

      {/* Encabezado */}
      <header className="relative overflow-hidden bg-slate-900 pt-32 pb-20 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/breezair-1.jpg"
            alt={data.h1}
            fill
            sizes="100vw"
            className="object-cover opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-blue-900/80" />
        </div>

        <div className="container-premium relative z-10">
          <nav aria-label="Ruta de navegación" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-blue-200">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span aria-hidden="true">/</span>
            <Link href="/soluciones" className="hover:text-white">Soluciones</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white">{data.nav}</span>
          </nav>

          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 backdrop-blur">
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 pulse-glow" />
              <span className="text-sm font-semibold tracking-wide">{data.eyebrow.toUpperCase()}</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">{data.h1}</h1>
            <p className="max-w-3xl text-xl leading-relaxed text-blue-100">{data.subtitle}</p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="#cotizar" className="btn-premium btn-premium-primary btn-premium-lg">
                Cotizar mi proyecto
              </Link>
              <Link
                href="/#calculadora"
                className="btn-premium btn-premium-lg border-2 border-white bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-blue-700"
              >
                Calcular mi ahorro
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* El problema */}
      <section className="bg-white py-20">
        <div className="container-premium">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            <div>
              <h2 className="mb-6 text-3xl font-bold leading-tight text-slate-800 md:text-4xl">
                {data.problema.title}
              </h2>
              {data.problema.paragraphs.map((p, i) => (
                <p key={i} className="mb-5 text-lg leading-relaxed text-slate-600">
                  {p}
                </p>
              ))}
            </div>

            <div className="space-y-4">
              {data.problema.datos.map((d) => (
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

      {/* La solución */}
      <section className="bg-slate-50 py-20">
        <div className="container-premium">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold leading-tight text-slate-800 md:text-4xl">
              {data.solucion.title}
            </h2>
            {data.solucion.paragraphs.map((p, i) => (
              <p key={i} className="mb-5 text-lg leading-relaxed text-slate-600">
                {p}
              </p>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {data.solucion.puntos.map((punto) => (
              <div key={punto.title} className="rounded-2xl border border-slate-200 bg-white p-7">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-bold text-slate-800">{punto.title}</h3>
                <p className="leading-relaxed text-slate-600">{punto.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Claves de diseño */}
      <section className="bg-white py-20">
        <div className="container-premium">
          <div className="mb-12 max-w-3xl">
            <h2 className="text-3xl font-bold leading-tight text-slate-800 md:text-4xl">{data.diseno.title}</h2>
          </div>

          <ol className="grid gap-8 md:grid-cols-3">
            {data.diseno.items.map((item, i) => (
              <li key={item.title} className="border-t-2 border-blue-600 pt-6">
                <span className="mb-3 block font-mono text-sm font-bold text-blue-600">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mb-3 text-lg font-bold text-slate-800">{item.title}</h3>
                <p className="leading-relaxed text-slate-600">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Cuándo no aplica: honestidad técnica */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="container-premium">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <div>
              <h2 className="mb-6 text-3xl font-bold leading-tight md:text-4xl">{data.cuandoNo.title}</h2>
              {data.cuandoNo.paragraphs.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed text-slate-300">
                  {p}
                </p>
              ))}
            </div>

            <ul className="space-y-4">
              {data.cuandoNo.casos.map((caso) => (
                <li key={caso} className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-5">
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-amber-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M5 19h14a2 2 0 001.84-2.75L13.74 4a2 2 0 00-3.48 0l-7.1 12.25A2 2 0 004.99 19z" />
                  </svg>
                  <span className="leading-relaxed text-slate-200">{caso}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="container-premium">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-3xl font-bold leading-tight text-slate-800 md:text-4xl">
              Preguntas frecuentes sobre {data.nav.toLowerCase()}
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
                ¿Tu instalación entra en este perfil?
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-slate-600">
                Dinos el tamaño del espacio y un ingeniero calcula la carga térmica, el número de
                equipos y el ahorro estimado para tu caso. Sin costo y sin compromiso.
              </p>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="mb-4 font-bold text-slate-800">Otros sectores que resolvemos</p>
                <ul className="space-y-2">
                  {otros.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/soluciones/${s.slug}`}
                        className="inline-flex items-center gap-2 font-medium text-blue-600 hover:underline"
                      >
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                        {s.linkTitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <QuickQuoteForm
              context={`sector_${data.slug}`}
              title={`Cotiza tu proyecto de ${data.nav.toLowerCase()}`}
              subtitle="Dos preguntas y recibes una propuesta dimensionada para tu instalación."
              prefill={{
                sector: data.nav,
                message: `Solicitud desde la página de soluciones para ${data.nav.toLowerCase()}.`,
              }}
            />
          </div>
        </div>
      </section>

      <RelatedLinks
        keys={[...data.relacionados, 'cobertura', 'blog-renovaciones', 'blog-salida-aire']}
        title="Recursos relacionados"
        subtitle="Equipos, guías técnicas y herramientas para dimensionar tu proyecto."
      />
    </>
  );
}
