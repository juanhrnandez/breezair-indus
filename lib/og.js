import { ImageResponse } from 'next/og';

/**
 * Generación de imágenes Open Graph.
 *
 * Antes: 19 rutas sin `og:image`, 7 apuntando a un directorio inexistente y 5
 * a un marcador de 4 KB. Al compartir el enlace por WhatsApp —el canal
 * principal de este negocio— no aparecía vista previa.
 *
 * En lugar de encargar 36 imágenes a diseño, se renderizan aquí: Next las
 * genera al construir el sitio, una por página, con el título real. Añadir una
 * página nueva le da su imagen automáticamente.
 *
 * Nota tipográfica: `ImageResponse` necesita los datos de la fuente incrustados
 * para usar una familia propia. Cargarla por red en tiempo de compilación haría
 * que un fallo de red rompiera el build, así que se usa la fuente por defecto y
 * el carácter lo aporta la composición: fondo de tinta, regla cian y jerarquía.
 */

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = 'image/png';

const INK = '#0A121C';
const STEEL = '#1F2D3D';
const CHILL = '#22B8D6';
const CHILL_SOFT = '#5FD3EB';

/**
 * @param {object} opts
 * @param {string} opts.titulo    Titular principal.
 * @param {string} [opts.eyebrow] Antetítulo en versalitas.
 * @param {string} [opts.pie]     Línea de contexto al pie.
 * @param {string} [opts.dato]    Cifra destacada, opcional.
 * @param {string} [opts.datoPie] Etiqueta de la cifra.
 */
export function crearImagenOG({ titulo, eyebrow, pie, dato, datoPie }) {
  // Los titulares muy largos se recortan: mejor cortar que desbordar.
  const t = titulo.length > 92 ? `${titulo.slice(0, 89)}…` : titulo;
  const tamano = t.length > 62 ? 60 : t.length > 40 ? 72 : 84;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: INK,
          padding: '64px 72px',
          position: 'relative',
        }}
      >
        {/* Retícula técnica */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        {/* Halo frío en la esquina */}
        <div
          style={{
            position: 'absolute',
            top: -180,
            right: -140,
            width: 520,
            height: 520,
            borderRadius: 520,
            background: 'radial-gradient(circle, rgba(34,184,214,0.20) 0%, rgba(34,184,214,0) 70%)',
          }}
        />

        {/* Antetítulo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div style={{ width: 56, height: 3, background: CHILL }} />
          <div
            style={{
              color: CHILL,
              fontSize: 22,
              letterSpacing: 4,
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            {eyebrow || 'Breezair Industrial México'}
          </div>
        </div>

        {/* Titular */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 26, maxWidth: dato ? 720 : 1040 }}>
          <div
            style={{
              color: '#FFFFFF',
              fontSize: tamano,
              fontWeight: 800,
              lineHeight: 1.06,
              letterSpacing: -1.5,
            }}
          >
            {t}
          </div>
          {pie && (
            <div style={{ color: '#A9B7C6', fontSize: 30, lineHeight: 1.35, maxWidth: 900 }}>{pie}</div>
          )}
        </div>

        {/* Cifra destacada, si la hay */}
        {dato && (
          <div
            style={{
              position: 'absolute',
              right: 72,
              top: 232,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              borderRight: `4px solid ${CHILL}`,
              paddingRight: 26,
            }}
          >
            <div style={{ color: CHILL_SOFT, fontSize: 96, fontWeight: 800, lineHeight: 1 }}>{dato}</div>
            {datoPie && (
              <div style={{ color: '#7A8CA1', fontSize: 20, letterSpacing: 2, textTransform: 'uppercase', marginTop: 10 }}>
                {datoPie}
              </div>
            )}
          </div>
        )}

        {/* Pie de marca */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: `2px solid ${STEEL}`,
            paddingTop: 26,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
            <div style={{ color: '#FFFFFF', fontSize: 34, fontWeight: 800, letterSpacing: -0.5 }}>
              Breezair
            </div>
            <div style={{ color: '#7A8CA1', fontSize: 22 }}>Industrial México</div>
          </div>
          <div style={{ color: '#7A8CA1', fontSize: 21, letterSpacing: 1 }}>
            Distribuidor oficial · Seeley International
          </div>
        </div>
      </div>
    ),
    OG_SIZE
  );
}
