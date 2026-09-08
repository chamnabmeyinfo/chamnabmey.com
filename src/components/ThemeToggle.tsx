"use client";

import React, { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('virtuo_theme');
    if (saved === 'dark') {
      setIsLight(false);
      document.body.classList.remove('tmp-white-version');
    } else {
      setIsLight(true);
      document.body.classList.add('tmp-white-version');
    }
  }, []);

  const toggleTheme = () => {
    if (isLight) {
      document.body.classList.remove('tmp-white-version');
      localStorage.setItem('virtuo_theme', 'dark');
      setIsLight(false);
    } else {
      document.body.classList.add('tmp-white-version');
      localStorage.setItem('virtuo_theme', 'light');
      setIsLight(true);
    }
  };

  if (!mounted) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '28px',
        left: '28px',
        zIndex: 99999,
      }}
    >
      <button
        onClick={toggleTheme}
        aria-label="Toggle Theme"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '10px 18px',
          borderRadius: '500px',
          backgroundColor: isLight ? '#06131B' : '#FFFFFF',
          color: isLight ? '#FFFFFF' : '#010A10',
          border: '1.5px solid rgba(19, 155, 253, 0.4)',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.25)',
          cursor: 'pointer',
          fontWeight: 600,
          fontSize: '13px',
          fontFamily: "'Montserrat', sans-serif",
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px) scale(1.03)';
          e.currentTarget.style.borderColor = '#139BFD';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.borderColor = 'rgba(19, 155, 253, 0.4)';
        }}
      >
        <span style={{ fontSize: '15px' }}>{isLight ? '🌙' : '☀️'}</span>
        <span>{isLight ? 'Dark Mode' : 'Light Mode'}</span>
      </button>
    </div>
  );
}
