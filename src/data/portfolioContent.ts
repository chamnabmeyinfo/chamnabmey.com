export interface ProfileInfo {
  name: string;
  tagline: string;
  phone: string;
  email: string;
  telegram: string;
  telegramUser: string;
  linkedin: string;
  facebook: string;
  location: string;
  photo: string;
  resumeUrl: string;
  sidebarBio: string;
}

export interface HeroContent {
  greeting: string;
  titlePrefix: string;
  rotatingRoles: string[];
  description: string;
  badgeLeft: string;
  badgeRight: string;
}

export interface AboutContent {
  yearsExperience: number;
  adSpendManaged: string;
  title: string;
  description: string;
  card1Title: string;
  card1Desc: string;
  card2Title: string;
  card2Desc: string;
}

export interface SkillItem {
  name: string;
  percentage: number;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'all' | 'meta' | 'tracking' | 'cro' | 'ecommerce';
  tags: string[];
  description: string;
  metrics: string;
  image: string;
  link: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  score: number;
  icon: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  stars: number;
  avatar: string;
}

export interface BlogItem {
  id: string;
  title: string;
  author: string;
  date: string;
  comments: string;
  image: string;
  summary: string;
  content: string;
}

export interface PortfolioContent {
  profile: ProfileInfo;
  hero: HeroContent;
  statement: string;
  about: AboutContent;
  skills: {
    paidMedia: SkillItem[];
    tracking: SkillItem[];
  };
  projects: ProjectItem[];
  services: ServiceItem[];
  testimonials: TestimonialItem[];
  blog: BlogItem[];
  footer: {
    bio: string;
    newsletterPitch: string;
  };
}

