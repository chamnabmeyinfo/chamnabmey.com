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
    <section className="pt-36 pb-20 sm:pt-44 sm:pb-28 bg-[#FAFAFA] border-b border-neutral-200/70">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Minimalist Status Badge */}
            <div className="inline-flex items-center gap-2 text-xs font-medium text-neutral-600">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
              <span>Available for Selective Client Partnerships & Strategy</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111111] leading-[1.08]">
                Data-Driven Marketing. <br />
                Built for Predictable <br />
                <span className="text-neutral-500 font-normal">Revenue Growth.</span>
              </h1>
            </div>

            {/* Sub-copy */}
            <p className="text-base text-neutral-600 leading-relaxed max-w-xl">
              I am <strong className="text-[#111111] font-semibold">Chamnab Mey</strong>, a Senior Digital Marketer and Web Consultant based in Phnom Penh. I partner with growing companies to build high-converting sales funnels, manage scalable Meta & Google ad campaigns, and engineer high-performance web systems.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-medium text-white bg-[#111111] hover:bg-neutral-800 transition-all"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#case-studies"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-medium text-neutral-700 border border-neutral-300 hover:border-neutral-900 hover:text-black transition-all"
              >
                <span>Selected Works</span>
              </a>
            </div>

            {/* Direct Contact Links */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-neutral-500">
              <a
                href="mailto:admin@chamnabmey.com"
                className="hover:text-black transition-colors"
              >
                admin@chamnabmey.com
              </a>
              <span className="text-neutral-300">•</span>
              <a
                href="tel:+85515705703"
                className="hover:text-black transition-colors"
              >
                +855 15 705 703
              </a>
              <span className="text-neutral-300">•</span>
              <a
                href="https://www.linkedin.com/in/chamnabmey"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-colors flex items-center gap-1"
              >
                <LinkedInIcon className="w-3 h-3" />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

          {/* Right Portrait Column (Architectural & Minimalist) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[340px]">
              <div className="relative rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200/90 shadow-sm aspect-[4/5]">
                <img
                  src="/images/chamnab-mey.jpg"
                  alt="Chamnab Mey"
                  className="w-full h-full object-cover object-top filter grayscale-[15%] hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <div className="mt-3 flex items-center justify-between text-[11px] text-neutral-400 uppercase tracking-wider font-medium px-1">
                <span>Chamnab Mey</span>
                <span>Phnom Penh, KH</span>
              </div>
            </div>
          </div>

        </div>

        {/* Minimalist Key Stats Grid */}
        <div className="mt-20 pt-12 border-t border-neutral-200/80 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
                {s.value}
              </div>
              <div className="text-xs font-semibold text-neutral-800">
                {s.label}
              </div>
              <div className="text-[11px] text-neutral-500">
                {s.note}
              </div>
            </div>
          ))}
        </div>

        {/* Understated Brand Ticker */}
        <div className="mt-14 pt-8 border-t border-neutral-200/60 flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-500">
          <span className="text-[11px] uppercase tracking-[0.15em] text-neutral-400 font-medium">
            Commercial Experience
          </span>
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 font-medium text-neutral-700">
            {clientBrands.map((brand, bIdx) => (
              <span key={bIdx} className="hover:text-black transition-colors">
                {brand}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
