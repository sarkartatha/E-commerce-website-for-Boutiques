import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { ShoppingBag, Heart, Check, MessageCircle, ShieldCheck, Truck, RefreshCw, Sparkles, ArrowLeft } from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const {
    selectedProduct,
    addToCart,
    toggleWishlist,
    isInWishlist,
    navigateTo,
    getWhatsAppLink
  } = useStore();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'details' | 'craft' | 'handmade'>('details');
  const [added, setAdded] = useState(false);

  if (!selectedProduct) {
    return (
      <div className="py-20 text-center space-y-4">
        <h2 className="font-serif text-2xl font-bold">No Product Selected</h2>
        <button
          onClick={() => navigateTo('shop')}
          className="bg-[#8E2A2A] text-white px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider"
        >
          Return to Shop
        </button>
      </div>
    );
  }

  const product = selectedProduct;
  const currentSize = selectedSize || product.sizes[0] || 'Standard';
  const currentColour = product.colour;
  const isWishlisted = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, currentSize, currentColour, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart(product, currentSize, currentColour, quantity);
    navigateTo('checkout');
  };

  const productWhatsAppMsg = `Hi! I'm interested in ${product.name} (Price: ₹${product.salePrice || product.price}). Could you please share more details or photos?`;

  return (
    <div className="bg-[#FAF6F0] min-h-screen py-10 px-4 sm:px-6 lg:px-8 text-[#1F1C1B]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Back Link Breadcrumb */}
        <button
          onClick={() => navigateTo('shop')}
          className="inline-flex items-center gap-2 text-xs font-bold text-[#8E2A2A] uppercase tracking-wider hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Collection
        </button>

        {/* Top Product Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Image Gallery (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Main Featured Image */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-white border border-[#E6DDD0] shadow-md group">
              <img
                src={product.images[activeImageIndex] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover object-center transition-all duration-500"
              />
              {product.handcrafted && (
                <span className="absolute top-4 left-4 bg-[#8E2A2A] text-white text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow border border-amber-200/30">
                  100% Handcrafted
                </span>
              )}
            </div>

            {/* Thumbnail Navigation */}
            {product.images.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                      activeImageIndex === idx
                        ? 'border-[#8E2A2A] scale-105 shadow-md'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Details & Buying Actions (5 cols) */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-4">
              
              {/* Craft & Category Subtitle */}
              <div className="flex items-center gap-2 text-xs font-bold text-[#8E2A2A] uppercase tracking-widest">
                <span>{product.craft}</span>
                <span>•</span>
                <span>{product.category}</span>
                <span>•</span>
                <span>{product.fabric}</span>
              </div>

              {/* Title */}
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F1C1B] leading-tight">
                {product.name}
              </h1>

              {/* Price & Discount */}
              <div className="flex items-baseline gap-4 pt-1">
                <span className="text-3xl font-bold text-[#8E2A2A]">
                  ₹{(product.salePrice || product.price).toLocaleString('en-IN')}
                </span>
                {product.salePrice && (
                  <span className="text-lg text-gray-400 line-through">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                )}
                {product.salePrice && (
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
                    Save ₹{(product.price - product.salePrice).toLocaleString('en-IN')}
                  </span>
                )}
              </div>

              <p className="text-xs sm:text-sm text-[#5E564E] leading-relaxed pt-2">
                {product.description}
              </p>

              {/* Size Selector */}
              {product.sizes.length > 0 && (
                <div className="space-y-2 pt-4 border-t border-[#E6DDD0]">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1F1C1B]">
                    Size / Variant:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((sz) => (
                      <button
                        key={sz}
                        onClick={() => setSelectedSize(sz)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                          currentSize === sz
                            ? 'bg-[#8E2A2A] border-[#8E2A2A] text-white shadow-sm'
                            : 'bg-white border-[#D5C9B8] text-[#1F1C1B] hover:border-[#8E2A2A]'
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="flex items-center gap-4 pt-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#1F1C1B]">
                  Quantity:
                </label>
                <div className="flex items-center border border-[#D5C9B8] rounded-xl bg-white overflow-hidden shadow-sm">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3.5 py-1.5 hover:bg-gray-100 font-bold text-sm"
                  >
                    -
                  </button>
                  <span className="px-4 text-xs font-bold text-[#1F1C1B]">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3.5 py-1.5 hover:bg-gray-100 font-bold text-sm"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* CTAs & Buying Actions */}
            <div className="space-y-3 pt-6 border-t border-[#E6DDD0]">
              <div className="flex gap-3">
                <button
                  onClick={handleAddToCart}
                  className={`flex-1 py-4 px-6 rounded-xl text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg transition-all ${
                    added ? 'bg-emerald-700 text-white' : 'bg-[#8E2A2A] text-white hover:bg-[#722020]'
                  }`}
                >
                  {added ? <Check className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
                  {added ? 'Added to Bag' : 'Add to Cart'}
                </button>

                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`p-4 rounded-xl border transition-colors ${
                    isWishlisted ? 'border-[#8E2A2A] bg-[#8E2A2A]/10 text-[#8E2A2A]' : 'border-[#D5C9B8] bg-white text-gray-600 hover:text-[#8E2A2A]'
                  }`}
                  title="Wishlist"
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-[#8E2A2A]' : ''}`} />
                </button>
              </div>

              <button
                onClick={handleBuyNow}
                className="w-full bg-[#1F1C1B] hover:bg-black text-white py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest shadow-md transition-colors"
              >
                Buy Now
              </button>

              {/* Direct WhatsApp Product CTA */}
              <a
                href={getWhatsAppLink(productWhatsAppMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> Ask about this product on WhatsApp
              </a>

              {/* Delivery & Trust Highlights */}
              <div className="grid grid-cols-3 gap-2 pt-4 text-center text-[11px] text-[#6E645A]">
                <div className="p-2.5 bg-white rounded-xl border border-[#E6DDD0]">
                  <Truck className="w-4 h-4 text-[#8E2A2A] mx-auto mb-1" />
                  <span>Pan India Shipping</span>
                </div>
                <div className="p-2.5 bg-white rounded-xl border border-[#E6DDD0]">
                  <ShieldCheck className="w-4 h-4 text-[#8E2A2A] mx-auto mb-1" />
                  <span>Handmade Quality</span>
                </div>
                <div className="p-2.5 bg-white rounded-xl border border-[#E6DDD0]">
                  <RefreshCw className="w-4 h-4 text-[#8E2A2A] mx-auto mb-1" />
                  <span>Easy Exchange</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabbed Specifications & Craft Story Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E6DDD0] shadow-sm space-y-8">
          
          {/* Tab Controls */}
          <div className="flex border-b border-[#E6DDD0] gap-8">
            <button
              onClick={() => setActiveTab('details')}
              className={`pb-4 text-sm font-serif font-bold transition-all ${
                activeTab === 'details'
                  ? 'text-[#8E2A2A] border-b-2 border-[#8E2A2A]'
                  : 'text-[#6E645A] hover:text-[#1F1C1B]'
              }`}
            >
              Product Specifications
            </button>
            <button
              onClick={() => setActiveTab('craft')}
              className={`pb-4 text-sm font-serif font-bold transition-all ${
                activeTab === 'craft'
                  ? 'text-[#8E2A2A] border-b-2 border-[#8E2A2A]'
                  : 'text-[#6E645A] hover:text-[#1F1C1B]'
              }`}
            >
              Craft Story
            </button>
            <button
              onClick={() => setActiveTab('handmade')}
              className={`pb-4 text-sm font-serif font-bold transition-all ${
                activeTab === 'handmade'
                  ? 'text-[#8E2A2A] border-b-2 border-[#8E2A2A]'
                  : 'text-[#6E645A] hover:text-[#1F1C1B]'
              }`}
            >
              Why Handmade Looks Different
            </button>
          </div>

          {/* Tab Content 1: Specifications */}
          {activeTab === 'details' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs text-[#5E564E]">
              <div className="p-4 bg-[#FAF6F0] rounded-2xl border border-[#E6DDD0]">
                <span className="font-bold uppercase tracking-wider text-[#8E2A2A] block mb-1">Fabric</span>
                <span>{product.details.fabric}</span>
              </div>
              <div className="p-4 bg-[#FAF6F0] rounded-2xl border border-[#E6DDD0]">
                <span className="font-bold uppercase tracking-wider text-[#8E2A2A] block mb-1">Craft Technique</span>
                <span>{product.details.technique}</span>
              </div>
              <div className="p-4 bg-[#FAF6F0] rounded-2xl border border-[#E6DDD0]">
                <span className="font-bold uppercase tracking-wider text-[#8E2A2A] block mb-1">Colour</span>
                <span>{product.details.colour}</span>
              </div>
              <div className="p-4 bg-[#FAF6F0] rounded-2xl border border-[#E6DDD0]">
                <span className="font-bold uppercase tracking-wider text-[#8E2A2A] block mb-1">Wash Care</span>
                <span>{product.details.washCare}</span>
              </div>
              <div className="p-4 bg-[#FAF6F0] rounded-2xl border border-[#E6DDD0]">
                <span className="font-bold uppercase tracking-wider text-[#8E2A2A] block mb-1">Production Info</span>
                <span>{product.details.productionInfo}</span>
              </div>
              <div className="p-4 bg-[#FAF6F0] rounded-2xl border border-[#E6DDD0]">
                <span className="font-bold uppercase tracking-wider text-[#8E2A2A] block mb-1">Origin</span>
                <span>{product.details.origin}</span>
              </div>
            </div>
          )}

          {/* Tab Content 2: Craft Story */}
          {activeTab === 'craft' && (
            <div className="space-y-4 max-w-3xl text-sm text-[#5E564E] leading-relaxed">
              <h3 className="font-serif text-xl font-bold text-[#1F1C1B]">
                The Craft Behind {product.name}
              </h3>
              <p>{product.craftStory}</p>
              <div className="p-4 bg-[#FAF6F0] rounded-2xl border border-[#E6DDD0] text-xs flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-[#8E2A2A] shrink-0" />
                <span>Every piece carries the genuine soul of Kolkata artisan traditions established since 2007.</span>
              </div>
            </div>
          )}

          {/* Tab Content 3: Why Handmade Looks Different */}
          {activeTab === 'handmade' && (
            <div className="space-y-4 max-w-3xl text-sm text-[#5E564E] leading-relaxed">
              <h3 className="font-serif text-xl font-bold text-[#1F1C1B]">
                Celebrating Natural Handcraft Character
              </h3>
              <p>
                This piece carries the authentic character of hand block printing and hand painting. Slight micro-variations in dye shade, block impression alignment, or brush thickness are not imperfections or defects — they are proof of human handcraft.
              </p>
              <p>
                Unlike mass-produced synthetic machine prints, no two Karuna Woven with Dream garments are ever identical. You hold a piece of authentic wearable textile art created with patience and character.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
