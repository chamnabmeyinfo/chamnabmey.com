'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Download, ShieldCheck, Sparkles } from 'lucide-react';
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
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-4 sm:px-6 pointer-events-none">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Floating Glass Pill Dock */}
        <nav
          className={`pointer-events-auto w-full flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border transition-all duration-300 ${
            scrolled
              ? 'bg-[#0A0C10]/85 border-white/[0.12] backdrop-blur-xl shadow-2xl shadow-black/80'
              : 'bg-[#0E1117]/60 border-white/[0.08] backdrop-blur-lg'
          }`}
        >
          {/* Logo & Status Indicator */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1px] shadow-sm">
              <div className="w-full h-full rounded-full bg-[#0A0C10] flex items-center justify-center text-white font-bold text-xs tracking-wider font-mono">
                CM
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                CHAMNAB MEY
              </span>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] text-neutral-400 font-mono tracking-wide">
                  Available Q3/Q4
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 border border-white/[0.06] rounded-full px-3 py-1 bg-white/[0.02]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 text-xs font-medium text-neutral-300 hover:text-white hover:bg-white/[0.06] rounded-full transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="/Resume-CHAMNAB-MEY.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 text-xs font-medium text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>CV (PDF)</span>
            </a>

            <a
              href="#contact"
              className="relative inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 text-xs font-semibold text-black bg-gradient-to-r from-cyan-300 via-cyan-400 to-teal-300 hover:from-cyan-200 hover:to-teal-200 rounded-full shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Schedule Audit</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="#contact"
              className="px-3 py-1.5 text-xs font-semibold text-black bg-cyan-400 rounded-full shadow-sm"
            >
              Contact
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-neutral-300 hover:text-white hover:bg-white/[0.08] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

      </div>

      {/* Mobile Menu Modal / Sheet */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="pointer-events-auto lg:hidden fixed top-20 left-4 right-4 rounded-2xl border border-white/[0.12] bg-[#0A0C10]/95 backdrop-blur-2xl p-6 shadow-2xl shadow-black z-50 space-y-4"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-neutral-300 hover:text-cyan-400 hover:bg-white/[0.04] rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex flex-col gap-3">
              <a
                href="/Resume-CHAMNAB-MEY.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-xs font-medium text-center text-neutral-300 border border-white/[0.1] rounded-xl hover:bg-white/[0.04] transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-3.5 h-3.5 text-cyan-400" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 text-xs font-bold text-center text-black bg-cyan-400 rounded-xl shadow-lg shadow-cyan-500/25"
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