export const defaultPortfolioContent: PortfolioContent = {
  profile: {
    name: 'Chamnab Mey',
    tagline: 'Solo Digital Marketer & Growth Strategist',
    phone: '+855 15 705 703',
    email: 'admin@chamnabmey.com',
    telegram: 'https://t.me/chamnabmey',
    telegramUser: '@chamnabmey',
    linkedin: 'https://www.linkedin.com/in/chamnabmey',
    facebook: 'https://facebook.com/chamnabmey',
    location: 'Phnom Penh, Cambodia',
    photo: '/images/chamnab-mey.jpg',
    resumeUrl: '/Resume-CHAMNAB-MEY.pdf',
    sidebarBio: 'Solo Digital Marketer specializing in high-ROAS Meta & Google Ad campaigns, server-side Conversion API (CAPI) tracking, and full-funnel sales conversion systems.'
  },
  hero: {
    greeting: "Welcome to My World",
    titlePrefix: 'Chamnab Mey, a Senior',
    rotatingRoles: [
      'Digital Marketer',
      'Growth Strategist',
      'Meta Ads Specialist',
      'Google Ads Buyer',
      'CAPI & Tracking Pro'
    ],
    description: 'Senior Digital Marketing Strategist & Performance Marketer with 10+ years scaling e-commerce, real estate, and retail brands through full-funnel Meta & Google campaigns and conversion web architecture.',
    badgeLeft: 'Paid Media',
    badgeRight: 'Growth Hacker'
  },
  statement: 'A high-performance marketing engine engineered to drive profitable customer acquisition, infallible server-side CAPI tracking, and scalable business revenue growth across Southeast Asia.',
  about: {
    yearsExperience: 10,
    adSpendManaged: '$1M+',
    title: 'Driving Measurable Growth Through Data & Performance',
    description: 'With over 10 years of leadership in digital marketing and web development, I bridge the gap between creative acquisition and technical architecture, helping businesses scale predictably.',
    card1Title: 'Performance Media',
    card1Desc: 'High-ROAS Meta & Google ad campaigns with server-side CAPI tracking.',
    card2Title: 'Full-Funnel CRO',
    card2Desc: 'High-converting landing pages and automated lead capture infrastructure.'
  },
  skills: {
    paidMedia: [
      { name: 'META ADS (FACEBOOK & INSTAGRAM)', percentage: 98 },
      { name: 'GOOGLE SEARCH & PERFORMANCE MAX', percentage: 94 },
      { name: 'TIKTOK ADS & CREATIVE TESTING', percentage: 90 },
      { name: 'LEAD GENERATION & SALES FUNNELS', percentage: 95 }
    ],
    tracking: [
      { name: 'META CONVERSION API (CAPI) & PIXEL', percentage: 98 },
      { name: 'GOOGLE TAG MANAGER & GA4 ATTRIBUTION', percentage: 95 },
      { name: 'CONVERSION RATE OPTIMIZATION (CRO)', percentage: 92 },
      { name: 'HIGH-CONVERTING LANDING PAGES', percentage: 94 }
    ]
  },
  projects: [
    {
      id: 'proj-1',
      title: 'Solis Cambodia — Agricultural Equipment Lead Funnel',
      category: 'meta',
      tags: ['Meta Ads', 'Lead Gen', 'CAPI'],
      description: 'Engineered an end-to-end performance marketing ecosystem for Solis Cambodia (leading tractor brand). Built high-converting landing pages and deployed Meta CAPI with 9.8/10 event match quality.',
      metrics: '+140% Sales Inquiries | 3.8x ROAS | 25,000+ Leads',
      image: '/assets/images/latest-portfolio/portfoli-img-1.jpg',
      link: '#contacts'
    },
    {
      id: 'proj-2',
      title: 'EPOS-GODIGITAL — E-Commerce Scaling & Retargeting Engine',
      category: 'ecommerce',
      tags: ['Meta CAPI', 'E-Commerce', 'Retargeting'],
      description: 'Directed multi-channel digital acquisition and retargeting campaigns for EPOS-GODIGITAL marketplace platform, optimizing online conversion rates and customer lifetime value.',
      metrics: '+185% Online Transactions | 4.2x ROAS',
      image: '/assets/images/latest-portfolio/portfoli-img-3.jpg',
      link: '#contacts'
    },
    {
      id: 'proj-3',
      title: 'KHB Media PLC — Multi-Platform Agency Ad Operations',
      category: 'meta',
      tags: ['Google Ads', 'Facebook Ads', 'Video Ads'],
      description: 'Spearheaded agency-wide digital marketing and video animation teams, executing 6-figure media buys and full-funnel lead generation for high-tier corporate clients.',
      metrics: 'Managed 5 Agency Divisions | 40+ Corporate Campaigns',
      image: '/assets/images/latest-portfolio/portfoli-img-2.jpg',
      link: '#contacts'
    },
    {
      id: 'proj-4',
      title: 'High-Ticket Real Estate — Omnichannel Buyer Acquisition',
      category: 'cro',
      tags: ['Performance Max', 'Meta Ads', 'High-ROAS'],
      description: 'Engineered search and social buyer funnels for premium property developments, qualifying high-net-worth investors through automated pre-screening forms.',
      metrics: 'Over $2.5M in Closed Real Estate Sales Inquiries',
      image: '/assets/images/latest-portfolio/portfoli-img-4.jpg',
      link: '#contacts'
    }
  ],
  services: [
    {
      id: 'serv-1',
      title: 'Meta & Performance Ads',
      description: 'Precision audience targeting, creative testing engines, and aggressive ROAS scaling across Facebook and Instagram.',
      score: 96,
      icon: '/assets/images/my-expertise/logo-4.svg'
    },
    {
      id: 'serv-2',
      title: 'Conversion API & Tracking',
      description: 'Privacy-first server-side Meta CAPI, Google Tag Manager, and GA4 setups that eliminate iOS14 signal loss.',
      score: 98,
      icon: '/assets/images/my-expertise/logo-5.svg'
    },
    {
      id: 'serv-3',
      title: 'Full-Funnel CRO & Growth',
      description: 'High-converting landing pages, lead qualification systems, and automated nurturing that maximize average order value.',
      score: 92,
      icon: '/assets/images/my-expertise/logo-6.svg'
    }
  ],
  testimonials: [
    {
      id: 'test-1',
      name: 'Tim Vutha',
      role: 'CEO, KHB Media PLC',
      quote: 'Chamnab managed multiple departments with incredible technical clarity and strategic vision. His ad funnels and web systems drove substantial revenue and brand expansion for KHB Media PLC.',
      stars: 5,
      avatar: '/assets/images/testimonial/client-img-1.jpg'
    },
    {
      id: 'test-2',
      name: 'Ly Sok',
      role: 'Purchasing Manager, Shimmex Group',
      quote: 'Chamnab’s digital leadership and IT infrastructure expertise are second to none. He delivers results on time with remarkable attention to detail.',
      stars: 5,
      avatar: '/assets/images/testimonial/client-img-1.jpg'
    },
    {
      id: 'test-3',
      name: 'Solis Cambodia Partner',
      role: 'Dealership Operations Lead',
      quote: 'Working with Chamnab on the Solis tractor launch transformed our digital presence. He built a high-converting website and generated hundreds of qualified buyer leads.',
      stars: 5,
      avatar: '/assets/images/testimonial/client-img-1.jpg'
    }
  ],
  blog: [
    {
      id: 'blog-1',
      title: 'Maximizing Meta Ads ROAS in Southeast Asia: 2026 Strategy Guide',
      author: 'Chamnab Mey',
      date: 'March 2026',
      comments: '05',
      image: '/assets/images/blog/blog-img-7.jpg',
      summary: 'Why creative testing velocity and first-party data quality beat outdated audience micro-targeting hacks in modern machine-learning ad environments.',
      content: 'In modern performance marketing, success is no longer about secret audience hacks. With Meta\'s machine learning algorithms, winners are determined by creative testing velocity, high first-party data quality, and conversion funnel friction reduction.'
    },
    {
      id: 'blog-2',
      title: 'Why Server-Side Conversion API (CAPI) is Mandatory Post-iOS14',
      author: 'Chamnab Mey',
      date: 'February 2026',
      comments: '08',
      image: '/assets/images/blog/blog-img-6.jpg',
      summary: 'Browser tracking loses up to 40% of conversion signals. Discover how direct server-to-server CAPI restores attribution accuracy and lowers CPA.',
      content: 'Browser tracking loses up to 40% of conversion signals due to ad blockers and iOS privacy restrictions. Implementing Meta Conversion API directly restores conversion visibility, lowers cost-per-acquisition (CPA), and feeds accurate purchase value back to the ad algorithm.'
    },
    {
      id: 'blog-3',
      title: 'Full-Funnel Acquisition: Aligning Paid Ads with Conversion Web Design',
      author: 'Chamnab Mey',
      date: 'January 2026',
      comments: '12',
      image: '/assets/images/blog/blog-img-8.jpg',
      summary: 'Driving traffic to slow, generic websites burns ad budget. Learn how to construct high-speed, conversion-optimized landing pages.',
      content: 'Driving ad traffic to generic websites burns ad budget. Constructing high-speed, conversion-optimized landing pages with clear single-intent value propositions ensures maximum ROI for every ad dollar spent.'
    }
  ],
  footer: {
    bio: 'Senior Solo Digital Marketer & Performance Strategist based in Phnom Penh, Cambodia. Scaling revenue with high-ROAS Meta & Google ads, server-side CAPI tracking, and full-funnel conversion systems.',
    newsletterPitch: 'Subscribe for exclusive performance marketing insights, Meta CAPI tutorials, and conversion strategies.'
  }
};
