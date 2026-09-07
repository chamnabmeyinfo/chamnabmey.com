'use client';

import React from 'react';
import { 
  BarChart3, 
  Code, 
  Server, 
  Layers, 
  ShoppingBag, 
  Check, 
  Video, 
  Workflow 
} from 'lucide-react';

export default function SkillsMatrix() {
  const skillCategories = [
    {
      category: 'Digital Marketing & Paid Acquisition',
      icon: BarChart3,
      color: 'emerald',
      skills: [
        { name: 'Facebook Ads & Meta Pixel', level: 'Expert (95%)' },
        { name: 'Google Ads (Search & Display)', level: 'Advanced (90%)' },
        { name: 'Conversion Funnel Optimization', level: 'Expert (92%)' },
        { name: 'Audience Segmentation & Targeting', level: 'Advanced (90%)' },
        { name: 'Social Media Growth & Management', level: 'Advanced (88%)' },
        { name: 'Campaign ROAS & Budget Pacing', level: 'Expert (92%)' },
      ],
    },
    {
      category: 'High-Converting Web & Landing Page Tech',
      icon: Code,
      color: 'cyan',
      skills: [
        { name: 'Next.js & React Landing Pages', level: 'Advanced (90%)' },
        { name: 'WordPress & WooCommerce Systems', level: 'Expert (95%)' },
        { name: 'Mobile-First Conversion UI/UX', level: 'Expert (94%)' },
        { name: 'Technical On-Page & Local SEO', level: 'Advanced (90%)' },
        { name: 'Lead Form Pipelines & Webhooks', level: 'Expert (92%)' },
        { name: 'E-Commerce Checkout Optimization', level: 'Advanced (88%)' },
      ],
    },
    {
      category: 'Tracking, Analytics & Infrastructure',
      icon: Server,
      color: 'teal',
      skills: [
        { name: 'Google Analytics 4 & Dashboards', level: 'Expert (95%)' },
        { name: 'Google Tag Manager (GTM) Architecture', level: 'Expert (92%)' },
        { name: 'Meta Conversion API (CAPI) Server-Side', level: 'Advanced (90%)' },
        { name: 'Sub-Second Page Load Optimization', level: 'Advanced (92%)' },
        { name: 'cPanel & WHM Server Administration', level: 'Expert (95%)' },
        { name: 'Cloudflare CDN & Domain DNS Routing', level: 'Advanced (90%)' },
      ],
    },
    {
      category: 'Operations, Leadership & Media Direction',
      icon: Workflow,
      color: 'amber',
      skills: [
        { name: 'Cross-Functional Team Leadership', level: 'Executive (95%)' },
        { name: 'E-commerce Platform Operations', level: 'Advanced (90%)' },
        { name: 'Creative Video Animation Direction', level: 'Proficient (85%)' },
        { name: 'Photography & Media Coordination', level: 'Proficient (85%)' },
        { name: 'Data Analytics & GA4 Reporting', level: 'Advanced (90%)' },
        { name: 'Client Account & Stakeholder Mgmt', level: 'Executive (95%)' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            Skills & Competencies
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
            The Multi-Disciplinary Toolkit
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            A comprehensive matrix of technical tools, marketing engines, and operational frameworks mastered over 10+ years of active execution.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/80 rounded-3xl p-7 border border-slate-800 hover:border-slate-700 transition-all shadow-xl"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                  <div className="p-3 rounded-2xl bg-slate-800 text-emerald-400 border border-slate-700">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{cat.category}</h3>
                    <span className="text-xs text-slate-400">Core Expertise & Capabilities</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex justify-between text-xs sm:text-sm">
                        <span className="font-medium text-slate-200 flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          {skill.name}
                        </span>
                        <span className="text-emerald-400 font-semibold text-xs">
                          {skill.level}
                        </span>
                      </div>
                      {/* Bar indicator */}
                      <div className="w-full bg-slate-950 rounded-full h-1.5 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-full rounded-full"
                          style={{
                            width: skill.level.includes('95%')
                              ? '95%'
                              : skill.level.includes('94%')
                              ? '94%'
                              : skill.level.includes('92%')
                              ? '92%'
                              : skill.level.includes('90%')
                              ? '90%'
                              : skill.level.includes('88%')
                              ? '88%'
                              : '85%',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Stack Badges */}
        <div className="mt-16 p-8 rounded-3xl bg-slate-900/50 border border-slate-800/80 text-center">
          <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
            Technologies, Platforms & Tools Utilized Daily
          </h4>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              'Meta Ads Manager',
              'Google Ads',
              'Google Analytics 4',
              'Google Tag Manager',
              'Next.js 14/15',
              'React.js',
              'Tailwind CSS',
              'WordPress',
              'cPanel & WHM',
              'Cloudflare',
              'Firebase / Google Cloud',
              'Git & GitHub',
              'Vercel',
              'Adobe Premiere / Video Tools',
              'Canva & Photoshop',
              'Search Console',
            ].map((tool, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
