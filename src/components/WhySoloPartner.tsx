'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Check, X, Zap, ShieldCheck, Sparkles, Clock, Target, Layers } from 'lucide-react';
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
    <section className="py-24 sm:py-32 relative border-b border-white/[0.06] bg-[#08090C] overflow-hidden">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute top-1/2 -left-48 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-10 right-0 w-96 h-96 rounded-full bg-indigo-500/10 blur-[120px]" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/[0.06] text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            <span>The Solo Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Why Partner with an Elite Solo Strategist vs. A Traditional Agency
          </h2>
          <p className="text-base text-neutral-400 leading-relaxed font-light">
            Big agencies sell you senior expertise but staff your account with junior trainees. As a solo growth engineer, I provide high-conviction executive execution from day one.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Solo Strategist Card (Highlighted Champion) */}
          <div className="lg:col-span-7">
            <SpotlightCard
              spotlightColor="rgba(34, 211, 238, 0.15)"
              className="h-full p-8 sm:p-10 border-cyan-500/30 bg-gradient-to-b from-[#0F141C] to-[#0A0D12] shadow-2xl shadow-cyan-500/5"
            >
              <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 font-semibold block mb-1">
                    Direct Partnership
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                    <span>Chamnab Mey</span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono">
                      Senior Operator
                    </span>
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
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
                    <div className="flex items-center gap-2 text-xs font-semibold text-cyan-300 font-mono">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{c.feature}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-300 pl-5.5 leading-relaxed font-light">
                      {c.solo}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-neutral-400">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>Available for 2 Selective Client Engagements</span>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group"
                >
                  <span>Apply for Partnership</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </SpotlightCard>
          </div>

          {/* Traditional Agency Card */}
          <div className="lg:col-span-5">
            <div className="h-full rounded-2xl border border-white/[0.06] bg-[#0A0C10]/60 backdrop-blur-md p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/[0.06]">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 font-semibold block mb-1">
                      Traditional Model
                    </span>
                    <h3 className="text-xl font-bold text-neutral-400 tracking-tight">
                      Generic 15-Person Agency
                    </h3>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-neutral-500">
                    <Layers className="w-4 h-4" />
                  </div>
                </div>

                <div className="mt-8 space-y-6">
                  {comparison.map((c, i) => (
                    <div key={i} className="space-y-1.5 opacity-70">
                      <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400 font-mono">
                        <X className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                        <span>{c.feature}</span>
                      </div>
                      <p className="text-xs text-neutral-400 pl-5.5 leading-relaxed font-light">
                        {c.agency}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.06] text-xs text-neutral-500 font-mono">
                Result: High overhead, slower feedback loops, diluted focus.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
