'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Quote, Sparkles, CheckCircle2, Building2 } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

export default function Testimonials() {
  const references = [
    {
      name: 'Mr. TIM VUTHA',
      role: 'Chief Executive Officer',
      company: 'KHB MEDIA PLC, Phnom Penh',
      quote:
        'Chamnab served as our General Manager, coordinating company operations across digital marketing, web development, and ad campaigns. His ability to lead creative departments while maintaining strict technical execution and high ad ROI was pivotal.',
      verified: 'Verified Commercial Reference',
    },
    {
      name: 'Mr. Ly SOK',
      role: 'Purchasing & Operations Manager',
      company: 'Shimmexgroup Co., Ltd, Phnom Penh',
      quote:
        'Chamnab demonstrates outstanding reliability, systematic problem-solving, and attention to detail. Whether managing complex technical systems or coordinating multi-stakeholder projects, he consistently delivers excellence.',
      verified: 'Verified Operations Partner',
    },
    {
      name: 'Agricultural Machinery Partner',
      role: 'Commercial Machinery Distributor',
      company: 'Solis Brand Distribution Cambodia',
      quote:
        'The official website and targeted digital campaigns designed by Chamnab completely transformed our tractor sales in Cambodia. Inquiries from farmers and regional dealers surged rapidly.',
      verified: 'Verified Lead Gen Outcome',
    },
  ];

  return (
    <section id="testimonials" className="py-24 sm:py-32 relative border-b border-white/[0.06] bg-[#08090C] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-neutral-400 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            <span>06 / Endorsements & Trust</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Executive Endorsements
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-light">
            Verified feedback from company founders, CEOs, and commercial leaders who have partnered with Chamnab Mey.
          </p>
        </motion.div>

        {/* Dynamic Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {references.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <SpotlightCard
                spotlightColor="rgba(56, 189, 248, 0.12)"
                className="p-8 sm:p-9 h-full flex flex-col justify-between space-y-8 border-white/[0.08] bg-[#0C0E14]/90"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Quote className="w-8 h-8 text-cyan-400/40" />
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                      {item.verified}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic font-light">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-5 border-t border-white/[0.06]">
                  <h4 className="text-sm font-bold text-white font-mono">
                    {item.name}
                  </h4>
                  <p className="text-xs text-neutral-400 font-medium mt-0.5">
                    {item.role}
                  </p>
                  <p className="text-xs text-neutral-400 font-light flex items-center gap-1.5 mt-1">
                    <Building2 className="w-3 h-3 text-cyan-400" />
                    <span>{item.company}</span>
                  </p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
