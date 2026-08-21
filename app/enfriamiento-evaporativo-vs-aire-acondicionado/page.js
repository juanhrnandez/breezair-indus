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
const URL = `${BASE}/enfriamiento-evaporativo-vs-aire-acondicionado/`;

export const metadata = {
  title: 'Evaporativo vs aire acondicionado',
  description:
    'Consumo, humedad, instalación y límites de cada tecnología, con los cinco criterios en los que gana el aire acondicionado.',
  keywords: [
    'enfriamiento evaporativo vs aire acondicionado',
    'diferencia enfriador evaporativo y aire acondicionado',
    'qué es mejor para nave industrial',
    'aire acondicionado industrial consumo',
    'cuál conviene climatización industrial',
    'enfriador evaporativo desventajas',
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: 'Enfriamiento Evaporativo vs Aire Acondicionado | Breezair México',
    description:
      'Consumo, humedad, instalación y límites de cada tecnología. Incluye los casos en los que el aire acondicionado es la opción correcta.',
    url: URL,
    type: 'article',
    locale: 'es_MX',
  },
  robots: { index: true, follow: true },
};

const COMPARATIVA = [
  {
    criterio: 'Principio de funcionamiento',
    evaporativo: 'Evapora agua para enfriar aire exterior',
    ac: 'Ciclo de compresión con gas refrigerante',
    gana: null,
  },
  {
    criterio: 'Consumo eléctrico',
    evaporativo: 'Sólo ventilador y bomba: 1.1–1.5 kW por equipo industrial',
    ac: 'Compresor + ventiladores: decenas de kW para cobertura equivalente',
    gana: 'evaporativo',
  },
  {
    criterio: 'Aire tratado',
    evaporativo: '100 % exterior, sin recirculación',
    ac: 'Mayoritariamente recirculado, con aportación parcial de aire nuevo',
    gana: 'evaporativo',
  },
  {
    criterio: 'Humedad relativa',
    evaporativo: 'La aumenta: es el mecanismo de enfriamiento',
    ac: 'La reduce: deshumidifica al enfriar',
    gana: 'ac',
  },
  {
    criterio: 'Control de temperatura',
    evaporativo: 'Limitado por el bulbo húmedo exterior; no fija un valor exacto',
    ac: 'Mantiene una consigna precisa independientemente del exterior',
    gana: 'ac',
  },
  {
    criterio: 'Espacios abiertos o con portones',
    evaporativo: 'Funciona: la renovación de aire es su mecanismo',
    ac: 'Inviable: cada apertura tira el aire tratado',
    gana: 'evaporativo',
  },
  {
    criterio: 'Instalación eléctrica requerida',
    evaporativo: 'Suele caber en la capacidad instalada existente',
    ac: 'Frecuentemente obliga a ampliar la subestación',
    gana: 'evaporativo',
  },
  {
    criterio: 'Consumo de agua',
    evaporativo: 'Decenas de litros por hora y por equipo',
    ac: 'Prácticamente nulo',
    gana: 'ac',
  },
  {
    criterio: 'Gases refrigerantes',
    evaporativo: 'Ninguno: sólo agua y aire',
    ac: 'HFC u otros, con obligaciones de control de fugas',
    gana: 'evaporativo',
  },
  {
    criterio: 'Mantenimiento',
    evaporativo: 'Paneles, bomba y calidad del agua',
    ac: 'Compresores, refrigerante, serpentines y filtros',
    gana: 'evaporativo',
  },
  {
    criterio: 'Rendimiento en clima húmedo',
    evaporativo: 'Se reduce: menos margen de bulbo húmedo',
    ac: 'Estable, independiente de la humedad exterior',
    gana: 'ac',
  },
];

const CUANDO_EVAPORATIVO = [
  'Naves industriales, almacenes y talleres de gran volumen donde el objetivo es el confort del personal.',
  'Instalaciones con portones o accesos abiertos durante la operación.',
  'Espacios semiabiertos: terrazas, andenes, canchas techadas, áreas de acceso.',
  'Procesos con carga térmica interna alta que hay que barrer, no refrigerar.',
  'Ambientes donde se necesita renovación de aire por humos, olores o partículas.',
  'Localidades con clima seco o semiseco: el interior del país, el Bajío y el norte.',
];

const CUANDO_AC = [
  'Salas con humedad relativa especificada por proceso o por producto.',
  'Espacios que requieren una temperatura exacta y constante, no «varios grados menos».',
  'Áreas herméticas por control de contaminación o presión diferencial.',
  'Cámaras de frío y conservación, que son refrigeración y no confort térmico.',
  'Oficinas, salas de servidores y laboratorios dentro de la propia planta.',
  'Localidades de litoral con humedad muy alta de forma sostenida todo el verano.',
];

