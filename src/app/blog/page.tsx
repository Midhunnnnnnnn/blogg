import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { posts } from '@/data/posts';
import { formatDate } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read my latest articles and insights',
};

export default function BlogPage() {
  // Sort posts by date (newest first)
   const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
              <CardHeader>
                <h2 className="text-xl font-bold">{post.title}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {formatDate(post.publishedAt)}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">{post.excerpt}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags?.map((tag) => (
                    <span 
                      key={tag} 
                      className="inline-block bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );

}