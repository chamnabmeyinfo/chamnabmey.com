"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Mr. Tim Vutha",
    role: "Chief Executive Officer",
    company: "KHB Media PLC",
    content:
      "Chamnab's rare combination of deep IT engineering background and commercial marketing strategy transformed how our 5 agency divisions operate. His server-side tracking setups and media buying frameworks delivered consistent 3.8x ROAS for our premier commercial accounts.",
    avatar: "/assets/images/testimonial/client-img-1.jpg",
  },
  {
    name: "Mr. Ly Sok",
    role: "Managing Director",
    company: "Shimmexgroup & Commercial Machinery",
    content:
      "Working with Chamnab directly gave us 10x the agility of our previous traditional agency. He restructured our entire digital lead funnel for Solis tractors, driving a +140% surge in qualified buyer inquiries while cutting wasted spend.",
    avatar: "/assets/images/testimonial/client-img-1.jpg",
  },
  {
    name: "Fintech Growth Director",
    role: "Head of Merchant Acquisition",
    company: "Riich Me / EPOS-GODIGITAL",
    content:
      "Chamnab doesn't just buy ads — he engineers customer acquisition systems. His work on our mobile app user funnel delivered over 185% growth in active merchant registrations within 90 days. He owns outcomes completely.",
    avatar: "/assets/images/testimonial/client-img-1.jpg",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 sm:py-32 relative bg-[#141414] border-t-[1.8px] border-[#0C1F2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="subtitle theme-gradient font-heading text-xs uppercase tracking-widest font-bold block mb-3">
            Clients Testimonial
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Endorsements from <br />
            <span className="text-gradient-invers">Commercial Leaders</span>
          </h2>
          <p className="font-body text-[#BEBEBE] text-base mt-4">
            Direct feedback from CEOs, agency directors, and business owners who have scaled with Chamnab Mey.
          </p>
        </div>

        {/* Virtuo Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="card-invers p-8 sm:p-12 relative overflow-hidden">
            <div className="tmp-light light-top-left" />

            {/* Quotation Mark Logo from Virtuo */}
            <div className="absolute top-6 right-6 sm:top-10 sm:right-10 w-16 h-16 pointer-events-none opacity-30">
              <Image
                src="/assets/images/testimonial/quat-logo.svg"
                alt="Quote mark"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>

            <div className="relative z-10">
              {/* Client Info & Stars Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#0C1F2E]">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-[1.8px] border-[#139BFD] relative bg-[#06131B]">
                    <Image
                      src={current.avatar}
                      alt={current.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-white">
                      {current.name}
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-[#42AFFD]">
                      {current.role}, <span className="text-white/80">{current.company}</span>
                    </p>
                  </div>
                </div>

                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#FFB800]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>

              {/* Testimonial Quote */}
              <blockquote className="mt-8 font-body text-base sm:text-lg text-[#FFFFFF]/90 leading-relaxed italic">
                &ldquo;{current.content}&rdquo;
              </blockquote>

              {/* Carousel Controls */}
              <div className="mt-8 pt-6 border-t border-[#0C1F2E] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 rounded-full transition-all ${
                        currentIndex === idx ? "w-8 bg-[#139BFD]" : "w-2 bg-[#0C1F2E]"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prevSlide}
                    className="w-10 h-10 rounded-full border-[1.8px] border-[#0C1F2E] bg-[#06131B] flex items-center justify-center text-white/80 hover:text-[#139BFD] hover:border-[#139BFD] transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-10 h-10 rounded-full border-[1.8px] border-[#0C1F2E] bg-[#06131B] flex items-center justify-center text-white/80 hover:text-[#139BFD] hover:border-[#139BFD] transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
