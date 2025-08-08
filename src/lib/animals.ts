export type Animal = {
  slug: string;
  name: string;
  category: 'Mammals' | 'Birds' | 'Reptiles' | 'Marine Life';
  commonName: string;
  description: string;
  imageUrl: string;
  bannerUrl: string;
  overview: string;
  habitat: string;
  diet: string;
  behavior: string;
  status: {
    lifespan: string;
    weight: string;
    conservation: string;
  };
  relatedSpecies: string[];
  videoUrl?: string;
};

export const animals: Animal[] = [
  {
    slug: 'african-elephant',
    name: 'Loxodonta africana',
    category: 'Mammals',
    commonName: 'African Elephant',
    description: 'The largest land animal, known for its intelligence and complex social structure.',
    imageUrl: 'https://placehold.co/400x300.png',
    bannerUrl: 'https://placehold.co/1200x400.png',
    overview: 'African elephants are the largest land animals on Earth. They are slightly larger than their Asian cousins and can be identified by their larger ears that are shaped somewhat like the continent of Africa.',
    habitat: 'Found in a variety of habitats including savannas, forests, and marshlands across Africa.',
    diet: 'Elephants are herbivores, spending much of their day eating. Their diet consists of grasses, leaves, bark, fruit, and a variety of foliage.',
    behavior: 'They live in complex social structures led by a matriarch. Elephants are known for their high intelligence, long memory, and deep family bonds. They communicate using a wide variety of sounds.',
    status: {
      lifespan: '60-70 years',
      weight: 'Up to 6,000 kg (13,000 lbs)',
      conservation: 'Vulnerable',
    },
    relatedSpecies: ['asian-elephant', 'woolly-mammoth'],
    videoUrl: 'https://www.youtube.com/embed/nS_3Uv_2A7c',
  },
  {
    slug: 'scarlet-macaw',
    name: 'Ara macao',
    category: 'Birds',
    commonName: 'Scarlet Macaw',
    description: 'A large, colorful parrot with a vibrant plumage of red, yellow, and blue.',
    imageUrl: 'https://placehold.co/400x300.png',
    bannerUrl: 'https://placehold.co/1200x400.png',
    overview: 'The Scarlet Macaw is one of the most beautiful and iconic parrots. Its brilliant colors make it a standout in the rainforest canopy. They are highly intelligent and social birds.',
    habitat: 'They inhabit humid evergreen forests in the American tropics, from southern Mexico to Peru, Colombia, Bolivia, Venezuela and Brazil.',
    diet: 'Their diet consists mainly of fruits, nuts, and seeds. Their strong beaks are perfect for cracking open hard nuts and seeds.',
    behavior: 'Scarlet Macaws mate for life. They are often seen flying in pairs or family groups. They nest in the cavities of tall, dead trees and can be very noisy.',
    status: {
      lifespan: '40-50 years, up to 75 in captivity',
      weight: 'About 1 kg (2.2 lbs)',
      conservation: 'Least Concern',
    },
    relatedSpecies: ['blue-and-yellow-macaw', 'hyacinth-macaw'],
  },
  {
    slug: 'komodo-dragon',
    name: 'Varanus komodoensis',
    category: 'Reptiles',
    commonName: 'Komodo Dragon',
    description: 'The world\'s largest lizard, a fearsome predator with a venomous bite.',
    imageUrl: 'https://placehold.co/400x300.png',
    bannerUrl: 'https://placehold.co/1200x400.png',
    overview: 'The Komodo dragon is a species of lizard found in the Indonesian islands of Komodo, Rinca, Flores, and Gili Motang. A member of the monitor lizard family Varanidae, it is the largest living species of lizard.',
    habitat: 'They prefer hot and dry places and typically live in dry, open grassland, savanna, and tropical forest at low elevations.',
    diet: 'Komodo dragons are carnivores. They are formidable predators and will eat almost anything, including deer, pigs, smaller dragons, and even large water buffalo.',
    behavior: 'They are solitary animals, coming together only to breed and eat. They can run up to 20 kph (12 mph) in short bursts. Their bite delivers a potent mix of venom and bacteria.',
    status: {
      lifespan: 'Up to 30 years',
      weight: 'Around 70 kg (150 lbs)',
      conservation: 'Endangered',
    },
    relatedSpecies: ['perentie-monitor', 'water-monitor'],
    videoUrl: 'https://www.youtube.com/embed/rGN8K-9V9UQ',
  },
  {
    slug: 'clownfish',
    name: 'Amphiprioninae',
    category: 'Marine Life',
    commonName: 'Clownfish',
    description: 'A small, brightly colored fish famous for its symbiotic relationship with sea anemones.',
    imageUrl: 'https://placehold.co/400x300.png',
    bannerUrl: 'https://placehold.co/1200x400.png',
    overview: 'Clownfish, or anemonefish, are small fish found in warmer waters of the Indian and Pacific oceans. They are known for their striking orange and white patterns. There are about 30 recognized species.',
    habitat: 'They form a symbiotic relationship with sea anemones. The clownfish is protected from the anemone\'s stinging cells by a layer of mucus, and in turn, the clownfish defends the anemone from predators.',
    diet: 'Clownfish are omnivores. They eat a variety of small invertebrates and algae, as well as undigested food from their host anemones.',
    behavior: 'Clownfish live in a strict hierarchy within a single anemone. The largest and most aggressive female is at the top. All clownfish are born male; they have the ability to change sex to become the dominant female if the previous one dies.',
    status: {
      lifespan: '6-10 years',
      weight: 'Up to 250 grams',
      conservation: 'Not evaluated for most species, but threatened by reef degradation.',
    },
    relatedSpecies: ['damselfish', 'sea-anemone'],
  },
];

export const categories = ['Mammals', 'Birds', 'Reptiles', 'Marine Life'];

export const getAnimalBySlug = (slug: string) => animals.find(a => a.slug === slug);
export const getAnimalsByCategory = (category: string) => animals.filter(a => a.category.toLowerCase() === category.toLowerCase());
