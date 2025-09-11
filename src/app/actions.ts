'use server';
import {
  generateQuoteEstimate,
  GenerateQuoteEstimateInput,
  GenerateQuoteEstimateOutput,
} from '@/ai/flows/generate-quote-estimate';
import {
  summarizeBlogArticle,
  SummarizeBlogArticleInput,
  SummarizeBlogArticleOutput,
} from '@/ai/flows/summarize-blog-article';
import { z } from 'zod';

export type QuoteState = {
  form: GenerateQuoteEstimateInput;
  result?: GenerateQuoteEstimateOutput;
  error?: string;
};

const QuoteSchema = z.object({
  projectDetails: z.string().min(50, 'Please provide more details about your project.'),
  budgetRange: z.string().min(1, 'Please select a budget range.'),
  timelineExpectations: z.string().min(1, 'Please select a timeline.'),
  desiredFeatures: z.string().min(20, 'Please list at least a few desired features.'),
});

export async function getQuoteEstimate(
  prevState: QuoteState,
  formData: FormData
): Promise<QuoteState> {
  const input = {
    projectDetails: formData.get('projectDetails') as string,
    budgetRange: formData.get('budgetRange') as string,
    timelineExpectations: formData.get('timelineExpectations') as string,
    desiredFeatures: formData.get('desiredFeatures') as string,
  };

  const validatedFields = QuoteSchema.safeParse(input);

  if (!validatedFields.success) {
    return {
      form: input,
      error: validatedFields.error.flatten().fieldErrors[Object.keys(validatedFields.error.flatten().fieldErrors)[0] as keyof typeof input]![0],
    };
  }

  try {
    const result = await generateQuoteEstimate(validatedFields.data);
    return {
      form: input,
      result: result,
    };
  } catch (e) {
    return {
      form: input,
      error: 'An unexpected error occurred. Please try again.',
    };
  }
}

export type SummaryState = {
  result?: SummarizeBlogArticleOutput;
  error?: string;
}

export async function getArticleSummary(
  prevState: SummaryState,
  formData: FormData
): Promise<SummaryState> {
  const articleText = formData.get('articleText') as string;

  if (!articleText || articleText.length < 100) {
    return { error: 'Article content is too short to summarize.' };
  }

  try {
    const result = await summarizeBlogArticle({ articleText });
    return { result };
  } catch (e) {
    return { error: 'Failed to generate summary. Please try again.' };
  }
}
