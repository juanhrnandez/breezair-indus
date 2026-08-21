import Link from 'next/link';
import Image from 'next/image';
import { ZONAS } from '@/data/zonas';
import { SECTORES } from '@/data/soluciones';
import { TECNOLOGIAS } from '@/data/tecnologia';
import { registerSectors, registerTech, registerZonas } from '@/lib/internal-links';
import StructuredData from '@/components/StructuredData';
import RelatedLinks from '@/components/RelatedLinks';
import QuickQuoteForm from '@/components/QuickQuoteForm';
import { PHONE_SCHEMA, EMAIL_SALES } from '@/lib/site';

registerSectors(SECTORES);
registerTech(TECNOLOGIAS);
registerZonas(ZONAS);

export const revalidate = 86400;
export const dynamic = 'force-static';

const BASE = 'https://www.breezair.com.mx';

export const metadata = {
  title: 'Cobertura nacional en México',
  description:
    'Dónde rinde el enfriamiento evaporativo en México, zona por zona: Bajío, Monterrey, frontera norte, centro y sureste. Incluye dónde no lo recomendamos.',
  keywords: [
    'climatización industrial méxico cobertura',
    'enfriamiento evaporativo por zona',
    'dónde funciona enfriamiento evaporativo',
    'climatización industrial nacional',
    'breezair méxico distribuidor',
  ],
  alternates: { canonical: `${BASE}/cobertura/` },
  openGraph: {
    title: 'Cobertura nacional | Breezair Industrial México',
    description:
      'Dónde rinde el enfriamiento evaporativo en México, zona por zona, incluidas aquellas en las que no lo recomendamos.',
    url: `${BASE}/cobertura/`,
    type: 'website',
    locale: 'es_MX',
  },
  robots: { index: true, follow: true },
};

const APTITUD_UI = {
  alta: { label: 'Aptitud alta', badge: 'bg-emerald-100 text-emerald-800', bar: 'bg-emerald-500', ancho: 'w-full' },
  media: { label: 'Aptitud buena', badge: 'bg-blue-100 text-blue-800', bar: 'bg-blue-500', ancho: 'w-2/3' },
  limitada: { label: 'Aptitud limitada', badge: 'bg-amber-100 text-amber-800', bar: 'bg-amber-500', ancho: 'w-1/3' },
};

