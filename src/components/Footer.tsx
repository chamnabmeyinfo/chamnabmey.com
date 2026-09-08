'use client';

import React from 'react';
import { ArrowUp, ArrowUpRight, Mail, Phone, MapPin, Send } from 'lucide-react';
import LinkedInIcon from './icons/LinkedInIcon';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-20 pb-12 border-t border-white/[0.08] bg-[#06080B] text-neutral-400 text-xs overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Top Callout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end pb-16 border-b border-white/[0.06]">
          
          <div className="lg:col-span-8 space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 font-semibold">
              Ready for Predictable Growth?
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Let&apos;s engineer high-ROI acquisition for your business.
            </h2>
            <p className="text-sm text-neutral-400 max-w-xl font-light leading-relaxed">
              Available for selective growth advisory, performance media management, and end-to-end web & server-side attribution infrastructure.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold text-black bg-gradient-to-r from-cyan-300 via-cyan-400 to-teal-300 hover:from-cyan-200 hover:to-teal-200 rounded-full shadow-lg shadow-cyan-500/20 hover:scale-[1.02] transition-all"
            >
              <span>Book Growth Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <span className="text-[11px] text-neutral-400 font-mono">
              Response within 24 business hours
            </span>
          </div>

        </div>

        {/* Middle Navigation & Information Grid */}
        <div className="py-14 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 border-b border-white/[0.06] text-xs">
          
          {/* Column 1: Direct Office */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-mono font-bold text-white uppercase tracking-wider">
              Direct Contact
            </h4>
            <div className="space-y-2.5 font-light">
              <p>
                <span className="text-neutral-400 block text-[10px] uppercase font-mono">Telegram / Call</span>
                <a href="tel:+85515705703" className="hover:text-cyan-400 transition-colors text-white font-medium font-mono">
                  +855 15 705 703
                </a>
              </p>
              <p>
                <span className="text-neutral-400 block text-[10px] uppercase font-mono">Direct Email</span>
                <a href="mailto:admin@chamnabmey.com" className="hover:text-cyan-400 transition-colors text-white font-medium font-mono">
                  admin@chamnabmey.com
                </a>
              </p>
              <p>
                <span className="text-neutral-400 block text-[10px] uppercase font-mono">Location</span>
                <span className="text-neutral-200">Phnom Penh, Cambodia</span>
              </p>
            </div>
          </div>

          {/* Column 2: Capabilities */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-mono font-bold text-white uppercase tracking-wider">
              Capabilities
            </h4>
            <ul className="space-y-2 font-light">
              <li><a href="#services" className="hover:text-white transition-colors">Performance Meta & Google Ads</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Server-Side Tracking & Meta CAPI</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Next.js 15 Web Architecture</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Technical & Local SEO</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Automated Lead Pipelines</a></li>
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-mono font-bold text-white uppercase tracking-wider">
              Directory
            </h4>
            <ul className="space-y-2 font-light">
              <li><a href="#about" className="hover:text-white transition-colors">Strategic Background</a></li>
              <li><a href="#why-solo" className="hover:text-white transition-colors">Why Solo Partner vs Agency</a></li>
              <li><a href="#case-studies" className="hover:text-white transition-colors">Verified Case Studies</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">ROI Projection Simulator</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Capabilities & Infrastructure</a></li>
              <li>
                <a
                  href="/Resume-CHAMNAB-MEY.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1 text-cyan-400 font-medium"
                >
                  <span>CV (PDF)</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Professional Presence */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-mono font-bold text-white uppercase tracking-wider">
              Connect
            </h4>
            <ul className="space-y-2 font-light">
              <li>
                <a
                  href="https://www.linkedin.com/in/chamnabmey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5 text-neutral-200"
                >
                  <LinkedInIcon className="w-3.5 h-3.5 text-cyan-400" />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/chamnabmey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5 text-neutral-200"
                >
                  <Send className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Telegram Direct</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:admin@chamnabmey.com"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5 text-neutral-200"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Direct Inquiry Email</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400 font-mono">
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
              className="w-8 h-8 rounded-full border border-white/[0.1] bg-white/[0.04] hover:bg-white/[0.1] text-white flex items-center justify-center transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
