"use client";

import React from "react";

interface SkillItem {
  name: string;
  percentage: number;
}

const acquisitionSkills: SkillItem[] = [
  { name: "META ADS MANAGER (FACEBOOK & INSTAGRAM)", percentage: 98 },
  { name: "GOOGLE ADS (SEARCH, PMAX, YOUTUBE)", percentage: 94 },
  { name: "SERVER-SIDE META CAPI & OFFLINE CONVERSIONS", percentage: 96 },
  { name: "FULL-FUNNEL LANDING PAGE CRO & LEAD GEN", percentage: 92 },
];

const engineeringSkills: SkillItem[] = [
  { name: "NEXT.JS & REACT MODERN WEB ARCHITECTURE", percentage: 92 },
  { name: "WORDPRESS, WOOCOMMERCE & SHOPIFY SYSTEMS", percentage: 95 },
  { name: "GOOGLE ANALYTICS 4, GTM & ATTRIBUTION SCHEMAS", percentage: 94 },
  { name: "CLOUDFLARE EDGE, DNS & SECURITY INFRASTRUCTURE", percentage: 90 },
];

export default function SkillsProgress() {
  return (
    <section id="skills" className="py-24 sm:py-32 relative bg-[#06131B]/50 border-t-[1.8px] border-[#0C1F2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="subtitle theme-gradient font-heading text-xs uppercase tracking-widest font-bold block mb-3">
            Technical Proficiency
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Core Skill <span className="text-gradient-invers">Benchmarks</span>
          </h2>
          <p className="font-body text-[#BEBEBE] text-base mt-4">
            A balanced mastery of revenue-driving paid acquisition and robust software engineering.
          </p>
        </div>

        {/* 2-Column Progress Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Column 1: Paid Acquisition */}
          <div className="card-invers p-8 sm:p-10 relative overflow-hidden">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-8 pb-4 border-b border-[#0C1F2E]">
              Paid Acquisition &amp; Media Buying
            </h3>
            <div className="space-y-6">
              {acquisitionSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-heading text-xs font-semibold tracking-wider text-white">
                      {skill.name}
                    </span>
                    <span className="font-heading text-xs font-bold text-[#139BFD]">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-[#141414] border border-[#0C1F2E] overflow-hidden p-0.5">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#13FDFD] to-[#139BFD] transition-all duration-1000 ease-out"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Engineering & Tech */}
          <div className="card-invers p-8 sm:p-10 relative overflow-hidden">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-8 pb-4 border-b border-[#0C1F2E]">
              Engineering &amp; Web Infrastructure
            </h3>
            <div className="space-y-6">
              {engineeringSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-heading text-xs font-semibold tracking-wider text-white">
                      {skill.name}
                    </span>
                    <span className="font-heading text-xs font-bold text-[#42AFFD]">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-[#141414] border border-[#0C1F2E] overflow-hidden p-0.5">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#42AFFD] to-[#139BFD] transition-all duration-1000 ease-out"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
