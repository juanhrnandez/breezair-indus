'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactForm() {
  const [form, setForm] = useState({
    nombre: '',
    empresa: '',
    telefono: '',
    email: '',
    mensaje: '',
    tipoConsulta: 'cotizacion',
    industria: '',
    area: ''
  });
  
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState(null);
  const formRef = useRef(null);

  const tiposConsulta = [
    { value: 'cotizacion', label: '📊 Solicitar cotización personalizada', desc: 'Cotización detallada para tu proyecto' },
    { value: 'soporte', label: '🔧 Soporte técnico especializado', desc: 'Asistencia técnica profesional' },
    { value: 'informacion', label: '📋 Información de productos', desc: 'Especificaciones y catálogos' },
    { value: 'visita', label: '🏭 Agendar visita técnica', desc: 'Evaluación in-situ por ingenieros' },
    { value: 'demo', label: '🎯 Demostración de tecnología', desc: 'Ver equipos en funcionamiento' }
  ];

  const industrias = [
    'Manufactura Automotriz', 'Textil Industrial', 'Procesamiento de Alimentos',
    'Logística y Distribución', 'Química y Farmacéutica', 'Metalúrgica',
    'Electrónica', 'Papel y Celulosa', 'Minería', 'Otra industria'
  ];

  // Validaciones premium en tiempo real
  const validateField = (name, value) => {
    const newErrors = { ...errors };
    
    switch (name) {
      case 'email':
        if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          newErrors.email = 'Formato de email inválido';
        } else {
          delete newErrors.email;
        }
        break;
      case 'telefono':
        if (value && !/^[\d\s\-\+\(\)]+$/.test(value)) {
          newErrors.telefono = 'Formato de teléfono inválido';
        } else {
          delete newErrors.telefono;
        }
        break;
      case 'nombre':
        if (!value.trim()) {
          newErrors.nombre = 'El nombre es requerido';
        } else if (value.length < 2) {
          newErrors.nombre = 'Nombre muy corto';
        } else {
          delete newErrors.nombre;
        }
        break;
      case 'empresa':
        if (value && value.length < 2) {
          newErrors.empresa = 'Nombre de empresa muy corto';
        } else {
          delete newErrors.empresa;
        }
        break;
      case 'mensaje':
        if (!value.trim()) {
          newErrors.mensaje = 'El mensaje es requerido';
        } else if (value.length < 20) {
          newErrors.mensaje = 'El mensaje debe ser más descriptivo (mín. 20 caracteres)';
        } else if (value.length > 1000) {
          newErrors.mensaje = 'El mensaje es demasiado largo (máx. 1000 caracteres)';
        } else {
          delete newErrors.mensaje;
        }
        break;
    }
    
    setErrors(newErrors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    validateField(name, value);
  };

  const isValid = () => {
    return form.nombre && form.email && form.mensaje && 
           Object.keys(errors).length === 0;
  };

  async function submit(e) {
    e.preventDefault();
    
    if (!isValid()) {
      // Highlight errors with animation
      formRef.current?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    setStatus('loading');
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          timestamp: new Date().toISOString(),
          source: 'website_premium_form'
        })
      });
      
      const data = await res.json();
      
      if (data.success) {
        setStatus('success');
        setForm({
          nombre: '',
          empresa: '',
          telefono: '',
          email: '',
          mensaje: '',
          tipoConsulta: 'cotizacion',
          industria: '',
          area: ''
        });
        setErrors({});
        setFocusedField(null);
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  }

  const inputVariants = {
    focused: { 
      scale: 1.02, 
      boxShadow: '0 0 0 3px rgba(0, 76, 151, 0.1)',
      transition: { type: "spring", stiffness: 300 }
    },
    unfocused: { 
      scale: 1, 
      boxShadow: '0 0 0 0px rgba(0, 76, 151, 0)',
      transition: { type: "spring", stiffness: 300 }
    }
  };

  return (
    <motion.div
      ref={formRef}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="card-premium relative overflow-hidden"
    >
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(45deg, var(--color-primary) 1px, transparent 1px),
              linear-gradient(-45deg, var(--color-primary) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        ></div>
      </div>

      <div className="relative z-10 p-10">
        {/* Premium Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 glass-effect rounded-full px-6 py-3 mb-6 border border-black/5">
            <div className="w-3 h-3 bg-gradient-primary rounded-full pulse-glow"></div>
            <span className="text-sm font-semibold text-steel tracking-wide">CONTACTO ESPECIALIZADO</span>
          </div>
          
          <h3 className="heading-premium-3 mb-4">
            Solicita tu Consultoría Premium
          </h3>
          
          <p className="text-premium-body text-center max-w-2xl mx-auto">
            Conecta con nuestros ingenieros especializados para una solución personalizada 
            para tu aplicación industrial específica.
          </p>
        </div>

        <form onSubmit={submit} className="space-y-8">
          {/* Tipo de Consulta Premium */}
          <div className="space-y-4">
            <label className="block text-sm font-semibold text-steel-dark tracking-wide">
              TIPO DE CONSULTA ESPECIALIZADA
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tiposConsulta.map((tipo) => (
                <motion.label
                  key={tipo.value}
                  className={`relative cursor-pointer group ${
                    form.tipoConsulta === tipo.value 
                      ? 'bg-gradient-primary text-white' 
                      : 'bg-gray-50 hover:bg-gray-100'
                  } rounded-xl p-4 border-2 transition-all duration-300 ${
                    form.tipoConsulta === tipo.value 
                      ? 'border-primary shadow-industrial-md' 
                      : 'border-gray-200 hover:border-primary/30'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <input
                    type="radio"
                    name="tipoConsulta"
                    value={tipo.value}
                    checked={form.tipoConsulta === tipo.value}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <div className="text-sm font-semibold mb-1">{tipo.label}</div>
                  <div className={`text-xs ${
                    form.tipoConsulta === tipo.value ? 'text-white/80' : 'text-gray-500'
                  }`}>
                    {tipo.desc}
                  </div>
                </motion.label>
              ))}
            </div>
          </div>

          {/* Información Personal Premium */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-steel-dark tracking-wide">
                NOMBRE COMPLETO *
              </label>
              <motion.input
                variants={inputVariants}
                animate={focusedField === 'nombre' ? 'focused' : 'unfocused'}
                name="nombre"
                placeholder="Nombre y apellidos"
                value={form.nombre}
                onChange={handleChange}
                onFocus={() => setFocusedField('nombre')}
                onBlur={() => setFocusedField(null)}
                className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 bg-white ${
                  errors.nombre 
                    ? 'border-red-400 focus:border-red-500' 
                    : focusedField === 'nombre'
                      ? 'border-primary'
                      : 'border-gray-200 hover:border-gray-300 focus:border-primary'
                } focus:outline-none font-medium`}
              />
              <AnimatePresence>
                {errors.nombre && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-500 text-sm flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2L13.09,8.26L22,9L17.22,13.78L18.18,22L12,18.27L5.82,22L6.78,13.78L2,9L10.91,8.26L12,2Z"/>
                    </svg>
                    {errors.nombre}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-steel-dark tracking-wide">
                EMPRESA / ORGANIZACIÓN
              </label>
              <motion.input
                variants={inputVariants}
                animate={focusedField === 'empresa' ? 'focused' : 'unfocused'}
                name="empresa"
                placeholder="Nombre de la empresa"
                value={form.empresa}
                onChange={handleChange}
                onFocus={() => setFocusedField('empresa')}
                onBlur={() => setFocusedField(null)}
                className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 bg-white ${
                  errors.empresa 
                    ? 'border-red-400 focus:border-red-500' 
                    : focusedField === 'empresa'
                      ? 'border-primary'
                      : 'border-gray-200 hover:border-gray-300 focus:border-primary'
                } focus:outline-none font-medium`}
              />
            </div>
          </div>

          {/* Contacto Premium */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-steel-dark tracking-wide">
                TELÉFONO DIRECTO
              </label>
              <motion.input
                variants={inputVariants}
                animate={focusedField === 'telefono' ? 'focused' : 'unfocused'}
                name="telefono"
                placeholder="+52 55 1234 5678"
                value={form.telefono}
                onChange={handleChange}
                onFocus={() => setFocusedField('telefono')}
                onBlur={() => setFocusedField(null)}
                className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 bg-white ${
                  errors.telefono 
                    ? 'border-red-400 focus:border-red-500' 
                    : focusedField === 'telefono'
                      ? 'border-primary'
                      : 'border-gray-200 hover:border-gray-300 focus:border-primary'
                } focus:outline-none font-medium`}
              />
              <AnimatePresence>
                {errors.telefono && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-500 text-sm"
                  >
                    {errors.telefono}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-steel-dark tracking-wide">
                EMAIL CORPORATIVO *
              </label>
              <motion.input
                variants={inputVariants}
                animate={focusedField === 'email' ? 'focused' : 'unfocused'}
                name="email"
                type="email"
                placeholder="nombre@empresa.com"
                value={form.email}
                onChange={handleChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 bg-white ${
                  errors.email 
                    ? 'border-red-400 focus:border-red-500' 
                    : focusedField === 'email'
                      ? 'border-primary'
                      : 'border-gray-200 hover:border-gray-300 focus:border-primary'
                } focus:outline-none font-medium`}
              />
              <AnimatePresence>
                {errors.email && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-500 text-sm"
                  >
                    {errors.email}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Industria y Área */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-steel-dark tracking-wide">
                SECTOR INDUSTRIAL
              </label>
              <select
                name="industria"
                value={form.industria}
                onChange={handleChange}
                className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 hover:border-gray-300 focus:border-primary focus:outline-none bg-white font-medium transition-all duration-300"
              >
                <option value="">Selecciona tu industria</option>
                {industrias.map((industria) => (
                  <option key={industria} value={industria}>
                    {industria}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-steel-dark tracking-wide">
                ÁREA ESTIMADA (m²)
              </label>
              <motion.input
                variants={inputVariants}
                animate={focusedField === 'area' ? 'focused' : 'unfocused'}
                name="area"
                placeholder="ej. 2,500 m²"
                value={form.area}
                onChange={handleChange}
                onFocus={() => setFocusedField('area')}
                onBlur={() => setFocusedField(null)}
                className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 bg-white ${
                  focusedField === 'area'
                    ? 'border-primary'
                    : 'border-gray-200 hover:border-gray-300 focus:border-primary'
                } focus:outline-none font-medium`}
              />
            </div>
          </div>

          {/* Mensaje Premium */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-steel-dark tracking-wide">
              DESCRIPCIÓN DEL PROYECTO *
            </label>
            <motion.textarea
              variants={inputVariants}
              animate={focusedField === 'mensaje' ? 'focused' : 'unfocused'}
              name="mensaje"
              placeholder="Describe detalladamente tu proyecto, necesidades específicas, condiciones actuales de climatización, objetivos de eficiencia energética, y cualquier requisito especial..."
              value={form.mensaje}
              onChange={handleChange}
              onFocus={() => setFocusedField('mensaje')}
              onBlur={() => setFocusedField(null)}
              rows={6}
              className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 bg-white resize-none ${
                errors.mensaje 
                  ? 'border-red-400 focus:border-red-500' 
                  : focusedField === 'mensaje'
                    ? 'border-primary'
                    : 'border-gray-200 hover:border-gray-300 focus:border-primary'
              } focus:outline-none font-medium`}
            />
            <div className="flex justify-between items-center">
              <AnimatePresence>
                {errors.mensaje && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-500 text-sm"
                  >
                    {errors.mensaje}
                  </motion.div>
                )}
              </AnimatePresence>
              <div className={`text-xs font-medium ${
                form.mensaje.length > 800 ? 'text-red-500' : 'text-gray-400'
              }`}>
                {form.mensaje.length}/1000 caracteres
              </div>
            </div>
          </div>

          {/* Submit Button Premium */}
          <div className="pt-6">
            <motion.button
              type="submit"
              disabled={!isValid() || status === 'loading'}
              className={`btn-premium btn-premium-primary btn-premium-lg w-full ${
                !isValid() || status === 'loading' 
                  ? 'opacity-50 cursor-not-allowed' 
                  : ''
              }`}
              whileHover={isValid() && status !== 'loading' ? { scale: 1.02 } : {}}
              whileTap={isValid() && status !== 'loading' ? { scale: 0.98 } : {}}
            >
              {status === 'loading' ? (
                <>
                  <svg className="animate-spin w-6 h-6 mr-3" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25"></circle>
                    <path fill="currentColor" className="opacity-75" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Procesando Solicitud...
                </>
              ) : (
                <>
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Enviar Solicitud de Consultoría
                </>
              )}
            </motion.button>
          </div>

          {/* Status Messages Premium */}
          <AnimatePresence>
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                className="card-premium p-6 bg-linear-to-r from-green-50 to-emerald-50 border-l-4 border-green-500"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.5,8L11,13.5L7.5,10L6,11.5L11,16.5Z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-green-800 font-bold text-lg mb-2">
                      ¡Solicitud Enviada Exitosamente!
                    </div>
                    <div className="text-green-700 mb-3">
                      Hemos recibido tu solicitud de consultoría. Un ingeniero especializado se contactará contigo dentro de las próximas 2 horas hábiles.
                    </div>
                    <div className="text-green-600 text-sm">
                      📧 Recibirás una confirmación por email • ⏱️ Tiempo de respuesta: &lt;2h • 🔒 Información confidencial
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                className="card-premium p-6 bg-linear-to-r from-red-50 to-pink-50 border-l-4 border-red-500"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,7A1,1 0 0,0 11,8V12A1,1 0 0,0 12,13A1,1 0 0,0 13,12V8A1,1 0 0,0 12,7M12,15A1,1 0 0,0 11,16A1,1 0 0,0 12,17A1,1 0 0,0 13,16A1,1 0 0,0 12,15Z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-red-800 font-bold text-lg mb-2">
                      Error en el Envío
                    </div>
                    <div className="text-red-700 mb-3">
                      No pudimos procesar tu solicitud en este momento. Por favor, inténtalo nuevamente o contacta directamente a nuestro equipo.
                    </div>
                    <div className="text-red-600 text-sm">
                      📞 +52 55 1234 5678 • 📧 contacto@cginter.mx • 💬 Chat en línea disponible
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>

      {/* Shimmer Effect */}
      <div className="shimmer opacity-0 group-hover:opacity-100"></div>
    </motion.div>
  );
}
