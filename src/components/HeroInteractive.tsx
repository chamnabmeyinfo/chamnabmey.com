"use client";

import React, { useState, useEffect } from 'react';

interface HeroInteractiveProps {
  roles: string[];
}

export default function HeroInteractive({ roles }: HeroInteractiveProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!roles || roles.length === 0) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [roles]);

  const currentRole = roles[index] || 'Digital Marketer';

  return (
    <span
      className="theme-gradient"
      style={{
        display: 'inline-block',
        transition: 'all 0.3s ease',
        fontWeight: 800,
      }}
    >
      {currentRole}
    </span>
  );
}
