export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    image: string;
    bio: string;
  };
  publishedAt: string;
  updatedAt?: string;
  category: string;
  tags: string[];
  readingTime: number;
  featured: boolean;
  image?: string;
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  count: number;
}

export interface Author {
  id: string;
  name: string;
  slug: string;
  bio: string;
  image: string;
  social: {
    twitter?: string;
    github?: string;
    linkedin?: string;
    website?: string;
  };
}

export interface NewsletterSubscription {
  email: string;
  name?: string;
  subscribedAt: string;
  isActive: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface Theme {
  theme: 'light' | 'dark' | 'system';
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
}

export interface SearchResult {
  posts: Post[];
  total: number;
  query: string;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  author?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterHandle?: string;
}