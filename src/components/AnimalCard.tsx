import Link from 'next/link';
import Image from 'next/image';
import type { Animal } from '@/lib/animals';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

interface AnimalCardProps {
  animal: Animal;
}

const AnimalCard = ({ animal }: AnimalCardProps) => {
  return (
    <Link href={`/${animal.category.toLowerCase().replace(' ', '-')}/${animal.slug}`} passHref>
      <Card className="group h-full transform overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
        <CardHeader className="p-0">
          <div className="relative h-48 w-full">
            <Image
              src={animal.imageUrl}
              alt={animal.commonName}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 group-hover:scale-110"
              data-ai-hint={`animal ${animal.commonName}`}
            />
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="text-lg font-bold font-headline">{animal.commonName}</CardTitle>
          <CardDescription className="mt-1 text-sm italic text-muted-foreground">{animal.name}</CardDescription>
          <p className="mt-2 text-sm">{animal.description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default AnimalCard;
