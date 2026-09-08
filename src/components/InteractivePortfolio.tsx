"use client";

import React, { useState } from 'react';
import { ProjectItem } from '@/data/portfolioContent';

interface InteractivePortfolioProps {
  projects: ProjectItem[];
}

export default function InteractivePortfolio({ projects }: InteractivePortfolioProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'meta' | 'tracking' | 'cro' | 'ecommerce'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter(p => p.category === activeTab || p.category === 'all');

  const categories = [
    { id: 'all', label: 'All Case Studies', count: projects.length },
    { id: 'meta', label: 'Meta & Paid Ads', count: projects.filter(p => p.category === 'meta' || p.category === 'all').length },
    { id: 'tracking', label: 'Conversion API & Tracking', count: projects.filter(p => p.category === 'tracking').length },
    { id: 'cro', label: 'Sales Funnels & CRO', count: projects.filter(p => p.category === 'cro').length },
    { id: 'ecommerce', label: 'E-Commerce Growth', count: projects.filter(p => p.category === 'ecommerce').length },
  ] as const;

  return (
    <section className="latest-portfolio-area custom-column-grid tmp-section-gap" id="portfolio">
      <div className="container">
        {/* Section Head */}
        <div className="section-head mb--60 text-center">
          <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
            <span className="subtitle theme-gradient">PROVEN PERFORMANCE CASE STUDIES</span>
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            Featured Growth & <br /> Acquisition Campaigns
          </h2>
          <p className="description section-sm tmp-scroll-trigger tmp-fade-in animation-order-3" style={{ maxWidth: '640px', margin: '0 auto' }}>
            Real-world commercial impact: scaling ROAS, eliminating tracking blind spots post-iOS14, and generating high-intent customer pipelines across Cambodia and Southeast Asia.
          </p>
        </div>

        {/* Custom Interactive Tab Bar */}
        <div className="latest-portfolio-tabs-area">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '10px',
              marginBottom: '40px',
            }}
          >
            {categories.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  type="button"
                  style={{
                    padding: '10px 22px',
                    borderRadius: '500px',
                    backgroundColor: isActive ? '#139BFD' : 'rgba(255, 255, 255, 0.05)',
                    color: isActive ? '#FFFFFF' : 'inherit',
                    border: isActive ? '1.5px solid #139BFD' : '1.5px solid rgba(255, 255, 255, 0.1)',
                    cursor: 'pointer',
                    fontWeight: 700,
                    fontSize: '13px',
                    transition: 'all 0.25s ease',
                    boxShadow: isActive ? '0 8px 24px rgba(19, 155, 253, 0.35)' : 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <span>{cat.label}</span>
                  <span
                    style={{
                      fontSize: '11px',
                      padding: '2px 8px',
                      borderRadius: '500px',
                      backgroundColor: isActive ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <div className="row g-4 animation-action-3">
            {filteredProjects.map((project, idx) => (
              <div key={project.id} className="col-lg-6 col-md-6">
                <div
                  className="latest-portfolio-card-style-two image-box-hover active tmponhover"
                  style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    borderRadius: '20px',
                    overflow: 'hidden',
                  }}
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Thumbnail */}
                  <div className="portfoli-card-img">
                    <div className="img-box v2" style={{ position: 'relative' }}>
                      <img
                        className="w-100"
                        src={project.image}
                        alt={project.title}
                        style={{ height: '280px', objectFit: 'cover' }}
                      />
                      {/* Metric Badge Overlay */}
                      {project.metrics && (
                        <div
                          style={{
                            position: 'absolute',
                            top: '16px',
                            left: '16px',
                            padding: '6px 14px',
                            borderRadius: '500px',
                            backgroundColor: 'rgba(6, 19, 27, 0.85)',
                            backdropFilter: 'blur(8px)',
                            border: '1px solid rgba(19, 155, 253, 0.5)',
                            color: '#42AFFD',
                            fontWeight: 700,
                            fontSize: '11px',
                            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                          }}
                        >
                          🔥 {project.metrics.split('|')[0].trim()}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="portfolio-card-content-wrap" style={{ padding: '24px' }}>
                    <div className="content-left">
                      <h3 className="portfolio-card-title" style={{ fontSize: '18px', fontWeight: 800, lineHeight: 1.4, marginBottom: '12px' }}>
                        {project.title}
                      </h3>
                      <p style={{ fontSize: '13px', color: '#BEBEBE', lineHeight: 1.6, marginBottom: '16px' }}>
                        {project.description}
                      </p>

                      <div className="tag-items">
                        <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', padding: 0, margin: 0, listStyle: 'none' }}>
                          {project.tags.map((tag) => (
                            <li key={tag}>
                              <span
                                style={{
                                  fontSize: '11px',
                                  padding: '4px 10px',
                                  borderRadius: '6px',
                                  backgroundColor: 'rgba(19, 155, 253, 0.1)',
                                  border: '1px solid rgba(19, 155, 253, 0.25)',
                                  color: '#42AFFD',
                                  fontWeight: 600,
                                }}
                              >
                                {tag}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div style={{ marginTop: '20px' }}>
                      <button
                        type="button"
                        className="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round btn-md w-100"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                      >
                        <div className="icon-reverse-wrapper">
                          <span className="btn-text">View Full Case Breakdown</span>
                          <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                          <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Study Modal Popup */}
      {selectedProject && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999999,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            style={{
              backgroundColor: '#0A1B28',
              border: '1.5px solid rgba(19, 155, 253, 0.4)',
              borderRadius: '24px',
              maxWidth: '720px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              color: '#FFFFFF',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6)',
              padding: '36px',
              position: 'relative',
              animation: 'zoomIn 0.25s ease-out',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: '#FFFFFF',
                cursor: 'pointer',
                fontSize: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              ✕
            </button>

            {/* Modal Content */}
            <div style={{ marginBottom: '16px' }}>
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: '#42AFFD',
                  letterSpacing: '1px',
                }}
              >
                Case Study Highlight
              </span>
              <h2 style={{ fontSize: '26px', fontWeight: 800, marginTop: '8px', lineHeight: 1.3 }}>
                {selectedProject.title}
              </h2>
            </div>

            {/* Highlight Banner */}
            {selectedProject.metrics && (
              <div
                style={{
                  padding: '16px 20px',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(19, 155, 253, 0.12)',
                  border: '1px solid rgba(19, 155, 253, 0.35)',
                  marginBottom: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <span style={{ fontSize: '24px' }}>📈</span>
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: '#42AFFD', textTransform: 'uppercase' }}>Verified Results & Metrics</div>
                  <div style={{ fontSize: '15px', fontWeight: 800, color: '#FFFFFF' }}>{selectedProject.metrics}</div>
                </div>
              </div>
            )}

            {/* Image Preview */}
            <div style={{ borderRadius: '16px', overflow: 'hidden', marginBottom: '24px', maxHeight: '320px' }}>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Description & Strategy */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '8px', color: '#42AFFD' }}>Executive Summary & Strategy</h4>
              <p style={{ fontSize: '14px', color: '#BEBEBE', lineHeight: 1.7 }}>
                {selectedProject.description}
              </p>
            </div>

            {/* Tags */}
            <div style={{ marginBottom: '32px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '10px', color: '#BEBEBE' }}>Core Technologies & Platforms</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: '6px 14px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      fontSize: '12px',
                      fontWeight: 600,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom CTA */}
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a
                href="#contacts"
                onClick={() => setSelectedProject(null)}
                className="tmp-btn hover-icon-reverse radius-round"
                style={{ padding: '12px 28px', flex: 1, textAlign: 'center', textDecoration: 'none' }}
              >
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">Execute Similar Strategy for Your Brand</span>
                  <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                  <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
