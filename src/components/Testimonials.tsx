'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Quote, Sparkles, Building2 } from 'lucide-react';
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
    <section id="testimonials" className="py-24 sm:py-32 relative border-b-[1.8px] border-[#0C1F2E] bg-[#141414] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[10px] border-[1.8px] border-[#0C1F2E] bg-[#06131B] text-[#42AFFD] text-xs font-heading uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#139BFD]" />
            <span>06 / Endorsements & Trust</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] text-white leading-tight">
            Executive Endorsements
          </h2>
          <p className="font-body text-base text-[#BEBEBE] leading-[1.75]">
            Verified feedback from company founders, CEOs, and commercial leaders who have partnered with Chamnab Mey.
          </p>
        </motion.div>

        {/* Dynamic Quotes Grid: 20px radius cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {references.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <SpotlightCard className="p-8 sm:p-9 h-full flex flex-col justify-between space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Quote className="w-8 h-8 text-[#139BFD]/50" />
                    <span className="text-[10px] font-heading font-bold px-2.5 py-1 rounded-[10px] bg-[#0C1F2E] border-[1.8px] border-[#0C1F2E] text-[#42AFFD]">
                      {item.verified}
                    </span>
                  </div>

                  <p className="font-body text-xs sm:text-sm text-[#BEBEBE] leading-[1.75] italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-5 border-t border-[#0C1F2E]">
                  <h4 className="font-heading text-sm font-bold text-white">
                    {item.name}
                  </h4>
                  <p className="font-body text-xs text-[#BEBEBE] font-medium mt-0.5">
                    {item.role}
                  </p>
                  <p className="font-body text-xs text-[#BEBEBE]/70 flex items-center gap-1.5 mt-1">
                    <Building2 className="w-3.5 h-3.5 text-[#139BFD]" />
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
