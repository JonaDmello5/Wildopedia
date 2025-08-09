import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getAnimalBySlug, animals } from '@/lib/animals';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FunFacts } from '@/components/FunFacts';
import { FunFactsSkeleton } from '@/components/FunFactsSkeleton';
import { Leaf, HeartPulse, Weight, Clock, Landmark, Utensils, BrainCircuit } from 'lucide-react';

export async function generateStaticParams() {
  return animals.map((animal) => ({
    category: animal.category.toLowerCase().replace(/\s+/g, '-'),
    animal: animal.slug,
  }));
}

export function generateMetadata({ params }: { params: { animal: string } }) {
    const animal = getAnimalBySlug(params.animal);
    if (!animal) {
        return {
            title: 'Animal Not Found | Wildopedia'
        }
    }
    return {
        title: `${animal.commonName} | Wildopedia`,
        description: `Learn all about the ${animal.commonName}. ${animal.description}`,
    };
}

const AnimalProfilePage = ({ params }: { params: { category: string; animal: string } }) => {
  const animal = getAnimalBySlug(params.animal);

  // Corrected validation logic
  if (!animal || animal.category.toLowerCase().replace(/\s+/g, '-') !== params.category) {
    notFound();
  }

  const breadcrumbs = [
    { href: '/', label: 'Home' },
    { href: `/${animal.category.toLowerCase().replace(/\s+/g, '-')}`, label: animal.category },
    { href: `/${animal.category.toLowerCase().replace(/\s+/g, '-')}/${animal.slug}`, label: animal.commonName },
  ];
  
  const related = animals.filter(a => animal.relatedSpecies.includes(a.slug));

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbs} />
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
        <article className="lg:col-span-2">
          <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-lg shadow-lg mb-8">
            <Image
              src={animal.bannerUrl}
              alt={`A majestic ${animal.commonName}`}
              layout="fill"
              objectFit="cover"
              priority
              data-ai-hint={`animal portrait ${animal.commonName}`}
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold font-headline">{animal.commonName}</h1>
          <p className="text-xl text-muted-foreground italic mb-6">{animal.name}</p>

          <p className="text-lg leading-relaxed mb-8">{animal.overview}</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-3xl font-bold font-headline mb-4 flex items-center gap-2"><Landmark className="text-primary"/>Habitat</h2>
              <p className="text-base leading-loose">{animal.habitat}</p>
            </section>
            <section>
              <h2 className="text-3xl font-bold font-headline mb-4 flex items-center gap-2"><Utensils className="text-primary"/>Diet</h2>
              <p className="text-base leading-loose">{animal.diet}</p>
            </section>
            <section>
              <h2 className="text-3xl font-bold font-headline mb-4 flex items-center gap-2"><BrainCircuit className="text-primary"/>Behavior</h2>
              <p className="text-base leading-loose">{animal.behavior}</p>
            </section>
          </div>
          
          <Suspense fallback={<FunFactsSkeleton />}>
            <FunFacts animalName={animal.commonName} animalDescription={animal.description} />
          </Suspense>

          {animal.videoUrl && (
            <div className="mt-8">
              <h2 className="text-3xl font-bold font-headline mb-4">Watch in Action</h2>
              <div className="aspect-w-16 aspect-h-9">
                 <iframe
                    className="w-full h-full rounded-lg shadow-lg"
                    style={{ aspectRatio: '16/9' }}
                    src={animal.videoUrl}
                    title={`YouTube video player for ${animal.commonName}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
              </div>
            </div>
          )}

        </article>

        <aside className="lg:col-span-1 mt-8 lg:mt-0">
          <div className="sticky top-24 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Status & Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-3"><HeartPulse className="h-5 w-5 text-accent" /><span className="font-semibold">Conservation:</span> {animal.status.conservation}</li>
                  <li className="flex items-center gap-3"><Clock className="h-5 w-5 text-accent" /><span className="font-semibold">Lifespan:</span> {animal.status.lifespan}</li>
                  <li className="flex items-center gap-3"><Weight className="h-5 w-5 text-accent" /><span className="font-semibold">Weight:</span> {animal.status.weight}</li>
                </ul>
              </CardContent>
            </Card>
            
            {related.length > 0 && (
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline">Related Species</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2">
                        {related.map(r => (
                            <li key={r.slug}>
                                <Link href={`/${r.category.toLowerCase().replace(/\s+/g, '-')}/${r.slug}`} className="flex items-center gap-2 group">
                                    <Leaf className="h-4 w-4 text-primary group-hover:text-accent transition-colors"/>
                                    <span className="text-foreground/80 group-hover:text-foreground transition-colors">{r.commonName}</span>
                                </Link>
                            </li>
                        ))}
                        </ul>
                    </CardContent>
                </Card>
            )}

            <Card className="bg-muted text-center">
                <CardContent className="p-6">
                    <p className="text-muted-foreground font-semibold">Advertisement</p>
                </CardContent>
            </Card>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default AnimalProfilePage;
