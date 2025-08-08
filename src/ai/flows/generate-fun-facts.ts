'use server';

/**
 * @fileOverview An AI agent for generating fun facts about animals.
 *
 * - generateFunFacts - A function that generates fun facts for a given animal.
 * - GenerateFunFactsInput - The input type for the generateFunFacts function.
 * - GenerateFunFactsOutput - The return type for the generateFunFacts function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateFunFactsInputSchema = z.object({
  animalName: z.string().describe('The name of the animal to generate fun facts for.'),
  animalDescription: z.string().describe('A short description of the animal.'),
});
export type GenerateFunFactsInput = z.infer<typeof GenerateFunFactsInputSchema>;

const GenerateFunFactsOutputSchema = z.object({
  funFacts: z.array(z.string()).describe('An array of fun facts about the animal.'),
});
export type GenerateFunFactsOutput = z.infer<typeof GenerateFunFactsOutputSchema>;

export async function generateFunFacts(input: GenerateFunFactsInput): Promise<GenerateFunFactsOutput> {
  return generateFunFactsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateFunFactsPrompt',
  input: {schema: GenerateFunFactsInputSchema},
  output: {schema: GenerateFunFactsOutputSchema},
  prompt: `You are a wildlife expert who specializes in generating fun and engaging facts about animals.

  Generate 3 fun facts about the following animal:

  Animal Name: {{{animalName}}}
  Description: {{{animalDescription}}}

  Format the fun facts as a bulleted list.
  `, 
});

const generateFunFactsFlow = ai.defineFlow(
  {
    name: 'generateFunFactsFlow',
    inputSchema: GenerateFunFactsInputSchema,
    outputSchema: GenerateFunFactsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
