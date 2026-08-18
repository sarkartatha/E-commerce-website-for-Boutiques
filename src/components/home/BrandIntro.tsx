import React from 'react';
import { useStore } from '../../context/StoreContext';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const BrandIntro: React.FC = () => {
  const { navigateTo } = useStore();

  return (
    <section className="py-20 bg-[#FAF6F0] text-[#1F1C1B] relative overflow-hidden border-b border-[#E6DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Workshop Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              <img
                src="https://images.unsplash.com/photo-1606744888344-49423b812d02?auto=format&fit=crop&q=80&w=1000"
                alt="Bahari Artisan Block Printing on Fabric in Kolkata"
                className="w-full h-[420px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C89B54]">
                  Mukundapur Workshop, Kolkata
                </span>
                <p className="font-serif text-lg font-semibold mt-0.5">
                  "Every block stamp carries human rhythm, patience, and character."
                </p>
              </div>
            </div>

            {/* Decorative Offset Frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#8E2A2A]/30 rounded-2xl -z-0 hidden sm:block"></div>
            
            {/* 2007 Stamp Badge */}
            <div className="absolute -top-6 -left-6 bg-[#8E2A2A] text-white p-4 rounded-2xl shadow-xl z-20 hidden sm:flex flex-col items-center justify-center border border-amber-200/30">
              <span className="text-2xl font-bold font-serif leading-none">2007</span>
              <span className="text-[9px] uppercase tracking-wider text-amber-200 mt-1 font-sans">Established</span>
            </div>
          </div>

          {/* Text Story Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#8E2A2A] uppercase tracking-widest block">
                The Heritage of Bahari
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1C1B] leading-tight">
                Crafted by Hand.<br />Inspired by Tradition.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#5E564E] leading-relaxed">
              Based in Mukundapur, Kolkata, <strong>Bahari Block & Hand Painting Unit</strong> has been beautifying Indian textiles since 2007. We bring together century-old artisan techniques — wood block printing, freehand Kalamkari brushwork, hand-wax batik resist, vegetable dyeing, and texture treatments — into wearable pieces of living art.
            </p>

            <p className="text-sm sm:text-base text-[#5E564E] leading-relaxed">
              Whether it’s a pure Tussar silk saree, a soft handloom kurti, or custom job work on your own fabric, we honour the human element behind every thread.
            </p>

            {/* Key Service Highlights */}
            <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-semibold text-[#1F1C1B]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8E2A2A]" />
                <span>Wood Block Printing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8E2A2A]" />
                <span>Freehand Kalamkari Work</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8E2A2A]" />
                <span>Hand-Wax Batik Techniques</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8E2A2A]" />
                <span>Custom & Job Printing</span>
              </div>
            </div>

            {/* Story CTA */}
            <div className="pt-4">
              <button
                onClick={() => navigateTo('our-story')}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#8E2A2A] hover:text-[#722020] transition-colors border-b-2 border-[#8E2A2A] pb-1"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
