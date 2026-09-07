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
      console.error('Submission error:', err);
      setError(err.message || 'An error occurred while sending your message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 theme-canvas border-b theme-border transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] theme-text-faint block">
                07 / Contact
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold theme-text-main tracking-tight">
                Initiate a Partnership
              </h2>
              <p className="text-xs sm:text-sm theme-text-muted leading-relaxed font-light">
                Whether you need a performance ad strategy audit, high-converting landing page, or full-funnel customer acquisition, send your project details below.
              </p>
            </div>

            <div className="space-y-4 pt-2 text-xs">
              <div className="pb-3 border-b theme-border">
                <span className="text-[11px] font-mono uppercase tracking-wider theme-text-faint block mb-1">
                  Official Email
                </span>
                <a
                  href="mailto:admin@chamnabmey.com"
                  className="font-medium theme-text-main hover:underline block"
                >
                  admin@chamnabmey.com
                </a>
                <span className="theme-text-faint text-[11px]">chamnabmey.info@gmail.com</span>
              </div>

              <div className="pb-3 border-b theme-border">
                <span className="text-[11px] font-mono uppercase tracking-wider theme-text-faint block mb-1">
                  Phone & Messaging
                </span>
                <a
                  href="tel:+85515705703"
                  className="font-medium theme-text-main hover:underline block"
                >
                  +855 15 705 703
                </a>
                <span className="theme-text-faint text-[11px]">Telegram & WhatsApp available</span>
              </div>

              <div className="pb-3 border-b theme-border">
                <span className="text-[11px] font-mono uppercase tracking-wider theme-text-faint block mb-1">
                  Location
                </span>
                <span className="font-medium theme-text-main block">
                  #75, Toulsambo, Prey Veng, Dongkor
                </span>
                <span className="theme-text-faint text-[11px]">12000 Phnom Penh, Cambodia</span>
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider theme-text-faint block mb-1">
                  Network
                </span>
                <a
                  href="https://www.linkedin.com/in/chamnabmey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium theme-text-main hover:underline inline-flex items-center gap-1"
                >
                  <LinkedInIcon className="w-3 h-3" />
                  <span>linkedin.com/in/chamnabmey</span>
                </a>
              </div>
            </div>

            <div className="pt-2 text-[11px] theme-text-faint font-mono">
              Inquiries dispatched instantly to private Telegram and logged in Google Cloud.
            </div>
          </div>

          {/* Right Column: Dynamic Form Card */}
          <div className="lg:col-span-7">
            <div className="theme-card p-8 sm:p-10 shadow-sm">
              <h3 className="text-xl font-bold theme-text-main tracking-tight mb-2">
                Project Scope Inquiry
              </h3>
              <p className="text-xs theme-text-muted mb-6 font-light">
                Fill out the form below. Chamnab Mey will review your goals and reply within 24 business hours.
              </p>

              {success ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <h4 className="font-bold text-sm">Inquiry Received Successfully</h4>
                  </div>
                  <p className="text-xs leading-relaxed">
                    Thank you! Your project request has been logged. Chamnab will review your parameters and follow up via email or Telegram shortly.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="theme-btn-primary text-xs px-4 py-2 mt-2"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="p-3.5 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium theme-text-main mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g., Sok Dara"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="theme-input w-full px-3.5 py-2.5 text-xs placeholder-[var(--text-faint)] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium theme-text-main mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="theme-input w-full px-3.5 py-2.5 text-xs placeholder-[var(--text-faint)] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium theme-text-main mb-1.5">
                        Phone / Telegram *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="+855 12 345 678 or @handle"
                        value={formData.phoneOrTelegram}
                        onChange={(e) => setFormData({ ...formData, phoneOrTelegram: e.target.value })}
                        className="theme-input w-full px-3.5 py-2.5 text-xs placeholder-[var(--text-faint)] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium theme-text-main mb-1.5">
                        Company / Brand
                      </label>
                      <input
                        type="text"
                        placeholder="Company name or URL"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="theme-input w-full px-3.5 py-2.5 text-xs placeholder-[var(--text-faint)] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium theme-text-main mb-1.5">
                        Primary Service Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="theme-input w-full px-3.5 py-2.5 text-xs focus:outline-none"
                      >
                        {services.map((s) => (
                          <option key={s} value={s} className="theme-canvas text-[var(--text-main)]">
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium theme-text-main mb-1.5">
                        Estimated Budget (Monthly / Scope)
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="theme-input w-full px-3.5 py-2.5 text-xs focus:outline-none"
                      >
                        {budgets.map((b) => (
                          <option key={b} value={b} className="theme-canvas text-[var(--text-main)]">
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium theme-text-main mb-1.5">
                      Project Goals & Context *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Briefly describe your objectives, current challenges, and timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="theme-input w-full px-3.5 py-2.5 text-xs placeholder-[var(--text-faint)] focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="theme-btn-primary w-full py-3.5 px-6 font-medium text-xs gap-2 disabled:opacity-50"
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