export default function CoberturaHub() {
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Cobertura nacional de climatización industrial',
      description:
        'Aptitud del enfriamiento evaporativo por zona climática e industrial de México, evaluada honestamente.',
      url: `${BASE}/cobertura/`,
      hasPart: ZONAS.map((z) => ({
        '@type': 'WebPage',
        name: z.linkTitle,
        description: z.linkText,
        url: `${BASE}/cobertura/${z.slug}/`,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'CG International',
      alternateName: 'Breezair Industrial México',
      url: BASE,
      telephone: PHONE_SCHEMA,
      email: EMAIL_SALES,
      areaServed: { '@type': 'Country', name: 'México' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${BASE}/` },
        { '@type': 'ListItem', position: 2, name: 'Cobertura', item: `${BASE}/cobertura/` },
      ],
    },
  ];

  return (
    <>
      <StructuredData data={schema} />

      <header className="relative overflow-hidden bg-slate-900 pt-32 pb-20 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/breezair-2.jpg"
            alt="Cobertura nacional de climatización industrial Breezair"
            fill
            sizes="100vw"
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/92 via-slate-900/85 to-blue-900/80" />
        </div>

        <div className="container-premium relative z-10">
          <nav aria-label="Ruta de navegación" className="mb-8 flex items-center gap-2 text-sm text-blue-200">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white">Cobertura</span>
          </nav>

          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 backdrop-blur">
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 pulse-glow" />
              <span className="text-sm font-semibold tracking-wide">COBERTURA NACIONAL</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Esta tecnología no rinde igual en Mexicali que en Villahermosa
            </h1>
            <p className="max-w-3xl text-xl leading-relaxed text-blue-100">
              El enfriamiento evaporativo depende del bulbo húmedo del aire exterior, así que su
              rendimiento cambia radicalmente según dónde esté tu planta. Damos servicio en todo el
              país, pero no en todo el país recomendamos lo mismo. Aquí está el mapa honesto.
            </p>
          </div>
        </div>
      </header>

      {/* Zonas */}
      <section className="bg-white py-20">
        <div className="container-premium">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ZONAS.map((z) => {
              const ui = APTITUD_UI[z.aptitud] ?? APTITUD_UI.media;
              return (
                <Link
                  key={z.slug}
                  href={`/cobertura/${z.slug}`}
                  className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:border-blue-300 hover:shadow-xl"
                >
                  <span className={`mb-4 inline-flex w-fit rounded-full px-3 py-1 text-xs font-bold tracking-wide ${ui.badge}`}>
                    {ui.label.toUpperCase()}
                  </span>

                  <h2 className="mb-3 text-xl font-bold leading-snug text-slate-800">{z.linkTitle}</h2>
                  <p className="mb-5 flex-1 leading-relaxed text-slate-600">{z.linkText}</p>

                  <div className="mb-5">
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                      <div className={`h-full rounded-full ${ui.bar} ${ui.ancho}`} />
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-2 font-semibold text-blue-600">
                    Ver la zona
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Por qué cambia */}
      <section className="bg-slate-50 py-20">
        <div className="container-premium">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="mb-6 text-3xl font-bold leading-tight text-slate-800 md:text-4xl">
                Por qué la geografía decide el resultado
              </h2>
              <p className="mb-5 text-lg leading-relaxed text-slate-600">
                El enfriamiento evaporativo tiene un techo físico: el aire nunca puede enfriarse por
                debajo de su temperatura de bulbo húmedo. Ese techo lo fija el clima, no el equipo.
              </p>
              <p className="mb-5 text-lg leading-relaxed text-slate-600">
                Cuanto más seco está el aire, más lejos queda su bulbo húmedo de su temperatura real
                y más margen hay para enfriar. Por eso el desierto —donde hace más calor— es el mejor
                escenario, y el litoral húmedo —donde hace menos— es el peor.
              </p>
              <p className="text-lg leading-relaxed text-slate-600">
                Un vendedor que promete los mismos grados en Ciudad Juárez y en Mérida está
                improvisando. Nosotros preferimos publicar dónde está el límite.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  t: 'Clima desértico',
                  d: 'Frontera norte y noroeste. Máximo margen de bulbo húmedo: la tecnología rinde en su límite superior.',
                  c: 'border-emerald-200 bg-emerald-50',
                },
                {
                  t: 'Semiárido de altura',
                  d: 'Bajío y altiplano. Aire seco durante los meses críticos, con corrección por altitud en el cálculo.',
                  c: 'border-emerald-200 bg-emerald-50',
                },
                {
                  t: 'Templado con lluvias',
                  d: 'Centro y occidente. El valor está tanto en barrer el calor de proceso como en el descenso de temperatura.',
                  c: 'border-blue-200 bg-blue-50',
                },
                {
                  t: 'Cálido húmedo',
                  d: 'Sureste y Golfo. Margen estrecho: sólo tiene sentido en naves muy abiertas o enfriamiento localizado.',
                  c: 'border-amber-200 bg-amber-50',
                },
              ].map((item) => (
                <div key={item.t} className={`rounded-2xl border p-6 ${item.c}`}>
                  <h3 className="mb-2 font-bold text-slate-800">{item.t}</h3>
                  <p className="leading-relaxed text-slate-700">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="cotizar" className="bg-white py-20 scroll-mt-24">
        <div className="container-premium">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 text-center">
              <h2 className="mb-4 text-3xl font-bold leading-tight text-slate-800 md:text-4xl">
                ¿Dónde está tu planta?
              </h2>
              <p className="text-lg text-slate-600">
                Evaluamos tu caso con los datos climáticos de tu localidad. Si el enfriamiento
                evaporativo no es la respuesta correcta ahí, te lo decimos.
              </p>
            </div>
            <QuickQuoteForm
              context="cobertura_hub"
              title="Evaluación por localidad"
              subtitle="Dinos dónde está la instalación y qué necesitas climatizar."
            />
          </div>
        </div>
      </section>

      <RelatedLinks
        keys={['soluciones', 'tecnologia', 'comparativa', 'productos', 'calculadora', 'nosotros']}
        title="Continúa por aquí"
        subtitle="Soluciones por sector, tecnología y herramientas de cálculo."
      />
    </>
  );
}
