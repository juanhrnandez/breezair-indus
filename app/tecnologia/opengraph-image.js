import { crearImagenOG, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Tecnología Breezair explicada por el distribuidor oficial';

export default function Image() {
  return crearImagenOG({
    eyebrow: 'Tecnología Breezair',
    titulo: 'Qué hay dentro de un Breezair',
    pie: 'Paneles Chillcel®, WaterManager™, MagIQtouch™ y gabinete Prematuf™, sin folleto.',
  });
}
