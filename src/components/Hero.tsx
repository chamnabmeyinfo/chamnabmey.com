"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Send, CheckCircle2, TrendingUp, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import VirtuoButton from "./VirtuoButton";

const rotatingRoles = [
  "Growth Strategist",
  "Performance Media Buyer",
  "Meta CAPI Engineer",
  "Full-Funnel Architect",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % rotatingRoles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Virtuo Top Ambient Light Shape */}
      <div className="absolute top-0 right-0 left-0 h-96 pointer-events-none opacity-40 z-0 flex justify-center">
        <div className="relative w-full max-w-5xl h-full">
          <Image
            src="/assets/images/banner/shape/light.svg"
            alt="Top Light Shape"
            fill
            className="object-contain object-top"
            priority
          />
        </div>
      </div>

      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#139BFD]/15 via-[#13FDFD]/10 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Bio */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Greeting badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border-[1.8px] border-[#0C1F2E] bg-[#06131B]/90 text-xs font-heading font-semibold text-[#42AFFD] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#139BFD] animate-ping" />
              <span>Available for Selective Client Partnerships</span>
            </div>

            {/* Main Headline with Typewriter Rotating Role */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[62px] font-extrabold text-white leading-[1.12] tracking-tight">
              Chamnab Mey, a Solo Digital Marketer &amp;{" "}
              <br className="hidden sm:inline" />
              <span className="relative inline-block mt-1 sm:mt-2 h-[1.25em] overflow-hidden align-top text-gradient-invers">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={rotatingRoles[roleIndex]}
                    initial={{ y: 35, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -35, opacity: 0 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="inline-block"
                  >
                    {rotatingRoles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>

            {/* Subtext Paragraph */}
            <p className="font-body text-[#BEBEBE] text-base sm:text-lg mt-6 max-w-2xl leading-relaxed">
              A data-driven personal powerhouse bridging{" "}
              <span className="text-white font-medium">software engineering precision</span>,{" "}
              <span className="text-[#42AFFD] font-medium">Meta &amp; Google media buying</span>, and{" "}
              <span className="text-white font-medium">server-side CAPI tracking</span>. Helping ambitious brands scale profitably since 2014.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <VirtuoButton
                href="#contact"
                text="Schedule Free Audit"
                variant="primary"
                className="!py-3.5 !px-8 text-sm"
              />
              <VirtuoButton
                href="/Resume-CHAMNAB-MEY.pdf"
                text="Download Full CV"
                iconType="download"
                download="Resume-CHAMNAB-MEY.pdf"
                className="!py-3.5 !px-7 text-sm"
              />
            </div>

            {/* "Find me on" Social Links */}
            <div className="mt-10 pt-6 border-t border-[#0C1F2E]/80 flex items-center gap-4">
              <span className="font-heading text-xs uppercase tracking-widest text-[#BEBEBE]">
                Find Me On
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://t.me/chamnabmey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-[#0C1F2E] bg-[#06131B] flex items-center justify-center text-[#BEBEBE] hover:text-[#139BFD] hover:border-[#139BFD] transition-all"
                  title="Telegram"
                >
                  <Send className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/chamnab-mey/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-[#0C1F2E] bg-[#06131B] flex items-center justify-center text-[#BEBEBE] hover:text-[#139BFD] hover:border-[#139BFD] transition-all font-heading font-bold text-xs"
                  title="LinkedIn"
                >
                  in
                </a>
                <a
                  href="https://facebook.com/chamnabmey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-[#0C1F2E] bg-[#06131B] flex items-center justify-center text-[#BEBEBE] hover:text-[#139BFD] hover:border-[#139BFD] transition-all font-heading font-bold text-xs"
                  title="Facebook"
                >
                  fb
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Portrait Card with Kinetic Drifting Labels */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-[420px] aspect-[4/5] flex items-center justify-center">
              
              {/* Kinetic Floating Typography: Up-Down Motion */}
              <div className="absolute -top-6 -left-6 z-0 pointer-events-none up-down select-none opacity-20">
                <span className="font-heading font-black text-5xl text-transparent [-webkit-text-stroke:1.5px_#139BFD]">
                  GROWTH
                </span>
              </div>
              <div className="absolute -bottom-8 -right-6 z-0 pointer-events-none up-down-2 select-none opacity-20">
                <span className="font-heading font-black text-5xl text-transparent [-webkit-text-stroke:1.5px_#42AFFD]">
                  MARKETER
                </span>
              </div>

              {/* Ambient radial glow behind portrait */}
              <div className="absolute inset-4 bg-gradient-to-b from-[#139BFD]/25 via-transparent to-transparent rounded-[28px] blur-2xl" />

              {/* Decorative Under-image Logo Badges from Virtuo */}
              <div className="absolute -bottom-3 -left-3 z-20 pointer-events-none opacity-90">
                <div className="w-14 h-14 relative">
                  <Image
                    src="/assets/images/banner/logo-under-image.png"
                    alt="Virtuo decoration"
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Main Portrait Frame (Virtuo 20px radius + 1.8px #0C1F2E border) */}
              <div className="relative w-full h-full rounded-[24px] overflow-hidden border-[1.8px] border-[#0C1F2E] bg-[#06131B] shadow-2xl group">
                <Image
                  src="/images/chamnab-mey.jpg"
                  alt="Chamnab Mey"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  priority
                />

                {/* Gradient vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06131B] via-transparent to-transparent opacity-80" />

                {/* Floating Live KPI Badge 1: Top Right */}
                <div className="absolute top-4 right-4 z-20 bg-[#06131B]/90 backdrop-blur-md border-[1.8px] border-[#0C1F2E] rounded-[10px] px-3.5 py-2 flex items-center gap-2.5 shadow-xl">
                  <div className="w-7 h-7 rounded-lg bg-[#139BFD]/20 text-[#139BFD] flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-[#BEBEBE] tracking-wider block font-heading">
                      Meta CAPI Signal
                    </span>
                    <span className="text-xs font-bold text-white font-heading">
                      9.8 / 10 Score
                    </span>
                  </div>
                </div>

                {/* Floating Live KPI Badge 2: Bottom Overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-20 bg-[#06131B]/95 backdrop-blur-md border-[1.8px] border-[#0C1F2E] rounded-[14px] p-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#13FDFD] to-[#139BFD] text-black flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 font-bold" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-base font-extrabold text-white font-heading">
                          3.8x
                        </span>
                        <span className="text-xs font-semibold text-[#42AFFD] font-heading">
                          Average ROAS
                        </span>
                      </div>
                      <span className="text-[11px] text-[#BEBEBE] block">
                        Verified commercial client performance
                      </span>
                    </div>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-[#13FDFD] animate-ping" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
