"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import OffCanvasSidebar from "./OffCanvasSidebar";
import VirtuoButton from "./VirtuoButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Expertise", href: "#expertise" },
    { label: "Reviews", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-[#141414]/90 backdrop-blur-xl border-b-[1.8px] border-[#0C1F2E] shadow-2xl"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-[10px] bg-gradient-to-br from-[#13FDFD] to-[#139BFD] flex items-center justify-center text-black font-black text-sm tracking-wider font-heading shadow-md shadow-[#139BFD]/20">
              CM
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-base font-bold text-white group-hover:text-[#139BFD] transition-colors tracking-tight">
                CHAMNAB<span className="text-[#139BFD]">.MEY</span>
              </span>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#42AFFD] animate-pulse" />
                <span className="text-[10px] text-[#BEBEBE] font-medium tracking-wide">
                  Solo Growth Strategist
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center space-x-1 border-[1.8px] border-[#0C1F2E] rounded-full px-4 py-1.5 bg-[#06131B]/80 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-heading font-medium text-[#BEBEBE] hover:text-[#139BFD] rounded-full transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Area: Socials + CTA + Sidebar Drawer Trigger */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Social Share icons in desktop navbar */}
            <div className="hidden md:flex items-center gap-2 pr-2 border-r border-[#0C1F2E]">
              <a
                href="https://t.me/chamnabmey"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-[#0C1F2E] flex items-center justify-center text-[#BEBEBE] hover:text-[#139BFD] hover:border-[#139BFD] transition-all"
                title="Telegram"
              >
                <Send className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.linkedin.com/in/chamnab-mey/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-[#0C1F2E] flex items-center justify-center text-[#BEBEBE] hover:text-[#139BFD] hover:border-[#139BFD] transition-all font-heading font-bold text-xs"
                title="LinkedIn"
              >
                in
              </a>
              <a
                href="https://facebook.com/chamnabmey"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-[#0C1F2E] flex items-center justify-center text-[#BEBEBE] hover:text-[#139BFD] hover:border-[#139BFD] transition-all font-heading font-bold text-xs"
                title="Facebook"
              >
                fb
              </a>
            </div>

            {/* Virtuo Schedule Audit CTA Button */}
            <div className="hidden sm:block">
              <VirtuoButton
                href="#contact"
                text="Free Audit"
                variant="primary"
                className="!py-2.5 !px-5 text-xs"
              />
            </div>

            {/* Virtuo Hamburger / Off-Canvas Sidebar Trigger */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="w-10 h-10 rounded-full border-[1.8px] border-[#0C1F2E] bg-[#06131B] flex flex-col items-center justify-center gap-1 text-white hover:border-[#139BFD] hover:text-[#139BFD] transition-all"
              aria-label="Open sidebar menu"
              title="Open profile menu"
            >
              <span className="w-4 h-[2px] bg-current rounded-full" />
              <span className="w-2.5 h-[2px] bg-current rounded-full self-end mr-3" />
              <span className="w-4 h-[2px] bg-current rounded-full" />
            </button>

            {/* Mobile menu toggle button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden w-10 h-10 rounded-full border-[1.8px] border-[#0C1F2E] bg-[#06131B] flex items-center justify-center text-white"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-Down Navigation Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="xl:hidden bg-[#06131B] border-b-[1.8px] border-[#0C1F2E] px-6 py-5 mt-3 shadow-2xl"
            >
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-heading text-sm text-[#BEBEBE] hover:text-[#139BFD] py-2 border-b border-[#0C1F2E]/60 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-3">
                  <VirtuoButton
                    href="#contact"
                    text="Schedule Free Audit"
                    variant="primary"
                    className="w-full justify-center"
                    onClick={() => setMobileMenuOpen(false)}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Off-Canvas Slideout Drawer */}
      <OffCanvasSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}
