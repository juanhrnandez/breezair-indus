import { crearImagenOG, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Equipo Breezair para enfriamiento evaporativo industrial';

const NOMBRES = {
  'tbsi-series': { titulo: 'Breezair TBSI Series', pie: 'Alta capacidad para naves industriales de gran volumen.' },
  'exs-series': { titulo: 'Breezair EXS Series', pie: 'Configuración modular para procesos con requisitos especiales.' },
  'icon-series': { titulo: 'Breezair Icon Series', pie: 'Formato compacto para espacios industriales medianos.' },
  'custom-solutions': { titulo: 'Soluciones a medida', pie: 'Diseño específico cuando el catálogo estándar no resuelve.' },
};

export default async function Image({ params }) {
  const { id } = await params;
  const d = NOMBRES[id] || { titulo: 'Equipos Breezair' };
  return crearImagenOG({ eyebrow: 'Catálogo Breezair', titulo: d.titulo, pie: d.pie });
}
