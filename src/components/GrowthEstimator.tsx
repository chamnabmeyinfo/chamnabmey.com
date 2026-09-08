'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calculator, TrendingUp, DollarSign, Users, Target, Sparkles } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

export default function GrowthEstimator() {
  const [budget, setBudget] = useState(1500);
  const [goal, setGoal] = useState<'leads' | 'ecommerce' | 'local'>('leads');

  const multipliers = {
    leads: {
      name: 'B2B & High-Ticket Inquiries',
      cpc: 0.28,
      convRate: 0.08,
      avgValue: 250,
      roas: '3.5x – 4.8x',
      type: 'Qualified Inquiries',
      channel: 'Meta Lead Ads + Google Search',
    },
    ecommerce: {
      name: 'E-Commerce Transactions',
      cpc: 0.18,
      convRate: 0.035,
      avgValue: 45,
      roas: '3.8x – 5.5x',
      type: 'Completed Orders',
      channel: 'Meta Advantage+ Catalog & TikTok',
    },
    local: {
      name: 'Local Store Inbound & WhatsApp',
      cpc: 0.12,
      convRate: 0.12,
      avgValue: 80,
      roas: '3.0x – 4.2x',
      type: 'Direct Chat Inquiries',
      channel: 'Local Map Pack + Click-to-WhatsApp',
    },
  };

  const current = multipliers[goal];
  const estimatedClicks = Math.round(budget / current.cpc);
  const estimatedConversions = Math.round(estimatedClicks * current.convRate);
  const estimatedPipeline = (estimatedConversions * current.avgValue).toLocaleString();

  return (
    <section id="calculator" className="py-24 sm:py-32 relative border-b border-white/[0.06] bg-[#08090C] overflow-hidden">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-neutral-400 text-xs font-mono uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 text-cyan-400" />
            <span>03 / ROI Simulation Model</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Simulate Revenue Pipeline & Ad Returns
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-light">
            Adjust your estimated monthly advertising budget and objective to project targeted inbound traffic, conversions, and pipeline value based on verified Cambodian & regional benchmarks.
          </p>
        </motion.div>

        {/* Interactive Dashboard Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Inputs */}
          <div className="lg:col-span-7">
            <SpotlightCard
              spotlightColor="rgba(56, 189, 248, 0.12)"
              className="p-8 sm:p-10 h-full flex flex-col justify-between border-white/[0.1] bg-[#0D1017]/90"
            >
              <div className="space-y-8">
                
                {/* Objective Selector Tabs */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-white tracking-wide font-mono uppercase">
                      Select Campaign Objective:
                    </span>
                    <span className="text-[11px] font-mono text-cyan-400">
                      {current.channel}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {(['leads', 'ecommerce', 'local'] as const).map((key) => {
                      const active = goal === key;
                      return (
                        <button
                          key={key}
                          type="button"
                          onClick={() => setGoal(key)}
                          className={`px-3.5 py-2.5 rounded-xl text-xs font-semibold tracking-tight text-left transition-all border ${
                            active
                              ? 'bg-cyan-500/15 border-cyan-500/40 text-cyan-300 shadow-sm'
                              : 'bg-white/[0.02] border-white/[0.06] text-neutral-400 hover:text-white hover:bg-white/[0.05]'
                          }`}
                        >
                          <div className="font-bold">{key === 'leads' ? 'B2B Leads' : key === 'ecommerce' ? 'E-Commerce' : 'Local Store'}</div>
                          <div className="text-[10px] text-neutral-400 font-light font-mono mt-0.5">
                            {key === 'leads' ? 'High-ticket funnels' : key === 'ecommerce' ? 'Catalog sales' : 'Direct WhatsApp'}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Budget Slider */}
                <div className="space-y-4 pt-2">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs font-semibold text-white tracking-wide font-mono uppercase">
                      Monthly Advertising Budget:
                    </span>
                    <div className="text-3xl font-black text-cyan-300 font-mono">
                      ${budget.toLocaleString()}
                    </div>
                  </div>

                  {/* Range Track */}
                  <input
                    type="range"
                    min="300"
                    max="10000"
                    step="100"
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />

                  {/* Range Milestones */}
                  <div className="flex justify-between text-[11px] font-mono text-neutral-400">
                    <span>$300 (Starter)</span>
                    <span>$2,500 (Scaling)</span>
                    <span>$5,000 (Growth)</span>
                    <span>$10,000+ (Market Dominance)</span>
                  </div>
                </div>

                {/* Estimated Unit Metrics Bar */}
                <div className="pt-4 border-t border-white/[0.06] grid grid-cols-2 gap-4 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <span className="text-neutral-400 block text-[10px] uppercase">Est. Avg Cost Per Click (CPC)</span>
                    <span className="text-white font-bold">${current.cpc.toFixed(2)} USD</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <span className="text-neutral-400 block text-[10px] uppercase">Benchmark Conversion Rate</span>
                    <span className="text-white font-bold">{(current.convRate * 100).toFixed(1)}% CVR</span>
                  </div>
                </div>

              </div>

              <div className="pt-6 text-[11px] text-neutral-400 font-light flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Calculations reflect real 2024–2026 Meta & Google Ads performance benchmarks in Cambodia.</span>
              </div>
            </SpotlightCard>
          </div>

          {/* Right Column: Projected Outcomes Panel */}
          <div className="lg:col-span-5">
            <SpotlightCard
              spotlightColor="rgba(34, 211, 238, 0.18)"
              className="p-8 sm:p-10 h-full flex flex-col justify-between border-cyan-500/25 bg-gradient-to-b from-[#0F141C] to-[#0A0D12]"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                    Projected Commercial Yield
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    Active Model
                  </span>
                </div>

                {/* Big Metric 1: Clicks */}
                <div className="space-y-1">
                  <span className="text-xs text-neutral-400 font-mono block">
                    High-Intent Traffic Volume:
                  </span>
                  <div className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight">
                    ~{estimatedClicks.toLocaleString()}{' '}
                    <span className="text-xs text-neutral-400 font-normal font-sans">
                      targeted clicks / mo
                    </span>
                  </div>
                </div>

                {/* Big Metric 2: Conversions */}
                <div className="space-y-1 pt-2 border-t border-white/[0.06]">
                  <span className="text-xs text-neutral-400 font-mono block">
                    Estimated {current.type}:
                  </span>
                  <div className="text-4xl sm:text-5xl font-black text-cyan-300 font-mono tracking-tight">
                    {estimatedConversions.toLocaleString()}{' '}
                    <span className="text-xs text-neutral-400 font-normal font-sans">
                      conversions / mo
                    </span>
                  </div>
                </div>

                {/* 2-Column Mini Cards */}
                <div className="grid grid-cols-2 gap-3 pt-3">
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                    <span className="text-[10px] font-mono uppercase text-neutral-400 block">
                      Target ROAS Range
                    </span>
                    <span className="text-base font-bold text-emerald-400 font-mono">
                      {current.roas}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                    <span className="text-[10px] font-mono uppercase text-neutral-400 block">
                      Est. Pipeline Value
                    </span>
                    <span className="text-base font-bold text-white font-mono">
                      ${estimatedPipeline}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-8">
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 text-xs font-bold text-black bg-cyan-400 hover:bg-cyan-300 rounded-xl shadow-lg shadow-cyan-500/20 transition-all group"
                >
                  <span>Inquire Custom Growth Plan</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </SpotlightCard>
          </div>

        </div>

      </div>
    </section>
  );
}
