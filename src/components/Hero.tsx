'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  ShieldCheck, 
  Mail, 
  Phone, 
  ExternalLink,
  Award,
  Sparkles,
  BarChart2
} from 'lucide-react';
import LinkedInIcon from './icons/LinkedInIcon';

export default function Hero() {
  // Demo executive portrait reference. Chamnab can easily swap this with his own photo at '/images/profile.jpg'
  const [profileImage, setProfileImage] = useState(
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80'
  );

  const stats = [
    { label: 'Years Experience', value: '10+', sub: 'Digital & Web Ops' },
    { label: 'Proven Client ROI', value: '3.5x+', sub: 'Average Ad Return' },
    { label: 'Projects Delivered', value: '50+', sub: 'Websites & Funnels' },
    { label: 'Ad Spend Managed', value: '$1M+', sub: 'Meta & Google Ads' },
  ];

  const brandLogos = [
    { name: 'Solis Cambodia', type: 'Agricultural Machinery', tag: 'Lead Funnel & Web' },
    { name: 'KHB Media PLC', type: 'Digital Media Agency', tag: 'General Manager' },
    { name: 'Riich Me', type: 'E-Commerce Marketplace', tag: 'Operations & Growth' },
    { name: 'EPOS-GODIGITAL', type: 'Retail Tech Platform', tag: 'Digital Strategy' },
    { name: 'KMall Events', type: 'Commercial Retail', tag: 'Event Marketing' },
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-16 flex flex-col justify-center bg-slate-950 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Available for Q3/Q4 Client Consultations & Retainers
            </div>

            {/* Powerful Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Transforming Clicks into Revenue with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                Data-Driven Marketing
              </span>{' '}
              & Modern Web Solutions.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Hello, I&apos;m <strong className="text-white font-semibold">CHAMNAB MEY</strong>. Senior Digital Marketing Strategist and Web Developer in Phnom Penh. I help SMEs and commercial brands scale through profitable Meta & Google Ads, high-converting lead funnels, and enterprise-grade web platforms.
            </p>

            {/* Value bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Meta (Facebook) & Google Ads Funnels</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>High-Speed SEO & Next.js/WordPress Sites</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>End-to-End E-commerce Operations</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Server & Tracking Infrastructure (GTM/CAPI)</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all"
              >
                <span>Book Free Growth Audit</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#case-studies"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all"
              >
                <span>View Proven Results</span>
              </a>
            </div>

            {/* Fast Connect Bar */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
              <a
                href="mailto:admin@chamnabmey.com"
                className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>admin@chamnabmey.com</span>
              </a>
              <a
                href="tel:+85515705703"
                className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>+855 15 705 703</span>
              </a>
              <a
                href="https://www.linkedin.com/in/chamnabmey"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
              >
                <LinkedInIcon className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>

          {/* Professional Visual Showcase Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Glowing aura frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500" />

              <div className="relative bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl">
                {/* Image Container with Dark Gradient Overlay */}
                <div className="relative h-96 w-full bg-slate-850 overflow-hidden">
                  <img
                    src={profileImage}
                    alt="CHAMNAB MEY - Professional Digital Marketer & Strategist"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    onError={() => {
                      // Fallback placeholder if remote is blocked
                      setProfileImage('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80');
                    }}
                  />
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                  
                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 backdrop-blur-md bg-slate-950/80 border border-slate-700/80 rounded-xl px-3 py-1.5 flex items-center gap-2 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-semibold text-slate-200">Meta & Google Ads Specialist</span>
                  </div>

                  {/* Demo reference note badge */}
                  <div className="absolute top-4 right-4 backdrop-blur-md bg-emerald-950/80 border border-emerald-500/40 rounded-lg px-2.5 py-1 flex items-center gap-1.5 text-[10px] text-emerald-300 font-medium">
                    <Sparkles className="w-3 h-3 text-emerald-400" />
                    <span>Demo Photo</span>
                  </div>
                </div>

                {/* Profile Card Body */}
                <div className="p-6 bg-slate-900 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">CHAMNAB MEY</h3>
                      <p className="text-xs text-emerald-400 font-medium">Senior Digital Marketing & Growth Partner</p>
                    </div>
                    <span className="text-xs text-slate-400 px-2.5 py-1 bg-slate-950 rounded-lg border border-slate-800">
                      Phnom Penh 🇰🇭
                    </span>
                  </div>

                  {/* Highlights with Live Metrics */}
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                      <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold mb-1">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>3.8x Avg ROAS</span>
                      </div>
                      <p className="text-[11px] text-slate-400">High-converting paid acquisition funnels</p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                      <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-semibold mb-1">
                        <Award className="w-3.5 h-3.5" />
                        <span>Ex-General Manager</span>
                      </div>
                      <p className="text-[11px] text-slate-400">Led 5 agency teams at KHB Media PLC</p>
                    </div>
                  </div>

                  <a
                    href="#contact"
                    className="w-full block text-center py-3 rounded-xl text-xs sm:text-sm font-bold bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 transition-colors"
                  >
                    Start A Project With Chamnab →
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Stats Strip */}
        <div className="mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60">
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                {s.value}
              </div>
              <div className="text-sm font-semibold text-slate-200 mt-1">{s.label}</div>
              <div className="text-xs text-slate-400">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Brand & Organization Credibility Ticker */}
        <div className="mt-12 pt-8 border-t border-slate-900">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-500 mb-6">
            Organizations, Brands & Platforms Led and Scaled by Chamnab Mey
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            {brandLogos.map((brand, bIdx) => (
              <div
                key={bIdx}
                className="px-4 py-2 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center gap-2 text-xs font-medium text-slate-300 hover:border-emerald-500/40 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="font-bold text-white">{brand.name}</span>
                <span className="text-slate-500 hidden sm:inline">•</span>
                <span className="text-slate-400 hidden sm:inline text-[11px]">{brand.tag}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
