'use server';

import { resumeTailor, type ResumeTailorOutput } from '@/ai/flows/resume-tailor';
import { z } from 'zod';

type FormState = {
  message: string | null;
  data: ResumeTailorOutput | null;
  error: string | null;
};

const FormSchema = z.object({
  jobDescription: z.string().min(50, { message: 'Job description must be at least 50 characters long.' }),
  projectPortfolio: z.string(),
});

export async function tailorResumeAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = FormSchema.safeParse({
    jobDescription: formData.get('jobDescription'),
    projectPortfolio: formData.get('projectPortfolio'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Validation failed.',
      data: null,
      error: validatedFields.error.flatten().fieldErrors.jobDescription?.[0] || 'Invalid input.',
    };
  }

  try {
    const result = await resumeTailor(validatedFields.data);
    if (!result || !result.tailoredBulletPoints || result.tailoredBulletPoints.length === 0) {
        return {
            message: 'AI processing complete, but no relevant points found.',
            data: null,
            error: 'Could not generate relevant bullet points. Try a different job description.',
        };
    }
    return {
      message: 'Success',
      data: result,
      error: null,
    };
  } catch (e: any) {
    console.error(e);
    return {
      message: 'An unexpected error occurred.',
      data: null,
      error: e.message || 'Failed to process the request with the AI model. Please try again later.',
    };
  }
}
