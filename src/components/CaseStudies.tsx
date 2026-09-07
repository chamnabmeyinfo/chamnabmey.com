'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function CaseStudies() {
  const projects = [
    {
      id: 'solis-cambodia',
      title: 'Solis Cambodia — Agricultural Tractor Brand Scaling',
      role: 'Web Architecture & Lead Funnel Specialist',
      client: 'Mensarun MDR Co., Ltd',
      period: '2016 – 2018',
      image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1200&q=80',
      metric: '+140% Sales Inquiries',
      metricSub: 'Commercial tractor sales & regional dealer network expansion',
      summary:
        'Engineered the digital launch and official web platform for international tractor brand Solis in Cambodia. Designed localized Meta ad funnels and organic search rankings that positioned the brand at the forefront of the agricultural sector.',
      tags: ['Facebook Ads', 'Next/Web Engineering', 'SEO Strategy', 'B2B Funnels'],
    },
    {
      id: 'khb-media',
      title: 'KHB Media PLC — 360° Digital Agency Operations & Funnels',
      role: 'General Manager & Ad Operations Lead',
      client: 'KHB MEDIA PLC (Under CEO Tim Vutha)',
      period: '2018 – 2021',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      metric: '3.8x Average ROAS',
      metricSub: 'Across Google & Meta client campaigns with 5 synchronized teams',
      summary:
        'Directed end-to-end agency operations. Synchronized digital marketing, web dev, video animation, and design departments to execute high-budget paid ad campaigns with predictable ROI for corporate clients.',
      tags: ['Ad Operations', 'Executive Leadership', 'Google Ads', 'cPanel & WHM'],
    },
    {
      id: 'riich-me',
      title: 'Riich Me & EPOS-GODIGITAL — E-Commerce Scaling & Events',
      role: 'Operations & Digital Growth Manager',
      client: 'Riich Me Co., Ltd',
      period: '2021 – 2022',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80',
      metric: '+185% Online Traffic',
      metricSub: '100K+ event reach through strategic KMall collaborations',
      summary:
        'Oversaw digital customer acquisition for epos-godigital.com and Riich Me multi-vendor marketplace. Integrated paid acquisition, SEO, and omnichannel promotions with physical KMall events.',
      tags: ['E-Commerce Ops', 'KMall Events', 'CRO Funnels', 'Multi-Channel'],
    },
  ];

  return (
    <section id="case-studies" className="py-24 bg-[#FAFAFA] border-b border-neutral-200/70">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400 block">
              02 / Selected Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
              Commercial Wins & Transformations
            </h2>
            <p className="text-sm text-neutral-500">
              Verified outcomes delivered across high-ticket B2B, digital agency operations, and e-commerce platforms.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#111111] hover:underline"
          >
            <span>Start a project</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        {/* Minimalist Projects List */}
        <div className="space-y-12">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="bg-white rounded-2xl overflow-hidden border border-neutral-200/80 hover:border-neutral-900 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 group"
            >
              {/* Project Image */}
              <div className="lg:col-span-6 relative h-64 sm:h-80 lg:h-auto min-h-[280px] bg-neutral-100 overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                />
              </div>

              {/* Project Content */}
              <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-neutral-400">
                    <span>{proj.client}</span>
                    <span>{proj.period}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#111111] tracking-tight leading-snug">
                    {proj.title}
                  </h3>

                  {/* Highlight Metric */}
                  <div className="py-2 border-y border-neutral-100">
                    <span className="text-2xl font-extrabold text-[#111111] tracking-tight block">
                      {proj.metric}
                    </span>
                    <span className="text-xs text-neutral-500">
                      {proj.metricSub}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {proj.summary}
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tags.map((t, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#111111] group-hover:underline"
                  >
                    <span>Replicate results</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
