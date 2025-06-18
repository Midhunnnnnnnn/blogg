import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { posts } from '@/data/posts';
import { formatDate } from '@/lib/utils';

interface BlogPostParams {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostParams): Promise<Metadata> {
  const post = posts.find((post) => post.slug === params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostParams) {
  const post = posts.find((post) => post.slug === params.slug);
  
  if (!post) {
    notFound();
  }
  
  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{post.title}</h1>
        <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 mb-4">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <div className="flex items-center">
            <span className="text-sm">By {post.author.name}</span>
          </div>
        </div>
        
        {post.tags && (
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span 
                key={tag} 
                className="inline-block bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 dark:text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      
      <div className="prose dark:prose-invert max-w-none">
        {/* This is a simplified approach. In a real app, you'd use a markdown renderer */}
        <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }} />
      </div>
      
      <div className="mt-12 pt-8 border-t">
        <h2 className="text-xl font-bold mb-4">About the Author</h2>
        <div className="flex items-start gap-4">
          {post.author.image && (
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
              {/* In a real app, you'd use next/image */}
              <div className="w-full h-full bg-gray-300" />
            </div>
          )}
          <div>
            <h3 className="font-medium">{post.author.name}</h3>
            {post.author.bio && <p className="text-gray-600 dark:text-gray-300">{post.author.bio}</p>}
          </div>
        </div>
      </div>
    </article>
  );
}