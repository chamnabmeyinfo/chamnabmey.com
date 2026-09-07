'use client';

import React from 'react';
import { 
  TrendingUp, 
  Target, 
  Cpu, 
  BarChart3, 
  CheckCircle2, 
  ArrowUpRight, 
  Download, 
  ShieldCheck, 
  Zap,
  Briefcase,
  Sparkles
} from 'lucide-react';

export default function About() {
  const marketingPillars = [
    {
      icon: Target,
      title: 'High-ROI Paid Advertising & Funnel Architecture',
      description:
        'Proven expertise managing substantial ad budgets across Meta (Facebook & Instagram) and Google Ads. Specializing in audience segmentation, creative testing, retargeting funnels, and aggressive CPA reduction.',
      highlights: [
        'Data-backed audience clustering & custom lookalikes',
        'Direct-response copywriting & video ad hooks',
        'Systematic A/B creative testing & budget scaling',
      ],
    },
    {
      icon: Cpu,
      title: 'Technical Tracking & Conversion Optimization',
      description:
        'Bridging the critical gap between marketing and technical systems. I engineer conversion-focused landing pages, configure Meta Conversion API (CAPI), Google Tag Manager, and GA4 to ensure zero data loss and maximum algorithmic optimization.',
      highlights: [
        'Server-side Meta Pixel & Conversion API (CAPI)',
        'Google Analytics 4 & Custom Event Tracking',
        'Sub-second page load speeds & Core Web Vitals',
      ],
    },
    {
      icon: BarChart3,
      title: 'Commercial Growth & Executive Campaign Leadership',
      description:
        'Over 10 years of leadership orchestrating multi-channel digital campaigns. Experienced in managing cross-functional creative teams—video creators, graphic designers, and media buyers—to execute cohesive revenue-driving strategies.',
      highlights: [
        'Former General Manager overseeing 5 agency divisions',
        'Full-funnel lead generation and sales alignment',
        'Clear weekly ROAS dashboards and business metrics',
      ],
    },
  ];

  const digitalMilestones = [
    {
      period: '2023 – Present',
      role: 'Senior Digital Growth & Marketing Consultant',
      scope: 'Freelance & SME Advisory',
      impact: 'Architecting performance ad funnels, high-converting landing pages, and lead generation engines for growing enterprises in Cambodia and Southeast Asia.',
      focus: ['Meta & Google Ads', 'Lead Funnels', 'Conversion Rate Optimization'],
    },
    {
      period: '2021 – 2022',
      role: 'Operations & Digital Growth Manager',
      scope: 'Riich Me Co., LTD (epos-godigital.com / eMarketplace)',
      impact: 'Directed online acquisition strategy across paid advertising, SEO, and email automation. Forged high-visibility promotional collaborations with KMall events driving massive online brand engagement and customer transactions.',
      focus: ['E-Commerce Growth', 'Event Marketing Synergies', 'Multi-Channel Acquisition'],
    },
    {
      period: '2018 – 2021',
      role: 'General Manager & Ad Operations Lead',
      scope: 'KHB MEDIA PLC',
      impact: 'Spearheaded agency operations under CEO Tim Vutha. Led 5 specialized creative and digital departments, directed multi-channel Facebook and Google Ads campaigns, and established predictable marketing funnels for corporate clients.',
      focus: ['Agency Leadership', 'High-Budget Ad Campaigns', '360° Digital Strategy'],
    },
    {
      period: '2016 – 2018',
      role: 'Digital Marketing & Web Specialist',
      scope: 'MEN SARUN MDR Co., Ltd (Solis Cambodia)',
      impact: 'Engineered the digital marketing launch and built the official web platform for tractor brand Solis Cambodia. Delivered targeted campaigns that established the brand as a market leader and surged qualified farmer & dealer sales inquiries.',
      focus: ['High-Ticket B2B Lead Gen', 'Brand Positioning', 'SEO & Web Platform'],
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Professional Foundation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
            Built on 10+ Years of Measurable Digital Growth & Strategic Leadership
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            I don&apos;t just run ads; I build complete customer acquisition engines that integrate high-converting creative strategy, technical tracking, and commercial execution.
          </p>
        </div>

        {/* 3 Core Marketing Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {marketingPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-slate-950/80 rounded-3xl p-8 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between shadow-xl group hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-800/80 space-y-2.5">
                  {pillar.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Strategic Agency Workflow Visual Showcase */}
        <div className="mb-16 rounded-3xl overflow-hidden border border-slate-800 relative bg-slate-950 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                <Zap className="w-3.5 h-3.5" />
                <span>The Full-Funnel Advantage</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                How Modern Campaigns Win in Today&apos;s Market
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Ad platforms have evolved. Machine learning algorithms on Meta and Google prioritize campaigns backed by <strong className="text-white">deep signal tracking</strong> and <strong className="text-white">high-converting creative hooks</strong>. 
              </p>

              <p className="text-sm text-slate-400 leading-relaxed">
                By unifying media buying, direct-response copywriting, and server-side tracking, we eliminate wasted spend and feed the ad algorithms the exact conversion signals needed to drive lower cost-per-lead and higher returns.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-xs text-slate-400 block">Ad Spend Efficiency</span>
                  <span className="text-lg font-bold text-emerald-400">+45%</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-xs text-slate-400 block">Attribution Accuracy</span>
                  <span className="text-lg font-bold text-cyan-400">99.8%</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 col-span-2 sm:col-span-1">
                  <span className="text-xs text-slate-400 block">Lead Qualification</span>
                  <span className="text-lg font-bold text-amber-400">High Intent</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-72 lg:h-full min-h-[320px] bg-slate-900 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                alt="Digital Strategy and Growth Review Demo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-slate-950/90 via-slate-950/40 to-transparent" />
              
              <div className="absolute bottom-4 left-4 backdrop-blur-md bg-slate-950/80 border border-slate-800 rounded-xl px-3 py-1.5 flex items-center gap-2 text-xs text-slate-300">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Strategy Room Demo Visual</span>
              </div>
            </div>
          </div>
        </div>

        {/* Proven Growth Milestones */}
        <div className="bg-slate-950 rounded-3xl border border-slate-800 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 mb-8 border-b border-slate-800">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
                <Briefcase className="w-4 h-4" />
                <span>Proven Career Milestones</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Where Strategy Meets Commercial Results
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="/Resume-CHAMNAB-MEY.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 bg-slate-900 border border-slate-700 hover:border-emerald-500/50 hover:text-emerald-400 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download CV (PDF)</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-md shadow-emerald-500/20"
              >
                <span>Hire Chamnab</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {digitalMilestones.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/90 hover:border-slate-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2 text-xs">
                    <span className="font-semibold text-emerald-400 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                      {item.period}
                    </span>
                    <span className="text-slate-400 text-[11px]">{item.scope}</span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2">{item.role}</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {item.impact}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                  {item.focus.map((f, fi) => (
                    <span
                      key={fi}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-950 text-slate-300 border border-slate-800"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
