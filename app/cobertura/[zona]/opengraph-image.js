import { crearImagenOG, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
import { getZona } from '@/data/zonas';

export const alt = 'Cobertura de climatización industrial por zona';

export default async function Image({ params }) {
  const { zona } = await params;
  const d = getZona(zona);
  return crearImagenOG({
    eyebrow: d?.aptitudLabel || 'Cobertura',
    titulo: d?.h1 || 'Climatización industrial en México',
    pie: d?.ciudades?.slice(0, 5).join(' · '),
  });
}
