import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#FAFAFA] text-[#111111] antialiased selection:bg-[#111111] selection:text-white">
        {children}
      </body>
    </html>
  );
}
