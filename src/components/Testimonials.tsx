'use client';

import React from 'react';

export default function Testimonials() {
  const references = [
    {
      name: 'Mr. TIM VUTHA',
      role: 'Chief Executive Officer',
      company: 'KHB MEDIA PLC, Phnom Penh',
      quote:
        'Chamnab served as our General Manager, coordinating company operations across digital marketing, web development, and ad campaigns. His ability to lead creative departments while maintaining strict technical execution and high ad ROI was pivotal.',
    },
    {
      name: 'Mr. Ly SOK',
      role: 'Purchasing & Operations Manager',
      company: 'Shimmexgroup Co., Ltd, Phnom Penh',
      quote:
        'Chamnab demonstrates outstanding reliability, systematic problem-solving, and attention to detail. Whether managing complex technical systems or coordinating multi-stakeholder projects, he consistently delivers excellence.',
    },
    {
      name: 'Agricultural Machinery Partner',
      role: 'Commercial Machinery Distributor',
      company: 'Solis Brand Distribution Cambodia',
      quote:
        'The official website and targeted digital campaigns designed by Chamnab completely transformed our tractor sales in Cambodia. Inquiries from farmers and regional dealers surged rapidly.',
    },
  ];

  return (
    <section id="testimonials" className="py-24 theme-canvas border-b theme-border transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-xl mb-16 space-y-3">
          <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] theme-text-faint block">
            06 / Endorsements
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold theme-text-main tracking-tight">
            Executive References & Trust
          </h2>
        </div>

        {/* Dynamic Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {references.map((item, idx) => (
            <div
              key={idx}
              className="theme-card p-8 flex flex-col justify-between space-y-8 transition-all duration-300 hover:scale-[1.01]"
            >
              <p className="text-xs sm:text-sm theme-text-muted leading-relaxed italic font-light">
                &ldquo;{item.quote}&rdquo;
              </p>

              <div className="pt-4 border-t theme-border">
                <h4 className="text-sm font-bold theme-text-main font-mono">
                  {item.name}
                </h4>
                <p className="text-xs theme-text-muted font-medium mt-0.5">
                  {item.role}
                </p>
                <p className="text-xs theme-text-faint font-light">
                  {item.company}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
