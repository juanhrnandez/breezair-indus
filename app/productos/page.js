import ProductsSection from '../../components/ProductsSection';
import StructuredData from '../../components/StructuredData';

export const metadata = {
  title: 'Productos | Breezair Industrial México',
  description: 'Catálogo completo de sistemas de enfriamiento evaporativo industrial Breezair. Series TBSI, EXS e Icon con hasta 87% de ahorro energético para naves industriales.',
  openGraph: {
    title: 'Productos Breezair Industrial | Sistemas de Enfriamiento Evaporativo',
    description: 'Descubre nuestra línea completa de sistemas Breezair: TBSI, EXS e Icon. Soluciones industriales con hasta 87% de ahorro energético.',
    url: 'https://breezair-industrial.mx/productos',
    images: [
      {
        url: '/images/og-productos.jpg',
        width: 1200,
        height: 630,
        alt: 'Catálogo de productos Breezair Industrial'
      }
    ]
  }
};

// Datos expandidos de productos para la página dedicada
const products = [
  {
    title: 'Breezair TBSI Series',
    summary: 'La serie premium para grandes instalaciones industriales. Máxima eficiencia energética y capacidad de enfriamiento para aplicaciones exigentes.',
    series: 'TBSI',
    badge: 'MÁS VENDIDO',
    slug: 'tbsi-series',
    category: 'industrial',
    features: [
      'Hasta 87% ahorro energético vs. aire acondicionado tradicional',
      'Capacidad de 18,000-50,000 m³/h de aire tratado',
      'Control automático inteligente con IoT',
      'Construcción robusta para ambientes industriales severos',
      'Filtración avanzada multi-etapa',
      'Mantenimiento predictivo incluido'
    ],
    specs: {
      capacity: '50,000 m³/h',
      efficiency: '87%',
      powerConsumption: '1.5-4.5 kW',
      coverageArea: '1,500-5,000 m²',
      noiseLevel: '< 65 dB(A)',
      waterConsumption: '15-45 L/h'
    },
    applications: ['Naves Industriales Grandes', 'Manufactura Automotriz', 'Textil Pesada', 'Procesamiento de Alimentos'],
    certifications: ['ISO 14001', 'ENERGY STAR', 'ASHRAE 62.1', 'NOM-020-ENER'],
    warranty: '5 años extendida',
    installation: 'Profesional especializada incluida',
    priceRange: 'USD $35,000 - $85,000'
  },
  {
    title: 'Breezair EXS Series',
    summary: 'Versatilidad y adaptabilidad para procesos industriales especializados. Diseño modular que se adapta a cualquier configuración.',
    series: 'EXS',
    slug: 'exs-series',
    category: 'commercial',
    features: [
      'Diseño modular completamente flexible',
      'Filtración HEPA opcional para ambientes críticos',
      'Resistente a ambientes corrosivos y químicos',
      'Control de humedad preciso',
      'Instalación en espacios reducidos',
      'Integración con sistemas BMS existentes'
    ],
    specs: {
      capacity: '35,000 m³/h',
      efficiency: '82%',
      powerConsumption: '1.2-3.8 kW',
      coverageArea: '1,200-3,500 m²',
      noiseLevel: '< 62 dB(A)',
      waterConsumption: '12-38 L/h'
    },
    applications: ['Centros de Datos', 'Laboratorios', 'Hospitales', 'Centros Comerciales'],
    certifications: ['ISO 9001', 'ENERGY STAR', 'LEED Platinum', 'FDA Compliant'],
    warranty: '3 años estándar + 2 años opcional',
    installation: 'Simplificada con soporte técnico',
    priceRange: 'USD $25,000 - $65,000'
  },
  {
    title: 'Breezair Icon Series',
    summary: 'Solución compacta con alto rendimiento para espacios industriales medianos. Ideal para implementaciones rápidas y eficientes.',
    series: 'ICON',
    badge: 'COMPACTO',
    slug: 'icon-series',
    category: 'specialized',
    features: [
      'Instalación plug-and-play simplificada',
      'Mantenimiento mínimo requerido',
      'Control remoto WiFi integrado',
      'Monitoreo en tiempo real vía app',
      'Diseño compacto para techos bajos',
      'Eficiencia energética optimizada'
    ],
    specs: {
      capacity: '25,000 m³/h',
      efficiency: '78%',
      powerConsumption: '0.8-2.5 kW',
      coverageArea: '800-2,500 m²',
      noiseLevel: '< 58 dB(A)',
      waterConsumption: '8-28 L/h'
    },
    applications: ['Talleres Medianos', 'Bodegas', 'Oficinas Industriales', 'Cocinas Comerciales'],
    certifications: ['ISO 14644', 'GMP Certified', 'CE Marking', 'UL Listed'],
    warranty: '7 años premium',
    installation: 'Auto-instalable con guía técnica',
    priceRange: 'USD $15,000 - $45,000'
  },
  {
    title: 'Breezair Custom Solutions',
    summary: 'Soluciones completamente personalizadas para aplicaciones especiales y proyectos únicos que requieren ingeniería específica.',
    series: 'CUSTOM',
    badge: 'PERSONALIZADO',
    slug: 'custom-solutions',
    category: 'specialized',
    features: [
      'Diseño 100% personalizado según necesidades',
      'Ingeniería especializada incluida',
      'Integración con procesos existentes',
      'Materiales especiales disponibles',
      'Certificaciones específicas por industria',
      'Soporte técnico dedicado 24/7'
    ],
    specs: {
      capacity: 'Variable según diseño',
      efficiency: 'Hasta 90%',
      powerConsumption: 'Optimizado por proyecto',
      coverageArea: 'Ilimitada',
      noiseLevel: 'Personalizable',
      waterConsumption: 'Según especificaciones'
    },
    applications: ['Farmacéutica', 'Aeroespacial', 'Minería', 'Petroquímica', 'Salas Limpias'],
    certifications: ['Por definir según aplicación', 'Validación FDA', 'Certificación ATEX', 'Normas militares'],
    warranty: 'Hasta 10 años según proyecto',
    installation: 'Ingeniería completa incluida',
    priceRange: 'Cotización según proyecto'
  }
];

