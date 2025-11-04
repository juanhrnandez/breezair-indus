import Link from 'next/link';
import ProductsSection from '../../components/ProductsSection';
import StructuredData from '../../components/StructuredData';
import Image from 'next/image';

// Configuración de rendering y caching
export const revalidate = 3600; // ISR - Revalidar cada hora
export const dynamic = 'force-static'; // Forzar generación estática cuando sea posible
export const dynamicParams = true; // Permitir parámetros dinámicos
export const fetchCache = 'auto'; // Cache automático para fetch requests

// Generar metadata de forma dinámica
export async function generateMetadata() {
  // Se puede hacer fetch de datos si es necesario
  const productsCount = products.length;
  
  return {
    title: 'Productos | Breezair Industrial México',
    description: `Catálogo completo de ${productsCount} series de sistemas de enfriamiento evaporativo industrial Breezair. Series TBSI, EXS e Icon con hasta 87% de ahorro energético para naves industriales.`,
    openGraph: {
      title: 'Productos Breezair Industrial | Sistemas de Enfriamiento Evaporativo',
      description: `Descubre nuestra línea completa de ${productsCount} series Breezair: TBSI, EXS e Icon. Soluciones industriales con hasta 87% de ahorro energético.`,
      url: 'https://www.breezair.com.mx/productos',
      images: [
        {
          url: '/images/og-productos.jpg',
          width: 1200,
          height: 630,
          alt: 'Catálogo de productos Breezair Industrial'
        }
      ]
    },
    alternates: {
      canonical: 'https://www.breezair.com.mx/productos'
    }
  };
}

// Función para generar parámetros estáticos (SSG)
export async function generateStaticParams() {
  // Aquí podrías hacer fetch de productos desde una API o base de datos
  // Para este ejemplo, usamos los productos estáticos definidos más abajo
  return products.map((product) => ({
    // Estos parámetros se pueden usar para rutas dinámicas si es necesario
    slug: product.slug,
    category: product.category
  }));
}

// Datos expandidos de productos para la página dedicada
const products = [
  {
    id: 'tbsi-series',
    title: 'Breezair TBSI Series',
    summary: 'La serie premium para grandes instalaciones industriales. Máxima eficiencia energética y capacidad de enfriamiento para aplicaciones exigentes.',
    series: 'TBSI',
    badge: 'MÁS VENDIDO',
    slug: 'tbsi-series',
    category: 'industrial',
    image: '/images/breezair-product-1.jpg',
    images: [
      '/images/breezair-product-1.jpg',
      '/images/breezair-product-2.jpg',
      '/images/breezair-product-3.jpg'
    ],
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
    id: 'exs-series',
    title: 'Breezair EXS Series',
    summary: 'Versatilidad y adaptabilidad para procesos industriales especializados. Diseño modular que se adapta a cualquier configuración.',
    series: 'EXS',
    slug: 'exs-series',
    category: 'commercial',
    image: '/images/breezair-product-2.jpg',
    images: [
      '/images/breezair-product-2.jpg',
      '/images/breezair-product-2.jpg',
      '/images/breezair-product-2.jpg'
    ],
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
    id: 'icon-series',
    title: 'Breezair Icon Series',
    summary: 'Solución compacta con alto rendimiento para espacios industriales medianos. Ideal para implementaciones rápidas y eficientes.',
    series: 'ICON',
    badge: 'COMPACTO',
    slug: 'icon-series',
    category: 'specialized',
    image: '/images/breezair-product-3.jpg',
    images: [
      '/images/breezair-product-3.jpg',
      '/images/breezair-product-3.jpg',
      '/images/breezair-product-3.jpg'
    ],
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
    id: 'custom-solutions',
    title: 'Breezair Custom Solutions',
    summary: 'Soluciones completamente personalizadas para aplicaciones especiales y proyectos únicos que requieren ingeniería específica.',
    series: 'CUSTOM',
    badge: 'PERSONALIZADO',
    slug: 'custom-solutions',
    category: 'specialized',
    image: '/images/breezair-product-4.jpg',
    images: [
      '/images/breezair-product-4.jpg',
      '/images/breezair-product-4.jpg',
      '/images/breezair-product-4.jpg'
    ],
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

// Función para obtener productos (simula fetch de API o base de datos)
async function getProducts() {
  try {
    // Simular retraso de API para demostrar SSR
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // En un caso real, aquí harías fetch a tu API o base de datos
    // const response = await fetch('https://api.breezair.com.mx/products', {
    //   next: { revalidate: 3600 }, // Cache por 1 hora
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });
    // 
    // if (!response.ok) {
    //   throw new Error(`HTTP error! status: ${response.status}`);
    // }
    // 
    // return response.json();
    
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    // Retornar datos de fallback en caso de error
    return products;
  }
}

