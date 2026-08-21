import Link from 'next/link';
import Image from 'next/image';
import { TECNOLOGIAS } from '@/data/tecnologia';
import { ZONAS } from '@/data/zonas';
import { SECTORES } from '@/data/soluciones';
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
  title: 'Tecnología Breezair: cómo funciona',
  description:
    'Cómo funcionan los paneles Chillcel®, el WaterManager™, el control MagIQtouch™ y el gabinete Prematuf™, por el distribuidor oficial en México.',
  keywords: [
    'tecnología breezair',
    'chillcel black opal',
    'watermanager breezair',
    'magiqtouch méxico',
    'prematuf gabinete',
    'seeley international méxico',
    'cómo funciona enfriamiento evaporativo',
  ],
  alternates: { canonical: `${BASE}/tecnologia/` },
  openGraph: {
    title: 'Tecnología Breezair | Distribuidor oficial en México',
    description:
      'Chillcel®, WaterManager™, MagIQtouch™ y Prematuf™ explicados a fondo por el distribuidor oficial de Seeley International en México.',
    url: `${BASE}/tecnologia/`,
    type: 'website',
    locale: 'es_MX',
  },
  robots: { index: true, follow: true },
};

const PRINCIPIO = [
  {
    step: 'Entra aire exterior',
    text: 'El ventilador toma aire de fuera. No se recircula nada del aire de la nave: cada metro cúbico que entra es aire nuevo.',
  },
  {
    step: 'Atraviesa los paneles húmedos',
    text: 'Los paneles Chillcel®, permanentemente irrigados, obligan al aire a recorrer una gran superficie de agua.',
  },
  {
    step: 'El agua se evapora y roba calor',
    text: 'Evaporar agua consume energía, y esa energía sale del propio aire. El aire pierde temperatura sin gastar electricidad en ello.',
  },
  {
    step: 'Sale aire frío al espacio',
    text: 'La electricidad se gasta sólo en mover el ventilador y la bomba. De ahí que un equipo industrial trabaje con 1.1 a 1.5 kW.',
  },
];

