'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const contactInfo = [
  {
    icon: '📍',
    title: 'Oficinas Principales',
    details: [
      'Ciudad de México, México',
      'Cobertura Nacional'
    ]
  },
  {
    icon: '📞',
    title: 'Contacto Directo',
    details: [
      'Ventas: +52 55 5555-5555',
      'Soporte: +52 55 5555-5556'
    ]
  },
  {
    icon: '✉️',
    title: 'Correo Electrónico',
    details: [
      'ventas@cg.international',
      'soporte@cg.international'
    ]
  },
  {
    icon: '⏰',
    title: 'Horario de Atención',
    details: [
      'Lun - Vie: 8:00 AM - 6:00 PM',
      'Sab: 9:00 AM - 2:00 PM'
    ]
  }
];

const inquiryTypes = [
  { value: 'cotizacion', label: 'Solicitud de Cotización', icon: '💰' },
  { value: 'tecnica', label: 'Consulta Técnica', icon: '🔧' },
  { value: 'soporte', label: 'Soporte Post-Venta', icon: '🛠️' },
  { value: 'distribuidor', label: 'Ser Distribuidor', icon: '🤝' },
  { value: 'general', label: 'Información General', icon: '💬' }
];

const industrialSectors = [
  'Automotriz',
  'Textil',
  'Alimentaria',
  'Farmacéutica',
  'Química',
  'Manufacturera',
  'Logística',
  'Agroindustrial',
  'Otra'
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    sector: '',
    inquiryType: '',
    projectSize: '',
    message: '',
    acceptTerms: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          sector: '',
          inquiryType: '',
          projectSize: '',
          message: '',
          acceptTerms: false
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section 
      id="contacto"
      className="section-premium relative overflow-hidden bg-white"
      ref={ref}
    >
      {/* Background Premium Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-primary opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-steel opacity-5 rounded-full blur-3xl"></div>
      </div>

      {/* Geometric Pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(60deg, var(--color-primary) 25%, transparent 25%),
              linear-gradient(-60deg, var(--color-primary) 25%, transparent 25%)
            `,
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 30px 30px'
          }}
        ></div>
      </div>

      <div className="container-premium relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 glass-effect rounded-full px-6 py-3 mb-8 border border-black/5">
            <div className="w-3 h-3 bg-gradient-steel rounded-full pulse-glow"></div>
            <span className="text-sm font-semibold text-steel tracking-wide">CONTACTO ESPECIALIZADO</span>
            <div className="w-1 h-1 bg-steel/40 rounded-full"></div>
            <span className="text-xs text-steel/60 font-medium">RESPUESTA EN 24H</span>
          </div>

          <h2 className="heading-premium-1 max-w-4xl mx-auto mb-8">
            Conectemos para
            <span className="text-gradient-premium"> Transformar tu Proyecto</span>
          </h2>

          <p className="text-premium-large text-center max-w-4xl mx-auto">
            Nuestro equipo de especialistas está listo para analizar tu proyecto y ofrecerte 
            la solución de enfriamiento industrial más eficiente y sustentable.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-16">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-1"
          >
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card-premium p-6 hover-float group"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">{info.icon}</div>
                    <div>
                      <h3 className="heading-premium-4 text-steel-dark mb-3">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-premium-body text-steel-light mb-1">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Actions */}
            <motion.div variants={itemVariants} className="card-premium p-8 text-center">
              <h3 className="heading-premium-4 text-steel-dark mb-6">¿Necesitas Atención Inmediata?</h3>
              
              <div className="space-y-4">
                <a 
                  href="tel:+525555555555" 
                  className="btn-premium btn-premium-primary w-full"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Llamar Ahora
                </a>
                
                <a 
                  href="mailto:ventas@cg.international?subject=Consulta%20Urgente%20-%20Breezair%20Industrial" 
                  className="btn-premium btn-premium-steel w-full"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Enviar Email
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="card-premium p-10">
              <h3 className="heading-premium-3 text-steel-dark mb-8 text-center">
                Formulario de Contacto Especializado
              </h3>

              {submitStatus && (
                <div className={`p-4 rounded-xl mb-6 ${
                  submitStatus === 'success' 
                    ? 'bg-green-50 border border-green-200 text-green-800' 
                    : 'bg-red-50 border border-red-200 text-red-800'
                }`}>
                  {submitStatus === 'success' ? (
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      ¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo en las próximas 24 horas.
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      Error al enviar el mensaje. Por favor, inténtalo nuevamente o contacta por teléfono.
                    </div>
                  )}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-steel-dark mb-3">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="input-premium"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-steel-dark mb-3">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="input-premium"
                      placeholder="tu.email@empresa.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-steel-dark mb-3">
                      Teléfono de Contacto *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="input-premium"
                      placeholder="+52 55 5555-5555"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-steel-dark mb-3">
                      Empresa *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="input-premium"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                </div>

                {/* Project Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-steel-dark mb-3">
                      Sector Industrial
                    </label>
                    <select
                      name="sector"
                      value={formData.sector}
                      onChange={handleInputChange}
                      className="input-premium"
                    >
                      <option value="">Selecciona tu sector</option>
                      {industrialSectors.map((sector) => (
                        <option key={sector} value={sector}>{sector}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-steel-dark mb-3">
                      Tipo de Consulta *
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      required
                      className="input-premium"
                    >
                      <option value="">Selecciona el tipo</option>
                      {inquiryTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.icon} {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-steel-dark mb-3">
                    Tamaño del Proyecto (m² aprox.)
                  </label>
                  <input
                    type="text"
                    name="projectSize"
                    value={formData.projectSize}
                    onChange={handleInputChange}
                    className="input-premium"
                    placeholder="ej: 5,000 m² o 10,000-15,000 m²"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-steel-dark mb-3">
                    Mensaje Detallado *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="input-premium resize-none"
                    placeholder="Describe tu proyecto, requerimientos específicos, condiciones del sitio, timeline del proyecto, y cualquier información técnica relevante..."
                  ></textarea>
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleInputChange}
                    required
                    className="mt-1 w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary focus:ring-2"
                  />
                  <label className="text-sm text-steel-light leading-relaxed">
                    Acepto el tratamiento de mis datos personales conforme a la{' '}
                    <a href="/privacy" className="text-primary hover:underline font-medium">
                      Política de Privacidad
                    </a>{' '}
                    y autorizo el contacto por parte del equipo comercial de CG International para 
                    fines relacionados con esta consulta.
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.acceptTerms}
                    className="btn-premium btn-premium-primary btn-premium-lg w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-6 h-6" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando Mensaje...
                      </>
                    ) : (
                      <>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Enviar Consulta Especializada
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}