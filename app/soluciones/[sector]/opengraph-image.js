import { crearImagenOG, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
import { getSector } from '@/data/soluciones';

export const alt = 'Solución de climatización industrial por sector';

export default async function Image({ params }) {
  const { sector } = await params;
  const d = getSector(sector);
  return crearImagenOG({
    eyebrow: d?.eyebrow || 'Soluciones',
    titulo: d?.h1 || 'Climatización industrial',
    pie: d?.linkText,
  });
}
