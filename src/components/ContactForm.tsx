'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, AlertCircle, Loader2, ArrowRight, Mail, Phone, MapPin, Sparkles } from 'lucide-react';
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
    <section id="contact" className="py-24 sm:py-32 relative border-b-[1.8px] border-[#0C1F2E] bg-[#141414] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[10px] border-[1.8px] border-[#0C1F2E] bg-[#06131B] text-[#42AFFD] text-xs font-heading uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#139BFD]" />
                <span>07 / Direct Engagement</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] text-white leading-tight">
                Initiate a Partnership
              </h2>
              <p className="font-body text-base text-[#BEBEBE] leading-[1.75]">
                Whether you need an ad account audit, server-side Meta CAPI setup, or an end-to-end customer acquisition engine, share your parameters below.
              </p>
            </div>

            {/* Direct Contact Pillars: 20px radius cards */}
            <div className="space-y-4 pt-2 text-xs">
              
              <div className="p-4 rounded-[20px] bg-[#06131B] border-[1.8px] border-[#0C1F2E] space-y-1">
                <span className="text-[11px] font-heading uppercase tracking-wider text-[#BEBEBE] flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#139BFD]" />
                  <span>Official Direct Email</span>
                </span>
                <a
                  href="mailto:admin@chamnabmey.com"
                  className="font-heading text-sm text-white hover:text-[#139BFD] transition-colors block font-bold"
                >
                  admin@chamnabmey.com
                </a>
                <span className="text-[#BEBEBE] text-[11px] font-body">chamnabmey.info@gmail.com</span>
              </div>

              <div className="p-4 rounded-[20px] bg-[#06131B] border-[1.8px] border-[#0C1F2E] space-y-1">
                <span className="text-[11px] font-heading uppercase tracking-wider text-[#BEBEBE] flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#42AFFD]" />
                  <span>Phone & Instant Messaging</span>
                </span>
                <a
                  href="tel:+85515705703"
                  className="font-heading text-sm text-white hover:text-[#139BFD] transition-colors block font-bold"
                >
                  +855 15 705 703
                </a>
                <span className="text-[#42AFFD] text-[11px] font-body flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#139BFD] animate-pulse" />
                  <span>Telegram & WhatsApp active</span>
                </span>
              </div>

              <div className="p-4 rounded-[20px] bg-[#06131B] border-[1.8px] border-[#0C1F2E] space-y-1">
                <span className="text-[11px] font-heading uppercase tracking-wider text-[#BEBEBE] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#139BFD]" />
                  <span>Location</span>
                </span>
                <span className="font-heading text-xs font-bold text-white block">
                  #75, Toulsambo, Prey Veng, Dongkor
                </span>
                <span className="text-[#BEBEBE] text-[11px] font-body">12000 Phnom Penh, Cambodia</span>
              </div>

              <div className="p-4 rounded-[20px] bg-[#06131B] border-[1.8px] border-[#0C1F2E] space-y-1">
                <span className="text-[11px] font-heading uppercase tracking-wider text-[#BEBEBE] flex items-center gap-1.5">
                  <LinkedInIcon className="w-3.5 h-3.5 text-[#139BFD]" />
                  <span>Executive Network</span>
                </span>
                <a
                  href="https://www.linkedin.com/in/chamnabmey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading text-sm text-[#139BFD] hover:underline block font-bold"
                >
                  linkedin.com/in/chamnabmey
                </a>
              </div>

            </div>

            <div className="pt-2 text-[11px] text-[#BEBEBE] font-body">
              Inquiries dispatched instantly to private Telegram and logged in Google Cloud.
            </div>
          </motion.div>

          {/* Right Column: Dynamic Form in Inversweb Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <SpotlightCard className="p-8 sm:p-10 border-[#0C1F2E]">
              <div className="mb-6 space-y-1">
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Project Scope Inquiry
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#BEBEBE]">
                  Fill out the parameters below. Chamnab will review your business model and reply within 24 business hours.
                </p>
              </div>

              {success ? (
                <div className="p-8 rounded-[20px] bg-[#0C1F2E]/60 border-[1.8px] border-[#139BFD] text-white space-y-4 text-center">
                  <CheckCircle2 className="w-12 h-12 text-[#139BFD] mx-auto" />
                  <div className="space-y-1">
                    <h4 className="font-heading font-bold text-lg text-white">Inquiry Received Successfully</h4>
                    <p className="font-body text-xs sm:text-sm text-[#BEBEBE] leading-relaxed max-w-md mx-auto">
                      Thank you! Your project request has been logged. Chamnab Mey will review your parameters and follow up via email or Telegram shortly.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSuccess(false)}
                    className="btn-primary-invers px-5 py-2.5 text-xs font-medium mt-2"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="p-3.5 rounded-[5px] bg-rose-500/10 border-[1.8px] border-rose-500/30 text-rose-400 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  {/* Input Fields: 5px radius, 1.8px border #0C1F2E, 15px 20px padding */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-heading font-bold text-[#BEBEBE] mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g., Sok Dara"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="input-invers w-full text-xs placeholder:text-[#BEBEBE]/40"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-heading font-bold text-[#BEBEBE] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="input-invers w-full text-xs placeholder:text-[#BEBEBE]/40"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-heading font-bold text-[#BEBEBE] mb-1.5">
                        Phone / Telegram Handle *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="+855 12 345 678 or @handle"
                        value={formData.phoneOrTelegram}
                        onChange={(e) => setFormData({ ...formData, phoneOrTelegram: e.target.value })}
                        className="input-invers w-full text-xs placeholder:text-[#BEBEBE]/40"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-heading font-bold text-[#BEBEBE] mb-1.5">
                        Company / Brand Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., Solis Cambodia"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="input-invers w-full text-xs placeholder:text-[#BEBEBE]/40"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-heading font-bold text-[#BEBEBE] mb-1.5">
                        Primary Capability Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="input-invers w-full text-xs"
                      >
                        {services.map((s) => (
                          <option key={s} value={s} className="bg-[#06131B] text-white">
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-heading font-bold text-[#BEBEBE] mb-1.5">
                        Estimated Monthly Ad Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="input-invers w-full text-xs"
                      >
                        {budgets.map((b) => (
                          <option key={b} value={b} className="bg-[#06131B] text-white">
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold text-[#BEBEBE] mb-1.5">
                      Project Goals & Current Bottlenecks *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Briefly describe your objectives, current challenges, and timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="input-invers w-full text-xs placeholder:text-[#BEBEBE]/40 resize-none"
                    />
                  </div>

                  {/* Button Spec: 6px radius, #139BFD, 500 weight, flat */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary-invers w-full py-4 px-6 text-xs sm:text-sm font-medium gap-2 disabled:opacity-50"
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
