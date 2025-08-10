import Breadcrumbs from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export const metadata = {
    title: 'Contact Us | Wildopedia',
    description: 'Get in touch with the Wildopedia team.',
};

const ContactPage = () => {
  const breadcrumbs = [
    { href: '/', label: 'Home' },
    { href: '/contact', label: 'Contact Us' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbs} />
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold font-headline mb-4">Contact Us</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Have a question, suggestion, or just want to say hello? Fill out the form below and we'll get back to you as soon as possible.
        </p>

        <form method="POST" action="/api/contact">
          <div className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" placeholder="Your Name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Your message here" className="min-h-[150px]" />
            </div>
            <Button type="submit">Send Message</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
