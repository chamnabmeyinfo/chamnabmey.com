"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import VirtuoButton from "./VirtuoButton";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate submission / Firebase dispatch
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
    }, 800);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-[#06131B]/70 border-t-[1.8px] border-[#0C1F2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="card-invers p-8 sm:p-14 relative overflow-hidden">
          <div className="tmp-light light-top-left" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 relative z-10">
            
            {/* Left Column: Direct Contact Details */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="subtitle theme-gradient font-heading text-xs uppercase tracking-widest font-bold block mb-3">
                  Get In Touch
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                  Get Ready To Create <br />
                  <span className="text-gradient-invers">Predictable Revenue</span>
                </h2>
                <p className="font-body text-sm text-[#BEBEBE] mt-4 leading-relaxed">
                  Have an active media spend of \$500+/month or need enterprise-grade server-side tracking? Connect with me directly for a confidential audit.
                </p>

                <div className="mt-8 space-y-4">
                  <a
                    href="mailto:admin@chamnabmey.com"
                    className="flex items-center gap-4 p-4 rounded-xl border border-[#0C1F2E] bg-[#0A1A26]/60 hover:border-[#139BFD] transition-colors group"
                  >
                    <div className="w-11 h-11 rounded-lg bg-[#139BFD]/10 text-[#139BFD] flex items-center justify-center group-hover:bg-[#139BFD] group-hover:text-black transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-heading tracking-wider text-[#BEBEBE] block">
                        Direct Email
                      </span>
                      <span className="text-sm font-bold text-white group-hover:text-[#139BFD] transition-colors font-heading">
                        admin@chamnabmey.com
                      </span>
                    </div>
                  </a>

                  <a
                    href="https://t.me/chamnabmey"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border border-[#0C1F2E] bg-[#0A1A26]/60 hover:border-[#139BFD] transition-colors group"
                  >
                    <div className="w-11 h-11 rounded-lg bg-[#139BFD]/10 text-[#139BFD] flex items-center justify-center group-hover:bg-[#139BFD] group-hover:text-black transition-colors">
                      <Send className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-heading tracking-wider text-[#BEBEBE] block">
                        Direct Telegram
                      </span>
                      <span className="text-sm font-bold text-white group-hover:text-[#139BFD] transition-colors font-heading">
                        @chamnabmey
                      </span>
                    </div>
                  </a>

                  <a
                    href="tel:+85515705703"
                    className="flex items-center gap-4 p-4 rounded-xl border border-[#0C1F2E] bg-[#0A1A26]/60 hover:border-[#139BFD] transition-colors group"
                  >
                    <div className="w-11 h-11 rounded-lg bg-[#139BFD]/10 text-[#139BFD] flex items-center justify-center group-hover:bg-[#139BFD] group-hover:text-black transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-heading tracking-wider text-[#BEBEBE] block">
                        Phone Direct
                      </span>
                      <span className="text-sm font-bold text-white group-hover:text-[#139BFD] transition-colors font-heading">
                        +855 15 705 703
                      </span>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-xl border border-[#0C1F2E] bg-[#0A1A26]/60">
                    <div className="w-11 h-11 rounded-lg bg-[#139BFD]/10 text-[#139BFD] flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-heading tracking-wider text-[#BEBEBE] block">
                        Headquarters
                      </span>
                      <span className="text-sm font-bold text-white font-heading">
                        Phnom Penh, Cambodia
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#0C1F2E]">
                <div className="flex items-center gap-2 text-xs text-[#BEBEBE]">
                  <span className="w-2 h-2 rounded-full bg-[#13FDFD] animate-ping" />
                  <span>Typically responds within 2 business hours (ICT GMT+7).</span>
                </div>
              </div>
            </div>

            {/* Right Column: Virtuo Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#0A1A26] border-[1.8px] border-[#0C1F2E] rounded-[20px] p-6 sm:p-10">
                <span className="text-xs uppercase font-heading font-bold tracking-widest text-[#42AFFD] block mb-2">
                  START A CONVERSATION
                </span>
                <h3 className="font-heading text-2xl font-bold text-white mb-6">
                  Request a Confidential Growth Audit
                </h3>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-[#06131B] border border-[#139BFD] text-center space-y-4">
                    <CheckCircle2 className="w-12 h-12 text-[#139BFD] mx-auto" />
                    <h4 className="font-heading text-xl font-bold text-white">
                      Inquiry Received Successfully
                    </h4>
                    <p className="font-body text-sm text-[#BEBEBE] max-w-md mx-auto">
                      Thank you for reaching out. I personally review every inquiry and will respond within 2 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-[#139BFD] underline font-heading pt-2"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-heading font-medium text-[#BEBEBE] mb-1.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. John Doe"
                          className="input-invers w-full text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-heading font-medium text-[#BEBEBE] mb-1.5">
                          Phone / Telegram *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+855 12 345 678"
                          className="input-invers w-full text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-heading font-medium text-[#BEBEBE] mb-1.5">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@company.com"
                          className="input-invers w-full text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-heading font-medium text-[#BEBEBE] mb-1.5">
                          Primary Objective
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="input-invers w-full text-sm bg-[#06131B]"
                        >
                          <option value="">Select Service Scope</option>
                          <option value="Paid Ads Scale">Performance Paid Ads (Meta/Google)</option>
                          <option value="Meta CAPI Setup">Meta CAPI &amp; Tracking Fix</option>
                          <option value="High-Converting Web">High-Converting Web Architecture</option>
                          <option value="Full Growth Advisory">Solo Fractional CMO / Growth Advisory</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-heading font-medium text-[#BEBEBE] mb-1.5">
                        Tell Me About Your Business &amp; Goals *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Current monthly ad spend, business niche, and what you're trying to solve..."
                        className="input-invers w-full text-sm resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <VirtuoButton
                        type="submit"
                        text={loading ? "Sending..." : "Submit Inquiry &amp; Request Audit"}
                        variant="primary"
                        className="w-full justify-center !py-4"
                      />
                    </div>
                  </form>
                )}

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
