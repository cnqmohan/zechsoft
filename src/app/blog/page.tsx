import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

export default function BlogPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Insights & Articles</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Stay updated with the latest trends in software development, best practices, and our case studies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full pb-12 md:pb-24 lg:pb-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => {
              const postImage = PlaceHolderImages.find((p) => p.id === post.imageId);
              return (
                <Card key={post.slug} className="flex flex-col overflow-hidden bg-secondary/50 border-0 hover:bg-secondary transition-colors duration-300">
                  {postImage && (
                    <Link href={`/blog/${post.slug}`}>
                      <Image
                        src={postImage.imageUrl}
                        alt={postImage.description}
                        width={800}
                        height={500}
                        className="object-cover w-full aspect-video"
                        data-ai-hint={postImage.imageHint}
                      />
                    </Link>
                  )}
                  <CardHeader>
                    <CardTitle className="leading-snug">
                      <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription>
                      By {post.author} on {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" asChild className="p-0 h-auto">
                      <Link href={`/blog/${post.slug}`}>
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
