'use client';

import React from 'react';
import { ArrowRight, CheckCircle2, TrendingUp, Users, ShieldCheck, Mail, Phone, ExternalLink } from 'lucide-react';
import LinkedInIcon from './icons/LinkedInIcon';

export default function Hero() {
  const stats = [
    { label: 'Years Experience', value: '10+', sub: 'Digital & Web Ops' },
    { label: 'Proven Client ROI', value: '3.5x+', sub: 'Average Ad Return' },
    { label: 'Projects Delivered', value: '50+', sub: 'Websites & Funnels' },
    { label: 'Ad Spend Managed', value: '$1M+', sub: 'Meta & Google Ads' },
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center bg-slate-950 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
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
              Hello, I&apos;m <strong className="text-white font-semibold">CHAMNAB MEY</strong>. I help SMEs, e-commerce brands, and growing enterprises in Cambodia and Southeast Asia scale predictably through high-converting sales funnels, paid Meta/Google ad campaigns, and high-performance websites.
            </p>

            {/* Value bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Meta (Facebook) & Google Ads Funnels</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>High-Speed SEO & Next.js/WordPress Sites</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>End-to-End E-commerce Operations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Server & Cloud Infrastructure (cPanel/WHM)</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all"
              >
                <span>Request Free Strategy Audit</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#case-studies"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all"
              >
                <span>Explore Client Results</span>
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

          {/* Profile & Executive Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md bg-gradient-to-b from-slate-850 to-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-700/70 shadow-2xl shadow-black/80">
              {/* Top Accent Gradient Border */}
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />

              {/* Profile Card Header */}
              <div className="flex items-center gap-4 pb-6 border-b border-slate-800">
                <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-600 p-1 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                  <div className="w-full h-full rounded-[14px] bg-slate-900 flex flex-col items-center justify-center text-white">
                    <span className="text-2xl font-black tracking-wider text-emerald-400">CM</span>
                    <span className="text-[9px] uppercase tracking-widest text-slate-400">Strategist</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">CHAMNAB MEY</h3>
                  <p className="text-sm text-emerald-400 font-medium">Digital Marketing & Tech Specialist</p>
                  <p className="text-xs text-slate-400 mt-0.5">Phnom Penh, Cambodia 🇰🇭</p>
                </div>
              </div>

              {/* Executive Summary in Card */}
              <div className="py-5 space-y-3.5 text-sm">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <TrendingUp className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-200 font-semibold block text-xs uppercase tracking-wider">Proven Sales Generation</span>
                    <p className="text-slate-400 text-xs mt-0.5">Scaled tractor sales inquiries for Solis Cambodia and boosted conversion funnels across multiple brands.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <Users className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-200 font-semibold block text-xs uppercase tracking-wider">Former General Manager</span>
                    <p className="text-slate-400 text-xs mt-0.5">Led 5 cross-functional divisions at KHB Media PLC (Ad ops, Web dev, Video production, Graphic design).</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <ShieldCheck className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-200 font-semibold block text-xs uppercase tracking-wider">IT & Engineering Foundation</span>
                    <p className="text-slate-400 text-xs mt-0.5">Setec Institute & IU IT background. Bridging the gap between technical infrastructure and high ROI marketing.</p>
                  </div>
                </div>
              </div>

              {/* Quick Action */}
              <div className="pt-2">
                <a
                  href="#contact"
                  className="w-full block text-center py-3 px-4 rounded-xl text-sm font-semibold bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 transition-colors"
                >
                  Work With Chamnab →
                </a>
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

      </div>
    </section>
  );
}
