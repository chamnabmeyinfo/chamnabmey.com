'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, Activity, Clock } from 'lucide-react';
import LinkedInIcon from './icons/LinkedInIcon';
import SpotlightCard from './SpotlightCard';

export default function Hero() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Phnom_Penh',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { value: '10+', label: 'Years Experience', sub: 'Ad ops & growth systems' },
    { value: '3.8x', label: 'Average Client ROAS', sub: 'Performance paid acquisition' },
    { value: '$1M+', label: 'Ad Spend Managed', sub: 'Meta & Google ad networks' },
    { value: '50+', label: 'Platforms Delivered', sub: 'High-speed web & funnels' },
  ];

  return (
    <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 overflow-hidden bg-[#141414]">
      {/* Subtle Inversweb Electric Ambient Bloom */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-gradient-to-b from-[#139BFD]/12 via-[#42AFFD]/6 to-transparent blur-[140px] -z-10" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Main Grid: Headline & Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8"
          >
            
            {/* Status Chip: 10px radius, 1.8px border #0C1F2E */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-[10px] border-[1.8px] border-[#0C1F2E] bg-[#06131B] shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#139BFD] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#42AFFD]"></span>
              </span>
              <span className="text-xs font-medium text-[#42AFFD] tracking-wide">
                Available for Q3/Q4 Strategy & Performance Buying
              </span>
            </div>

            {/* Inversweb Scale H1: Montserrat 700 / line-height 1.25 */}
            <div className="space-y-4">
              <h1 className="font-heading text-4xl sm:text-6xl lg:text-[70px] text-white leading-[1.12]">
                Data-Driven Marketing. <br />
                Built for Predictable <br />
                <span className="text-gradient-invers">Revenue Growth.</span>
              </h1>

              {/* Body: Poppins 400 / line-height 1.75 / #BEBEBE */}
              <p className="font-body text-base sm:text-lg text-[#BEBEBE] leading-[1.75] max-w-xl">
                I am <strong className="text-white font-semibold">Chamnab Mey</strong>, a Senior Digital Marketer & Growth Engineer in Phnom Penh. I partner directly with ambitious companies to build high-converting sales funnels, manage scalable Meta & Google ad campaigns, and eliminate signal loss with server-side tracking.
              </p>
            </div>

            {/* Inversweb Action Buttons: 6px radius, 500 weight */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                className="btn-primary-invers px-7 py-3.5 text-xs sm:text-sm gap-2 group"
              >
                <span>Schedule Growth Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#case-studies"
                className="btn-secondary-invers px-6 py-3.5 text-xs sm:text-sm gap-2"
              >
                <span>Selected Works & ROAS</span>
              </a>
            </div>

            {/* Direct Contact Metadata */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[#BEBEBE]">
              <a
                href="mailto:admin@chamnabmey.com"
                className="hover:text-[#139BFD] transition-colors"
              >
                admin@chamnabmey.com
              </a>
              <span className="text-[#0C1F2E]">•</span>
              <a
                href="tel:+85515705703"
                className="hover:text-[#139BFD] transition-colors"
              >
                +855 15 705 703
              </a>
              <span className="text-[#0C1F2E]">•</span>
              <a
                href="https://www.linkedin.com/in/chamnabmey"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#139BFD] transition-colors flex items-center gap-1.5"
              >
                <LinkedInIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>

          </motion.div>

          {/* Right Portrait Column with Inversweb Card Spec: 20px radius, 1.8px border #0C1F2E */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[370px] relative">
              
              <SpotlightCard className="p-3.5">
                {/* Portrait Image */}
                <div className="relative overflow-hidden rounded-[16px] aspect-[4/5] bg-[#0C1F2E]">
                  <img
                    src="/images/chamnab-mey.jpg"
                    alt="Chamnab Mey — Senior Digital Marketer & Growth Engineer"
                    className="w-full h-full object-cover object-top filter grayscale-[5%] hover:grayscale-0 hover:scale-[1.03] transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06131B] via-transparent to-transparent opacity-60" />

                  {/* Floating Chips: 10px radius, 1.8px border #0C1F2E */}
                  <div className="absolute top-3 left-3 px-3 py-1.5 rounded-[10px] bg-[#06131B]/90 border-[1.8px] border-[#0C1F2E] flex items-center gap-2 text-[11px] text-[#42AFFD] font-medium">
                    <Activity className="w-3 h-3 text-[#139BFD]" />
                    <span>CAPI Signal: 9.8 / 10</span>
                  </div>

                  <div className="absolute bottom-3 right-3 px-3.5 py-2 rounded-[10px] bg-[#06131B]/95 border-[1.8px] border-[#139BFD]/60 flex items-center gap-2 text-xs font-heading font-bold text-white shadow-md">
                    <span className="w-2 h-2 rounded-full bg-[#139BFD] animate-pulse" />
                    <span>Avg 3.8x ROAS</span>
                  </div>
                </div>

                {/* Card Meta Bar */}
                <div className="mt-3 px-2 py-2 flex items-center justify-between text-[11px] border-t border-[#0C1F2E] text-[#BEBEBE]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#139BFD]" />
                    <span className="text-white">Phnom Penh, KH</span>
                  </div>
                  <span className="text-[#42AFFD] font-medium flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{currentTime ? `${currentTime} ICT` : 'GMT+7'}</span>
                  </span>
                </div>
              </SpotlightCard>

            </div>
          </motion.div>

        </div>

        {/* Bento Stat Counters: 20px radius cards, #06131B, 1.8px #0C1F2E */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 pt-10 border-t border-[#0C1F2E] grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {stats.map((s, i) => (
            <SpotlightCard key={i} className="p-5 sm:p-6">
              <div className="space-y-1.5">
                <div className="font-heading text-3xl sm:text-4xl font-bold text-[#139BFD] tracking-tight">
                  {s.value}
                </div>
                <div className="font-heading text-sm font-bold text-white">
                  {s.label}
                </div>
                <div className="font-body text-xs text-[#BEBEBE] leading-[1.6]">
                  {s.sub}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
