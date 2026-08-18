import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { X, ShoppingBag, Heart, Check, MessageCircle } from 'lucide-react';

export const QuickViewModal: React.FC = () => {
  const {
    quickViewProduct,
    setQuickViewProduct,
    addToCart,
    toggleWishlist,
    isInWishlist,
    navigateTo,
    getWhatsAppLink
  } = useStore();

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!quickViewProduct) return null;

  const product = quickViewProduct;
  const currentSize = selectedSize || product.sizes[0] || 'Standard';
  const currentColour = product.colour;
  const isWishlisted = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, currentSize, currentColour, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const productWhatsAppMsg = `Hi Bahari, I'm interested in ${product.name} (₹${product.salePrice || product.price}). Could you please share more details or availability?`;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#FAF6F0] rounded-2xl max-w-4xl w-full p-6 sm:p-8 relative shadow-2xl border border-[#E6DDD0] my-8 animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 p-2 text-gray-500 hover:text-black rounded-full bg-white/80 hover:bg-white shadow-sm transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Gallery Column */}
          <div className="space-y-4">
            <div className="aspect-square rounded-xl overflow-hidden bg-white border border-[#E6DDD0] relative shadow-inner">
              <img
                src={product.images[selectedImageIndex] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
              {product.handcrafted && (
                <span className="absolute top-3 left-3 bg-[#8E2A2A] text-white text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full shadow">
                  100% Handcrafted
                </span>
              )}
            </div>

            {/* Thumbnail selector */}
            {product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                      selectedImageIndex === idx ? 'border-[#8E2A2A] scale-105 shadow' : 'border-transparent opacity-70'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details Column */}
          <div className="flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#8E2A2A] uppercase tracking-wider mb-1">
                <span>{product.craft}</span>
                <span>•</span>
                <span>{product.fabric}</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1C1B]">
                {product.name}
              </h2>

              {/* Price Row */}
              <div className="flex items-baseline gap-3 mt-3">
                <span className="text-2xl font-bold text-[#8E2A2A]">
                  ₹{(product.salePrice || product.price).toLocaleString('en-IN')}
                </span>
                {product.salePrice && (
                  <span className="text-base text-gray-400 line-through">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                )}
                {product.salePrice && (
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                    Save ₹{(product.price - product.salePrice).toLocaleString('en-IN')}
                  </span>
                )}
              </div>

              <p className="text-xs text-[#5E564E] mt-3 leading-relaxed">
                {product.description}
              </p>

              {/* Variant Selectors */}
              <div className="mt-5 space-y-4">
                {/* Size Selection */}
                {product.sizes.length > 0 && (
                  <div>
                    <label className="block text-xs font-semibold text-[#1F1C1B] uppercase tracking-wider mb-2">
                      Select Size / Option:
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((sz) => (
                        <button
                          key={sz}
                          onClick={() => setSelectedSize(sz)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                            currentSize === sz
                              ? 'border-[#8E2A2A] bg-[#8E2A2A] text-white shadow-sm'
                              : 'border-[#D5C9B8] bg-white text-[#1F1C1B] hover:border-[#8E2A2A]'
                          }`}
                        >
                          {sz}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quantity */}
                <div className="flex items-center gap-4">
                  <label className="text-xs font-semibold text-[#1F1C1B] uppercase tracking-wider">
                    Quantity:
                  </label>
                  <div className="flex items-center border border-[#D5C9B8] rounded-lg bg-white overflow-hidden">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-1 hover:bg-gray-100 font-bold text-sm"
                    >
                      -
                    </button>
                    <span className="px-3 text-xs font-bold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-1 hover:bg-gray-100 font-bold text-sm"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-[#E6DDD0]">
              <div className="flex gap-3">
                <button
                  onClick={handleAddToCart}
                  className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all ${
                    added
                      ? 'bg-emerald-700 text-white'
                      : 'bg-[#8E2A2A] text-white hover:bg-[#722020]'
                  }`}
                >
                  {added ? <Check className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
                  {added ? 'Added to Bag' : 'Add to Cart'}
                </button>

                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`p-3 rounded-xl border transition-colors ${
                    isWishlisted
                      ? 'border-[#8E2A2A] bg-[#8E2A2A]/10 text-[#8E2A2A]'
                      : 'border-[#D5C9B8] bg-white text-gray-600 hover:text-[#8E2A2A]'
                  }`}
                  title="Wishlist"
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-[#8E2A2A]' : ''}`} />
                </button>
              </div>

              {/* Direct WhatsApp Product Enquiry */}
              <a
                href={getWhatsAppLink(productWhatsAppMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> Ask about this product on WhatsApp
              </a>

              <button
                onClick={() => {
                  setQuickViewProduct(null);
                  navigateTo('product-detail', product);
                }}
                className="w-full text-center text-xs text-[#8E2A2A] font-semibold hover:underline pt-1"
              >
                View Full Specifications & Craft Story →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
