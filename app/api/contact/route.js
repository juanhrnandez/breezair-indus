import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { 
      name, 
      email, 
      phone, 
      company, 
      sector, 
      inquiryType, 
      projectSize, 
      message 
    } = body;

    // Validaciones básicas
    if (!name || !email || !phone || !company || !inquiryType || !message) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' }, 
        { status: 400 }
      );
    }

    // Mapeo de tipos de consulta
    const inquiryTypeLabels = {
      cotizacion: 'Solicitud de Cotización',
      tecnica: 'Consulta Técnica',
      soporte: 'Soporte Post-Venta',
      distribuidor: 'Ser Distribuidor',
      general: 'Información General'
    };

    const inquiryTypeLabel = inquiryTypeLabels[inquiryType] || inquiryType;

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
                <strong>Empresa:</strong> ${company}
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
${message}
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
                <strong>Origen:</strong> Sitio Web - Formulario de Contacto
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
              <li><strong>Empresa:</strong> ${company}</li>
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
              <a href="tel:+525555555555" class="btn">📞 Llamar: +52 55 5555-5555</a>
              <a href="mailto:ventas@cg.international" class="btn">@ Email: ventas@cg.international</a>
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
              📧 ventas@cg.international | 📞 +52 55 5555-5555<br>
              🌐 <a href="https://breezair-industrial.mx" style="color: #3b82f6;">breezair-industrial.mx</a>
            </p>
          </div>
        </body>
      </html>
    `;

    // Lista de destinatarios internos
    const internalRecipients = [
      'ventas@cg.international',
      'soporte@cg.international',
      'gerencia@cg.international'
    ];

    // Enviar email al equipo interno
    const internalEmail = await resend.emails.send({
      from: 'Breezair Industrial <no-reply@cg.international>',
      to: internalRecipients,
      subject: `🚨 Nueva ${inquiryTypeLabel} - ${company} (${name})`,
      html: internalEmailHtml,
      replyTo: email
    });

    // Enviar email de confirmación al cliente
    const clientEmail = await resend.emails.send({
      from: 'Breezair Industrial México <no-reply@cg.international>',
      to: [email],
      subject: `✓ Consulta Recibida - ${inquiryTypeLabel} | Breezair Industrial`,
      html: clientEmailHtml,
      replyTo: 'ventas@cg.international'
    });

    console.log('Emails enviados:', { 
      internal: internalEmail.data?.id, 
      client: clientEmail.data?.id 
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Consulta enviada exitosamente',
      emailIds: {
        internal: internalEmail.data?.id,
        client: clientEmail.data?.id
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
