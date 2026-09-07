'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type UIStyle =
  | 'minimalism'
  | 'maximalism'
  | 'flat'
  | 'neumorphism'
  | 'claymorphism'
  | 'aurora'
  | 'brutalism'
  | 'collage'
  | 'skeuomorphism'
  | 'retro'
  | 'glassmorphism';

export interface StyleMeta {
  id: UIStyle;
  num: string;
  name: string;
  tagline: string;
  badge: string;
  accentColor: string;
  bgPreview: string;
}

export const STYLES_LIST: StyleMeta[] = [
  {
    id: 'minimalism',
    num: '01',
    name: 'Minimalism',
    tagline: 'Warm gallery canvas, hairline borders, pure negative space',
    badge: 'Default Corporate',
    accentColor: '#111111',
    bgPreview: '#FAFAFA',
  },
  {
    id: 'maximalism',
    num: '02',
    name: 'Maximalism',
    tagline: 'Vibrant neon stickers, high-energy pop gradients, intense contrast',
    badge: 'High Energy',
    accentColor: '#FF0055',
    bgPreview: '#120024',
  },
  {
    id: 'flat',
    num: '03',
    name: 'Flat Design',
    tagline: 'Pure 2D geometry, zero drop shadows, solid Swiss color blocks',
    badge: 'Swiss Modern',
    accentColor: '#3498DB',
    bgPreview: '#ECF0F1',
  },
  {
    id: 'neumorphism',
    num: '04',
    name: 'Neumorphism',
    tagline: 'Soft extruded matte silicone, subtle dual inner/outer shadows',
    badge: 'Tactile Soft UI',
    accentColor: '#4C6EF5',
    bgPreview: '#E0E5EC',
  },
  {
    id: 'claymorphism',
    num: '05',
    name: 'Claymorphism',
    tagline: 'Inflated 3D rounded shapes, pastel surfaces, friendly toy-like curves',
    badge: '3D Inflated',
    accentColor: '#FF6B6B',
    bgPreview: '#F4F5FB',
  },
  {
    id: 'aurora',
    num: '06',
    name: 'Aurora UI',
    tagline: 'Luminous mesh gradients, ambient glowing backdrop, sleek glass cards',
    badge: 'Glowing Dark',
    accentColor: '#00F0FF',
    bgPreview: '#0A0A0F',
  },
  {
    id: 'brutalism',
    num: '07',
    name: 'Brutalism UI',
    tagline: 'Thick 3px black borders, hard offset black shadows, electric yellow pops',
    badge: 'Neo-Brutalism',
    accentColor: '#FFE600',
    bgPreview: '#F5F5ED',
  },
  {
    id: 'collage',
    num: '08',
    name: 'Collage Art',
    tagline: 'Torn paper edges, tape textures, vintage postal stamps, serif headlines',
    badge: 'Mixed Media',
    accentColor: '#D9534F',
    bgPreview: '#F5EFE6',
  },
  {
    id: 'skeuomorphism',
    num: '09',
    name: 'Skeuomorphism',
    tagline: 'Realistic metallic/leather textures, glossy beveled buttons with highlights',
    badge: 'Realistic Tactile',
    accentColor: '#3B82F6',
    bgPreview: '#252930',
  },
  {
    id: 'retro',
    num: '10',
    name: 'Retro Y2K',
    tagline: 'Windows 95 beveled windows, pixel monospace type, CRT desktop vibe',
    badge: '90s Desktop OS',
    accentColor: '#000080',
    bgPreview: '#008080',
  },
  {
    id: 'glassmorphism',
    num: '11',
    name: 'Glassmorphism',
    tagline: 'Frosted translucent blurs, multi-layered depth, specular edge reflections',
    badge: 'Frosted Glass',
    accentColor: '#38BDF8',
    bgPreview: '#0B0F19',
  },
];

interface StyleContextType {
  currentStyle: UIStyle;
  setStyle: (style: UIStyle) => void;
  styleMeta: StyleMeta;
  stylesList: StyleMeta[];
}

const StyleContext = createContext<StyleContextType | undefined>(undefined);

export function StyleProvider({ children }: { children: React.ReactNode }) {
  const [currentStyle, setCurrentStyleState] = useState<UIStyle>('minimalism');

  // Load style from URL parameter or localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const urlStyle = urlParams.get('style') as UIStyle;
      
      const validStyleIds = STYLES_LIST.map((s) => s.id);
      
      if (urlStyle && validStyleIds.includes(urlStyle)) {
        setCurrentStyleState(urlStyle);
        document.documentElement.setAttribute('data-style', urlStyle);
        return;
      }

      const savedStyle = localStorage.getItem('chamnabmey_ui_style') as UIStyle;
      if (savedStyle && validStyleIds.includes(savedStyle)) {
        setCurrentStyleState(savedStyle);
        document.documentElement.setAttribute('data-style', savedStyle);
      } else {
        document.documentElement.setAttribute('data-style', 'minimalism');
      }
    }
  }, []);

  const setStyle = (style: UIStyle) => {
    setCurrentStyleState(style);
    if (typeof window !== 'undefined') {
      localStorage.setItem('chamnabmey_ui_style', style);
      document.documentElement.setAttribute('data-style', style);
      
      // Update URL query without full reload
      const url = new URL(window.location.href);
      url.searchParams.set('style', style);
      window.history.replaceState({}, '', url.toString());
    }
  };

  const styleMeta = STYLES_LIST.find((s) => s.id === currentStyle) || STYLES_LIST[0];

  return (
    <StyleContext.Provider
      value={{
        currentStyle,
        setStyle,
        styleMeta,
        stylesList: STYLES_LIST,
      }}
    >
      {children}
    </StyleContext.Provider>
  );
}

export function useStyle() {
  const context = useContext(StyleContext);
  if (!context) {
    throw new Error('useStyle must be used within a StyleProvider');
  }
  return context;
}
