'use client';

import React from 'react';
import { 
  Megaphone, 
  Code2, 
  Search, 
  ShoppingCart, 
  Target, 
  Server, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Megaphone,
      title: 'Performance Paid Ads (Meta & Google)',
      badge: 'High ROI Growth',
      description:
        'Data-backed advertising campaigns that turn cold audiences into qualified buyers. Direct experience managing high-budget Meta and Google Search campaigns.',
      deliverables: [
        'Custom audience persona & segmentation',
        'High-converting ad creatives & copywriting',
        'A/B split testing & conversion tracking',
        'Weekly ROAS & cost-per-lead optimization',
      ],
      idealFor: 'Businesses needing immediate leads and scalable customer acquisition.',
    },
    {
      icon: Code2,
      title: 'Modern Web & Landing Page Development',
      badge: 'Conversion Engineered',
      description:
        'Custom, lightning-fast web applications and high-converting landing pages built with modern stacks (Next.js, React, WordPress) that load in under a second.',
      deliverables: [
        'Mobile-first responsive UX/UI design',
        'Ultra-fast load speeds & Core Web Vitals',
        'Lead capture & CRM / Google database integration',
        'Domain, SSL, and analytics event tracking setup',
      ],
      idealFor: 'Brands wanting a modern digital presence that turns visitors into paying clients.',
    },
    {
      icon: Search,
      title: 'SEO & Organic Growth Strategy',
      badge: 'Long-term Traffic',
      description:
        'Technical, on-page, and local search engine optimization engineered to dominate search results for high-intent business keywords in Cambodia and regional markets.',
      deliverables: [
        'Comprehensive keyword & competitor research',
        'Technical SEO audit & speed optimization',
        'Content strategy & structured schema data',
        'Google Business Profile & local map pack ranking',
      ],
      idealFor: 'Companies seeking sustainable organic traffic without relying solely on ad spend.',
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Strategy & Operations',
      badge: 'Sales Funnels',
      description:
        'End-to-end e-commerce solutions derived from hands-on platform leadership at Riich Me and EPOS-GODIGITAL. Enhancing customer journey from browse to checkout.',
      deliverables: [
        'Store setup, inventory & payment gateway flows',
        'Cart abandonment & checkout optimization',
        'Promotional event alignment & social commerce',
        'Customer retention & repeat purchase loops',
      ],
      idealFor: 'Online retailers and multi-vendor marketplaces aiming to increase average order value.',
    },
    {
      icon: Target,
      title: 'Full-Funnel Lead Generation Systems',
      badge: 'Automated Pipelines',
      description:
        'Comprehensive funnel architecture that captures, qualifies, and routes leads directly to your sales team via WhatsApp, Telegram, or automated CRM workflows.',
      deliverables: [
        'High-converting lead magnet funnels',
        'Instant Telegram/WhatsApp alert integration',
        'Lead qualification & scoring filters',
        'Automated nurturing email sequences',
      ],
      idealFor: 'B2B companies, real estate, automotive, and professional service providers.',
    },
    {
      icon: Server,
      title: 'Hosting, WHM/cPanel & Cloud Infrastructure',
      badge: 'Technical Precision',
      description:
        'Enterprise-grade server and web hosting management. Deep hands-on experience running cPanel, WHM, and cloud environments with guaranteed security and uptime.',
      deliverables: [
        'cPanel & WHM server setup and migration',
        'Corporate email infrastructure & anti-spam',
        'Automated database backups & security hardening',
        'Cloudflare CDN & DDoS protection',
      ],
      idealFor: 'Organizations requiring rock-solid server reliability, speed, and email delivery.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-950 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            Professional Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
            Comprehensive Digital Growth & Engineering Services
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Every service is tailored to deliver measurable revenue, lower customer acquisition costs, and build a lasting digital advantage for your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className="group relative bg-gradient-to-b from-slate-900 to-slate-950 rounded-3xl p-7 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-emerald-950/30 hover:-translate-y-1"
              >
                <div>
                  {/* Top Bar with Icon and Badge */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <div className="p-3.5 rounded-2xl bg-slate-800/80 group-hover:bg-emerald-500/10 border border-slate-700/80 group-hover:border-emerald-500/30 text-emerald-400 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {srv.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-sm text-slate-400 mt-3 leading-relaxed">
                    {srv.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="mt-6 pt-6 border-t border-slate-800/80">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-3">
                      Key Deliverables:
                    </span>
                    <ul className="space-y-2">
                      {srv.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-8 pt-4 border-t border-slate-800/60">
                  <p className="text-[11px] text-slate-400 mb-3 italic">
                    Best for: {srv.idealFor}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 group-hover:text-emerald-300 transition-colors"
                  >
                    <span>Request Service Quote</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Project Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Need a Custom Multi-Channel Marketing Solution?
            </h3>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              I assemble bespoke marketing strategies combining paid ads, custom website development, and tracking infrastructure for high-growth enterprises.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-lg shadow-emerald-500/20"
          >
            Schedule 1-on-1 Consultation
          </a>
        </div>

      </div>
    </section>
  );
}
