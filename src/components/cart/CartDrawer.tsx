import React from 'react';
import { useStore } from '../../context/StoreContext';
import { X, Trash2, ShoppingBag, ArrowRight, Sparkles, Plus, Minus } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    removeFromCart,
    updateCartQuantity,
    cartSubtotal,
    navigateTo,
    products
  } = useStore();

  if (!isCartOpen) return null;

  const freeShippingThreshold = 2999;
  const amountLeftForFreeShipping = Math.max(0, freeShippingThreshold - cartSubtotal);
  const crossSellProducts = products.filter(p => !cart.some(item => item.product.id === p.id)).slice(0, 2);

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end animate-fadeIn">
      <div className="bg-[#FAF6F0] w-full max-w-md h-full flex flex-col justify-between shadow-2xl border-l border-[#E6DDD0] animate-slideLeft">
        
        {/* Cart Header */}
        <div className="p-6 border-b border-[#E6DDD0] bg-white flex items-center justify-between">
          <div className="flex items-center gap-2 font-serif font-bold text-xl text-[#1F1C1B]">
            <ShoppingBag className="w-5 h-5 text-[#8E2A2A]" />
            <span>Your Shopping Bag ({cart.reduce((sum, i) => sum + i.quantity, 0)})</span>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1.5 text-gray-500 hover:text-black rounded-full hover:bg-gray-100"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Free Shipping Bar */}
        <div className="bg-[#8E2A2A] text-white py-2.5 px-6 text-xs text-center font-medium">
          {amountLeftForFreeShipping === 0 ? (
            <span className="flex items-center justify-center gap-1.5 font-bold">
              <Sparkles className="w-3.5 h-3.5 text-amber-200" /> You qualify for FREE Shipping across India!
            </span>
          ) : (
            <span>Add ₹{amountLeftForFreeShipping.toLocaleString('en-IN')} more to get FREE Delivery!</span>
          )}
        </div>

        {/* Items Scroll Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-white text-gray-400 flex items-center justify-center mx-auto border border-[#E6DDD0]">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1F1C1B]">Your cart is empty</h3>
              <p className="text-xs text-[#6E645A]">Explore our handcrafted block prints and Kalamkari kurtis.</p>
              <button
                onClick={() => { setIsCartOpen(false); navigateTo('shop'); }}
                className="bg-[#8E2A2A] text-white px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider shadow"
              >
                Shop Collection
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => {
                const price = item.product.salePrice || item.product.price;
                return (
                  <div
                    key={item.id}
                    className="bg-white p-4 rounded-2xl border border-[#E6DDD0] shadow-sm flex gap-4 items-center"
                  >
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-16 h-20 object-cover rounded-xl shrink-0 bg-gray-100"
                    />

                    <div className="flex-1 space-y-1">
                      <h4 className="font-serif font-bold text-sm text-[#1F1C1B] line-clamp-1">
                        {item.product.name}
                      </h4>
                      <p className="text-[10px] text-[#8E2A2A] font-semibold">
                        Size: {item.selectedSize} • {item.selectedColour}
                      </p>
                      <div className="text-xs font-bold text-[#1F1C1B]">
                        ₹{price.toLocaleString('en-IN')} x {item.quantity} = ₹{(price * item.quantity).toLocaleString('en-IN')}
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center border border-[#D5C9B8] rounded-lg bg-[#FAF6F0]">
                          <button
                            onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                            className="px-2 py-0.5 hover:bg-gray-200 text-xs font-bold"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-bold">{item.quantity}</span>
                          <button
                            onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                            className="px-2 py-0.5 hover:bg-gray-200 text-xs font-bold"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-600 hover:text-red-800 p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* You May Also Like Section */}
          {cart.length > 0 && crossSellProducts.length > 0 && (
            <div className="pt-6 border-t border-[#E6DDD0] space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8E2A2A]">
                You May Also Like:
              </span>
              <div className="space-y-2">
                {crossSellProducts.map((p) => (
                  <div
                    key={p.id}
                    className="p-3 bg-white rounded-xl border border-[#E6DDD0] flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center gap-3">
                      <img src={p.images[0]} alt="" className="w-10 h-10 object-cover rounded-lg" />
                      <div>
                        <span className="font-bold block line-clamp-1">{p.name}</span>
                        <span className="text-[#8E2A2A] font-semibold">₹{(p.salePrice || p.price).toLocaleString('en-IN')}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => navigateTo('product-detail', p)}
                      className="text-[10px] uppercase font-bold text-[#8E2A2A] hover:underline"
                    >
                      View
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Checkout Summary */}
        {cart.length > 0 && (
          <div className="p-6 bg-white border-t border-[#E6DDD0] space-y-4 shadow-inner">
            <div className="space-y-1.5 text-xs text-[#5E564E]">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-bold text-[#1F1C1B]">₹{cartSubtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Fee:</span>
                <span className="font-bold text-emerald-700">
                  {amountLeftForFreeShipping === 0 ? 'FREE' : '₹150'}
                </span>
              </div>
              <div className="flex justify-between text-base font-bold text-[#1F1C1B] pt-2 border-t border-[#F0E8DD]">
                <span>Total Amount:</span>
                <span className="text-[#8E2A2A]">
                  ₹{(cartSubtotal + (amountLeftForFreeShipping === 0 ? 0 : 150)).toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            <button
              onClick={() => { setIsCartOpen(false); navigateTo('checkout'); }}
              className="w-full bg-[#8E2A2A] hover:bg-[#722020] text-white py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg transition-colors"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
