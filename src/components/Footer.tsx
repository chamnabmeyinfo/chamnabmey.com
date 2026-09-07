'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Download, ArrowUp, Heart } from 'lucide-react';
import LinkedInIcon from './icons/LinkedInIcon';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center font-bold text-slate-950 text-lg shadow-md shadow-emerald-500/20">
                CM
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                CHAMNAB MEY
              </span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Digital Marketing Manager, Performance Ad Strategist, and Web Developer based in Phnom Penh, Cambodia. Helping forward-thinking brands scale customer acquisition and revenue.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="/Resume-CHAMNAB-MEY.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 border border-slate-700 text-emerald-400 hover:border-emerald-500 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#about" className="hover:text-emerald-400 transition-colors">
                  About Chamnab
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-emerald-400 transition-colors">
                  Services & Deliverables
                </Link>
              </li>
              <li>
                <Link href="#case-studies" className="hover:text-emerald-400 transition-colors">
                  Client Case Studies
                </Link>
              </li>
              <li>
                <Link href="#skills" className="hover:text-emerald-400 transition-colors">
                  Skills & Tech Matrix
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-emerald-400 transition-colors">
                  Executive References
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Core Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="hover:text-slate-300">Facebook & Meta Ads Funnels</li>
              <li className="hover:text-slate-300">Google Ads & Search Marketing</li>
              <li className="hover:text-slate-300">Next.js & WordPress Development</li>
              <li className="hover:text-slate-300">Technical SEO & CRO</li>
              <li className="hover:text-slate-300">cPanel & WHM Infrastructure</li>
              <li className="hover:text-slate-300">E-Commerce Marketplace Strategy</li>
            </ul>
          </div>

          {/* Direct Contacts */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Get in Touch
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="mailto:admin@chamnabmey.com"
                  className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">admin@chamnabmey.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+85515705703"
                  className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>+855 15 705 703</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/chamnabmey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
                >
                  <LinkedInIcon className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                <span>#75, Toulsambo, Prey Veng, Dongkor, Phnom Penh</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} CHAMNAB MEY. All rights reserved.</p>
          
          <div className="flex items-center gap-4 text-slate-400">
            <span>Powered by Next.js & Google Cloud</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
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
