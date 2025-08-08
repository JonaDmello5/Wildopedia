import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Wildopedia. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="/about" className="text-sm hover:text-primary transition-colors">About Us</Link>
            <Link href="/privacy" className="text-sm hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="text-sm hover:text-primary transition-colors">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
