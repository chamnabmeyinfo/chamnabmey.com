'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Download, GraduationCap, Building2, Code2, LineChart, Sparkles } from 'lucide-react';
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
    <section id="about" className="py-24 sm:py-32 relative border-b-[1.8px] border-[#0C1F2E] bg-[#141414] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -top-40 right-0 w-[500px] h-[500px] bg-[#139BFD]/8 blur-[140px] -z-10" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Section Header: Montserrat 700 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[10px] border-[1.8px] border-[#0C1F2E] bg-[#06131B] text-[#42AFFD] text-xs font-heading uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#139BFD]" />
            <span>01 / Background & Strategic Edge</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] text-white leading-tight">
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
            <blockquote className="font-heading text-xl sm:text-2xl font-bold text-white leading-snug border-l-[3px] border-[#139BFD] pl-5">
              &ldquo;Traffic without attribution is wasted capital. Creative campaigns without conversion architecture fail to scale.&rdquo;
            </blockquote>

            <div className="space-y-4 font-body text-sm sm:text-base text-[#BEBEBE] leading-[1.75]">
              <p>
                Most digital marketing campaigns underperform because the underlying technical infrastructure is fragmented: slow landing pages, untracked pixels, and disconnected ad creatives bleed ROI.
              </p>
              <p>
                With an IT background from <strong className="text-white font-semibold">Setec Institute</strong> and over a decade leading operations at <strong className="text-white font-semibold">KHB Media PLC</strong> and <strong className="text-white font-semibold">Riich Me</strong>, I unify media buying with clean code, sub-second page speeds, and server-side tracking.
              </p>
            </div>

            {/* Quick Credential Badges: 20px radius cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-4 rounded-[20px] border-[1.8px] border-[#0C1F2E] bg-[#06131B] flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-[#139BFD] shrink-0" />
                <div className="text-xs">
                  <div className="font-heading font-bold text-white">Setec Institute</div>
                  <div className="font-body text-[11px] text-[#BEBEBE]">IT & Software Engineering</div>
                </div>
              </div>

              <div className="p-4 rounded-[20px] border-[1.8px] border-[#0C1F2E] bg-[#06131B] flex items-center gap-3">
                <Building2 className="w-5 h-5 text-[#42AFFD] shrink-0" />
                <div className="text-xs">
                  <div className="font-heading font-bold text-white">Ex-GM @ KHB Media</div>
                  <div className="font-body text-[11px] text-[#BEBEBE]">Directed 5 Agency Divisions</div>
                </div>
              </div>
            </div>

            {/* Inversweb Action Buttons: 6px radius */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="/Resume-CHAMNAB-MEY.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-invers px-5 py-2.5 text-xs gap-2"
              >
                <Download className="w-3.5 h-3.5 text-[#139BFD]" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-[#139BFD] hover:text-[#42AFFD] transition-colors group"
              >
                <span>Inquire engagement</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Right: The 3 Core Pillars with Inversweb Cards */}
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
                  <SpotlightCard className="p-6 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-[6px] bg-[#0C1F2E] flex items-center justify-center text-[#139BFD]">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-heading font-bold text-[#139BFD]">
                          {p.num}
                        </span>
                      </div>
                      <span className="text-[10px] font-heading font-bold px-2.5 py-1 rounded-[10px] bg-[#0C1F2E]/60 border-[1.8px] border-[#0C1F2E] text-[#42AFFD]">
                        {p.highlight}
                      </span>
                    </div>

                    <h3 className="font-heading text-base font-bold text-white tracking-tight pt-1">
                      {p.title}
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-[#BEBEBE] leading-[1.7]">
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
