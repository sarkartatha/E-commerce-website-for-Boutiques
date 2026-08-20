import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { ShoppingBag, Heart, Search, Menu, X, Settings, Sparkles, MessageCircle } from 'lucide-react';
import type { ViewState } from '../../types';

export const Navbar: React.FC = () => {
  const {
    activeView,
    navigateTo,
    cartCount,
    wishlist,
    setIsCartOpen,
    searchQuery,
    setSearchQuery,
    settings,
    getWhatsAppLink
  } = useStore();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navLinks: { label: string; view: ViewState }[] = [
    { label: 'Shop', view: 'shop' },
    { label: 'Custom Work', view: 'custom-work' },
    { label: 'Wholesale', view: 'wholesale' },
    { label: 'Our Story', view: 'our-story' },
    { label: 'Contact', view: 'contact' },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigateTo('shop');
      setSearchOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF6F0]/95 backdrop-blur-md border-b border-[#E6DDD0]">
      {/* Top Announcement Bar */}
      <div className="bg-[#8E2A2A] text-white text-xs py-2 px-4 text-center font-medium tracking-wide flex items-center justify-between">
        <div className="hidden md:block w-32"></div>
        <div className="flex items-center justify-center gap-2 mx-auto">
          <Sparkles className="w-3.5 h-3.5 text-[#C89B54] animate-pulse" />
          <span>{settings.announcementText}</span>
        </div>
        <div className="hidden md:flex items-center gap-3 text-[11px] text-amber-100/90">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline flex items-center gap-1"
          >
            <MessageCircle className="w-3 h-3 text-emerald-400" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1F1C1B] hover:text-[#8E2A2A] transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Brand Logo & Emblem */}
          <div
            onClick={() => navigateTo('home')}
            className="cursor-pointer flex items-center gap-3 group"
          >
            {/* Profile Avatar / Emblem matching @woven_with_dream */}
            <div className="relative w-12 h-12 rounded-full border-2 border-[#8E2A2A] overflow-hidden bg-white shadow-sm group-hover:scale-105 transition-transform duration-300">
              <img
                src={settings.avatarUrl || '/profile_picture.jpg'}
                alt="Woven With Dream by Karuna"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold text-[#1F1C1B] tracking-tight group-hover:text-[#8E2A2A] transition-colors leading-none">
                Woven With Dream
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#8E2A2A] font-semibold mt-1">
                by Karuna
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => navigateTo('home')}
              className={`text-sm font-medium transition-colors hover:text-[#8E2A2A] ${
                activeView === 'home' ? 'text-[#8E2A2A] font-semibold border-b-2 border-[#8E2A2A] pb-1' : 'text-[#4A4440]'
              }`}
            >
              Home
            </button>
            {navLinks.map((link) => (
              <button
                key={link.view}
                onClick={() => navigateTo(link.view)}
                className={`text-sm font-medium transition-colors hover:text-[#8E2A2A] ${
                  activeView === link.view ? 'text-[#8E2A2A] font-semibold border-b-2 border-[#8E2A2A] pb-1' : 'text-[#4A4440]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Search Icon */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-[#4A4440] hover:text-[#8E2A2A] transition-colors relative"
              title="Search store"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist Icon */}
            <button
              onClick={() => navigateTo('shop')}
              className="p-2 text-[#4A4440] hover:text-[#8E2A2A] transition-colors relative hidden sm:block"
              title="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#8E2A2A] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Shopping Cart Icon */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-2.5 bg-[#8E2A2A] text-white rounded-full hover:bg-[#722020] transition-colors relative shadow-sm flex items-center justify-center"
              title="Shopping Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#C89B54] text-[#1F1C1B] text-[11px] font-bold rounded-full flex items-center justify-center border-2 border-[#FAF6F0]">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Admin Dashboard Shortcut */}
            <button
              onClick={() => navigateTo('admin')}
              className={`p-2 text-[#4A4440] hover:text-[#8E2A2A] transition-colors ${
                activeView === 'admin' ? 'text-[#8E2A2A]' : ''
              }`}
              title="Admin Settings & Dashboard"
            >
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Expandable Search Drawer */}
      {searchOpen && (
        <div className="bg-[#F3ECE0] border-t border-[#E6DDD0] py-3 px-4 shadow-inner animate-fadeIn">
          <form onSubmit={handleSearchSubmit} className="max-w-2xl mx-auto flex items-center gap-2">
            <input
              type="text"
              placeholder="Search Kurtis, Sarees, Kalamkari, Block prints, Fabrics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white px-4 py-2.5 rounded-full border border-[#D5C9B8] text-sm text-[#1F1C1B] focus:outline-none focus:border-[#8E2A2A]"
              autoFocus
            />
            <button
              type="submit"
              className="bg-[#8E2A2A] text-white px-5 py-2.5 rounded-full text-xs font-semibold hover:bg-[#722020] transition-colors uppercase tracking-wider"
            >
              Search
            </button>
          </form>
        </div>
      )}

      {/* Mobile Sidebar Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/50 flex">
          <div className="bg-[#FAF6F0] w-4/5 max-w-xs h-full p-6 flex flex-col justify-between shadow-2xl animate-slideRight">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#E6DDD0]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full border border-[#8E2A2A] overflow-hidden bg-white">
                    <img src={settings.avatarUrl || '/profile_picture.jpg'} alt="Woven With Dream" className="w-full h-full object-cover" />
                  </div>
                  <span className="font-serif font-bold text-lg">Woven With Dream</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 text-gray-600 hover:text-black"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="mt-6 flex flex-col gap-4">
                <button
                  onClick={() => { navigateTo('home'); setMobileMenuOpen(false); }}
                  className="text-left font-serif text-lg font-semibold py-2 text-[#1F1C1B] hover:text-[#8E2A2A]"
                >
                  Home
                </button>
                {navLinks.map((link) => (
                  <button
                    key={link.view}
                    onClick={() => { navigateTo(link.view); setMobileMenuOpen(false); }}
                    className="text-left font-serif text-lg font-semibold py-2 text-[#1F1C1B] hover:text-[#8E2A2A]"
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  onClick={() => { navigateTo('admin'); setMobileMenuOpen(false); }}
                  className="text-left font-serif text-lg font-semibold py-2 text-[#8E2A2A] flex items-center gap-2"
                >
                  <Settings className="w-4 h-4" /> Admin Panel
                </button>
              </nav>
            </div>

            <div className="pt-6 border-t border-[#E6DDD0] space-y-3">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-700 text-white py-2.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Inquiry
              </a>
              <div className="text-[11px] text-[#7A726A] text-center">
                Beautifying Textiles Since 2007 • Nagerbazar, Kolkata
              </div>
            </div>
          </div>
          <div className="flex-1" onClick={() => setMobileMenuOpen(false)}></div>
        </div>
      )}
    </header>
  );
};
