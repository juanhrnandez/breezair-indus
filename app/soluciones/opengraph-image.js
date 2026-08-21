import { crearImagenOG, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Soluciones de climatización industrial por sector';

export default function Image() {
  return crearImagenOG({
    eyebrow: 'Soluciones por sector',
    titulo: 'El calor no se resuelve igual en una nave que en una granja',
    pie: 'Naves industriales, logística, alimentaria, talleres, agroindustria y espacios comerciales.',
  });
}
