import { crearImagenOG, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Cobertura nacional de climatización industrial en México';

export default function Image() {
  return crearImagenOG({
    eyebrow: 'Cobertura nacional',
    titulo: 'Esta tecnología no rinde igual en Mexicali que en Villahermosa',
    pie: 'Mapa honesto de aptitud por zona climática, incluidas aquellas donde no la recomendamos.',
  });
}
