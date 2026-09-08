'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

export default function CaseStudies() {
  const projects = [
    {
      id: 'solis-cambodia',
      title: 'Solis Cambodia — Agricultural Machinery Brand Scaling',
      role: 'Web Architecture & Lead Funnel Specialist',
      client: 'Mensarun MDR Co., Ltd',
      period: '2016 – 2018',
      image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1200&q=80',
      metric: '+140% Sales Inquiries',
      metricSub: 'High-ticket agricultural tractor inquiries & regional dealer network expansion',
      summary:
        'Engineered the digital launch and official web platform for international tractor brand Solis in Cambodia. Designed localized Meta ad funnels and organic search rankings that positioned the brand at the forefront of the agricultural sector.',
      tags: ['Meta Lead Ads', 'High-Speed Web Architecture', 'Local SEO Dominance', 'B2B Sales Funnels'],
    },
    {
      id: 'khb-media',
      title: 'KHB Media PLC — 360° Digital Agency Operations & Funnels',
      role: 'General Manager & Ad Operations Lead',
      client: 'KHB MEDIA PLC (Under CEO Tim Vutha)',
      period: '2018 – 2021',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      metric: '3.8x Average ROAS',
      metricSub: 'Across Google & Meta corporate ad campaigns with 5 synchronized divisions',
      summary:
        'Directed end-to-end agency operations. Synchronized digital marketing, web development, video animation, and design departments to execute high-budget paid ad campaigns with predictable ROI for corporate clients.',
      tags: ['Ad Operations', 'Executive Leadership', 'Google Search & Display', 'cPanel/WHM Server Admin'],
    },
    {
      id: 'riich-me',
      title: 'Riich Me & EPOS-GODIGITAL — E-Commerce Scaling & Events',
      role: 'Operations & Digital Growth Manager',
      client: 'Riich Me Co., Ltd',
      period: '2021 – 2022',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80',
      metric: '+185% Online Traffic',
      metricSub: '100K+ event reach through strategic KMall collaborations & e-commerce funnels',
      summary:
        'Oversaw digital customer acquisition for epos-godigital.com and the Riich Me multi-vendor marketplace. Integrated paid acquisition, SEO, and omnichannel promotions with physical KMall community events.',
      tags: ['E-Commerce Ops', 'KMall Events', 'CRO Funnels', 'Omnichannel Strategy'],
    },
  ];

  return (
    <section id="case-studies" className="py-24 sm:py-32 relative border-b-[1.8px] border-[#0C1F2E] bg-[#141414] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-3 max-w-xl"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[10px] border-[1.8px] border-[#0C1F2E] bg-[#06131B] text-[#42AFFD] text-xs font-heading uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#139BFD]" />
              <span>04 / Selected Commercial Works</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] text-white leading-tight">
              Verified Commercial Transformations
            </h2>
            <p className="font-body text-base text-[#BEBEBE] leading-[1.75]">
              Real commercial outcomes delivered across high-ticket B2B, digital agency operations, and e-commerce platforms.
            </p>
          </motion.div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-heading font-bold text-[#139BFD] hover:text-[#42AFFD] transition-colors group"
          >
            <span>Start a project like these</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Selected Projects List: 20px radius cards */}
        <div className="space-y-10">
          {projects.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <SpotlightCard className="overflow-hidden grid grid-cols-1 lg:grid-cols-12 group">
                {/* Image Column */}
                <div className="lg:col-span-6 relative h-64 sm:h-80 lg:h-auto min-h-[300px] overflow-hidden bg-[#0C1F2E]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06131B] via-transparent to-transparent opacity-80 lg:hidden" />
                </div>

                {/* Content Column */}
                <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-[#BEBEBE] font-body">
                      <span>{item.client}</span>
                      <span className="text-[#42AFFD] font-heading font-bold">{item.period}</span>
                    </div>

                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug group-hover:text-[#139BFD] transition-colors">
                      {item.title}
                    </h3>

                    {/* Prominent Outcome Callout: 10px radius, 1.8px border #0C1F2E */}
                    <div className="py-3.5 px-4 rounded-[10px] bg-[#141414] border-[1.8px] border-[#0C1F2E] space-y-0.5">
                      <span className="font-heading text-2xl sm:text-3xl font-bold text-[#139BFD] tracking-tight block">
                        {item.metric}
                      </span>
                      <span className="font-body text-xs text-[#BEBEBE] block">
                        {item.metricSub}
                      </span>
                    </div>

                    <p className="font-body text-xs sm:text-sm text-[#BEBEBE] leading-[1.7]">
                      {item.summary}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#0C1F2E] flex flex-wrap items-center justify-between gap-4">
                    {/* Tags: 10px radius */}
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] font-body px-2.5 py-1 rounded-[10px] bg-[#141414] border-[1.8px] border-[#0C1F2E] text-[#BEBEBE]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1 text-xs font-heading font-bold text-[#139BFD] hover:text-[#42AFFD] group-hover:translate-x-1 transition-all"
                    >
                      <span>Replicate results</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
