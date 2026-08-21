'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { getAttribution } from '@/lib/attribution';
import { track, trackLead } from '@/lib/analytics';
import Link from 'next/link';
import { PHONE_DISPLAY, TEL_LINK, RESPONSE_PROMISE } from '@/lib/site';

const AREA_OPTIONS = [
  { value: 'Menos de 500 m²', label: '< 500 m²' },
  { value: '500 a 2,000 m²', label: '500 – 2,000 m²' },
  { value: '2,000 a 5,000 m²', label: '2,000 – 5,000 m²' },
  { value: 'Más de 5,000 m²', label: '+ 5,000 m²' },
];

const SPACE_OPTIONS = [
  'Nave industrial / manufactura',
  'Centro logístico o almacén',
  'Planta de alimentos o bebidas',
  'Taller o área de producción',
  'Espacio comercial o deportivo',
  'Otro',
];

/**
 * Formulario de captación en 2 pasos.
 *
 * Paso 1 pregunta por el proyecto (sin datos personales): baja la barrera de
 * entrada y genera micro-compromiso. Paso 2 pide sólo los datos que ventas
 * necesita para llamar. Menos campos = más leads.
 */
export default function QuickQuoteForm({
  context = 'general',
  title = 'Cotiza tu proyecto en 30 segundos',
  subtitle = 'Contesta 2 preguntas y un ingeniero te envía una propuesta a la medida.',
  prefill = {},
  compact = false,
  anchorId,
}) {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const startedRef = useRef(false);
  const rootRef = useRef(null);

  const [data, setData] = useState({
    projectSize: '',
    sector: '',
    name: '',
    company: '',
    phone: '',
    email: '',
    message: '',
    consent: false,
    website: '', // honeypot anti-spam
    ...prefill,
  });

  useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          track('view_lead_form', { form: context });
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [context]);

  const markStarted = () => {
    if (startedRef.current) return;
    startedRef.current = true;
    track('start_lead_form', { form: context });
  };

  const set = (key, value) => {
    markStarted();
    setData((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const goToStep2 = () => {
    if (!data.projectSize) {
      setErrors({ projectSize: 'Elige el tamaño aproximado del espacio' });
      return;
    }
    setStep(2);
    track('lead_form_step', { form: context, step: 2 });
  };

  const validate = () => {
    const next = {};
    if (!data.name.trim() || data.name.trim().length < 3) next.name = 'Escribe tu nombre';
    if (!data.phone.trim() || data.phone.replace(/\D/g, '').length < 10) {
      next.phone = 'Un teléfono a 10 dígitos para poder llamarte';
    }
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      next.email = 'Revisa el formato del correo';
    }
    if (!data.consent) next.consent = 'Necesitamos tu autorización para contactarte';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          company: data.company,
          sector: data.sector,
          inquiryType: 'cotizacion',
          projectSize: data.projectSize,
          message:
            data.message ||
            `Solicitud rápida desde ${context}. Espacio: ${data.projectSize}. Tipo: ${data.sector || 'no especificado'}.`,
          website: data.website,
          formName: `quick_quote_${context}`,
          attribution: getAttribution(),
        }),
      });

      if (!res.ok) throw new Error('request_failed');
      setStatus('success');
      trackLead(`quick_quote_${context}`, { project_size: data.projectSize, sector: data.sector });
    } catch {
      setStatus('error');
    }
  }

  const inputClass = (field) =>
    `w-full px-4 py-3.5 rounded-xl border-2 bg-white font-medium transition-colors duration-200 focus:outline-none ${
      errors[field]
        ? 'border-red-400 focus:border-red-500'
        : 'border-gray-200 hover:border-gray-300 focus:border-blue-600'
    }`;

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`card-premium text-center ${compact ? 'p-8' : 'p-10'}`}
      >
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500">
          <svg className="h-9 w-9 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mb-3 text-2xl font-bold text-slate-800">¡Solicitud recibida!</h3>
        <p className="mx-auto mb-6 max-w-md text-slate-600">
          Un ingeniero especializado revisará tu proyecto de <strong>{data.projectSize}</strong> y te
          contactará. {RESPONSE_PROMISE}.
        </p>
        <a href={TEL_LINK} className="btn-premium btn-premium-primary">
          ¿Es urgente? Llama al {PHONE_DISPLAY}
        </a>
      </motion.div>
    );
  }

  return (
    <div ref={rootRef} id={anchorId} className={`card-premium ${compact ? 'p-6 md:p-8' : 'p-8 md:p-10'}`}>
      <div className="mb-6">
        <div className="mb-4 flex items-center gap-2">
          {[1, 2].map((n) => (
            <div
              key={n}
              className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
                step >= n ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            />
          ))}
          <span className="ml-2 text-xs font-semibold tracking-wide text-slate-400">
            PASO {step} DE 2
          </span>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-slate-800 leading-tight">{title}</h3>
        <p className="mt-2 text-slate-600">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        {/* Honeypot: invisible para humanos, irresistible para bots */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          value={data.website}
          onChange={(e) => setData((p) => ({ ...p, website: e.target.value }))}
          className="absolute left-[-9999px] h-0 w-0 opacity-0"
        />

        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div>
                <label className="mb-3 block text-sm font-bold tracking-wide text-slate-700">
                  ¿CUÁNTOS M² NECESITAS CLIMATIZAR?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {AREA_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => set('projectSize', opt.value)}
                      className={`rounded-xl border-2 px-4 py-4 text-sm font-bold transition-all duration-200 ${
                        data.projectSize === opt.value
                          ? 'border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                          : 'border-gray-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
                {errors.projectSize && (
                  <p className="mt-2 text-sm font-medium text-red-500">{errors.projectSize}</p>
                )}
              </div>

              <div>
                <label htmlFor={`sector-${context}`} className="mb-3 block text-sm font-bold tracking-wide text-slate-700">
                  ¿QUÉ TIPO DE ESPACIO ES? <span className="font-medium text-slate-400">(opcional)</span>
                </label>
                <select
                  id={`sector-${context}`}
                  value={data.sector}
                  onChange={(e) => set('sector', e.target.value)}
                  className={inputClass('sector')}
                >
                  <option value="">Selecciona una opción</option>
                  {SPACE_OPTIONS.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <button type="button" onClick={goToStep2} className="btn-premium btn-premium-primary btn-premium-lg w-full">
                Continuar
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 12 }}
              transition={{ duration: 0.25 }}
              className="space-y-5"
            >
              <div className="flex items-center justify-between rounded-xl bg-blue-50 px-4 py-3">
                <span className="text-sm font-semibold text-blue-900">
                  Proyecto: {data.projectSize}
                  {data.sector ? ` · ${data.sector}` : ''}
                </span>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-sm font-semibold text-blue-600 underline underline-offset-2"
                >
                  Cambiar
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor={`name-${context}`} className="mb-2 block text-sm font-bold tracking-wide text-slate-700">
                    NOMBRE *
                  </label>
                  <input
                    id={`name-${context}`}
                    name="name"
                    autoComplete="name"
                    placeholder="Nombre y apellido"
                    value={data.name}
                    onChange={(e) => set('name', e.target.value)}
                    className={inputClass('name')}
                  />
                  {errors.name && <p className="mt-1.5 text-sm font-medium text-red-500">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor={`company-${context}`} className="mb-2 block text-sm font-bold tracking-wide text-slate-700">
                    EMPRESA
                  </label>
                  <input
                    id={`company-${context}`}
                    name="company"
                    autoComplete="organization"
                    placeholder="Nombre de tu empresa"
                    value={data.company}
                    onChange={(e) => set('company', e.target.value)}
                    className={inputClass('company')}
                  />
                </div>

                <div>
                  <label htmlFor={`phone-${context}`} className="mb-2 block text-sm font-bold tracking-wide text-slate-700">
                    TELÉFONO / WHATSAPP *
                  </label>
                  <input
                    id={`phone-${context}`}
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="55 1234 5678"
                    value={data.phone}
                    onChange={(e) => set('phone', e.target.value)}
                    className={inputClass('phone')}
                  />
                  {errors.phone && <p className="mt-1.5 text-sm font-medium text-red-500">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor={`email-${context}`} className="mb-2 block text-sm font-bold tracking-wide text-slate-700">
                    CORREO <span className="font-medium text-slate-400">(opcional)</span>
                  </label>
                  <input
                    id={`email-${context}`}
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="nombre@empresa.com"
                    value={data.email}
                    onChange={(e) => set('email', e.target.value)}
                    className={inputClass('email')}
                  />
                  {errors.email && <p className="mt-1.5 text-sm font-medium text-red-500">{errors.email}</p>}
                </div>
              </div>

              <label className="flex items-start gap-3 text-sm text-slate-600">
                <input
                  type="checkbox"
                  checked={data.consent}
                  onChange={(e) => set('consent', e.target.checked)}
                  className="mt-1 h-5 w-5 shrink-0 rounded border-2 border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span>
                  Autorizo que me contacten por teléfono, WhatsApp o correo para atender esta
                  solicitud, conforme al{' '}
                  <Link href="/aviso-de-privacidad" className="font-semibold text-blue-600 underline underline-offset-2">
                    aviso de privacidad
                  </Link>
                  .
                </span>
              </label>
              {errors.consent && <p className="-mt-3 text-sm font-medium text-red-500">{errors.consent}</p>}

              <button
                type="submit"
                disabled={status === 'loading'}
                className={`btn-premium btn-premium-primary btn-premium-lg w-full ${
                  status === 'loading' ? 'cursor-not-allowed opacity-60' : ''
                }`}
              >
                {status === 'loading' ? 'Enviando…' : 'Recibir mi cotización sin costo'}
              </button>

              {status === 'error' && (
                <div className="rounded-xl border-l-4 border-red-500 bg-red-50 p-4 text-sm text-red-700">
                  No pudimos enviar tu solicitud. Escríbenos por WhatsApp o llama al{' '}
                  <a href={TEL_LINK} className="font-bold underline">
                    {PHONE_DISPLAY}
                  </a>
                  .
                </div>
              )}

              <p className="text-center text-xs text-slate-500">
                Sin costo · Sin compromiso · {RESPONSE_PROMISE}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}
