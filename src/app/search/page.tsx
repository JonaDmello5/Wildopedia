import { animals } from '@/lib/animals';
import AnimalCard from '@/components/AnimalCard';
import Breadcrumbs from '@/components/Breadcrumbs';

const SearchPage = ({ searchParams }: { searchParams: { q?: string } }) => {
  const query = searchParams.q || '';
  const filteredAnimals = query
    ? animals.filter(animal =>
        animal.name.toLowerCase().includes(query.toLowerCase()) ||
        animal.commonName.toLowerCase().includes(query.toLowerCase()) ||
        animal.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const breadcrumbs = [
    { href: '/', label: 'Home' },
    { href: `/search?q=${query}`, label: `Search: "${query}"` },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbs} />
      <h1 className="text-4xl font-bold tracking-tight mb-2 font-headline">Search Results</h1>
      <p className="text-lg text-muted-foreground mb-8">
        {query
          ? `Found ${filteredAnimals.length} results for "${query}"`
          : 'Please enter a search term to find animals.'}
      </p>

      {query && filteredAnimals.length > 0 && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredAnimals.map((animal) => (
            <AnimalCard key={animal.slug} animal={animal} />
          ))}
        </div>
      )}

      {query && filteredAnimals.length === 0 && (
        <div className="text-center py-16">
          <h2 className="text-2xl font-semibold">No results found</h2>
          <p className="text-muted-foreground mt-2">Try searching for something else.</p>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
