import Image from 'next/image';
import Link from 'next/link';
import StructuredData from '../../../components/StructuredData';
import ProductImageGallery from '../../../components/ProductImageGallery';



// Configuración de rendering y caching
export const revalidate = 3600; // ISR - Revalidar cada hora
export const dynamic = 'force-static'; // Forzar generación estática cuando sea posible
export const dynamicParams = true; // Permitir parámetros dinámicos

// Datos de productos (idealmente vendría de una API o base de datos)
const products = [
  {
    id: 'tbsi-series',
    title: 'Breezair TBSI Series',
    shortTitle: 'TBSI',
    summary: 'La serie premium para grandes instalaciones industriales. Máxima eficiencia energética y capacidad de enfriamiento para aplicaciones exigentes.',
    description: 'La serie TBSI representa la cumbre de la tecnología de enfriamiento evaporativo industrial. Diseñada específicamente para grandes instalaciones que requieren máximo rendimiento, eficiencia energética superior y operación continua en condiciones severas.',
    series: 'TBSI',
    badge: 'MÁS VENDIDO',
    slug: 'tbsi-series',
    category: 'industrial',
    image: '/images/breezair-product-1.jpg',
    images: [
      '/images/breezair-product-1.jpg',
      '/images/breezair-product-1-detail.jpg',
      '/images/breezair-product-1-installation.jpg',
      '/images/breezair-product-1-interior.jpg'
    ],
    features: [
      'Hasta 87% ahorro energético vs. aire acondicionado tradicional',
      'Capacidad de 18,000-50,000 m³/h de aire tratado',
      'Control automático inteligente con IoT',
      'Construcción robusta para ambientes industriales severos',
      'Filtración avanzada multi-etapa',
      'Mantenimiento predictivo incluido',
      'Sistema anti-legionela integrado',
      'Monitoreo remoto 24/7',
      'Certificación ISO 14001 y ENERGY STAR'
    ],
    specs: {
      capacity: '18,000-50,000 m³/h',
      efficiency: '87%',
      powerConsumption: '1.5-4.5 kW',
      coverageArea: '1,500-5,000 m²',
      noiseLevel: '< 65 dB(A)',
      waterConsumption: '15-45 L/h',
      dimensions: '3.2 x 2.8 x 2.1 m',
      weight: '850-1,200 kg',
      voltage: '380V/3Ph/50Hz',
      airThrow: 'Hasta 40 metros'
    },
    applications: [
      'Naves Industriales Grandes (>3,000 m²)',
      'Manufactura Automotriz',
      'Industria Textil Pesada',
      'Procesamiento de Alimentos',
      'Centros Logísticos',
      'Plantas Químicas'
    ],
    benefits: [
      'Reducción de hasta 87% en costos energéticos',
      'Mejora del 40% en productividad laboral',
      'Aire 100% exterior filtrado y renovado',
      'Reducción significativa de la huella de carbono',
      'Cumplimiento normativo industrial',
      'ROI típico en 18-24 meses'
    ],
    certifications: ['ISO 14001', 'ENERGY STAR', 'ASHRAE 62.1', 'NOM-020-ENER'],
    warranty: '5 años extendida',
    installation: 'Profesional especializada incluida',
    priceRange: 'USD $35,000 - $85,000',
    technicalDocs: [
      { name: 'Ficha Técnica Completa', url: '/docs/tbsi-tech-sheet.pdf' },
      { name: 'Manual de Instalación', url: '/docs/tbsi-installation.pdf' },
      { name: 'Certificaciones', url: '/docs/tbsi-certifications.pdf' }
    ]
  },
  {
    id: 'exs-series',
    title: 'Breezair EXS Series',
    shortTitle: 'EXS',
    summary: 'Versatilidad y adaptabilidad para procesos industriales especializados. Diseño modular que se adapta a cualquier configuración.',
    description: 'La serie EXS ofrece flexibilidad sin comprometer el rendimiento. Su diseño modular permite adaptarse a espacios únicos y requisitos específicos, siendo ideal para aplicaciones donde las soluciones estándar no son suficientes.',
    series: 'EXS',
    slug: 'exs-series',
    category: 'commercial',
    image: '/images/breezair-product-2.jpg',
    images: [
      '/images/breezair-product-2.jpg',
      '/images/breezair-product-2-modules.jpg',
      '/images/breezair-product-2-controls.jpg',
      '/images/breezair-product-2-filters.jpg'
    ],
    features: [
      'Diseño modular completamente flexible',
      'Filtración HEPA opcional para ambientes críticos',
      'Resistente a ambientes corrosivos y químicos',
      'Control de humedad preciso ±2%',
      'Instalación en espacios reducidos',
      'Integración con sistemas BMS existentes',
      'Configuración multi-zona',
      'Sistema de purificación UV-C opcional'
    ],
    specs: {
      capacity: '12,000-35,000 m³/h',
      efficiency: '82%',
      powerConsumption: '1.2-3.8 kW',
      coverageArea: '1,200-3,500 m²',
      noiseLevel: '< 62 dB(A)',
      waterConsumption: '12-38 L/h',
      dimensions: '2.8 x 2.4 x 1.9 m',
      weight: '650-950 kg',
      voltage: '220V/3Ph/50Hz',
      airThrow: 'Hasta 30 metros'
    },
    applications: [
      'Centros de Datos y Servidores',
      'Laboratorios y Salas Limpias',
      'Hospitales y Clínicas',
      'Centros Comerciales',
      'Industria Farmacéutica',
      'Procesos Críticos'
    ],
    benefits: [
      'Ambiente controlado de alta precisión',
      'Filtración avanzada multi-nivel',
      'Flexibilidad de configuración única',
      'Menor footprint de instalación',
      'Integración seamless con sistemas existentes',
      'Cumplimiento normativo sanitario'
    ],
    certifications: ['ISO 9001', 'ENERGY STAR', 'LEED Platinum', 'FDA Compliant'],
    warranty: '3 años estándar + 2 años opcional',
    installation: 'Simplificada con soporte técnico',
    priceRange: 'USD $25,000 - $65,000',
    technicalDocs: [
      { name: 'Especificaciones Técnicas', url: '/docs/exs-specs.pdf' },
      { name: 'Guía de Configuración', url: '/docs/exs-config.pdf' },
      { name: 'Validaciones FDA', url: '/docs/exs-fda.pdf' }
    ]
  },
  {
    id: 'icon-series',
    title: 'Breezair Icon Series',
    shortTitle: 'ICON',
    summary: 'Solución compacta con alto rendimiento para espacios industriales medianos. Ideal para implementaciones rápidas y eficientes.',
    description: 'La serie Icon combina eficiencia energética superior con un diseño compacto, perfecta para instalaciones que requieren máximo rendimiento en espacios limitados. Su tecnología avanzada garantiza 7 años de operación confiable.',
    series: 'ICON',
    badge: 'COMPACTO',
    slug: 'icon-series',
    category: 'specialized',
    image: '/images/breezair-product-3.jpg',
    images: [
      '/images/breezair-product-3.jpg',
      '/images/breezair-product-3-compact.jpg',
      '/images/breezair-product-3-smart.jpg',
      '/images/breezair-product-3-efficient.jpg'
    ],
    features: [
      'Diseño ultra-compacto con máximo rendimiento',
      'Eficiencia energética líder en su categoría',
      'Sistema inteligente de auto-diagnóstico',
      'Instalación plug-and-play simplificada',
      'Control remoto vía smartphone/tablet',
      'Modo eco-inteligente automático',
      'Construcción premium con garantía extendida',
      'Mantenimiento mínimo requerido'
    ],
    specs: {
      capacity: '8,000-25,000 m³/h',
      efficiency: '78%',
      powerConsumption: '0.8-2.5 kW',
      coverageArea: '800-2,500 m²',
      noiseLevel: '< 58 dB(A)',
      waterConsumption: '8-25 L/h',
      dimensions: '2.2 x 2.0 x 1.6 m',
      weight: '420-650 kg',
      voltage: '220V/1Ph/50Hz',
      airThrow: 'Hasta 25 metros'
    },
    applications: [
      'Talleres y Manufactura Mediana',
      'Almacenes y Bodegas',
      'Oficinas Industriales',
      'Centros de Distribución',
      'Espacios Comerciales',
      'Instalaciones Deportivas'
    ],
    benefits: [
      'Instalación rápida en un día',
      'Menor inversión inicial',
      'Operación silenciosa optimizada',
      'Control inteligente automatizado',
      'Mantenimiento predictivo integrado',
      'Garantía extendida incluida'
    ],
    certifications: ['ENERGY STAR', 'CE Marking', 'ISO 9001', 'UL Listed'],
    warranty: '7 años extendida incluida',
    installation: 'Instalación rápida en 1 día',
    priceRange: 'USD $15,000 - $45,000',
    technicalDocs: [
      { name: 'Guía Rápida', url: '/docs/icon-quick-guide.pdf' },
      { name: 'Manual de Usuario', url: '/docs/icon-manual.pdf' },
      { name: 'App de Control', url: '/docs/icon-app.pdf' }
    ]
  },
  {
    id: 'custom-solutions',
    title: 'Breezair Custom Solutions',
    shortTitle: 'CUSTOM',
    summary: 'Soluciones completamente personalizadas para aplicaciones especiales y proyectos únicos que requieren ingeniería específica.',
    description: 'Las Soluciones Personalizadas Breezair están diseñadas para proyectos únicos donde las soluciones estándar no son suficientes. Nuestro equipo de ingenieros especializados desarrolla sistemas a medida que cumplen con los requisitos más exigentes.',
    series: 'CUSTOM',
    badge: 'PERSONALIZADO',
    slug: 'custom-solutions',
    category: 'specialized',
    image: '/images/breezair-product-4.jpg',
    images: [
      '/images/breezair-product-4.jpg',
      '/images/breezair-custom-engineering.jpg',
      '/images/breezair-custom-installation.jpg',
      '/images/breezair-custom-monitoring.jpg'
    ],
    features: [
      'Diseño 100% personalizado según necesidades específicas',
      'Ingeniería especializada y validación completa incluida',
      'Integración seamless con procesos industriales existentes',
      'Materiales especiales y construcción a medida disponible',
      'Certificaciones específicas por industria y aplicación',
      'Soporte técnico dedicado 24/7 durante toda la vida útil',
      'Modelado CFD y simulación térmica incluidos',
      'Protocolos de validación y comisionado personalizados'
    ],
    specs: {
      capacity: 'Variable según diseño específico',
      efficiency: 'Hasta 90% (optimizado por aplicación)',
      powerConsumption: 'Optimizado para cada proyecto',
      coverageArea: 'Sin límites - diseño modular escalable',
      noiseLevel: 'Personalizable según requerimientos',
      waterConsumption: 'Según especificaciones del proyecto',
      dimensions: 'Diseño a medida',
      weight: 'Variable según configuración',
      voltage: 'Adaptable a infraestructura existente',
      airThrow: 'Modelado CFD para distribución óptima'
    },
    applications: [
      'Industria Farmacéutica y Biotecnología',
      'Sector Aeroespacial y Defensa',
      'Minería y Procesamiento de Minerales',
      'Industria Petroquímica y Refinería',
      'Salas Limpias Clase ISO',
      'Procesos Críticos de Manufactura'
    ],
    benefits: [
      'Solución única diseñada específicamente para tu proceso',
      'Cumplimiento garantizado con normativas específicas',
      'Máxima eficiencia energética para tu aplicación particular',
      'Integración completa con sistemas de control existentes',
      'Soporte de ingeniería durante todo el ciclo de vida',
      'Garantía extendida hasta 10 años según el proyecto'
    ],
    certifications: ['Por definir según aplicación', 'Validación FDA', 'Certificación ATEX', 'Normas Militares'],
    warranty: 'Hasta 10 años según proyecto',
    installation: 'Ingeniería completa e instalación especializada incluida',
    priceRange: 'Cotización personalizada según proyecto',
    technicalDocs: [
      { name: 'Proceso de Ingeniería', url: '/docs/custom-engineering-process.pdf' },
      { name: 'Casos de Éxito', url: '/docs/custom-case-studies.pdf' },
      { name: 'Solicitud de Proyecto', url: '/docs/custom-project-form.pdf' }
    ]
  }
];

