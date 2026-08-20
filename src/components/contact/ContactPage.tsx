import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { MapPin, Phone, Clock, MessageCircle, Send, CheckCircle2 } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { settings, submitEnquiry, getWhatsAppLink } = useStore();

  const [activeTab, setActiveTab] = useState<'retail' | 'wholesale' | 'custom'>('retail');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Retail Enquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    submitEnquiry({
      type: 'contact',
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      message: `[${activeTab.toUpperCase()}] ${formData.subject}: ${formData.message}`
    });

    setSubmitted(true);
  };

  return (
    <div className="bg-[#FAF6F0] min-h-screen py-12 px-4 sm:px-6 lg:px-8 text-[#1F1C1B]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8E2A2A]">
            Visit or Get in Touch
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1F1C1B]">
            Contact Woven With Dream by Karuna
          </h1>
          <p className="text-xs sm:text-base text-[#6E645A] leading-relaxed">
            We welcome retail customers, saree enthusiasts, boutique owners, and custom orders at our studio in Kolkata.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white p-6 rounded-2xl border border-[#E6DDD0] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#FAF6F0] text-[#8E2A2A] flex items-center justify-center border border-[#E6DDD0]">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg">Studio Address</h3>
            <p className="text-xs text-[#6E645A] leading-relaxed">
              {settings.address}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E6DDD0] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#FAF6F0] text-[#8E2A2A] flex items-center justify-center border border-[#E6DDD0]">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg">Operating Hours</h3>
            <p className="text-xs text-[#6E645A] leading-relaxed">
              {settings.businessHours}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E6DDD0] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#FAF6F0] text-[#8E2A2A] flex items-center justify-center border border-[#E6DDD0]">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg">Direct Contact</h3>
            <p className="text-xs text-[#6E645A] leading-relaxed">
              Phone: {settings.phone}<br />
              Email: {settings.email || 'karuna.wovenwithdream@gmail.com'}<br />
              Instagram: @{settings.instagramHandle}
            </p>
          </div>
        </div>

        {/* Form & Map Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#E6DDD0] shadow-xl space-y-6">
            
            {/* Tabs for Retail, Wholesale, Custom Work */}
            <div className="flex border-b border-[#E6DDD0] gap-4">
              <button
                onClick={() => setActiveTab('retail')}
                className={`pb-3 text-xs font-bold uppercase tracking-wider ${
                  activeTab === 'retail' ? 'text-[#8E2A2A] border-b-2 border-[#8E2A2A]' : 'text-gray-400'
                }`}
              >
                Retail Enquiry
              </button>
              <button
                onClick={() => setActiveTab('wholesale')}
                className={`pb-3 text-xs font-bold uppercase tracking-wider ${
                  activeTab === 'wholesale' ? 'text-[#8E2A2A] border-b-2 border-[#8E2A2A]' : 'text-gray-400'
                }`}
              >
                Wholesale Order
              </button>
              <button
                onClick={() => setActiveTab('custom')}
                className={`pb-3 text-xs font-bold uppercase tracking-wider ${
                  activeTab === 'custom' ? 'text-[#8E2A2A] border-b-2 border-[#8E2A2A]' : 'text-gray-400'
                }`}
              >
                Custom Job Work
              </button>
            </div>

            {submitted ? (
              <div className="p-8 bg-[#FAF6F0] rounded-2xl border border-emerald-300 text-center space-y-4 animate-fadeIn">
                <CheckCircle2 className="w-10 h-10 text-emerald-700 mx-auto" />
                <h4 className="font-serif text-xl font-bold">Message Sent Successfully</h4>
                <p className="text-xs text-[#6E645A]">
                  Thank you <strong>{formData.name}</strong>. Our team will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-[#8E2A2A] text-white px-6 py-2 rounded-xl text-xs font-bold uppercase"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-[#1F1C1B] mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Suman Roy"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#FAF6F0] border border-[#D5C9B8] rounded-xl text-xs text-[#1F1C1B] focus:outline-none focus:border-[#8E2A2A]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#1F1C1B] mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9830098765"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#FAF6F0] border border-[#D5C9B8] rounded-xl text-xs text-[#1F1C1B] focus:outline-none focus:border-[#8E2A2A]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-[#1F1C1B] mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="e.g. suman@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#FAF6F0] border border-[#D5C9B8] rounded-xl text-xs text-[#1F1C1B] focus:outline-none focus:border-[#8E2A2A]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#1F1C1B] mb-1">Your Message / Query</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your questions or order preferences here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#FAF6F0] border border-[#D5C9B8] rounded-xl text-xs text-[#1F1C1B] focus:outline-none focus:border-[#8E2A2A]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#8E2A2A] hover:bg-[#722020] text-white py-3.5 rounded-xl font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg transition-colors"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            )}
          </div>

          {/* Right Map Preview Component (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-[#E6DDD0] shadow-xl space-y-4">
              <h3 className="font-serif font-bold text-lg text-[#1F1C1B]">
                Kolkata Workshop Location
              </h3>
              
              {/* Interactive Map Frame Embed */}
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 border border-[#E6DDD0] relative shadow-inner">
                <iframe
                  title="Woven With Dream by Karuna Kolkata Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.376822839213!2d88.3976!3d22.4891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02710000000001%3A0x0!2zMjLCsDI5JzIwLjgiTiA4OMKwMjMnNTEuNCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="p-4 bg-[#FAF6F0] rounded-xl text-xs space-y-2 border border-[#E6DDD0]">
                <strong className="block text-[#8E2A2A]">Woven With Dream Studio, Nagerbazar</strong>
                <p className="text-[#6E645A]">{settings.address}</p>
                <a
                  href={getWhatsAppLink("Hi Karuna, I would like directions to visit your Kolkata studio.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8E2A2A] font-semibold hover:underline inline-flex items-center gap-1 pt-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" /> Request Directions via WhatsApp →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
