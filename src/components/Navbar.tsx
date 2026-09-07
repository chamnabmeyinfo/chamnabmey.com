'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';

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
    { name: 'Capabilities', href: '#skills' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAFAFA]/90 backdrop-blur-md border-b border-neutral-200/80 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Typographic Monogram & Name */}
          <Link href="/" className="flex items-baseline gap-2 group">
            <span className="font-extrabold text-base tracking-tight text-[#111111]">
              CHAMNAB MEY
            </span>
            <span className="text-[11px] text-neutral-400 font-normal tracking-wide hidden sm:inline">
              / Digital Marketing
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-neutral-600 hover:text-[#111111] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Minimalist CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="/Resume-CHAMNAB-MEY.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-neutral-600 hover:text-[#111111] px-3 py-2 transition-colors"
            >
              CV (PDF)
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-medium text-white bg-[#111111] hover:bg-neutral-800 transition-all"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#contact"
              className="px-3.5 py-1.5 text-xs font-medium text-white bg-[#111111] rounded-full"
            >
              Contact
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-1.5 rounded-lg text-neutral-700 hover:text-black focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {isOpen && (
          <div className="md:hidden mt-3 pt-4 pb-5 border-t border-neutral-200/80 bg-[#FAFAFA] space-y-3">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-neutral-700 hover:text-black"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-3 border-t border-neutral-200/80 flex flex-col gap-2">
                <a
                  href="/Resume-CHAMNAB-MEY.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-neutral-600 py-1"
                >
                  Download CV (PDF)
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-2.5 rounded-full text-xs font-medium text-white bg-[#111111]"
                >
                  Schedule Consultation
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
