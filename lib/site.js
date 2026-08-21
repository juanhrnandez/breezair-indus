/**
 * Fuente única de verdad para datos de contacto y enlaces de conversión.
 * Cambiar aquí actualiza CTAs de teléfono / WhatsApp / email en todo el sitio.
 */

// Número oficial: (55) 1228-1088  ->  +52 55 1228 1088
export const PHONE_DISPLAY = '(55) 1228-1088';
export const PHONE_E164 = '+525512281088';
export const WHATSAPP_NUMBER = '525512281088'; // sin '+' para api.whatsapp.com
// Formato con guiones que espera schema.org en los datos estructurados
export const PHONE_SCHEMA = '+52-55-1228-1088';

export const EMAIL_SALES = 'jorge@cg.international';

export const BUSINESS_HOURS = 'Lun a Vie 8:00–18:00 · Sáb 9:00–14:00';
export const RESPONSE_PROMISE = 'Respuesta en menos de 24 h hábiles';

/**
 * Construye un enlace de WhatsApp con mensaje prellenado.
 * @param {string} message texto plano (se codifica automáticamente)
 */
export function whatsappLink(message = 'Hola, estoy en breezair.com.mx y me interesa cotizar un sistema de enfriamiento evaporativo.') {
  const params = new URLSearchParams({
    phone: WHATSAPP_NUMBER,
    text: message,
    type: 'phone_number',
    app_absent: '0',
  });
  return `https://api.whatsapp.com/send/?${params.toString()}`;
}

export const TEL_LINK = `tel:${PHONE_E164}`;
export const MAILTO_LINK = `mailto:${EMAIL_SALES}`;

/** Micro-copy de reducción de riesgo que acompaña a los CTA principales. */
export const RISK_REVERSAL = [
  'Cotización sin costo',
  'Sin compromiso de compra',
  'Ingeniero especializado asignado',
];
