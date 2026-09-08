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
    <section className="relative w-full border-y border-white/[0.06] bg-[#0A0C10]/80 py-6 overflow-hidden backdrop-blur-md">
      {/* Edge Blur Fade Masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#08090C] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#08090C] to-transparent z-10" />

      <div className="max-w-7xl mx-auto px-6 mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Verified Channels, Infrastructure & Commercial Engagements</span>
        </div>
        <span className="text-[11px] font-mono text-neutral-400 hidden sm:inline">
          Phnom Penh, KH
        </span>
      </div>

      {/* Marquee Track */}
      <div className="flex w-max space-x-4 animate-marquee py-1">
        {[...brands, ...brands].map((b, i) => (
          <div
            key={i}
            className="flex items-center space-x-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-xs backdrop-blur-sm transition-colors hover:border-white/[0.2] hover:bg-white/[0.06]"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-semibold text-neutral-200 tracking-tight">{b.name}</span>
            <span className="text-neutral-600">•</span>
            <span className="text-[11px] text-neutral-400 font-mono">{b.type}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
