import { crearImagenOG, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Breezair Industrial México · Enfriamiento evaporativo industrial';

export default function Image() {
  return crearImagenOG({
    eyebrow: 'Enfriamiento evaporativo industrial',
    titulo: 'Climatiza tu nave sin la factura del aire acondicionado',
    pie: 'Distribuidor oficial de Seeley International en México.',
    dato: '87%',
    datoPie: 'Menos consumo',
  });
}
