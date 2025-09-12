
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Code, Smartphone, Users, CheckCircle, BrainCircuit, CloudCog, AreaChart, ShieldCheck, Target, Lightbulb, Heart, Book, UserCheck, Star, Trophy } from 'lucide-react';
import { TestimonialsCarousel } from '@/components/testimonials-carousel';
import { services, portfolioItems, coreValues } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ScrollFadeIn } from '@/components/scroll-fade-in';

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero');
  const aboutImage = PlaceHolderImages.find((p) => p.id === 'about-us');
  const featuredServices = services.flatMap(s => s.items).slice(0, 3);
  const recentWork = portfolioItems.slice(0, 6);

  const serviceIcons: { [key: string]: React.ElementType } = {
    'Web Development': Code,
    'Mobile App Development': Smartphone,
    'Software Development': Users,
    'UI/UX Design': BrainCircuit,
    'Product Maintenance & Support': CheckCircle,
    'Cloud Computing': CloudCog,
    'Data Services': AreaChart,
    'Cybersecurity Services': ShieldCheck,
  };
  const valueIcons: { [key: string]: React.ElementType } = {
    'Quality': Target,
    'Safety': ShieldCheck,
    'Innovation': Lightbulb,
    'Integrity': Heart,
    'Reliability': Book,
    'Client Focus': UserCheck,
  };

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
                <Link href="/contact">Get a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ScrollFadeIn>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">About Zechsoft</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Crafting Digital Excellence
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    We are a passionate team of developers, designers, and strategists dedicated to building exceptional software that solves real-world problems and drives business success.
                  </p>
                   <Button asChild>
                    <Link href="/about">Learn More About Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
              </div>
              {aboutImage && (
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  width={800}
                  height={500}
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  data-ai-hint={aboutImage.imageHint}
                />
              )}
            </div>
          </div>
        </section>
      </ScrollFadeIn>

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
                  const Icon = serviceIcons[service.title] || Code;
                  return (
                    <Link key={service.title} href={`/services#${service.slug}`} className="group">
                    <Card className="bg-background shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col overflow-hidden">
                      {serviceImage && (
                          <div className="overflow-hidden">
                              <Image
                                src={serviceImage.imageUrl}
                                alt={serviceImage.description}
                                width={600}
                                height={400}
                                className="object-cover w-full h-auto aspect-video group-hover:scale-105 transition-transform duration-300"
                                data-ai-hint={serviceImage.imageHint}
                              />
                          </div>
                      )}
                       <CardHeader className="flex-row items-center gap-4">
                          <Icon className="w-10 h-10 text-primary" />
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                            {service.points.slice(0, 3).map(point => <li key={point}>{point}</li>)}
                          </ul>
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
        <section id="values" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Core Values</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                The fundamental principles that guide our approach to business.
              </p>
            </div>
            <div className="mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {coreValues.map((value) => {
                const Icon = valueIcons[value.title];
                return (
                  <Card key={value.title} className="bg-background shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                    <CardContent className="p-6 flex flex-col items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">{value.title}</h3>
                      <p className="text-muted-foreground text-sm">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </ScrollFadeIn>
      <ScrollFadeIn>
        <section id="goal-mission" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid gap-6 md:grid-cols-2 lg:gap-8">
              <Card className="bg-secondary shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <CardContent className="p-6 flex flex-col items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Star className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Our Goal</h3>
                  <p className="text-muted-foreground text-sm">We won't rest till we satisfy our client to their fullest.</p>
                </CardContent>
              </Card>
              <Card className="bg-secondary shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <CardContent className="p-6 flex flex-col items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Trophy className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Our Mission</h3>
                  <p className="text-muted-foreground text-sm">We won't rest till we satisfy our client to their fullest.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </ScrollFadeIn>
      <ScrollFadeIn>
        <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Recent Work</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Check out some of the successful projects we've delivered for our clients.
              </p>
            </div>
            <div className="mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {recentWork.map((item) => {
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
                <Link href="/contact">Get Your Free Quote</Link>
              </Button>
            </div>
          </div>
        </section>
      </ScrollFadeIn>
    </div>
  );
}
    

    