const FAQS = [
  {
    q: '¿Cuál enfría más, un enfriador evaporativo o un aire acondicionado?',
    a: 'El aire acondicionado alcanza temperaturas más bajas y las mantiene fijas, porque no depende del clima exterior. El enfriamiento evaporativo tiene un límite físico: no puede bajar del bulbo húmedo del aire exterior. La pregunta útil no es cuál enfría más, sino cuál resuelve tu problema: si necesitas 22 °C constantes en una sala cerrada, es aire acondicionado; si necesitas que una nave de 5,000 m² sea trabajable en mayo sin arruinarte, es evaporativo.',
  },
  {
    q: '¿Cuánto menos consume realmente un sistema evaporativo?',
    a: 'Un equipo evaporativo industrial consume del orden de 1.1 a 1.5 kW porque sólo alimenta un ventilador y una bomba. Un sistema de refrigeración que cubriera la misma superficie necesita compresores, y ahí el consumo se mide en decenas de kW. La diferencia real en tu caso depende de las horas de operación y de tu tarifa; puedes estimarla con la calculadora del sitio.',
  },
  {
    q: '¿El enfriamiento evaporativo funciona en clima húmedo?',
    a: 'Funciona, pero con menos salto térmico. Cuanto más húmedo está el aire, menos margen hay para evaporar y menos baja la temperatura. En el litoral mexicano el efecto se apoya más en el movimiento de aire y en la renovación que en el descenso de grados. Es una evaluación que se hace con datos de bulbo húmedo de la localidad, no con una regla general.',
  },
  {
    q: '¿Puedo combinar las dos tecnologías en la misma planta?',
    a: 'Es lo más habitual en instalaciones industriales bien resueltas: evaporativo en la nave de producción y el almacén, aire acondicionado en oficinas, laboratorio y salas con requisitos de humedad. Cada tecnología cubre lo que hace bien.',
  },
  {
    q: '¿Cuál sale más barato de instalar?',
    a: 'En general el evaporativo, y la diferencia grande no suele estar en el equipo sino en la infraestructura: al no haber compresores, la demanda eléctrica es mucho menor y con frecuencia se evita ampliar la subestación, que es un costo que puede superar al de la propia climatización.',
  },
  {
    q: '¿Y el mantenimiento a largo plazo?',
    a: 'El evaporativo tiene menos piezas críticas: paneles, bomba y control de la calidad del agua. No hay compresores, no hay circuito a presión y no hay obligaciones de control de fugas de refrigerante. A cambio requiere disciplina con el agua, porque la incrustación mineral es lo que degrada su rendimiento con los años.',
  },
];

