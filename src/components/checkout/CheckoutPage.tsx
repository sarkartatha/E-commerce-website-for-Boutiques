import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { CheckCircle, ShieldCheck, CreditCard, QrCode, Truck, ArrowLeft, Printer } from 'lucide-react';
import type { Order } from '../../types';

export const CheckoutPage: React.FC = () => {
  const { cart, cartSubtotal, createOrder, navigateTo } = useStore();

  const [customer, setCustomer] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: 'West Bengal',
    pinCode: ''
  });

  const [paymentMethod, setPaymentMethod] = useState<'UPI' | 'Razorpay' | 'Card' | 'Netbanking' | 'COD'>('UPI');
  const [completedOrder, setCompletedOrder] = useState<Order | null>(null);

  if (completedOrder) {
    return (
      <div className="bg-[#FAF6F0] min-h-screen py-16 px-4 sm:px-6 lg:px-8 text-[#1F1C1B]">
        <div className="max-w-2xl mx-auto bg-white p-8 sm:p-12 rounded-3xl border border-[#E6DDD0] shadow-2xl space-y-6 text-center animate-fadeIn">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle className="w-10 h-10" />
          </div>

          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8E2A2A]">
              Order Confirmed
            </span>
            <h1 className="font-serif text-3xl font-bold text-[#1F1C1B]">
              Thank You For Your Order!
            </h1>
            <p className="text-xs text-[#6E645A]">
              Reference No: <strong className="text-[#8E2A2A]">{completedOrder.orderNumber}</strong>
            </p>
          </div>

          <div className="p-4 bg-[#FAF6F0] rounded-2xl border border-[#E6DDD0] text-left text-xs space-y-2">
            <div className="flex justify-between border-b border-[#E6DDD0] pb-2">
              <span className="font-bold text-[#1F1C1B]">Customer:</span>
              <span>{completedOrder.customer.name} ({completedOrder.customer.phone})</span>
            </div>
            <div className="flex justify-between border-b border-[#E6DDD0] pb-2">
              <span className="font-bold text-[#1F1C1B]">Shipping Address:</span>
              <span>{completedOrder.customer.address}, {completedOrder.customer.city}, {completedOrder.customer.state} - {completedOrder.customer.pinCode}</span>
            </div>
            <div className="flex justify-between border-b border-[#E6DDD0] pb-2">
              <span className="font-bold text-[#1F1C1B]">Payment Method:</span>
              <span className="font-semibold text-[#8E2A2A]">{completedOrder.paymentMethod}</span>
            </div>
            <div className="flex justify-between pt-1 text-sm font-bold text-[#1F1C1B]">
              <span>Total Paid:</span>
              <span className="text-[#8E2A2A]">₹{completedOrder.totalAmount.toLocaleString('en-IN')}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => window.print()}
              className="flex-1 bg-white border border-[#D5C9B8] text-[#1F1C1B] hover:bg-[#FAF6F0] py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Printer className="w-4 h-4" /> Print Receipt
            </button>
            <button
              onClick={() => navigateTo('shop')}
              className="flex-1 bg-[#8E2A2A] hover:bg-[#722020] text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider shadow"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="py-20 text-center space-y-4">
        <h2 className="font-serif text-2xl font-bold">Your Cart is Empty</h2>
        <button
          onClick={() => navigateTo('shop')}
          className="bg-[#8E2A2A] text-white px-6 py-2.5 rounded-xl text-xs font-bold uppercase"
        >
          Return to Shop
        </button>
      </div>
    );
  }

  const shippingFee = cartSubtotal > 2999 ? 0 : 150;
  const totalAmount = cartSubtotal + shippingFee;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customer.name || !customer.phone || !customer.address || !customer.pinCode) return;

    const order = createOrder(customer, paymentMethod);
    setCompletedOrder(order);
  };

  return (
    <div className="bg-[#FAF6F0] min-h-screen py-12 px-4 sm:px-6 lg:px-8 text-[#1F1C1B]">
      <div className="max-w-7xl mx-auto space-y-8">
        
        <button
          onClick={() => navigateTo('shop')}
          className="inline-flex items-center gap-2 text-xs font-bold text-[#8E2A2A] uppercase tracking-wider hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Continue Shopping
        </button>

        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F1C1B]">
          Complete Checkout
        </h1>

        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Form Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Customer Shipping Address Form */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E6DDD0] shadow-sm space-y-4">
              <h2 className="font-serif text-xl font-bold text-[#1F1C1B] border-b border-[#F0E8DD] pb-3">
                1. Delivery & Contact Details
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block font-bold text-[#1F1C1B] mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Suman Sengupta"
                    value={customer.name}
                    onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#FAF6F0] border border-[#D5C9B8] rounded-xl text-xs"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#1F1C1B] mb-1">Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 6291525876"
                    value={customer.phone}
                    onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#FAF6F0] border border-[#D5C9B8] rounded-xl text-xs"
                  />
                </div>
              </div>

              <div className="text-xs">
                <label className="block font-bold text-[#1F1C1B] mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="e.g. suman@example.com"
                  value={customer.email}
                  onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#FAF6F0] border border-[#D5C9B8] rounded-xl text-xs"
                />
              </div>

              <div className="text-xs">
                <label className="block font-bold text-[#1F1C1B] mb-1">Full Shipping Address *</label>
                <textarea
                  rows={3}
                  required
                  placeholder="House/Flat No., Street, Landmark..."
                  value={customer.address}
                  onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#FAF6F0] border border-[#D5C9B8] rounded-xl text-xs"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div>
                  <label className="block font-bold text-[#1F1C1B] mb-1">City *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Kolkata"
                    value={customer.city}
                    onChange={(e) => setCustomer({ ...customer, city: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#FAF6F0] border border-[#D5C9B8] rounded-xl text-xs"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#1F1C1B] mb-1">State *</label>
                  <input
                    type="text"
                    required
                    placeholder="West Bengal"
                    value={customer.state}
                    onChange={(e) => setCustomer({ ...customer, state: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#FAF6F0] border border-[#D5C9B8] rounded-xl text-xs"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#1F1C1B] mb-1">PIN Code *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 700074"
                    value={customer.pinCode}
                    onChange={(e) => setCustomer({ ...customer, pinCode: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#FAF6F0] border border-[#D5C9B8] rounded-xl text-xs"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E6DDD0] shadow-sm space-y-4">
              <h2 className="font-serif text-xl font-bold text-[#1F1C1B] border-b border-[#F0E8DD] pb-3">
                2. Select Payment Method
              </h2>

              <div className="space-y-3 text-xs font-semibold">
                <label
                  onClick={() => setPaymentMethod('UPI')}
                  className={`p-4 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                    paymentMethod === 'UPI' ? 'border-[#8E2A2A] bg-[#FAF6F0]' : 'border-[#E6DDD0] bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <QrCode className="w-5 h-5 text-emerald-700" />
                    <div>
                      <span className="block font-bold text-sm">UPI (GPay / PhonePe / Paytm / BHIM)</span>
                      <span className="text-[10px] text-gray-500">Scan QR or enter UPI ID at checkout</span>
                    </div>
                  </div>
                  <input type="radio" checked={paymentMethod === 'UPI'} readOnly />
                </label>

                <label
                  onClick={() => setPaymentMethod('Razorpay')}
                  className={`p-4 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                    paymentMethod === 'Razorpay' ? 'border-[#8E2A2A] bg-[#FAF6F0]' : 'border-[#E6DDD0] bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-blue-700" />
                    <div>
                      <span className="block font-bold text-sm">Razorpay (Cards / Netbanking / Wallets)</span>
                      <span className="text-[10px] text-gray-500">Secure Indian Payment Gateway</span>
                    </div>
                  </div>
                  <input type="radio" checked={paymentMethod === 'Razorpay'} readOnly />
                </label>

                <label
                  onClick={() => setPaymentMethod('COD')}
                  className={`p-4 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                    paymentMethod === 'COD' ? 'border-[#8E2A2A] bg-[#FAF6F0]' : 'border-[#E6DDD0] bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Truck className="w-5 h-5 text-[#8E2A2A]" />
                    <div>
                      <span className="block font-bold text-sm">Cash on Delivery (COD)</span>
                      <span className="text-[10px] text-gray-500">Pay cash upon delivery to courier agent</span>
                    </div>
                  </div>
                  <input type="radio" checked={paymentMethod === 'COD'} readOnly />
                </label>
              </div>

              {/* Developer Integration Note */}
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-[11px] text-amber-900 leading-tight">
                <strong>Integration Note:</strong> Razorpay and UPI Gateway endpoints are structured and ready to receive production API keys in environment config.
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#8E2A2A] hover:bg-[#722020] text-white py-4 rounded-2xl text-xs font-bold uppercase tracking-widest shadow-xl transition-colors flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4" /> Place Order (₹{totalAmount.toLocaleString('en-IN')})
            </button>
          </div>

          {/* Right Summary Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E6DDD0] shadow-xl space-y-6 sticky top-28">
              <h2 className="font-serif text-xl font-bold text-[#1F1C1B] border-b border-[#F0E8DD] pb-3">
                Order Summary
              </h2>

              <div className="space-y-3 max-h-72 overflow-y-auto pr-2">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-3 items-center text-xs">
                    <img src={item.product.images[0]} alt="" className="w-12 h-14 object-cover rounded-lg bg-gray-100" />
                    <div className="flex-1">
                      <span className="font-bold block line-clamp-1">{item.product.name}</span>
                      <span className="text-[10px] text-[#8E2A2A]">{item.selectedSize} • Qty: {item.quantity}</span>
                    </div>
                    <span className="font-bold">₹{((item.product.salePrice || item.product.price) * item.quantity).toLocaleString('en-IN')}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 text-xs pt-4 border-t border-[#F0E8DD]">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>₹{cartSubtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping Fee:</span>
                  <span className="text-emerald-700 font-bold">{shippingFee === 0 ? 'FREE' : '₹150'}</span>
                </div>
                <div className="flex justify-between text-base font-bold text-[#1F1C1B] pt-2 border-t border-[#F0E8DD]">
                  <span>Total Payable:</span>
                  <span className="text-[#8E2A2A]">₹{totalAmount.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
