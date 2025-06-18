export const SITE_CONFIG = {
  name: 'MinimalBlog',
  title: 'MinimalBlog - A Modern Developer Blog',
  description: 'A minimalist blog focused on web development, technology, and creative coding.',
  url: 'https://your-blog-domain.com',
  ogImage: '/images/og-image.jpg', // Add this line
  author: {
    name: 'Your Name',
    bio: 'Full-stack developer passionate about creating beautiful web experiences.',
    image: '/images/author.jpg',
    social: {
      twitter: '@yourusername',
      github: 'yourusername',
      linkedin: 'yourusername',
      email: 'hello@yourdomain.com',
    },
  },
  social: {
    twitter: '@yourblog',
    github: 'yourusername/blog',
  },
  newsletter: {
    enabled: true,
    provider: 'mailchimp', // or 'convertkit', 'emailoctopus', etc.
  },
  analytics: {
    googleAnalytics: 'GA_MEASUREMENT_ID',
  },
  comments: {
    enabled: true,
    provider: 'giscus', // or 'disqus', 'utterances'
  },
};

export const ROUTES = {
  HOME: '/',
  BLOG: '/blog',
  ABOUT: '/about',
  CONTACT: '/contact',
  NEWSLETTER: '/newsletter',
  TAGS: '/tags',
  CATEGORIES: '/categories',
} as const;

export const CATEGORIES = [
  {
    id: '1',
    name: 'Web Development',
    slug: 'web-development',
    description: 'Frontend and backend development tutorials and insights',
    count: 15,
  },
  {
    id: '2',
    name: 'JavaScript',
    slug: 'javascript',
    description: 'Modern JavaScript, frameworks, and best practices',
    count: 12,
  },
  {
    id: '3',
    name: 'React',
    slug: 'react',
    description: 'React tutorials, patterns, and ecosystem updates',
    count: 8,
  },
  {
    id: '4',
    name: 'Next.js',
    slug: 'nextjs',
    description: 'Next.js features, optimization, and deployment strategies',
    count: 6,
  },
  {
    id: '5',
    name: 'CSS',
    slug: 'css',
    description: 'Modern CSS techniques and design systems',
    count: 10,
  },
  {
    id: '6',
    name: 'TypeScript',
    slug: 'typescript',
    description: 'TypeScript best practices and advanced patterns',
    count: 7,
  },
];

export const NAVIGATION_ITEMS = [
  {
    name: 'Home',
    href: ROUTES.HOME,
  },
  {
    name: 'Blog',
    href: ROUTES.BLOG,
  },
  {
    name: 'About',
    href: ROUTES.ABOUT,
  },
  {
    name: 'Contact',
    href: ROUTES.CONTACT,
  },
];

export const POSTS_PER_PAGE = 6;
export const FEATURED_POSTS_COUNT = 3;
export const RECENT_POSTS_COUNT = 5;

export const ANIMATION_DURATION = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
} as const;

export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const;

export const SOCIAL_LINKS = [
  {
    name: 'Twitter',
    href: `https://twitter.com/${SITE_CONFIG.social.twitter.replace('@', '')}`,
    icon: 'twitter',
  },
  {
    name: 'GitHub',
    href: `https://github.com/${SITE_CONFIG.social.github}`,
    icon: 'github',
  },
  {
    name: 'RSS',
    href: '/rss.xml',
    icon: 'rss',
  },
];

export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
  SYSTEM: 'system',
} as const;