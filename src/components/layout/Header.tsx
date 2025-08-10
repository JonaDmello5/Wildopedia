import Link from 'next/link';
import { Menu, PawPrint } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { categories } from '@/lib/animals';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex w-full items-center justify-between md:w-auto md:flex-none">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <PawPrint className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block font-headline">
              Wildopedia
            </span>
          </Link>
          <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="transition-colors hover:text-primary"
              >
                {category}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2 md:justify-end">
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <Link href="/" className="flex items-center space-x-2 mb-6">
                  <PawPrint className="h-6 w-6 text-primary" />
                  <span className="font-bold font-headline">Wildopedia</span>
                </Link>
                <nav className="flex flex-col space-y-4">
                  {categories.map((category) => (
                    <Link
                      key={category}
                      href={`/${category.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-lg font-medium transition-colors hover:text-primary"
                    >
                      {category}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
