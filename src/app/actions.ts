
'use server';
import {
  generateQuoteEstimate,
  GenerateQuoteEstimateInput,
  GenerateQuoteEstimateOutput,
} from '@/ai/flows/generate-quote-estimate';
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
