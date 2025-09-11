'use server';

/**
 * @fileOverview AI-powered quote tool to generate an estimated cost for a project.
 *
 * - generateQuoteEstimate - A function that generates the quote estimate.
 * - GenerateQuoteEstimateInput - The input type for the generateQuoteEstimate function.
 * - GenerateQuoteEstimateOutput - The return type for the generateQuoteEstimate function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateQuoteEstimateInputSchema = z.object({
  projectDetails: z
    .string()
    .describe('Detailed description of the project requirements and scope.'),
  budgetRange: z
    .string()
    .describe(
      'The clients budget range that can be used to tailor the estimate.'
    ),
  timelineExpectations: z
    .string()
    .describe('The clients timeline expectations for project completion.'),
  desiredFeatures: z
    .string()
    .describe('List of desired features for the project.'),
});
export type GenerateQuoteEstimateInput = z.infer<
  typeof GenerateQuoteEstimateInputSchema
>;

const GenerateQuoteEstimateOutputSchema = z.object({
  estimatedCost: z
    .string()
    .describe('The estimated cost of the project based on the details provided.'),
  timelineEstimate: z
    .string()
    .describe('The estimated timeline for project completion.'),
  scopeAssumptions: z
    .string()
    .describe(
      'Assumptions made about the project scope based on the provided details.'
    ),
  keyRecommendations: z
    .string()
    .describe('Key recommendations for the client to consider.'),
});
export type GenerateQuoteEstimateOutput = z.infer<
  typeof GenerateQuoteEstimateOutputSchema
>;

export async function generateQuoteEstimate(
  input: GenerateQuoteEstimateInput
): Promise<GenerateQuoteEstimateOutput> {
  return generateQuoteEstimateFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateQuoteEstimatePrompt',
  input: {schema: GenerateQuoteEstimateInputSchema},
  output: {schema: GenerateQuoteEstimateOutputSchema},
  prompt: `You are an AI-powered tool that generates estimated costs, timelines, scope assumptions, and key recommendations for software development projects based on the client's provided project details, budget range, timeline expectations and desired features. You should provide the most accurate cost and timelines as possible. Provide all responses in a professional manner.

Project Details: {{{projectDetails}}}
Budget Range: {{{budgetRange}}}
Timeline Expectations: {{{timelineExpectations}}}
Desired Features: {{{desiredFeatures}}}`,
});

const generateQuoteEstimateFlow = ai.defineFlow(
  {
    name: 'generateQuoteEstimateFlow',
    inputSchema: GenerateQuoteEstimateInputSchema,
    outputSchema: GenerateQuoteEstimateOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
