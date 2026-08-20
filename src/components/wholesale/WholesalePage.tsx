import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { Building2, Check, Send, Store, Briefcase, Award, MessageCircle } from 'lucide-react';

export const WholesalePage: React.FC = () => {
  const { submitEnquiry, getWhatsAppLink } = useStore();

  const [formData, setFormData] = useState({
    businessName: '',
    contactPerson: '',
    phone: '',
    email: '',
    city: '',
    productInterest: 'Block Printed Sarees',
    quantity: '50-100 Pieces',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.businessName || !formData.phone) return;

    submitEnquiry({
      type: 'wholesale',
      name: formData.contactPerson || formData.businessName,
      phone: formData.phone,
      email: formData.email,
      businessName: formData.businessName,
      city: formData.city,
      quantity: formData.quantity,
      message: `Product Interest: ${formData.productInterest}. Details: ${formData.message}`
    });

    setSubmitted(true);
  };

  return (
    <div className="bg-[#FAF6F0] min-h-screen py-12 px-4 sm:px-6 lg:px-8 text-[#1F1C1B]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Page Hero */}
        <div className="bg-[#1F1C1B] text-white rounded-3xl p-8 sm:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(#C89B54_1px,transparent_1px)] [background-size:24px_24px] opacity-15"></div>
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8E2A2A] text-amber-200 text-xs font-bold uppercase tracking-widest border border-amber-200/30">
              <Building2 className="w-3.5 h-3.5" />
              <span>B2B & Wholesale Orders</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Crafted for Businesses,<br />Boutiques & Collections.
            </h1>
            <p className="text-xs sm:text-base text-[#E6DDD0] leading-relaxed">
              We partner with independent fashion labels, retail boutiques, online resellers, and corporate clients across India and globally. Get direct factory pricing on handcrafted textiles from Kolkata.
            </p>
          </div>
        </div>

        {/* Who We Serve & Wholesale Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-6 rounded-2xl border border-[#E6DDD0] shadow-sm space-y-3">
            <Store className="w-8 h-8 text-[#8E2A2A] mx-auto" />
            <h3 className="font-serif font-bold text-lg">Boutique Owners</h3>
            <p className="text-xs text-[#6E645A]">Stock unique, non-mass market block print & Kalamkari collections.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E6DDD0] shadow-sm space-y-3">
            <Briefcase className="w-8 h-8 text-[#8E2A2A] mx-auto" />
            <h3 className="font-serif font-bold text-lg">Fashion Labels</h3>
            <p className="text-xs text-[#6E645A]">Bulk fabric lengths and unstitched sets for your brand's seasonal drops.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E6DDD0] shadow-sm space-y-3">
            <Award className="w-8 h-8 text-[#8E2A2A] mx-auto" />
            <h3 className="font-serif font-bold text-lg">Custom Designers</h3>
            <p className="text-xs text-[#6E645A]">Work with our master wood block carvers to realize proprietary designs.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E6DDD0] shadow-sm space-y-3">
            <Building2 className="w-8 h-8 text-[#8E2A2A] mx-auto" />
            <h3 className="font-serif font-bold text-lg">Corporate Gifting</h3>
            <p className="text-xs text-[#6E645A]">Hand-painted silk scarves, dupattas, and handcrafted textile gift sets.</p>
          </div>
        </div>

        {/* Form & Direct Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Form */}
          <div className="lg:col-span-8 bg-white p-8 sm:p-12 rounded-3xl border border-[#E6DDD0] shadow-xl space-y-6">
            <div>
              <h2 className="font-serif text-3xl font-bold text-[#1F1C1B]">
                Request Wholesale Catalogue & Tier Pricing
              </h2>
              <p className="text-xs text-[#6E645A] mt-1">
                Please provide your business details below to receive our B2B wholesale rates.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-[#FAF6F0] rounded-2xl border border-emerald-300 text-center space-y-4 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl font-bold text-emerald-950">
                  Wholesale Request Submitted!
                </h4>
                <p className="text-xs text-emerald-800 max-w-md mx-auto">
                  Thank you <strong>{formData.businessName}</strong>. Our wholesale desk will review your details and send our catalogue to <strong>{formData.email || formData.phone}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-[#8E2A2A] text-white px-6 py-2 rounded-xl text-xs font-bold uppercase tracking-wider"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-[#1F1C1B] mb-1">Business / Boutique Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Silk & Story Boutique"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#FAF6F0] border border-[#D5C9B8] rounded-xl text-xs text-[#1F1C1B] focus:outline-none focus:border-[#8E2A2A]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#1F1C1B] mb-1">Contact Person Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sen"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#FAF6F0] border border-[#D5C9B8] rounded-xl text-xs text-[#1F1C1B] focus:outline-none focus:border-[#8E2A2A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block font-bold text-[#1F1C1B] mb-1">Mobile / Phone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9831098765"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#FAF6F0] border border-[#D5C9B8] rounded-xl text-xs text-[#1F1C1B] focus:outline-none focus:border-[#8E2A2A]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#1F1C1B] mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="e.g. info@silkstory.in"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#FAF6F0] border border-[#D5C9B8] rounded-xl text-xs text-[#1F1C1B] focus:outline-none focus:border-[#8E2A2A]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#1F1C1B] mb-1">City / State</label>
                    <input
                      type="text"
                      placeholder="e.g. Mumbai, Maharashtra"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#FAF6F0] border border-[#D5C9B8] rounded-xl text-xs text-[#1F1C1B] focus:outline-none focus:border-[#8E2A2A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-[#1F1C1B] mb-1">Primary Product Interest</label>
                    <select
                      value={formData.productInterest}
                      onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#FAF6F0] border border-[#D5C9B8] rounded-xl text-xs text-[#1F1C1B] focus:outline-none focus:border-[#8E2A2A]"
                    >
                      <option value="Block Printed Sarees">Block Printed Sarees (Tussar/Silk)</option>
                      <option value="Hand-Painted Kurtis">Hand-Painted Chanderi Kurtis</option>
                      <option value="Running Fabric Lengths">Running Mulmul/Silk Fabric Lengths</option>
                      <option value="Hand Wax Batik Products">Hand Wax Batik Fabrics</option>
                      <option value="Custom Job Work Printing">Custom Job Work Printing</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-[#1F1C1B] mb-1">Estimated Quantity</label>
                    <select
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#FAF6F0] border border-[#D5C9B8] rounded-xl text-xs text-[#1F1C1B] focus:outline-none focus:border-[#8E2A2A]"
                    >
                      <option value="25-50 Pieces">25 - 50 Pieces (Minimum Trial)</option>
                      <option value="50-100 Pieces">50 - 100 Pieces</option>
                      <option value="100-500 Pieces">100 - 500 Pieces</option>
                      <option value="500+ Bulk Lengths">500+ Bulk Yards/Pieces</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-[#1F1C1B] mb-1">Requirement Details / Special Requests</label>
                  <textarea
                    rows={4}
                    placeholder="Provide details about your store, timeline, or color requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#FAF6F0] border border-[#D5C9B8] rounded-xl text-xs text-[#1F1C1B] focus:outline-none focus:border-[#8E2A2A]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#8E2A2A] hover:bg-[#722020] text-white py-3.5 rounded-xl font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg transition-colors"
                >
                  <Send className="w-4 h-4" /> Request Wholesale Details
                </button>
              </form>
            )}
          </div>

          {/* Right Direct WhatsApp & Address Info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#1F1C1B] text-white p-8 rounded-3xl space-y-4 shadow-xl border border-[#383330]">
              <h3 className="font-serif text-xl font-bold text-white">
                Direct B2B Desk
              </h3>
              <p className="text-xs text-[#E6DDD0] leading-relaxed">
                Need immediate bulk pricing or wish to visit our Mukundapur, Kolkata workshop? Connect directly with our wholesale manager.
              </p>

              <a
                href={getWhatsAppLink("Hi Karuna, I am inquiring about wholesale saree order pricing for Woven With Dream.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp B2B Inquiry
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
