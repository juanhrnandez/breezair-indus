import { crearImagenOG, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Blog técnico de enfriamiento evaporativo industrial';

export default function Image() {
  return crearImagenOG({
    eyebrow: 'Blog técnico',
    titulo: 'Ingeniería antes que folleto',
    pie: 'Cálculo de renovaciones de aire, consumo de agua y diseño de instalaciones.',
  });
}
