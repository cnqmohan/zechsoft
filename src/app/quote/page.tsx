import { QuoteTool } from '@/components/quote-tool';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';

export default function QuotePage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get a Free Quote</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Tell us about your project, and our AI tool will generate an initial estimate. For more detailed inquiries, use our contact form.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full pb-12 md:pb-24 lg:pb-32">
        <div className="container grid gap-12 px-4 md:px-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
             <QuoteTool />
          </div>
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
                <CardDescription>
                  Have a general question or want to chat?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Our Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                 <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 text-muted-foreground mt-1" />
                    <div>
                        <h4 className="font-semibold">Email</h4>
                        <p className="text-muted-foreground">contact@softforge.com</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 text-muted-foreground mt-1" />
                    <div>
                        <h4 className="font-semibold">Phone</h4>
                        <p className="text-muted-foreground">(123) 456-7890</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-muted-foreground mt-1" />
                    <div>
                        <h4 className="font-semibold">Office</h4>
                        <p className="text-muted-foreground">123 Tech Avenue, Silicon Valley, CA 94043</p>
                    </div>
                </div>
                <div className="aspect-video w-full overflow-hidden rounded-lg mt-4">
                     <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.424369403889!2d-122.0865881846927!3d37.42206597982535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba024255f529%3A0x464293aa8f537c38!2sGoogleplex!5e0!3m2!1sen!2sus!4v1684424345091!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Company Location"
                    ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
