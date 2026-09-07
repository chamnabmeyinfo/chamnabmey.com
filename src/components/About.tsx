'use client';

import React from 'react';
import { ArrowUpRight, Download } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      num: '01',
      title: 'Performance Paid Media & CPA Optimization',
      text: 'Managing ad spend across Meta and Google Ads with disciplined creative testing, custom audience modeling, and systematic CPA reduction.',
    },
    {
      num: '02',
      title: 'Technical Tracking & Meta CAPI Attribution',
      text: 'Eliminating data loss through server-side Meta Conversion API (CAPI), Google Tag Manager, GA4 event modeling, and high-speed web infrastructure.',
    },
    {
      num: '03',
      title: 'Executive Leadership & Commercial Delivery',
      text: 'Track record directing 5 agency divisions as General Manager at KHB Media PLC, synchronizing creative video, design, and ad buying for corporate brands.',
    },
  ];

  return (
    <section id="about" className="py-24 theme-canvas border-b theme-border transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-xl mb-16 space-y-3">
          <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] theme-text-faint block">
            03 / Background & Approach
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold theme-text-main tracking-tight">
            Where Technical Precision Meets Commercial Growth
          </h2>
        </div>

        {/* Split Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Executive Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <blockquote className="text-xl sm:text-2xl font-bold theme-text-main leading-snug tracking-tight">
              &ldquo;Traffic without attribution is wasted capital. Creative campaigns without conversion architecture fail to scale.&rdquo;
            </blockquote>

            <div className="space-y-4 text-sm theme-text-muted leading-relaxed font-light">
              <p>
                Most digital marketing campaigns underperform because the underlying technical infrastructure is fragmented: slow landing pages, untracked pixels, and disconnected ad creatives bleed ROI.
              </p>
              <p>
                With an IT background from <strong className="theme-text-main font-semibold">Setec Institute</strong> and over a decade leading operations at <strong className="theme-text-main font-semibold">KHB Media PLC</strong> and <strong className="theme-text-main font-semibold">Riich Me</strong>, I unify media buying with clean code, sub-second page speeds, and server-side tracking.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="/Resume-CHAMNAB-MEY.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="theme-btn-secondary gap-2 px-5 py-2.5 text-xs font-medium"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-medium theme-text-muted hover:text-[var(--text-main)] transition-colors"
              >
                <span>Inquire engagement</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right: The 3 Core Pillars */}
          <div className="lg:col-span-6 space-y-6">
            {pillars.map((p) => (
              <div
                key={p.num}
                className="theme-card p-6 space-y-2 transition-all duration-300 hover:scale-[1.01]"
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-xs font-mono font-bold theme-text-faint">
                    {p.num}
                  </span>
                  <h3 className="text-base font-bold theme-text-main">
                    {p.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm theme-text-muted leading-relaxed pl-7 font-light">
                  {p.text}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
