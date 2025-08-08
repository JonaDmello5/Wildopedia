import { generateFunFacts } from '@/ai/flows/generate-fun-facts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb } from 'lucide-react';

type FunFactsProps = {
  animalName: string;
  animalDescription: string;
};

export async function FunFacts({ animalName, animalDescription }: FunFactsProps) {
  try {
    const facts = await generateFunFacts({ animalName, animalDescription });

    if (!facts || facts.funFacts.length === 0) {
      return null;
    }

    return (
      <Card className="bg-accent/10 border-accent/30 mt-8 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-headline text-accent">
            <Lightbulb className="h-6 w-6" />
            Fun Facts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-3 pl-5 text-foreground/90">
            {facts.funFacts.map((fact, index) => (
              <li key={index} className="leading-relaxed">{fact}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    );
  } catch (error) {
    console.error('Error generating fun facts:', error);
    // Render nothing on error to not break the page
    return null;
  }
}
