/**
 * Registro central de destinos internos del sitio.
 *
 * Cada página se declara una vez aquí con su título, su descripción corta y el
 * tema al que pertenece. Los bloques de enlaces relacionados se construyen
 * pidiendo claves a este registro, de modo que:
 *   - el texto ancla es consistente en todo el sitio (Google lo usa como señal),
 *   - añadir una página nueva la hace enlazable desde cualquier parte,
 *   - no quedan enlaces internos apuntando a rutas que ya no existen.
 *
 * Al agregar una página nueva: regístrala aquí y añádela al sitemap.
 */

export const LINKS = {
  // ── Páginas núcleo ──────────────────────────────────────────────────────────
  home: {
    href: '/',
    title: 'Breezair Industrial México',
    text: 'Enfriamiento evaporativo industrial con hasta 87 % de ahorro energético.',
    topic: 'core',
  },
  productos: {
    href: '/productos',
    title: 'Catálogo de equipos Breezair',
    text: 'Series industriales y comerciales, con capacidades y aplicaciones de cada una.',
    topic: 'producto',
  },
  contacto: {
    href: '/contacto',
    title: 'Solicitar cotización',
    text: 'Un ingeniero dimensiona tu proyecto y te envía la propuesta sin costo.',
    topic: 'core',
  },
  nosotros: {
    href: '/nosotros',
    title: 'Quiénes somos',
    text: 'CG International, distribuidor oficial de Breezair y Seeley International en México.',
    topic: 'core',
  },
  calculadora: {
    href: '/#calculadora',
    title: 'Calculadora de ahorro energético',
    text: 'Estima en un minuto cuánto bajaría tu recibo de luz con enfriamiento evaporativo.',
    topic: 'herramienta',
  },
  blog: {
    href: '/blog',
    title: 'Blog técnico',
    text: 'Guías de eficiencia energética, mantenimiento y diseño de instalaciones.',
    topic: 'core',
  },

  // ── Producto ────────────────────────────────────────────────────────────────
  'producto-tbsi': {
    href: '/productos/tbsi-series',
    title: 'Breezair Serie TBSI',
    text: 'Equipo axial de alta capacidad para naves industriales de gran volumen.',
    topic: 'producto',
  },
  'producto-exs': {
    href: '/productos/exs-series',
    title: 'Breezair Serie EXS',
    text: 'Configuración modular para procesos industriales con requisitos especiales.',
    topic: 'producto',
  },
  'producto-icon': {
    href: '/productos/icon-series',
    title: 'Breezair Serie Icon',
    text: 'Formato compacto para espacios medianos y aplicaciones comerciales.',
    topic: 'producto',
  },
  'producto-custom': {
    href: '/productos/custom-solutions',
    title: 'Soluciones a medida',
    text: 'Diseño específico cuando el catálogo estándar no resuelve la instalación.',
    topic: 'producto',
  },

  // ── Soluciones por sector ───────────────────────────────────────────────────
  soluciones: {
    href: '/soluciones',
    title: 'Soluciones por sector',
    text: 'Cómo se resuelve el calor en cada tipo de instalación industrial y comercial.',
    topic: 'sector',
  },

  // ── Tecnología de marca ─────────────────────────────────────────────────────
  tecnologia: {
    href: '/tecnologia',
    title: 'Tecnología Breezair',
    text: 'Chillcel®, WaterManager™, MagIQtouch™ y Prematuf™ explicados por el distribuidor oficial.',
    topic: 'tecnologia',
  },
  comparativa: {
    href: '/enfriamiento-evaporativo-vs-aire-acondicionado',
    title: 'Evaporativo frente a aire acondicionado',
    text: 'Cuándo gana cada tecnología, con los números y los casos en los que no conviene.',
    topic: 'guia',
  },

  // ── Cobertura por zona ──────────────────────────────────────────────────────
  cobertura: {
    href: '/cobertura',
    title: 'Cobertura nacional',
    text: 'Dónde rinde el enfriamiento evaporativo en México, zona por zona.',
    topic: 'zona',
  },

  // ── Guías ───────────────────────────────────────────────────────────────────
  'blog-eficiencia': {
    href: '/blog/eficiencia-energetica-breezair-mexico-2024',
    title: 'Eficiencia energética industrial con Breezair',
    text: 'De dónde sale el ahorro frente al aire acondicionado convencional.',
    topic: 'guia',
  },
  'blog-mantenimiento': {
    href: '/blog/guia-mantenimiento-sistemas-breezair-mexico',
    title: 'Guía de mantenimiento de sistemas Breezair',
    text: 'Protocolos preventivos que sostienen la eficiencia año tras año.',
    topic: 'guia',
  },
  'blog-renovaciones': {
    href: '/blog/renovaciones-de-aire-nave-industrial-como-calcular',
    title: 'Cómo calcular las renovaciones de aire',
    text: 'La unidad de diseño del enfriamiento evaporativo no son los watts, es el caudal.',
    topic: 'guia',
  },
  'blog-agua': {
    href: '/blog/consumo-de-agua-enfriador-evaporativo-industrial',
    title: 'Cuánta agua consume el sistema',
    text: 'De dónde sale el consumo, qué pasa con el agua dura y cómo comparar agua contra electricidad.',
    topic: 'guia',
  },
  'blog-salida-aire': {
    href: '/blog/salida-de-aire-error-diseno-enfriamiento-evaporativo',
    title: 'El error de diseño más caro',
    text: 'Si el aire entra y no tiene por dónde salir, el sistema se ahoga. Cómo dimensionar la salida.',
    topic: 'guia',
  },
  'blog-nebulizacion': {
    href: '/blog/enfriamiento-evaporativo-vs-nebulizacion-misting',
    title: 'Evaporativo frente a nebulización',
    text: 'Una evapora dentro del equipo, la otra en el aire. Dónde funciona cada una.',
    topic: 'guia',
  },
  'blog-caso-exito': {
    href: '/blog/caso-exito-walmart-mexico-breezair-enfriamiento-evaporativo',
    title: 'Caso de éxito en centro de distribución',
    text: 'Resultados medidos tras sustituir la climatización de una nave logística.',
    topic: 'guia',
  },

  // ── Legal ───────────────────────────────────────────────────────────────────
  privacidad: {
    href: '/aviso-de-privacidad',
    title: 'Aviso de privacidad',
    text: 'Cómo tratamos los datos que nos compartes.',
    topic: 'legal',
  },
};

