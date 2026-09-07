'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      number: '01',
      title: 'Performance Paid Ads (Meta & Google)',
      description:
        'Targeted search & paid social acquisition. Custom audience segmentation, direct-response copywriting, creative testing, and aggressive CPA reduction.',
      tags: ['Meta Ads Manager', 'Google Search & Display', 'Creative Testing', 'ROAS Optimization'],
    },
    {
      number: '02',
      title: 'High-Converting Web Engineering',
      description:
        'Fast, mobile-optimized landing pages and web platforms built with Next.js and WordPress. Engineered specifically for user conversion and Core Web Vitals.',
      tags: ['Next.js', 'WordPress', 'Conversion Rate (CRO)', 'Page Speed'],
    },
    {
      number: '03',
      title: 'Technical & Organic SEO Strategy',
      description:
        'Deep technical audits, on-page optimization, content architecture, and local map pack dominance across Cambodia and regional search markets.',
      tags: ['Technical Audit', 'Keyword Strategy', 'Schema Markup', 'Local Search'],
    },
    {
      number: '04',
      title: 'E-Commerce Platform Operations',
      description:
        'End-to-end customer acquisition and operations derived from leadership at Riich Me and EPOS-GODIGITAL. Optimizing cart flow, checkout UX, and retention.',
      tags: ['Marketplace Growth', 'Checkout UX', 'Event Synergies', 'Payment Gateways'],
    },
    {
      number: '05',
      title: 'Full-Funnel Lead Generation Systems',
      description:
        'Automated pipelines that qualify inbound commercial prospects and dispatch them immediately to sales reps via Telegram, WhatsApp, or CRM integrations.',
      tags: ['Lead Qualification', 'Telegram Routing', 'CRM Pipelines', 'B2B Sales'],
    },
    {
      number: '06',
      title: 'Attribution, Analytics & Server Admin',
      description:
        'Zero-signal-loss tracking setup. Server-side Meta Conversion API (CAPI), Google Tag Manager, GA4 event modeling, plus enterprise cPanel/WHM server hosting.',
      tags: ['Meta CAPI', 'Google Tag Manager', 'GA4 Attribution', 'cPanel & WHM'],
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#FAFAFA] border-b border-neutral-200/70">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400 block">
            01 / Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
            Tailored Marketing & Growth Services
          </h2>
          <p className="text-sm text-neutral-500 leading-relaxed">
            Eliminating wasted ad spend by aligning creative strategy, server-side data tracking, and high-performance landing pages.
          </p>
        </div>

        {/* Minimalist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv) => (
            <div
              key={srv.number}
              className="bg-white rounded-xl p-8 border border-neutral-200/80 hover:border-neutral-900 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <span className="text-xs font-mono font-medium text-neutral-400 block">
                  {srv.number}
                </span>

                <h3 className="text-lg font-bold text-[#111111] tracking-tight">
                  {srv.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {srv.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-100 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {srv.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#111111] group-hover:underline pt-1"
                >
                  <span>Inquire service</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
