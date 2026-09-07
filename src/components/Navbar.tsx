'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Download, ArrowUpRight, Sparkles } from 'lucide-react';

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
    { name: 'Skills & Tech', href: '#skills' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Personal Brand */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-cyan-500 flex items-center justify-center font-bold text-slate-950 text-xl shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              CM
            </div>
            <div>
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white block group-hover:text-emerald-400 transition-colors">
                CHAMNAB MEY
              </span>
              <span className="text-xs text-slate-400 font-medium tracking-wide block -mt-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
                Digital Growth & Web Strategist
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-850 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="/Resume-CHAMNAB-MEY.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-emerald-400 border border-slate-700/80 hover:border-emerald-500/50 hover:bg-slate-900 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-slate-950 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/35 hover:-translate-y-0.5 transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book Strategy Call</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#contact"
              className="px-3 py-1.5 text-xs font-semibold text-slate-950 bg-emerald-400 rounded-lg"
            >
              Hire Me
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border-t border-slate-800 bg-slate-900/95 backdrop-blur-xl rounded-2xl px-4 shadow-2xl">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:text-emerald-400 hover:bg-slate-800/80"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
                <a
                  href="/Resume-CHAMNAB-MEY.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium text-slate-200 border border-slate-700 bg-slate-800/50"
                >
                  <Download className="w-4 h-4" />
                  <span>Download CV / Resume (PDF)</span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-cyan-400"
                >
                  <span>Book Free Consultation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
