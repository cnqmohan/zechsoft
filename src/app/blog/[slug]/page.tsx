import { notFound } from 'next/navigation';
import Image from 'next/image';
import { blogPosts } from '@/lib/data';
import { PlaceholderImages } from '@/lib/placeholder-images';
import { ArticleSummary } from '@/components/blog-summary';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const postImage = PlaceholderImages.find((p) => p.id === post.imageId);

  return (
    <article>
      <header className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {post.title}
            </h1>
            <p className="text-muted-foreground text-lg">
              By {post.author} on {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </header>

      <div className="container py-12 md:py-16 max-w-4xl mx-auto">
        {postImage && (
          <Image
            src={postImage.imageUrl}
            alt={postImage.description}
            width={1200}
            height={675}
            className="rounded-lg aspect-video object-cover mb-8"
            data-ai-hint={postImage.imageHint}
          />
        )}
        
        <ArticleSummary articleText={post.content} />

        <div
          className="prose prose-lg max-w-none mx-auto prose-h3:text-foreground prose-h3:font-semibold prose-a:text-primary hover:prose-a:text-primary/80"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
}
