import { crearImagenOG, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Enfriamiento evaporativo frente a aire acondicionado industrial';

export default function Image() {
  return crearImagenOG({
    eyebrow: 'Comparativa técnica',
    titulo: 'Evaporativo o aire acondicionado: cuál conviene en cada caso',
    pie: 'Once criterios, cinco de ellos a favor del aire acondicionado.',
  });
}
