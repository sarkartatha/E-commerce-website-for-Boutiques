import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import type { Product } from '../../types';
import { ShoppingBag, Eye, Heart, MessageCircle, Sparkles, ArrowRight } from 'lucide-react';

export const FeaturedProducts: React.FC = () => {
  const {
    products,
    addToCart,
    toggleWishlist,
    isInWishlist,
    setQuickViewProduct,
    navigateTo,
    getWhatsAppLink
  } = useStore();

  const [activeTab, setActiveTab] = useState<string>('All');

  const tabs = [
    'All',
    'Kurtis',
    'Sarees',
    'Fabrics',
    'Ready-to-Wear',
    'Bestsellers'
  ];

  const filteredProducts = products.filter((p) => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Bestsellers') return p.bestSeller;
    return p.category === activeTab;
  });

  return (
    <section className="py-20 bg-[#FAF6F0] text-[#1F1C1B] border-b border-[#E6DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#8E2A2A]">
              <Sparkles className="w-4 h-4 text-[#C89B54]" />
              <span>Curated Collections</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1C1B]">
              Handcrafted Discoveries
            </h2>
          </div>

          {/* Category Switcher Tabs */}
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeTab === tab
                    ? 'bg-[#8E2A2A] text-white shadow-md'
                    : 'bg-white text-[#4A4440] hover:bg-[#F0E8DD] border border-[#E6DDD0]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              toggleWishlist={toggleWishlist}
              isInWishlist={isInWishlist}
              setQuickViewProduct={setQuickViewProduct}
              navigateTo={navigateTo}
              getWhatsAppLink={getWhatsAppLink}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigateTo('shop')}
            className="inline-flex items-center gap-2 bg-white border-2 border-[#8E2A2A] text-[#8E2A2A] hover:bg-[#8E2A2A] hover:text-white px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all shadow-sm"
          >
            <span>Explore Entire Store</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

// Reusable Editorial Product Card Component
export const ProductCard: React.FC<{
  product: Product;
  addToCart: (p: Product) => void;
  toggleWishlist: (id: string) => void;
  isInWishlist: (id: string) => boolean;
  setQuickViewProduct: (p: Product) => void;
  navigateTo: (view: any, p?: Product) => void;
  getWhatsAppLink: (msg?: string) => string;
}> = ({
  product,
  addToCart,
  toggleWishlist,
  isInWishlist,
  setQuickViewProduct,
  navigateTo,
  getWhatsAppLink
}) => {
  const isWishlisted = isInWishlist(product.id);
  const waMsg = `Hi! I'm interested in ${product.name}. Could you please share details?`;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-[#E6DDD0] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      
      {/* Product Image Box */}
      <div className="relative aspect-[4/5] bg-[#FAF6F0] overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 cursor-pointer"
          onClick={() => navigateTo('product-detail', product)}
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.bestSeller && (
            <span className="bg-[#8E2A2A] text-white text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full shadow">
              Bestseller
            </span>
          )}
          {product.newArrival && (
            <span className="bg-[#C89B54] text-[#1F1C1B] text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full shadow">
              New
            </span>
          )}
          {product.handcrafted && !product.bestSeller && (
            <span className="bg-[#1F1C1B] text-white text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full shadow">
              Handcrafted
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={() => toggleWishlist(product.id)}
          className={`absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md transition-colors shadow-sm z-10 ${
            isWishlisted ? 'bg-white text-[#8E2A2A]' : 'bg-white/80 text-gray-600 hover:text-[#8E2A2A]'
          }`}
          title="Add to Wishlist"
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-[#8E2A2A]' : ''}`} />
        </button>

        {/* Hover Quick Actions Bar */}
        <div className="absolute inset-x-3 bottom-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <button
            onClick={() => setQuickViewProduct(product)}
            className="flex-1 bg-white/95 backdrop-blur-md text-[#1F1C1B] hover:bg-[#8E2A2A] hover:text-white py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md transition-colors"
          >
            <Eye className="w-3.5 h-3.5" /> Quick View
          </button>

          <a
            href={getWhatsAppLink(waMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow-md transition-colors"
            title="Ask on WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 text-[10px] font-bold text-[#8E2A2A] uppercase tracking-wider">
            <span>{product.craft}</span>
            <span>•</span>
            <span>{product.category}</span>
          </div>

          <h3
            onClick={() => navigateTo('product-detail', product)}
            className="font-serif text-lg font-bold text-[#1F1C1B] hover:text-[#8E2A2A] transition-colors cursor-pointer mt-1 line-clamp-1"
          >
            {product.name}
          </h3>

          <p className="text-xs text-[#6E645A] line-clamp-2 mt-1">
            {product.description}
          </p>
        </div>

        {/* Pricing & Add to Cart Footer */}
        <div className="pt-3 border-t border-[#F0E8DD] flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-[#8E2A2A]">
              ₹{(product.salePrice || product.price).toLocaleString('en-IN')}
            </span>
            {product.salePrice && (
              <span className="text-xs text-gray-400 line-through">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
            )}
          </div>

          <button
            onClick={() => addToCart(product)}
            className="bg-[#FAF6F0] hover:bg-[#8E2A2A] text-[#8E2A2A] hover:text-white border border-[#D5C9B8] px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors shadow-sm"
          >
            <ShoppingBag className="w-3.5 h-3.5" /> Add
          </button>
        </div>
      </div>
    </div>
  );
};
