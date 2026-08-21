'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import QuickQuoteForm from './QuickQuoteForm';
import { track } from '@/lib/analytics';

/**
 * Calculadora de ahorro energético.
 *
 * Es el mecanismo de captación de alta intención del sitio: en lugar de pedir
 * datos antes de dar valor, primero entrega un número personalizado y después
 * ofrece la cotización con el cálculo ya adjunto.
 *
 * Modelo (documentado a propósito, para que ingeniería pueda ajustarlo):
 *   Carga térmica típica de nave industrial ....... 0.12 kW/m²
 *   Aire acondicionado convencional (COP 3.0) ..... 0.040 kW eléctricos/m²
 *   Ventilación forzada / extractores ............. 0.012 kW/m²
 *   Enfriamiento evaporativo Breezair ............. 0.006 kW/m²
 *   Factor de emisión red eléctrica (CFE) ......... 0.435 kg CO₂/kWh
 */
const LOAD_KW_PER_M2 = {
  aire_acondicionado: 0.04,
  ventilacion: 0.012,
  ninguno: 0.04, // se compara contra el AC que necesitaría instalar
};
const BREEZAIR_KW_PER_M2 = 0.006;
const CO2_KG_PER_KWH = 0.435;

const SYSTEMS = [
  { value: 'aire_acondicionado', label: 'Aire acondicionado', hint: 'Equipos de refrigeración mecánica' },
  { value: 'ventilacion', label: 'Ventilación / extractores', hint: 'Sólo mueven aire, no enfrían' },
  { value: 'ninguno', label: 'Nada por ahora', hint: 'Comparamos contra instalar AC' },
];

const mxn = (n) =>
  new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 }).format(n);
const num = (n) => new Intl.NumberFormat('es-MX', { maximumFractionDigits: 0 }).format(n);

