import { Post } from '@/lib/types';

export const posts: Post[] = [
  {
    id: '1',
    title: 'Building Modern Web Applications with Next.js 15',
    slug: 'building-modern-web-applications-nextjs-15',
    excerpt: 'Explore the latest features in Next.js 15 and learn how to build scalable, performant web applications with the newest updates.',
    content: `
# Building Modern Web Applications with Next.js 15

Next.js 15 brings exciting new features that make building modern web applications easier and more efficient than ever before. In this comprehensive guide, we'll explore the key updates and how to leverage them in your projects.

## Key Features in Next.js 15

### Enhanced App Router
The App Router continues to evolve with improved performance and developer experience. New caching strategies and optimizations make your applications faster out of the box.

### Improved TypeScript Support
Better type inference and enhanced IDE support make development with TypeScript more seamless.

### Server Components Enhancements
Server Components now offer better streaming capabilities and improved error boundaries.

## Getting Started

To get started with Next.js 15, install the latest version:

\`\`\`bash
npm install next@latest react@latest react-dom@latest
\`\`\`

## Building Your First App

Let's create a simple blog application to demonstrate these new features...
    `,
    author: {
      name: 'John Doe',
      image: '/images/authors/john-doe.jpg',
      bio: 'Full-stack developer with 8+ years of experience in React and Next.js',
    },
    publishedAt: '2024-12-15T10:00:00Z',
    category: 'Next.js',
    tags: ['Next.js', 'React', 'Web Development', 'JavaScript'],
    readingTime: 8,
    featured: true,
    image: '/images/posts/nextjs-15.jpg',
    seo: {
      title: 'Complete Guide to Next.js 15 Features and Updates',
      description: 'Learn about Next.js 15 new features, App Router improvements, and how to build modern web applications.',
      keywords: ['Next.js 15', 'React', 'Web Development', 'App Router'],
    },
  },
  {
    id: '2',
    title: 'Mastering CSS Grid and Flexbox in 2024',
    slug: 'mastering-css-grid-flexbox-2024',
    excerpt: 'A comprehensive guide to modern CSS layout techniques including Grid and Flexbox with practical examples and best practices.',
    content: `
# Mastering CSS Grid and Flexbox in 2024

CSS Grid and Flexbox are the cornerstones of modern web layout. Understanding when and how to use each can dramatically improve your design capabilities.

## CSS Grid vs Flexbox

### When to Use Grid
- Two-dimensional layouts
- Complex positioning requirements
- Grid-based designs

### When to Use Flexbox
- One-dimensional layouts
- Component-level layouts
- Alignment and distribution

## Practical Examples

Let's dive into some real-world examples...
    `,
    author: {
      name: 'Jane Smith',
      image: '/images/authors/jane-smith.jpg',
      bio: 'CSS specialist and UI/UX designer passionate about modern web standards',
    },
    publishedAt: '2024-12-12T14:30:00Z',
    category: 'CSS',
    tags: ['CSS', 'Grid', 'Flexbox', 'Layout', 'Design'],
    readingTime: 12,
    featured: true,
    image: '/images/posts/css-grid-flexbox.jpg',
  },
  {
    id: '3',
    title: 'TypeScript Best Practices for Large Applications',
    slug: 'typescript-best-practices-large-applications',
    excerpt: 'Learn essential TypeScript patterns and practices for building maintainable large-scale applications.',
    content: `
# TypeScript Best Practices for Large Applications

As applications grow in complexity, TypeScript becomes invaluable for maintaining code quality and developer productivity. Here are the essential practices for large-scale projects.

## Project Structure

Organizing your TypeScript project properly from the start saves countless hours later...

## Type Safety Strategies

### Strict Mode Configuration
Enable strict mode for maximum type safety...

### Custom Type Guards
Create robust type guards for runtime safety...
    `,
    author: {
      name: 'Mike Johnson',
      image: '/images/authors/mike-johnson.jpg',
      bio: 'Senior TypeScript developer and open-source contributor',
    },
    publishedAt: '2024-12-10T09:15:00Z',
    category: 'TypeScript',
    tags: ['TypeScript', 'JavaScript', 'Best Practices', 'Architecture'],
    readingTime: 15,
    featured: true,
    image: '/images/posts/typescript-best-practices.jpg',
  },
  {
    id: '4',
    title: 'React Server Components: The Future of React',
    slug: 'react-server-components-future-react',
    excerpt: 'Understand React Server Components and how they\'re changing the way we build React applications.',
    content: `
# React Server Components: The Future of React

React Server Components represent a paradigm shift in how we think about React applications. They bring server-side rendering to a new level of efficiency and developer experience.

## What are Server Components?

Server Components run on the server and can directly access backend resources...

## Benefits

- Reduced bundle size
- Better performance
- Direct backend access
- Enhanced security
    `,
    author: {
      name: 'Sarah Wilson',
      image: '/images/authors/sarah-wilson.jpg',
      bio: 'React core team member and conference speaker',
    },
    publishedAt: '2024-12-08T16:45:00Z',
    category: 'React',
    tags: ['React', 'Server Components', 'Performance', 'Architecture'],
    readingTime: 10,
    featured: false,
    image: '/images/posts/react-server-components.jpg',
  },
  {
    id: '5',
    title: 'Building Responsive Designs with Tailwind CSS',
    slug: 'building-responsive-designs-tailwind-css',
    excerpt: 'Master responsive design patterns using Tailwind CSS utility classes and modern CSS techniques.',
    content: `
# Building Responsive Designs with Tailwind CSS

Tailwind CSS makes responsive design intuitive and maintainable. Learn how to create beautiful, responsive layouts with utility-first CSS.

## Responsive Design Principles

Mobile-first design is the foundation of modern web development...

## Tailwind's Responsive System

Tailwind uses a mobile-first approach with intuitive breakpoint prefixes...
    `,
    author: {
      name: 'Alex Chen',
      image: '/images/authors/alex-chen.jpg',
      bio: 'Frontend developer specializing in design systems and CSS architecture',
    },
    publishedAt: '2024-12-05T11:20:00Z',
    category: 'CSS',
    tags: ['Tailwind CSS', 'Responsive Design', 'CSS', 'Frontend'],
    readingTime: 7,
    featured: false,
    image: '/images/posts/tailwind-responsive.jpg',
  },
  {
    id: '6',
    title: 'Modern JavaScript Features You Should Know',
    slug: 'modern-javascript-features-2024',
    excerpt: 'Explore the latest JavaScript features and how they can improve your development workflow and code quality.',
    content: `
# Modern JavaScript Features You Should Know

JavaScript continues to evolve rapidly. Stay up-to-date with the latest features that can make your code more elegant and efficient.

## ES2024 Features

### Array Grouping
The new Array.prototype.group() method...

### Temporal API
Finally, proper date and time handling...

## Browser Support

Check compatibility and polyfill strategies...
    `,
    author: {
      name: 'David Rodriguez',
      image: '/images/authors/david-rodriguez.jpg',
      bio: 'JavaScript enthusiast and TC39 proposal contributor',
    },
    publishedAt: '2024-12-03T13:10:00Z',
    category: 'JavaScript',
    tags: ['JavaScript', 'ES2024', 'Modern Features', 'Web Development'],
    readingTime: 9,
    featured: false,
    image: '/images/posts/modern-javascript.jpg',
  },
  {
    id: '7',
    title: 'Web Performance Optimization Strategies',
    slug: 'web-performance-optimization-strategies',
    excerpt: 'Comprehensive guide to optimizing web performance including Core Web Vitals, lazy loading, and modern optimization techniques.',
    content: `
# Web Performance Optimization Strategies

Web performance directly impacts user experience and business metrics. Learn the essential strategies for creating fast, responsive web applications.

## Core Web Vitals

Understanding and optimizing for Core Web Vitals is crucial for modern web development...

## Optimization Techniques

### Image Optimization
Modern image formats and lazy loading strategies...

### Code Splitting
Reduce initial bundle size with strategic code splitting...
    `,
    author: {
      name: 'Emma Thompson',
      image: '/images/authors/emma-thompson.jpg',
      bio: 'Performance engineer focused on web optimization and user experience',
    },
    publishedAt: '2024-12-01T08:30:00Z',
    category: 'Web Development',
    tags: ['Performance', 'Optimization', 'Core Web Vitals', 'UX'],
    readingTime: 11,
    featured: false,
    image: '/images/posts/web-performance.jpg',
  },
  {
    id: '8',
    title: 'Getting Started with Three.js and WebGL',
    slug: 'getting-started-threejs-webgl',
    excerpt: 'Learn how to create stunning 3D web experiences using Three.js and WebGL with practical examples and best practices.',
    content: `
# Getting Started with Three.js and WebGL

Three.js makes 3D graphics on the web accessible to everyone. Learn how to create immersive 3D experiences that run smoothly in the browser.

## Setting Up Your First Scene

Every Three.js application needs three essential components:
- Scene
- Camera
- Renderer

## Basic 3D Objects

Creating and manipulating 3D geometries and materials...

## Animation and Interaction

Bringing your 3D scenes to life with animations and user interactions...
    `,
    author: {
      name: 'Robert Kim',
      image: '/images/authors/robert-kim.jpg',
      bio: 'Creative developer specializing in 3D web experiences and interactive design',
    },
    publishedAt: '2024-11-28T15:45:00Z',
    category: 'Web Development',
    tags: ['Three.js', 'WebGL', '3D Graphics', 'Creative Coding'],
    readingTime: 13,
    featured: false,
    image: '/images/posts/threejs-webgl.jpg',
  },
];

export function getAllPosts(): Post[] {
  return posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getFeaturedPosts(): Post[] {
  return posts.filter(post => post.featured);
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find(post => post.slug === slug);
}

export function getPostsByCategory(category: string): Post[] {
  return posts.filter(post => post.category.toLowerCase() === category.toLowerCase());
}

export function getPostsByTag(tag: string): Post[] {
  return posts.filter(post => post.tags.some(t => t.toLowerCase() === tag.toLowerCase()));
}

export function getRecentPosts(count: number = 5): Post[] {
  return getAllPosts().slice(0, count);
}

export function getRelatedPosts(currentPost: Post, count: number = 3): Post[] {
  const related = posts
    .filter(post => post.id !== currentPost.id)
    .filter(post => 
      post.category === currentPost.category || 
      post.tags.some(tag => currentPost.tags.includes(tag))
    )
    .slice(0, count);
  
  return related;
}