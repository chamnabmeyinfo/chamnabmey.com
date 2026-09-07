'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Download, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Tech Stack', href: '#skills' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F2EEED]/90 backdrop-blur-md border-b border-black/5 shadow-sm py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Personal Brand in Biogra style */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-full bg-[#0F0F0F] text-white flex items-center justify-center font-bold text-base tracking-wider group-hover:bg-[#9175FF] transition-colors">
              CM
            </div>
            <div>
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[#0F0F0F] block">
                CHAMNAB MEY
              </span>
              <span className="text-[11px] text-[#696969] font-medium tracking-wide block -mt-1">
                Digital Marketer & SEO Specialist
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 rounded-full text-sm font-medium text-[#444444] hover:text-[#0F0F0F] hover:bg-black/5 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Action CTAs: Biogra Style Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="/Resume-CHAMNAB-MEY.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold text-[#0F0F0F] border border-black/20 hover:border-black hover:bg-black hover:text-white transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-white bg-[#9175FF] hover:bg-[#7A5AF8] shadow-md shadow-[#9175FF]/25 hover:shadow-[#9175FF]/40 hover:-translate-y-0.5 transition-all"
            >
              <span>Let’s Talk to Me</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#contact"
              className="px-3.5 py-1.5 text-xs font-bold text-white bg-[#9175FF] rounded-full"
            >
              Let’s Talk
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-xl text-[#0F0F0F] hover:bg-black/5 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-3 pt-4 pb-5 border border-black/10 bg-white/95 backdrop-blur-xl rounded-2xl px-5 shadow-xl">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2 rounded-lg text-base font-medium text-[#222222] hover:text-[#9175FF] hover:bg-black/5"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-3 border-t border-black/10 flex flex-col gap-2">
                <a
                  href="/Resume-CHAMNAB-MEY.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-full text-xs font-semibold text-[#0F0F0F] border border-black/20"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download CV / Resume (PDF)</span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 py-3 rounded-full text-xs font-bold text-white bg-[#9175FF]"
                >
                  <span>Schedule Free Consultation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
