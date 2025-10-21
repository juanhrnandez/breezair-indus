import AboutSection from '../../components/AboutSection';
import StructuredData from '../../components/StructuredData';

export const metadata = {
  title: 'Acerca de Nosotros | CG International - Breezair Industrial México',
  description: '25+ años de experiencia como distribuidores oficiales de Breezair en México. Más de 500 proyectos completados y líderes en enfriamiento evaporativo industrial sustentable.',
  openGraph: {
    title: 'Nosotros | CG International - Distribuidores Oficiales Breezair México',
    description: 'Conoce nuestra historia: 25+ años especializados en soluciones de enfriamiento industrial sustentable con más de 500 proyectos exitosos.',
    url: 'https://breezair-industrial.mx/nosotros',
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
    "url": "https://breezair-industrial.mx",
    "logo": "https://breezair-industrial.mx/images/logo-cg-international.svg",
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
        "item": "https://breezair-industrial.mx"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Nosotros",
        "item": "https://breezair-industrial.mx/nosotros"
      }
    ]
  };

  return (
    <div>
      <StructuredData data={organizationSchema} />
      <StructuredData data={breadcrumbSchema} />
      
      {/* Hero Section específico para nosotros */}
      <section className="section-premium relative overflow-hidden bg-gradient-steel text-white">
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
              { number: '25+', label: 'Años de Experiencia', icon: '🏆' },
              { number: '500+', label: 'Proyectos Completados', icon: '🏭' },
              { number: '50+', label: 'Clientes Satisfechos', icon: '🤝' },
              { number: '87%', label: 'Ahorro Energético Promedio', icon: '⚡' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección principal About */}
      <AboutSection />

      {/* Sección de Liderazgo y Equipo */}
      <section className="section-premium bg-white">
        <div className="container-premium">
          <div className="text-center mb-20">
            <h2 className="heading-premium-2 text-steel-dark mb-6">
              Nuestro Equipo de Liderazgo
            </h2>
            <p className="text-premium-large text-steel-light max-w-3xl mx-auto">
              Profesionales con décadas de experiencia en ingeniería industrial, 
              sustentabilidad y desarrollo de negocios especializados.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                name: 'Ing. Carlos García',
                position: 'Director General',
                experience: '30+ años en ingeniería industrial',
                specialties: ['Gestión de Proyectos Industriales', 'Desarrollo de Negocios B2B', 'Estrategia Comercial']
              },
              {
                name: 'Ing. María Fernández',
                position: 'Directora Técnica',
                experience: '25+ años en sistemas HVAC',
                specialties: ['Diseño de Sistemas HVAC', 'Eficiencia Energética', 'Certificaciones Técnicas']
              },
              {
                name: 'Ing. Roberto López',
                position: 'Gerente de Operaciones',
                experience: '20+ años en manufactura',
                specialties: ['Operaciones Industriales', 'Control de Calidad', 'Mantenimiento Predictivo']
              }
            ].map((member, index) => (
              <div key={index} className="card-premium p-8 text-center hover-float">
                <div className="w-32 h-32 bg-gradient-hero rounded-full mx-auto mb-6 flex items-center justify-center">
                  <div className="text-white text-4xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                
                <h3 className="heading-premium-4 text-steel-dark mb-2">{member.name}</h3>
                <div className="text-primary font-semibold mb-3">{member.position}</div>
                <div className="text-steel-light text-sm mb-4">{member.experience}</div>
                
                <div className="space-y-2">
                  {member.specialties.map((specialty, idx) => (
                    <div key={idx} className="bg-gray-50 px-3 py-1 rounded-full text-xs text-steel">
                      {specialty}
                    </div>
                  ))}
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
          
          <p className="text-premium-large max-w-3xl mx-auto mb-12 text-blue-100">
            Con 25 años de experiencia transformando la industria mexicana, 
            estamos listos para hacer de tu proyecto el siguiente gran éxito sustentable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contacto" className="btn-premium btn-premium-outline btn-premium-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Agendar Reunión Estratégica
            </a>
            
            <a href="/productos" className="btn-premium btn-premium-primary btn-premium-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Ver Nuestros Productos
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
