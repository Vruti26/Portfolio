'use server';

/**
 * @fileOverview An AI agent that tailors a resume based on a job description and a project portfolio.
 *
 * - resumeTailor - A function that tailors a resume based on a job description and a project portfolio.
 * - ResumeTailorInput - The input type for the resumeTailor function.
 * - ResumeTailorOutput - The return type for the resumeTailor function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ResumeTailorInputSchema = z.object({
  jobDescription: z
    .string()
    .describe('The job description for which the resume is being tailored.'),
  projectPortfolio: z
    .string()
    .describe(
      'A description of the project portfolio, including bullet points for each project.'
    ),
});
export type ResumeTailorInput = z.infer<typeof ResumeTailorInputSchema>;

const ResumeTailorOutputSchema = z.object({
  tailoredBulletPoints: z
    .array(z.string())
    .describe(
      'A list of tailored bullet points from the project portfolio, relevant to the job description.'
    ),
  explanations: z
    .array(z.string())
    .describe(
      'Explanations of why each bullet point is a good fit for the job description.'
    ),
});
export type ResumeTailorOutput = z.infer<typeof ResumeTailorOutputSchema>;

export async function resumeTailor(
  input: ResumeTailorInput
): Promise<ResumeTailorOutput> {
  return resumeTailorFlow(input);
}

const resumeTailorPrompt = ai.definePrompt({
  name: 'resumeTailorPrompt',
  input: {schema: ResumeTailorInputSchema},
  output: {schema: ResumeTailorOutputSchema},
  prompt: `You are an expert resume tailor. Given a job description and a project portfolio, you will tailor the project portfolio to match the job description.

Job Description: {{{jobDescription}}}

Project Portfolio: {{{projectPortfolio}}}

Provide a list of tailored bullet points from the project portfolio that are relevant to the job description. For each bullet point, provide an explanation of why it is a good fit for the job description.

Output the tailored bullet points and explanations in a JSON format.

{{output}}
`,
});

const resumeTailorFlow = ai.defineFlow(
  {
    name: 'resumeTailorFlow',
    inputSchema: ResumeTailorInputSchema,
    outputSchema: ResumeTailorOutputSchema,
  },
  async input => {
    const {output} = await resumeTailorPrompt(input);
    return output!;
  }
);
