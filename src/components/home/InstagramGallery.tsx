import React from 'react';
import { useStore } from '../../context/StoreContext';
import { INSTAGRAM_POSTS } from '../../data/initialData';
import { Heart, ExternalLink } from 'lucide-react';
import { InstagramIcon } from '../common/InstagramIcon';

export const InstagramGallery: React.FC = () => {
  const { settings } = useStore();

  return (
    <section className="py-20 bg-[#F5EFE6] text-[#1F1C1B] border-b border-[#E6DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#8E2A2A]">
            <InstagramIcon className="w-4 h-4 text-[#8E2A2A]" />
            <span>@{settings.instagramHandle}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1C1B]">
            From Karuna's Studio to Your Wardrobe
          </h2>
          <p className="text-xs sm:text-sm text-[#6E645A]">
            ✨ Experience the timeless elegance of the saree and handcrafted textiles on Instagram @{settings.instagramHandle}.
          </p>
        </div>

        {/* 6 Grid Images */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href="https://www.instagram.com/woven_with_dream/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-xl overflow-hidden bg-gray-200 border border-[#E6DDD0] shadow-sm"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3 text-white">
                <span className="text-[9px] uppercase font-bold text-[#C89B54]">
                  {post.type}
                </span>
                <p className="text-[10px] line-clamp-3 leading-tight text-gray-200">
                  {post.caption}
                </p>
                <div className="flex items-center justify-between text-[10px] pt-1 border-t border-white/20">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3 h-3 text-red-500 fill-red-500" /> {post.likes}
                  </span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Follow Button CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://www.instagram.com/woven_with_dream/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#8E2A2A] hover:bg-[#722020] text-white px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest shadow-md transition-all"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Follow @{settings.instagramHandle}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