export default function ComparativaPage() {
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Enfriamiento evaporativo frente a aire acondicionado industrial',
      description: metadata.description,
      inLanguage: 'es-MX',
      url: URL,
      author: { '@type': 'Organization', name: 'CG International' },
      publisher: { '@type': 'Organization', name: 'Breezair Industrial México', url: BASE },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQS.map((f) => ({
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
        { '@type': 'ListItem', position: 2, name: 'Evaporativo vs aire acondicionado', item: URL },
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
            alt="Comparación entre enfriamiento evaporativo y aire acondicionado industrial"
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
            <span className="text-white">Evaporativo vs aire acondicionado</span>
          </nav>

          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 backdrop-blur">
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 pulse-glow" />
              <span className="text-sm font-semibold tracking-wide">COMPARATIVA TÉCNICA</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Enfriamiento evaporativo o aire acondicionado: cuál conviene en cada caso
            </h1>
            <p className="max-w-3xl text-xl leading-relaxed text-blue-100">
              Vendemos enfriamiento evaporativo, así que lo justo es empezar por ahí: hay
              instalaciones en las que el aire acondicionado es la respuesta correcta y nosotros lo
              decimos antes de la visita técnica. Esta página explica dónde está la línea.
            </p>
          </div>
        </div>
      </header>

      {/* La diferencia de fondo */}
      <section className="bg-white py-20">
        <div className="container-premium">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold leading-tight text-slate-800 md:text-4xl">
              No son dos versiones de lo mismo
            </h2>
            <p className="mb-5 text-lg leading-relaxed text-slate-600">
              El aire acondicionado <strong className="font-semibold text-slate-900">extrae calor</strong> de
              un aire que recircula, usando un ciclo de compresión con gas refrigerante. Es un sistema
              cerrado: cuanto mejor sellado esté el espacio, mejor funciona. Su factura es el
              compresor.
            </p>
            <p className="mb-5 text-lg leading-relaxed text-slate-600">
              El enfriamiento evaporativo{' '}
              <strong className="font-semibold text-slate-900">sustituye el aire</strong>: toma aire de
              fuera, lo enfría haciéndolo pasar por paneles húmedos y lo mete en el espacio,
              desplazando el aire caliente hacia el exterior. Es un sistema abierto: necesita que el
              aire pueda salir. Su factura es un ventilador.
            </p>
            <p className="text-lg leading-relaxed text-slate-600">
              De esa diferencia estructural sale todo lo demás. Uno gana en control preciso y en
              ambientes cerrados; el otro gana en volumen, en espacios abiertos y en consumo. Compararlos
              por «cuál enfría más» es la pregunta equivocada.
            </p>
          </div>
        </div>
      </section>

      {/* Tabla comparativa */}
      <section className="bg-slate-50 py-20">
        <div className="container-premium">
          <div className="mb-10 max-w-3xl">
            <h2 className="text-3xl font-bold leading-tight text-slate-800 md:text-4xl">
              Criterio por criterio
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full min-w-[46rem] border-collapse text-left">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100">
                  <th scope="col" className="p-4 text-sm font-bold tracking-wide text-slate-600">Criterio</th>
                  <th scope="col" className="p-4 text-sm font-bold tracking-wide text-blue-700">Enfriamiento evaporativo</th>
                  <th scope="col" className="p-4 text-sm font-bold tracking-wide text-slate-600">Aire acondicionado</th>
                </tr>
              </thead>
              <tbody>
                {COMPARATIVA.map((row) => (
                  <tr key={row.criterio} className="border-b border-slate-100 last:border-0">
                    <th scope="row" className="p-4 align-top font-semibold text-slate-800">{row.criterio}</th>
                    <td className={`p-4 align-top ${row.gana === 'evaporativo' ? 'bg-blue-50 font-medium text-blue-900' : 'text-slate-600'}`}>
                      {row.evaporativo}
                    </td>
                    <td className={`p-4 align-top ${row.gana === 'ac' ? 'bg-amber-50 font-medium text-amber-900' : 'text-slate-600'}`}>
                      {row.ac}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-slate-500">
            Las celdas resaltadas indican qué tecnología tiene ventaja en ese criterio. Cinco de once
            favorecen al aire acondicionado: por eso la respuesta depende de tu instalación y no de
            una tabla.
          </p>
        </div>
      </section>

      {/* Cuándo cada uno */}
      <section className="bg-white py-20">
        <div className="container-premium">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border-2 border-blue-200 bg-blue-50/50 p-8">
              <h2 className="mb-6 text-2xl font-bold text-slate-800">Elige enfriamiento evaporativo si…</h2>
              <ul className="space-y-4">
                {CUANDO_EVAPORATIVO.map((item) => (
                  <li key={item} className="flex gap-3">
                    <svg className="mt-1 h-5 w-5 shrink-0 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="leading-relaxed text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border-2 border-amber-200 bg-amber-50/50 p-8">
              <h2 className="mb-6 text-2xl font-bold text-slate-800">Elige aire acondicionado si…</h2>
              <ul className="space-y-4">
                {CUANDO_AC.map((item) => (
                  <li key={item} className="flex gap-3">
                    <svg className="mt-1 h-5 w-5 shrink-0 text-amber-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="leading-relaxed text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border-l-4 border-slate-800 bg-slate-100 p-6">
            <p className="leading-relaxed text-slate-700">
              <strong className="font-bold text-slate-900">Lo más frecuente es que la respuesta sea «las dos».</strong>{' '}
              Evaporativo en la nave de producción, el almacén y los andenes; aire acondicionado en
              oficinas, laboratorio y salas con humedad controlada. Dimensionar cada zona con la
              tecnología que le corresponde es lo que baja de verdad el costo total.
            </p>
          </div>
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
              {FAQS.map((faq) => (
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

      <section id="cotizar" className="bg-white py-20 scroll-mt-24">
        <div className="container-premium">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 text-center">
              <h2 className="mb-4 text-3xl font-bold leading-tight text-slate-800 md:text-4xl">
                ¿Cuál corresponde a tu instalación?
              </h2>
              <p className="text-lg text-slate-600">
                Cuéntanos qué espacio necesitas climatizar. Si el evaporativo no es la respuesta para
                tu caso, te lo diremos y te explicaremos por qué.
              </p>
            </div>
            <QuickQuoteForm
              context="comparativa"
              title="Evaluación técnica sin costo"
              subtitle="Un ingeniero revisa tu caso y te dice qué tecnología corresponde."
            />
          </div>
        </div>
      </section>

      <RelatedLinks
        keys={['blog-nebulizacion', 'cobertura', 'tecnologia', 'blog-renovaciones', 'zona-sureste-y-golfo', 'calculadora']}
        title="Profundiza"
        subtitle="Cómo funciona la tecnología por dentro y cómo se aplica en cada sector."
      />
    </>
  );
}
