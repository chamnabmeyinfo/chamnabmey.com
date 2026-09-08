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
      spotlight: 'rgba(56, 189, 248, 0.15)',
    },
    {
      number: '02',
      title: 'High-Converting Web Architecture',
      description:
        'Fast, mobile-optimized landing pages and web platforms built with Next.js and WordPress. Engineered specifically for user conversion and Core Web Vitals.',
      tags: ['Next.js', 'WordPress', 'Conversion Rate (CRO)', 'Core Web Vitals'],
      icon: Code,
      spotlight: 'rgba(99, 102, 241, 0.15)',
    },
    {
      number: '03',
      title: 'Technical & Organic SEO Strategy',
      description:
        'Deep technical audits, on-page optimization, schema structured data, and local map pack dominance across Cambodia and regional search markets.',
      tags: ['Technical Audit', 'Keyword Strategy', 'Schema Markup', 'Local Search'],
      icon: Search,
      spotlight: 'rgba(16, 185, 129, 0.15)',
    },
    {
      number: '04',
      title: 'E-Commerce Platform Operations',
      description:
        'End-to-end customer acquisition and operations derived from leadership at Riich Me and EPOS-GODIGITAL. Optimizing cart flow, checkout UX, and retention.',
      tags: ['Marketplace Growth', 'Checkout UX', 'Event Synergies', 'Payment Gateways'],
      icon: ShoppingBag,
      spotlight: 'rgba(245, 158, 11, 0.15)',
    },
    {
      number: '05',
      title: 'Full-Funnel Lead Generation Systems',
      description:
        'Automated pipelines that qualify inbound commercial prospects and dispatch them immediately to sales reps via Telegram, WhatsApp, or CRM integrations.',
      tags: ['Lead Qualification', 'Telegram Routing', 'CRM Pipelines', 'B2B Sales'],
      icon: Share2,
      spotlight: 'rgba(236, 72, 153, 0.15)',
    },
    {
      number: '06',
      title: 'Attribution, Analytics & Server Admin',
      description:
        'Zero-signal-loss tracking setup. Server-side Meta Conversion API (CAPI), Google Tag Manager, GA4 event modeling, plus enterprise cPanel/WHM server hosting.',
      tags: ['Meta CAPI', 'Google Tag Manager', 'GA4 Attribution', 'cPanel & WHM'],
      icon: Cpu,
      spotlight: 'rgba(34, 211, 238, 0.15)',
    },
  ];

  return (
    <section id="services" className="py-24 sm:py-32 relative border-b border-white/[0.06] bg-[#08090C] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-indigo-500/10 blur-[150px] -z-10" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-neutral-400 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            <span>02 / Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Tailored Marketing & Growth Architecture
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-light">
            Eliminating wasted ad spend by unifying high-converting creative strategy, server-side data tracking, and sub-second landing pages.
          </p>
        </motion.div>

        {/* Bento Services Grid */}
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
                <SpotlightCard
                  spotlightColor={svc.spotlight}
                  className="h-full p-7 sm:p-8 flex flex-col justify-between group border-white/[0.08] bg-[#0C0E14]/90 hover:border-white/[0.2]"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 group-hover:text-cyan-300 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-neutral-500 group-hover:text-cyan-400 transition-colors">
                        {svc.number}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white tracking-tight leading-snug group-hover:text-cyan-300 transition-colors">
                      {svc.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                      {svc.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/[0.06] space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {svc.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-neutral-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-400 group-hover:text-cyan-400 transition-colors pt-1"
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
