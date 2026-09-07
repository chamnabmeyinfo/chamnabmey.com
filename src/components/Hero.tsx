'use client';

import React from 'react';
import { ArrowRight, ArrowUpRight, Mail, Phone } from 'lucide-react';
import LinkedInIcon from './icons/LinkedInIcon';

export default function Hero() {
  const stats = [
    { value: '10+', label: 'Years Experience', note: 'Marketing & Ad Ops' },
    { value: '3.8x', label: 'Average Client ROAS', note: 'Paid acquisition' },
    { value: '$1M+', label: 'Ad Spend Managed', note: 'Meta & Google Ads' },
    { value: '50+', label: 'Platforms Delivered', note: 'Websites & funnels' },
  ];

  const clientBrands = [
    'Solis Cambodia',
    'KHB Media PLC',
    'Riich Me Co., Ltd',
    'EPOS-GODIGITAL',
    'KMall Events',
  ];

  return (
    <section className="pt-36 pb-20 sm:pt-44 sm:pb-28 theme-canvas border-b theme-border transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 text-xs font-medium theme-badge px-3 py-1 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-color)] animate-pulse" />
              <span>Available for Selective Partnerships & Strategy</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight theme-text-main leading-[1.08]">
                Data-Driven Marketing. <br />
                Built for Predictable <br />
                <span className="theme-text-muted font-normal">Revenue Growth.</span>
              </h1>
            </div>

            {/* Sub-copy */}
            <p className="text-base theme-text-muted leading-relaxed max-w-xl font-light">
              I am <strong className="theme-text-main font-semibold">Chamnab Mey</strong>, a Senior Digital Marketer and Web Consultant based in Phnom Penh. I partner with growing companies to build high-converting sales funnels, manage scalable Meta & Google ad campaigns, and engineer high-performance web systems.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                className="theme-btn-primary gap-2 px-7 py-3 text-xs font-medium"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#case-studies"
                className="theme-btn-secondary gap-2 px-6 py-3 text-xs font-medium"
              >
                <span>Selected Works</span>
              </a>
            </div>

            {/* Direct Contact Links */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs theme-text-faint">
              <a
                href="mailto:admin@chamnabmey.com"
                className="hover:text-[var(--text-main)] transition-colors"
              >
                admin@chamnabmey.com
              </a>
              <span>•</span>
              <a
                href="tel:+85515705703"
                className="hover:text-[var(--text-main)] transition-colors"
              >
                +855 15 705 703
              </a>
              <span>•</span>
              <a
                href="https://www.linkedin.com/in/chamnabmey"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--text-main)] transition-colors flex items-center gap-1"
              >
                <LinkedInIcon className="w-3 h-3" />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

          {/* Right Portrait Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[340px]">
              <div className="relative theme-card overflow-hidden aspect-[4/5]">
                <img
                  src="/images/chamnab-mey.jpg"
                  alt="Chamnab Mey"
                  className="w-full h-full object-cover object-top filter grayscale-[10%] hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-[11px] theme-text-faint uppercase tracking-wider font-mono px-1">
                <span>Chamnab Mey</span>
                <span>Phnom Penh, KH</span>
              </div>
            </div>
          </div>

        </div>

        {/* Dynamic Proof Metric Row */}
        <div className="mt-20 pt-12 border-t theme-border grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="theme-card p-5 space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold theme-text-main tracking-tight font-mono">
                {stat.value}
              </div>
              <div className="text-xs font-semibold theme-text-main">
                {stat.label}
              </div>
              <div className="text-[11px] theme-text-muted">
                {stat.note}
              </div>
            </div>
          ))}
        </div>

        {/* Verified Brands Ticker */}
        <div className="mt-14 pt-8 border-t theme-border flex flex-wrap items-center justify-between gap-4 text-xs">
          <span className="text-[11px] uppercase tracking-[0.15em] theme-text-faint font-mono">
            Commercial Experience
          </span>
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 font-medium theme-text-muted">
            {clientBrands.map((brand) => (
              <span
                key={brand}
                className="hover:text-[var(--text-main)] transition-colors"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
