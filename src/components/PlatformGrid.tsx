"use client";

import React from "react";
import Image from "next/image";

interface PlatformItem {
  icon: string;
  name: string;
  role: string;
  description: string;
}

const platforms: PlatformItem[] = [
  {
    icon: "/assets/images/icons/meta.svg",
    name: "Meta Ads & Conversions API",
    role: "Core Paid Channel",
    description: "Enterprise campaign bidding, machine learning optimization, and server-side first-party event tracking.",
  },
  {
    icon: "/assets/images/icons/google.svg",
    name: "Google Marketing Platform",
    role: "High-Intent Capture",
    description: "Google Ads Search, Performance Max, YouTube video funnels, and Google Analytics 4 (GA4) attribution.",
  },
  {
    icon: "/assets/images/icons/framer.svg",
    name: "Next.js & Cloudflare Edge",
    role: "Conversion Architecture",
    description: "Sub-second loading landing pages, edge routing, automated lead webhook dispatch, and server security.",
  },
  {
    icon: "/assets/images/icons/app.svg",
    name: "Full-Funnel Automation",
    role: "Retention & CRM",
    description: "Telegram bot routing, automated SMS qualification, and CRM synchronization for immediate sales team follow-up.",
  },
];

export default function PlatformGrid() {
  return (
    <section className="py-24 sm:py-32 relative bg-[#141414] border-t-[1.8px] border-[#0C1F2E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Heading & Context */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="subtitle theme-gradient font-heading text-xs uppercase tracking-widest font-bold mb-3">
              Infrastructure Stack
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Enterprise Tools Where I <br />
              <span className="text-gradient-invers">Engineer Growth</span>
            </h2>
            <p className="font-body text-[#BEBEBE] text-base mt-5 leading-relaxed">
              Modern digital marketing cannot rely on guesswork or brittle client-side cookies. I build on enterprise-grade platforms to ensure resilient attribution, data privacy compliance, and maximum ROAS.
            </p>
          </div>

          {/* Right Column: 2x2 Virtuo Skill Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {platforms.map((plat) => (
              <div
                key={plat.name}
                className="card-invers p-6 sm:p-7 relative overflow-hidden group hover:border-[#139BFD] transition-all duration-300 flex flex-col justify-between"
              >
                <div className="tmp-light light-top-left" />
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#0A1A26] border-[1.8px] border-[#0C1F2E] flex items-center justify-center p-3 mb-5 group-hover:border-[#139BFD] transition-colors">
                    <Image
                      src={plat.icon}
                      alt={plat.name}
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-[11px] font-heading font-semibold uppercase tracking-wider text-[#42AFFD] block mb-1">
                    {plat.role}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-white group-hover:text-[#139BFD] transition-colors">
                    {plat.name}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-[#BEBEBE] mt-2.5 leading-relaxed">
                    {plat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
