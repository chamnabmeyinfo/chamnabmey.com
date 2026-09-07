'use client';

import React, { useState } from 'react';
import { Calculator, ArrowRight, TrendingUp, DollarSign, Users, Target, Sparkles } from 'lucide-react';

export default function GrowthEstimator() {
  const [budget, setBudget] = useState(1500);
  const [goal, setGoal] = useState<'leads' | 'ecommerce' | 'branding'>('leads');

  // Multipliers based on historical campaign benchmarks in Cambodia & SEA
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
    <section className="py-20 bg-slate-950 border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Interactive Controls */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
                <Calculator className="w-3.5 h-3.5" />
                <span>Interactive Growth Simulator</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Simulate Your Potential Ad Return & Lead Volume
              </h3>

              <p className="text-sm text-slate-400">
                Adjust your monthly marketing budget and objective to estimate projected campaign reach, conversion volume, and ROAS.
              </p>

              {/* Goal Selector */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                  Target Objective:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'leads', label: 'B2B & High-Ticket Leads' },
                    { id: 'ecommerce', label: 'E-Commerce Orders' },
                    { id: 'branding', label: 'Local Store Traffic' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setGoal(item.id as any)}
                      className={`p-3 rounded-xl text-xs font-semibold text-center transition-all ${
                        goal === item.id
                          ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                          : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
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
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Estimated Monthly Ad Budget:
                  </span>
                  <span className="text-xl font-extrabold text-emerald-400">
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
                  className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>$300 (Starter)</span>
                  <span>$2,500 (Growth)</span>
                  <span>$5,000 (Scaling)</span>
                  <span>$10,000+ (Dominance)</span>
                </div>
              </div>
            </div>

            {/* Right Column: Projected Results Card */}
            <div className="lg:col-span-5">
              <div className="bg-slate-950 rounded-2xl p-6 sm:p-8 border border-emerald-500/30 shadow-xl space-y-6 relative">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Projected Outcomes
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Benchmark: Cambodia & SEA
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-xs text-slate-400 block">Est. Monthly High-Intent Traffic</span>
                    <div className="text-2xl font-black text-white">
                      ~{estimatedClicks.toLocaleString()} <span className="text-xs font-normal text-slate-400">targeted clicks</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-xs text-slate-400 block">Est. {current.type}</span>
                    <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                      {estimatedConversions.toLocaleString()} <span className="text-sm font-semibold text-emerald-400">monthly conversions</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                      <span className="text-[11px] text-slate-400 block">Projected ROAS</span>
                      <span className="text-base font-bold text-cyan-400">{current.roas}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                      <span className="text-[11px] text-slate-400 block">Pipeline Value</span>
                      <span className="text-base font-bold text-emerald-400">${estimatedPipeline}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="#contact"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 transition-all shadow-md shadow-emerald-500/20"
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
