'use client';

import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Award, 
  Sparkles, 
  ExternalLink,
  Mail, 
  Phone,
  BarChart3,
  Layers
} from 'lucide-react';
import LinkedInIcon from './icons/LinkedInIcon';

export default function Hero() {
  const [heroImage, setHeroImage] = useState('/images/chamnab-mey.jpg');

  const stats = [
    { label: 'Years Experience', value: '10+', sub: 'Digital & Growth' },
    { label: 'Proven Client ROI', value: '3.8x', sub: 'Average Ad Return' },
    { label: 'Projects Completed', value: '50+', sub: 'Funnels & Websites' },
    { label: 'Ad Spend Managed', value: '$1M+', sub: 'Meta & Google Ads' },
  ];

  const brandTicker = [
    'Solis Cambodia',
    'KHB Media PLC',
    'Riich Me',
    'EPOS-GODIGITAL',
    'KMall Events',
  ];

  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-[#F2EEED] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Biogra Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Author Intro Pill (Exact Biogra index-4 style) */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-black/8 shadow-sm">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-black/10 shrink-0">
                <img
                  src="/images/chamnab-mey.jpg"
                  alt="Chamnab Mey"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <p className="text-xs sm:text-sm font-semibold text-[#0F0F0F]">
                Hello, I’m <strong className="text-[#9175FF]">Chamnab Mey</strong>, a Senior Digital Marketer
              </p>
            </div>

            {/* Huge Display Headline (Biogra signature font sizing) */}
            <div className="space-y-1">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-extrabold tracking-tight text-[#0F0F0F] leading-[1.08]">
                Digital Marketer <br />
                <span className="text-[#0F0F0F]">Helping Grow</span> <br />
                <span className="text-[#9175FF]">Your Brands.</span>
              </h1>
            </div>

            {/* Biogra Thumb Content Split Row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-2">
              <div className="w-16 h-16 rounded-2xl bg-white border border-black/10 flex items-center justify-center text-[#9175FF] shrink-0 shadow-sm">
                <BarChart3 className="w-8 h-8" />
              </div>
              <div className="space-y-4">
                <p className="text-sm sm:text-base text-[#555555] leading-relaxed max-w-lg">
                  As an experienced Digital Growth Specialist, I specialize in developing and executing strategic Meta & Google advertising funnels, conversion architecture, and scalable e-commerce systems.
                </p>
                
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="#case-studies"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-[#0F0F0F] border-2 border-[#0F0F0F] hover:bg-[#0F0F0F] hover:text-white transition-all"
                  >
                    <span>Explore Works</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-[#9175FF] hover:bg-[#7A5AF8] shadow-md shadow-[#9175FF]/30 transition-all"
                  >
                    <span>Book Strategy Call</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Contact & Socials Bar */}
            <div className="pt-6 border-t border-black/10 flex flex-wrap items-center gap-6 text-xs text-[#555555]">
              <a
                href="mailto:admin@chamnabmey.com"
                className="flex items-center gap-1.5 hover:text-[#9175FF] transition-colors font-medium"
              >
                <Mail className="w-3.5 h-3.5 text-[#9175FF]" />
                <span>admin@chamnabmey.com</span>
              </a>
              <a
                href="tel:+85515705703"
                className="flex items-center gap-1.5 hover:text-[#9175FF] transition-colors font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-[#9175FF]" />
                <span>+855 15 705 703</span>
              </a>
              <a
                href="https://www.linkedin.com/in/chamnabmey"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#9175FF] transition-colors font-medium"
              >
                <LinkedInIcon className="w-3.5 h-3.5 text-[#9175FF]" />
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>

          </div>

          {/* Right Hero Image (Exact Biogra hero-right-thumb styling with rounded-30px) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Image Frame with 30px rounded corners and subtle shadow */}
              <div className="relative rounded-[32px] overflow-hidden bg-white border border-black/10 shadow-2xl shadow-black/10">
                <div className="relative h-[480px] w-full overflow-hidden bg-[#E8E3E2]">
                  <img
                    src={heroImage}
                    alt="CHAMNAB MEY - Senior Digital Marketer"
                    className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-500"
                    onError={() => {
                      setHeroImage('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80');
                    }}
                  />

                  {/* Top Floating Badge */}
                  <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-2 border border-black/5 shadow-md flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#9175FF] animate-pulse" />
                    <span className="text-xs font-bold text-[#0F0F0F]">Meta & Google Certified</span>
                  </div>

                  {/* Verified Indicator Badge */}
                  <div className="absolute top-5 right-5 bg-white/95 backdrop-blur-md rounded-2xl px-3 py-1.5 border border-black/5 shadow-md flex items-center gap-1.5 text-xs font-bold text-[#0F0F0F]">
                    <Sparkles className="w-3.5 h-3.5 text-[#9175FF]" />
                    <span>Official Profile</span>
                  </div>

                  {/* Bottom Floating Stats Card */}
                  <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-black/5 shadow-lg flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#696969] block">
                        Proven Track Record
                      </span>
                      <span className="text-base font-extrabold text-[#0F0F0F]">
                        $1M+ Ad Spend Managed
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold text-[#9175FF] block">
                        3.8x Avg ROAS
                      </span>
                      <span className="text-[10px] text-[#696969]">Across Clients</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Counter Stats Section (Biogra Style) */}
        <div className="mt-16 pt-10 border-t border-black/10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-5 border border-black/6 shadow-xs text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0F0F0F]">
                {s.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#0F0F0F] mt-1">
                {s.label}
              </div>
              <div className="text-[11px] text-[#696969] mt-0.5">
                {s.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Brand Track Record Ticker */}
        <div className="mt-12 pt-8 border-t border-black/10 text-center">
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#777777] mb-5">
            Brands & Platforms Scaled by Chamnab Mey
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            {brandTicker.map((name, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full bg-white border border-black/8 text-xs font-bold text-[#222222] shadow-xs"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
