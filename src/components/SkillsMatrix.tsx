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
    <section id="skills" className="py-24 sm:py-32 relative border-b-[1.8px] border-[#0C1F2E] bg-[#141414] overflow-hidden">
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
            <span>05 / Technical Stack & Operations</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] text-white leading-tight">
            Full-Stack Growth Infrastructure
          </h2>
          <p className="font-body text-base text-[#BEBEBE] leading-[1.75]">
            The technical tools, ad networks, and server infrastructure I deploy to engineer predictable client revenue.
          </p>
        </motion.div>

        {/* 4-Column Bento Grid: 20px radius cards */}
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
                <SpotlightCard className="p-6 sm:p-7 h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-9 h-9 rounded-[6px] bg-[#0C1F2E] flex items-center justify-center text-[#139BFD]">
                      <Icon className="w-4 h-4" />
                    </div>

                    <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-white pb-3 border-b border-[#0C1F2E]">
                      {grp.category}
                    </h3>

                    <ul className="space-y-3 text-xs font-body text-[#BEBEBE] leading-relaxed">
                      {grp.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#139BFD] shrink-0 mt-0.5" />
                          <span>{item}</span>
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
