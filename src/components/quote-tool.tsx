'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { getQuoteEstimate, QuoteState } from '@/app/actions';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { useEffect, useRef } from 'react';
import { DollarSign, Clock, ListChecks, Lightbulb } from 'lucide-react';

const initialState: QuoteState = {
  form: {
    projectDetails: '',
    budgetRange: '',
    timelineExpectations: '',
    desiredFeatures: '',
  },
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Analyzing Project...' : 'Generate Estimate'}
    </Button>
  );
}

export function QuoteTool() {
  const [state, formAction] = useFormState(getQuoteEstimate, initialState);
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state.result || state.error) {
       resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [state]);

  return (
    <div className="space-y-8">
      <Card className='shadow-lg'>
        <CardHeader>
          <CardTitle>Intelligent Quote Tool</CardTitle>
          <CardDescription>Fill out the form below to get an AI-generated project estimate.</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="projectDetails">Project Details</Label>
              <Textarea id="projectDetails" name="projectDetails" placeholder="Describe your project, its goals, target audience, and any existing systems it needs to integrate with." rows={6} defaultValue={state.form.projectDetails} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="budgetRange">Budget Range</Label>
                 <Select name="budgetRange" defaultValue={state.form.budgetRange}>
                    <SelectTrigger id="budgetRange">
                      <SelectValue placeholder="Select a budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="< $10,000">&lt; $10,000</SelectItem>
                      <SelectItem value="$10,000 - $25,000">$10,000 - $25,000</SelectItem>
                      <SelectItem value="$25,000 - $50,000">$25,000 - $50,000</SelectItem>
                      <SelectItem value="$50,000 - $100,000">$50,000 - $100,000</SelectItem>
                      <SelectItem value="> $100,000">&gt; $100,000</SelectItem>
                    </SelectContent>
                  </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="timelineExpectations">Timeline Expectations</Label>
                 <Select name="timelineExpectations" defaultValue={state.form.timelineExpectations}>
                    <SelectTrigger id="timelineExpectations">
                      <SelectValue placeholder="Select a timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-3 Months">1-3 Months</SelectItem>
                      <SelectItem value="3-6 Months">3-6 Months</SelectItem>
                      <SelectItem value="6-12 Months">6-12 Months</SelectItem>
                      <SelectItem value="> 12 Months">&gt; 12 Months</SelectItem>
                    </SelectContent>
                  </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="desiredFeatures">Desired Features</Label>
              <Textarea id="desiredFeatures" name="desiredFeatures" placeholder="List key features, e.g., user authentication, payment processing, admin dashboard, third-party integrations, etc." rows={4} defaultValue={state.form.desiredFeatures} />
            </div>
            <SubmitButton />
          </form>
        </CardContent>
      </Card>
      
      <div ref={resultRef}>
        {state.error && <Alert variant="destructive"><AlertTitle>Error</AlertTitle><AlertDescription>{state.error}</AlertDescription></Alert>}
        {state.result && (
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Your AI-Generated Estimate</CardTitle>
              <CardDescription>This is a preliminary estimate based on the information you provided. A more detailed quote will be provided after a consultation.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                    <DollarSign className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                        <h4 className="font-bold text-lg">Estimated Cost</h4>
                        <p className="text-muted-foreground">{state.result.estimatedCost}</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <Clock className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                        <h4 className="font-bold text-lg">Timeline Estimate</h4>
                        <p className="text-muted-foreground">{state.result.timelineEstimate}</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <ListChecks className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                        <h4 className="font-bold text-lg">Scope Assumptions</h4>
                        <p className="text-muted-foreground">{state.result.scopeAssumptions}</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <Lightbulb className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                        <h4 className="font-bold text-lg">Key Recommendations</h4>
                        <p className="text-muted-foreground">{state.result.keyRecommendations}</p>
                    </div>
                </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
