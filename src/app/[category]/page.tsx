import { notFound } from 'next/navigation';
import { getAnimalsByCategory, categories } from '@/lib/animals';
import AnimalCard from '@/components/AnimalCard';
import Breadcrumbs from '@/components/Breadcrumbs';

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export function generateMetadata({ params }: { params: { category: string } }) {
    const categoryName = params.category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    return {
        title: `${categoryName} | Wildopedia`,
        description: `Explore all animals in the ${categoryName} category.`,
    };
}


const CategoryPage = ({ params }: { params: { category: string } }) => {
  const categorySlug = params.category.toLowerCase();
  
  if (!categories.map(c => c.toLowerCase().replace(/\s+/g, '-')).includes(categorySlug)) {
    notFound();
  }

  const animalsInCategory = getAnimalsByCategory(categorySlug);
  const categoryName = categorySlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());


  const breadcrumbs = [
    { href: '/', label: 'Home' },
    { href: `/${categorySlug}`, label: categoryName },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbs} />
      <h1 className="text-4xl font-bold tracking-tight mb-2 font-headline">{categoryName}</h1>
      <p className="text-lg text-muted-foreground mb-8">Discover the diverse species within the {categoryName.toLowerCase()} family.</p>

      {animalsInCategory.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {animalsInCategory.map((animal) => (
            <AnimalCard key={animal.slug} animal={animal} />
          ))}
        </div>
      ) : (
        <p>No animals found in this category.</p>
      )}
    </div>
  );
};

export default CategoryPage;
