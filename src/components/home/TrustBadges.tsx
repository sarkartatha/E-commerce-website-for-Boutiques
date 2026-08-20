import React from 'react';
import { Award, ShieldCheck, Scissors, PackageCheck, MapPin } from 'lucide-react';

export const TrustBadges: React.FC = () => {
  const badges = [
    {
      icon: Award,
      title: 'Beautifying Since 2007',
      description: 'Over 18 years of artisan textile craftsmanship in Kolkata.'
    },
    {
      icon: ShieldCheck,
      title: '100% Handcrafted',
      description: 'Authentic wood block stamps, freehand painting & batik.'
    },
    {
      icon: Scissors,
      title: 'Custom & Job Work',
      description: 'Bespoke printing and dyeing on customer-supplied fabrics.'
    },
    {
      icon: PackageCheck,
      title: 'Direct Wholesale',
      description: 'Bulk orders for boutiques, designers, and export fashion.'
    },
    {
      icon: MapPin,
      title: 'Kolkata Workshop',
      description: 'Nagerbazar unit open for site visits & custom orders.'
    }
  ];

  return (
    <section className="py-12 bg-[#FAF6F0] border-b border-[#E6DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {badges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-[#E6DDD0] shadow-sm flex items-start gap-4 hover:border-[#8E2A2A]/40 transition-all"
              >
                <div className="p-2.5 rounded-xl bg-[#FAF6F0] text-[#8E2A2A] shrink-0 border border-[#E6DDD0]">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#1F1C1B]">
                    {badge.title}
                  </h4>
                  <p className="text-[11px] text-[#6E645A] leading-snug mt-0.5">
                    {badge.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
