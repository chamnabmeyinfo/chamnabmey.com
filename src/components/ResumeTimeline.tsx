"use client";

import React from "react";
import { Award, GraduationCap } from "lucide-react";

interface TimelineItem {
  period: string;
  title: string;
  organization: string;
  description: string;
}

const experiences: TimelineItem[] = [
  {
    period: "2021 — PRESENT",
    title: "General Manager & Strategic Growth Lead",
    organization: "KHB Media PLC (Cambodia)",
    description: "Directing 5 agency divisions, leading commercial digital strategy, enterprise client acquisition, and cross-channel paid campaigns producing 3.8x average ROAS.",
  },
  {
    period: "2019 — 2021",
    title: "Head of Digital Strategy & Platform Ops",
    organization: "Solis Cambodia & Commercial Machinery",
    description: "Scaled high-ticket agricultural tractor sales +140% through localized Meta video funnels, SMS automation, and direct field-agent lead routing.",
  },
  {
    period: "2017 — 2019",
    title: "Growth Marketer & Digital Systems Engineer",
    organization: "Riich Me & EPOS-GODIGITAL",
    description: "Engineered fintech & retail app acquisition campaigns generating over 185% surge in monthly app downloads and merchant onboardings.",
  },
  {
    period: "2014 — 2017",
    title: "Web Systems & Performance Media Specialist",
    organization: "Agency & Enterprise Client Projects",
    description: "Architected custom WordPress & Next.js web applications, integrated server-side tracking, and optimized conversion rate funnels.",
  },
];

const education: TimelineItem[] = [
  {
    period: "2010 — 2014",
    title: "Bachelor of Science in Software Engineering",
    organization: "Setec Institute (Phnom Penh)",
    description: "Rigorous technical foundation in software architecture, database design, algorithms, and network infrastructure.",
  },
  {
    period: "CERTIFIED",
    title: "Meta Certified Media Buying Professional",
    organization: "Meta Blueprint",
    description: "Advanced competency in auction dynamics, audience modeling, Meta Conversion API (CAPI), and machine learning ad delivery.",
  },
  {
    period: "CERTIFIED",
    title: "Google Ads & Google Analytics 4 (GA4)",
    organization: "Google Skillshop",
    description: "Enterprise measurement protocol, multi-touch attribution, BigQuery export schemas, and Search/PMax optimization.",
  },
  {
    period: "CERTIFIED",
    title: "Server-Side Tagging & Cloudflare Security",
    organization: "Web Infrastructure Certification",
    description: "First-party data tracking, edge worker deployments, DNS management, and Core Web Vitals optimization.",
  },
];

export default function ResumeTimeline() {
  return (
    <section id="experience" className="py-24 sm:py-32 relative bg-[#141414] border-t-[1.8px] border-[#0C1F2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="subtitle theme-gradient font-heading text-xs uppercase tracking-widest font-bold block mb-3">
            Track Record &amp; Foundations
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            My Experience &amp; <span className="text-gradient-invers">Education</span>
          </h2>
          <p className="font-body text-[#BEBEBE] text-base mt-4">
            Over a decade of hands-on technical architecture and commercial agency leadership in high-stakes environments.
          </p>
        </div>

        {/* 2-Column Virtuo Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14">
          
          {/* Column 1: Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-[#0C1F2E]">
              <div className="w-10 h-10 rounded-xl bg-[#139BFD]/10 text-[#139BFD] flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-white">
                My Experience
              </h3>
            </div>

            <div className="space-y-6">
              {experiences.map((item, idx) => (
                <div
                  key={idx}
                  className="card-invers p-6 sm:p-7 relative overflow-hidden group hover:border-[#139BFD] transition-all duration-300"
                >
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#139BFD] animate-pulse" />
                    <span className="font-heading text-xs font-semibold text-[#42AFFD] tracking-wider">
                      {item.period}
                    </span>
                  </div>
                  <h4 className="font-heading text-lg sm:text-xl font-bold text-white group-hover:text-[#139BFD] transition-colors">
                    {item.title}
                  </h4>
                  <p className="font-heading text-sm text-white/90 font-medium mt-1">
                    {item.organization}
                  </p>
                  <p className="font-body text-xs sm:text-sm text-[#BEBEBE] mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Education */}
          <div>
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-[#0C1F2E]">
              <div className="w-10 h-10 rounded-xl bg-[#42AFFD]/10 text-[#42AFFD] flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-white">
                My Education &amp; Certifications
              </h3>
            </div>

            <div className="space-y-6">
              {education.map((item, idx) => (
                <div
                  key={idx}
                  className="card-invers p-6 sm:p-7 relative overflow-hidden group hover:border-[#139BFD] transition-all duration-300"
                >
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#42AFFD] animate-pulse" />
                    <span className="font-heading text-xs font-semibold text-[#42AFFD] tracking-wider">
                      {item.period}
                    </span>
                  </div>
                  <h4 className="font-heading text-lg sm:text-xl font-bold text-white group-hover:text-[#139BFD] transition-colors">
                    {item.title}
                  </h4>
                  <p className="font-heading text-sm text-white/90 font-medium mt-1">
                    {item.organization}
                  </p>
                  <p className="font-body text-xs sm:text-sm text-[#BEBEBE] mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
