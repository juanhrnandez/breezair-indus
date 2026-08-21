'use client';

/**
 * Capa mínima de medición de conversiones.
 * No hace nada si no hay GA4 / Meta Pixel cargados: seguro en desarrollo.
 *
 * Eventos que registramos (embudo de leads):
 *   view_lead_form   -> el formulario entró en viewport
 *   start_lead_form  -> el usuario escribió en el primer campo
 *   generate_lead    -> envío exitoso (conversión principal)
 *   contact_click    -> clic en teléfono / WhatsApp / email
 *   calculator_*     -> uso de la calculadora de ahorro
 */

export function track(event, params = {}) {
  if (typeof window === 'undefined') return;

  const payload = { ...params };

  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', event, payload);
    }
    if (typeof window.fbq === 'function') {
      // Meta sólo reconoce un set de eventos estándar; el resto van como custom.
      const standard = { generate_lead: 'Lead', contact_click: 'Contact' };
      if (standard[event]) {
        window.fbq('track', standard[event], payload);
      } else {
        window.fbq('trackCustom', event, payload);
      }
    }
    // dataLayer para GTM (si el cliente lo prefiere sobre gtag directo)
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event, ...payload });
    }
  } catch {
    // Nunca romper la UI por un fallo de tracking.
  }
}

export const trackLead = (source, extra = {}) =>
  track('generate_lead', { lead_source: source, ...extra });

export const trackContactClick = (channel, location) =>
  track('contact_click', { channel, location });
