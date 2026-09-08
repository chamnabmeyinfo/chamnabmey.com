'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calculator, Sparkles } from 'lucide-react';
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
    <section id="calculator" className="py-24 sm:py-32 relative border-b-[1.8px] border-[#0C1F2E] bg-[#141414] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[10px] border-[1.8px] border-[#0C1F2E] bg-[#06131B] text-[#42AFFD] text-xs font-heading uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 text-[#139BFD]" />
            <span>03 / ROI Simulation Model</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] text-white leading-tight">
            Simulate Revenue Pipeline & Ad Returns
          </h2>
          <p className="font-body text-base text-[#BEBEBE] leading-[1.75]">
            Adjust your estimated monthly advertising budget and objective to project targeted inbound traffic, conversions, and pipeline value based on verified Cambodian & regional benchmarks.
          </p>
        </motion.div>

        {/* Interactive Dashboard Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Inputs */}
          <div className="lg:col-span-7">
            <SpotlightCard className="p-8 sm:p-10 h-full flex flex-col justify-between">
              <div className="space-y-8">
                
                {/* Objective Selector Tabs */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-xs font-bold text-white uppercase tracking-wider">
                      Select Campaign Objective:
                    </span>
                    <span className="text-[11px] font-heading text-[#42AFFD]">
                      {current.channel}
                    </span>
                  </div>

                  {/* Buttons: 6px radius */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {(['leads', 'ecommerce', 'local'] as const).map((key) => {
                      const active = goal === key;
                      return (
                        <button
                          key={key}
                          type="button"
                          onClick={() => setGoal(key)}
                          className={`px-3.5 py-2.5 rounded-[6px] text-xs font-medium text-left transition-all border-[1.8px] ${
                            active
                              ? 'bg-[#139BFD] border-[#139BFD] text-white shadow-sm'
                              : 'bg-[#141414] border-[#0C1F2E] text-[#BEBEBE] hover:text-white hover:border-[#139BFD]/60'
                          }`}
                        >
                          <div className="font-heading font-bold">{key === 'leads' ? 'B2B Leads' : key === 'ecommerce' ? 'E-Commerce' : 'Local Store'}</div>
                          <div className="text-[10px] text-[#BEBEBE] font-body mt-0.5 opacity-80">
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
                    <span className="font-heading text-xs font-bold text-white uppercase tracking-wider">
                      Monthly Advertising Budget:
                    </span>
                    <div className="font-heading text-3xl font-bold text-[#139BFD]">
                      ${budget.toLocaleString()}
                    </div>
                  </div>

                  {/* Range Track with Inversweb Blue Accent */}
                  <input
                    type="range"
                    min="300"
                    max="10000"
                    step="100"
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="w-full h-2 bg-[#0C1F2E] rounded-[6px] appearance-none cursor-pointer accent-[#139BFD]"
                  />

                  {/* Range Milestones */}
                  <div className="flex justify-between text-[11px] font-body text-[#BEBEBE]">
                    <span>$300 (Starter)</span>
                    <span>$2,500 (Scaling)</span>
                    <span>$5,000 (Growth)</span>
                    <span>$10,000+ (Market Dominance)</span>
                  </div>
                </div>

                {/* Unit Metrics: 10px radius chips */}
                <div className="pt-4 border-t border-[#0C1F2E] grid grid-cols-2 gap-3.5 text-xs font-body">
                  <div className="p-3.5 rounded-[10px] bg-[#141414] border-[1.8px] border-[#0C1F2E]">
                    <span className="text-[#BEBEBE] block text-[10px] font-heading uppercase">Est. Avg Cost Per Click (CPC)</span>
                    <span className="text-white font-heading font-bold text-sm">${current.cpc.toFixed(2)} USD</span>
                  </div>
                  <div className="p-3.5 rounded-[10px] bg-[#141414] border-[1.8px] border-[#0C1F2E]">
                    <span className="text-[#BEBEBE] block text-[10px] font-heading uppercase">Benchmark Conversion Rate</span>
                    <span className="text-white font-heading font-bold text-sm">{(current.convRate * 100).toFixed(1)}% CVR</span>
                  </div>
                </div>

              </div>

              <div className="pt-6 text-[11px] text-[#BEBEBE] font-body flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#139BFD]" />
                <span>Calculations reflect real 2024–2026 Meta & Google Ads performance benchmarks in Cambodia.</span>
              </div>
            </SpotlightCard>
          </div>

          {/* Right Column: Projected Outcomes Panel */}
          <div className="lg:col-span-5">
            <SpotlightCard className="p-8 sm:p-10 h-full flex flex-col justify-between border-[#139BFD]/40 bg-[#06131B]">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-[#0C1F2E]">
                  <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#42AFFD]">
                    Projected Commercial Yield
                  </span>
                  <span className="text-[10px] font-heading px-2 py-0.5 rounded-[6px] bg-[#0C1F2E] text-[#139BFD] border border-[#139BFD]/30 font-bold">
                    Active Model
                  </span>
                </div>

                {/* Big Metric 1: Clicks */}
                <div className="space-y-1">
                  <span className="text-xs text-[#BEBEBE] font-heading uppercase block">
                    High-Intent Traffic Volume:
                  </span>
                  <div className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    ~{estimatedClicks.toLocaleString()}{' '}
                    <span className="text-xs text-[#BEBEBE] font-normal font-body">
                      targeted clicks / mo
                    </span>
                  </div>
                </div>

                {/* Big Metric 2: Conversions */}
                <div className="space-y-1 pt-2 border-t border-[#0C1F2E]">
                  <span className="text-xs text-[#BEBEBE] font-heading uppercase block">
                    Estimated {current.type}:
                  </span>
                  <div className="font-heading text-4xl sm:text-5xl font-bold text-[#139BFD] tracking-tight">
                    {estimatedConversions.toLocaleString()}{' '}
                    <span className="text-xs text-[#BEBEBE] font-normal font-body">
                      conversions / mo
                    </span>
                  </div>
                </div>

                {/* 2-Column Mini Cards: 10px radius */}
                <div className="grid grid-cols-2 gap-3.5 pt-2">
                  <div className="p-3.5 rounded-[10px] bg-[#141414] border-[1.8px] border-[#0C1F2E]">
                    <span className="text-[10px] font-heading uppercase text-[#BEBEBE] block">
                      Target ROAS Range
                    </span>
                    <span className="text-base font-heading font-bold text-[#42AFFD]">
                      {current.roas}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-[10px] bg-[#141414] border-[1.8px] border-[#0C1F2E]">
                    <span className="text-[10px] font-heading uppercase text-[#BEBEBE] block">
                      Est. Pipeline Value
                    </span>
                    <span className="text-base font-heading font-bold text-white">
                      ${estimatedPipeline}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button: 6px radius, #139BFD, 500 weight */}
              <div className="pt-8">
                <a
                  href="#contact"
                  className="btn-primary-invers w-full py-3.5 text-xs font-medium gap-2 group"
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