// Función para obtener datos adicionales si es necesario
async function getProductStats() {
  try {
    // Simular obtener estadísticas o datos adicionales
    await new Promise(resolve => setTimeout(resolve, 50));
    
    // En un caso real, esto podría venir de analytics, base de datos, etc.
    // const statsResponse = await fetch('https://api.breezair.com.mx/stats', {
    //   next: { revalidate: 1800 }, // Cache por 30 minutos
    // });
    
    return {
      totalProducts: products.length,
      categoriesCount: [...new Set(products.map(p => p.category))].length,
      lastUpdated: new Date().toISOString(),
      averageSavings: '85%'
    };
  } catch (error) {
    console.error('Error fetching stats:', error);
    // Datos de fallback
    return {
      totalProducts: products.length,
      categoriesCount: 3,
      lastUpdated: new Date().toISOString(),
      averageSavings: '85%'
    };
  }
}

export default async function ProductosPage() {
  // Obtener datos de forma asíncrona (SSR/SSG)
  // Esta función se ejecutará en el servidor durante la generación estática (SSG)
  // y se revalidará según la configuración de ISR
  const [productsData, stats] = await Promise.all([
    getProducts(),
    getProductStats()
  ]);
  // Structured Data para la página de productos usando datos dinámicos
  const productCatalogSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Catálogo Breezair Industrial México",
    "description": `Sistemas de enfriamiento evaporativo industrial con hasta ${stats.averageSavings} de ahorro energético`,
    "numberOfItems": stats.totalProducts,
    "dateModified": stats.lastUpdated,
    "itemListElement": productsData.map((product, index) => ({
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
        "item": "https://www.breezair.com.mx"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Productos",
        "item": "https://www.breezair.com.mx/productos"
      }
    ]
  };

  return (
    <div>
      <StructuredData data={productCatalogSchema} />
      <StructuredData data={breadcrumbSchema} />
      
      {/* Hero Section específico para productos */}
      <section className="section-premium relative overflow-hidden bg-gradient-hero text-white">
        {/* Imagen principal de fondo */}
        <div className="absolute inset-0">
          <Image 
            src="/images/breezair-1.jpg"
            alt="Sistemas de enfriamiento evaporativo Breezair Industrial"
            fill
            className="object-cover"
            style={{ filter: 'blur(1px)' }}
            priority
          />
          {/* Overlay azul */}
          <div className="absolute inset-0 bg-blue-900/60"></div>
        </div>
        
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

          <p className="text-premium-large max-w-4xl mx-auto mb-12 text-white">
            Descubre nuestra línea completa de {stats.totalProducts} series de soluciones Breezair: desde aplicaciones 
            industriales pesadas hasta configuraciones especializadas personalizadas. 
            Cada sistema garantiza hasta {stats.averageSavings} de eficiencia energética y aire 100% exterior filtrado.
          </p>

          <div className="flex items-center justify-center gap-2 text-sm text-blue-200 mb-8">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span>Última actualización: {new Date(stats.lastUpdated).toLocaleDateString('es-MX')}</span>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/></svg>, title: '4 Series Disponibles', desc: 'Para cada aplicación específica' },
              { icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, title: 'Hasta 87% Ahorro', desc: 'En costos de energía comprobado' },
              { icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>, title: 'Hasta 10 Años', desc: 'De garantía según serie' }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-blue-200 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección principal de productos con datos dinámicos */}
      <ProductsSection products={productsData} />

      {/* Estadísticas dinámicas del catálogo */}
      <section className="section-premium bg-white border-t border-gray-100">
        <div className="container-premium py-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">{stats.totalProducts}</div>
              <div className="text-sm font-medium text-gray-600">Series Disponibles</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">{stats.categoriesCount}</div>
              <div className="text-sm font-medium text-gray-600">Categorías de Aplicación</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">{stats.averageSavings}</div>
              <div className="text-sm font-medium text-gray-600">Ahorro Energético Promedio</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">24/7</div>
              <div className="text-sm font-medium text-gray-600">Soporte Técnico</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de comparación técnica */}
      <section className="section-premium bg-gray-50">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="heading-premium-2 text-steel-dark mb-6">
              Comparación Técnica de Series
            </h2>
            <p className="text-premium-products text-steel-light max-w-3xl mx-auto">
              Encuentra la solución perfecta para tu proyecto comparando las especificaciones 
              técnicas de todas nuestras series Breezair.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-industrial-lg overflow-hidden">
              <thead className="bg-gradient-primary text-black">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Especificación</th>
                  {productsData.map((product) => (
                    <th key={product.slug} className="px-6 py-4 text-center font-semibold">
                      <Link 
                        href={`/productos/${product.id}`}
                        className="hover:text-blue-800 transition-colors cursor-pointer inline-flex items-center gap-1"
                      >
                        {product.series} Series
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </Link>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-steel-dark">Capacidad</td>
                  {productsData.map((product) => (
                    <td key={product.slug} className="px-6 py-4 text-center">
                      {product.specs.capacity}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-steel-dark">Eficiencia Energética</td>
                  {productsData.map((product) => (
                    <td key={product.slug} className="px-6 py-4 text-center font-semibold text-green-600">
                      {product.specs.efficiency}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-steel-dark">Área de Cobertura</td>
                  {productsData.map((product) => (
                    <td key={product.slug} className="px-6 py-4 text-center">
                      {product.specs.coverageArea}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-steel-dark">Consumo Eléctrico</td>
                  {productsData.map((product) => (
                    <td key={product.slug} className="px-6 py-4 text-center">
                      {product.specs.powerConsumption}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-steel-dark">Garantía</td>
                  {productsData.map((product) => (
                    <td key={product.slug} className="px-6 py-4 text-center">
                      {product.warranty}
                    </td>
                  ))}
                  <td className="px-6 py-4 text-center">Hasta 10 años</td>
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
          
          <p className="text-premium-products max-w-3xl mx-auto mb-12 text-blue-100">
            Nuestros ingenieros especialistas pueden analizar tu proyecto específico y 
            recomendar la configuración óptima, incluyendo cálculos de ROI y propuesta técnica detallada.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contacto" className="btn-premium btn-premium-primary btn-premium-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Consultoría Técnica Gratuita
            </Link>
            
            <a 
              href="https://api.whatsapp.com/send/?phone=5255591975333&text=Hola%2C+estoy+en+breezair.com.mx+y+me+interesa+cotizar+sistemas+de+enfriamiento+evaporativo.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium btn-premium-primary btn-premium-lg flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              Cotizar por WhatsApp
            </a>
          </div>
          
          {/* Enlaces rápidos a productos individuales */}
          <div className="border-t border-white/20 pt-8">
            <p className="text-blue-200 text-sm mb-4">O explora nuestras series individualmente:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {productsData.map((product) => (
                <Link
                  key={product.id}
                  href={`/productos/${product.id}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 border border-white/20"
                >
                  <span>Serie {product.series}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
