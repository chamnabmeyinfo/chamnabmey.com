"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TrendingUp, ShieldCheck, Code, Zap } from "lucide-react";

interface ExpertiseItem {
  id: number;
  logo: string;
  title: string;
  percentage: number;
  description: string;
  badge: string;
}

const expertises: ExpertiseItem[] = [
  {
    id: 1,
    logo: "/assets/images/my-expertise/logo-4.svg",
    title: "Performance Paid Ads & Media Buying",
    percentage: 95,
    badge: "Meta & Google Ads",
    description: "Multi-tiered campaign architecture targeting high-intent commercial buyers. Relentless creative iteration, auction bid optimization, and scalable acquisition engines.",
  },
  {
    id: 2,
    logo: "/assets/images/my-expertise/logo-5.svg",
    title: "Server-Side Tracking & Meta CAPI Protocol",
    percentage: 98,
    badge: "Attribution Precision",
    description: "Direct server-to-server event dispatch via Cloudflare & Meta CAPI. Bypasses iOS browser blockers, recovers lost signal data, and feeds clean conversion telemetry into ad algorithms.",
  },
  {
    id: 3,
    logo: "/assets/images/my-expertise/logo-6.svg",
    title: "High-Converting Web & Funnel Architecture",
    percentage: 92,
    badge: "Next.js & WordPress",
    description: "Lightning-fast, mobile-first sales pages and web apps engineered with Next.js Turbopack. Zero layout shift, sub-second load times, and frictionless lead qualification.",
  },
];

export default function ExpertiseRadial() {
  const [activeId, setActiveId] = useState<number>(1);

  // SVG circle calculation for radius 35: circumference = 2 * PI * 35 = 219.91
  const radius = 35;
  const circumference = 2 * Math.PI * radius;

  return (
    <section id="expertise" className="py-24 sm:py-32 relative bg-[#06131B]/60 border-t-[1.8px] border-[#0C1F2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="subtitle theme-gradient font-heading text-xs uppercase tracking-widest font-bold block mb-3">
            My Expertise
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Elevated Marketing <br />
            <span className="text-gradient-invers">Personalized for Measurable ROI</span>
          </h2>
          <p className="font-body text-[#BEBEBE] text-base mt-4">
            Specialized disciplines calibrated to eliminate wasted ad spend and maximize customer acquisition.
          </p>
        </div>

        {/* Expertise Rows */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {expertises.map((item) => {
            const strokeDashoffset = circumference - (circumference * item.percentage) / 100;
            const isActive = activeId === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveId(item.id)}
                className={`card-invers p-6 sm:p-8 rounded-[20px] transition-all duration-300 relative overflow-hidden ${
                  isActive
                    ? "border-[#139BFD] bg-[#0A1A26] shadow-xl shadow-[#139BFD]/10"
                    : "border-[#0C1F2E] bg-[#06131B] hover:border-[#139BFD]/60"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  
                  {/* Left: Icon & Title */}
                  <div className="flex items-center gap-5 md:w-5/12">
                    <div className="w-14 h-14 rounded-2xl bg-[#06131B] border-[1.8px] border-[#0C1F2E] flex items-center justify-center p-3 shrink-0">
                      <Image
                        src={item.logo}
                        alt={item.title}
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <span className="text-[11px] font-heading font-semibold uppercase tracking-wider text-[#42AFFD] block mb-1">
                        {item.badge}
                      </span>
                      <h3 className="font-heading text-lg sm:text-xl font-bold text-white leading-snug">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Middle: Radial Progress SVG Gauge */}
                  <div className="flex items-center gap-4 md:w-3/12 justify-start md:justify-center">
                    <div className="relative w-20 h-20 shrink-0 flex items-center justify-center">
                      <svg className="radial-progress" viewBox="0 0 80 80">
                        <circle
                          className="bar-static"
                          cx="40"
                          cy="40"
                          r={radius}
                        />
                        <circle
                          className="bar--animated"
                          cx="40"
                          cy="40"
                          r={radius}
                          style={{
                            strokeDasharray: circumference,
                            strokeDashoffset: strokeDashoffset,
                          }}
                        />
                        <text
                          x="50%"
                          y="54%"
                          transform="matrix(0, 1, -1, 0, 80, 0)"
                        >
                          {item.percentage}%
                        </text>
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-heading text-xs font-bold text-white">
                        Optimization
                      </span>
                      <span className="text-[11px] text-[#BEBEBE]">
                        Signal Strength
                      </span>
                    </div>
                  </div>

                  {/* Right: Description */}
                  <div className="md:w-4/12">
                    <p className="font-body text-xs sm:text-sm text-[#BEBEBE] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
