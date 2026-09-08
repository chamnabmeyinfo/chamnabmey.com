"use client";

import React from "react";
import Image from "next/image";

export default function StatementBanner() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden border-y-[1.8px] border-[#0C1F2E] bg-[#0A141D]/40">
      {/* Decorative side graphics from Virtuo */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-48 sm:w-72 h-full pointer-events-none opacity-40 z-0">
        <Image
          src="/assets/images/banner/left-bg-text-para-doc.png"
          alt="Left decoration"
          fill
          className="object-contain object-left"
        />
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 sm:w-72 h-full pointer-events-none opacity-40 z-0">
        <Image
          src="/assets/images/banner/right-bg-text-para-doc.png"
          alt="Right decoration"
          fill
          className="object-contain object-right"
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center relative z-10">
        <span className="text-xs uppercase font-heading font-semibold text-[#42AFFD] tracking-widest block mb-4">
          Core Operating Philosophy
        </span>
        <h2 className="font-heading text-2xl sm:text-4xl lg:text-[40px] font-bold text-white leading-relaxed sm:leading-[1.5] tracking-tight">
          A high-performance commercial marketing system is built on{" "}
          <span className="text-gradient-invers font-extrabold underline decoration-[#139BFD]/50 underline-offset-8">
            engineering precision
          </span>
          : driving profitable traffic, infallible server-side tracking, and measurable revenue growth for bold businesses{" "}
          <span className="text-gradient-invers font-extrabold">since 2014</span>.
        </h2>
      </div>
    </section>
  );
}
