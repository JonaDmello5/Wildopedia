import Link from 'next/link';
import Image from 'next/image';
import { PawPrint, Bird, Fish, Leaf } from 'lucide-react';
import { animals } from '@/lib/animals';
import AnimalCard from '@/components/AnimalCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SearchBar from '@/components/SearchBar';

const categoryIcons = {
  Mammals: <PawPrint className="h-10 w-10 text-accent" />,
  Birds: <Bird className="h-10 w-10 text-accent" />,
  Reptiles: <Leaf className="h-10 w-10 text-accent" />,
  'Marine Life': <Fish className="h-10 w-10 text-accent" />,
};

const categories = [
  { name: 'Mammals', icon: categoryIcons.Mammals },
  { name: 'Birds', icon: categoryIcons.Birds },
  { name: 'Reptiles', icon: categoryIcons.Reptiles },
  { name: 'Marine Life', icon: categoryIcons['Marine Life'] },
];

export default function Home() {
  const featuredAnimals = animals.slice(0, 4);

  return (
    <div className="flex flex-col">
      <section className="relative h-[50vh] w-full">
        <Image
          src="/images/20250810_2041_Lion's Intense Focus_simple_compose_01k2a8jp1wezhaeed27wpqg4wc.gif"
          alt="A montage of diverse wildlife"
          layout="fill"
          objectFit="cover"
          className="z-0"
          data-ai-hint="wildlife montage"
          priority
          unoptimized
        />
        <div className="relative z-10 flex h-full flex-col items-center justify-center bg-black/50 text-center p-4">
          <h1 className="text-4xl font-bold text-white md:text-6xl font-headline">Welcome to Wildopedia</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-200">
            Explore the fascinating world of animals, from the depths of the oceans to the highest mountain peaks.
          </p>
          <div className="mt-8 w-full max-w-2xl">
            <SearchBar />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight font-headline">Browse by Category</h2>
            <p className="mt-2 text-muted-foreground">Discover animals based on their classification.</p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link key={category.name} href={`/${category.name.toLowerCase().replace(/\s+/g, '-')}`} passHref>
              <Card className="group transform cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  {category.icon}
                  <h3 className="mt-4 text-xl font-semibold">{category.name}</h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight font-headline">Featured Animals</h2>
            <p className="mt-2 text-muted-foreground">Get to know some of the most amazing creatures on Earth.</p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {featuredAnimals.map((animal) => (
              <AnimalCard key={animal.slug} animal={animal} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