// Generar metadata dinámico para cada producto
export async function generateMetadata({ params }) {
  const product = products.find(p => p.id === params.id);
  
  if (!product) {
    return {
      title: 'Producto no encontrado | Breezair Industrial',
      description: 'El producto solicitado no se encuentra disponible.'
    };
  }

  return {
    title: `${product.title} | Breezair Industrial México`,
    description: `${product.summary} Especificaciones técnicas, aplicaciones y beneficios de la ${product.series} Series. Solicita cotización especializada.`,
    openGraph: {
      title: `${product.title} - Sistemas de Enfriamiento Industrial`,
      description: product.description,
      url: `https://www.breezair.com.mx/productos/${product.id}`,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: `${product.title} - Sistema de enfriamiento evaporativo industrial`
        }
      ]
    },
    alternates: {
      canonical: `https://www.breezair.com.mx/productos/${product.id}`
    }
  };
}

// Generar parámetros estáticos para todas las páginas de productos
export async function generateStaticParams() {
  // En producción, esto haría fetch a tu API para obtener todos los IDs
  return products.map((product) => ({
    id: product.id
  }));
}

// Obtener datos del producto
async function getProduct(id) {
  try {
    // Simular delay de API
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // En producción, harías fetch a tu API:
    // const response = await fetch(`https://api.breezair.com.mx/products/${id}`, {
    //   next: { revalidate: 3600 }
    // });
    // return response.json();
    
    const product = products.find(p => p.id === id);
    if (!product) {
      throw new Error('Product not found');
    }
    
    return product;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

// Obtener productos relacionados
async function getRelatedProducts(currentProductId, category) {
  const related = products
    .filter(p => p.id !== currentProductId && (p.category === category || products.length <= 3))
    .slice(0, 2);
  
  return related;
}

export default async function ProductDetailPage({ params }) {
  const [product, relatedProducts] = await Promise.all([
    getProduct(params.id),
    getRelatedProducts(params.id, 'industrial')
  ]);

  // Si no se encuentra el producto, mostrar 404
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Producto no encontrado</h1>
          <p className="text-gray-600 mb-8">El producto que buscas no existe o ha sido movido.</p>
          <Link href="/productos" className="btn-premium btn-premium-primary">
            Ver Todos los Productos
          </Link>
        </div>
      </div>
    );
  }

  // Structured Data para el producto
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.title,
    "description": product.description,
    "brand": {
      "@type": "Brand",
      "name": "Breezair"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "CG International"
    },
    "image": product.images,
    "category": "Equipos de Climatización Industrial",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "USD",
      "priceRange": product.priceRange,
      "seller": {
        "@type": "Organization",
        "name": "CG International",
        "url": "https://www.breezair.com.mx"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
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
        "name": "Productos",
        "item": "https://www.breezair.com.mx/productos"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": product.title,
        "item": `https://www.breezair.com.mx/productos/${product.id}`
      }
    ]
  };

  return (
    <div>
      <StructuredData data={productSchema} />
      <StructuredData data={breadcrumbSchema} />

      {/* Hero Section del Producto */}
      <section className="relative overflow-hidden pt-20 md:pt-24">

        <div className="container mx-auto px-4 py-16 lg:py-20 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Imagen del Producto */}
            <div className="relative">
              <div className="relative rounded-2xl p-4 shadow-lg border border-gray-200">
                <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-50">
                  {product.badge && (
                    <div className="absolute top-4 left-4 z-10 inline-flex items-center px-3 py-1 border border-blue-600 text-blue-600 rounded-full text-sm font-semibold">
                      {product.badge}
                    </div>
                  )}
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>

            {/* Información del Producto */}
            <div className="space-y-8">
              {/* Header */}
              <div className="space-y-6">
                {/* Badge */}
                {product.badge && (
                  <div className="inline-flex items-center px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-full text-sm font-semibold">
                    {product.badge}
                  </div>
                )}
                
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                    {product.title}
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                    {product.description}
                  </p>
                </div>
              </div>
                
              {/* Especificaciones Clave Mejoradas */}
              <div className="grid grid-cols-2 gap-4">
                <div className="group relative">
                  <div className="relative flex items-center gap-4 p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 border-2 border-blue-600 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Capacidad</div>
                      <div className="text-xl font-bold text-gray-900">{product.specs.capacity}</div>
                    </div>
                  </div>
                </div>

                <div className="group relative">
                  <div className="relative flex items-center gap-4 p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 border-2 border-green-600 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Eficiencia</div>
                      <div className="text-xl font-bold text-gray-900">{product.specs.efficiency}</div>
                    </div>
                  </div>
                </div>

                <div className="group relative">
                  <div className="relative flex items-center gap-4 p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 border-2 border-yellow-600 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Ruido</div>
                      <div className="text-xl font-bold text-gray-900">{product.specs.noiseLevel}</div>
                    </div>
                  </div>
                </div>

                <div className="group relative">
                  <div className="relative flex items-center gap-4 p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 border-2 border-purple-600 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Cobertura</div>
                      <div className="text-xl font-bold text-gray-900">{product.specs.coverageArea}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTAs Mejorados */}
              <div className="rounded-2xl p-8 shadow-lg border border-gray-200">
                <div className="text-center mb-6">
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Garantía Incluida</div>
                  <div className="text-3xl font-bold text-blue-600">{product.warranty}</div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={`https://api.whatsapp.com/send/?phone=5255591975333&text=Hola%2C+estoy+en+breezair.com.mx+y+me+interesa+cotizar+el+${encodeURIComponent(product.title)}.&type=phone_number&app_absent=0`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-green-600 text-green-600 hover:text-white hover:bg-green-600 rounded-xl font-semibold transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    <span>Cotizar por WhatsApp</span>
                  </a>
                  <Link 
                    href="/contacto" 
                    className="group flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 text-gray-800 rounded-xl font-semibold border-2 border-gray-300 hover:border-gray-400 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contacto Directo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Características y Beneficios - Tabla Comparativa */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Características y Beneficios
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Descubre por qué la {product.series} Series es la elección preferida para aplicaciones industriales exigentes.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              {/* Header de la tabla */}
              <div className="border-b border-gray-200 p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 border-2 border-blue-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Análisis Completo del Producto</h3>
                    <p className="text-gray-600">Características técnicas y beneficios operacionales</p>
                  </div>
                </div>
              </div>
              
              {/* Tabla responsive */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left p-6 font-semibold text-gray-900 text-lg bg-gray-50">Aspecto</th>
                      <th className="text-left p-6 font-semibold text-gray-900 text-lg">Característica Técnica</th>
                      <th className="text-left p-6 font-semibold text-gray-900 text-lg">Beneficio Operacional</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {product.features.map((feature, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                        <td className="p-6 font-medium text-gray-900 bg-gray-25">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 border border-blue-600 rounded-lg flex items-center justify-center">
                              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-sm font-medium">
                              {index === 0 && "Diseño"}
                              {index === 1 && "Filtración"}
                              {index === 2 && "Durabilidad"}
                              {index === 3 && "Control"}
                              {index === 4 && "Instalación"}
                              {index === 5 && "Integración"}
                              {index === 6 && "Configuración"}
                              {index >= 7 && "Adicional"}
                            </span>
                          </div>
                        </td>
                        <td className="p-6 text-gray-700 leading-relaxed">
                          {feature}
                        </td>
                        <td className="p-6">
                          <div className="flex items-start gap-3">
                            <div className="w-5 h-5 border border-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-gray-700 leading-relaxed">
                              {product.benefits[index] || "Mayor eficiencia operacional y reducción de costos de mantenimiento"}
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Resumen de ventajas competitivas */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 border-2 border-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Alta Eficiencia</h4>
                <p className="text-gray-600">Hasta {product.specs.efficiency} de eficiencia energética comprobada</p>
              </div>
              
              <div className="text-center p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 border-2 border-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Ahorro Garantizado</h4>
                <p className="text-gray-600">Reducción de costos operativos del 60-80% vs. sistemas tradicionales</p>
              </div>
              
              <div className="text-center p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 border-2 border-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Confiabilidad</h4>
                <p className="text-gray-600">{product.warranty} de garantía con soporte técnico especializado</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Especificaciones Técnicas Completas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Especificaciones Técnicas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Información técnica detallada para ingenieros y especificadores.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="relative rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                {/* Header */}
                <div className="border-b border-gray-200 p-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 border-2 border-gray-400 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{product.title}</h3>
                      <p className="text-gray-600">Especificaciones Técnicas Completas</p>
                    </div>
                  </div>
                </div>
                
                {/* Specifications Grid */}
                <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Column 1 */}
                    <div className="space-y-6">
                      <div className="group p-4 rounded-xl hover:shadow-sm transition-shadow duration-200">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 border border-blue-600 rounded-lg flex items-center justify-center">
                              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                            </div>
                            <span className="font-medium text-gray-700">Capacidad de Aire</span>
                          </div>
                          <span className="font-bold text-gray-900 text-lg">{product.specs.capacity}</span>
                        </div>
                      </div>

                      <div className="group p-4 rounded-xl hover:bg-green-50 transition-colors duration-200">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <span className="font-medium text-gray-700">Eficiencia Energética</span>
                          </div>
                          <span className="font-bold text-green-600 text-lg">{product.specs.efficiency}</span>
                        </div>
                      </div>

                      <div className="group p-4 rounded-xl hover:bg-amber-50 transition-colors duration-200">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                              <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <span className="font-medium text-gray-700">Consumo Eléctrico</span>
                          </div>
                          <span className="font-bold text-gray-900 text-lg">{product.specs.powerConsumption}</span>
                        </div>
                      </div>

                      <div className="group p-4 rounded-xl hover:bg-purple-50 transition-colors duration-200">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                              <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                              </svg>
                            </div>
                            <span className="font-medium text-gray-700">Área de Cobertura</span>
                          </div>
                          <span className="font-bold text-gray-900 text-lg">{product.specs.coverageArea}</span>
                        </div>
                      </div>

                      <div className="group p-4 rounded-xl hover:bg-red-50 transition-colors duration-200">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                              <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M9.879 9.879L4.05 15.706a1 1 0 101.414 1.414l5.829-5.828A1 1 0 009.88 9.88z" />
                              </svg>
                            </div>
                            <span className="font-medium text-gray-700">Nivel de Ruido</span>
                          </div>
                          <span className="font-bold text-gray-900 text-lg">{product.specs.noiseLevel}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Column 2 */}
                    <div className="space-y-6">
                      <div className="group p-4 rounded-xl hover:bg-cyan-50 transition-colors duration-200">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center">
                              <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                              </svg>
                            </div>
                            <span className="font-medium text-gray-700">Consumo de Agua</span>
                          </div>
                          <span className="font-bold text-gray-900 text-lg">{product.specs.waterConsumption}</span>
                        </div>
                      </div>

                      <div className="group p-4 rounded-xl hover:bg-indigo-50 transition-colors duration-200">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                              <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4m-4 0l5.29 5.29m11.42 5.42L15.29 10.29M20 4v4m0-4h-4m4 0l-5.29 5.29M4 16v4m0 0h4m-4 0l5.29-5.29M20 20v-4m0 4h-4m4 0l-5.29-5.29" />
                              </svg>
                            </div>
                            <span className="font-medium text-gray-700">Dimensiones</span>
                          </div>
                          <span className="font-bold text-gray-900 text-lg">{product.specs.dimensions}</span>
                        </div>
                      </div>

                      <div className="group p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16l3-1m-3 1l-3-1" />
                              </svg>
                            </div>
                            <span className="font-medium text-gray-700">Peso</span>
                          </div>
                          <span className="font-bold text-gray-900 text-lg">{product.specs.weight}</span>
                        </div>
                      </div>

                      <div className="group p-4 rounded-xl hover:bg-yellow-50 transition-colors duration-200">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                              <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                            </div>
                            <span className="font-medium text-gray-700">Voltaje</span>
                          </div>
                          <span className="font-bold text-gray-900 text-lg">{product.specs.voltage}</span>
                        </div>
                      </div>

                      <div className="group p-4 rounded-xl hover:bg-emerald-50 transition-colors duration-200">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                              <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                              </svg>
                            </div>
                            <span className="font-medium text-gray-700">Alcance de Aire</span>
                          </div>
                          <span className="font-bold text-gray-900 text-lg">{product.specs.airThrow}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aplicaciones */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Aplicaciones Ideales
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              La {product.series} Series ha sido probada y validada en estas industrias y aplicaciones.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.applications.map((application, index) => {
              // Array de iconos únicos para cada aplicación
              const icons = [
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />,
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />,
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />,
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />,
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />,
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              ];

              const colors = [
                'from-blue-500 to-indigo-600',
                'from-green-500 to-emerald-600', 
                'from-purple-500 to-violet-600',
                'from-red-500 to-rose-600',
                'from-yellow-500 to-orange-600',
                'from-cyan-500 to-teal-600',
                'from-pink-500 to-fuchsia-600',
                'from-slate-500 to-gray-600'
              ];

              return (
                <div key={index} className="group relative">
                  <div className="relative rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
                    <div className={`w-16 h-16 border-2 border-gray-400 rounded-2xl flex items-center justify-center mb-6 transition-shadow duration-300`}>
                      <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {icons[index % icons.length]}
                      </svg>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                      {application}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Optimizado para las exigencias específicas de este sector industrial con tecnología avanzada.
                    </p>
                    
                    <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                      <span className="text-sm">Más información</span>
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Productos Relacionados */}
      {relatedProducts.length > 0 && (
        <section className="section-premium bg-gray-50">
          <div className="container-premium">
            <div className="text-center mb-16">
              <h2 className="heading-premium-2 text-steel-dark mb-6">También Te Puede Interesar</h2>
              <p className="text-premium-products text-steel-light max-w-3xl mx-auto">
                Otras soluciones Breezair que podrían ser perfectas para tu proyecto.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/productos/${relatedProduct.id}`}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group"
                >
                  <div className="relative aspect-video bg-gray-50">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.title}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-steel-dark mb-2">{relatedProduct.title}</h3>
                    <p className="text-steel-light mb-4">{relatedProduct.summary}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-600 font-semibold">Ver Detalles</span>
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Final */}
      <section className="relative overflow-hidden py-20 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            ¿Listo para Implementar {product.shortTitle} en tu Proyecto?
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Nuestros ingenieros especialistas pueden realizar un análisis técnico gratuito de tu instalación 
            y diseñar la solución óptima con {product.title}.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`https://api.whatsapp.com/send/?phone=5255591975333&text=Hola%2C+estoy+en+breezair.com.mx+y+me+interesa+un+an%C3%A1lisis+t%C3%A9cnico+para+${encodeURIComponent(product.title)}.&type=phone_number&app_absent=0`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-xl font-semibold transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              Análisis Técnico por WhatsApp
            </a>
            
            <Link 
              href="/contacto" 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-gray-400 text-gray-600 hover:border-gray-600 hover:text-gray-800 rounded-xl font-semibold transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contacto Tradicional
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}