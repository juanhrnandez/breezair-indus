import { crearImagenOG, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
import { getTecnologia } from '@/data/tecnologia';

export const alt = 'Tecnología Breezair';

export default async function Image({ params }) {
  const { tec } = await params;
  const d = getTecnologia(tec);
  return crearImagenOG({
    eyebrow: d?.eyebrow || 'Tecnología Breezair',
    titulo: d?.h1 || 'Tecnología Breezair',
    pie: d?.linkText,
    dato: d?.datos?.[0]?.value,
    datoPie: d?.datos?.[0]?.label,
  });
}
