'use client';

import React from 'react';
import { 
  Megaphone, 
  Code2, 
  Search, 
  ShoppingCart, 
  Target, 
  Server, 
  ArrowRight 
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      number: '01',
      title: 'Performance Paid Ads (Meta & Google)',
      description:
        'Strategic search & social media advertising campaigns designed to acquire high-intent buyers, lower cost-per-acquisition (CPA), and scale customer revenue.',
      tags: ['Meta Ads', 'Google Search', 'Creative Testing', 'ROAS Scaling'],
    },
    {
      number: '02',
      title: 'High-Converting Web Development',
      description:
        'Custom, ultra-fast landing pages and modern web applications (Next.js, WordPress) engineered with mobile-first UX and conversion rate optimization (CRO).',
      tags: ['Next.js', 'WordPress', 'Core Web Vitals', 'CRO Design'],
    },
    {
      number: '03',
      title: 'Technical & Local SEO Solutions',
      description:
        'Comprehensive on-page, off-page, and technical SEO architecture to dominate high-value organic search rankings across Cambodia and regional markets.',
      tags: ['Keyword Research', 'Technical SEO', 'Schema Markup', 'Local Map Pack'],
    },
    {
      number: '04',
      title: 'E-Commerce Strategy & Operations',
      description:
        'End-to-end platform scaling derived from hands-on operations at Riich Me and EPOS-GODIGITAL. Optimizing store conversion rate, checkout UX, and customer retention.',
      tags: ['Marketplace Ops', 'Cart Optimization', 'Event Synergies', 'Payment Gateways'],
    },
    {
      number: '05',
      title: 'Full-Funnel Lead Generation Systems',
      description:
        'Automated lead capture funnels that qualify inbound prospects and route them directly to your sales team via instant Telegram or WhatsApp notifications.',
      tags: ['Lead Magnets', 'Telegram Routing', 'CRM Pipelines', 'B2B Sales'],
    },
    {
      number: '06',
      title: 'Tracking, Analytics & Server Infrastructure',
      description:
        'Rock-solid data attribution setup using Meta Conversion API (CAPI), Google Tag Manager, GA4, along with cPanel, WHM, and Cloudflare server security.',
      tags: ['Meta CAPI', 'GA4 & GTM', 'cPanel & WHM', 'Cloudflare CDN'],
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#F2EEED] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading (Biogra index-4 style) */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#9175FF] block mb-3">
            What I Do
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F0F0F] tracking-tight leading-[1.15]">
            Boosting Visibility, Traffic & Conversions <br className="hidden sm:inline" />
            Tailored Marketing Solutions for Growth
          </h2>
        </div>

        {/* Services Grid (Exact Biogra hover effect: switches from light to #171717 dark with white text) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv) => (
            <div
              key={srv.number}
              className="group relative bg-white hover:bg-[#171717] border border-black/8 hover:border-[#171717] rounded-2xl p-8 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Number Badge */}
                <div className="w-10 h-10 rounded-full border border-black/10 group-hover:border-white/20 flex items-center justify-center text-xs font-bold text-[#696969] group-hover:text-white mb-6 transition-colors">
                  {srv.number}
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-[#0F0F0F] group-hover:text-white transition-colors mb-3">
                  {srv.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#555555] group-hover:text-white/80 leading-relaxed transition-colors">
                  {srv.description}
                </p>
              </div>

              {/* Tags and CTA */}
              <div className="mt-8 pt-6 border-t border-black/6 group-hover:border-white/10 transition-colors space-y-4">
                <div className="flex flex-wrap gap-2">
                  {srv.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-black/4 group-hover:bg-white/10 text-[#444444] group-hover:text-white/90 border border-black/6 group-hover:border-white/10 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F0F0F] group-hover:text-[#9175FF] transition-colors"
                  >
                    <span>Request Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
