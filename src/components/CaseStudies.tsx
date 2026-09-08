"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ExternalLink, X, TrendingUp, CheckCircle, ShieldCheck } from "lucide-react";
import VirtuoButton from "./VirtuoButton";

interface CaseStudy {
  id: string;
  category: "Performance Ads" | "Web Architecture" | "E-Commerce & B2B" | "Attribution / CAPI";
  title: string;
  client: string;
  tags: string[];
  image: string;
  metrics: { label: string; value: string };
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: "solis",
    category: "Performance Ads",
    title: "High-Ticket Commercial Machinery Lead Engine",
    client: "Solis Cambodia (Agricultural Machinery)",
    tags: ["Meta Ads", "Lead Generation", "+140% Sales Inquiries"],
    image: "/assets/images/latest-portfolio/portfoli-img-1.jpg",
    metrics: { label: "Sales Inquiries", value: "+140%" },
    summary: "Transformed an offline tractor dealership into Cambodia's leading digital agribusiness generator through high-intent localized video funnels.",
    challenge: "High cost-per-lead and tire-kicking inquiries through generic Facebook post boosting.",
    solution: "Structured localized video creatives filmed in provincial agricultural fields, connected directly to Telegram lead routing and dedicated qualification filters.",
    results: [
      "+140% surge in qualified dealer visits and purchase contracts",
      "-42% drop in blended cost per qualified sales lead",
      "Over 350,000 targeted agricultural decision-makers reached",
    ],
  },
  {
    id: "khb-media",
    category: "Attribution / CAPI",
    title: "Enterprise Agency Operations & Performance Media",
    client: "KHB Media PLC (5 Commercial Divisions)",
    tags: ["Meta CAPI", "Media Buying", "3.8x Avg ROAS"],
    image: "/assets/images/latest-portfolio/portfoli-img-4.jpg",
    metrics: { label: "Average Client ROAS", value: "3.8x" },
    summary: "Led agency operations directing 5 divisions, standardizing server-side attribution schemas and cross-channel campaign scaling.",
    challenge: "Client conversion signals degraded following iOS 14.5, causing poor audience optimization and wasted ad spend.",
    solution: "Deployed custom Cloudflare server-side Meta Conversion API (CAPI) gateways with deduplicated GA4 event streams across all commercial accounts.",
    results: [
      "Event match quality scores rose to 9.8/10",
      "Average return on ad spend stabilized at 3.8x across client roster",
      "Scalable repeatable playbook adopted across 5 division heads",
    ],
  },
  {
    id: "riich-me",
    category: "E-Commerce & B2B",
    title: "App Acquisition & Merchant Ecosystem Growth",
    client: "Riich Me & EPOS-GODIGITAL",
    tags: ["App Growth", "E-Commerce", "+185% Online Traffic"],
    image: "/assets/images/latest-portfolio/portfoli-img-3.jpg",
    metrics: { label: "Traffic Growth", value: "+185%" },
    summary: "Orchestrated full-funnel digital onboarding campaigns for a fintech merchant application across Cambodia.",
    challenge: "High user acquisition costs and weak user retention post-download.",
    solution: "Constructed merchant case-study video angles highlighting operational time savings, combined with automated SMS & Telegram onboarding sequences.",
    results: [
      "+185% increase in verified merchant registrations",
      "Over 100,000 monthly active app interactions reached",
      "Established top-of-mind brand dominance in Phnom Penh & Siem Reap",
    ],
  },
  {
    id: "web-arch",
    category: "Web Architecture",
    title: "Sub-Second Conversion Architecture & Landing Engine",
    client: "Commercial E-Commerce & Service Clients",
    tags: ["Next.js 15", "Cloudflare", "99/100 Core Vitals"],
    image: "/assets/images/latest-portfolio/portfoli-img-2.jpg",
    metrics: { label: "Speed & Performance", value: "99/100" },
    summary: "Custom full-stack web platforms engineered for zero layout shift, instantaneous load times, and frictionless mobile conversions.",
    challenge: "Slow 6+ second WordPress templates losing over 45% of incoming paid mobile ad traffic before the page even loaded.",
    solution: "Re-engineered frontend using Next.js Turbopack, static edge caching on Cloudflare CDN, and direct serverless inquiry dispatch.",
    results: [
      "Page load dropped from 6.2s to 0.45s globally",
      "+34% immediate lift in conversion rate on identical paid ad traffic",
      "100% immune to high-traffic ad spikes",
    ],
  },
];

const categories = ["All", "Performance Ads", "Attribution / CAPI", "E-Commerce & B2B", "Web Architecture"] as const;

