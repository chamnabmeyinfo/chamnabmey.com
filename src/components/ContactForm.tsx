'use client';

import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Database,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import LinkedInIcon from './icons/LinkedInIcon';
import { submitClientLead } from '@/lib/firebase';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneOrTelegram: '',
    company: '',
    service: 'Performance Paid Ads (Meta & Google)',
    budget: '$500 - $1,500 / month',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [resultDetails, setResultDetails] = useState<any>(null);

  const services = [
    'Performance Paid Ads (Meta & Google)',
    'High-Converting Web Development',
    'Technical & Local SEO Solutions',
    'E-Commerce Strategy & Operations',
    'Full-Funnel Lead Generation Systems',
    'Tracking, Analytics & Server Setup',
    'Executive Consultation / Retainer',
  ];

  const budgets = [
    'Under $500',
    '$500 - $1,500 / month',
    '$1,500 - $3,000 / month',
    '$3,000+ / month',
    'One-time Project Scope',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await submitClientLead(formData);
      setSuccess(true);
      setResultDetails(res);
      setFormData({
        name: '',
        email: '',
        phoneOrTelegram: '',
        company: '',
        service: 'Performance Paid Ads (Meta & Google)',
        budget: '$500 - $1,500 / month',
        message: '',
      });
    } catch (err: any) {
      setError(err?.message || 'Something went wrong while submitting. Please try again or reach out directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#F2EEED] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (Exact Biogra contact-wrapper) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#9175FF] block mb-3">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F0F0F] tracking-tight leading-tight">
                Schedule a Free Consultation
              </h2>
              <p className="text-sm text-[#555555] mt-4 leading-relaxed">
                Ready to scale your business with predictable customer acquisition? Send your project goals below or connect directly.
              </p>
            </div>

            {/* Info Boxes */}
            <div className="space-y-4">
              
              {/* Email */}
              <a
                href="mailto:admin@chamnabmey.com"
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-black/8 shadow-xs hover:border-[#9175FF] transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#F2EEED] text-[#0F0F0F] group-hover:bg-[#9175FF] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#777777] block">
                    Email Address
                  </span>
                  <span className="text-sm font-bold text-[#0F0F0F] group-hover:text-[#9175FF] transition-colors">
                    admin@chamnabmey.com
                  </span>
                  <span className="text-xs text-[#777777] block mt-0.5">chamnabmey.info@gmail.com</span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-black/8 shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-[#F2EEED] text-[#0F0F0F] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#777777] block">
                    Office Location
                  </span>
                  <span className="text-sm font-bold text-[#0F0F0F]">
                    #75, Toulsambo, Prey Veng, Dongkor
                  </span>
                  <span className="text-xs text-[#777777] block mt-0.5">Phnom Penh, Cambodia 🇰🇭</span>
                </div>
              </div>

              {/* Phone / Telegram */}
              <a
                href="tel:+85515705703"
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-black/8 shadow-xs hover:border-[#9175FF] transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#F2EEED] text-[#0F0F0F] group-hover:bg-[#9175FF] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#777777] block">
                    Need Projects? Call / Telegram
                  </span>
                  <span className="text-sm font-bold text-[#0F0F0F] group-hover:text-[#9175FF] transition-colors">
                    +855 15 705 703
                  </span>
                  <span className="text-xs text-[#777777] block mt-0.5">Available on Telegram & WhatsApp</span>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/chamnabmey"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-black/8 shadow-xs hover:border-[#9175FF] transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#F2EEED] text-[#0F0F0F] group-hover:bg-[#9175FF] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                  <LinkedInIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#777777] block">
                    Professional Network
                  </span>
                  <span className="text-sm font-bold text-[#0F0F0F] group-hover:text-[#9175FF] transition-colors">
                    linkedin.com/in/chamnabmey
                  </span>
                  <span className="text-xs text-[#777777] block mt-0.5">Connect on LinkedIn</span>
                </div>
              </a>

            </div>

            {/* Google Firestore Sync Note */}
            <div className="p-4 rounded-2xl bg-white/70 border border-black/6 flex items-center gap-3 text-xs text-[#555555]">
              <Database className="w-4 h-4 text-[#9175FF] shrink-0" />
              <span>Direct Google Cloud Firestore real-time lead sync enabled.</span>
            </div>
          </div>

          {/* Right Column: Contact Form (Exact Biogra contact-content-one) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-black/8 shadow-xl">
              <div className="pb-6 mb-6 border-b border-black/6">
                <h3 className="text-2xl font-extrabold text-[#0F0F0F] tracking-tight">
                  Let’s Work Together
                </h3>
                <p className="text-xs text-[#696969] mt-1">
                  Fill out the project scope below. Chamnab will review and reply within 4 hours.
                </p>
              </div>

              {success ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-[#9175FF]/15 text-[#9175FF] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-extrabold text-[#0F0F0F]">Consultation Request Received!</h4>
                  <p className="text-[#555555] text-sm max-w-md mx-auto">
                    Thank you for reaching out. Chamnab will analyze your business goals and reach out directly via Telegram or Email.
                  </p>
                  {resultDetails?.id && (
                    <div className="p-3 bg-[#F2EEED] rounded-xl text-xs text-[#555555] inline-block font-mono">
                      Lead ID: {resultDetails.id}
                    </div>
                  )}
                  <div className="pt-4">
                    <button
                      onClick={() => setSuccess(false)}
                      type="button"
                      className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-[#0F0F0F] hover:bg-[#232323] transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0F0F0F] mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sokha Keo"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F2EEED]/60 border border-black/10 text-[#0F0F0F] placeholder-[#888888] focus:outline-none focus:border-[#9175FF] transition-colors text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0F0F0F] mb-2">
                        Work / Personal Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F2EEED]/60 border border-black/10 text-[#0F0F0F] placeholder-[#888888] focus:outline-none focus:border-[#9175FF] transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0F0F0F] mb-2">
                        Phone / Telegram *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="+855 ... or @username"
                        value={formData.phoneOrTelegram}
                        onChange={(e) => setFormData({ ...formData, phoneOrTelegram: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F2EEED]/60 border border-black/10 text-[#0F0F0F] placeholder-[#888888] focus:outline-none focus:border-[#9175FF] transition-colors text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0F0F0F] mb-2">
                        Company / Brand Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Acme Enterprise"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F2EEED]/60 border border-black/10 text-[#0F0F0F] placeholder-[#888888] focus:outline-none focus:border-[#9175FF] transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0F0F0F] mb-2">
                      Primary Service Needed *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F2EEED]/60 border border-black/10 text-[#0F0F0F] focus:outline-none focus:border-[#9175FF] transition-colors text-sm"
                    >
                      {services.map((srv, idx) => (
                        <option key={idx} value={srv}>
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0F0F0F] mb-2">
                      Estimated Monthly Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F2EEED]/60 border border-black/10 text-[#0F0F0F] focus:outline-none focus:border-[#9175FF] transition-colors text-sm"
                    >
                      {budgets.map((b, idx) => (
                        <option key={idx} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0F0F0F] mb-2">
                      Project Goals & Requirements *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe your current marketing challenges, target audience, and what you aim to achieve..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F2EEED]/60 border border-black/10 text-[#0F0F0F] placeholder-[#888888] focus:outline-none focus:border-[#9175FF] transition-colors text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 px-6 rounded-full font-bold text-sm text-white bg-[#9175FF] hover:bg-[#7A5AF8] shadow-lg shadow-[#9175FF]/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending to Google Database...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Consultation Request</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
