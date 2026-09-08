"use client";

import React, { useState } from 'react';

interface InteractiveContactProps {
  profile: {
    email: string;
    phone: string;
    location: string;
    telegram: string;
    telegramUser: string;
  };
}

export default function InteractiveContact({ profile }: InteractiveContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);

  const cleanPhone = profile.phone.replace(/\s+/g, '');

  const copyToClipboard = (text: string, field: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setIsSuccess(true);
        setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
      } else {
        const data = await res.text();
        setErrorMessage(data || 'Failed to submit form. Please try again or message via Telegram.');
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="get-in-touch-area tmp-section-gapTop" id="contacts">
      <div className="container">
        <div className="get-in-touch-wrapper position-relative overflow-hidden">
          <div className="row g-5 align-items-center">
            
            {/* Left Column: Direct Contact Details & Quick Badges */}
            <div className="col-lg-5">
              <div className="contact-inner">
                <div className="section-head section-head-one-side text-align-left tmp-scroll-trigger tmp-fade-in animation-order-1">
                  <span className="title-left">Start a High-ROAS Partnership</span>
                  <h3 style={{ fontSize: '26px', fontWeight: 800, marginTop: '8px', lineHeight: 1.3 }}>
                    Let&apos;s Engineer Your <span className="theme-gradient">Growth Engine</span>
                  </h3>
                  <p style={{ fontSize: '14px', color: '#BEBEBE', marginTop: '12px', lineHeight: 1.6 }}>
                    Whether you need a full-funnel Meta & Google ad takeover, server-side CAPI tracking setup, or custom conversion architecture, I respond within 24 hours.
                  </p>
                </div>

                <ul className="ft-link v2 mt--30">
                  {/* Email with 1-Click Copy */}
                  <li className="tmp-scroll-trigger tmp-fade-in animation-order-1 tmp-link-animation" style={{ position: 'relative' }}>
                    <span className="ft-icon"><i className="fa-solid fa-envelope"></i></span>
                    <div className="ft-link-wrap" style={{ width: '100%' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <h4 className="link-title">E-mail:</h4>
                        <button
                          type="button"
                          onClick={() => copyToClipboard(profile.email, 'email')}
                          style={{
                            background: 'transparent',
                            border: 'none',
                            color: copiedField === 'email' ? '#00E676' : '#42AFFD',
                            fontSize: '11px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            fontWeight: 600,
                          }}
                        >
                          <i className={copiedField === 'email' ? 'fa-solid fa-check' : 'fa-regular fa-copy'}></i>
                          {copiedField === 'email' ? 'Copied!' : 'Copy'}
                        </button>
                      </div>
                      <a href={`mailto:${profile.email}`}>{profile.email}</a>
                    </div>
                  </li>

                  {/* Location */}
                  <li className="tmp-scroll-trigger tmp-fade-in animation-order-2">
                    <span className="ft-icon"><i className="fa-solid fa-location-dot"></i></span>
                    <div className="ft-link-wrap">
                      <h4 className="link-title">Location:</h4>
                      <div>{profile.location}</div>
                    </div>
                  </li>

                  {/* Phone with 1-Click Copy */}
                  <li className="tmp-scroll-trigger tmp-fade-in animation-order-3 tmp-link-animation">
                    <span className="ft-icon"><i className="fa-solid fa-phone"></i></span>
                    <div className="ft-link-wrap" style={{ width: '100%' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <h4 className="link-title">Direct Phone:</h4>
                        <button
                          type="button"
                          onClick={() => copyToClipboard(profile.phone, 'phone')}
                          style={{
                            background: 'transparent',
                            border: 'none',
                            color: copiedField === 'phone' ? '#00E676' : '#42AFFD',
                            fontSize: '11px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            fontWeight: 600,
                          }}
                        >
                          <i className={copiedField === 'phone' ? 'fa-solid fa-check' : 'fa-regular fa-copy'}></i>
                          {copiedField === 'phone' ? 'Copied!' : 'Copy'}
                        </button>
                      </div>
                      <a href={`tel:${cleanPhone}`}>{profile.phone}</a>
                    </div>
                  </li>
                </ul>

                {/* Instant Social / Messaging Badges */}
                <div style={{ marginTop: '30px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  <a
                    href={profile.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px 16px',
                      borderRadius: '500px',
                      backgroundColor: 'rgba(0, 136, 204, 0.15)',
                      border: '1px solid rgba(0, 136, 204, 0.35)',
                      color: '#FFFFFF',
                      fontSize: '13px',
                      fontWeight: 600,
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 136, 204, 0.3)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 136, 204, 0.15)'}
                  >
                    <i className="fa-brands fa-telegram" style={{ color: '#0088cc', fontSize: '16px' }}></i>
                    <span>Chat on Telegram</span>
                  </a>

                  <a
                    href={`https://wa.me/${cleanPhone.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px 16px',
                      borderRadius: '500px',
                      backgroundColor: 'rgba(37, 211, 102, 0.15)',
                      border: '1px solid rgba(37, 211, 102, 0.35)',
                      color: '#FFFFFF',
                      fontSize: '13px',
                      fontWeight: 600,
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(37, 211, 102, 0.3)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(37, 211, 102, 0.15)'}
                  >
                    <i className="fa-brands fa-whatsapp" style={{ color: '#25D366', fontSize: '16px' }}></i>
                    <span>WhatsApp Me</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Interactive Form */}
            <div className="col-lg-7">
              <div className="contact-inner">
                <div className="section-head section-head-one-side text-align-left tmp-scroll-trigger tmp-fade-in animation-order-1">
                  <span className="title">PROJECT BRIEF & CONSULTATION</span>
                </div>

                <div className="contact-form">
                  {isSuccess ? (
                    <div
                      style={{
                        padding: '40px 30px',
                        borderRadius: '16px',
                        backgroundColor: 'rgba(0, 230, 118, 0.08)',
                        border: '1.5px solid rgba(0, 230, 118, 0.4)',
                        textAlign: 'center',
                        color: '#FFFFFF',
                        animation: 'fadeIn 0.3s ease',
                      }}
                    >
                      <div
                        style={{
                          width: '64px',
                          height: '64px',
                          borderRadius: '50%',
                          backgroundColor: '#00E676',
                          color: '#06131B',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '28px',
                          margin: '0 auto 20px auto',
                          boxShadow: '0 0 25px rgba(0, 230, 118, 0.5)',
                        }}
                      >
                        ✓
                      </div>
                      <h4 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '10px' }}>
                        Inquiry Sent Successfully!
                      </h4>
                      <p style={{ color: '#BEBEBE', fontSize: '15px', lineHeight: 1.6, maxWidth: '440px', margin: '0 auto 24px auto' }}>
                        Thank you for reaching out! Chamnab Mey has received your campaign brief and will review your requirements promptly.
                      </p>
                      <button
                        type="button"
                        onClick={() => setIsSuccess(false)}
                        className="tmp-btn hover-icon-reverse radius-round"
                        style={{ padding: '10px 24px', fontSize: '13px' }}
                      >
                        <span className="icon-reverse-wrapper">
                          <span className="btn-text">Send Another Message</span>
                          <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                          <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                        </span>
                      </button>
                    </div>
                  ) : (
                    <form className="tmp-dynamic-form" onSubmit={handleSubmit}>
                      {errorMessage && (
                        <div
                          style={{
                            padding: '12px 18px',
                            borderRadius: '8px',
                            backgroundColor: 'rgba(255, 68, 68, 0.15)',
                            border: '1px solid rgba(255, 68, 68, 0.4)',
                            color: '#FF7070',
                            marginBottom: '20px',
                            fontSize: '14px',
                          }}
                        >
                          {errorMessage}
                        </div>
                      )}

                      <div className="contact-form-wrapper row g-3">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              className="input-field"
                              placeholder="Your Full Name *"
                              type="text"
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              className="input-field"
                              placeholder="Phone / WhatsApp Number *"
                              type="text"
                              required
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              className="input-field"
                              placeholder="Business Email *"
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              className="input-field"
                              type="text"
                              placeholder="Service Needed (e.g. Meta Ads, CAPI, CRO)"
                              value={formData.subject}
                              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            />
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="form-group">
                            <textarea
                              className="input-field"
                              placeholder="Describe your current ad spend, challenges, and growth targets... *"
                              rows={4}
                              required
                              value={formData.message}
                              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            ></textarea>
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="tmp-button-here">
                            <button
                              className="tmp-btn hover-icon-reverse radius-round w-100"
                              type="submit"
                              disabled={isSubmitting}
                              style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                            >
                              <span className="icon-reverse-wrapper">
                                <span className="btn-text">
                                  {isSubmitting ? 'Sending Inquiry...' : 'Submit Campaign Brief'}
                                </span>
                                <span className="btn-icon">
                                  <i className={isSubmitting ? 'fa-solid fa-spinner fa-spin' : 'fa-sharp fa-regular fa-arrow-right'}></i>
                                </span>
                                <span className="btn-icon">
                                  <i className={isSubmitting ? 'fa-solid fa-spinner fa-spin' : 'fa-sharp fa-regular fa-arrow-right'}></i>
                                </span>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>

          </div>
          <div className="tmp-light light-top-left active"></div>
        </div>
      </div>
    </section>
  );
}
