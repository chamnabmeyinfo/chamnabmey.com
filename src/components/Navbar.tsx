'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useStyle } from '@/context/StyleContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { currentStyle } = useStyle();

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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--canvas-bg)]/90 backdrop-blur-md border-b theme-border py-4 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Typographic Monogram & Name */}
          <Link href="/" className="flex items-baseline gap-2 group">
            <span className="font-extrabold text-base tracking-tight theme-text-main">
              CHAMNAB MEY
            </span>
            <span className="text-[11px] theme-text-faint font-normal tracking-wide hidden sm:inline">
              / Digital Marketing
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-medium theme-text-muted hover:text-[var(--text-main)] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="/Resume-CHAMNAB-MEY.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium theme-text-muted hover:text-[var(--text-main)] px-3 py-2 transition-colors"
            >
              CV (PDF)
            </a>

            <a
              href="#contact"
              className="theme-btn-primary px-5 py-2 text-xs font-medium gap-1.5 shadow-sm"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#contact"
              className="theme-btn-primary px-3.5 py-1.5 text-xs font-medium"
            >
              Contact
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-1.5 rounded-lg theme-text-main focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {isOpen && (
          <div className="md:hidden mt-4 p-5 theme-card border theme-border space-y-3">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium theme-text-muted hover:text-[var(--text-main)] py-1"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-3 border-t theme-border flex flex-col gap-2">
                <a
                  href="/Resume-CHAMNAB-MEY.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium theme-text-muted py-1"
                >
                  Download CV (PDF)
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="theme-btn-primary py-2.5 text-xs font-medium text-center w-full"
                >
                  Book Consultation
                </a>
              </div>
            </nav>
          </div>
        )}

      </div>
    </header>
  );
}
