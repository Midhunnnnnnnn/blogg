'use client';

import { motion } from 'framer-motion';
import { Post } from '@/lib/types';
import Link from 'next/link';

interface FeaturedPostsProps {
  posts: Post[];
}

export default function FeaturedPosts({ posts }: FeaturedPostsProps) {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-semibold text-center mb-10">Featured Posts</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.15,
              type: "spring",
              damping: 20,
              stiffness: 100
            }}
          >
            <div className="border border-border rounded-lg p-6 bg-card hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-sm font-medium underline"
              >
                Read More →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}