import React from 'react';
import { useStore } from '../../context/StoreContext';
import { MapPin, Phone, Clock, MessageCircle, Heart, Mail } from 'lucide-react';
import { InstagramIcon } from '../common/InstagramIcon';

export const Footer: React.FC = () => {
  const { navigateTo, settings, getWhatsAppLink } = useStore();

  return (
    <footer className="bg-[#1F1C1B] text-[#E6DDD0] pt-16 pb-8 border-t border-[#383330] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#383330]">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#C89B54] overflow-hidden bg-white shadow-md shrink-0">
                <img src={settings.avatarUrl || '/profile_picture.jpg'} alt="Karuna Woven with Dream" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-white tracking-wide">
                  Karuna Woven with Dream
                </h3>
              </div>
            </div>

            <p className="text-xs text-[#B5A899] leading-relaxed pr-4">
              {settings.bio || "✨Experience the timeless elegance of the saree, a symbol of Indian tradition and a celebration of feminine charm with Karuna Woven with Dream."}
            </p>

            <div className="space-y-2 text-xs text-[#D5C9B8]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C89B54] shrink-0 mt-0.5" />
                <span>{settings.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#C89B54] shrink-0" />
                <span>{settings.businessHours}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C89B54] shrink-0" />
                <span>{settings.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C89B54] shrink-0" />
                <span>{settings.email || 'karuna.wovenwithdream@gmail.com'}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://instagram.com/${settings.instagramHandle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#383330] hover:bg-[#8E2A2A] text-white flex items-center justify-center transition-colors shadow-sm"
                title="Follow us on Instagram @woven_with_dream"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#383330] hover:bg-emerald-700 text-white flex items-center justify-center transition-colors shadow-sm"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-semibold text-white tracking-wider border-b border-[#383330] pb-2">
              Shop Collections
            </h4>
            <ul className="space-y-2 text-xs text-[#B5A899]">
              <li>
                <button onClick={() => navigateTo('shop')} className="hover:text-[#C89B54] transition-colors">
                  Kurtis & Tunics
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('shop')} className="hover:text-[#C89B54] transition-colors">
                  Tussar & Silk Sarees
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('shop')} className="hover:text-[#C89B54] transition-colors">
                  Mulmul & Silk Fabrics
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('shop')} className="hover:text-[#C89B54] transition-colors">
                  Ready-to-Wear Suits
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('shop')} className="hover:text-[#C89B54] transition-colors">
                  Hand-Painted Dupattas
                </button>
              </li>
            </ul>
          </div>

          {/* Craft Techniques Column */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-semibold text-white tracking-wider border-b border-[#383330] pb-2">
              Our Crafts
            </h4>
            <ul className="space-y-2 text-xs text-[#B5A899]">
              <li>
                <button onClick={() => navigateTo('shop')} className="hover:text-[#C89B54] transition-colors">
                  Block Printing
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('shop')} className="hover:text-[#C89B54] transition-colors">
                  Hand Painting
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('shop')} className="hover:text-[#C89B54] transition-colors">
                  Hand Wax Batik
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('shop')} className="hover:text-[#C89B54] transition-colors">
                  Kalamkari Work
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('shop')} className="hover:text-[#C89B54] transition-colors">
                  Dyeing & Texturing
                </button>
              </li>
            </ul>
          </div>

          {/* Business & Custom Services */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-semibold text-white tracking-wider border-b border-[#383330] pb-2">
              Business & Services
            </h4>
            <ul className="space-y-2 text-xs text-[#B5A899]">
              <li>
                <button onClick={() => navigateTo('custom-work')} className="hover:text-[#C89B54] transition-colors font-medium text-amber-200">
                  Custom & Job Work →
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('wholesale')} className="hover:text-[#C89B54] transition-colors">
                  Wholesale & Bulk Orders
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('our-story')} className="hover:text-[#C89B54] transition-colors">
                  Our Kolkata Story (Since 2007)
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('contact')} className="hover:text-[#C89B54] transition-colors">
                  Contact Us & Workshop Map
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('admin')} className="hover:text-[#C89B54] transition-colors text-amber-100/70">
                  Admin Panel Login
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Copyright & Tagline */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A7E72]">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Karuna Woven with Dream. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-1">
            <span>Made with patience & character in Kolkata</span>
            <Heart className="w-3.5 h-3.5 text-[#8E2A2A] fill-[#8E2A2A]" />
          </div>
        </div>
      </div>
    </footer>
  );
};
