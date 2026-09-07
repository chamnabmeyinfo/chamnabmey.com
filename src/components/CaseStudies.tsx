'use client';

import React, { useState } from 'react';
import { 
  Tractor, 
  Tv, 
  ShoppingBag, 
  ArrowUpRight, 
  TrendingUp, 
  CheckCircle2, 
  Layers, 
  Globe,
  Sparkles,
  ExternalLink
} from 'lucide-react';

export default function CaseStudies() {
  const [activeTab, setActiveTab] = useState(0);

  const projects = [
    {
      id: 'solis-cambodia',
      title: 'Solis Cambodia - Agricultural Tractor Brand Scaling',
      category: 'Lead Generation & Web Architecture',
      client: 'Mensarun MDR Co., LTD (Solis Partnership)',
      year: '2016 – 2018',
      icon: Tractor,
      // High-res agricultural machinery demo image
      image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Solis Agricultural Machinery Tractor Field Demo',
      metrics: [
        { label: 'Lead Inquiries', value: '+140%', note: 'Farmer & dealer conversions' },
        { label: 'Brand Positioning', value: '#1 Tier', note: 'Top agricultural choice in KH' },
        { label: 'Organic Search', value: 'Page 1', note: 'High-intent agricultural keywords' },
      ],
      overview:
        'Solis is an internationally recognized tractor brand. As Web Developer and Digital Marketing Specialist at Mensarun MDR Co., LTD, Chamnab built the digital strategy and web presence to drive direct tractor sales and nationwide dealer inquiries.',
      challenges: [
        'High ticket agricultural machinery requires establishing immense trust and providing clear technical specifications.',
        'Audience included provincial farmers, cooperatives, and commercial farming operations with distinct communication habits.',
      ],
      solutions: [
        'Designed & developed the official Solis Cambodia website (soliscambodia.com) with intuitive model comparison and inquiry workflows.',
        'Executed targeted digital marketing campaigns on Facebook and localized channels with hyper-targeted geographic segmentation.',
        'Integrated SEO best practices resulting in top search engine rankings and steady organic inbound leads.',
        'Aligned sales and marketing teams so online inquiries were contacted within minutes by field agents.',
      ],
      tags: ['Next/Web Dev', 'Facebook Ads', 'SEO Strategy', 'Lead Gen Funnels', 'Analytics'],
    },
    {
      id: 'khb-media',
      title: 'KHB Media PLC - 360° Digital Agency Operations & Funnels',
      category: 'Executive Leadership & Multi-Channel Ads',
      client: 'KHB MEDIA PLC (Under CEO Tim Vutha)',
      year: '2018 – 2021',
      icon: Tv,
      // High-res digital marketing ad ops & analytics dashboard
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Digital Ad Campaigns Analytics Dashboard Demo',
      metrics: [
        { label: 'Managed Divisions', value: '5 Teams', note: 'Ads, Web, Video, Design, Photo' },
        { label: 'Client ROAS', value: '3.8x Avg', note: 'Across Google & Meta Ads' },
        { label: 'Server Reliability', value: '99.9%', note: 'WHM & cPanel infrastructure' },
      ],
      overview:
        'As General Manager reporting to CEO Tim Vutha, Chamnab spearheaded company operations and unified five technical and creative departments to deliver digital marketing, web applications, and corporate video campaigns for high-profile clients.',
      challenges: [
        'Coordinating disparate creative teams (video animators, graphic designers, developers, and media buyers) to deliver complex client projects on tight deadlines.',
        'Maximizing return on ad spend (ROAS) in competitive local industries.',
      ],
      solutions: [
        'Implemented standardized marketing funnels and ad testing frameworks that reduced client cost-per-acquisition (CPA).',
        'Directed high-performing Google Ads & Facebook Ads campaigns with audience clustering and retargeting.',
        'Maintained and administered client web hosting environments using WHM and cPanel for optimal security and speed.',
        'Established weekly performance dashboards and transparent client reporting.',
      ],
      tags: ['Google Ads', 'Facebook Ads', 'Team Leadership', 'cPanel/WHM', 'Video Marketing'],
    },
    {
      id: 'riich-me',
      title: 'Riich Me & EPOS-GODIGITAL - E-Commerce & Marketplace Scaling',
      category: 'E-Commerce Strategy & Event Synergies',
      client: 'Riich Me Co., LTD',
      year: '2021 – 2022',
      icon: ShoppingBag,
      // Modern e-commerce and retail marketplace
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'E-Commerce Marketplace and Retail Promotion Demo',
      metrics: [
        { label: 'Traffic Increase', value: '+185%', note: 'Integrated multi-channel boost' },
        { label: 'Event Reach', value: '100K+', note: 'KMall cross-promotional campaigns' },
        { label: 'Conversion Lift', value: '+35%', note: 'Checkout & UX optimization' },
      ],
      overview:
        'Directed operations and digital growth for epos-godigital.com and the Riich Me multi-vendor eMarketplace platform, orchestrating omni-channel marketing campaigns and collaborating with KMall on large-scale events.',
      challenges: [
        'Driving sustained user engagement and merchant adoption in a crowded e-commerce landscape.',
        'Connecting physical on-ground mall events with digital store visits and online conversions.',
      ],
      solutions: [
        'Integrated SEO, paid social ads, and automated email flows to create consistent buyer journeys.',
        'Coordinated cross-promotional marketing activations with KMall events driving massive attendance and digital interaction.',
        'Streamlined marketplace UI/UX, checkout flows, and product catalog discovery.',
        'Instituted behavioral analytics tracking to make data-driven UX enhancements.',
      ],
      tags: ['E-Commerce Ops', 'Event Marketing', 'CRO', 'Cross-Channel Ads', 'Marketplace'],
    },
  ];

  const current = projects[activeTab];

  return (
    <section id="case-studies" className="py-24 bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Real Client Results
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
            Case Studies & Proven Impact
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            A visual showcase of commercial business transformations, high-ROAS marketing funnels, and platforms led by Chamnab Mey.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {projects.map((proj, idx) => {
            const TabIcon = proj.icon;
            const isSelected = activeTab === idx;
            return (
              <button
                key={proj.id}
                onClick={() => setActiveTab(idx)}
                type="button"
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-sm font-semibold transition-all ${
                  isSelected
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 shadow-lg shadow-emerald-500/25 scale-102 font-bold'
                    : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700/80 border border-slate-700/60'
                }`}
              >
                <TabIcon className="w-4 h-4" />
                <span>{proj.client}</span>
              </button>
            );
          })}
        </div>

        {/* Case Study Detail Card */}
        <div className="bg-slate-950 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
          {/* Top highlight bar */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400" />

          {/* Visual Showcase Banner */}
          <div className="relative h-64 sm:h-80 md:h-96 w-full bg-slate-900 overflow-hidden group">
            <img
              src={current.image}
              alt={current.imageAlt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent" />

            {/* Overlaid Details */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
                    {current.category}
                  </span>
                  <span className="text-xs text-slate-300 font-medium px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-md border border-slate-700">
                    {current.year}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight drop-shadow-md">
                  {current.title}
                </h3>
                <p className="text-sm font-medium text-emerald-400">
                  Client Organization: {current.client}
                </p>
              </div>

              {/* Demo Badge */}
              <div className="shrink-0 backdrop-blur-md bg-slate-900/80 border border-slate-700 rounded-xl px-3 py-1.5 flex items-center gap-1.5 text-xs text-slate-300">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Demo Reference Visual</span>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-10 space-y-8">
            {/* Metric Highlights Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-8 border-b border-slate-800/80">
              {current.metrics.map((m, idx) => (
                <div key={idx} className="bg-slate-900/70 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between">
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                    {m.value}
                  </div>
                  <div className="text-sm font-bold text-slate-200 mt-1">{m.label}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{m.note}</div>
                </div>
              ))}
            </div>

            {/* Details: Overview, Challenges, Solutions */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h4 className="text-base font-bold text-white uppercase tracking-wider text-xs mb-2 text-emerald-400">
                    Executive Summary
                  </h4>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {current.overview}
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-bold text-white uppercase tracking-wider text-xs mb-3 text-slate-400">
                    Key Challenges Addressed
                  </h4>
                  <ul className="space-y-2">
                    {current.challenges.map((c, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <span className="text-amber-400 font-bold shrink-0">!</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h4 className="text-base font-bold text-white uppercase tracking-wider text-xs mb-3 text-emerald-400">
                    Strategic Execution & Solutions
                  </h4>
                  <ul className="space-y-2.5">
                    {current.solutions.map((s, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-base font-bold text-white uppercase tracking-wider text-xs mb-2 text-slate-400">
                    Core Technologies & Strategies Used
                  </h4>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {current.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-900 border border-slate-700 text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Action Bar */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-400 text-center sm:text-left">
                Want similar growth metrics for your business? Request a custom strategy breakdown.
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 shadow-md shadow-emerald-500/20 transition-all"
              >
                <span>Replicate These Results For Your Brand</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
