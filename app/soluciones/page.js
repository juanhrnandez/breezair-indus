import Link from 'next/link';
import Image from 'next/image';
import { SECTORES } from '@/data/soluciones';
import { TECNOLOGIAS } from '@/data/tecnologia';
import { ZONAS } from '@/data/zonas';
import { registerSectors, registerTech, registerZonas } from '@/lib/internal-links';
import StructuredData from '@/components/StructuredData';
import RelatedLinks from '@/components/RelatedLinks';
import QuickQuoteForm from '@/components/QuickQuoteForm';

registerSectors(SECTORES);
registerTech(TECNOLOGIAS);
registerZonas(ZONAS);

export const revalidate = 86400;
export const dynamic = 'force-static';

const BASE = 'https://www.breezair.com.mx';

export const metadata = {
  title: 'Soluciones de climatización por sector',
  description:
    'Cómo se resuelve el calor en cada instalación: naves industriales, logística, alimentaria, talleres, agroindustria y espacios comerciales.',
  keywords: [
    'soluciones climatización industrial',
    'enfriamiento evaporativo por sector',
    'climatización industrial méxico',
    'enfriamiento naves industriales',
    'climatización almacenes',
    'climatización agroindustrial',
  ],
  alternates: { canonical: `${BASE}/soluciones/` },
  openGraph: {
    title: 'Soluciones de climatización por sector',
    description:
      'Cómo se resuelve el calor en cada tipo de instalación: naves industriales, logística, alimentaria, talleres, agroindustria y espacios comerciales.',
    url: `${BASE}/soluciones`,
    type: 'website',
    locale: 'es_MX',
  },
  robots: { index: true, follow: true },
};

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Soluciones de climatización industrial por sector',
    description:
      'Aplicaciones del enfriamiento evaporativo Breezair en la industria mexicana, sector por sector.',
    url: `${BASE}/soluciones`,
    hasPart: SECTORES.map((s) => ({
      '@type': 'WebPage',
      name: s.linkTitle,
      description: s.linkText,
      url: `${BASE}/soluciones/${s.slug}`,
    })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'Soluciones', item: `${BASE}/soluciones` },
    ],
  },
];

export default function SolucionesPage() {
  return (
    <>
      <StructuredData data={schema} />

      <header className="relative overflow-hidden bg-slate-900 pt-32 pb-20 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/breezair-2.jpg"
            alt="Instalaciones industriales climatizadas con Breezair"
            fill
            sizes="100vw"
            className="object-cover opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/92 via-slate-900/85 to-blue-900/80" />
        </div>

        <div className="container-premium relative z-10">
          <nav aria-label="Ruta de navegación" className="mb-8 flex items-center gap-2 text-sm text-blue-200">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white">Soluciones</span>
          </nav>

          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 backdrop-blur">
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 pulse-glow" />
              <span className="text-sm font-semibold tracking-wide">SOLUCIONES POR SECTOR</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              El calor no se resuelve igual en una nave que en una granja
            </h1>
            <p className="max-w-3xl text-xl leading-relaxed text-blue-100">
              El enfriamiento evaporativo funciona por un principio único, pero el diseño cambia por
              completo según la instalación: la carga térmica, la salida de aire, la humedad tolerable
              y hasta lo que se puede prometer son distintos en cada sector. Aquí está cómo lo
              planteamos en cada uno, incluidos los casos en los que decimos que no.
            </p>
          </div>
        </div>
      </header>

      <section className="bg-white py-20">
        <div className="container-premium">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SECTORES.map((s) => (
              <Link
                key={s.slug}
                href={`/soluciones/${s.slug}`}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:border-blue-300 hover:shadow-xl"
              >
                <span className="mb-4 inline-flex w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-bold tracking-wide text-blue-700">
                  {s.eyebrow.toUpperCase()}
                </span>
                <h2 className="mb-3 text-xl font-bold leading-snug text-slate-800">{s.linkTitle}</h2>
                <p className="mb-6 flex-1 leading-relaxed text-slate-600">{s.linkText}</p>
                <span className="inline-flex items-center gap-2 font-semibold text-blue-600">
                  Ver la solución
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

      {/* Principio común */}
      <section className="bg-slate-50 py-20">
        <div className="container-premium">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="mb-6 text-3xl font-bold leading-tight text-slate-800 md:text-4xl">
                El principio es el mismo en todos
              </h2>
              <p className="mb-5 text-lg leading-relaxed text-slate-600">
                El aire exterior atraviesa unos paneles humidificados. Al evaporarse, el agua absorbe
                calor del aire y lo enfría antes de introducirlo al espacio. No hay compresores, no
                hay gases refrigerantes: sólo el mismo fenómeno físico que refresca cuando sopla el
                viento sobre la piel mojada.
              </p>
              <p className="text-lg leading-relaxed text-slate-600">
                De ahí salen las tres constantes de la tecnología: consumo eléctrico muy bajo, aire
                100 % exterior sin recirculación, y un rendimiento que depende del bulbo húmedo del
                lugar. Lo que cambia entre sectores es cuánto margen hay para subir la humedad, dónde
                está exactamente la gente y cómo sale el aire caliente del edificio.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: 'Consumo de un electrodoméstico',
                  text: 'Del orden de 1.1 a 1.5 kW por equipo industrial, frente a las decenas de kilowatts de un sistema refrigerado de cobertura equivalente.',
                },
                {
                  title: 'Aire 100 % exterior, sin recirculación',
                  text: 'Cada renovación saca calor, humos y olores del edificio en lugar de moverlos de un lado a otro.',
                },
                {
                  title: 'El límite lo pone el bulbo húmedo',
                  text: 'Cuanto más seco el aire exterior, mayor el descenso de temperatura. Por eso el cálculo se hace con datos climáticos de tu localidad y no con una tabla genérica.',
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <h3 className="mb-2 font-bold text-slate-800">{item.title}</h3>
                  <p className="leading-relaxed text-slate-600">{item.text}</p>
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
                ¿No encuentras tu caso en la lista?
              </h2>
              <p className="text-lg text-slate-600">
                Cuéntanos qué espacio necesitas climatizar. Si el enfriamiento evaporativo no es la
                solución correcta para tu instalación, también te lo diremos.
              </p>
            </div>
            <QuickQuoteForm
              context="soluciones_hub"
              title="Cuéntanos de tu instalación"
              subtitle="Un ingeniero revisa tu caso y te dice si esta tecnología aplica."
            />
          </div>
        </div>
      </section>

      <RelatedLinks
        keys={['cobertura', 'tecnologia', 'comparativa', 'calculadora']}
        title="Continúa por aquí"
        subtitle="Equipos, herramientas de cálculo y guías técnicas."
        columns={4}
      />
    </>
  );
}
