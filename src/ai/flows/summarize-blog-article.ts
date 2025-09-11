'use server';

/**
 * @fileOverview Summarizes a blog article using AI.
 *
 * - summarizeBlogArticle - A function that summarizes a given blog article.
 * - SummarizeBlogArticleInput - The input type for the summarizeBlogArticle function.
 * - SummarizeBlogArticleOutput - The return type for the summarizeBlogArticle function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeBlogArticleInputSchema = z.object({
  articleText: z
    .string()
    .describe('The full text content of the blog article to summarize.'),
});
export type SummarizeBlogArticleInput = z.infer<typeof SummarizeBlogArticleInputSchema>;

const SummarizeBlogArticleOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the blog article.'),
});
export type SummarizeBlogArticleOutput = z.infer<typeof SummarizeBlogArticleOutputSchema>;

export async function summarizeBlogArticle(input: SummarizeBlogArticleInput): Promise<SummarizeBlogArticleOutput> {
  return summarizeBlogArticleFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeBlogArticlePrompt',
  input: {schema: SummarizeBlogArticleInputSchema},
  output: {schema: SummarizeBlogArticleOutputSchema},
  prompt: `Summarize the following blog article in a concise manner:\n\n{{{articleText}}}`, 
});

const summarizeBlogArticleFlow = ai.defineFlow(
  {
    name: 'summarizeBlogArticleFlow',
    inputSchema: SummarizeBlogArticleInputSchema,
    outputSchema: SummarizeBlogArticleOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
