import React, { useState, useEffect } from 'react';
import { useStore } from '../../context/StoreContext';
import { ArrowRight, Sparkles, Compass } from 'lucide-react';

const HERO_SAREE_IMAGES = [
  {
    url: '/nagerbazar_studio_saree.jpg',
    title: 'Authentic Tussar & Cotton Block Print Sarees'
  },
  {
    url: '/ajrakh_suit_set.jpg',
    title: 'Crimson Ajrakh & Natural Dye Collections'
  },
  {
    url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1600',
    title: 'Intricate Handloom Weaves & Traditional Borders'
  },
  {
    url: '/hand_block_carving.jpg',
    title: 'Master Craftsman Wood Block Stamping'
  }
];

export const Hero: React.FC = () => {
  const { navigateTo, settings } = useStore();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SAREE_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-[#241010] text-white py-20 px-4 sm:px-6 lg:px-8">
      {/* Background Saree Image Slideshow */}
      {HERO_SAREE_IMAGES.map((item, index) => (
        <div
          key={item.url}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-70 scale-105' : 'opacity-0 scale-100'
          } transform transition-transform duration-[7000ms]`}
        >
          <img
            src={item.url}
            alt={item.title}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}

      {/* Rich Warm Vignette & Overlay for High Contrast Legibility */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#1F1C1B] via-black/55 to-black/60"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#C89B54_1px,transparent_1px)] [background-size:24px_24px] opacity-15"></div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 animate-fadeIn">
        
        {/* Established Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8E2A2A]/90 border border-[#C89B54]/50 text-amber-100 text-xs font-semibold uppercase tracking-widest backdrop-blur-md shadow-xl">
          <Sparkles className="w-3.5 h-3.5 text-[#C89B54]" />
          <span>Karuna Woven with Dream • Kolkata</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] drop-shadow-lg">
          {settings.heroHeading}
        </h1>

        {/* Supporting Copy */}
        <p className="text-base sm:text-xl text-[#F5EFE6] font-light max-w-2xl mx-auto leading-relaxed drop-shadow-md">
          {settings.heroSubtext}
        </p>

        {/* Primary & Secondary Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => navigateTo('shop')}
            className="w-full sm:w-auto bg-[#8E2A2A] hover:bg-[#A03333] text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 shadow-2xl transition-all transform hover:-translate-y-0.5 border border-amber-200/30"
          >
            <span>Shop Collection</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => navigateTo('our-story')}
            className="w-full sm:w-auto bg-white/15 hover:bg-white/25 text-white backdrop-blur-md px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 border border-white/40 transition-all shadow-lg"
          >
            <Compass className="w-4 h-4 text-[#C89B54]" />
            <span>Explore Our Craft</span>
          </button>
        </div>

        {/* Slideshow Controls Indicator */}
        <div className="flex items-center justify-center gap-2 pt-2">
          {HERO_SAREE_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                idx === currentSlide ? 'w-8 bg-[#C89B54]' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Highlights Bar */}
        <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center border-t border-white/20 text-xs text-amber-100 font-medium">
          <div>Hand Wooden Block Print</div>
          <div>Freehand Kalamkari</div>
          <div>Handloom Silk & Cotton</div>
          <div>Custom & Wholesale Job Work</div>
        </div>
      </div>
    </section>
  );
};
