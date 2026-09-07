'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp, ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
import LinkedInIcon from './icons/LinkedInIcon';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] text-white pt-20 pb-12 border-t border-neutral-800 overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Top Minimalist Callout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end pb-16 border-b border-neutral-800">
          
          <div className="lg:col-span-8 space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400">
              Direct Engagement
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-tight text-white">
              Ready to engineer high-ROI growth for your business?
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-xl font-light leading-relaxed">
              Available for high-impact advisory, performance media management, and end-to-end web & attribution infrastructure.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-medium text-neutral-950 bg-white hover:bg-neutral-100 transition-all hover:scale-[1.02]"
            >
              <span>Book Strategic Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <span className="text-[11px] text-neutral-400">Response within 24 business hours</span>
          </div>

        </div>

        {/* Middle Navigation & Information Grid */}
        <div className="py-14 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 border-b border-neutral-800 text-xs text-neutral-400">
          
          {/* Column 1: Contact Direct */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-mono font-medium text-white uppercase tracking-wider">
              Direct Office
            </h4>
            <div className="space-y-2 leading-relaxed text-neutral-400 font-light">
              <p>
                <span className="text-neutral-400 block text-[10px] uppercase">Telegram / Call</span>
                <a href="tel:+85515705703" className="hover:text-white transition-colors text-neutral-200">
                  +855 15 705 703
                </a>
              </p>
              <p>
                <span className="text-neutral-400 block text-[10px] uppercase">Official Email</span>
                <a href="mailto:admin@chamnabmey.com" className="hover:text-white transition-colors text-neutral-200">
                  admin@chamnabmey.com
                </a>
              </p>
              <p>
                <span className="text-neutral-400 block text-[10px] uppercase">Location</span>
                <span className="text-neutral-200">Phnom Penh, Cambodia</span>
              </p>
            </div>
          </div>

          {/* Column 2: Core Capabilities */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-mono font-medium text-white uppercase tracking-wider">
              Capabilities
            </h4>
            <ul className="space-y-2 text-neutral-400 font-light">
              <li><a href="#services" className="hover:text-white transition-colors">Meta & Google Ads Management</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Full-Funnel CRO Architecture</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Server-Side Tracking & CAPI</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">E-Commerce & Scale Infrastructure</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Executive Growth Advisory</a></li>
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-mono font-medium text-white uppercase tracking-wider">
              Directory
            </h4>
            <ul className="space-y-2 text-neutral-400 font-light">
              <li><a href="#about" className="hover:text-white transition-colors">Executive Background</a></li>
              <li><a href="#case-studies" className="hover:text-white transition-colors">Verified Case Studies</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Marketing Tech Stack</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">Growth & ROI Simulator</a></li>
              <li>
                <a
                  href="/Resume-CHAMNAB-MEY.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1 text-neutral-200 font-medium"
                >
                  <span>Resume (PDF)</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Professional Presence */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-mono font-medium text-white uppercase tracking-wider">
              Network
            </h4>
            <ul className="space-y-2 text-neutral-400 font-light">
              <li>
                <a
                  href="https://www.linkedin.com/in/chamnabmey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5 text-neutral-200"
                >
                  <LinkedInIcon className="w-3.5 h-3.5 text-neutral-400" />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/chamnabmey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1 text-neutral-200"
                >
                  <span>Telegram Direct</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:admin@chamnabmey.com"
                  className="hover:text-white transition-colors inline-flex items-center gap-1 text-neutral-200"
                >
                  <span>Direct Inquiry Mail</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400 font-mono">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>© {new Date().getFullYear()} Chamnab Mey.</span>
            <span>All Rights Reserved.</span>
            <span className="hidden sm:inline text-neutral-400">•</span>
            <span>Senior Digital Marketing Strategist</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-neutral-400 font-sans text-xs">Next.js & Google Cloud</span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full border border-neutral-800 hover:border-neutral-600 bg-neutral-900/50 hover:bg-neutral-800 text-neutral-400 hover:text-white flex items-center justify-center transition-colors"
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
