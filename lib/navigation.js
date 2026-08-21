import { SECTORES } from '@/data/soluciones';
import { TECNOLOGIAS } from '@/data/tecnologia';
import { ZONAS } from '@/data/zonas';

/**
 * Estructura de navegación principal.
 *
 * El encabezado tenía seis destinos de primer nivel compitiendo en una sola
 * fila. El problema no era el espaciado sino la cantidad: seis decisiones
 * simultáneas no se leen, se sufren.
 *
 * La solución es la que usan los fabricantes industriales grandes: tres
 * entradas con mega-menú, cada una con su propia jerarquía interna. El
 * visitante elige primero entre tres cosas y sólo después entra al detalle.
 *
 * Las columnas se construyen desde los mismos archivos de datos que generan
 * las páginas, así que añadir un sector o una zona lo pone en el menú solo.
 */

export const MENU = [
  {
    id: 'soluciones',
    label: 'Soluciones',
    href: '/soluciones',
    intro: {
      title: 'El calor no se resuelve igual en una nave que en una granja',
      text: 'Cada instalación tiene su propia carga térmica, su propia salida de aire y su propio límite de humedad.',
      href: '/soluciones',
      cta: 'Ver todas las soluciones',
    },
    columns: [
      {
        title: 'Por tipo de instalación',
        items: SECTORES.map((s) => ({
          label: s.nav,
          href: `/soluciones/${s.slug}`,
          note: s.eyebrow,
        })),
      },
      {
        title: 'Por zona del país',
        items: [
          ...ZONAS.map((z) => ({
            label: z.nav,
            href: `/cobertura/${z.slug}`,
            note: z.aptitudLabel,
          })),
          { label: 'Cobertura nacional', href: '/cobertura', note: 'Mapa completo', strong: true },
        ],
      },
    ],
  },
  {
    id: 'productos',
    label: 'Productos',
    href: '/productos',
    intro: {
      title: 'Distribuidor oficial de Seeley International',
      text: 'Equipos originales, refacciones legítimas y la documentación técnica de fábrica.',
      href: '/productos',
      cta: 'Ver el catálogo',
    },
    columns: [
      {
        title: 'Equipos',
        items: [
          { label: 'Breezair TBSI', href: '/productos/tbsi-series', note: 'Alta capacidad' },
          { label: 'Breezair EXS', href: '/productos/exs-series', note: 'Modular' },
          { label: 'Breezair Icon', href: '/productos/icon-series', note: 'Compacto' },
          { label: 'Soluciones a medida', href: '/productos/custom-solutions', note: 'Proyecto especial' },
          { label: 'Catálogo completo', href: '/productos', note: 'Comparar series', strong: true },
        ],
      },
      {
        title: 'Tecnología',
        items: [
          ...TECNOLOGIAS.map((t) => ({
            label: t.nav,
            href: `/tecnologia/${t.slug}`,
            note: t.eyebrow,
          })),
          { label: 'Cómo funciona', href: '/tecnologia', note: 'El principio, paso a paso', strong: true },
        ],
      },
    ],
  },
  {
    id: 'recursos',
    label: 'Recursos',
    href: '/blog',
    intro: {
      title: 'Ingeniería antes que folleto',
      text: 'Guías de dimensionamiento, comparativas honestas y herramientas de cálculo.',
      href: '/blog',
      cta: 'Ir al blog técnico',
    },
    columns: [
      {
        title: 'Guías y comparativas',
        items: [
          { label: 'Evaporativo vs aire acondicionado', href: '/enfriamiento-evaporativo-vs-aire-acondicionado', note: 'Comparativa' },
          { label: 'Cómo calcular renovaciones de aire', href: '/blog/renovaciones-de-aire-nave-industrial-como-calcular', note: 'Diseño' },
          { label: 'El error de la salida de aire', href: '/blog/salida-de-aire-error-diseno-enfriamiento-evaporativo', note: 'Diseño' },
          { label: 'Consumo real de agua', href: '/blog/consumo-de-agua-enfriador-evaporativo-industrial', note: 'Operación' },
          { label: 'Todos los artículos', href: '/blog', note: 'Blog técnico', strong: true },
        ],
      },
      {
        title: 'La empresa',
        items: [
          { label: 'Quiénes somos', href: '/nosotros', note: 'CG International' },
          { label: 'Calculadora de ahorro', href: '/#calculadora', note: 'Herramienta' },
          { label: 'Contacto y cotización', href: '/contacto', note: 'Sin costo' },
        ],
      },
    ],
  },
];

/** Enlaces planos para el menú móvil y para comprobaciones de ruta activa. */
export const FLAT_LINKS = MENU.flatMap((m) => [
  { label: m.label, href: m.href },
  ...m.columns.flatMap((c) => c.items),
]);
