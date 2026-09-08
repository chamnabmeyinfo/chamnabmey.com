'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Why Solo', href: '#why-solo' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'ROI Simulator', href: '#calculator' },
    { label: 'Capabilities', href: '#skills' },
    { label: 'Reviews', href: '#testimonials' },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 pointer-events-none">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Floating Inversweb Navigation Container: 20px radius, 1.8px #0C1F2E border */}
        <nav
          className={`pointer-events-auto w-full flex items-center justify-between px-5 sm:px-6 py-3 rounded-[20px] border-[1.8px] transition-all duration-300 ${
            scrolled
              ? 'bg-[#06131B]/95 border-[#139BFD]/40 backdrop-blur-xl shadow-lg'
              : 'bg-[#06131B]/90 border-[#0C1F2E] backdrop-blur-md'
          }`}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-[6px] bg-[#139BFD] flex items-center justify-center text-white font-bold text-xs tracking-wider font-heading">
              CM
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-sm text-white group-hover:text-[#139BFD] transition-colors">
                CHAMNAB MEY
              </span>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#42AFFD] animate-pulse" />
                <span className="text-[10px] text-[#BEBEBE] font-medium tracking-wide">
                  Available Q3/Q4
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 border-[1.8px] border-[#0C1F2E] rounded-[10px] px-2 py-1 bg-[#141414]/60">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 text-xs font-medium text-[#BEBEBE] hover:text-[#139BFD] rounded-[6px] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action Controls: 6px button radius, #139BFD */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="/Resume-CHAMNAB-MEY.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-medium text-[#BEBEBE] hover:text-white border-[1.8px] border-[#0C1F2E] hover:border-[#139BFD] bg-[#06131B] rounded-[6px] transition-all flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5 text-[#139BFD]" />
              <span>CV (PDF)</span>
            </a>

            <a
              href="#contact"
              className="px-5 py-2 text-xs font-medium text-white bg-[#139BFD] hover:bg-[#42AFFD] rounded-[6px] transition-all flex items-center gap-1.5"
            >
              <span>Schedule Audit</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="#contact"
              className="px-3 py-1.5 text-xs font-medium text-white bg-[#139BFD] rounded-[6px]"
            >
              Contact
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-[6px] border-[1.8px] border-[#0C1F2E] bg-[#06131B] text-[#BEBEBE] hover:text-white transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>

      </div>

      {/* Mobile Menu Sheet */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="pointer-events-auto lg:hidden fixed top-20 left-4 right-4 rounded-[20px] border-[1.8px] border-[#0C1F2E] bg-[#06131B]/95 backdrop-blur-2xl p-6 shadow-xl z-50 space-y-4"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-[#BEBEBE] hover:text-[#139BFD] transition-colors rounded-[6px]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-[#0C1F2E] flex flex-col gap-3">
              <a
                href="/Resume-CHAMNAB-MEY.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-xs font-medium text-center text-[#BEBEBE] border-[1.8px] border-[#0C1F2E] bg-[#141414] rounded-[6px] hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-3.5 h-3.5 text-[#139BFD]" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 text-xs font-medium text-center text-white bg-[#139BFD] hover:bg-[#42AFFD] rounded-[6px]"
              >
                Schedule Free Strategy Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
