
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { IMAGES } from '../constants';

export const Gallery: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-4 text-gray-800">Resultados Reais</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto italic">
          "A beleza do sorriso está na naturalidade e na harmonia dos detalhes."
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {IMAGES.results.map((src, index) => (
            <div 
              key={index}
              onClick={() => setSelectedImg(src)}
              className="aspect-square overflow-hidden rounded-xl cursor-pointer hover:opacity-90 transition-opacity shadow-md border border-white"
            >
              <img 
                src={src} 
                alt={`Resultado ${index + 1}`} 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        
        <p className="text-xs text-gray-400 text-center mt-6 uppercase tracking-widest">
          Resultados podem variar de pessoa para pessoa.
        </p>
      </div>

      {/* Simple Lightbox */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 transition-all"
          onClick={() => setSelectedImg(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white p-2 bg-white/10 rounded-full"
            onClick={() => setSelectedImg(null)}
          >
            <X size={24} />
          </button>
          <img 
            src={selectedImg} 
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl" 
            alt="Resultado em destaque" 
          />
        </div>
      )}
    </section>
  );
};
