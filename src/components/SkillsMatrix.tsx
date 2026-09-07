'use client';

import React from 'react';

export default function SkillsMatrix() {
  const groups = [
    {
      category: 'Paid Acquisition',
      items: [
        'Meta Ads Manager (Facebook/Instagram)',
        'Google Search & Display Network',
        'Audience Segmentation & Lookalikes',
        'Direct-Response Copywriting',
        'Creative A/B Split Testing',
        'ROAS & CPA Optimization',
      ],
    },
    {
      category: 'Tracking & Attribution',
      items: [
        'Meta Conversion API (CAPI) Server-Side',
        'Google Tag Manager (GTM) Architecture',
        'Google Analytics 4 Custom Events',
        'Signal Diagnostics & Pixel Audit',
        'Multi-Touch Conversion Modeling',
        'UTM Campaign Taxonomy',
      ],
    },
    {
      category: 'Web Tech & SEO',
      items: [
        'Next.js 14/15 App Router & React',
        'WordPress & Custom Theme Development',
        'Technical On-Page & Schema Markup',
        'Core Web Vitals Speed Optimization',
        'Mobile-First Conversion UI/UX',
        'Lead Form Webhook Automation',
      ],
    },
    {
      category: 'Infrastructure & Ops',
      items: [
        'cPanel & WHM Server Administration',
        'Cloudflare CDN & DNS Routing',
        'Corporate Mail & MX Records',
        'Automated Database & Backup Systems',
        'Cross-Functional Team Leadership',
        'E-Commerce Marketplace Operations',
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-[#FAFAFA] border-b border-neutral-200/70">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-xl mb-16 space-y-3">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400 block">
            04 / Technical Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
            Capabilities & Infrastructure
          </h2>
        </div>

        {/* 4-Column Minimal Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {groups.map((grp, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#111111] pb-2 border-b border-neutral-200">
                {grp.category}
              </h3>
              <ul className="space-y-2.5 text-xs text-neutral-600">
                {grp.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-neutral-400">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
