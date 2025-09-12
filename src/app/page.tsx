
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Code, Smartphone, Users, CheckCircle, BrainCircuit, CloudCog, AreaChart, ShieldCheck } from 'lucide-react';
import { TestimonialsCarousel } from '@/components/testimonials-carousel';
import { services, portfolioItems } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ScrollFadeIn } from '@/components/scroll-fade-in';

const serviceIcons: { [key: string]: React.ElementType } = {
  'Custom Web Development': Code,
  'Mobile App Development': Smartphone,
  'Enterprise Solutions': Users,
  'UI/UX Design': BrainCircuit,
  'Product Maintenance & Support': CheckCircle,
  'Cloud & DevOps': CloudCog,
  'Data Analytics & BI': AreaChart,
  'Cybersecurity Consulting': ShieldCheck,
};

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero');
  const featuredServices = services.slice(0, 3);
  const featuredPortfolio = portfolioItems.slice(0, 3);

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-center text-white">
        {heroImage && (
            <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover"
                priority
                data-ai-hint={heroImage.imageHint}
            />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container px-4 md:px-6 z-10">
          <div className="flex flex-col items-center space-y-6">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Engineering Your Digital Vision
            </h1>
            <p className="max-w-[700px] text-lg md:text-xl text-white/90">
              We deliver high-quality, custom software solutions that drive growth and efficiency for businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/quote">Get a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ScrollFadeIn>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">Our Services</div>
              <Link href="/services" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl hover:text-primary transition-colors">What We Do</Link>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                From concept to launch, we provide comprehensive software development services tailored to your unique needs.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {featuredServices.map((service) => {
                  const serviceImage = PlaceHolderImages.find(p => p.id === service.imageId);
                  return (
                    <Link href={`/services#${service.slug}`} key={service.title} className="block group">
                      <Card className="bg-background shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col overflow-hidden">
                        {serviceImage && (
                           <div className="overflow-hidden">
                            <Image
                              src={serviceImage.imageUrl}
                              alt={serviceImage.description}
                              width={600}
                              height={400}
                              className="object-cover w-full h-auto aspect-[3/2] group-hover:scale-105 transition-transform duration-500"
                              data-ai-hint={serviceImage.imageHint}
                            />
                          </div>
                        )}
                        <CardHeader>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <p className="text-sm text-muted-foreground">{service.shortDescription}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
            </div>
            <div className="text-center mt-12">
              <Button asChild>
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </ScrollFadeIn>
      
      <ScrollFadeIn>
        <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Recent Work</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Check out some of the successful projects we've delivered for our clients.
              </p>
            </div>
            <div className="mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {featuredPortfolio.map((item) => {
                 const portfolioImage = PlaceHolderImages.find(p => p.id === item.imageId);
                 return (
                  <Card key={item.title} className="overflow-hidden group bg-background shadow-lg hover:shadow-xl transition-all duration-300">
                     {portfolioImage && (
                      <div className="overflow-hidden">
                         <Image
                          src={portfolioImage.imageUrl}
                          alt={portfolioImage.description}
                          width={600}
                          height={400}
                          className="object-cover w-full h-auto aspect-[3/2] group-hover:scale-105 transition-transform duration-500"
                          data-ai-hint={portfolioImage.imageHint}
                         />
                      </div>
                     )}
                    <CardHeader>
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription>{item.category}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground line-clamp-3">{item.description}</p>
                    </CardContent>
                     <CardFooter>
                       <Button variant="link" asChild className="p-0 h-auto font-semibold text-primary">
                          <Link href={`/portfolio`}>View Case Study <ArrowRight className="ml-2 h-4 w-4" /></Link>
                       </Button>
                    </CardFooter>
                  </Card>
                )}
              )}
            </div>
             <div className="text-center mt-16">
                <Button asChild size="lg">
                  <Link href="/portfolio">Explore Our Portfolio</Link>
                </Button>
              </div>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
             <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Clients Say</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We are proud to have earned the trust of amazing clients across various industries.
              </p>
            </div>
            <TestimonialsCarousel />
          </div>
        </section>
      </ScrollFadeIn>
      
      <ScrollFadeIn>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to Start Your Project?</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let's build something amazing together. Contact us for a free, no-obligation quote.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-x-2">
              <Button asChild size="lg">
                <Link href="/quote">Get Your Free Quote</Link>
              </Button>
            </div>
          </div>
        </section>
      </ScrollFadeIn>
    </div>
  );
}
