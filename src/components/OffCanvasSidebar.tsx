"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, Phone, Mail, MapPin, Send } from "lucide-react";

interface OffCanvasSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OffCanvasSidebar({ isOpen, onClose }: OffCanvasSidebarProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Slide-out Panel */}
      <div className="relative w-full max-w-md bg-[#06131B] border-l-[1.8px] border-[#0C1F2E] h-full overflow-y-auto p-8 z-10 shadow-2xl flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-[#0C1F2E]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#13FDFD] to-[#139BFD] flex items-center justify-center font-heading font-black text-black text-lg">
                C
              </div>
              <span className="font-heading font-bold text-lg tracking-tight text-white">
                CHAMNAB<span className="text-[#139BFD]">.MEY</span>
              </span>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full border border-[#0C1F2E] flex items-center justify-center text-white/70 hover:text-white hover:border-[#139BFD] transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Profile Card */}
          <div className="mt-8">
            <div className="relative w-28 h-28 rounded-2xl overflow-hidden border-2 border-[#139BFD]/40 mb-6">
              <Image
                src="/images/chamnab-mey.jpg"
                alt="Chamnab Mey"
                fill
                className="object-cover"
              />
            </div>
            <h4 className="font-heading text-xl font-bold text-white leading-tight">
              Solo Digital Marketer & Full-Funnel Growth Strategist
            </h4>
            <p className="font-body text-[#BEBEBE] text-sm mt-3 leading-relaxed">
              Bridging software engineering precision with 10+ years of high-volume performance media buying, Meta CAPI architecture, and revenue optimization for commercial brands.
            </p>
          </div>

          {/* Direct Contact List */}
          <div className="mt-8 space-y-4">
            <a
              href="tel:+85515705703"
              className="flex items-center gap-4 p-3 rounded-xl border border-[#0C1F2E] bg-[#0A1A26]/50 hover:border-[#139BFD] transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#139BFD]/10 text-[#139BFD] flex items-center justify-center group-hover:bg-[#139BFD] group-hover:text-black transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs uppercase text-[#BEBEBE] tracking-wider block font-heading">
                  Call Direct
                </span>
                <span className="text-sm font-semibold text-white group-hover:text-[#139BFD] transition-colors">
                  +855 15 705 703
                </span>
              </div>
            </a>

            <a
              href="https://t.me/chamnabmey"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-3 rounded-xl border border-[#0C1F2E] bg-[#0A1A26]/50 hover:border-[#139BFD] transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#139BFD]/10 text-[#139BFD] flex items-center justify-center group-hover:bg-[#139BFD] group-hover:text-black transition-colors">
                <Send className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs uppercase text-[#BEBEBE] tracking-wider block font-heading">
                  Telegram Direct
                </span>
                <span className="text-sm font-semibold text-white group-hover:text-[#139BFD] transition-colors">
                  @chamnabmey
                </span>
              </div>
            </a>

            <a
              href="mailto:admin@chamnabmey.com"
              className="flex items-center gap-4 p-3 rounded-xl border border-[#0C1F2E] bg-[#0A1A26]/50 hover:border-[#139BFD] transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#139BFD]/10 text-[#139BFD] flex items-center justify-center group-hover:bg-[#139BFD] group-hover:text-black transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs uppercase text-[#BEBEBE] tracking-wider block font-heading">
                  Email Me
                </span>
                <span className="text-sm font-semibold text-white group-hover:text-[#139BFD] transition-colors">
                  admin@chamnabmey.com
                </span>
              </div>
            </a>

            <div className="flex items-center gap-4 p-3 rounded-xl border border-[#0C1F2E] bg-[#0A1A26]/50">
              <div className="w-10 h-10 rounded-lg bg-[#139BFD]/10 text-[#139BFD] flex items-center justify-center">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs uppercase text-[#BEBEBE] tracking-wider block font-heading">
                  Location
                </span>
                <span className="text-sm font-semibold text-white">
                  Phnom Penh, Cambodia
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer & Socials */}
        <div className="pt-8 mt-8 border-t border-[#0C1F2E]">
          <span className="text-xs uppercase text-[#BEBEBE] tracking-wider block font-heading mb-4">
            Connect With Me
          </span>
          <div className="flex items-center gap-3">
            <a
              href="https://t.me/chamnabmey"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[#0C1F2E] flex items-center justify-center text-white/70 hover:text-[#139BFD] hover:border-[#139BFD] transition-colors"
            >
              <Send className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/chamnab-mey/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[#0C1F2E] flex items-center justify-center text-white/70 hover:text-[#139BFD] hover:border-[#139BFD] transition-colors"
            >
              <span className="font-heading font-bold text-xs">in</span>
            </a>
            <a
              href="https://facebook.com/chamnabmey"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[#0C1F2E] flex items-center justify-center text-white/70 hover:text-[#139BFD] hover:border-[#139BFD] transition-colors"
            >
              <span className="font-heading font-bold text-xs">fb</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
