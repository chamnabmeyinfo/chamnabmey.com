"use client";

import React, { useState } from 'react';

export default function GrowthEstimatorSection() {
  const [budget, setBudget] = useState(1500);
  const [goal, setGoal] = useState<'leads' | 'ecommerce' | 'local'>('leads');

  const models = {
    leads: {
      name: 'B2B & High-Ticket Inquiries',
      channel: 'Meta Lead Ads + Google Search + CAPI',
      cpc: 0.28,
      convRate: 0.08,
      avgValue: 250,
      roasRange: '3.5x – 4.8x',
      unitName: 'Qualified Inquiries',
    },
    ecommerce: {
      name: 'E-Commerce Online Orders',
      channel: 'Meta Advantage+ Catalog & Retargeting',
      cpc: 0.18,
      convRate: 0.035,
      avgValue: 45,
      roasRange: '3.8x – 5.5x',
      unitName: 'Completed Purchases',
    },
    local: {
      name: 'Local Store Inbound & WhatsApp',
      channel: 'Click-to-WhatsApp Ads + Local Reach',
      cpc: 0.14,
      convRate: 0.12,
      avgValue: 85,
      roasRange: '3.2x – 4.5x',
      unitName: 'Direct Chat Inquiries',
    },
  };

  const current = models[goal];
  const projectedClicks = Math.round(budget / current.cpc);
  const projectedConversions = Math.round(projectedClicks * current.convRate);
  const projectedPipeline = Math.round(projectedConversions * current.avgValue).toLocaleString();

  return (
    <section className="tmp-section-gapTop" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div
          style={{
            borderRadius: '28px',
            backgroundColor: '#081722',
            border: '1.8px solid rgba(19, 155, 253, 0.3)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.3)',
            padding: '50px 40px',
            color: '#FFFFFF',
          }}
        >
          {/* Header */}
          <div className="section-head text-center mb--40">
            <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
              <span className="subtitle theme-gradient">INTERACTIVE REVENUE SIMULATOR</span>
            </div>
            <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2" style={{ fontSize: '34px', fontWeight: 800 }}>
              Forecast Your Advertising Pipeline & ROAS
            </h2>
            <p style={{ color: '#BEBEBE', maxWidth: '640px', margin: '12px auto 0 auto', fontSize: '15px', lineHeight: 1.6 }}>
              Adjust your estimated monthly advertising budget and objective to project targeted inbound traffic, conversions, and estimated sales pipeline based on regional benchmarks.
            </p>
          </div>

          <div className="row g-5 align-items-center">
            {/* Controls */}
            <div className="col-lg-6">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                
                {/* Objective Tabs */}
                <div>
                  <label style={{ fontSize: '13px', fontWeight: 700, color: '#42AFFD', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '12px' }}>
                    1. Select Your Campaign Objective
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '10px' }}>
                    {(['leads', 'ecommerce', 'local'] as const).map((key) => {
                      const active = goal === key;
                      return (
                        <button
                          key={key}
                          type="button"
                          onClick={() => setGoal(key)}
                          style={{
                            padding: '12px 14px',
                            borderRadius: '12px',
                            backgroundColor: active ? '#139BFD' : 'rgba(255, 255, 255, 0.05)',
                            color: '#FFFFFF',
                            border: active ? '1.5px solid #139BFD' : '1px solid rgba(255, 255, 255, 0.1)',
                            fontWeight: 700,
                            fontSize: '12px',
                            cursor: 'pointer',
                            textAlign: 'left',
                            transition: 'all 0.2s ease',
                          }}
                        >
                          <div>{models[key].name}</div>
                          <div style={{ fontSize: '10px', opacity: 0.8, marginTop: '4px' }}>Target: {models[key].roasRange}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Budget Slider */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <label style={{ fontSize: '13px', fontWeight: 700, color: '#42AFFD', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      2. Estimated Monthly Ad Budget
                    </label>
                    <span style={{ fontSize: '24px', fontWeight: 800, color: '#FFFFFF', fontFamily: "'Montserrat', sans-serif" }}>
                      ${budget.toLocaleString()} <span style={{ fontSize: '13px', color: '#BEBEBE', fontWeight: 500 }}>/ mo</span>
                    </span>
                  </div>

                  <input
                    type="range"
                    min={500}
                    max={10000}
                    step={250}
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    style={{
                      width: '100%',
                      height: '8px',
                      borderRadius: '5px',
                      accentColor: '#139BFD',
                      cursor: 'pointer',
                    }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#BEBEBE', marginTop: '6px' }}>
                    <span>$500</span>
                    <span>$2,500</span>
                    <span>$5,000</span>
                    <span>$10,000+</span>
                  </div>
                </div>

                {/* Channel Strategy Note */}
                <div style={{ padding: '14px 18px', borderRadius: '12px', backgroundColor: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: '#BEBEBE', textTransform: 'uppercase' }}>Recommended Media Mix</div>
                  <div style={{ fontSize: '13px', color: '#42AFFD', fontWeight: 600, marginTop: '4px' }}>{current.channel}</div>
                </div>

              </div>
            </div>

            {/* Projection Output Cards */}
            <div className="col-lg-6">
              <div
                style={{
                  backgroundColor: 'rgba(6, 19, 27, 0.85)',
                  backdropFilter: 'blur(16px)',
                  borderRadius: '20px',
                  border: '1.5px solid rgba(19, 155, 253, 0.35)',
                  padding: '32px',
                }}
              >
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#42AFFD', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>
                  📈 30-Day Estimated Performance Projection
                </div>

                <div className="row g-3">
                  {/* Metric 1 */}
                  <div className="col-sm-6">
                    <div style={{ padding: '18px', borderRadius: '14px', backgroundColor: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                      <div style={{ fontSize: '12px', color: '#BEBEBE' }}>Targeted Ad Clicks</div>
                      <div style={{ fontSize: '28px', fontWeight: 800, color: '#FFFFFF', marginTop: '4px' }}>
                        {projectedClicks.toLocaleString()}
                      </div>
                      <div style={{ fontSize: '11px', color: '#00E676', marginTop: '4px' }}>Avg CPC: ${current.cpc}</div>
                    </div>
                  </div>

                  {/* Metric 2 */}
                  <div className="col-sm-6">
                    <div style={{ padding: '18px', borderRadius: '14px', backgroundColor: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                      <div style={{ fontSize: '12px', color: '#BEBEBE' }}>{current.unitName}</div>
                      <div style={{ fontSize: '28px', fontWeight: 800, color: '#42AFFD', marginTop: '4px' }}>
                        {projectedConversions.toLocaleString()}
                      </div>
                      <div style={{ fontSize: '11px', color: '#00E676', marginTop: '4px' }}>Est. Conv: {(current.convRate * 100).toFixed(1)}%</div>
                    </div>
                  </div>

                  {/* Pipeline Value */}
                  <div className="col-12">
                    <div style={{ padding: '20px', borderRadius: '14px', backgroundColor: 'rgba(19, 155, 253, 0.1)', border: '1.5px solid rgba(19, 155, 253, 0.35)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <div style={{ fontSize: '12px', color: '#BEBEBE', textTransform: 'uppercase', fontWeight: 700 }}>Projected Sales Pipeline</div>
                          <div style={{ fontSize: '32px', fontWeight: 800, color: '#FFFFFF', marginTop: '4px' }}>
                            ${projectedPipeline} <span style={{ fontSize: '14px', color: '#42AFFD', fontWeight: 600 }}>USD</span>
                          </div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <span style={{ fontSize: '11px', padding: '4px 10px', borderRadius: '500px', backgroundColor: 'rgba(0, 230, 118, 0.2)', color: '#00E676', fontWeight: 700 }}>
                            {current.roasRange} Target ROAS
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div style={{ marginTop: '24px' }}>
                  <a
                    href="#contacts"
                    className="tmp-btn hover-icon-reverse radius-round w-100 text-center"
                    style={{ padding: '12px 24px', display: 'block', textDecoration: 'none' }}
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Execute this Forecast with Chamnab</span>
                      <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                      <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                    </span>
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
