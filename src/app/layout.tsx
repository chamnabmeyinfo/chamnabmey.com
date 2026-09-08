import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CHAMNAB MEY — Senior Digital Marketing Strategist & Growth Engineer',
  description:
    'Official portfolio of Chamnab Mey. Senior Digital Marketing Strategist, Performance Ad Buyer (Meta & Google), and Full-Stack Web Developer in Phnom Penh, Cambodia.',
  keywords: [
    'Chamnab Mey',
    'Digital Marketing Cambodia',
    'SEO Specialist Phnom Penh',
    'Facebook Ads Specialist Cambodia',
    'Google Ads Manager Phnom Penh',
    'Web Developer Cambodia',
    'Performance Marketing Consultant',
    'Meta CAPI Specialist',
  ],
  authors: [{ name: 'CHAMNAB MEY', url: 'https://chamnabmey.com' }],
  creator: 'CHAMNAB MEY',
  metadataBase: new URL('https://chamnabmey.com'),
  openGraph: {
    title: 'CHAMNAB MEY — Senior Digital Marketing Strategist & Growth Engineer',
    description:
      'Data-driven performance marketing, conversion-focused web architecture, and full-funnel customer acquisition systems.',
    url: 'https://chamnabmey.com',
    siteName: 'CHAMNAB MEY',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CHAMNAB MEY — Senior Digital Marketing Strategist',
    description:
      'Scaling businesses through data-driven performance marketing, Meta/Google ads, and conversion web systems.',
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
      <body className="bg-[#141414] text-white antialiased selection:bg-[#139BFD] selection:text-white relative">
        {children}
      </body>
    </html>
  );
}
