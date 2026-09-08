'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, Sparkles, CheckCircle, ShieldCheck, Activity, Terminal } from 'lucide-react';
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
    { value: '10+', label: 'Years Experience', sub: 'Ad ops & growth' },
    { value: '3.8x', label: 'Average Client ROAS', sub: 'Paid acquisition' },
    { value: '$1M+', label: 'Ad Spend Managed', sub: 'Meta & Google Ads' },
    { value: '50+', label: 'Platforms Engineered', sub: 'Next.js & WordPress' },
  ];

  return (
    <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 overflow-hidden bg-[#08090C]">
      {/* Dynamic Background Ambient Light Blooms */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-cyan-500/15 via-indigo-600/10 to-transparent blur-[140px] -z-10 animate-ambient-pulse" />
      <div className="pointer-events-none absolute top-1/3 -right-48 w-96 h-96 bg-cyan-500/10 blur-[130px] -z-10" />

      {/* Subtle Matrix Grid Background */}
      <div
        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

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
            
            {/* Status & Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-cyan-500/25 bg-cyan-500/[0.06] backdrop-blur-md shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-cyan-300 font-medium tracking-wide">
                Available for Q3/Q4 Strategy & Performance Buying
              </span>
            </div>

            {/* High-Impact Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
                Data-Driven Marketing. <br />
                Built for Predictable <br />
                <span className="text-gradient-cyan font-extrabold">Revenue Growth.</span>
              </h1>

              <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-xl font-light">
                I am <strong className="text-white font-semibold">Chamnab Mey</strong>, a Senior Digital Marketer & Growth Engineer in Phnom Penh. I partner directly with ambitious companies to build high-converting sales funnels, manage scalable Meta & Google ad campaigns, and eliminate signal loss with server-side tracking.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 text-xs sm:text-sm font-bold text-black bg-gradient-to-r from-cyan-300 via-cyan-400 to-teal-300 hover:from-cyan-200 hover:to-teal-200 rounded-full shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all group"
              >
                <span>Schedule Growth Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#case-studies"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-medium text-neutral-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] hover:border-white/[0.2] rounded-full backdrop-blur-md transition-all"
              >
                <span>Selected Works & ROAS</span>
              </a>
            </div>

            {/* Direct Contact Metadata */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-neutral-400 font-mono">
              <a
                href="mailto:admin@chamnabmey.com"
                className="hover:text-cyan-400 transition-colors"
              >
                admin@chamnabmey.com
              </a>
              <span className="text-neutral-600">•</span>
              <a
                href="tel:+85515705703"
                className="hover:text-cyan-400 transition-colors"
              >
                +855 15 705 703
              </a>
              <span className="text-neutral-600">•</span>
              <a
                href="https://www.linkedin.com/in/chamnabmey"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
              >
                <LinkedInIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>

          </motion.div>

          {/* Right Portrait & Interactive Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[370px] relative">
              
              {/* Outer Ambient Glow Ring */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-cyan-500/30 via-indigo-500/20 to-teal-500/30 blur-xl opacity-75" />

              <SpotlightCard
                spotlightColor="rgba(56, 189, 248, 0.18)"
                className="relative p-3.5 border-white/[0.12] bg-[#0C0E14]/95 shadow-2xl"
              >
                {/* Portrait Image */}
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-neutral-900">
                  <img
                    src="/images/chamnab-mey.jpg"
                    alt="Chamnab Mey — Senior Digital Marketer & Growth Engineer"
                    className="w-full h-full object-cover object-top filter grayscale-[8%] hover:grayscale-0 hover:scale-[1.03] transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-transparent to-transparent opacity-60" />

                  {/* Floating Live Badge Top Left */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#08090C]/85 border border-white/[0.1] backdrop-blur-md shadow-lg flex items-center gap-2 text-[11px] font-mono text-cyan-300">
                    <Activity className="w-3 h-3 text-emerald-400" />
                    <span>CAPI Signal: 9.8 / 10</span>
                  </div>

                  {/* Floating Metric Badge Bottom Right */}
                  <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-[#08090C]/90 border border-cyan-500/30 backdrop-blur-md shadow-xl flex items-center gap-2 text-xs font-mono font-bold text-white">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span>Avg 3.8x ROAS</span>
                  </div>
                </div>

                {/* Card Bottom Meta Bar */}
                <div className="mt-3 px-2 py-2 flex items-center justify-between text-[11px] font-mono border-t border-white/[0.06] text-neutral-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="text-neutral-200">Phnom Penh, KH</span>
                  </div>
                  <span className="text-cyan-400 font-medium">
                    {currentTime ? `${currentTime} ICT` : 'GMT+7'}
                  </span>
                </div>
              </SpotlightCard>

            </div>
          </motion.div>

        </div>

        {/* Bento Stat Counters Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 pt-10 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {stats.map((s, i) => (
            <SpotlightCard
              key={i}
              spotlightColor="rgba(56, 189, 248, 0.1)"
              className="p-5 sm:p-6 bg-[#0B0D13]/80 border-white/[0.07]"
            >
              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight text-gradient-cyan">
                  {s.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-neutral-200">
                  {s.label}
                </div>
                <div className="text-[11px] text-neutral-400 font-light">
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
