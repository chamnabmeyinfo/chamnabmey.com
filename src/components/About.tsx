'use client';

import React from 'react';
import { Award, Briefcase, GraduationCap, CheckCircle2, Download, ArrowUpRight } from 'lucide-react';

export default function About() {
  const careerTimeline = [
    {
      period: '2023 – Present',
      role: 'Senior Digital Marketing & Web Consultant',
      company: 'Freelance & Agency Consulting',
      location: 'Phnom Penh, Cambodia',
      highlights: [
        'Architect tailored digital growth strategies and high-converting web applications for local and regional businesses.',
        'Manage high-ROI Facebook, TikTok, and Google Ads funnels generating qualified customer inquiries.',
        'Consult brands on conversion rate optimization (CRO) and e-commerce systems.',
      ],
    },
    {
      period: '2021 – 2022',
      role: 'Operations & Digital Manager',
      company: 'Riich Me Co., LTD (epos-godigital.com / eMarketplace)',
      location: 'Phnom Penh, Cambodia',
      highlights: [
        'Directed digital growth and operations for the epos-godigital platform and multi-vendor marketplace.',
        'Scaled customer acquisition through SEO, performance paid advertising, and email marketing automation.',
        'Forged high-impact promotional collaborations with KMall events driving massive digital attendance and cross-channel sales.',
      ],
    },
    {
      period: '2018 – 2021',
      role: 'General Manager',
      company: 'KHB MEDIA PLC',
      location: 'Phnom Penh, Cambodia',
      highlights: [
        'Spearheaded all business operations under the direct leadership of CEO TIM VUTHA.',
        'Led and synchronized 5 core departments: Digital Marketing, Web Development, Graphic Design, Video Animation, and Photography/Videography.',
        'Executed Google Ads & Facebook ad initiatives, optimizing sales funnels to maximize return on ad spend (ROAS).',
        'Managed WHM & cPanel server infrastructure ensuring 99.9% uptime for client web applications.',
      ],
    },
    {
      period: '2016 – 2018',
      role: 'Web Developer & Digital Marketing Specialist',
      company: 'MEN SARUN MDR Co., Ltd (Solis Cambodia)',
      location: 'Phnom Penh, Cambodia',
      highlights: [
        'Built the official Solis Cambodia web portal (soliscambodia.com) for international tractor distribution.',
        'Executed multi-channel digital campaigns that positioned Solis as a premier agricultural brand in Cambodia.',
        'Generated substantial qualified farmer and distributor sales leads via targeted digital campaigns.',
      ],
    },
  ];

  const education = [
    {
      degree: 'Specialization in IT Management',
      institution: 'Setec Institute, Phnom Penh',
      period: '2014 – 2018',
      description: 'Advanced studies in IT department operations, software systems, practical engineering, and technology management.',
    },
    {
      degree: 'Information Technology Foundation',
      institution: 'International University (IU), Phnom Penh',
      period: '2013 – 2014',
      description: 'Comprehensive computer science foundations, algorithm design, web technologies, and database architecture.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            About Chamnab Mey
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
            Where Technical IT Precision Meets Strategic Marketing Growth
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            With over a decade of leadership at the intersection of web technology and digital marketing, I eliminate the guesswork for business owners by engineering marketing systems that convert visitors into paying clients.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-6 space-y-6 text-slate-300 text-base leading-relaxed">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Why Hire a Hybrid Digital Marketer & Developer?
            </h3>
            <p>
              Most marketing campaigns underperform not because the ad creative is poor, but because the <span className="text-emerald-400 font-medium">underlying digital infrastructure fails</span>. Slow landing pages, broken conversion pixels, untracked funnels, and poor user experience cost businesses thousands of dollars in lost ad spend every month.
            </p>
            <p>
              Having managed technology operations at <strong className="text-white">Riich Me</strong> and served as General Manager for <strong className="text-white">KHB Media PLC</strong>, I bring a unique dual lens to every client engagement:
            </p>

            <ul className="space-y-3 pt-2">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Technical Excellence:</strong> Clean code, high speed optimization, proper Meta Pixel / Google Tag Manager data architecture, and server reliability.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Commercial Acumen:</strong> Customer psychology, offer design, targeted audience segmentation, and sales funnel mechanics that boost conversion rates.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Executive Leadership:</strong> Managing multi-disciplinary creative teams (video, animation, design, copy) to deliver cohesive, multi-channel branding.</span>
              </li>
            </ul>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="/Resume-CHAMNAB-MEY.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-slate-800 hover:bg-slate-750 text-emerald-400 border border-emerald-500/30 hover:border-emerald-500/60 transition-all shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>View Complete CV / Resume (PDF)</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
              >
                <span>Discuss Your Project</span>
                <ArrowUpRight className="w-4 h-4 text-emerald-400" />
              </a>
            </div>
          </div>

          {/* Education & Credentials */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-slate-950/70 p-6 sm:p-8 rounded-3xl border border-slate-800">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Formal Education</h4>
                  <p className="text-xs text-slate-400">Specialized in Information Technology & Management</p>
                </div>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-slate-800 pl-4 relative">
                    <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-cyan-400" />
                    <span className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">{edu.period}</span>
                    <h5 className="text-base font-bold text-white mt-0.5">{edu.degree}</h5>
                    <p className="text-sm font-medium text-slate-400">{edu.institution}</p>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/30 to-slate-900 border border-emerald-500/20 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400 shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h5 className="text-sm font-bold text-white">Full-Stack Capability Guaranteed</h5>
                <p className="text-xs text-slate-400 mt-0.5">
                  Fluent in English & Khmer. Dedicated to delivering measurable ROI and actionable reporting for every client.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Career Experience Timeline */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Career Leadership & Milestones</h3>
              <p className="text-sm text-slate-400">Track record of leading operations, teams, and high-impact campaigns</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {careerTimeline.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-950/70 p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-emerald-400 font-semibold border border-slate-700">
                      {item.period}
                    </span>
                    <span className="text-slate-400">{item.location}</span>
                  </div>
                  <h4 className="text-lg font-bold text-white">{item.role}</h4>
                  <p className="text-sm font-medium text-cyan-400 mb-4">{item.company}</p>

                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-400 font-bold">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
