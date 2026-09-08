'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Target, Code, Search, ShoppingBag, Share2, Cpu, Sparkles } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

export default function Services() {
  const services = [
    {
      number: '01',
      title: 'Performance Paid Ads (Meta & Google)',
      description:
        'Targeted search & paid social acquisition. Custom audience segmentation, direct-response copywriting, creative testing, and aggressive CPA reduction.',
      tags: ['Meta Ads Manager', 'Google Search & Display', 'Creative Testing', 'ROAS Optimization'],
      icon: Target,
    },
    {
      number: '02',
      title: 'High-Converting Web Architecture',
      description:
        'Fast, mobile-optimized landing pages and web platforms built with Next.js and WordPress. Engineered specifically for user conversion and Core Web Vitals.',
      tags: ['Next.js', 'WordPress', 'Conversion Rate (CRO)', 'Core Web Vitals'],
      icon: Code,
    },
    {
      number: '03',
      title: 'Technical & Organic SEO Strategy',
      description:
        'Deep technical audits, on-page optimization, schema structured data, and local map pack dominance across Cambodia and regional search markets.',
      tags: ['Technical Audit', 'Keyword Strategy', 'Schema Markup', 'Local Search'],
      icon: Search,
    },
    {
      number: '04',
      title: 'E-Commerce Platform Operations',
      description:
        'End-to-end customer acquisition and operations derived from leadership at Riich Me and EPOS-GODIGITAL. Optimizing cart flow, checkout UX, and retention.',
      tags: ['Marketplace Growth', 'Checkout UX', 'Event Synergies', 'Payment Gateways'],
      icon: ShoppingBag,
    },
    {
      number: '05',
      title: 'Full-Funnel Lead Generation Systems',
      description:
        'Automated pipelines that qualify inbound commercial prospects and dispatch them immediately to sales reps via Telegram, WhatsApp, or CRM integrations.',
      tags: ['Lead Qualification', 'Telegram Routing', 'CRM Pipelines', 'B2B Sales'],
      icon: Share2,
    },
    {
      number: '06',
      title: 'Attribution, Analytics & Server Admin',
      description:
        'Zero-signal-loss tracking setup. Server-side Meta Conversion API (CAPI), Google Tag Manager, GA4 event modeling, plus enterprise cPanel/WHM server hosting.',
      tags: ['Meta CAPI', 'Google Tag Manager', 'GA4 Attribution', 'cPanel & WHM'],
      icon: Cpu,
    },
  ];

  return (
    <section id="services" className="py-24 sm:py-32 relative border-b-[1.8px] border-[#0C1F2E] bg-[#141414] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[10px] border-[1.8px] border-[#0C1F2E] bg-[#06131B] text-[#42AFFD] text-xs font-heading uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#139BFD]" />
            <span>02 / Core Capabilities</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] text-white leading-tight">
            Tailored Marketing & Growth Architecture
          </h2>
          <p className="font-body text-base text-[#BEBEBE] leading-[1.75]">
            Eliminating wasted ad spend by unifying high-converting creative strategy, server-side data tracking, and sub-second landing pages.
          </p>
        </motion.div>

        {/* Bento Services Grid: 20px radius cards, 1.8px border #0C1F2E */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <SpotlightCard className="h-full p-7 sm:p-8 flex flex-col justify-between group">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-[6px] bg-[#0C1F2E] flex items-center justify-center text-[#139BFD] group-hover:bg-[#139BFD] group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-heading text-xs font-bold text-[#BEBEBE]/60 group-hover:text-[#139BFD] transition-colors">
                        {svc.number}
                      </span>
                    </div>

                    <h3 className="font-heading text-lg font-bold text-white tracking-tight leading-snug group-hover:text-[#139BFD] transition-colors">
                      {svc.title}
                    </h3>

                    <p className="font-body text-xs sm:text-sm text-[#BEBEBE] leading-[1.7]">
                      {svc.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#0C1F2E] space-y-4">
                    {/* Tags: 10px radius, 1.8px border #0C1F2E */}
                    <div className="flex flex-wrap gap-1.5">
                      {svc.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-body px-2.5 py-1 rounded-[10px] bg-[#0C1F2E]/40 border-[1.8px] border-[#0C1F2E] text-[#BEBEBE]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1 text-xs font-heading font-bold text-[#139BFD] hover:text-[#42AFFD] transition-colors pt-1"
                    >
                      <span>Inquire service</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
