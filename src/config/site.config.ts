import { SITE_URL, GOOGLE_SITE_VERIFICATION, BING_SITE_VERIFICATION } from 'astro:env/server';

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  author: string;
  email: string;
  phone?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  socialLinks: string[];
  twitter?: {
    site: string;
    creator: string;
  };
  verification?: {
    google?: string;
    bing?: string;
  };
  /** Path to author photo (relative to site root, e.g. '/avatar.jpg'). Used in Person schema. */
  authorImage?: string;
  /**
   * Set to false if your blog post images already match your theme color
   * and you don't want the brand color overlay applied on top of them.
   */
  blogImageOverlay?: boolean;
  /**
   * Branding configuration
   * Logo files: Replace SVGs in src/assets/branding/
   * Favicon: Replace in public/favicon.svg
   */
  branding: {
    /** Logo alt text for accessibility */
    logo: {
      alt: string;
      /** Path to logo image for structured data (e.g. '/logo.png'). Add a PNG to public/ and set this. */
      imageUrl?: string;
    };
    /** Favicon path (lives in public/) */
    favicon: {
      svg: string;
    };
    /** Theme colors for manifest and browser UI */
    colors: {
      /** Browser toolbar color (hex) */
      themeColor: string;
      /** PWA splash screen background (hex) */
      backgroundColor: string;
    };
  };
}

const siteConfig: SiteConfig = {
  name: 'EloraHQ',
  description:
    'Empowering care from the frontlines, all the way up. Elora takes care of the busywork, you take care of the people.',
  url: SITE_URL || 'https://elorahq.com',
  ogImage: '/og-default.svg',
  author: 'EloraHQ',
  email: 'info@elorahq.com',
  address: {
    street: '',
    city: 'Seattle',
    state: 'Washington',
    zip: '',
    country: 'USA',
  },
  socialLinks: ['https://www.linkedin.com/company/elorahq'],
  verification: {
    google: GOOGLE_SITE_VERIFICATION,
    bing: BING_SITE_VERIFICATION,
  },
  authorImage: '/avatar.svg',
  blogImageOverlay: true,
  branding: {
    logo: {
      alt: 'EloraHQ',
      imageUrl: '/favicon.svg',
    },
    favicon: {
      svg: '/favicon.svg',
    },
    colors: {
      themeColor: '#7A4988',
      backgroundColor: '#ffffff',
    },
  },
};

export default siteConfig;
