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
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" placeholder="John" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" placeholder="Doe" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="john.doe@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" placeholder="Question about Elephants" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Your message here..." rows={6} />
          </div>
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
