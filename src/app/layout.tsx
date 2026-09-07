import type { Metadata } from 'next';
import './globals.css';
import { StyleProvider } from '@/context/StyleContext';

export const metadata: Metadata = {
  title: 'CHAMNAB MEY — Digital Marketing Strategist & Growth Engineer',
  description:
    'Official portfolio of Chamnab Mey. Senior Digital Marketing Strategist, Performance Ad Buyer (Meta & Google), and Full-Stack Web Developer in Phnom Penh, Cambodia.',
  keywords: [
    'Chamnab Mey',
    'Digital Marketing Cambodia',
    'SEO Specialist Phnom Penh',
    'Facebook Ads Specialist',
    'Google Ads Manager',
    'Web Developer Cambodia',
    'Performance Marketing',
  ],
  authors: [{ name: 'CHAMNAB MEY', url: 'https://chamnabmey.com' }],
  creator: 'CHAMNAB MEY',
  metadataBase: new URL('https://chamnabmey.com'),
  openGraph: {
    title: 'CHAMNAB MEY — Digital Marketing Strategist & Growth Engineer',
    description:
      'Data-driven performance marketing, conversion-focused web architecture, and full-funnel customer acquisition systems.',
    url: 'https://chamnabmey.com',
    siteName: 'CHAMNAB MEY',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CHAMNAB MEY — Digital Marketing Strategist',
    description:
      'Scaling businesses through data-driven performance marketing and conversion web systems.',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" data-style="minimalism">
      <body className="theme-canvas antialiased selection:bg-[#111111] selection:text-white relative">
        <StyleProvider>
          {/* Ambient Glow Atmosphere for Aurora & Glassmorphism styles */}
          <div className="aurora-glow-container fixed inset-0 pointer-events-none -z-10 overflow-hidden">
            <div className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-[#7928CA]/25 blur-[120px]" />
            <div className="absolute top-[30%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-[#0070F3]/20 blur-[130px]" />
            <div className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-[#FF0080]/15 blur-[140px]" />
          </div>

          {children}
        </StyleProvider>
      </body>
    </html>
  );
}