export default function TecnologiaHub() {
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Tecnología Breezair',
      description:
        'Las tecnologías que componen un enfriador evaporativo Breezair de Seeley International, explicadas una por una.',
      url: `${BASE}/tecnologia/`,
      hasPart: TECNOLOGIAS.map((t) => ({
        '@type': 'TechArticle',
        name: t.linkTitle,
        description: t.linkText,
        url: `${BASE}/tecnologia/${t.slug}/`,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${BASE}/` },
        { '@type': 'ListItem', position: 2, name: 'Tecnología', item: `${BASE}/tecnologia/` },
      ],
    },
  ];

  return (
    <>
      <StructuredData data={schema} />

      <header className="relative overflow-hidden bg-slate-900 pt-32 pb-20 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/breezair-1.jpg"
            alt="Tecnología de enfriamiento evaporativo Breezair"
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
            <span className="text-white">Tecnología</span>
          </nav>

          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 backdrop-blur">
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 pulse-glow" />
              <span className="text-sm font-semibold tracking-wide">DISTRIBUIDOR OFICIAL SEELEY INTERNATIONAL</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Qué hay dentro de un Breezair
            </h1>
            <p className="max-w-3xl text-xl leading-relaxed text-blue-100">
              Enfriar aire con agua es un principio físico simple. Lo que separa a un equipo bueno de
              uno mediocre son cuatro cosas concretas: el panel donde ocurre la evaporación, cómo se
              distribuye el agua, cómo se controla su calidad y cómo se gobierna la instalación.
              Aquí está cada una, sin folleto.
            </p>
          </div>
        </div>
      </header>

      {/* El principio, en cuatro pasos */}
      <section className="bg-white py-20">
        <div className="container-premium">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-5 text-3xl font-bold leading-tight text-slate-800 md:text-4xl">
              El principio, en cuatro pasos
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Es el mismo fenómeno que refresca cuando el viento sopla sobre la piel mojada, aplicado
              a escala industrial y con control de ingeniería.
            </p>
          </div>

          <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {PRINCIPIO.map((p, i) => (
              <li key={p.step} className="border-t-2 border-blue-600 pt-6">
                <span className="mb-3 block font-mono text-sm font-bold text-blue-600">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mb-3 text-lg font-bold text-slate-800">{p.step}</h3>
                <p className="leading-relaxed text-slate-600">{p.text}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12 rounded-2xl border-l-4 border-amber-500 bg-amber-50 p-6">
            <p className="leading-relaxed text-slate-700">
              <strong className="font-bold text-slate-900">El límite físico:</strong> por muy bueno
              que sea el equipo, el aire nunca puede enfriarse por debajo de la temperatura de bulbo
              húmedo del aire exterior. Por eso el rendimiento depende del clima de tu localidad y no
              sólo del modelo. Lo que un buen equipo hace es acercarse a ese límite: la{' '}
              <Link href="/tecnologia/chillcel-black-opal" className="font-semibold text-blue-700 underline underline-offset-2">
                eficiencia de saturación
              </Link>{' '}
              mide exactamente cuánto se acerca.
            </p>
          </div>
        </div>
      </section>

      {/* Las tecnologías */}
      <section className="bg-slate-50 py-20">
        <div className="container-premium">
          <div className="mb-12 max-w-3xl">
            <h2 className="text-3xl font-bold leading-tight text-slate-800 md:text-4xl">
              Las cuatro piezas que definen el rendimiento
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {TECNOLOGIAS.map((t) => (
              <Link
                key={t.slug}
                href={`/tecnologia/${t.slug}`}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:border-blue-300 hover:shadow-xl"
              >
                <span className="mb-4 inline-flex w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-bold tracking-wide text-blue-700">
                  {t.eyebrow.toUpperCase()}
                </span>
                <h3 className="mb-3 text-xl font-bold leading-snug text-slate-800">{t.linkTitle}</h3>
                <p className="mb-6 flex-1 leading-relaxed text-slate-600">{t.linkText}</p>

                <div className="mb-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-slate-100 pt-4">
                  {t.datos.slice(0, 2).map((d) => (
                    <div key={d.label}>
                      <span className="block text-lg font-bold text-blue-600">{d.value}</span>
                      <span className="block text-xs text-slate-500">{d.label}</span>
                    </div>
                  ))}
                </div>

                <span className="inline-flex items-center gap-2 font-semibold text-blue-600">
                  Ver a fondo
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

      {/* Ventaja de distribuidor oficial */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="container-premium">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div>
              <h2 className="mb-6 text-3xl font-bold leading-tight md:text-4xl">
                Por qué importa comprarle al distribuidor oficial
              </h2>
              <p className="text-lg leading-relaxed text-slate-300">
                Un enfriador evaporativo se compra una vez y se opera diez años. Lo que decide el
                costo total no es el precio de la máquina, sino si el repuesto correcto llega cuando
                hace falta y si alguien sabe por qué la instalación dejó de enfriar.
              </p>
            </div>

            <ul className="space-y-4">
              {[
                {
                  t: 'Repuestos originales',
                  d: 'Paneles Chillcel® con la geometría exacta del equipo, no un genérico de medidas parecidas que altera el caudal.',
                },
                {
                  t: 'Documentación técnica de fábrica',
                  d: 'Curvas de rendimiento, manuales de instalación y especificaciones oficiales para la memoria de tu proyecto.',
                },
                {
                  t: 'Garantía respaldada por el fabricante',
                  d: 'Las condiciones aplicables en México te las entregamos por escrito con la cotización.',
                },
                {
                  t: 'Ingeniería de proyecto, no venta de caja',
                  d: 'Cálculo de carga térmica, renovaciones, área de salida de aire y distribución de equipos antes de cotizar.',
                },
              ].map((item) => (
                <li key={item.t} className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-5">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-bold">{item.t}</p>
                    <p className="mt-1 leading-relaxed text-slate-300">{item.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="cotizar" className="bg-white py-20 scroll-mt-24">
        <div className="container-premium">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 text-center">
              <h2 className="mb-4 text-3xl font-bold leading-tight text-slate-800 md:text-4xl">
                ¿Consulta técnica o repuestos?
              </h2>
              <p className="text-lg text-slate-600">
                Escríbenos y te contesta alguien que conoce estos equipos por dentro.
              </p>
            </div>
            <QuickQuoteForm
              context="tecnologia_hub"
              title="Consulta técnica"
              subtitle="Dimensionamiento, repuestos originales o documentación de fábrica."
            />
          </div>
        </div>
      </section>

      <RelatedLinks
        keys={['comparativa', 'blog-nebulizacion', 'cobertura', 'blog-agua', 'soluciones', 'productos']}
        title="Continúa por aquí"
        subtitle="Comparativas, catálogo y aplicaciones por sector."
      />
    </>
  );
}
