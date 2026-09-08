import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Chamnab Mey — Senior Digital Marketing Strategist & Performance Marketer',
  description:
    'Official portfolio of Chamnab Mey. Senior Digital Marketing Strategist, Performance Ad Buyer (Meta & Google), and Full-Stack Web Architect based in Phnom Penh, Cambodia.',
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
  authors: [{ name: 'Chamnab Mey', url: 'https://chamnabmey.com' }],
  creator: 'Chamnab Mey',
  metadataBase: new URL('https://chamnabmey.com'),
  openGraph: {
    title: 'Chamnab Mey — Senior Digital Marketing Strategist & Growth Engineer',
    description:
      'Data-driven performance marketing, conversion-focused web architecture, and full-funnel customer acquisition systems.',
    url: 'https://chamnabmey.com',
    siteName: 'Chamnab Mey',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chamnab Mey — Senior Digital Marketing Strategist',
    description:
      'Scaling businesses through data-driven performance marketing, Meta/Google ads, and conversion web systems.',
  },
  icons: {
    icon: '/assets/images/favicon.svg',
    shortcut: '/assets/images/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" type="image/x-icon" href="/assets/images/favicon.svg" />
        {/* Bootstrap min css */}
        <link rel="stylesheet" href="/assets/css/vendor/fontawesome.css" />
        <link rel="stylesheet" href="/assets/css/plugins/swiper.css" />
        <link rel="stylesheet" href="/assets/css/plugins/odometer.css" />
        <link rel="stylesheet" href="/assets/css/vendor/animate.min.css" />
        <link rel="stylesheet" href="/assets/css/vendor/bootstrap.min.css" />
        {/* custom css */}
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>

      <body className="tmp-white-version">
        {children}

        {/* Template Scripts */}
        <script src="/assets/js/vendor/modernizer.js" defer></script>
        <script src="/assets/js/vendor/jquery.js" defer></script>
        <script src="/assets/js/vendor/jquery-ui.min.js" defer></script>
        <script src="/assets/js/vendor/waypoints.min.js" defer></script>
        <script src="/assets/js/plugins/odometer.js" defer></script>
        <script src="/assets/js/vendor/appear.js" defer></script>
        <script src="/assets/js/vendor/jquery-one-page-nav.js" defer></script>
        <script src="/assets/js/vendor/tilt.js" defer></script>
        <script src="/assets/js/plugins/swiper.js" defer></script>
        <script src="/assets/js/plugins/gsap.js" defer></script>
        <script src="/assets/js/plugins/splittext.js" defer></script>
        <script src="/assets/js/plugins/scrolltigger.js" defer></script>
        <script src="/assets/js/plugins/scrolltoplugins.js" defer></script>
        <script src="/assets/js/plugins/smoothscroll.js" defer></script>
        <script src="/assets/js/vendor/twinmax.js" defer></script>
        <script src="/assets/js/vendor/bootstrap.min.js" defer></script>
        <script src="/assets/js/vendor/waw.js" defer></script>
        <script src="/assets/js/vendor/intro-video.js" defer></script>
        <script src="/assets/js/plugins/isotop.js" defer></script>
        <script src="/assets/js/plugins/animation.js" defer></script>
        <script src="/assets/js/plugins/contact.form.js" defer></script>
        <script src="/assets/js/vendor/backtop.js" defer></script>
        <script src="/assets/js/plugins/text-type.js" defer></script>
        <script src="/assets/js/main.js" defer></script>
      </body>
    </html>
  );
}
