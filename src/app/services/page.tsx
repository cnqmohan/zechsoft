import Image from 'next/image';
import { services } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ServicesPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We offer a comprehensive suite of software development services to bring your vision to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full pb-12 md:pb-24 lg:pb-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12">
            {services.map((service, index) => {
              const serviceImage = PlaceHolderImages.find((p) => p.id === service.imageId);
              const isReversed = index % 2 !== 0;
              return (
                <div key={service.title} className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                  <div className={`flex flex-col justify-center space-y-4 ${isReversed ? 'lg:order-last' : ''}`}>
                    <h2 className="text-3xl font-bold tracking-tighter">{service.title}</h2>
                    <p className="max-w-[600px] text-muted-foreground md:text-lg">
                      {service.description}
                    </p>
                    <div className="pt-4">
                       <Button asChild>
                         <Link href="/quote">Request This Service</Link>
                       </Button>
                    </div>
                  </div>
                  {serviceImage && (
                    <div className="bg-secondary/30 p-4 rounded-lg">
                    <Image
                      src={serviceImage.imageUrl}
                      alt={serviceImage.description}
                      width={600}
                      height={400}
                      className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                      data-ai-hint={serviceImage.imageHint}
                    />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
