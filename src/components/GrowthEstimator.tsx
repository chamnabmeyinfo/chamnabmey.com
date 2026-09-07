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
    <section id="calculator" className="py-24 theme-canvas border-b theme-border transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        <div className="theme-card p-8 sm:p-12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Controls */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] theme-text-faint block">
                05 / Projection Model
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold theme-text-main tracking-tight">
                Simulate Marketing Returns & Lead Volume
              </h3>

              <p className="text-xs sm:text-sm theme-text-muted leading-relaxed font-light">
                Adjust your estimated monthly advertising budget and objective to project targeted inbound traffic, conversions, and revenue pipeline.
              </p>

              {/* Goal Pills */}
              <div className="space-y-2">
                <span className="text-xs font-semibold theme-text-main block">
                  Campaign Objective:
                </span>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setGoal('leads')}
                    className={`px-4 py-2 text-xs font-medium transition-all ${
                      goal === 'leads'
                        ? 'theme-btn-primary shadow-sm'
                        : 'theme-badge opacity-80 hover:opacity-100'
                    }`}
                  >
                    B2B & High-Ticket Inquiries
                  </button>

                  <button
                    type="button"
                    onClick={() => setGoal('ecommerce')}
                    className={`px-4 py-2 text-xs font-medium transition-all ${
                      goal === 'ecommerce'
                        ? 'theme-btn-primary shadow-sm'
                        : 'theme-badge opacity-80 hover:opacity-100'
                    }`}
                  >
                    E-Commerce Transactions
                  </button>

                  <button
                    type="button"
                    onClick={() => setGoal('branding')}
                    className={`px-4 py-2 text-xs font-medium transition-all ${
                      goal === 'branding'
                        ? 'theme-btn-primary shadow-sm'
                        : 'theme-badge opacity-80 hover:opacity-100'
                    }`}
                  >
                    Local Store Inbound
                  </button>
                </div>
              </div>

              {/* Slider */}
              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-semibold theme-text-main">
                    Monthly Ad Budget:
                  </span>
                  <span className="text-xl font-extrabold theme-text-main font-mono">
                    ${budget.toLocaleString()}
                  </span>
                </div>

                <input
                  type="range"
                  min="300"
                  max="10000"
                  step="100"
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-300 dark:bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-[var(--accent-color)]"
                />

                <div className="flex justify-between text-[11px] theme-text-faint font-mono">
                  <span>$300 (Starter)</span>
                  <span>$2,500 (Growth)</span>
                  <span>$5,000 (Scaling)</span>
                  <span>$10,000+ (Market Lead)</span>
                </div>
              </div>
            </div>

            {/* Projection Display */}
            <div className="lg:col-span-5 theme-card p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b theme-border">
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider theme-text-faint">
                  Projected Outcomes
                </span>
                <span className="text-[11px] font-mono theme-text-faint">
                  Cambodia Benchmarks
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-xs theme-text-muted block">
                    Est. High-Intent Traffic
                  </span>
                  <div className="text-2xl font-black theme-text-main font-mono">
                    ~{estimatedClicks.toLocaleString()}{' '}
                    <span className="text-xs font-normal font-sans theme-text-muted">
                      targeted clicks
                    </span>
                  </div>
                </div>

                <div>
                  <span className="text-xs theme-text-muted block">
                    Est. {current.type}
                  </span>
                  <div className="text-3xl font-black theme-text-main font-mono">
                    {estimatedConversions.toLocaleString()}{' '}
                    <span className="text-xs font-normal font-sans theme-text-muted">
                      monthly conversions
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 theme-card">
                    <span className="text-[10px] uppercase theme-text-faint block font-semibold font-mono">
                      Target ROAS
                    </span>
                    <span className="text-sm font-bold theme-text-main">
                      {current.roas}
                    </span>
                  </div>

                  <div className="p-3 theme-card">
                    <span className="text-[10px] uppercase theme-text-faint block font-semibold font-mono">
                      Est. Pipeline Value
                    </span>
                    <span className="text-sm font-bold theme-text-main font-mono">
                      ${estimatedPipeline}
                    </span>
                  </div>
                </div>
              </div>

              <a
                href="#contact"
                className="w-full theme-btn-primary gap-2 py-3 text-xs font-medium"
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
