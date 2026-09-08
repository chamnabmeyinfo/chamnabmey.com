'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Download, GraduationCap, Building2, Code2, LineChart, Sparkles, CheckCircle2 } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

export default function About() {
  const pillars = [
    {
      num: '01',
      title: 'Performance Paid Media & CPA Optimization',
      text: 'Managing ad spend across Meta and Google Ads with disciplined creative testing, custom audience modeling, and systematic CPA reduction.',
      icon: LineChart,
      highlight: 'Meta & Google Ads Specialist',
    },
    {
      num: '02',
      title: 'Technical Tracking & Meta CAPI Attribution',
      text: 'Eliminating data loss through server-side Meta Conversion API (CAPI), Google Tag Manager, GA4 event modeling, and high-speed web infrastructure.',
      icon: Code2,
      highlight: 'Zero Signal Loss',
    },
    {
      num: '03',
      title: 'Executive Leadership & Commercial Delivery',
      text: 'Track record directing 5 agency divisions as General Manager at KHB Media PLC, synchronizing creative video, design, and ad buying for corporate brands.',
      icon: Building2,
      highlight: '10+ Years Operational Leadership',
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative border-b border-white/[0.06] bg-[#08090C] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -top-40 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] -z-10" />

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
            <span>01 / Background & Strategic Edge</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Where Technical Precision Meets Commercial Growth
          </h2>
        </motion.div>

        {/* Split Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Executive Philosophy & Foundation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <blockquote className="text-xl sm:text-2xl font-bold text-white leading-snug tracking-tight border-l-2 border-cyan-400 pl-5">
              &ldquo;Traffic without attribution is wasted capital. Creative campaigns without conversion architecture fail to scale.&rdquo;
            </blockquote>

            <div className="space-y-4 text-sm sm:text-base text-neutral-400 leading-relaxed font-light">
              <p>
                Most digital marketing campaigns underperform because the underlying technical infrastructure is fragmented: slow landing pages, untracked pixels, and disconnected ad creatives bleed ROI.
              </p>
              <p>
                With an IT background from <strong className="text-white font-semibold">Setec Institute</strong> and over a decade leading operations at <strong className="text-white font-semibold">KHB Media PLC</strong> and <strong className="text-white font-semibold">Riich Me</strong>, I unify media buying with clean code, sub-second page speeds, and server-side tracking.
              </p>
            </div>

            {/* Quick Credential Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl border border-white/[0.08] bg-white/[0.02] flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-cyan-400 shrink-0" />
                <div className="text-xs">
                  <div className="font-semibold text-white">Setec Institute</div>
                  <div className="text-[11px] text-neutral-400 font-light">IT & Software Engineering</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl border border-white/[0.08] bg-white/[0.02] flex items-center gap-3">
                <Building2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <div className="text-xs">
                  <div className="font-semibold text-white">Ex-GM @ KHB Media</div>
                  <div className="text-[11px] text-neutral-400 font-light">Directed 5 Agency Divisions</div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="/Resume-CHAMNAB-MEY.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-white border border-white/[0.12] hover:border-white/[0.25] rounded-full bg-white/[0.04] hover:bg-white/[0.08] transition-all"
              >
                <Download className="w-3.5 h-3.5 text-cyan-400" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group"
              >
                <span>Inquire engagement</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Right: The 3 Core Pillars with Spotlight Cards */}
          <div className="lg:col-span-6 space-y-4">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.num}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <SpotlightCard
                    spotlightColor="rgba(56, 189, 248, 0.12)"
                    className="p-6 border-white/[0.08] bg-[#0D0F14]/90 space-y-2.5"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-mono font-bold text-cyan-400">
                          {p.num}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-neutral-400">
                        {p.highlight}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white tracking-tight pt-1">
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                      {p.text}
                    </p>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
