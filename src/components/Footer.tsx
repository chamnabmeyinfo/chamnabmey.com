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
    <footer className="bg-[#0F0F0F] text-white pt-20 pb-12 border-t border-black/10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Callout & Giant Watermark (Exact Biogra footer-4-area style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pb-16 border-b border-white/10">
          
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
              Unlock your brand’s <br />
              <span className="text-[#9175FF]">full growth potential.</span>
            </h2>
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-white bg-[#9175FF] hover:bg-[#7A5AF8] shadow-lg shadow-[#9175FF]/30 transition-all hover:-translate-y-0.5"
              >
                <span>Get Free Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 text-left lg:text-right">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter text-white/10 uppercase select-none">
              CHAMNAB
            </h1>
            <p className="text-xs text-[#888888] tracking-widest uppercase mt-2">
              Digital Marketing & Growth Partner
            </p>
          </div>

        </div>

        {/* Middle Navigation & Socials */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-white/10 text-xs text-[#888888]">
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Direct Contact</h4>
            <p className="leading-relaxed text-[#AAAAAA]">
              Phone/Telegram: +855 15 705 703 <br />
              Email: admin@chamnabmey.com <br />
              Phnom Penh, Cambodia
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Core Services</h4>
            <ul className="space-y-1.5 text-[#AAAAAA]">
              <li><a href="#services" className="hover:text-white transition-colors">Performance Paid Ads</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">High-Speed Web Development</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Meta CAPI & Tracking Setup</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">E-Commerce Scaling</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Navigation</h4>
            <ul className="space-y-1.5 text-[#AAAAAA]">
              <li><a href="#about" className="hover:text-white transition-colors">About Chamnab</a></li>
              <li><a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Marketing Tech Stack</a></li>
              <li><a href="/Resume-CHAMNAB-MEY.pdf" target="_blank" className="hover:text-white transition-colors">Download Resume (PDF)</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Social & Network</h4>
            <ul className="space-y-1.5 text-[#AAAAAA]">
              <li>
                <a
                  href="https://www.linkedin.com/in/chamnabmey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#9175FF] transition-colors flex items-center gap-1.5"
                >
                  <LinkedInIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/chamnabmey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#9175FF] transition-colors"
                >
                  Telegram Direct (@chamnabmey)
                </a>
              </li>
              <li>
                <a
                  href="mailto:admin@chamnabmey.com"
                  className="hover:text-[#9175FF] transition-colors"
                >
                  Official Email Channel
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#666666]">
          <p>© {new Date().getFullYear()} CHAMNAB MEY. All Rights Reserved.</p>
          
          <div className="flex items-center gap-4">
            <span>Powered by Next.js & Google Cloud</span>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#9175FF] text-white flex items-center justify-center transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
