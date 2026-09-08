"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Award, Layers, Target } from "lucide-react";
import VirtuoButton from "./VirtuoButton";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#139BFD]/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: 2 Virtuo Spotlight Metrics Cards */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* 10+ Years of Experience Card */}
            <div className="card-invers p-8 sm:p-10 relative overflow-hidden group hover:border-[#139BFD] transition-all duration-300">
              <div className="tmp-light light-top-left" />
              <div className="relative z-10">
                <div className="flex items-baseline gap-2">
                  <span className="font-heading text-6xl sm:text-7xl font-extrabold text-white tracking-tight">
                    10
                  </span>
                  <span className="text-gradient-invers text-5xl sm:text-6xl font-black">
                    +
                  </span>
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mt-3">
                  Years of Commercial Experience
                </h3>
                <p className="font-body text-[#BEBEBE] text-sm sm:text-base mt-2 leading-relaxed">
                  Leading full-funnel digital growth, managing cross-functional agency teams, and engineering paid advertising platforms across Cambodia &amp; Southeast Asia.
                </p>
              </div>
            </div>

            {/* Specialty Card with Icon */}
            <div className="card-invers p-8 sm:p-10 relative overflow-hidden group hover:border-[#139BFD] transition-all duration-300">
              <div className="tmp-light light-top-left" />
              <div className="relative z-10 flex items-start gap-6">
                <div className="w-16 h-16 rounded-[14px] bg-[#0A1A26] border-[1.8px] border-[#0C1F2E] flex items-center justify-center text-[#139BFD] shrink-0 group-hover:border-[#139BFD] group-hover:bg-[#139BFD]/10 transition-colors">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                      $1M+ Ad Spend Managed
                    </h3>
                  </div>
                  <p className="font-heading text-sm text-[#42AFFD] font-semibold mt-1">
                    50+ Platforms &amp; Funnels Engineered
                  </p>
                  <p className="font-body text-[#BEBEBE] text-sm mt-2 leading-relaxed">
                    Zero guesswork. Every dollar allocated is backed by server-side Meta CAPI attribution, high-intent creative testing, and ruthless ROI optimization.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: About Details + 2 Small Cards + CTA */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="subtitle theme-gradient font-heading text-xs uppercase tracking-widest font-bold mb-3">
              About Me
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Boost Business Strategic <br />
              <span className="text-gradient-invers">Solutions with Us</span>
            </h2>
            <p className="font-body text-[#BEBEBE] text-base mt-5 leading-relaxed">
              I am a rare hybrid in Southeast Asia: an IT Software Engineering graduate from <strong className="text-white">Setec Institute</strong> who spent over a decade running commercial agency operations as <strong className="text-white">General Manager at KHB Media PLC</strong> (directing 5 divisions).
            </p>
            <p className="font-body text-[#BEBEBE] text-base mt-3 leading-relaxed">
              When you work with me, you skip the agency account-manager telephone game. You work directly with a senior strategist who understands tracking servers, media algorithms, and commercial P&amp;L.
            </p>

            {/* 2 Feature Cards Side-by-Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-8">
              <div className="card-invers p-5 relative overflow-hidden group hover:border-[#139BFD] transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-[#0A1A26] border border-[#0C1F2E] flex items-center justify-center text-[#139BFD]">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading text-base font-bold text-white">
                    Data Architecture
                  </h4>
                </div>
                <p className="font-body text-xs text-[#BEBEBE] leading-relaxed">
                  First-party server tracking, clean event schemas, and deep funnel analytics.
                </p>
              </div>

              <div className="card-invers p-5 relative overflow-hidden group hover:border-[#139BFD] transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-[#0A1A26] border border-[#0C1F2E] flex items-center justify-center text-[#42AFFD]">
                    <Target className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading text-base font-bold text-white">
                    Commercial ROI
                  </h4>
                </div>
                <p className="font-body text-xs text-[#BEBEBE] leading-relaxed">
                  Aggressive customer acquisition focused strictly on net revenue and margins.
                </p>
              </div>
            </div>

            {/* Read More Button */}
            <div className="mt-8">
              <VirtuoButton
                href="/Resume-CHAMNAB-MEY.pdf"
                text="Read More About Me (Full CV)"
                iconType="download"
                download="Resume-CHAMNAB-MEY.pdf"
                variant="primary"
                className="!py-3.5 !px-8 text-sm"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
