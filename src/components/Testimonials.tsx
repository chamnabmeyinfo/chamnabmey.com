'use client';

import React from 'react';
import { Quote, Star, UserCheck, ShieldCheck } from 'lucide-react';

export default function Testimonials() {
  const references = [
    {
      name: 'Mr. TIM VUTHA',
      role: 'Chief Executive Officer (CEO)',
      company: 'KHB MEDIA PLC, Phnom Penh',
      contact: 'vutha.tim@khbmedia.asia',
      quote:
        'Chamnab served as our General Manager, orchestrating company operations across digital marketing, web development, and ad campaigns. His rare ability to lead creative departments while maintaining strict technical execution and high ad ROI was pivotal to our organization.',
    },
    {
      name: 'Mr. Ly SOK',
      role: 'Purchasing & Operations Manager',
      company: 'Shimmexgroup Co., Ltd, Phnom Penh',
      contact: 'Verified Corporate Reference',
      quote:
        'Chamnab demonstrates outstanding reliability, systematic problem-solving, and attention to detail. Whether managing complex systems or coordinating multi-stakeholder projects, he consistently delivers excellence and upholds the highest professional standards.',
    },
    {
      name: 'Agricultural Machinery Partner',
      role: 'Commercial Machinery Distributor',
      company: 'Solis Brand Distribution Cambodia',
      contact: 'Verified Client Case',
      quote:
        'The official website and targeted digital campaigns designed by Chamnab completely transformed our tractor sales in Cambodia. Inquiries from farmers and regional dealers surged, establishing our brand presence rapidly across the provinces.',
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-[#EBE5E3] border-y border-black/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#9175FF] block mb-3">
            Testimonials & Endorsements
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F0F0F] tracking-tight leading-[1.15]">
            Executive References & Client Trust
          </h2>
        </div>

        {/* References Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {references.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-black/8 shadow-sm flex flex-col justify-between hover:shadow-xl transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#9175FF]/10 text-[#9175FF] flex items-center justify-center">
                    <Quote className="w-5 h-5" />
                  </div>
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-[#444444] text-sm leading-relaxed italic mb-8">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-black/6">
                <h4 className="text-base font-bold text-[#0F0F0F]">{item.name}</h4>
                <p className="text-xs font-semibold text-[#9175FF]">{item.role}</p>
                <p className="text-xs text-[#777777] mt-0.5">{item.company}</p>

                <div className="mt-3 pt-3 border-t border-black/5 flex items-center gap-1.5 text-xs text-[#696969]">
                  <UserCheck className="w-3.5 h-3.5 text-[#9175FF]" />
                  <span className="truncate">{item.contact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-black/8 text-xs font-semibold text-[#555555]">
            <ShieldCheck className="w-4 h-4 text-[#9175FF]" />
            <span>All corporate references and executive records are documented and verifiable.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
