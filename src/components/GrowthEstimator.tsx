'use client';

import React, { useState } from 'react';
import { Calculator, ArrowRight, TrendingUp, Sparkles } from 'lucide-react';

export default function GrowthEstimator() {
  const [budget, setBudget] = useState(1500);
  const [goal, setGoal] = useState<'leads' | 'ecommerce' | 'branding'>('leads');

  const multipliers = {
    leads: {
      cpc: 0.28,
      convRate: 0.08,
      avgValue: 250,
      roas: '3.2x - 4.5x',
      type: 'Qualified Inquiries / Leads',
    },
    ecommerce: {
      cpc: 0.18,
      convRate: 0.035,
      avgValue: 45,
      roas: '3.5x - 5.2x',
      type: 'Completed Orders',
    },
    branding: {
      cpc: 0.12,
      convRate: 0.12,
      avgValue: 80,
      roas: '2.8x - 3.8x',
      type: 'High-Intent Engagements',
    },
  };

  const current = multipliers[goal];
  const estimatedClicks = Math.round(budget / current.cpc);
  const estimatedConversions = Math.round(estimatedClicks * current.convRate);
  const estimatedPipeline = (estimatedConversions * current.avgValue).toLocaleString();

  return (
    <section className="py-20 bg-[#EBE5E3] border-y border-black/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-black/8 shadow-xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Interactive Controls */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#9175FF] block">
                Interactive Simulator
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F0F0F] tracking-tight">
                Simulate Your Potential Ad Return & Lead Volume
              </h3>

              <p className="text-sm text-[#555555] leading-relaxed">
                Adjust your monthly marketing budget and objective to estimate projected campaign reach, conversion volume, and ROAS based on real Cambodian & SEA benchmarks.
              </p>

              {/* Goal Selector */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0F0F0F]">
                  Target Objective:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'leads', label: 'B2B & Sales Leads' },
                    { id: 'ecommerce', label: 'E-Commerce Orders' },
                    { id: 'branding', label: 'Local Store Traffic' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setGoal(item.id as any)}
                      className={`p-3 rounded-xl text-xs font-bold text-center transition-all ${
                        goal === item.id
                          ? 'bg-[#0F0F0F] text-white shadow-md'
                          : 'bg-[#F2EEED] text-[#555555] hover:text-[#0F0F0F] border border-black/5'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget Slider */}
              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0F0F0F]">
                    Monthly Ad Budget:
                  </span>
                  <span className="text-xl font-extrabold text-[#9175FF]">
                    ${budget.toLocaleString()} / mo
                  </span>
                </div>
                <input
                  type="range"
                  min={300}
                  max={10000}
                  step={100}
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="w-full h-2 bg-[#EBE5E3] rounded-lg appearance-none cursor-pointer accent-[#9175FF]"
                />
                <div className="flex justify-between text-[11px] text-[#777777]">
                  <span>$300 (Starter)</span>
                  <span>$2,500 (Growth)</span>
                  <span>$5,000 (Scale)</span>
                  <span>$10,000+ (Market Lead)</span>
                </div>
              </div>
            </div>

            {/* Right Column: Projected Results Card (Biogra Dark Style) */}
            <div className="lg:col-span-5">
              <div className="bg-[#171717] rounded-2xl p-6 sm:p-8 text-white shadow-2xl space-y-6 relative">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#888888]">
                    Projected Outcomes
                  </span>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded bg-[#9175FF]/20 text-[#9175FF] border border-[#9175FF]/30">
                    Cambodia Benchmark
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-xs text-[#888888] block">Est. Monthly Targeted Traffic</span>
                    <div className="text-2xl font-black text-white">
                      ~{estimatedClicks.toLocaleString()} <span className="text-xs font-normal text-[#888888]">targeted clicks</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-xs text-[#888888] block">Est. {current.type}</span>
                    <div className="text-3xl font-black text-[#9175FF]">
                      {estimatedConversions.toLocaleString()} <span className="text-xs font-medium text-white/70">monthly conversions</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-[11px] text-[#888888] block">Projected ROAS</span>
                      <span className="text-base font-bold text-white">{current.roas}</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-[11px] text-[#888888] block">Pipeline Value</span>
                      <span className="text-base font-bold text-[#9175FF]">${estimatedPipeline}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="#contact"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-bold text-xs sm:text-sm text-white bg-[#9175FF] hover:bg-[#7A5AF8] transition-all shadow-md shadow-[#9175FF]/30"
                  >
                    <span>Claim Your Growth Plan</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
