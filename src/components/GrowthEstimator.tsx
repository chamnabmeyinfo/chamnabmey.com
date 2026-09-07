'use client';

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function GrowthEstimator() {
  const [budget, setBudget] = useState(1500);
  const [goal, setGoal] = useState<'leads' | 'ecommerce' | 'branding'>('leads');

  const multipliers = {
    leads: {
      cpc: 0.28,
      convRate: 0.08,
      avgValue: 250,
      roas: '3.2x – 4.5x',
      type: 'Qualified Inquiries',
    },
    ecommerce: {
      cpc: 0.18,
      convRate: 0.035,
      avgValue: 45,
      roas: '3.5x – 5.2x',
      type: 'Completed Orders',
    },
    branding: {
      cpc: 0.12,
      convRate: 0.12,
      avgValue: 80,
      roas: '2.8x – 3.8x',
      type: 'High-Intent Engagements',
    },
  };

  const current = multipliers[goal];
  const estimatedClicks = Math.round(budget / current.cpc);
  const estimatedConversions = Math.round(estimatedClicks * current.convRate);
  const estimatedPipeline = (estimatedConversions * current.avgValue).toLocaleString();

  return (
    <section className="py-24 bg-[#FAFAFA] border-b border-neutral-200/70">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-neutral-200/80 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Controls */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400 block">
                05 / Projection Model
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
                Simulate Marketing Returns & Lead Volume
              </h3>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Adjust your estimated monthly advertising budget and objective to project targeted inbound traffic, conversions, and revenue pipeline.
              </p>

              {/* Goal Pills */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-neutral-700 block">
                  Campaign Objective:
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    { id: 'leads', label: 'B2B & High-Ticket Inquiries' },
                    { id: 'ecommerce', label: 'E-Commerce Transactions' },
                    { id: 'branding', label: 'Local Store Inbound' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setGoal(item.id as any)}
                      className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                        goal === item.id
                          ? 'bg-[#111111] text-white'
                          : 'bg-neutral-100 text-neutral-600 hover:text-black'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider */}
              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-semibold text-neutral-700">
                    Monthly Ad Budget:
                  </span>
                  <span className="text-xl font-extrabold text-[#111111] font-mono">
                    ${budget.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min={300}
                  max={10000}
                  step={100}
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="w-full h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-[#111111]"
                />
                <div className="flex justify-between text-[11px] text-neutral-400">
                  <span>$300 (Starter)</span>
                  <span>$2,500 (Growth)</span>
                  <span>$5,000 (Scaling)</span>
                  <span>$10,000+ (Market Lead)</span>
                </div>
              </div>
            </div>

            {/* Results Panel */}
            <div className="lg:col-span-5 bg-neutral-50 rounded-xl p-6 sm:p-8 border border-neutral-200/80 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500">
                  Projected Outcomes
                </span>
                <span className="text-[11px] font-mono text-neutral-500">
                  Cambodia Benchmarks
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-xs text-neutral-500 block">Est. High-Intent Traffic</span>
                  <div className="text-2xl font-black text-[#111111] font-mono">
                    ~{estimatedClicks.toLocaleString()} <span className="text-xs font-normal font-sans text-neutral-500">targeted clicks</span>
                  </div>
                </div>

                <div>
                  <span className="text-xs text-neutral-500 block">Est. {current.type}</span>
                  <div className="text-3xl font-black text-[#111111] font-mono">
                    {estimatedConversions.toLocaleString()} <span className="text-xs font-normal font-sans text-neutral-500">monthly conversions</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-white rounded-lg border border-neutral-200">
                    <span className="text-[10px] uppercase text-neutral-400 block font-semibold">Target ROAS</span>
                    <span className="text-sm font-bold text-[#111111]">{current.roas}</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-neutral-200">
                    <span className="text-[10px] uppercase text-neutral-400 block font-semibold">Est. Pipeline Value</span>
                    <span className="text-sm font-bold text-[#111111] font-mono">${estimatedPipeline}</span>
                  </div>
                </div>
              </div>

              <a
                href="#contact"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-xs font-medium text-white bg-[#111111] hover:bg-neutral-800 transition-all"
              >
                <span>Inquire Custom Plan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
