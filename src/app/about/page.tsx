import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { teamMembers } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Target, Eye, Gem } from 'lucide-react';

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find((p) => p.id === 'about-us');

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  About SoftForge Solutions
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  We are a passionate team of developers, designers, and strategists dedicated to building exceptional software that solves real-world problems.
                </p>
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

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <Target className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold">Our Mission</h3>
              <p className="text-muted-foreground mt-2">
                To empower businesses with innovative and reliable software solutions that drive growth, efficiency, and digital transformation.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Eye className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold">Our Vision</h3>
              <p className="text-muted-foreground mt-2">
                To be a leading software development partner, recognized for our technical excellence, client-centric approach, and commitment to quality.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Gem className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold">Our Values</h3>
              <p className="text-muted-foreground mt-2">
                We believe in innovation, integrity, collaboration, and a relentless focus on delivering value to our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Our Leadership Team</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The driving force behind our success.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-4 mt-12">
            {teamMembers.map((member) => {
              const teamImage = PlaceHolderImages.find((p) => p.id === member.imageId);
              return (
                <Card key={member.name} className="text-center border-0 shadow-none bg-transparent">
                  <CardContent className="flex flex-col items-center gap-4 pt-6">
                    {teamImage && (
                      <Avatar className="h-32 w-32">
                        <AvatarImage src={teamImage.imageUrl} alt={teamImage.description} data-ai-hint={teamImage.imageHint} />
                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                    )}
                    <div className="grid gap-1">
                      <p className="text-lg font-bold">{member.name}</p>
                      <p className="text-sm text-primary font-medium">{member.role}</p>
                      <p className="text-sm text-muted-foreground mt-2">{member.bio}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
