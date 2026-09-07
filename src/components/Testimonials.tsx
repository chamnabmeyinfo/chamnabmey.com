'use client';

import React from 'react';
import { Quote, Star, UserCheck, ShieldCheck, Mail, Phone } from 'lucide-react';

export default function Testimonials() {
  const references = [
    {
      name: 'Mr. TIM VUTHA',
      role: 'Chief Executive Officer (CEO)',
      company: 'KHB MEDIA PLC, Phnom Penh',
      contact: 'vutha.tim@khbmedia.asia',
      phone: '+855 60 815 515',
      type: 'Executive Reference',
      quote:
        'Chamnab served as our General Manager, orchestrating all company operations across digital marketing, web development, video production, and technical infrastructure. His rare ability to lead creative departments while maintaining strict technical execution and high ad ROI was pivotal to our organization.',
    },
    {
      name: 'Mr. Ly SOK',
      role: 'Purchasing & Operations Manager',
      company: 'Shimmexgroup Co., Ltd, Phnom Penh',
      contact: 'Verified Corporate Reference',
      phone: '+855 16 20 20 08',
      type: 'Professional Reference',
      quote:
        'Chamnab demonstrates outstanding reliability, systematic problem-solving, and attention to detail. Whether managing complex systems or coordinating multi-stakeholder projects, he consistently delivers excellence and upholds the highest professional standards.',
    },
    {
      name: 'Agricultural Equipment Client',
      role: 'Commercial Machinery Partner',
      company: 'Solis Brand Distribution Cambodia',
      contact: 'Verified Case Client',
      type: 'Client Endorsement',
      quote:
        'The official website and targeted digital campaigns designed by Chamnab completely transformed our tractor sales in Cambodia. Inquiries from farmers and regional dealers surged, establishing our brand presence rapidly across the provinces.',
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-900/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Trust & Credibility
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
            Executive Endorsements & References
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Backed by company executives, managing directors, and commercial partners who have worked with Chamnab Mey directly.
          </p>
        </div>

        {/* References Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {references.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-950 rounded-3xl p-7 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between shadow-xl relative"
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Quote className="w-5 h-5" />
                  </div>
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-slate-300 text-sm leading-relaxed italic mb-8">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 border-t border-slate-800/80">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="text-base font-bold text-white">{item.name}</h4>
                    <p className="text-xs font-medium text-emerald-400">{item.role}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{item.company}</p>
                  </div>
                  <span className="shrink-0 text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-slate-900 border border-slate-700 text-slate-400">
                    {item.type}
                  </span>
                </div>

                {/* Direct Contact verification info */}
                {item.contact && (
                  <div className="mt-3 pt-3 border-t border-slate-900 flex items-center gap-2 text-xs text-slate-500">
                    <UserCheck className="w-3.5 h-3.5 text-emerald-500/70" />
                    <span className="truncate">{item.contact}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-slate-300 text-sm shadow-md">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span>
              All corporate references and employment records are documented and verifiable upon request.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
