'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { getArticleSummary } from '@/app/actions';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from './ui/button';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Terminal } from 'lucide-react';
import { useEffect, useRef } from 'react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="sm">
      {pending ? 'Generating...' : 'Generate AI Summary'}
    </Button>
  );
}

export function ArticleSummary({ articleText }: { articleText: string }) {
  const [state, formAction] = useActionState(getArticleSummary, { result: undefined, error: undefined });
  const formRef = useRef<HTMLFormElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state.result || state.error) {
      setTimeout(() => {
         accordionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  }, [state]);

  return (
    <div ref={accordionRef} className="mb-8">
      <Accordion type="single" collapsible className="w-full bg-background rounded-lg px-4 border shadow-sm">
        <AccordionItem value="item-1" className="border-b-0">
          <AccordionTrigger>
            <span className="font-semibold text-lg">Article Quick Summary</span>
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            {!state.result && !state.error && (
              <div className="flex flex-col items-start gap-4">
                <p className="text-muted-foreground">Don't have time to read the full article? Click the button to get an AI-generated summary.</p>
                <form action={formAction} ref={formRef}>
                  <input type="hidden" name="articleText" value={articleText} />
                  <SubmitButton />
                </form>
              </div>
            )}
            {state.result && (
              <Alert className="bg-secondary/50">
                <Terminal className="h-4 w-4" />
                <AlertTitle>AI Generated Summary</AlertTitle>
                <AlertDescription>
                  <p>{state.result.summary}</p>
                </AlertDescription>
              </Alert>
            )}
            {state.error && (
              <Alert variant="destructive">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{state.error}</AlertDescription>
              </Alert>
            )}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
