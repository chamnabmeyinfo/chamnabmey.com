'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const brands = [
  { name: 'Meta Ads Manager', type: 'Paid Acquisition' },
  { name: 'Google Ads', type: 'Search & Display' },
  { name: 'Meta CAPI', type: 'Server-Side Tracking' },
  { name: 'Google Analytics 4', type: 'Event Modeling' },
  { name: 'Google Tag Manager', type: 'Attribution Infra' },
  { name: 'Next.js 15', type: 'High-Speed Web' },
  { name: 'Cloudflare', type: 'Edge CDN & Security' },
  { name: 'Solis Cambodia', type: 'Tractor Brand (+140% Sales)' },
  { name: 'KHB Media PLC', type: '3.8x Avg ROAS (5 Divisions)' },
  { name: 'Riich Me Co., Ltd', type: 'E-Commerce Marketplace' },
  { name: 'EPOS-GODIGITAL', type: 'B2B POS Acquisition' },
  { name: 'KMall Events', type: '100K+ Commercial Reach' },
];

export default function TrustMarquee() {
  return (
    <section className="relative w-full border-y-[1.8px] border-[#0C1F2E] bg-[#141414] py-6 overflow-hidden">
      {/* Edge Blur Fade Masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#141414] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#141414] to-transparent z-10" />

      <div className="max-w-7xl mx-auto px-6 mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-[11px] font-heading uppercase tracking-[0.15em] text-[#BEBEBE]">
          <span className="w-2 h-2 rounded-full bg-[#139BFD] animate-pulse" />
          <span>Verified Channels, Infrastructure & Commercial Engagements</span>
        </div>
        <span className="text-[11px] text-[#BEBEBE] hidden sm:inline font-body">
          Phnom Penh, KH
        </span>
      </div>

      {/* Marquee Track: 10px radius chips, 1.8px border #0C1F2E, #06131B bg */}
      <div className="flex w-max space-x-3.5 animate-marquee py-1">
        {[...brands, ...brands].map((b, i) => (
          <div
            key={i}
            className="flex items-center space-x-2.5 rounded-[10px] border-[1.8px] border-[#0C1F2E] bg-[#06131B] px-4 py-2 text-xs transition-colors hover:border-[#139BFD]/70"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-[#139BFD]" />
            <span className="font-heading text-xs font-bold text-white tracking-tight">{b.name}</span>
            <span className="text-[#0C1F2E]">•</span>
            <span className="text-[11px] text-[#BEBEBE] font-body">{b.type}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
