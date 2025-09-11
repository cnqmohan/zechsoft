import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Code, Smartphone, Users, CheckCircle, BrainCircuit } from 'lucide-react';
import { TestimonialsCarousel } from '@/components/testimonials-carousel';
import { services, portfolioItems } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const serviceIcons: { [key: string]: React.ElementType } = {
  'Custom Web Development': Code,
  'Mobile App Development': Smartphone,
  'Enterprise Solutions': Users,
  'UI/UX Design': BrainCircuit,
  'Product Maintenance & Support': CheckCircle,
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
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-primary/40" />
        <div className="relative container px-4 md:px-6 z-10">
          <div className="flex flex-col items-center space-y-6">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Building the Future, One Line of Code at a Time
            </h1>
            <p className="max-w-[700px] text-lg md:text-xl text-primary-foreground/90">
              We deliver high-quality, custom software solutions that drive growth and efficiency for businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/quote">Get a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Our Services</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What We Do</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From concept to launch, we provide comprehensive software development services tailored to your unique needs.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
            {featuredServices.map((service) => {
              const Icon = serviceIcons[service.title] || Code;
              return (
                <Card key={service.title} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="gap-4">
                    <Icon className="h-8 w-8 text-primary" />
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{service.shortDescription}</p>
                  </CardContent>
                  <CardFooter>
                     <Button variant="link" asChild className="p-0 h-auto">
                        <Link href="/services">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                     </Button>
                  </CardFooter>
                </Card>
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
      
      <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Recent Work</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of the successful projects we've delivered for our clients.
            </p>
          </div>
          <div className="mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 mt-12">
            {featuredPortfolio.map((item) => {
               const portfolioImage = PlaceHolderImages.find(p => p.id === item.imageId);
               return (
                <Card key={item.title} className="overflow-hidden group">
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
                     <Button variant="link" asChild className="p-0 h-auto">
                        <Link href={`/portfolio`}>View Case Study <ArrowRight className="ml-2 h-4 w-4" /></Link>
                     </Button>
                  </CardFooter>
                </Card>
              )}
            )}
          </div>
           <div className="text-center mt-12">
              <Button asChild>
                <Link href="/portfolio">Explore Our Portfolio</Link>
              </Button>
            </div>
        </div>
      </section>

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
      
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to Start Your Project?</h2>
            <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Let's build something amazing together. Contact us for a free, no-obligation quote.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-x-2">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/quote">Get Your Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
