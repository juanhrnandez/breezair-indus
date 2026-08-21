import { crearImagenOG, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'CG International · Distribuidor oficial de Breezair en México';

export default function Image() {
  return crearImagenOG({
    eyebrow: 'CG International',
    titulo: 'No vendemos equipos. Dimensionamos instalaciones.',
    pie: 'Distribuidor oficial de Breezair y Seeley International en México.',
  });
}
