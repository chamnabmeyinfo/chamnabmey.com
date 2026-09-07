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
  Sparkles
} from 'lucide-react';
import LinkedInIcon from './icons/LinkedInIcon';
import { submitClientLead, isFirebaseConfigured } from '@/lib/firebase';

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
    'Modern Web & Landing Page Development',
    'SEO & Organic Growth Strategy',
    'E-Commerce Strategy & Operations',
    'Full-Funnel Lead Generation Systems',
    'Hosting, WHM/cPanel & Cloud Infrastructure',
    'Custom Agency Retainer / Consultation',
  ];

  const budgets = [
    'Under $500',
    '$500 - $1,500 / month',
    '$1,500 - $3,000 / month',
    '$3,000+ / month',
    'One-time Project Quote',
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
      setError(err?.message || 'Something went wrong while submitting. Please try again or reach out via Telegram/Email.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
            Ready to Scale Your Digital Presence?
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Schedule a free 30-minute growth consultation or request a custom proposal. All inquiries are stored securely in our Google Cloud database.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details & Direct Reaches */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900/90 rounded-3xl p-8 border border-slate-800 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-white">Direct Channels</h3>
              <p className="text-sm text-slate-400">
                Prefer immediate messaging? Reach out directly via Telegram, Phone, or Email for rapid response.
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href="tel:+85515705703"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-emerald-500/40 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Phone & Telegram</span>
                    <p className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                      +855 15 705 703
                    </p>
                    <span className="text-xs text-emerald-400 font-medium">Available on Telegram & WhatsApp</span>
                  </div>
                </a>

                <a
                  href="mailto:admin@chamnabmey.com"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-emerald-500/40 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Official Inquiries</span>
                    <p className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                      admin@chamnabmey.com
                    </p>
                    <span className="text-xs text-slate-400">chamnabmey.info@gmail.com</span>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/chamnabmey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-emerald-500/40 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                    <LinkedInIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">LinkedIn Network</span>
                    <p className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                      linkedin.com/in/chamnabmey
                    </p>
                    <span className="text-xs text-slate-400">Connect professionally</span>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
                  <div className="p-3 rounded-xl bg-slate-800 text-slate-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Headquarters</span>
                    <p className="text-sm font-semibold text-white">
                      #75, Toulsambo, Prey Veng, Dongkor
                    </p>
                    <span className="text-xs text-slate-400">12000 Phnom Penh, Cambodia</span>
                  </div>
                </div>
              </div>

              {/* Response Time Guarantee */}
              <div className="pt-4 border-t border-slate-800 flex items-center gap-3 text-xs text-slate-400">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Typical response time: Under 4 hours on business days</span>
              </div>
            </div>

            {/* Google Database Status Card */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                <Database className="w-5 h-5" />
              </div>
              <div className="text-xs text-slate-400">
                <span className="font-semibold text-white block">Google Cloud Database Active</span>
                <span>Client submissions are synced and recorded to Google Firestore.</span>
              </div>
            </div>
          </div>

          {/* Main Consultation Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900 rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl relative">
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800">
                <div>
                  <h3 className="text-xl font-bold text-white">Project Inquiry & Consultation</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Fill out the details below to receive a personalized growth strategy.
                  </p>
                </div>
                <Sparkles className="w-6 h-6 text-emerald-400" />
              </div>

              {success ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30 animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">Consultation Request Received!</h4>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Thank you for reaching out, Chamnab will review your project details and contact you via Telegram/Email within 4 hours.
                  </p>
                  {resultDetails?.id && (
                    <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-400 inline-block font-mono">
                      Reference ID: {resultDetails.id}
                    </div>
                  )}
                  {resultDetails?.notice && (
                    <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-xs text-amber-300 max-w-md mx-auto">
                      {resultDetails.notice}
                    </div>
                  )}
                  <div className="pt-4">
                    <button
                      onClick={() => setSuccess(false)}
                      type="button"
                      className="px-6 py-2.5 rounded-xl text-sm font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-colors"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sokha Keo"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors text-sm"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Work / Personal Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone / Telegram */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Phone / Telegram *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="+855 ... or @username"
                        value={formData.phoneOrTelegram}
                        onChange={(e) => setFormData({ ...formData, phoneOrTelegram: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors text-sm"
                      />
                    </div>

                    {/* Company Name */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Company / Brand Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Acme Enterprise"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors text-sm"
                      />
                    </div>
                  </div>

                  {/* Primary Service Selection */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Primary Service Needed *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-emerald-500 transition-colors text-sm"
                    >
                      {services.map((srv, idx) => (
                        <option key={idx} value={srv}>
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Budget Scope Selection */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Estimated Monthly Budget / Scope
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-emerald-500 transition-colors text-sm"
                    >
                      {budgets.map((b, idx) => (
                        <option key={idx} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Project Details Message */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Project Goals & Challenges *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about your business goals, target audience, current challenges, or any specific deadlines..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors text-sm resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 px-6 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Submitting to Google Database...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Submit Consultation Request</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-slate-500 pt-1">
                    🔒 Your information is confidential and will never be shared with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
