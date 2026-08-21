import { crearImagenOG, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Catálogo de equipos Breezair para enfriamiento industrial';

export default function Image() {
  return crearImagenOG({
    eyebrow: 'Catálogo Breezair',
    titulo: 'Tres series para tres tipos de instalación',
    pie: 'La serie correcta la decide el volumen de tu nave, no el catálogo.',
  });
}
