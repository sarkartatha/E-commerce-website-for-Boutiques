import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { MessageCircle, X } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const { getWhatsAppLink } = useStore();
  const [tooltipOpen, setTooltipOpen] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 group">
      {/* Tooltip Badge */}
      {tooltipOpen && (
        <div className="bg-white border border-[#E6DDD0] text-[#1F1C1B] px-3.5 py-2 rounded-2xl shadow-xl text-xs flex items-center gap-2 animate-bounce">
          <span className="font-medium">Have custom work or order queries?</span>
          <button
            onClick={() => setTooltipOpen(false)}
            className="text-gray-400 hover:text-gray-600 p-0.5"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating CTA Button */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-emerald-600 hover:bg-emerald-700 text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 border-2 border-white"
        title="Chat with Karuna (Woven With Dream) on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white text-emerald-600" />
      </a>
    </div>
  );
};
