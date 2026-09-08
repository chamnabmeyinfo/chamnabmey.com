'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Target, Cpu, Code2, Server, Sparkles, CheckCircle2 } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

export default function SkillsMatrix() {
  const groups = [
    {
      category: 'Paid Acquisition & Media',
      icon: Target,
      spotlight: 'rgba(56, 189, 248, 0.12)',
      items: [
        'Meta Ads Manager (Facebook & Instagram)',
        'Google Search & Display Network',
        'Direct-Response Copywriting & Creatives',
        'Custom Audiences & Lookalike Modeling',
        'Creative A/B Split Testing Protocols',
        'Systematic CPA Reduction & Scaling',
      ],
    },
    {
      category: 'Tracking & Attribution',
      icon: Cpu,
      spotlight: 'rgba(99, 102, 241, 0.12)',
      items: [
        'Meta Conversion API (CAPI) Server-Side',
        'Google Tag Manager (GTM) Architecture',
        'Google Analytics 4 Custom Event Modeling',
        'Signal Diagnostics & Pixel Match Quality',
        'Multi-Touch Conversion Attribution',
        'UTM Taxonomy & Lead Webhook Handshake',
      ],
    },
    {
      category: 'Web Tech & Core Vitals',
      icon: Code2,
      spotlight: 'rgba(16, 185, 129, 0.12)',
      items: [
        'Next.js 15 App Router & React',
        'WordPress & Custom High-Speed Themes',
        'Technical On-Page & Schema Markup',
        'Sub-Second Core Web Vitals Optimization',
        'Conversion Rate Optimization (CRO)',
        'Automated CRM Lead Dispatchers',
      ],
    },
    {
      category: 'Infrastructure & Ops',
      icon: Server,
      spotlight: 'rgba(245, 158, 11, 0.12)',
      items: [
        'Cloudflare CDN, WAF & DNS Routing',
        'cPanel & WHM Enterprise Server Admin',
        'Google Workspace & Corporate Mail',
        'Automated Database & Security Backups',
        'Cross-Functional Team Direction (5 Divisions)',
        'E-Commerce Marketplace Operations',
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 sm:py-32 relative border-b border-white/[0.06] bg-[#08090C] overflow-hidden">
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
            <span>05 / Technical Stack & Operations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Full-Stack Growth Infrastructure
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-light">
            The technical tools, ad networks, and server infrastructure I deploy to engineer predictable client revenue.
          </p>
        </motion.div>

        {/* 4-Column Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map((grp, idx) => {
            const Icon = grp.icon;
            return (
              <motion.div
                key={grp.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <SpotlightCard
                  spotlightColor={grp.spotlight}
                  className="p-6 sm:p-7 h-full flex flex-col justify-between border-white/[0.08] bg-[#0C0E14]/90"
                >
                  <div className="space-y-4">
                    <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-cyan-400">
                      <Icon className="w-4 h-4" />
                    </div>

                    <h3 className="text-sm font-bold uppercase tracking-wider text-white pb-3 border-b border-white/[0.06] font-mono">
                      {grp.category}
                    </h3>

                    <ul className="space-y-3 text-xs text-neutral-300 font-light">
                      {grp.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
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
