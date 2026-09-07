'use client';

import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2, ArrowRight } from 'lucide-react';
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
    'High-Converting Web Engineering',
    'Technical & Local SEO Strategy',
    'E-Commerce Platform Operations',
    'Full-Funnel Lead Generation Systems',
    'Attribution & Infrastructure Setup',
    'Executive Consultation / Retainer',
  ];

  const budgets = [
    'Under $500',
    '$500 – $1,500 / month',
    '$1,500 – $3,000 / month',
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
      setError(err?.message || 'Something went wrong. Please try again or reach out directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#FAFAFA] border-b border-neutral-200/70">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400 block">
                07 / Contact
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
                Initiate a Partnership
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Whether you need a performance ad strategy audit, high-converting landing page, or full-funnel customer acquisition, send your project details below.
              </p>
            </div>

            <div className="space-y-4 pt-2 text-xs">
              <div className="pb-3 border-b border-neutral-200/70">
                <span className="text-[11px] uppercase tracking-wider text-neutral-400 block mb-1">
                  Official Email
                </span>
                <a
                  href="mailto:admin@chamnabmey.com"
                  className="font-medium text-[#111111] hover:underline block"
                >
                  admin@chamnabmey.com
                </a>
                <span className="text-neutral-500 text-[11px]">chamnabmey.info@gmail.com</span>
              </div>

              <div className="pb-3 border-b border-neutral-200/70">
                <span className="text-[11px] uppercase tracking-wider text-neutral-400 block mb-1">
                  Phone & Messaging
                </span>
                <a
                  href="tel:+85515705703"
                  className="font-medium text-[#111111] hover:underline block"
                >
                  +855 15 705 703
                </a>
                <span className="text-neutral-500 text-[11px]">Telegram & WhatsApp available</span>
              </div>

              <div className="pb-3 border-b border-neutral-200/70">
                <span className="text-[11px] uppercase tracking-wider text-neutral-400 block mb-1">
                  Location
                </span>
                <span className="font-medium text-[#111111] block">
                  #75, Toulsambo, Prey Veng, Dongkor
                </span>
                <span className="text-neutral-500 text-[11px]">12000 Phnom Penh, Cambodia</span>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-neutral-400 block mb-1">
                  Network
                </span>
                <a
                  href="https://www.linkedin.com/in/chamnabmey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#111111] hover:underline inline-flex items-center gap-1"
                >
                  <LinkedInIcon className="w-3 h-3" />
                  <span>linkedin.com/in/chamnabmey</span>
                </a>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-neutral-400">
              * Database synchronization active with Google Cloud Firestore.
            </div>
          </div>

          {/* Right Column: Minimalist Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-neutral-200/80 shadow-xs">
              
              {success ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 bg-neutral-100 text-neutral-900 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-[#111111]">Inquiry Received</h4>
                  <p className="text-xs sm:text-sm text-neutral-600 max-w-sm mx-auto">
                    Thank you for reaching out. Chamnab will review your business requirements and reply within 4 hours.
                  </p>
                  {resultDetails?.id && (
                    <div className="text-[11px] font-mono text-neutral-400 pt-2">
                      Reference: {resultDetails.id}
                    </div>
                  )}
                  <div className="pt-4">
                    <button
                      onClick={() => setSuccess(false)}
                      type="button"
                      className="px-5 py-2 rounded-full text-xs font-medium text-neutral-700 border border-neutral-300 hover:border-neutral-900"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                    <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sokha Keo"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAFAFA] border border-neutral-200 text-xs text-[#111111] placeholder-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAFAFA] border border-neutral-200 text-xs text-[#111111] placeholder-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1.5">
                        Phone / Telegram *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="+855 ... or @username"
                        value={formData.phoneOrTelegram}
                        onChange={(e) => setFormData({ ...formData, phoneOrTelegram: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAFAFA] border border-neutral-200 text-xs text-[#111111] placeholder-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1.5">
                        Company / Brand
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Acme Enterprise"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAFAFA] border border-neutral-200 text-xs text-[#111111] placeholder-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1.5">
                        Primary Service Needed *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAFAFA] border border-neutral-200 text-xs text-[#111111] focus:outline-none focus:border-neutral-900 transition-colors"
                      >
                        {services.map((srv, idx) => (
                          <option key={idx} value={srv}>
                            {srv}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1.5">
                        Monthly Budget Scope
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAFAFA] border border-neutral-200 text-xs text-[#111111] focus:outline-none focus:border-neutral-900 transition-colors"
                      >
                        {budgets.map((b, idx) => (
                          <option key={idx} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1.5">
                      Project Goals & Context *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Briefly describe your objectives, current challenges, and timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAFAFA] border border-neutral-200 text-xs text-[#111111] placeholder-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 rounded-full font-medium text-xs text-white bg-[#111111] hover:bg-black transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Sending inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Consultation Request</span>
                        <ArrowRight className="w-3.5 h-3.5" />
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
