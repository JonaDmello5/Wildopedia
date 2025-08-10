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
        <h1 className="text-3xl font-bold mb-6">Welcome to Wildopedia – Where the Wild Comes Alive!</h1>
        <p className="mb-4">
          At Wildopedia, we don’t just share facts—we tell stories, spark curiosity, and celebrate the breathtaking beauty of Earth’s creatures. Whether you’re a budding naturalist, a passionate conservationist, or simply someone who loves the magic of the animal kingdom, you’ve found your home here. Our mission? To make wildlife knowledge as captivating as a safari at sunrise and as enriching as a deep dive into the ocean’s mysteries.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Our Story: Born from Passion, Built for You</h2>
        <p className="mb-4">
          Wildopedia began in 2025 with a simple yet powerful idea: the more we know about animals, the more we’ll care for them. What started as a humble dream among wildlife enthusiasts has blossomed into a thriving hub where nature lovers from around the world gather to explore, learn, and fall in love with the wild.
        </p>
        <p className="mb-6">
          Every creature—from the tiniest firefly to the mighty blue whale—has a tale worth telling. That’s why we pour our hearts into crafting content that doesn’t just inform but inspires. We believe that education is the first step toward conservation, and by bringing the wonders of wildlife to your screen, we hope to ignite a lifelong passion for protecting our planet’s incredible biodiversity.
        </p>

        <h2 className="text-2xl font-semibold mb-4">What Makes Wildopedia Special?</h2>
        <p className="mb-3">We’re more than just an encyclopedia—we’re your guides on a journey through nature’s most fascinating chapters. Here’s what sets us apart:</p>
        <ul className="list-disc list-inside mb-6 space-y-3">
          <li>
            <strong className="font-bold">Expert-Crafted, Heartfelt Content</strong>
            <p className="ml-4 mt-1">Our team is a vibrant mix of wildlife biologists, photographers, writers, and conservationists who live and breathe the natural world. Every article, fact, and image is meticulously researched and presented with care, ensuring you get accurate, engaging, and awe-inspiring insights.</p>
          </li>
          <li>
            <strong className="font-bold">A World of Wildlife at Your Fingertips</strong>
            <p className="ml-4 mt-1">From the dense Amazon rainforests to the icy realms of the Arctic, Wildopedia covers it all. Dive into detailed animal profiles, uncover little-known behaviors, and marvel at stunning visuals that bring these creatures to life. Ever wondered how a chameleon changes colors or why wolves howl at the moon? You’ll find answers—and so much more—here.</p>
          </li>
          <li>
            <strong className="font-bold">Learning Made Fun & Fascinating</strong>
            <p className="ml-4 mt-1">Who says education has to be dull? We sprinkle our content with surprising trivia, interactive elements, and storytelling that makes every fact stick. Whether you’re a student, teacher, or just a curious soul, we make sure every visit leaves you a little wiser—and a lot more amazed.</p>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Our Promise to You</h2>
        <p className="mb-3">At Wildopedia, we’re committed to:</p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li><strong className="font-bold">Accuracy You Can Trust</strong> – Science-backed, up-to-date, and double-checked by experts.</li>
          <li><strong className="font-bold">Awe-Inspiring Visuals</strong> – Because seeing a snow leopard in action is just as important as reading about it.</li>
          <li><strong className="font-bold">A Voice That Speaks to You</strong> – Friendly, warm, and always excited to share the wonders of wildlife.</li>
          <li><strong className="font-bold">A Community of Nature Lovers</strong> – Your questions, stories, and passion fuel what we do.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Join Our Wild Adventure!</h2>
        <p className="mb-4">
          The animal kingdom is vast, mysterious, and endlessly enchanting—and we’re just getting started. Whether you’re here to research, explore, or simply lose yourself in the beauty of nature, Wildopedia is your gateway to the wild.
        </p>
        <p className="mb-6">
          Got a question? A suggestion? Or maybe just a favorite animal you’d love to see featured? We’d love to hear from you! Together, let’s discover, learn, and protect the incredible world we share.
        </p>

        <p className="text-lg font-semibold mb-2">Because every creature has a story. And every story deserves to be told.</p>
        <p className="text-right">—The Wildopedia Team 🐾</p>
      </div>

    </div>
  );
};

export default AboutPage;