/** Registra los sectores en el mapa de enlaces para que sean enlazables por clave. */
export function registerSectors(sectors) {
  sectors.forEach((s) => {
    LINKS[`sector-${s.slug}`] = {
      href: `/soluciones/${s.slug}`,
      title: s.linkTitle,
      text: s.linkText,
      topic: 'sector',
    };
  });
  return LINKS;
}

/** Registra las páginas de tecnología para que sean enlazables por clave. */
export function registerTech(techs) {
  techs.forEach((t) => {
    LINKS[`tec-${t.slug}`] = {
      href: `/tecnologia/${t.slug}`,
      title: t.linkTitle,
      text: t.linkText,
      topic: 'tecnologia',
    };
  });
  return LINKS;
}

/** Registra las zonas de cobertura para que sean enlazables por clave. */
export function registerZonas(zonas) {
  zonas.forEach((z) => {
    LINKS[`zona-${z.slug}`] = {
      href: `/cobertura/${z.slug}`,
      title: z.linkTitle,
      text: z.linkText,
      topic: 'zona',
    };
  });
  return LINKS;
}

/** Devuelve los destinos pedidos, descartando claves inexistentes. */
export function getLinks(keys = []) {
  return keys.map((k) => LINKS[k]).filter(Boolean);
}

/** Todos los destinos de un tema, excluyendo opcionalmente uno. */
export function getTopicLinks(topic, excludeHref) {
  return Object.values(LINKS).filter((l) => l.topic === topic && l.href !== excludeHref);
}
