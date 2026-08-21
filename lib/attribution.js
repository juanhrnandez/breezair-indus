'use client';

const STORAGE_KEY = 'bz_attr';
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid'];

/**
 * Guarda la primera atribución conocida de la sesión (first-touch) para que el
 * lead que llega al correo diga de dónde vino: Google Ads, orgánico, WhatsApp, etc.
 */
export function captureAttribution() {
  if (typeof window === 'undefined') return;
  try {
    if (sessionStorage.getItem(STORAGE_KEY)) return; // first-touch gana
    const params = new URLSearchParams(window.location.search);
    const data = {};
    UTM_KEYS.forEach((k) => {
      const v = params.get(k);
      if (v) data[k] = v;
    });
    data.referrer = document.referrer || 'directo';
    data.landing_page = window.location.pathname;
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // sessionStorage bloqueado (modo privado): la atribución es opcional.
  }
}

export function getAttribution() {
  if (typeof window === 'undefined') return {};
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    const stored = raw ? JSON.parse(raw) : {};
    return { ...stored, submitted_from: window.location.pathname };
  } catch {
    return {};
  }
}
