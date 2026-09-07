'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import LinkedInIcon from './icons/LinkedInIcon';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="theme-canvas pt-20 pb-12 border-t theme-border overflow-hidden relative transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Top Callout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end pb-16 border-b theme-border">
          
          <div className="lg:col-span-8 space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-widest theme-text-faint">
              Direct Engagement
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-tight theme-text-main">
              Ready to engineer high-ROI growth for your business?
            </h2>
            <p className="text-xs sm:text-sm theme-text-muted max-w-xl font-light leading-relaxed">
              Available for high-impact advisory, performance media management, and end-to-end web & attribution infrastructure.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-3">
            <a
              href="#contact"
              className="theme-btn-primary gap-2 px-6 py-3 text-xs font-medium hover:scale-[1.02]"
            >
              <span>Book Strategic Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <span className="text-[11px] theme-text-faint font-mono">
              Response within 24 business hours
            </span>
          </div>

        </div>

        {/* Middle Navigation & Information Grid */}
        <div className="py-14 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 border-b theme-border text-xs theme-text-muted">
          
          {/* Column 1: Contact Direct */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-mono font-medium theme-text-main uppercase tracking-wider">
              Direct Office
            </h4>
            <div className="space-y-2 leading-relaxed theme-text-muted font-light">
              <p>
                <span className="theme-text-faint block text-[10px] uppercase font-mono">Telegram / Call</span>
                <a href="tel:+85515705703" className="hover:text-[var(--text-main)] transition-colors theme-text-main font-medium">
                  +855 15 705 703
                </a>
              </p>
              <p>
                <span className="theme-text-faint block text-[10px] uppercase font-mono">Official Email</span>
                <a href="mailto:admin@chamnabmey.com" className="hover:text-[var(--text-main)] transition-colors theme-text-main font-medium">
                  admin@chamnabmey.com
                </a>
              </p>
              <p>
                <span className="theme-text-faint block text-[10px] uppercase font-mono">Location</span>
                <span className="theme-text-main">Phnom Penh, Cambodia</span>
              </p>
            </div>
          </div>

          {/* Column 2: Core Capabilities */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-mono font-medium theme-text-main uppercase tracking-wider">
              Capabilities
            </h4>
            <ul className="space-y-2 theme-text-muted font-light">
              <li><a href="#services" className="hover:text-[var(--text-main)] transition-colors">Meta & Google Ads Management</a></li>
              <li><a href="#services" className="hover:text-[var(--text-main)] transition-colors">Full-Funnel CRO Architecture</a></li>
              <li><a href="#services" className="hover:text-[var(--text-main)] transition-colors">Server-Side Tracking & CAPI</a></li>
              <li><a href="#services" className="hover:text-[var(--text-main)] transition-colors">E-Commerce & Scale Infrastructure</a></li>
              <li><a href="#services" className="hover:text-[var(--text-main)] transition-colors">Executive Growth Advisory</a></li>
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-mono font-medium theme-text-main uppercase tracking-wider">
              Directory
            </h4>
            <ul className="space-y-2 theme-text-muted font-light">
              <li><a href="#about" className="hover:text-[var(--text-main)] transition-colors">Executive Background</a></li>
              <li><a href="#case-studies" className="hover:text-[var(--text-main)] transition-colors">Verified Case Studies</a></li>
              <li><a href="#skills" className="hover:text-[var(--text-main)] transition-colors">Marketing Tech Stack</a></li>
              <li><a href="#calculator" className="hover:text-[var(--text-main)] transition-colors">Growth & ROI Simulator</a></li>
              <li>
                <a
                  href="/Resume-CHAMNAB-MEY.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--text-main)] transition-colors inline-flex items-center gap-1 theme-text-main font-medium"
                >
                  <span>Resume (PDF)</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Professional Presence */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-mono font-medium theme-text-main uppercase tracking-wider">
              Network
            </h4>
            <ul className="space-y-2 theme-text-muted font-light">
              <li>
                <a
                  href="https://www.linkedin.com/in/chamnabmey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--text-main)] transition-colors inline-flex items-center gap-1.5 theme-text-main"
                >
                  <LinkedInIcon className="w-3.5 h-3.5 theme-text-muted" />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/chamnabmey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--text-main)] transition-colors inline-flex items-center gap-1 theme-text-main"
                >
                  <span>Telegram Direct</span>
                  <ArrowUpRight className="w-3 h-3 theme-text-faint" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:admin@chamnabmey.com"
                  className="hover:text-[var(--text-main)] transition-colors inline-flex items-center gap-1 theme-text-main"
                >
                  <span>Direct Inquiry Mail</span>
                  <ArrowUpRight className="w-3 h-3 theme-text-faint" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] theme-text-faint font-mono">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>© {new Date().getFullYear()} Chamnab Mey.</span>
            <span>All Rights Reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span>Senior Digital Marketing Strategist</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs">Next.js & Google Cloud</span>
            <button
              onClick={scrollToTop}
              className="theme-btn-secondary w-8 h-8 rounded-full flex items-center justify-center transition-colors"
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
