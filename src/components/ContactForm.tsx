'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, AlertCircle, Loader2, ArrowRight, Mail, Phone, MapPin, Send, Sparkles } from 'lucide-react';
import LinkedInIcon from './icons/LinkedInIcon';
import { submitClientLead } from '@/lib/firebase';
import SpotlightCard from './SpotlightCard';

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

  const services = [
    'Performance Paid Ads (Meta & Google)',
    'High-Converting Web Architecture',
    'Technical & Local SEO Strategy',
    'E-Commerce Platform Operations',
    'Full-Funnel Lead Generation Systems',
    'Server-Side Meta CAPI Tracking Setup',
    'Executive Consultation / Retainer',
  ];

  const budgets = [
    'Under $500 / month',
    '$500 – $1,500 / month (Starter)',
    '$1,500 – $3,000 / month (Growth)',
    '$3,000+ / month (Scaling)',
    'One-time Architecture / Project Scope',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await submitClientLead(formData);
      setSuccess(true);
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
    <section id="contact" className="py-24 sm:py-32 relative border-b border-white/[0.06] bg-[#08090C] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -bottom-40 left-1/3 w-[600px] h-[500px] bg-cyan-500/10 blur-[150px] -z-10" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Info & Availability */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-neutral-400 text-xs font-mono uppercase tracking-wider">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                <span>07 / Direct Engagement</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Initiate a Partnership
              </h2>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-light">
                Whether you need an ad account audit, server-side Meta CAPI setup, or an end-to-end customer acquisition engine, share your parameters below.
              </p>
            </div>

            {/* Direct Contact Pillars */}
            <div className="space-y-4 pt-2 text-xs">
              
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Official Direct Email</span>
                </span>
                <a
                  href="mailto:admin@chamnabmey.com"
                  className="font-mono text-sm text-white hover:text-cyan-400 transition-colors block font-medium"
                >
                  admin@chamnabmey.com
                </a>
                <span className="text-neutral-400 text-[11px] font-mono">chamnabmey.info@gmail.com</span>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Phone & Instant Messaging</span>
                </span>
                <a
                  href="tel:+85515705703"
                  className="font-mono text-sm text-white hover:text-cyan-400 transition-colors block font-medium"
                >
                  +855 15 705 703
                </a>
                <span className="text-emerald-400 text-[11px] font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Telegram & WhatsApp active</span>
                </span>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Location</span>
                </span>
                <span className="font-medium text-white block">
                  #75, Toulsambo, Prey Veng, Dongkor
                </span>
                <span className="text-neutral-400 text-[11px] font-mono">12000 Phnom Penh, Cambodia</span>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                  <LinkedInIcon className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Executive Network</span>
                </span>
                <a
                  href="https://www.linkedin.com/in/chamnabmey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-cyan-400 hover:underline block"
                >
                  linkedin.com/in/chamnabmey
                </a>
              </div>

            </div>

            <div className="pt-2 text-[11px] text-neutral-400 font-mono">
              Inquiries dispatched instantly to private Telegram and logged in Google Cloud.
            </div>
          </motion.div>

          {/* Right Column: Dynamic Form in Spotlight Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <SpotlightCard
              spotlightColor="rgba(56, 189, 248, 0.15)"
              className="p-8 sm:p-10 border-white/[0.1] bg-[#0C0E14]/95 shadow-2xl"
            >
              <div className="mb-6 space-y-1">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Project Scope Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 font-light">
                  Fill out the parameters below. Chamnab will review your business model and reply within 24 business hours.
                </p>
              </div>

              {success ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 space-y-4 text-center">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <div className="space-y-1">
                    <h4 className="font-bold text-lg text-white">Inquiry Received Successfully</h4>
                    <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed max-w-md mx-auto">
                      Thank you! Your project request has been logged. Chamnab Mey will review your parameters and follow up via email or Telegram shortly.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSuccess(false)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-xs font-semibold transition-all mt-2"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/25 text-rose-400 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5 font-mono">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g., Sok Dara"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-cyan-400 focus:outline-none text-white text-xs placeholder:text-neutral-600 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5 font-mono">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-cyan-400 focus:outline-none text-white text-xs placeholder:text-neutral-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5 font-mono">
                        Phone / Telegram Handle *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="+855 12 345 678 or @handle"
                        value={formData.phoneOrTelegram}
                        onChange={(e) => setFormData({ ...formData, phoneOrTelegram: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-cyan-400 focus:outline-none text-white text-xs placeholder:text-neutral-600 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5 font-mono">
                        Company / Brand Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., Solis Cambodia"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-cyan-400 focus:outline-none text-white text-xs placeholder:text-neutral-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5 font-mono">
                        Primary Capability Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0D1015] border border-white/[0.08] focus:border-cyan-400 focus:outline-none text-white text-xs transition-colors"
                      >
                        {services.map((s) => (
                          <option key={s} value={s} className="bg-[#0D1015] text-white">
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5 font-mono">
                        Estimated Monthly Ad Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0D1015] border border-white/[0.08] focus:border-cyan-400 focus:outline-none text-white text-xs transition-colors"
                      >
                        {budgets.map((b) => (
                          <option key={b} value={b} className="bg-[#0D1015] text-white">
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5 font-mono">
                      Project Goals & Current Bottlenecks *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Briefly describe your objectives, current challenges, and timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-cyan-400 focus:outline-none text-white text-xs placeholder:text-neutral-600 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 px-6 rounded-xl font-bold text-xs sm:text-sm text-black bg-gradient-to-r from-cyan-300 via-cyan-400 to-teal-300 hover:from-cyan-200 hover:to-teal-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting parameters...</span>
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
            </SpotlightCard>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
