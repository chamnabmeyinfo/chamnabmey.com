'use client';

import React from 'react';
import { ArrowUpRight, Tractor, Tv, ShoppingBag, CheckCircle2, Sparkles } from 'lucide-react';

export default function CaseStudies() {
  const projects = [
    {
      id: 'solis-cambodia',
      title: 'Solis Cambodia - Agricultural Tractor Brand Scaling',
      category: 'Lead Funnels & Web Architecture',
      client: 'Mensarun MDR Co., LTD',
      year: '2016 – 2018',
      image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1200&q=80',
      metrics: '+140% Lead Inquiries • #1 Tier Market Brand • Page 1 Organic SEO',
      description:
        'Engineered the digital marketing launch and built the official web portal for tractor brand Solis Cambodia. Delivered targeted campaigns that surged qualified farmer & dealer inquiries across the provinces.',
      tags: ['Facebook Ads', 'Next/Web Dev', 'SEO Strategy', 'B2B Sales Funnel'],
      featured: true,
    },
    {
      id: 'khb-media',
      title: 'KHB Media PLC - 360° Digital Agency Operations & Funnels',
      category: 'Executive Leadership & Multi-Channel Ads',
      client: 'KHB MEDIA PLC (Under CEO Tim Vutha)',
      year: '2018 – 2021',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      metrics: '3.8x Avg ROAS • 5 Creative Teams Managed • 99.9% Uptime',
      description:
        'Spearheaded all agency operations. Directed high-performing Google & Facebook Ad campaigns, managed cPanel/WHM server environments, and synchronized video and design teams for corporate clients.',
      tags: ['Google Ads', 'Facebook Ads', 'Team Leadership', 'cPanel/WHM'],
      featured: false,
    },
    {
      id: 'riich-me',
      title: 'Riich Me & EPOS-GODIGITAL - E-Commerce & Marketplace Scaling',
      category: 'E-Commerce Strategy & Event Synergies',
      client: 'Riich Me Co., LTD',
      year: '2021 – 2022',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80',
      metrics: '+185% Online Traffic • 100K+ Event Reach • +35% Conversions',
      description:
        'Directed online customer acquisition for epos-godigital.com and Riich Me marketplace. Orchestrated paid ads and collaborated with KMall on large-scale promotional event activations.',
      tags: ['E-Commerce Ops', 'KMall Events', 'CRO Funnels', 'Social Commerce'],
      featured: false,
    },
  ];

  return (
    <section id="case-studies" className="py-24 bg-[#F2EEED] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading (Biogra style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#9175FF] block mb-3">
              Case Studies
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F0F0F] tracking-tight leading-[1.15]">
              Marketing Wins & Transformations <br className="hidden sm:inline" />
              The Stories Behind the Stats
            </h2>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-[#0F0F0F] hover:bg-[#232323] transition-all self-start md:self-end"
          >
            <span>Discuss Your Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Biogra Asymmetric Project Grid */}
        <div className="space-y-8">
          
          {/* Project 1: Large Featured Card (10-column feel) */}
          {projects.filter(p => p.featured).map((proj) => (
            <div
              key={proj.id}
              className="group bg-white rounded-3xl overflow-hidden border border-black/8 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-72 sm:h-96 md:h-[420px] w-full overflow-hidden bg-[#E8E3E2]">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute top-6 left-6 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-[#0F0F0F]">
                    {proj.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-xs font-semibold text-white">
                    {proj.year}
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <span className="text-xs font-semibold text-[#9175FF] block mb-1">
                      Client: {proj.client}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight drop-shadow-sm">
                      {proj.title}
                    </h3>
                  </div>

                  <span className="shrink-0 px-4 py-2 rounded-xl bg-white/95 backdrop-blur-md text-xs font-bold text-[#0F0F0F] shadow-md">
                    {proj.metrics}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-white">
                <div className="space-y-2 max-w-2xl">
                  <p className="text-sm text-[#555555] leading-relaxed">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {proj.tags.map((t, i) => (
                      <span key={i} className="text-xs font-medium px-2.5 py-1 rounded-md bg-black/4 text-[#555555] border border-black/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="#contact"
                  className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-[#0F0F0F] border border-black/20 hover:border-black hover:bg-black hover:text-white transition-all"
                >
                  <span>Replicate Results</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}

          {/* Projects 2 & 3: 2-Column Split Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.filter(p => !p.featured).map((proj) => (
              <div
                key={proj.id}
                className="group bg-white rounded-3xl overflow-hidden border border-black/8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#E8E3E2]">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-[#0F0F0F]">
                        {proj.category}
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-xs font-semibold text-white">
                        {proj.year}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-[11px] font-semibold text-[#9175FF] block mb-0.5">
                        {proj.client}
                      </span>
                      <h3 className="text-xl font-bold text-white tracking-tight leading-snug">
                        {proj.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="p-3 rounded-xl bg-[#F2EEED] border border-black/5 text-xs font-bold text-[#0F0F0F]">
                      {proj.metrics}
                    </div>

                    <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                      {proj.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {proj.tags.map((t, i) => (
                        <span key={i} className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-black/4 text-[#666666]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-black/5 flex items-center justify-between">
                  <span className="text-xs text-[#777777]">Verified Case Study</span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F0F0F] hover:text-[#9175FF] transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
