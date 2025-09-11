'use client';

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { testimonials } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function TestimonialsCarousel() {
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      className="w-full max-w-4xl mx-auto mt-12"
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => {
          const image = PlaceHolderImages.find((p) => p.id === testimonial.imageId);
          return (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1 h-full">
                <Card className="flex flex-col justify-between h-full">
                  <CardContent className="flex flex-col items-start gap-4 p-6">
                    <p className="text-muted-foreground">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-4 pt-4">
                      {image && (
                         <Avatar>
                           <AvatarImage src={image.imageUrl} alt={image.description} data-ai-hint={image.imageHint} />
                           <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                         </Avatar>
                      )}
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
  );
}
