import React from 'react';
import { useStore } from '../../context/StoreContext';
import { ArrowRight, Sparkles, Compass } from 'lucide-react';

export const Hero: React.FC = () => {
  const { navigateTo, settings } = useStore();

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#1F1C1B] text-white py-20 px-4 sm:px-6 lg:px-8">
      {/* Background Editorial Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity transform scale-105 transition-transform duration-1000">
        <img
          src={settings.heroImage}
          alt="Woven With Dream by Karuna Kolkata Saree Craft"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Decorative Indian Textile Pattern Vignette */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#1F1C1B] via-black/50 to-transparent"></div>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#C89B54_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 animate-fadeIn">
        
        {/* Established Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8E2A2A]/80 border border-[#C89B54]/40 text-amber-100 text-xs font-semibold uppercase tracking-widest backdrop-blur-md shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-[#C89B54]" />
          <span>Woven With Dream by Karuna • Kolkata</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] drop-shadow-md">
          {settings.heroHeading}
        </h1>

        {/* Supporting Copy */}
        <p className="text-base sm:text-xl text-[#E6DDD0] font-light max-w-2xl mx-auto leading-relaxed drop-shadow">
          {settings.heroSubtext}
        </p>

        {/* Primary & Secondary Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => navigateTo('shop')}
            className="w-full sm:w-auto bg-[#8E2A2A] hover:bg-[#A03333] text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl transition-all transform hover:-translate-y-0.5 border border-amber-200/20"
          >
            <span>Shop Collection</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => navigateTo('our-story')}
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 border border-white/30 transition-all"
          >
            <Compass className="w-4 h-4 text-[#C89B54]" />
            <span>Explore Our Craft</span>
          </button>
        </div>

        {/* Highlights Bar */}
        <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center border-t border-white/10 text-xs text-amber-100/80 font-medium">
          <div>Hand Wooden Block Print</div>
          <div>Freehand Kalamkari</div>
          <div>Hand Wax Batik Resist</div>
          <div>Custom & Wholesale Job Work</div>
        </div>
      </div>
    </section>
  );
};
