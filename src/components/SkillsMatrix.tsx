'use client';

import React, { useState } from 'react';
import { Check, ChevronDown, Sparkles, Award } from 'lucide-react';

export default function SkillsMatrix() {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const categories = [
    {
      number: '01',
      title: 'Performance Paid Ads (Meta & Google)',
      description:
        'Advanced media buying and audience architecture across Meta Ads Manager and Google Ads. Direct expertise setting up lookalike audiences, retargeting funnels, direct-response ad copy, and reducing cost-per-acquisition (CPA).',
      tags: ['Meta Ads Manager', 'Google Search & Display', 'Audience Clustering', 'CPA Optimization', 'A/B Creative Testing'],
    },
    {
      number: '02',
      title: 'Attribution, Tracking & Conversion API (CAPI)',
      description:
        'Eliminating signal loss through server-side tracking architecture. Implementing Meta Conversion API (CAPI), Google Tag Manager event tracking, Google Analytics 4 custom dimensions, and full attribution modeling.',
      tags: ['Meta CAPI', 'Google Tag Manager', 'GA4 Dashboards', 'Server-Side Events', 'Pixel Diagnostics'],
    },
    {
      number: '03',
      title: 'High-Converting Web Development & Technical SEO',
      description:
        'Building lightning-fast web applications and conversion-focused landing pages with Next.js, React, and WordPress. Ensuring Core Web Vitals pass with sub-second load times and technical on-page SEO rankings.',
      tags: ['Next.js 14/15', 'WordPress/WooCommerce', 'Core Web Vitals', 'On-Page SEO', 'Lead Form Webhooks'],
    },
    {
      number: '04',
      title: 'Executive Agency Leadership & Media Direction',
      description:
        'Proven track record as General Manager leading 5 creative & technical agency divisions. Directing direct-response video creators, animators, and copywriters to produce unified multi-channel campaigns.',
      tags: ['Team Leadership', 'Video Ad Direction', 'cPanel & WHM Admin', 'Multi-Channel Strategy', 'Client ROAS Review'],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-[#F2EEED] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading (Biogra style) */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#9175FF] block mb-3">
            Mastering Skills
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F0F0F] tracking-tight leading-[1.15]">
            Marketing Tools & Tech Stack
          </h2>
        </div>

        {/* Biogra Numbered Accordion Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Number Indicators (Biogra Left Block) */}
          <div className="lg:col-span-3 hidden lg:flex flex-col space-y-4">
            {categories.map((cat, idx) => (
              <button
                key={cat.number}
                onClick={() => setActiveAccordion(idx)}
                type="button"
                className={`p-5 rounded-2xl border text-left transition-all flex items-center justify-between ${
                  activeAccordion === idx
                    ? 'bg-[#0F0F0F] text-white border-[#0F0F0F] shadow-lg'
                    : 'bg-white text-[#696969] border-black/8 hover:border-black/20'
                }`}
              >
                <span className="text-xl font-bold">{cat.number}</span>
                <span className="text-xs font-semibold uppercase tracking-wider">
                  {activeAccordion === idx ? 'Active' : 'View'}
                </span>
              </button>
            ))}
          </div>

          {/* Right Side: Accordion Cards (Biogra Right Block) */}
          <div className="lg:col-span-9 space-y-4">
            {categories.map((cat, idx) => {
              const isOpen = activeAccordion === idx;
              return (
                <div
                  key={cat.number}
                  className="bg-white rounded-2xl border border-black/8 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => setActiveAccordion(isOpen ? -1 : idx)}
                    type="button"
                    className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 hover:bg-black/2 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="w-8 h-8 rounded-full bg-black/5 text-[#0F0F0F] font-bold text-xs flex items-center justify-center shrink-0">
                        {cat.number}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-[#0F0F0F]">
                        {cat.title}
                      </h3>
                    </div>

                    <div className={`p-2 rounded-full border border-black/10 transition-transform ${isOpen ? 'rotate-180 bg-[#0F0F0F] text-white' : 'text-[#0F0F0F]'}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 sm:px-8 pb-7 pt-2 border-t border-black/5 space-y-5">
                      <p className="text-sm text-[#555555] leading-relaxed">
                        {cat.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-1">
                        {cat.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#F2EEED] text-[#0F0F0F] border border-black/6"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

        {/* Tools Badges Strip */}
        <div className="mt-16 pt-8 border-t border-black/10 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#777777] mb-6">
            Technologies & Platforms Mastered
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {[
              'Meta Ads Manager',
              'Google Ads',
              'Google Analytics 4',
              'Google Tag Manager',
              'Next.js',
              'Tailwind CSS',
              'WordPress',
              'cPanel & WHM',
              'Cloudflare CDN',
              'Google Firestore',
              'Git & GitHub',
              'Vercel',
              'Search Console',
            ].map((tool, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full text-xs font-bold bg-white text-[#222222] border border-black/8 shadow-xs"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
