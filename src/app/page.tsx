import Hero from '@/components/sections/Hero';
import FeaturedPosts from '@/components/sections/FeaturedPosts';
import Newsletter from '@/components/sections/Newsletter';
import { posts } from '@/data/posts';

export default function Home() {
  // Get the 3 most recent posts
  const featuredPosts = posts
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 3);

  return (
    <>
      <Hero />
      <FeaturedPosts posts={featuredPosts} />
      <Newsletter />
    </>
  );
}