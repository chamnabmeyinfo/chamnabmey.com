'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Check, X, Zap, ShieldCheck, Clock, Layers } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

export default function WhySoloPartner() {
  const comparison = [
    {
      feature: 'Direct Access & Accountability',
      solo: 'Direct 1-on-1 partnership with Chamnab. Every strategy, audit, and ad tweak is executed by a senior veteran.',
      agency: 'Sold by the agency founder, then handed off to junior coordinators or rotating interns.',
    },
    {
      feature: 'Execution Speed & Agility',
      solo: 'Hours-level turnaround. Campaign adjustments, landing page edits, and A/B tests ship same-day.',
      agency: 'Rigid ticketing systems, multi-layered approvals, and 1 to 2-week turnarounds for minor updates.',
    },
    {
      feature: 'Technical & Creative Synergy',
      solo: 'Full-stack integration. Media buying, Meta CAPI tracking code, and Next.js page speed engineered together.',
      agency: 'Fragmented silos. Ad buyers don’t write code; web developers don’t understand pixel attribution.',
    },
    {
      feature: 'Account Ownership & Transparency',
      solo: '100% client ownership. You own your ad accounts, custom audiences, pixel telemetry, and codebase.',
      agency: 'Opaque proprietary accounts or locking clients out of their own advertising history upon contract end.',
    },
    {
      feature: 'Fee Structure & Efficiency',
      solo: 'Zero bloated overhead. Every dollar invested goes directly into revenue generation and performance.',
      agency: 'Hefty retainer markups (40–60%) to fund executive overhead, fancy offices, and account managers.',
    },
  ];

  return (
    <section id="why-solo" className="py-24 sm:py-32 relative border-b-[1.8px] border-[#0C1F2E] bg-[#141414] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[10px] border-[1.8px] border-[#0C1F2E] bg-[#06131B] text-[#42AFFD] text-xs font-heading uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 text-[#139BFD]" />
            <span>The Solo Advantage</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] text-white leading-tight">
            Why Partner with an Elite Solo Strategist vs. A Traditional Agency
          </h2>
          <p className="font-body text-base text-[#BEBEBE] leading-[1.75]">
            Big agencies sell you senior expertise but staff your account with junior trainees. As a solo growth engineer, I provide high-conviction executive execution from day one.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Solo Strategist Card (Highlighted Champion): Inversweb Blue Border */}
          <div className="lg:col-span-7">
            <SpotlightCard className="h-full p-8 sm:p-10 border-[#139BFD]/60 bg-[#06131B]">
              <div className="flex items-center justify-between pb-6 border-b border-[#0C1F2E]">
                <div>
                  <span className="text-[11px] font-heading uppercase tracking-widest text-[#42AFFD] font-bold block mb-1">
                    Direct Partnership
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
                    <span>Chamnab Mey</span>
                    <span className="text-xs px-2.5 py-0.5 rounded-[6px] bg-[#139BFD]/20 text-[#42AFFD] border border-[#139BFD]/30 font-medium">
                      Senior Operator
                    </span>
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-[6px] bg-[#0C1F2E] flex items-center justify-center text-[#139BFD]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>

              <div className="mt-8 space-y-6">
                {comparison.map((c, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="space-y-1.5"
                  >
                    <div className="flex items-center gap-2 text-xs font-heading font-bold text-[#42AFFD]">
                      <Check className="w-4 h-4 text-[#139BFD] shrink-0" />
                      <span>{c.feature}</span>
                    </div>
                    <p className="font-body text-xs sm:text-sm text-[#BEBEBE] pl-6 leading-[1.7]">
                      {c.solo}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 pt-6 border-t border-[#0C1F2E] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-[#BEBEBE]">
                  <Clock className="w-4 h-4 text-[#139BFD]" />
                  <span>Available for 2 Selective Client Engagements</span>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-[#139BFD] hover:text-[#42AFFD] transition-colors group"
                >
                  <span>Apply for Partnership</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </SpotlightCard>
          </div>

          {/* Traditional Agency Card */}
          <div className="lg:col-span-5">
            <div className="h-full rounded-[20px] border-[1.8px] border-[#0C1F2E] bg-[#06131B]/70 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[#0C1F2E]">
                  <div>
                    <span className="text-[11px] font-heading uppercase tracking-widest text-[#BEBEBE]/60 font-bold block mb-1">
                      Traditional Model
                    </span>
                    <h3 className="font-heading text-xl font-bold text-[#BEBEBE] tracking-tight">
                      Generic 15-Person Agency
                    </h3>
                  </div>
                  <div className="w-9 h-9 rounded-[6px] bg-[#141414] border-[1.8px] border-[#0C1F2E] flex items-center justify-center text-[#BEBEBE]/60">
                    <Layers className="w-4 h-4" />
                  </div>
                </div>

                <div className="mt-8 space-y-6">
                  {comparison.map((c, i) => (
                    <div key={i} className="space-y-1.5 opacity-70">
                      <div className="flex items-center gap-2 text-xs font-heading font-bold text-[#BEBEBE]">
                        <X className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                        <span>{c.feature}</span>
                      </div>
                      <p className="font-body text-xs text-[#BEBEBE] pl-5.5 leading-[1.7]">
                        {c.agency}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#0C1F2E] text-xs text-[#BEBEBE]/60 font-body">
                Result: High overhead, slower feedback loops, diluted focus.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
