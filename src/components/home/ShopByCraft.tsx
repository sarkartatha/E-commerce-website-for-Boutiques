import React from 'react';
import { useStore } from '../../context/StoreContext';
import { CRAFT_CATEGORIES } from '../../data/initialData';
import { ArrowRight, Palette } from 'lucide-react';

export const ShopByCraft: React.FC = () => {
  const { navigateTo } = useStore();

  return (
    <section className="py-20 bg-[#F5EFE6] text-[#1F1C1B] border-b border-[#E6DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#8E2A2A]">
            <Palette className="w-4 h-4 text-[#C89B54]" />
            <span>Master Artistry</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1C1B]">
            Shop By Craft
          </h2>
          <p className="text-xs sm:text-sm text-[#6E645A] leading-relaxed">
            Explore our traditional Indian textile techniques perfected through decades of artisan practice.
          </p>
        </div>

        {/* 6 Craft Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CRAFT_CATEGORIES.map((craft) => (
            <div
              key={craft.id}
              onClick={() => {
                if (craft.name === 'Custom / Job Work') {
                  navigateTo('custom-work');
                } else {
                  navigateTo('shop');
                }
              }}
              className="group bg-white rounded-2xl overflow-hidden border border-[#E6DDD0] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1"
            >
              {/* Card Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={craft.image}
                  alt={craft.name}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#8E2A2A]">
                  {craft.tagline}
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-serif text-2xl font-bold tracking-tight">
                    {craft.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <p className="text-xs text-[#5E564E] leading-relaxed">
                  {craft.description}
                </p>

                <div className="pt-2 border-t border-[#F0E8DD] flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8E2A2A] group-hover:text-[#722020]">
                    {craft.name === 'Custom / Job Work' ? 'Request Job Work' : 'Explore Collection'}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#FAF6F0] group-hover:bg-[#8E2A2A] group-hover:text-white text-[#8E2A2A] flex items-center justify-center transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
