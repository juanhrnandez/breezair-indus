/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimizaciones para SEO y rendimiento
  output: 'standalone', // Para mejor despliegue con ISR
  
  // Configuración de generación estática
  trailingSlash: true,
  
  // Configuración de ISR global
  experimental: {
    staticGenerationMaxConcurrency: 4, // Paralelizar generación estática
    staticGenerationRetryCount: 3,
    optimizePackageImports: ['@tailwindcss/forms', 'framer-motion']
  },
  
  // Configuración de imágenes para mejor rendimiento
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Habilitar compresión
  compress: true,
  
  // Optimizar para producción
  poweredByHeader: false,

  // Configurar headers para SEO
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