export default function CaseStudies() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const filteredCases = activeCategory === "All"
    ? caseStudies
    : caseStudies.filter((c) => c.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 sm:py-32 relative bg-[#141414] border-t-[1.8px] border-[#0C1F2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="subtitle theme-gradient font-heading text-xs uppercase tracking-widest font-bold block mb-3">
            Latest Portfolio
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Transforming Ad Spend into <br />
            <span className="text-gradient-invers">Exceptional Revenue</span>
          </h2>
          <p className="font-body text-[#BEBEBE] text-base mt-4">
            Explore verified commercial case studies showing quantifiable revenue growth and infrastructure improvements.
          </p>
        </div>

        {/* Virtuo Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full font-heading text-xs font-semibold tracking-wide transition-all ${
                activeCategory === cat
                  ? "bg-[#139BFD] text-white shadow-lg shadow-[#139BFD]/25"
                  : "bg-[#06131B] text-[#BEBEBE] border-[1.8px] border-[#0C1F2E] hover:border-[#139BFD] hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Case Studies 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCases.map((item) => (
            <div
              key={item.id}
              className="card-invers overflow-hidden group cursor-pointer hover:border-[#139BFD] transition-all duration-300 relative flex flex-col justify-between"
              onClick={() => setSelectedCase(item)}
            >
              <div className="tmp-light light-center" />

              {/* Thumbnail with Hover Zoom */}
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#0A1A26]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06131B] via-transparent to-transparent opacity-80" />
                
                {/* Metric Callout Pill */}
                <div className="absolute top-4 right-4 bg-[#06131B]/95 backdrop-blur-md border-[1.8px] border-[#0C1F2E] rounded-[10px] px-3.5 py-1.5 flex items-center gap-2">
                  <TrendingUp className="w-3.5 h-3.5 text-[#139BFD]" />
                  <span className="font-heading text-xs font-bold text-white">
                    {item.metrics.value} {item.metrics.label}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-[11px] font-heading font-medium bg-[#0A1A26] text-[#42AFFD] border border-[#0C1F2E]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="font-heading text-xs uppercase tracking-widest text-[#BEBEBE] block mb-1">
                    {item.client}
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white group-hover:text-[#139BFD] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-[#BEBEBE] mt-3 leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                {/* View Details Action */}
                <div className="mt-6 pt-5 border-t border-[#0C1F2E] flex items-center justify-between">
                  <span className="text-xs font-heading font-semibold text-[#139BFD] group-hover:underline">
                    Click to view full metrics &amp; strategy &rarr;
                  </span>
                  <VirtuoButton
                    text="View Details"
                    onClick={() => setSelectedCase(item)}
                    className="!py-2 !px-4 text-xs"
                  />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Detail Modal */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedCase(null)}
          />
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#06131B] border-[1.8px] border-[#139BFD] rounded-[24px] p-6 sm:p-10 z-10 shadow-2xl">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedCase(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full border border-[#0C1F2E] flex items-center justify-center text-white/70 hover:text-white hover:border-[#139BFD] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <span className="font-heading text-xs uppercase tracking-widest text-[#42AFFD] font-bold block mb-2">
              Verified Case Study &bull; {selectedCase.client}
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              {selectedCase.title}
            </h3>

            {/* Image banner in modal */}
            <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden my-6 border border-[#0C1F2E]">
              <Image
                src={selectedCase.image}
                alt={selectedCase.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Breakdown sections */}
            <div className="space-y-6 text-left">
              <div>
                <h4 className="font-heading text-sm uppercase tracking-wider text-white font-bold mb-2">
                  The Challenge
                </h4>
                <p className="font-body text-[#BEBEBE] text-sm leading-relaxed">
                  {selectedCase.challenge}
                </p>
              </div>

              <div>
                <h4 className="font-heading text-sm uppercase tracking-wider text-white font-bold mb-2">
                  The Strategic Solution
                </h4>
                <p className="font-body text-[#BEBEBE] text-sm leading-relaxed">
                  {selectedCase.solution}
                </p>
              </div>

              <div className="bg-[#0A1A26] border-[1.8px] border-[#0C1F2E] rounded-2xl p-6">
                <h4 className="font-heading text-sm uppercase tracking-wider text-[#139BFD] font-bold mb-3">
                  Verified Commercial Results
                </h4>
                <ul className="space-y-2.5">
                  {selectedCase.results.map((res, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-[#13FDFD] shrink-0 mt-0.5" />
                      <span className="font-body text-xs sm:text-sm text-white font-medium">
                        {res}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal CTA */}
            <div className="mt-8 pt-6 border-t border-[#0C1F2E] flex flex-wrap items-center justify-between gap-4">
              <span className="font-body text-xs text-[#BEBEBE]">
                Want similar revenue results for your brand?
              </span>
              <VirtuoButton
                href="#contact"
                text="Book a Growth Strategy Call"
                variant="primary"
                onClick={() => setSelectedCase(null)}
              />
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