export default function ProductosPage() {
  // Structured Data para la página de productos
  const productCatalogSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Catálogo Breezair Industrial México",
    "description": "Sistemas de enfriamiento evaporativo industrial con hasta 87% de ahorro energético",
    "numberOfItems": products.length,
    "itemListElement": products.map((product, index) => ({
      "@type": "Product",
      "position": index + 1,
      "name": product.title,
      "description": product.summary,
      "brand": {
        "@type": "Brand",
        "name": "Breezair"
      },
      "manufacturer": {
        "@type": "Organization",
        "name": "CG International"
      },
      "category": "Equipos de Climatización Industrial",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "USD",
        "seller": {
          "@type": "Organization",
          "name": "CG International"
        }
      }
    }))
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
        "name": "Productos",
        "item": "https://breezair-industrial.mx/productos"
      }
    ]
  };

  return (
    <div>
      <StructuredData data={productCatalogSchema} />
      <StructuredData data={breadcrumbSchema} />
      
      {/* Hero Section específico para productos */}
      <section className="section-premium relative overflow-hidden bg-gradient-hero text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-blue-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container-premium relative z-10 text-center py-20">
          <div className="inline-flex items-center gap-3 glass-effect rounded-full px-6 py-3 mb-8 border border-white/20">
            <div className="w-3 h-3 bg-white rounded-full pulse-glow"></div>
            <span className="text-sm font-semibold tracking-wide">CATÁLOGO COMPLETO</span>
            <div className="w-1 h-1 bg-white/40 rounded-full"></div>
            <span className="text-xs opacity-80 font-medium">TODAS LAS SERIES</span>
          </div>

          <h1 className="heading-premium-1 mb-8">
            Sistemas de Enfriamiento
            <span className="block text-blue-200">Evaporativo Industrial</span>
          </h1>

          <p className="text-premium-large max-w-4xl mx-auto mb-12 text-blue-100">
            Descubre nuestra línea completa de soluciones Breezair: desde aplicaciones 
            industriales pesadas hasta configuraciones especializadas personalizadas. 
            Cada sistema garantiza máxima eficiencia energética y aire 100% exterior filtrado.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: '🏭', title: '4 Series Disponibles', desc: 'Para cada aplicación específica' },
              { icon: '⚡', title: 'Hasta 87% Ahorro', desc: 'En costos de energía comprobado' },
              { icon: '🛡️', title: 'Hasta 10 Años', desc: 'De garantía según serie' }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-blue-200 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección principal de productos */}
      <ProductsSection products={products} />

      {/* Sección de comparación técnica */}
      <section className="section-premium bg-gray-50">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="heading-premium-2 text-steel-dark mb-6">
              Comparación Técnica de Series
            </h2>
            <p className="text-premium-large text-steel-light max-w-3xl mx-auto">
              Encuentra la solución perfecta para tu proyecto comparando las especificaciones 
              técnicas de todas nuestras series Breezair.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-industrial-lg overflow-hidden">
              <thead className="bg-gradient-primary text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Especificación</th>
                  <th className="px-6 py-4 text-center font-semibold">TBSI Series</th>
                  <th className="px-6 py-4 text-center font-semibold">EXS Series</th>
                  <th className="px-6 py-4 text-center font-semibold">Icon Series</th>
                  <th className="px-6 py-4 text-center font-semibold">Custom</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-steel-dark">Capacidad (m³/h)</td>
                  <td className="px-6 py-4 text-center">18,000 - 50,000</td>
                  <td className="px-6 py-4 text-center">12,000 - 35,000</td>
                  <td className="px-6 py-4 text-center">8,000 - 25,000</td>
                  <td className="px-6 py-4 text-center">Variable</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-steel-dark">Eficiencia Energética</td>
                  <td className="px-6 py-4 text-center font-semibold text-green-600">87%</td>
                  <td className="px-6 py-4 text-center font-semibold text-green-600">82%</td>
                  <td className="px-6 py-4 text-center font-semibold text-green-600">78%</td>
                  <td className="px-6 py-4 text-center font-semibold text-green-600">Hasta 90%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-steel-dark">Área de Cobertura (m²)</td>
                  <td className="px-6 py-4 text-center">1,500 - 5,000</td>
                  <td className="px-6 py-4 text-center">1,200 - 3,500</td>
                  <td className="px-6 py-4 text-center">800 - 2,500</td>
                  <td className="px-6 py-4 text-center">Ilimitada</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-steel-dark">Consumo Eléctrico (kW)</td>
                  <td className="px-6 py-4 text-center">1.5 - 4.5</td>
                  <td className="px-6 py-4 text-center">1.2 - 3.8</td>
                  <td className="px-6 py-4 text-center">0.8 - 2.5</td>
                  <td className="px-6 py-4 text-center">Optimizado</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-steel-dark">Garantía</td>
                  <td className="px-6 py-4 text-center">5 años</td>
                  <td className="px-6 py-4 text-center">3-5 años</td>
                  <td className="px-6 py-4 text-center">7 años</td>
                  <td className="px-6 py-4 text-center">Hasta 10 años</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-steel-dark">Rango de Precio (USD)</td>
                  <td className="px-6 py-4 text-center">$35K - $85K</td>
                  <td className="px-6 py-4 text-center">$25K - $65K</td>
                  <td className="px-6 py-4 text-center">$15K - $45K</td>
                  <td className="px-6 py-4 text-center">Cotización</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA final para contacto */}
      <section className="section-premium relative overflow-hidden bg-gradient-steel text-white">
        <div className="container-premium text-center py-20">
          <h2 className="heading-premium-2 mb-8">
            ¿Necesitas Ayuda para Elegir la Serie Correcta?
          </h2>
          
          <p className="text-premium-large max-w-3xl mx-auto mb-12 text-blue-100">
            Nuestros ingenieros especialistas pueden analizar tu proyecto específico y 
            recomendar la configuración óptima, incluyendo cálculos de ROI y propuesta técnica detallada.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contacto" className="btn-premium btn-premium-outline btn-premium-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Consultoría Técnica Gratuita
            </a>
            
            <a 
              href="tel:+525555555555" 
              className="btn-premium btn-premium-primary btn-premium-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Llamar: +52 55 5555-5555
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
