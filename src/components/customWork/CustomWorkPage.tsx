import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { Scissors, CheckCircle, MessageCircle, Upload, Send } from 'lucide-react';

export const CustomWorkPage: React.FC = () => {
  const { submitEnquiry, getWhatsAppLink } = useStore();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    workType: 'Block Printing',
    approxQuantity: '10-50 Meters',
    fabricType: 'Customer Supplied Cotton',
    message: '',
    referenceImage: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    submitEnquiry({
      type: 'custom',
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      workType: formData.workType,
      fabricType: formData.fabricType,
      quantity: formData.approxQuantity,
      message: formData.message,
      referenceImage: formData.referenceImage
    });

    setSubmitted(true);
  };

  const handleImageSimulate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData(prev => ({
        ...prev,
        referenceImage: URL.createObjectURL(file)
      }));
    }
  };

  return (
    <div className="bg-[#FAF6F0] min-h-screen py-12 px-4 sm:px-6 lg:px-8 text-[#1F1C1B]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Page Hero Header */}
        <div className="bg-[#1F1C1B] text-white rounded-3xl p-8 sm:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(#C89B54_1px,transparent_1px)] [background-size:24px_24px] opacity-15"></div>
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8E2A2A] text-amber-200 text-xs font-bold uppercase tracking-widest border border-amber-200/30">
              <Scissors className="w-3.5 h-3.5" />
              <span>Bespoke Job Work & Printing</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Have a Fabric in Mind?<br />Let's Create Something With It.
            </h1>
            <p className="text-xs sm:text-base text-[#E6DDD0] leading-relaxed">
              We specialize in custom block printing, hand painting, batik wax, vegetable dyeing, and texture finishes on customer-supplied fabrics or our raw stock lengths for designers, boutiques, and individual clients.
            </p>
          </div>
        </div>

        {/* 2 Column Layout: Capabilities + Enquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Job Work Capabilities */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#8E2A2A]">
                Our Services
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#1F1C1B]">
                What We Offer For Job Work
              </h2>
              <p className="text-xs sm:text-sm text-[#5E564E] leading-relaxed">
                Bring your raw unstitched cottons, silks, organzas, or tussars. Our master artisans in Mukundapur, Kolkata will transform your material into finished handcrafted textiles.
              </p>
            </div>

            {/* List of Craft Services */}
            <div className="space-y-4 text-xs font-medium text-[#1F1C1B]">
              <div className="p-4 bg-white rounded-2xl border border-[#E6DDD0] shadow-sm flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#8E2A2A] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-sm block">Wood Block Printing</strong>
                  <span className="text-[#6E645A]">Traditional motifs stamped with wooden blocks onto client fabric.</span>
                </div>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-[#E6DDD0] shadow-sm flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#8E2A2A] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-sm block">Freehand Kalamkari & Hand Painting</strong>
                  <span className="text-[#6E645A]">Artisan brush painting for necklines, dupattas, borders, or yardages.</span>
                </div>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-[#E6DDD0] shadow-sm flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#8E2A2A] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-sm block">Hand Wax Batik Resist Work</strong>
                  <span className="text-[#6E645A]">Hot molten wax application for organic crackle patterns.</span>
                </div>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-[#E6DDD0] shadow-sm flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#8E2A2A] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-sm block">Dyeing & Texture Treatments</strong>
                  <span className="text-[#6E645A]">Natural vegetable dye baths, clamp resist, and crinkle finishing.</span>
                </div>
              </div>
            </div>

            {/* Prefer WhatsApp Card */}
            <div className="bg-[#EAF5ED] p-6 rounded-2xl border border-emerald-200 space-y-3">
              <h4 className="font-serif font-bold text-emerald-950 text-lg">
                Prefer Quick WhatsApp Discussion?
              </h4>
              <p className="text-xs text-emerald-800">
                Send fabric photos or design ideas directly to our master artisan on WhatsApp.
              </p>
              <a
                href={getWhatsAppLink("Hi Bahari, I would like to inquire about custom job work printing on my fabric.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> Start WhatsApp Chat →
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Lead Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#E6DDD0] shadow-xl space-y-6">
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#1F1C1B]">
                  Submit Custom Job Work Enquiry
                </h3>
                <p className="text-xs text-[#6E645A] mt-1">
                  Fill out your requirements below. Our workshop manager will review and respond within 24 hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 bg-[#FAF6F0] rounded-2xl border border-emerald-300 text-center space-y-4 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-emerald-950">
                    Enquiry Received Successfully!
                  </h4>
                  <p className="text-xs text-emerald-800 max-w-md mx-auto">
                    Thank you <strong>{formData.name}</strong>. We have logged your custom job work request. Our Kolkata unit will contact you at <strong>{formData.phone}</strong> shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-[#8E2A2A] text-white px-6 py-2 rounded-xl text-xs font-bold uppercase tracking-wider"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-[#1F1C1B] mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ananya Das"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 bg-[#FAF6F0] border border-[#D5C9B8] rounded-xl text-xs text-[#1F1C1B] focus:outline-none focus:border-[#8E2A2A]"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-[#1F1C1B] mb-1">Mobile / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9830012345"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 bg-[#FAF6F0] border border-[#D5C9B8] rounded-xl text-xs text-[#1F1C1B] focus:outline-none focus:border-[#8E2A2A]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-[#1F1C1B] mb-1">Email Address</label>
                      <input
                        type="email"
                        placeholder="e.g. ananya@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 bg-[#FAF6F0] border border-[#D5C9B8] rounded-xl text-xs text-[#1F1C1B] focus:outline-none focus:border-[#8E2A2A]"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-[#1F1C1B] mb-1">Type of Work</label>
                      <select
                        value={formData.workType}
                        onChange={(e) => setFormData({ ...formData, workType: e.target.value })}
                        className="w-full px-4 py-2.5 bg-[#FAF6F0] border border-[#D5C9B8] rounded-xl text-xs text-[#1F1C1B] focus:outline-none focus:border-[#8E2A2A]"
                      >
                        <option value="Block Printing">Block Printing</option>
                        <option value="Hand Painting">Hand Painting</option>
                        <option value="Hand Wax Batik">Hand Wax Batik</option>
                        <option value="Kalamkari Work">Kalamkari Work</option>
                        <option value="Dyeing & Texturing">Dyeing & Texturing</option>
                        <option value="Multiple Techniques">Multiple Techniques</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-[#1F1C1B] mb-1">Fabric Type</label>
                      <input
                        type="text"
                        placeholder="e.g. Customer Supplied Tussar Silk / Pure Mulmul"
                        value={formData.fabricType}
                        onChange={(e) => setFormData({ ...formData, fabricType: e.target.value })}
                        className="w-full px-4 py-2.5 bg-[#FAF6F0] border border-[#D5C9B8] rounded-xl text-xs text-[#1F1C1B] focus:outline-none focus:border-[#8E2A2A]"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-[#1F1C1B] mb-1">Approximate Quantity</label>
                      <input
                        type="text"
                        placeholder="e.g. 5 Sarees / 20 Meters Fabric"
                        value={formData.approxQuantity}
                        onChange={(e) => setFormData({ ...formData, approxQuantity: e.target.value })}
                        className="w-full px-4 py-2.5 bg-[#FAF6F0] border border-[#D5C9B8] rounded-xl text-xs text-[#1F1C1B] focus:outline-none focus:border-[#8E2A2A]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-[#1F1C1B] mb-1">Upload Reference Image / Design Sketch (Optional)</label>
                    <div className="border-2 border-dashed border-[#D5C9B8] rounded-xl p-4 bg-[#FAF6F0] text-center hover:border-[#8E2A2A] transition-colors cursor-pointer relative">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageSimulate}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                      <Upload className="w-6 h-6 text-[#8E2A2A] mx-auto mb-1" />
                      <span className="text-xs text-[#6E645A] block">
                        {formData.referenceImage ? 'Image attached!' : 'Click to select sample design image'}
                      </span>
                    </div>
                    {formData.referenceImage && (
                      <div className="mt-2 w-20 h-20 rounded-lg overflow-hidden border border-[#D5C9B8]">
                        <img src={formData.referenceImage} alt="Reference Preview" className="w-full h-full object-cover" />
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block font-bold text-[#1F1C1B] mb-1">Message / Specific Requirements</label>
                    <textarea
                      rows={4}
                      placeholder="Describe color preferences, motif patterns, or timeline requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#FAF6F0] border border-[#D5C9B8] rounded-xl text-xs text-[#1F1C1B] focus:outline-none focus:border-[#8E2A2A]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#8E2A2A] hover:bg-[#722020] text-white py-3.5 rounded-xl font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg transition-colors"
                  >
                    <Send className="w-4 h-4" /> Send Job Work Enquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
