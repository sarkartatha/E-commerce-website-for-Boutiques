import React from 'react';
import { useStore } from '../../context/StoreContext';
import { Sparkles, Calendar } from 'lucide-react';

export const OurStoryPage: React.FC = () => {
  const { navigateTo } = useStore();

  const timelineEntries = [
    {
      year: '2007',
      title: 'Bahari Begins in Kolkata',
      description: 'Bahari Block & Hand Painting Unit is established in Mukundapur, Kolkata with a small team of passionate Bengal wood-block printing craftsmen and hand painters.'
    },
    {
      year: '2012',
      title: 'Expansion into Hand Wax Batik & Natural Dyes',
      description: 'Introduced traditional hot-wax batik crackle techniques and vegetable dye texturing, combining ancestral methods with modern ethnic silhouettes.'
    },
    {
      year: '2018',
      title: 'Custom Job Work & Boutique Wholesale Division',
      description: 'Launched dedicated job work services for fashion labels, boutique owners, and retail clients providing custom printing on customer-supplied fabrics.'
    },
    {
      year: '2024 - Present',
      title: 'Digital Storefront & Global Artisan Reach',
      description: 'Expanding Kolkata’s handcraft heritage to textile lovers across India and internationally while upholding our founding pledge: "Every piece made with craft, patience and character."'
    }
  ];

  return (
    <div className="bg-[#FAF6F0] min-h-screen py-12 px-4 sm:px-6 lg:px-8 text-[#1F1C1B]">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Story Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8E2A2A] text-white text-xs font-bold uppercase tracking-widest border border-amber-200/30">
            <Sparkles className="w-3.5 h-3.5 text-[#C89B54]" />
            <span>Kolkata Craft Heritage</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#1F1C1B]">
            Since 2007, We've Been Beautifying Textiles.
          </h1>
          <p className="text-xs sm:text-base text-[#6E645A] leading-relaxed">
            Every block stamp, brush stroke, and wax crackle tells the story of human rhythm, Bengal traditions, and patient craftsmanship.
          </p>
        </div>

        {/* Feature Story Grid */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E6DDD0] shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4 text-xs sm:text-sm text-[#5E564E] leading-relaxed">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1C1B]">
              The Heart of Bahari
            </h2>
            <p>
              Located at 16A Vivekananda Park in Mukundapur, Kolkata, Bahari was born out of a deep reverence for West Bengal’s textile legacy. In an era dominated by rapid mass manufacturing, we chose the slower, more soulful path of hand block carving, freehand Kalamkari painting, and organic dyeing.
            </p>
            <p>
              Our workshop is not a factory. It is a living atelier where veteran master block carvers, young painters, and dyeing specialists collaborate daily. When you wear a Bahari saree or kurti, you wear days of focused human artistry.
            </p>
          </div>

          <div className="lg:col-span-6 rounded-2xl overflow-hidden shadow-md border border-[#E6DDD0]">
            <img
              src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=800"
              alt="Artisan hand painting silk"
              className="w-full h-[320px] object-cover"
            />
          </div>
        </div>

        {/* Interactive Timeline */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8E2A2A]">
              Our Journey Through Time
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#1F1C1B]">
              Heritage Timeline
            </h2>
          </div>

          <div className="relative border-l-2 border-[#8E2A2A] ml-4 sm:ml-32 space-y-10 pl-6 sm:pl-10 py-4">
            {timelineEntries.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Bullet */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#8E2A2A] text-white flex items-center justify-center text-[10px] font-bold shadow border-2 border-white">
                  {idx + 1}
                </div>

                <div className="bg-white p-6 rounded-2xl border border-[#E6DDD0] shadow-sm space-y-2">
                  <span className="text-xs font-bold text-[#8E2A2A] uppercase tracking-widest inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" /> {item.year}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#1F1C1B]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#6E645A] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Explore Shop */}
        <div className="bg-[#1F1C1B] text-white rounded-3xl p-8 sm:p-12 text-center space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold">
            Experience Kolkata Craftsmanship Today
          </h3>
          <p className="text-xs text-[#E6DDD0] max-w-xl mx-auto">
            Discover our latest collection of hand block prints, Kalamkari kurtis, and pure silk sarees.
          </p>
          <button
            onClick={() => navigateTo('shop')}
            className="bg-[#8E2A2A] hover:bg-[#A03333] text-white px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest shadow-lg"
          >
            Shop Collection
          </button>
        </div>
      </div>
    </div>
  );
};
