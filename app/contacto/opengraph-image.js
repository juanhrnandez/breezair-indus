import { crearImagenOG, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Contacto y cotización · Breezair Industrial México';

export default function Image() {
  return crearImagenOG({
    eyebrow: 'Contacto',
    titulo: 'Hablemos de tu proyecto industrial',
    pie: 'Cálculo de carga térmica y propuesta sin costo. Respuesta en menos de 24 h hábiles.',
  });
}
