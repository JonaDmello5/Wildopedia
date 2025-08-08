import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'About Us | Wildopedia',
  description: 'Learn more about Wildopedia, our mission, and our team.',
};

const AboutPage = () => {
  const breadcrumbs = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbs} />
      <div className="max-w-3xl mx-auto prose dark:prose-invert">
        <h1 className="text-4xl font-bold font-headline mb-4">About Wildopedia</h1>
        <p className="text-lg leading-relaxed mb-6">
          Welcome to Wildopedia, your number one source for fascinating facts and information about the animal kingdom. We're dedicated to giving you the very best of wildlife knowledge, with a focus on accuracy, engagement, and education.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Founded in 2024, Wildopedia has come a long way from its beginnings. When we first started out, our passion for wildlife and conservation drove us to create a platform where people of all ages could learn about and appreciate the incredible diversity of life on Earth. We believe that education is the key to conservation, and by sharing the wonders of the animal world, we hope to inspire a new generation of nature lovers and protectors.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Our content is carefully researched and curated by a team of wildlife enthusiasts and experts. From the smallest insects to the largest whales, we aim to cover a wide range of species, providing detailed profiles, stunning visuals, and fun facts that bring these creatures to life.
        </p>
        <p className="text-lg leading-relaxed">
          We hope you enjoy our encyclopedia as much as we enjoy offering it to you. If you have any questions or comments, please don't hesitate to contact us.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
