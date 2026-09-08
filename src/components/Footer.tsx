"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Send, Mail, Phone, MapPin, Check } from "lucide-react";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail("");
    }
  };

  return (
    <footer className="relative bg-[#141414] border-t-[1.8px] border-[#0C1F2E] overflow-hidden">
      {/* Decorative Bottom Light from Virtuo */}
      <div className="absolute bottom-0 left-0 w-80 h-80 pointer-events-none opacity-30 z-0">
        <Image
          src="/assets/images/banner/shape/light-left.svg"
          alt="Bottom Light Shape"
          fill
          className="object-contain object-bottom-left"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative z-10">
        
        {/* 4-Column Virtuo Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-[#0C1F2E]">
          
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-6">
            <a href="#home" className="flex items-center gap-3 group mb-4">
              <div className="w-10 h-10 rounded-[10px] bg-gradient-to-br from-[#13FDFD] to-[#139BFD] flex items-center justify-center text-black font-black text-sm font-heading">
                CM
              </div>
              <span className="font-heading text-lg font-bold text-white group-hover:text-[#139BFD] transition-colors">
                CHAMNAB<span className="text-[#139BFD]">.MEY</span>
              </span>
            </a>
            <p className="font-body text-xs sm:text-sm text-[#BEBEBE] leading-relaxed max-w-sm">
              Elite Solo Digital Marketer &amp; Growth Systems Engineer based in Phnom Penh. Bridging software engineering rigor with multi-million dollar performance media acquisition.
            </p>
            <div className="flex items-center gap-3 mt-6">
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

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3 font-body text-xs sm:text-sm text-[#BEBEBE]">
              <li>
                <a href="#about" className="hover:text-[#139BFD] transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#139BFD] transition-colors">
                  Experience &amp; Certs
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#139BFD] transition-colors">
                  Technical Skills
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#139BFD] transition-colors">
                  Verified Case Studies
                </a>
              </li>
              <li>
                <a href="#expertise" className="hover:text-[#139BFD] transition-colors">
                  My Expertise
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#139BFD] transition-colors">
                  Client Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-5">
              Contact
            </h4>
            <ul className="space-y-3 font-body text-xs sm:text-sm text-[#BEBEBE]">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#139BFD] shrink-0" />
                <a href="tel:+85515705703" className="hover:text-white transition-colors">
                  +855 15 705 703
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Send className="w-4 h-4 text-[#139BFD] shrink-0" />
                <a
                  href="https://t.me/chamnabmey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @chamnabmey (Telegram)
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#139BFD] shrink-0" />
                <a href="mailto:admin@chamnabmey.com" className="hover:text-white transition-colors">
                  admin@chamnabmey.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#139BFD] shrink-0" />
                <span>Phnom Penh, Cambodia</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-5">
              Growth Newsletter
            </h4>
            <p className="font-body text-xs text-[#BEBEBE] leading-relaxed mb-4">
              Get strategic breakdowns on Meta algorithm shifts, server CAPI fixes, and high-converting marketing frameworks.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 text-xs font-heading font-semibold text-[#13FDFD] bg-[#0A1A26] border border-[#139BFD] p-3 rounded-xl">
                <Check className="w-4 h-4" />
                <span>Subscribed successfully!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Your executive email"
                  className="input-invers w-full !py-3 !pr-12 text-xs"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-[#139BFD] flex items-center justify-center text-black hover:bg-[#42AFFD] transition-colors"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-body text-[#BEBEBE]">
          <p>
            &copy; {new Date().getFullYear()} <strong className="text-white font-heading">Chamnab Mey</strong>. All Rights Reserved. Built with Next.js &amp; Cloudflare.
          </p>
          <ul className="flex items-center space-x-6 font-heading text-xs">
            <li>
              <a href="#" className="hover:text-[#139BFD] transition-colors">
                Terms &amp; Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#139BFD] transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#139BFD] transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
