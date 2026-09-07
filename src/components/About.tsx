'use client';

import React from 'react';
import { Check, Download, ArrowUpRight, Award, Sparkles, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#EBE5E3] border-y border-black/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading (Biogra style) */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#9175FF] block mb-3">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F0F0F] tracking-tight leading-[1.15]">
            Professional & Experienced Digital Marketer with 10+ Years of Experience <br className="hidden md:inline" />
            Trusted by Brands, Driven by Results
          </h2>
        </div>

        {/* Biogra 3-Column About Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Col 1: Counters (Biogra Left Block) */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-black/8 shadow-sm space-y-2">
              <p className="text-xs font-bold uppercase tracking-wider text-[#696969]">Projects Completed</p>
              <div className="text-4xl font-black text-[#0F0F0F]">50+</div>
              <p className="text-xs text-[#555555]">Websites, funnels & digital campaigns</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-black/8 shadow-sm space-y-2">
              <p className="text-xs font-bold uppercase tracking-wider text-[#696969]">Ad Spend Managed</p>
              <div className="text-4xl font-black text-[#9175FF]">$1M+</div>
              <p className="text-xs text-[#555555]">Across Meta & Google Ads</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-black/8 shadow-sm space-y-2">
              <p className="text-xs font-bold uppercase tracking-wider text-[#696969]">Average Client Return</p>
              <div className="text-4xl font-black text-[#0F0F0F]">3.8x</div>
              <p className="text-xs text-[#555555]">Sustainable customer acquisition ROAS</p>
            </div>
          </div>

          {/* Col 2: Visual Center Frame with Badge (Biogra Center Block) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[30px] overflow-hidden bg-white border border-black/10 shadow-xl">
              <div className="relative h-[440px] w-full bg-[#DCD5D3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                  alt="Chamnab Mey Digital Strategy Session"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Overlaid Award Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-black/10 shadow-lg flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#9175FF] text-white flex items-center justify-center shrink-0 shadow-md">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0F0F0F] leading-tight">
                      Growth Partner & Agency Leader
                    </h4>
                    <p className="text-[11px] text-[#696969] mt-0.5">
                      Ex-General Manager at KHB Media PLC
                    </p>
                  </div>
                </div>

                <div className="absolute top-4 right-4 bg-black/70 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">
                  Demo Visual
                </div>
              </div>
            </div>
          </div>

          {/* Col 3: Narrative & Checklist (Biogra Right Block) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-4">
              <p className="text-sm sm:text-base text-[#444444] leading-relaxed">
                I’m an experienced Digital Marketer and Web Consultant with a passion for helping businesses grow through smart, data-driven acquisition strategies.
              </p>
              <p className="text-sm sm:text-base text-[#444444] leading-relaxed">
                With an executive background leading cross-functional teams at <strong className="text-[#0F0F0F]">KHB Media PLC</strong>, managing platforms at <strong className="text-[#0F0F0F]">Riich Me</strong>, and scaling tractor sales for <strong className="text-[#0F0F0F]">Solis Cambodia</strong>, I combine creative media with server-side tracking to maximize return on ad spend.
              </p>
            </div>

            {/* Biogra Checklist */}
            <div className="space-y-2.5 pt-2 border-t border-black/10">
              <div className="flex items-center gap-3 text-sm font-semibold text-[#0F0F0F]">
                <div className="w-5 h-5 rounded-full bg-[#9175FF]/15 text-[#9175FF] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Full-Funnel Meta & Google Ads Architecture</span>
              </div>

              <div className="flex items-center gap-3 text-sm font-semibold text-[#0F0F0F]">
                <div className="w-5 h-5 rounded-full bg-[#9175FF]/15 text-[#9175FF] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>High-Converting Websites & Landing Pages</span>
              </div>

              <div className="flex items-center gap-3 text-sm font-semibold text-[#0F0F0F]">
                <div className="w-5 h-5 rounded-full bg-[#9175FF]/15 text-[#9175FF] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Server-Side Meta CAPI & GA4 Attribution</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href="/Resume-CHAMNAB-MEY.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-[#0F0F0F] hover:bg-[#232323] transition-all shadow-md"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F0F0F] hover:text-[#9175FF] transition-colors"
              >
                <span>Let’s Discuss Your Brand</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
