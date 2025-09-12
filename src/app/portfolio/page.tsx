import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { portfolioItems } from '@/lib/data';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function PortfolioPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Work</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We take pride in the solutions we've built. Explore our case studies to see how we've helped businesses like yours succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full pb-12 md:pb-24 lg:pb-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12">
            {portfolioItems.map((item, index) => {
              const itemImage = PlaceHolderImages.find((p) => p.id === item.imageId);
              const isReversed = index % 2 !== 0;
              return (
                <Card key={item.title} className="w-full overflow-hidden shadow-lg bg-background">
                  <div className={`grid md:grid-cols-2 ${isReversed ? 'md:grid-flow-row-dense' : ''}`}>
                    <div className={`relative ${isReversed ? 'md:col-start-2' : ''}`}>
                      {itemImage && (
                        <Image
                          src={itemImage.imageUrl}
                          alt={itemImage.description}
                          width={800}
                          height={600}
                          className="object-cover w-full h-full"
                          data-ai-hint={itemImage.imageHint}
                        />
                      )}
                    </div>
                    <div className={`flex flex-col p-6 md:p-8 ${isReversed ? 'md:col-start-1' : ''}`}>
                      <Badge variant="outline" className="w-fit mb-2 text-primary border-primary">{item.category}</Badge>
                      <h3 className="text-2xl font-bold">{item.title}</h3>
                      <p className="mt-2 text-muted-foreground">{item.description}</p>
                      
                      <div className="mt-6">
                        <h4 className="font-semibold text-lg">Key Metrics:</h4>
                        <ul className="mt-2 space-y-2">
                          {item.metrics.map(metric => (
                            <li key={metric} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span className="text-muted-foreground">{metric}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mt-6">
                        <h4 className="font-semibold text-lg">Challenges Overcome:</h4>
                        <p className="mt-2 text-sm text-muted-foreground">{item.challenges}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
           <div className="text-center mt-16">
              <h2 className="text-2xl font-bold tracking-tighter">Have a project in mind?</h2>
              <p className="text-muted-foreground mt-2 mb-4">Let's turn your idea into a reality.</p>
              <Button asChild size="lg">
                <Link href="/quote">Get a Free Quote</Link>
              </Button>
            </div>
        </div>
      </section>
    </>
  );
}
