# 🏭 Breezair Industrial México

Sitio web corporativo para CG International, distribuidor oficial de sistemas de enfriamiento evaporativo Breezair en México.

## 🚀 Características
a
### ✨ Diseño y UXs
- **Diseño Industrial Moderno**: Paleta de colores profesionales y elementos visuales que reflejan la industria
- **Responsive Design**: Optimizado para desktop, tablet y móvil
- **Animaciones Suaves**: Implementadas con Framer Motion para una experiencia fluida
- **Componentes Interactivos**: Hover effects, transiciones y micro-interacciones

### 🔧 Funcionalidades
- **Navegación Moderna**: Header sticky con menú hamburguesa responsive
- **Hero Dinámico**: Sección principal con gradientes, animaciones y CTAs llamativos
- **Catálogo de Productos**: Tarjetas de productos con especificaciones y badges
- **Testimonios Reales**: Carousel de testimonios con avatares y ratings
- **Formulario Avanzado**: Validación en tiempo real y estados de loading
- **Footer Completo**: Multiple columnas, newsletter y enlaces sociales

### 🛠 Tecnologías

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Animaciones**: Framer Motion 11
- **Formularios**: React hooks con validación
- **Email**: Resend SDK para envío de correos
- **Tipografía**: Inter font via Google Fonts

## ⚡ Instalación y Desarrollo

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Setup
```bash
# Instalar dependencias
npm install

# Configurar variables de entorno (opcional para desarrollo)
# Solo necesario para probar el formulario de contacto
RESEND_API_KEY=your-resend-api-key-here

# Desarrollo
npm run dev
```

### Scripts Disponibles
```bash
npm run dev         # Servidor desarrollo (Turbopack)
npm run build       # Build de producción
npm run start       # Servidor producción
npm run lint        # ESLint check
```

## 📧 Configuración de Email

El formulario de contacto usa **Resend** para envío de emails:

1. Crear cuenta en [Resend](https://resend.com)
2. Generar API key
3. Agregar `RESEND_API_KEY` como variable de entorno
4. Los emails se envían a: `ventas@cg.international` y `soporte@cg.international`

## 🔍 SEO y Metadatos

### Implementado
- ✅ Meta tags dinámicos por página
- ✅ Open Graph completo
- ✅ Twitter Cards
- ✅ Schema.org JSON-LD (Organization, Website, Product)
- ✅ Sitemap XML completo
- ✅ Robots.txt optimizado
- ✅ Canonical URLs

### Keywords Principales
- enfriamiento evaporativo industrial
- Breezair México
- ahorro energético industrial  
- climatización industrial
- CG International

## 🚀 Deployment en Vercel

```bash
# Deploy automático conectando GitHub a Vercel
# O manual:
npm run build
vercel --prod
```

### Variables en Producción
- `RESEND_API_KEY`: API key de Resend (opcional)

## 📞 Contacto

**CG International**
- Email: ventas@cg.international
- Website: https://www.cg.international/
- Teléfono: (55) 5919-7533

---

*Sitio desarrollado con Next.js 15 y Tailwind CSS para la industria mexicana*
