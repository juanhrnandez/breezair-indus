import Link from 'next/link'
import { PHONE_DISPLAY, TEL_LINK, EMAIL_SALES, MAILTO_LINK } from '@/lib/site'

export const revalidate = 86400;
export const dynamic = 'force-static';

export const metadata = {
  title: 'Aviso de Privacidad',
  description:
    'Aviso de privacidad de CG International (Breezair Industrial México) conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.',
  alternates: { canonical: 'https://www.breezair.com.mx/aviso-de-privacidad/' },
  robots: { index: true, follow: true }
}

const SECTIONS = [
  {
    title: '1. Responsable del tratamiento de tus datos personales',
    body: [
      'CG International, distribuidor oficial de Breezair en México (en adelante “CG International”), con domicilio en Ciudad de México, México, es responsable del uso y protección de tus datos personales, conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP), su Reglamento y demás normatividad aplicable.'
    ]
  },
  {
    title: '2. Datos personales que recabamos',
    body: [
      'A través de los formularios del sitio web breezair.com.mx recabamos únicamente los datos necesarios para atender tu solicitud comercial o técnica: nombre, empresa u organización, teléfono, correo electrónico, sector industrial, superficie estimada del proyecto y la descripción que decidas compartir.',
      'No recabamos datos personales sensibles ni datos patrimoniales o financieros a través de este sitio.'
    ]
  },
  {
    title: '3. Finalidades del tratamiento',
    body: [
      'Finalidades primarias (necesarias para la relación): atender y dar seguimiento a tu solicitud; elaborar cotizaciones y propuestas técnicas; contactarte por teléfono, WhatsApp o correo electrónico; brindar soporte técnico y post-venta; y llevar el registro interno de prospectos y clientes.',
      'Finalidades secundarias (no necesarias, puedes oponerte): envío de información técnica, novedades de producto e invitaciones a eventos o demostraciones. Si no deseas que tus datos se usen para estos fines, puedes indicarlo escribiendo a ' + EMAIL_SALES + '.'
    ]
  },
  {
    title: '4. Transferencia de datos',
    body: [
      'Tus datos personales no se venden ni se comparten con fines publicitarios de terceros. Únicamente pueden compartirse con el fabricante o con proveedores de servicios que nos apoyan en la operación (por ejemplo, plataformas de correo electrónico y analítica web), quienes están obligados a mantener la confidencialidad de la información y a tratarla conforme al presente aviso.'
    ]
  },
  {
    title: '5. Uso de cookies y tecnologías de rastreo',
    body: [
      'Este sitio puede utilizar cookies y herramientas de analítica (como Google Analytics y píxeles de redes sociales) para medir el uso del sitio y la efectividad de nuestras campañas. Esta información se trata de forma agregada. Puedes deshabilitar las cookies desde la configuración de tu navegador; hacerlo no impide el uso del sitio.'
    ]
  },
  {
    title: '6. Derechos ARCO',
    body: [
      'Tienes derecho a conocer qué datos personales tenemos de ti, para qué los utilizamos y las condiciones del uso que les damos (Acceso); solicitar la corrección de tu información si está desactualizada, es inexacta o incompleta (Rectificación); pedir que la eliminemos de nuestros registros cuando consideres que no está siendo utilizada conforme a los principios y deberes previstos en la ley (Cancelación); así como oponerte al uso de tus datos para fines específicos (Oposición).',
      'Para ejercer cualquiera de estos derechos, o para revocar tu consentimiento, envía tu solicitud a ' + EMAIL_SALES + ' indicando tu nombre completo, el derecho que deseas ejercer y un medio para comunicarte la respuesta. Daremos respuesta en los plazos que marca la ley.'
    ]
  },
  {
    title: '7. Cambios al aviso de privacidad',
    body: [
      'El presente aviso puede sufrir modificaciones derivadas de nuevos requerimientos legales, de nuestras propias necesidades o de cambios en nuestro modelo de negocio. Cualquier actualización se publicará en esta misma página, por lo que te sugerimos revisarla periódicamente.'
    ]
  }
]

export default function AvisoDePrivacidadPage() {
  return (
    <>
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 pt-32 pb-16 text-white">
        <div className="container-premium">
          <div className="mx-auto max-w-3xl">
            <Link href="/" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-200 hover:text-white">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Volver al inicio
            </Link>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">Aviso de Privacidad</h1>
            <p className="mt-4 text-lg text-blue-100">
              Cómo tratamos y protegemos los datos que compartes con nosotros.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="container-premium">
          <article className="mx-auto max-w-3xl space-y-10">
            {SECTIONS.map((section) => (
              <section key={section.title}>
                <h2 className="mb-4 text-2xl font-bold text-slate-800">{section.title}</h2>
                {section.body.map((paragraph, i) => (
                  <p key={i} className="mb-4 leading-relaxed text-slate-600">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}

            <section className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <h2 className="mb-4 text-2xl font-bold text-slate-800">Contacto</h2>
              <p className="mb-4 text-slate-600">
                Para cualquier duda sobre este aviso o sobre el tratamiento de tus datos personales:
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href={MAILTO_LINK} className="btn-premium btn-premium-primary">
                  {EMAIL_SALES}
                </a>
                <a href={TEL_LINK} className="btn-premium btn-premium-steel">
                  {PHONE_DISPLAY}
                </a>
              </div>
            </section>
          </article>
        </div>
      </div>
    </>
  )
}
