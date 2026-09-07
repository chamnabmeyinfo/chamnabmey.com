import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CHAMNAB MEY | Senior Digital Marketing & Web Growth Strategist',
  description:
    'Official portfolio of Chamnab Mey. Digital Growth Strategist, Performance Ad Buyer (Meta & Google), and Full-Stack Web Developer based in Phnom Penh, Cambodia. Proven track record driving customer acquisition and ROI.',
  keywords: [
    'Chamnab Mey',
    'Digital Marketing Cambodia',
    'SEO Specialist Phnom Penh',
    'Facebook Ads Specialist',
    'Google Ads Manager',
    'Web Developer Cambodia',
    'Performance Marketing',
    'Solis Cambodia',
  ],
  authors: [{ name: 'CHAMNAB MEY', url: 'https://chamnabmey.com' }],
  creator: 'CHAMNAB MEY',
  metadataBase: new URL('https://chamnabmey.com'),
  openGraph: {
    title: 'CHAMNAB MEY | Senior Digital Marketing & Web Growth Strategist',
    description:
      'Transforming clicks into revenue with data-driven marketing funnels and high-performance web engineering. Explore case studies and book a consultation.',
    url: 'https://chamnabmey.com',
    siteName: 'CHAMNAB MEY',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CHAMNAB MEY | Senior Digital Marketer & Web Growth Strategist',
    description:
      'Scaling businesses with data-driven funnels, Google & Meta Ads, and high-performance websites.',
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
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#F2EEED] text-[#0F0F0F] antialiased selection:bg-[#9175FF] selection:text-white">
        {children}
      </body>
    </html>
  );
}
