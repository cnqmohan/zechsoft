
'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { services } from '@/lib/data';
import { Check } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ScrollFadeIn } from '@/components/scroll-fade-in';

export default function ServicesPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We offer a comprehensive suite of software development and IT services to bring your vision to life. Explore our capabilities below.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full pb-12 md:pb-24 lg:pb-32">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          {services.map((category) => {
            const Icon = category.icon;
            return (
            <ScrollFadeIn key={category.category}>
              <div className="mb-12">
                <h2 className="text-3xl font-bold tracking-tighter mb-6 flex items-center gap-3">
                  <Icon className="w-8 h-8 text-primary" /> {category.category}
                </h2>
                <Accordion type="single" collapsible className="w-full" defaultValue={category.items[0].title}>
                  {category.items.map((service) => (
                    <AccordionItem value={service.title} key={service.title} id={service.slug}>
                      <AccordionTrigger className="text-xl hover:no-underline">
                        {service.title}
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="mt-2 space-y-3 pl-2">
                          {service.points.map((point) => (
                            <li key={point} className="flex items-start gap-3">
                              <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                              <span className="text-muted-foreground">
                                {point}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </ScrollFadeIn>
          )})}
          <ScrollFadeIn>
            <div className="text-center mt-16 bg-secondary p-8 rounded-lg">
              <h2 className="text-2xl font-bold tracking-tighter">Ready to Discuss Your Project?</h2>
              <p className="text-muted-foreground mt-2 mb-4">Our experts are here to help you find the right solutions.</p>
              <Button asChild size="lg">
                <Link href="/quote">Get a Free Consultation</Link>
              </Button>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}

    