import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { TECNOLOGIAS, getTecnologia, getTecnologiaSlugs } from '@/data/tecnologia';
import { SECTORES } from '@/data/soluciones';
import { ZONAS } from '@/data/zonas';
import { registerSectors, registerTech, registerZonas } from '@/lib/internal-links';
import StructuredData from '@/components/StructuredData';
import RelatedLinks from '@/components/RelatedLinks';
import RichText from '@/components/RichText';
import QuickQuoteForm from '@/components/QuickQuoteForm';

registerSectors(SECTORES);
registerTech(TECNOLOGIAS);
registerZonas(ZONAS);

export const revalidate = 86400;
export const dynamic = 'force-static';

const BASE = 'https://www.breezair.com.mx';

export function generateStaticParams() {
  return getTecnologiaSlugs().map((tec) => ({ tec }));
}

export async function generateMetadata({ params }) {
  const { tec } = await params;
  const data = getTecnologia(tec);
  if (!data) return { title: 'Tecnología no encontrada' };

  const url = `${BASE}/tecnologia/${data.slug}/`;

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

export default async function TecnologiaPage({ params }) {
  const { tec } = await params;
  const data = getTecnologia(tec);
  if (!data) notFound();

  const url = `${BASE}/tecnologia/${data.slug}/`;
  const otras = TECNOLOGIAS.filter((t) => t.slug !== data.slug);

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: data.h1,
      description: data.metaDescription,
      inLanguage: 'es-MX',
      url,
      author: { '@type': 'Organization', name: 'CG International' },
      publisher: {
        '@type': 'Organization',
        name: 'Breezair Industrial México',
        url: BASE,
      },
      about: { '@type': 'Brand', name: 'Breezair' },
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
        { '@type': 'ListItem', position: 2, name: 'Tecnología', item: `${BASE}/tecnologia/` },
        { '@type': 'ListItem', position: 3, name: data.nav, item: url },
      ],
    },
  ];

  return (
    <>
      <StructuredData data={schema} />

      <header className="relative overflow-hidden bg-slate-900 pt-32 pb-20 text-white">
        <div className="absolute inset-0">
          <Image src="/images/breezair-2.jpg" alt={data.h1} fill
            sizes="100vw" className="object-cover opacity-20" priority />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/92 via-slate-900/85 to-blue-900/80" />
        </div>

        <div className="container-premium relative z-10">
          <nav aria-label="Ruta de navegación" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-blue-200">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span aria-hidden="true">/</span>
            <Link href="/tecnologia" className="hover:text-white">Tecnología</Link>
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
          </div>
        </div>
      </header>

      {/* Qué es */}
      <section className="bg-white py-20">
        <div className="container-premium">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            <div>
              <h2 className="mb-6 text-3xl font-bold leading-tight text-slate-800 md:text-4xl">{data.queEs.title}</h2>
              {data.queEs.paragraphs.map((p, i) => (
                <RichText key={i} text={p} className="mb-5 text-lg leading-relaxed text-slate-600" />
              ))}
            </div>

            <div className="space-y-4">
              {data.datos.map((d) => (
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

      {/* Cómo funciona */}
      <section className="bg-slate-50 py-20">
        <div className="container-premium">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold leading-tight text-slate-800 md:text-4xl">
              {data.comoFunciona.title}
            </h2>
            {data.comoFunciona.paragraphs.map((p, i) => (
              <RichText key={i} text={p} className="mb-5 text-lg leading-relaxed text-slate-600" />
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {data.comoFunciona.puntos.map((punto) => (
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

      {/* Por qué importa */}
      <section className="bg-white py-20">
        <div className="container-premium">
          <div className="mb-12 max-w-3xl">
            <h2 className="text-3xl font-bold leading-tight text-slate-800 md:text-4xl">{data.porQueImporta.title}</h2>
          </div>

          <ol className="grid gap-8 md:grid-cols-3">
            {data.porQueImporta.items.map((item, i) => (
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

      {/* FAQ */}
      <section className="bg-slate-50 py-20">
        <div className="container-premium">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-3xl font-bold leading-tight text-slate-800 md:text-4xl">
              Preguntas frecuentes
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
      <section id="cotizar" className="bg-white py-20 scroll-mt-24">
        <div className="container-premium">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="mb-6 text-3xl font-bold leading-tight text-slate-800 md:text-4xl">
                ¿Tienes dudas técnicas sobre tu instalación?
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-slate-600">
                Somos distribuidor oficial de Seeley International en México: tenemos la
                documentación técnica, los repuestos originales y los ingenieros que conocen estos
                equipos por dentro.
              </p>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="mb-4 font-bold text-slate-800">Otras tecnologías Breezair</p>
                <ul className="space-y-2">
                  {otras.map((t) => (
                    <li key={t.slug}>
                      <Link
                        href={`/tecnologia/${t.slug}`}
                        className="inline-flex items-center gap-2 font-medium text-blue-600 hover:underline"
                      >
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                        {t.linkTitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <QuickQuoteForm
              context={`tecnologia_${data.slug}`}
              title="Habla con un ingeniero"
              subtitle="Consulta técnica, repuestos originales o dimensionamiento de proyecto."
              prefill={{ message: `Consulta sobre ${data.nav} desde la página de tecnología.` }}
            />
          </div>
        </div>
      </section>

      <RelatedLinks
        keys={data.relacionados}
        title="Recursos relacionados"
        subtitle="Documentación, equipos y aplicaciones donde esta tecnología marca la diferencia."
      />
    </>
  );
}
