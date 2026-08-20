import React from 'react';
import { CRAFT_PROCESS_STEPS } from '../../data/initialData';
import { Layers, Sparkles } from 'lucide-react';

export const CraftProcess: React.FC = () => {
  return (
    <section className="py-20 bg-[#1F1C1B] text-white overflow-hidden relative border-b border-[#383330]">
      {/* Background Indian Motif */}
      <div className="absolute inset-0 bg-[radial-gradient(#C89B54_1px,transparent_1px)] [background-size:28px_28px] opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C89B54]">
            <Layers className="w-4 h-4" />
            <span>Behind The Scenes</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            The Craft Process
          </h2>
          <p className="text-xs sm:text-sm text-[#B5A899] leading-relaxed">
            From raw natural fabric to finished wearable art — every piece passes through five painstaking handcraft stages in our Kolkata workshop.
          </p>
        </div>

        {/* Process Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CRAFT_PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-[#2A2624] rounded-2xl p-6 border border-[#3D3734] hover:border-[#C89B54]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Step Image & Number Header */}
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-black/40">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#8E2A2A] text-white font-serif font-bold text-xs px-3 py-1 rounded-full border border-amber-200/30">
                    Step {step.step}
                  </div>
                </div>

                <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#C89B54] transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-[#B5A899] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#383330] flex items-center justify-between text-[11px] text-amber-200/80 font-medium">
                <span>Handmade in Kolkata</span>
                <Sparkles className="w-3.5 h-3.5 text-[#C89B54]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
