'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function ProductImageGallery({ images, title, badge }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  return (
    <div className="space-y-4">
      {/* Imagen Principal */}
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-xl">
        <Image
          src={images[activeImageIndex] || images[0]}
          alt={`${title} - Vista ${activeImageIndex + 1}`}
          fill
          className="object-cover transition-all duration-500"
          priority
        />
        {badge && (
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-600 text-white shadow-lg">
              {badge}
            </span>
          </div>
        )}
        
        {/* Indicador de imagen actual */}
        <div className="absolute bottom-4 right-4">
          <span className="bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
            {activeImageIndex + 1} / {images.length}
          </span>
        </div>
        
        {/* Controles de navegación */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => setActiveImageIndex(prev => prev > 0 ? prev - 1 : images.length - 1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-110"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setActiveImageIndex(prev => prev < images.length - 1 ? prev + 1 : 0)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-110"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>
      
      {/* Thumbnails Mejorados */}
      <div className="grid grid-cols-4 gap-3">
        {images.map((img, index) => (
          <div 
            key={index} 
            className={`relative aspect-square rounded-lg overflow-hidden cursor-pointer transition-all duration-200 ${
              activeImageIndex === index 
                ? 'ring-3 ring-blue-500 ring-offset-2 shadow-lg scale-105' 
                : 'hover:scale-105 hover:shadow-md opacity-80 hover:opacity-100'
            }`}
            onClick={() => setActiveImageIndex(index)}
          >
            <Image
              src={img}
              alt={`${title} vista ${index + 1}`}
              fill
              className="object-cover"
            />
            {activeImageIndex === index && (
              <div className="absolute inset-0 bg-blue-500/10 backdrop-blur-[0.5px]"></div>
            )}
          </div>
        ))}
      </div>
      
      {/* Información de la imagen actual */}
      <div className="bg-gray-50 rounded-lg p-4">
        <p className="text-sm text-gray-600 font-medium">
          Vista {activeImageIndex + 1}: {getImageDescription(activeImageIndex, title)}
        </p>
      </div>
    </div>
  );
}

// Función para generar descripciones dinámicas de las imágenes
function getImageDescription(index, productTitle) {
  const descriptions = [
    `${productTitle} - Vista frontal completa`,
    `${productTitle} - Detalles técnicos y construcción`,
    `${productTitle} - Vista lateral y dimensiones`,
    `${productTitle} - Interior y componentes`
  ];
  return descriptions[index] || `${productTitle} - Vista adicional`;
}