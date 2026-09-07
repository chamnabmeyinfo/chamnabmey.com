'use client';

import React, { useState, useEffect } from 'react';
import { useStyle, UIStyle } from '@/context/StyleContext';
import { Palette, Check, ChevronUp, Sparkles, X, Share2, RotateCcw, Activity } from 'lucide-react';

const STYLE_PHYSICS: Record<UIStyle, string> = {
  minimalism: 'Silent Swiss Editorial Ease',
  maximalism: 'Continuous Neon Glow Pulse & Spring',
  flat: 'Instant Mechanical 2D Linear Snap',
  neumorphism: 'Physical Silicone Inset Depressions',
  claymorphism: 'Rubbery 3D Jelly Float & Squash',
  aurora: 'Atmospheric Northern Lights Fluid Drift',
  brutalism: 'Solid Black Shadow Collapse Snap',
  collage: 'Organic Paper Flutter & Tactile Tilts',
  skeuomorphism: 'Analog Hardware Specular Sheen Beam',
  retro: 'Windows 95 Bevel Inversion & CRT Blink',
  glassmorphism: 'Prismatic Frosted Glass Shimmer',
};

export default function StyleSwitcher() {
  const { currentStyle, setStyle, styleMeta, stylesList } = useStyle();
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Close drawer on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      const url = `${window.location.origin}${window.location.pathname}?style=${currentStyle}`;
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      {/* Floating Trigger Dock */}
      <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-neutral-900/90 text-white hover:bg-black border border-neutral-700/80 shadow-2xl backdrop-blur-md transition-all duration-200 hover:scale-105 group"
          aria-label="Toggle UI Style Lab"
        >
          <span
            className="w-3 h-3 rounded-full transition-transform group-hover:scale-110 shadow-sm"
            style={{ backgroundColor: styleMeta.accentColor }}
          />
          <span className="text-xs font-semibold tracking-wide">
            Style: <span className="font-bold text-amber-300">{styleMeta.name}</span>
          </span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/15 font-mono text-neutral-300">
            {styleMeta.num}/11
          </span>
          <ChevronUp
            className={`w-3.5 h-3.5 text-neutral-400 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
      </div>

      {/* Style Selection Tray Overlay / Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-3 sm:p-6 transition-opacity"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-3xl bg-neutral-900 border border-neutral-700/90 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden text-white flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-5 sm:p-6 border-b border-neutral-800 flex items-center justify-between bg-neutral-950/60">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Palette className="w-4 h-4 text-amber-400" />
                  <h3 className="text-base sm:text-lg font-extrabold tracking-tight text-white">
                    UI Design Style Lab (11 Styles + Signature Animations)
                  </h3>
                </div>
                <p className="text-xs text-neutral-400">
                  Select any design archetype to transform the visual styling and motion physics in real time.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setStyle('minimalism')}
                  className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium text-neutral-400 hover:text-white bg-neutral-800 hover:bg-neutral-700 transition-colors"
                  title="Reset to default"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Styles Grid */}
            <div className="p-4 sm:p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {stylesList.map((item) => {
                const isActive = currentStyle === item.id;
                const physics = STYLE_PHYSICS[item.id];
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setStyle(item.id);
                    }}
                    className={`relative p-3.5 rounded-xl text-left transition-all duration-200 border flex flex-col justify-between group ${
                      isActive
                        ? 'bg-neutral-800 border-amber-400/80 shadow-lg shadow-amber-400/10 ring-1 ring-amber-400/50'
                        : 'bg-neutral-900/80 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800/60'
                    }`}
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span
                            className="w-3.5 h-3.5 rounded-full border border-white/20 shadow-xs shrink-0"
                            style={{ backgroundColor: item.accentColor }}
                          />
                          <span className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                            {item.name}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-neutral-400">
                          {item.num}
                        </span>
                      </div>

                      <p className="text-[11px] text-neutral-400 leading-snug line-clamp-2">
                        {item.tagline}
                      </p>

                      <div className="flex items-center gap-1 text-[10px] text-amber-300/80 font-mono pt-1">
                        <Activity className="w-2.5 h-2.5 shrink-0" />
                        <span className="truncate">{physics}</span>
                      </div>
                    </div>

                    <div className="mt-3 pt-2 border-t border-neutral-800/70 flex items-center justify-between text-[10px]">
                      <span className="text-neutral-400 font-mono">
                        {item.badge}
                      </span>
                      {isActive ? (
                        <span className="flex items-center gap-1 font-bold text-amber-400">
                          <Check className="w-3 h-3" />
                          <span>Active</span>
                        </span>
                      ) : (
                        <span className="text-neutral-400 group-hover:text-white transition-colors">
                          Apply Style →
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Footer with Active Physics Banner & Share URL */}
            <div className="p-4 sm:p-5 border-t border-neutral-800 bg-neutral-950/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-neutral-400 text-center sm:text-left">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="truncate">
                  Active Physics:{' '}
                  <strong className="text-white">{STYLE_PHYSICS[currentStyle]}</strong>
                </span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={handleShare}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium text-neutral-200 bg-neutral-800 hover:bg-neutral-700 transition-colors"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{copied ? 'Link Copied! ✓' : 'Share Direct URL'}</span>
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full sm:w-auto px-5 py-2 rounded-xl text-xs font-bold text-black bg-white hover:bg-neutral-200 transition-colors"
                >
                  Apply & Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
