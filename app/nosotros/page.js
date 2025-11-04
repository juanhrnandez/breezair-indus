import AboutSection from '../../components/AboutSection';
import StructuredData from '../../components/StructuredData';
import Image from 'next/image';
import Link from 'next/link';

// Configuración para SSG optimizado
export const revalidate = 86400; // Revalidar cada 24 horas
export const dynamic = 'force-static'; // Forzar generación estática

export const metadata = {
  title: 'Acerca de Nosotros | CG International - Breezair Industrial México',
  description: '25+ años de experiencia como distribuidores oficiales de Breezair en México. Más de 500 proyectos completados y líderes en enfriamiento evaporativo industrial sustentable.',
  openGraph: {
    title: 'Nosotros | CG International - Distribuidores Oficiales Breezair México',
    description: 'Conoce nuestra historia: 25+ años especializados en soluciones de enfriamiento industrial sustentable con más de 500 proyectos exitosos.',
    url: 'https://www.breezair.com.mx/nosotros',
    images: [
      {
        url: '/images/og-nosotros.jpg',
        width: 1200,
        height: 630,
        alt: 'CG International - Historia y experiencia en México'
      }
    ]
  }
};

export default function NosotrosPage() {
  // Structured Data para la página de empresa
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CG International",
    "alternateName": "Breezair Industrial México",
    "url": "https://www.breezair.com.mx",
    "logo": "https://www.breezair.com.mx/images/logo-cg-international.svg",
    "description": "Distribuidores oficiales de Breezair en México desde 1999. Especialistas en sistemas de enfriamiento evaporativo industrial con más de 500 proyectos completados.",
    "foundingDate": "1999",
    "numberOfEmployees": "25-50",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "MX",
      "addressLocality": "Ciudad de México",
      "addressRegion": "CDMX"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+52-55-5555-5555",
        "contactType": "sales",
        "email": "ventas@cg.international",
        "availableLanguage": ["Spanish", "English"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+52-55-5555-5556",
        "contactType": "technical support",
        "email": "soporte@cg.international",
        "availableLanguage": ["Spanish", "English"]
      }
    ],
    "sameAs": [
      "https://www.cg.international/",
      "https://www.linkedin.com/company/cg-international"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "México"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://www.breezair.com.mx"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Nosotros",
        "item": "https://www.breezair.com.mx/nosotros"
      }
    ]
  };

  return (
    <div>
      <StructuredData data={organizationSchema} />
      <StructuredData data={breadcrumbSchema} />
      
      {/* Hero Section específico para nosotros */}
      <section className="section-premium relative overflow-hidden bg-gradient-steel text-white">
        {/* Imagen principal de fondo */}
        <div className="absolute inset-0">
          <Image 
            src="/images/breezair-1.jpg"
            alt="CG International - Instalaciones industriales Breezair"
            fill
            className="object-cover"
            style={{ filter: 'blur(1px)' }}
            priority
          />
          {/* Overlay gris */}
          <div className="absolute inset-0 bg-gray-800/70"></div>
        </div>
        
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container-premium relative z-10 text-center py-20">
          <div className="inline-flex items-center gap-3 glass-effect rounded-full px-6 py-3 mb-8 border border-white/20">
            <div className="w-3 h-3 bg-white rounded-full pulse-glow"></div>
            <span className="text-sm font-semibold tracking-wide">DISTRIBUIDORES OFICIALES</span>
            <div className="w-1 h-1 bg-white/40 rounded-full"></div>
            <span className="text-xs opacity-80 font-medium">DESDE 1999</span>
          </div>

          <h1 className="heading-premium-1 mb-8">
            CG International
            <span className="block text-blue-200">Breezair Industrial México</span>
          </h1>

          <p className="text-premium-large max-w-4xl mx-auto mb-12 text-blue-100">
            Somos la empresa líder en México especializada en sistemas de enfriamiento 
            evaporativo industrial. Con más de 25 años de experiencia, hemos transformado 
            más de 500 instalaciones industriales con soluciones sustentables y eficientes.
          </p>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { number: '25+', label: 'Años de Experiencia', icon: <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg> },
              { number: '500+', label: 'Proyectos Completados', icon: <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/></svg> },
              { number: '50+', label: 'Clientes Satisfechos', icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
              { number: '87%', label: 'Ahorro Energético Promedio', icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="flex justify-center mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección Company Overview */}
      <section className="section-premium bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          {/* Company Stats */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-20">
            {[
              { number: '25+', label: 'Años de Experiencia', icon: <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg> },
              { number: '500+', label: 'Proyectos Completados', icon: <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/></svg> },
              { number: '50+', label: 'Clientes Satisfechos', icon: <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
              { number: '87%', label: 'Ahorro Energético Promedio', icon: <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2">
                  <div className="flex justify-center mb-4">{stat.icon}</div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Mission & Vision */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div className="bg-linear-to-br from-blue-50 to-white rounded-3xl p-8 lg:p-12">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Nuestra Misión</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                Proporcionar soluciones de enfriamiento evaporativo de clase mundial que maximicen 
                la eficiencia energética, mejoren la calidad del aire y reduzcan significativamente 
                los costos operativos en aplicaciones industriales, contribuyendo a un futuro 
                más sustentable para la industria mexicana.
              </p>
            </div>

            <div className="bg-linear-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-12">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gray-700 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Nuestra Visión</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                Ser reconocidos como la empresa líder en México en soluciones de climatización 
                industrial sustentable, estableciendo el estándar de excelencia técnica, 
                innovación y compromiso ambiental que inspire a la transformación de la 
                industria hacia prácticas más eficientes y responsables.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Nuestros Valores</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los principios que guían cada decisión y cada proyecto que desarrollamos.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                icon: <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" /></svg>,
                title: 'Excelencia Técnica',
                description: 'Cada solución está respaldada por ingeniería de precisión y estándares internacionales.'
              },
              {
                icon: <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
                title: 'Compromiso Ambiental',
                description: 'Promovemos tecnologías limpias que reducen el impacto ambiental y los costos operativos.'
              },
              {
                icon: <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
                title: 'Servicio Integral',
                description: 'Desde el análisis inicial hasta el mantenimiento preventivo, acompañamos cada proyecto.'
              },
              {
                icon: <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
                title: 'Innovación Constante',
                description: 'Adoptamos las últimas tecnologías para ofrecer las soluciones más eficientes del mercado.'
              }
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="flex justify-center">{value.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                    <p className="text-gray-700 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final para contacto */}
      <section className="section-premium relative overflow-hidden bg-gradient-primary text-white">
        <div className="container-premium text-center py-20">
          <h2 className="heading-premium-2 mb-8">
            ¿Listo para ser Nuestro Próximo Caso de Éxito?
          </h2>
          
          <p className="text-premium-products max-w-3xl mx-auto mb-12 text-blue-100">
            Con 25 años de experiencia transformando la industria mexicana, 
            estamos listos para hacer de tu proyecto el siguiente gran éxito sustentable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="btn-premium btn-premium-primary btn-premium-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Agendar Reunión Estratégica
            </Link>
            
            <Link href="/productos" className="btn-premium btn-premium-primary btn-premium-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Ver Nuestros Productos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
