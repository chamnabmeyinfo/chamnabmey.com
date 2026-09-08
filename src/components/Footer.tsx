'use client';

import React from 'react';
import { ArrowUp, ArrowUpRight, Mail, Phone, MapPin, Send } from 'lucide-react';
import LinkedInIcon from './icons/LinkedInIcon';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-20 pb-12 border-t-[1.8px] border-[#0C1F2E] bg-[#141414] text-[#BEBEBE] text-xs overflow-hidden relative font-body">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Top Callout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end pb-16 border-b border-[#0C1F2E]">
          
          <div className="lg:col-span-8 space-y-4">
            <span className="text-[11px] font-heading uppercase tracking-widest text-[#42AFFD] font-bold">
              Ready for Predictable Growth?
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Let&apos;s engineer high-ROI acquisition for your business.
            </h2>
            <p className="font-body text-sm text-[#BEBEBE] max-w-xl leading-[1.75]">
              Available for selective growth advisory, performance media management, and end-to-end web & server-side attribution infrastructure.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-3">
            <a
              href="#contact"
              className="btn-primary-invers px-6 py-3.5 text-xs font-medium gap-2"
            >
              <span>Book Growth Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <span className="text-[11px] text-[#BEBEBE]/70 font-body">
              Response within 24 business hours
            </span>
          </div>

        </div>

        {/* Middle Navigation & Information Grid */}
        <div className="py-14 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 border-b border-[#0C1F2E] text-xs">
          
          {/* Column 1: Direct Office */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-heading font-bold text-white uppercase tracking-wider">
              Direct Contact
            </h4>
            <div className="space-y-2.5 font-body">
              <p>
                <span className="text-[#BEBEBE]/60 block text-[10px] uppercase font-heading">Telegram / Call</span>
                <a href="tel:+85515705703" className="hover:text-[#139BFD] transition-colors text-white font-medium">
                  +855 15 705 703
                </a>
              </p>
              <p>
                <span className="text-[#BEBEBE]/60 block text-[10px] uppercase font-heading">Direct Email</span>
                <a href="mailto:admin@chamnabmey.com" className="hover:text-[#139BFD] transition-colors text-white font-medium">
                  admin@chamnabmey.com
                </a>
              </p>
              <p>
                <span className="text-[#BEBEBE]/60 block text-[10px] uppercase font-heading">Location</span>
                <span className="text-[#BEBEBE]">Phnom Penh, Cambodia</span>
              </p>
            </div>
          </div>

          {/* Column 2: Capabilities */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-heading font-bold text-white uppercase tracking-wider">
              Capabilities
            </h4>
            <ul className="space-y-2 font-body">
              <li><a href="#services" className="hover:text-[#139BFD] transition-colors">Performance Meta & Google Ads</a></li>
              <li><a href="#services" className="hover:text-[#139BFD] transition-colors">Server-Side Tracking & Meta CAPI</a></li>
              <li><a href="#services" className="hover:text-[#139BFD] transition-colors">Next.js 15 Web Architecture</a></li>
              <li><a href="#services" className="hover:text-[#139BFD] transition-colors">Technical & Local SEO</a></li>
              <li><a href="#services" className="hover:text-[#139BFD] transition-colors">Automated Lead Pipelines</a></li>
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-heading font-bold text-white uppercase tracking-wider">
              Directory
            </h4>
            <ul className="space-y-2 font-body">
              <li><a href="#about" className="hover:text-[#139BFD] transition-colors">Strategic Background</a></li>
              <li><a href="#why-solo" className="hover:text-[#139BFD] transition-colors">Why Solo Partner vs Agency</a></li>
              <li><a href="#case-studies" className="hover:text-[#139BFD] transition-colors">Verified Case Studies</a></li>
              <li><a href="#calculator" className="hover:text-[#139BFD] transition-colors">ROI Projection Simulator</a></li>
              <li><a href="#skills" className="hover:text-[#139BFD] transition-colors">Capabilities & Infrastructure</a></li>
              <li>
                <a
                  href="/Resume-CHAMNAB-MEY.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#42AFFD] transition-colors inline-flex items-center gap-1 text-[#139BFD] font-medium"
                >
                  <span>CV (PDF)</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Professional Presence */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-heading font-bold text-white uppercase tracking-wider">
              Connect
            </h4>
            <ul className="space-y-2 font-body">
              <li>
                <a
                  href="https://www.linkedin.com/in/chamnabmey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#139BFD] transition-colors inline-flex items-center gap-1.5 text-white"
                >
                  <LinkedInIcon className="w-3.5 h-3.5 text-[#139BFD]" />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/chamnabmey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#139BFD] transition-colors inline-flex items-center gap-1.5 text-white"
                >
                  <Send className="w-3.5 h-3.5 text-[#139BFD]" />
                  <span>Telegram Direct</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:admin@chamnabmey.com"
                  className="hover:text-[#139BFD] transition-colors inline-flex items-center gap-1.5 text-white"
                >
                  <Mail className="w-3.5 h-3.5 text-[#139BFD]" />
                  <span>Direct Inquiry Email</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#BEBEBE] font-body">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>© {new Date().getFullYear()} Chamnab Mey.</span>
            <span>Senior Digital Marketing Strategist & Growth Engineer.</span>
            <span className="hidden sm:inline">•</span>
            <span>Phnom Penh, Cambodia</span>
          </div>

          <div className="flex items-center gap-4">
            <span>Next.js 15 & Cloudflare Edge</span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-[6px] border-[1.8px] border-[#0C1F2E] bg-[#06131B] hover:border-[#139BFD] text-white flex items-center justify-center transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5 text-[#139BFD]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
