
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

interface CTAButtonProps {
  className?: string;
  text?: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({ 
  className = "", 
  text = "Agendar primeira consulta gratuita no WhatsApp" 
}) => {
  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-pulse flex items-center justify-center gap-3 bg-[#5B0D15] hover:bg-[#4A0E0E] text-white font-bold py-5 px-8 rounded-full shadow-xl transition-all w-full text-center text-lg sm:text-xl"
      >
        <MessageCircle size={24} fill="currentColor" />
        {text}
      </a>
      <p className="text-gray-500 text-sm font-medium">
        Resposta rápida • Sem compromisso
      </p>
    </div>
  );
};
