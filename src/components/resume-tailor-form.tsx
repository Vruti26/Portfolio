'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { tailorResumeAction } from '@/app/actions';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2, Lightbulb, AlertTriangle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const initialState = {
  message: null,
  data: null,
  error: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="w-full md:w-auto">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        'Tailor My Resume'
      )}
    </Button>
  );
}

export function ResumeTailorForm({ projectPortfolio }: { projectPortfolio: string }) {
  const [state, formAction] = useFormState(tailorResumeAction, initialState);

  return (
    <Card>
      <CardContent className="p-6">
        <form action={formAction} className="space-y-6">
          <input type="hidden" name="projectPortfolio" value={projectPortfolio} />
          <div>
            <label htmlFor="jobDescription" className="block text-sm font-medium text-foreground mb-2">
              Job Description
            </label>
            <Textarea
              id="jobDescription"
              name="jobDescription"
              rows={10}
              placeholder="Paste the job description here..."
              required
              className="bg-background"
            />
          </div>
          <div className="flex justify-end">
            <SubmitButton />
          </div>
        </form>

        {state.error && (
            <div className="mt-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 flex-shrink-0" />
              <div>
                <p className="font-bold">An error occurred</p>
                <p className="text-sm">{state.error}</p>
              </div>
            </div>
          )}

        {state.data && (
          <div className="mt-8">
            <h3 className="font-headline text-2xl text-primary mb-4">
              Your Tailored Project Highlights
            </h3>
            <Accordion type="single" collapsible className="w-full space-y-2">
              {state.data.tailoredBulletPoints.map((point, index) => (
                <AccordionItem value={`item-${index}`} key={index} className="bg-background border rounded-lg px-4">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">{point}</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-md">
                      <Lightbulb className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground">{state.data.explanations[index]}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
