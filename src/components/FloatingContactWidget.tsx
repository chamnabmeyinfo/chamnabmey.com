"use client";

import React, { useState } from 'react';

interface FloatingContactWidgetProps {
  phone?: string;
  telegram?: string;
  telegramUser?: string;
  email?: string;
}

export default function FloatingContactWidget({
  phone = '+855 15 705 703',
  telegram = 'https://t.me/chamnabmey',
  telegramUser = '@chamnabmey',
}: FloatingContactWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const cleanPhone = phone.replace(/[^0-9]/g, '');

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '92px',
        right: '28px',
        zIndex: 99998,
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      {/* Quick Action Popup Panel */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            bottom: '68px',
            right: '0',
            width: '290px',
            backgroundColor: 'rgba(6, 19, 27, 0.95)',
            backdropFilter: 'blur(16px)',
            borderRadius: '20px',
            border: '1.5px solid rgba(19, 155, 253, 0.35)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.45)',
            padding: '18px',
            color: '#FFFFFF',
            animation: 'fadeInUp 0.25s ease-out forwards',
          }}
        >
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#00E676', display: 'inline-block', boxShadow: '0 0 10px #00E676' }}></span>
              <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase', color: '#42AFFD' }}>Direct Connect</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{ background: 'transparent', border: 'none', color: '#BEBEBE', cursor: 'pointer', fontSize: '14px' }}
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          <p style={{ fontSize: '12px', color: '#BEBEBE', lineHeight: '1.5', margin: '0 0 14px 0' }}>
            Need fast campaign scaling? Reach Chamnab Mey directly on your preferred channel:
          </p>

          {/* Action Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {/* Telegram */}
            <a
              href={telegram}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px 14px',
                borderRadius: '12px',
                backgroundColor: 'rgba(0, 136, 204, 0.15)',
                border: '1px solid rgba(0, 136, 204, 0.3)',
                color: '#FFFFFF',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 136, 204, 0.3)';
                e.currentTarget.style.transform = 'translateX(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 136, 204, 0.15)';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
            >
              <i className="fa-brands fa-telegram" style={{ fontSize: '22px', color: '#0088cc' }}></i>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 700 }}>Telegram Direct</div>
                <div style={{ fontSize: '11px', color: '#42AFFD' }}>{telegramUser} (Instant response)</div>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${cleanPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px 14px',
                borderRadius: '12px',
                backgroundColor: 'rgba(37, 211, 102, 0.15)',
                border: '1px solid rgba(37, 211, 102, 0.3)',
                color: '#FFFFFF',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(37, 211, 102, 0.3)';
                e.currentTarget.style.transform = 'translateX(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(37, 211, 102, 0.15)';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
            >
              <i className="fa-brands fa-whatsapp" style={{ fontSize: '22px', color: '#25D366' }}></i>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 700 }}>WhatsApp Chat</div>
                <div style={{ fontSize: '11px', color: '#25D366' }}>{phone}</div>
              </div>
            </a>

            {/* Direct Phone Call */}
            <a
              href={`tel:${cleanPhone}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px 14px',
                borderRadius: '12px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#FFFFFF',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
                e.currentTarget.style.transform = 'translateX(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
            >
              <i className="fa-solid fa-phone" style={{ fontSize: '18px', color: '#42AFFD' }}></i>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 700 }}>Direct Phone</div>
                <div style={{ fontSize: '11px', color: '#BEBEBE' }}>Available Business Hours</div>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Quick Connect Menu"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '12px 20px',
          borderRadius: '500px',
          backgroundColor: '#06131B',
          color: '#FFFFFF',
          border: '1.8px solid #139BFD',
          boxShadow: '0 10px 30px rgba(19, 155, 253, 0.35)',
          cursor: 'pointer',
          fontWeight: 700,
          fontSize: '13px',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px) scale(1.04)';
          e.currentTarget.style.boxShadow = '0 15px 40px rgba(19, 155, 253, 0.5)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.boxShadow = '0 10px 30px rgba(19, 155, 253, 0.35)';
        }}
      >
        <span
          style={{
            width: '9px',
            height: '9px',
            borderRadius: '50%',
            backgroundColor: '#00E676',
            boxShadow: '0 0 10px #00E676',
            display: 'inline-block',
          }}
        ></span>
        <i className="fa-regular fa-comment-dots" style={{ fontSize: '16px', color: '#42AFFD' }}></i>
        <span>{isOpen ? 'Close' : 'Quick Connect'}</span>
      </button>
    </div>
  );
}
