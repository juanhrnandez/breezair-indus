import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { EMAIL_SALES, PHONE_DISPLAY, TEL_LINK } from '@/lib/site';

// Configurar Resend solo si hay API key disponible
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      company,
      sector,
      inquiryType = 'cotizacion',
      projectSize,
      message,
      website,        // honeypot: sólo lo llenan los bots
      formName = 'formulario_web',
      attribution = {}
    } = body;

    // Trampa anti-spam: respondemos 200 para que el bot no reintente,
    // pero no enviamos nada.
    if (website) {
      return NextResponse.json({ success: true, message: 'Consulta recibida' });
    }

    // Validación mínima deliberada: cada campo obligatorio extra cuesta leads.
    // Basta con un nombre y una forma de contactar a la persona.
    if (!name || (!email && !phone)) {
      return NextResponse.json(
        { error: 'Necesitamos tu nombre y un teléfono o correo para contactarte' },
        { status: 400 }
      );
    }

    // Mapeo de tipos de consulta
    const inquiryTypeLabels = {
      cotizacion: 'Solicitud de Cotización',
      tecnica: 'Consulta Técnica',
      soporte: 'Soporte Post-Venta',
      distribuidor: 'Ser Distribuidor',
      general: 'Información General',
      informacion: 'Información de Productos',
      visita: 'Visita Técnica',
      demo: 'Demostración de Tecnología'
    };

    const inquiryTypeLabel = inquiryTypeLabels[inquiryType] || inquiryType;
    const companyLabel = company || 'No especificada';
    const messageBody = message || 'El prospecto no dejó mensaje. Solicitud enviada desde un formulario corto.';

    // Trazabilidad de origen: de dónde vino el lead (campaña, buscador, página).
    const attributionRows = Object.entries(attribution)
      .filter(([, v]) => v)
      .map(([k, v]) => `<strong>${k}:</strong> ${v}`)
      .join('<br>');

    // Email para el equipo interno
    const internalEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Nueva Consulta - Breezair Industrial</title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #1e40af, #3b82f6);
              color: white;
              padding: 30px;
              border-radius: 12px 12px 0 0;
              text-align: center;
            }
            .header h1 {
              margin: 0;
              font-size: 24px;
            }
            .content {
              background: #f8fafc;
              padding: 30px;
              border-radius: 0 0 12px 12px;
              border: 1px solid #e2e8f0;
              border-top: none;
            }
            .field-group {
              background: white;
              padding: 20px;
              border-radius: 8px;
              margin-bottom: 20px;
              border-left: 4px solid #3b82f6;
            }
            .field-label {
              font-weight: 600;
              color: #374151;
              margin-bottom: 5px;
            }
            .field-value {
              color: #1f2937;
              margin-bottom: 15px;
            }
            .priority-badge {
              display: inline-block;
              padding: 6px 12px;
              background: #fbbf24;
              color: white;
              border-radius: 20px;
              font-size: 12px;
              font-weight: 600;
              margin-bottom: 20px;
            }
            .urgent { background: #ef4444; }
            .normal { background: #3b82f6; }
            .footer {
              text-align: center;
              margin-top: 30px;
              padding: 20px;
              background: #f1f5f9;
              border-radius: 8px;
              font-size: 14px;
              color: #64748b;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>🏭 Nueva Consulta - Breezair Industrial</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Formulario de contacto del sitio web</p>
          </div>
          
          <div class="content">
            <div class="priority-badge ${inquiryType === 'cotizacion' ? 'urgent' : 'normal'}">
              ${inquiryType === 'cotizacion' ? '🚨 ALTA PRIORIDAD' : '📋 CONSULTA ESTÁNDAR'}
            </div>

            <div class="field-group">
              <div class="field-label">📋 Tipo de Consulta</div>
              <div class="field-value"><strong>${inquiryTypeLabel}</strong></div>
            </div>

            <div class="field-group">
              <div class="field-label">👤 Información del Cliente</div>
              <div class="field-value">
                <strong>Nombre:</strong> ${name}<br>
                <strong>Email:</strong> <a href="mailto:${email}">${email}</a><br>
                <strong>Teléfono:</strong> <a href="tel:${phone}">${phone}</a><br>
                <strong>Empresa:</strong> ${companyLabel}
                ${sector ? `<br><strong>Sector:</strong> ${sector}` : ''}
              </div>
            </div>

            ${projectSize ? `
            <div class="field-group">
              <div class="field-label">📐 Información del Proyecto</div>
              <div class="field-value">
                <strong>Tamaño aproximado:</strong> ${projectSize}
              </div>
            </div>
            ` : ''}

            <div class="field-group">
              <div class="field-label">💬 Mensaje Detallado</div>
              <div class="field-value" style="white-space: pre-wrap; background: #f8fafc; padding: 15px; border-radius: 6px; border: 1px solid #e2e8f0;">
${messageBody}
              </div>
            </div>

            <div class="field-group">
              <div class="field-label">📅 Información de Seguimiento</div>
              <div class="field-value">
                <strong>Fecha:</strong> ${new Date().toLocaleString('es-MX', {
                  timeZone: 'America/Mexico_City',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}<br>
                <strong>Origen:</strong> Sitio Web · ${formName}
                ${attributionRows ? `<br>${attributionRows}` : ''}
              </div>
            </div>
          </div>

          <div class="footer">
            <p><strong>🔔 Acciones Recomendadas:</strong></p>
            <p>
              ${inquiryType === 'cotizacion' ? 
                '• Contactar al cliente en las próximas 4 horas<br>• Preparar propuesta técnica preliminar' : 
                '• Responder en las próximas 24 horas<br>• Proporcionar información técnica detallada'
              }
            </p>
          </div>
        </body>
      </html>
    `;

    // Email de confirmación para el cliente
    const clientEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Consulta Recibida - Breezair Industrial México</title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #1e40af, #3b82f6);
              color: white;
              padding: 30px;
              border-radius: 12px 12px 0 0;
              text-align: center;
            }
            .header h1 {
              margin: 0;
              font-size: 24px;
            }
            .content {
              background: white;
              padding: 30px;
              border-radius: 0 0 12px 12px;
              border: 1px solid #e2e8f0;
              border-top: none;
            }
            .highlight-box {
              background: #f0f9ff;
              border: 1px solid #0ea5e9;
              border-radius: 8px;
              padding: 20px;
              margin: 20px 0;
            }
            .contact-info {
              background: #f8fafc;
              padding: 20px;
              border-radius: 8px;
              margin: 20px 0;
            }
            .btn {
              display: inline-block;
              padding: 12px 24px;
              background: #3b82f6;
              color: white;
              text-decoration: none;
              border-radius: 6px;
              font-weight: 600;
              margin: 10px 10px 10px 0;
            }
            .btn:hover {
              background: #2563eb;
            }
            .footer {
              text-align: center;
              margin-top: 30px;
              padding: 20px;
              background: #f1f5f9;
              border-radius: 8px;
              font-size: 14px;
              color: #64748b;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>✓ ¡Consulta Recibida!</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Gracias por contactar a Breezair Industrial México</p>
          </div>
          
          <div class="content">
            <p>Estimado/a <strong>${name}</strong>,</p>
            
            <p>Hemos recibido tu consulta sobre <strong>${inquiryTypeLabel}</strong> y queremos agradecerte por tu interés en nuestras soluciones de enfriamiento evaporativo industrial.</p>

            <div class="highlight-box">
              <h3 style="margin-top: 0; color: #0ea5e9;">⚡ ¿Qué sigue ahora?</h3>
              <ul style="margin: 0; padding-left: 20px;">
                <li><strong>Análisis especializado:</strong> Nuestro equipo técnico revisará tu consulta detalladamente</li>
                <li><strong>Respuesta personalizada:</strong> Te contactaremos en las próximas 24 horas con información específica</li>
                <li><strong>Propuesta técnica:</strong> ${inquiryType === 'cotizacion' ? 'Preparamos una cotización detallada sin costo' : 'Enviamos documentación técnica especializada'}</li>
              </ul>
            </div>

            <h3>📋 Resumen de tu Consulta:</h3>
            <ul>
              <li><strong>Tipo:</strong> ${inquiryTypeLabel}</li>
              ${company ? `<li><strong>Empresa:</strong> ${company}</li>` : ''}
              ${sector ? `<li><strong>Sector:</strong> ${sector}</li>` : ''}
              ${projectSize ? `<li><strong>Proyecto:</strong> ${projectSize}</li>` : ''}
              <li><strong>Fecha:</strong> ${new Date().toLocaleString('es-MX', {
                timeZone: 'America/Mexico_City',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}</li>
            </ul>

            <div class="contact-info">
              <h3 style="margin-top: 0;">📞 ¿Necesitas Atención Inmediata?</h3>
              <p>Si tu proyecto es urgente, puedes contactarnos directamente:</p>
              <a href="${TEL_LINK}" class="btn">📞 Llamar: ${PHONE_DISPLAY}</a>
              <a href="mailto:${EMAIL_SALES}" class="btn">@ Email: ${EMAIL_SALES}</a>
            </div>

            <h3>🏆 ¿Por qué elegir Breezair Industrial?</h3>
            <ul>
              <li>✓ <strong>25+ años de experiencia</strong> en el mercado mexicano</li>
              <li>✓ <strong>Hasta 87% ahorro energético</strong> comprobado</li>
              <li>✓ <strong>500+ proyectos exitosos</strong> en diversos sectores</li>
              <li>✓ <strong>Soporte técnico especializado</strong> 24/7</li>
              <li>✓ <strong>Garantía extendida</strong> y servicio post-venta</li>
            </ul>

            <p style="margin-top: 30px;">
              <strong>Atentamente,</strong><br>
              Equipo Técnico Comercial<br>
              <strong>CG International - Breezair Industrial México</strong>
            </p>
          </div>

          <div class="footer">
            <p><strong>CG International</strong> | Distribuidores Oficiales Breezair</p>
            <p>
              📧 ${EMAIL_SALES} | 📞 ${PHONE_DISPLAY}<br>
              🌐 <a href="https://www.breezair.com.mx" style="color: #3b82f6;">www.breezair.com.mx</a>
            </p>
          </div>
        </body>
      </html>
    `;

    // Destinatarios internos (configurables sin tocar código)
    const internalRecipients = (process.env.LEAD_RECIPIENTS || EMAIL_SALES)
      .split(',')
      .map((address) => address.trim())
      .filter(Boolean);

    // Verificar si Resend está configurado
    if (!resend) {
      console.log('Resend no configurado - lead registrado en consola:', {
        formName, name, email, phone, company: companyLabel, sector, projectSize, inquiryType, attribution
      });
      return NextResponse.json({ 
        success: true, 
        message: 'Consulta recibida (modo desarrollo)',
        note: 'API de email no configurada'
      });
    }

    // 1) Aviso al equipo comercial: es lo único que NO se puede perder.
    const internalEmail = await resend.emails.send({
      from: 'Breezair Industrial <no-reply@cg.international>',
      to: internalRecipients,
      subject: `🚨 Nueva ${inquiryTypeLabel} - ${companyLabel} (${name})`,
      html: internalEmailHtml,
      ...(email ? { replyTo: email } : {})
    });

    if (internalEmail.error) {
      // El lead existe aunque falle el correo: queda en logs para rescatarlo.
      console.error('LEAD SIN NOTIFICAR', { name, email, phone, companyLabel, projectSize, messageBody });
      throw new Error(internalEmail.error.message || 'No se pudo notificar al equipo');
    }

    // 2) Confirmación al prospecto: mejora la experiencia, pero su fallo
    //    nunca debe hacer que el usuario vea un error y vuelva a enviar.
    let clientEmailId = null;
    if (email) {
      try {
        const clientEmail = await resend.emails.send({
          from: 'Breezair Industrial México <no-reply@cg.international>',
          to: [email],
          subject: `✓ Consulta Recibida - ${inquiryTypeLabel} | Breezair Industrial`,
          html: clientEmailHtml,
          replyTo: EMAIL_SALES
        });
        clientEmailId = clientEmail.data?.id ?? null;
      } catch (clientError) {
        console.error('No se pudo enviar la confirmación al cliente:', clientError);
      }
    }

    console.log('Lead recibido:', {
      formName,
      internal: internalEmail.data?.id,
      client: clientEmailId
    });

    return NextResponse.json({
      success: true,
      message: 'Consulta enviada exitosamente',
      emailIds: {
        internal: internalEmail.data?.id,
        client: clientEmailId
      }
    });

  } catch (error) {
    console.error('Error enviando emails:', error);
    
    return NextResponse.json(
      { 
        error: 'Error interno del servidor',
        details: error.message
      }, 
      { status: 500 }
    );
  }
}