export default function SavingsCalculator() {
  const [area, setArea] = useState(2000);
  const [hours, setHours] = useState(10);
  const [days, setDays] = useState(6);
  const [tariff, setTariff] = useState(3.0);
  const [system, setSystem] = useState('aire_acondicionado');
  const [showForm, setShowForm] = useState(false);

  const result = useMemo(() => {
    const annualHours = hours * days * 52;
    const currentKwh = LOAD_KW_PER_M2[system] * area * annualHours;
    const breezairKwh = BREEZAIR_KW_PER_M2 * area * annualHours;
    const savedKwh = Math.max(currentKwh - breezairKwh, 0);

    return {
      annualHours,
      currentKwh,
      breezairKwh,
      savedKwh,
      currentCost: currentKwh * tariff,
      breezairCost: breezairKwh * tariff,
      savedCost: savedKwh * tariff,
      percent: currentKwh > 0 ? Math.round((savedKwh / currentKwh) * 100) : 0,
      co2Tons: (savedKwh * CO2_KG_PER_KWH) / 1000,
    };
  }, [area, hours, days, tariff, system]);

  const summary =
    `Cálculo de ahorro solicitado desde la calculadora del sitio.\n` +
    `• Superficie: ${num(area)} m²\n` +
    `• Operación: ${hours} h/día, ${days} días/semana\n` +
    `• Sistema actual: ${SYSTEMS.find((s) => s.value === system)?.label}\n` +
    `• Tarifa eléctrica: ${tariff} MXN/kWh\n` +
    `• Ahorro anual estimado: ${mxn(result.savedCost)} (${num(result.savedKwh)} kWh, ${result.percent}%)`;

  const openForm = () => {
    setShowForm(true);
    track('calculator_lead_intent', { area, system, saving_mxn: Math.round(result.savedCost) });
  };

  const sizeBucket =
    area < 500 ? 'Menos de 500 m²' : area <= 2000 ? '500 a 2,000 m²' : area <= 5000 ? '2,000 a 5,000 m²' : 'Más de 5,000 m²';

  return (
    <section id="calculadora" className="section-premium relative overflow-hidden bg-slate-900">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="container-premium relative z-10">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 backdrop-blur">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 pulse-glow" />
            <span className="text-sm font-semibold tracking-wide text-white">CALCULADORA DE AHORRO</span>
          </div>
          <h2 className="mb-5 text-4xl font-bold leading-tight text-white md:text-5xl">
            ¿Cuánto estás pagando de más
            <span className="block bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              por climatizar tu planta?
            </span>
          </h2>
          <p className="text-lg leading-relaxed text-slate-300">
            Ajusta los datos de tu operación y obtén al instante una estimación de tu ahorro anual
            con enfriamiento evaporativo Breezair. Sin registro previo.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Controles */}
          <div className="lg:col-span-3 rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl md:p-8">
            <div className="space-y-8">
              <div>
                <div className="mb-3 flex items-end justify-between">
                  <label htmlFor="calc-area" className="text-sm font-bold tracking-wide text-white/80">
                    SUPERFICIE A CLIMATIZAR
                  </label>
                  <span className="text-2xl font-bold text-cyan-300">{num(area)} m²</span>
                </div>
                <input
                  id="calc-area"
                  type="range"
                  min={200}
                  max={20000}
                  step={100}
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-full accent-cyan-400"
                />
                <div className="mt-1 flex justify-between text-xs text-white/40">
                  <span>200 m²</span>
                  <span>20,000 m²</span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <div className="mb-3 flex items-end justify-between">
                    <label htmlFor="calc-hours" className="text-sm font-bold tracking-wide text-white/80">
                      HORAS / DÍA
                    </label>
                    <span className="text-xl font-bold text-cyan-300">{hours} h</span>
                  </div>
                  <input
                    id="calc-hours"
                    type="range"
                    min={4}
                    max={24}
                    step={1}
                    value={hours}
                    onChange={(e) => setHours(Number(e.target.value))}
                    className="w-full accent-cyan-400"
                  />
                </div>

                <div>
                  <div className="mb-3 flex items-end justify-between">
                    <label htmlFor="calc-days" className="text-sm font-bold tracking-wide text-white/80">
                      DÍAS / SEMANA
                    </label>
                    <span className="text-xl font-bold text-cyan-300">{days}</span>
                  </div>
                  <input
                    id="calc-days"
                    type="range"
                    min={1}
                    max={7}
                    step={1}
                    value={days}
                    onChange={(e) => setDays(Number(e.target.value))}
                    className="w-full accent-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label className="mb-3 block text-sm font-bold tracking-wide text-white/80">
                  ¿QUÉ USAS HOY PARA ENFRIAR?
                </label>
                <div className="grid gap-3 sm:grid-cols-3">
                  {SYSTEMS.map((s) => (
                    <button
                      key={s.value}
                      type="button"
                      onClick={() => setSystem(s.value)}
                      className={`rounded-xl border-2 p-4 text-left transition-all duration-200 ${
                        system === s.value
                          ? 'border-cyan-400 bg-cyan-400/15'
                          : 'border-white/10 bg-white/5 hover:border-white/25'
                      }`}
                    >
                      <span className="block text-sm font-bold text-white">{s.label}</span>
                      <span className="mt-1 block text-xs leading-snug text-white/50">{s.hint}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="calc-tariff" className="mb-2 block text-sm font-bold tracking-wide text-white/80">
                  TARIFA ELÉCTRICA (MXN / kWh)
                </label>
                <input
                  id="calc-tariff"
                  type="number"
                  min={0.5}
                  max={12}
                  step={0.1}
                  value={tariff}
                  onChange={(e) => setTariff(Math.max(0.5, Number(e.target.value) || 0.5))}
                  className="w-full rounded-xl border-2 border-white/10 bg-white/5 px-4 py-3 font-semibold text-white focus:border-cyan-400 focus:outline-none"
                />
                <p className="mt-2 text-xs text-white/40">
                  Ajústala con el dato de tu recibo CFE para un cálculo más preciso.
                </p>
              </div>
            </div>
          </div>

          {/* Resultados */}
          <div className="lg:col-span-2">
            <div className="sticky top-28 rounded-3xl border border-cyan-400/25 bg-gradient-to-b from-blue-600/25 to-slate-900/60 p-6 backdrop-blur-xl md:p-8">
              <p className="mb-2 text-sm font-bold tracking-wide text-cyan-300">AHORRO ANUAL ESTIMADO</p>
              <motion.div
                key={Math.round(result.savedCost)}
                initial={{ opacity: 0.4, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-1 text-4xl font-bold leading-tight text-white md:text-5xl"
              >
                {mxn(result.savedCost)}
              </motion.div>
              <p className="mb-6 text-sm text-white/60">
                {result.percent}% menos energía · {num(result.savedKwh)} kWh al año
              </p>

              <dl className="mb-6 space-y-3 border-t border-white/10 pt-5 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-white/60">Costo actual estimado</dt>
                  <dd className="font-bold text-white">{mxn(result.currentCost)}</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-white/60">Costo con Breezair</dt>
                  <dd className="font-bold text-cyan-300">{mxn(result.breezairCost)}</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-white/60">CO₂ evitado</dt>
                  <dd className="font-bold text-white">{num(result.co2Tons)} ton / año</dd>
                </div>
              </dl>

              <button onClick={openForm} className="btn-premium btn-premium-primary btn-premium-lg w-full">
                Quiero mi cotización con este cálculo
              </button>

              <p className="mt-4 text-center text-[11px] leading-relaxed text-white/40">
                Estimación orientativa basada en cargas térmicas típicas de naves industriales.
                El cálculo definitivo lo entrega un ingeniero tras evaluar tu instalación.
              </p>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="mx-auto mt-10 max-w-3xl">
                <QuickQuoteForm
                  context="calculadora"
                  title="Recibe el análisis detallado de tu ahorro"
                  subtitle="Adjuntamos tu cálculo a la solicitud para que la propuesta llegue con números reales de tu planta."
                  prefill={{ projectSize: sizeBucket, message: summary }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
