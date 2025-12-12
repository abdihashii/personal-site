import type { FormEvent } from 'react';

import { LoaderIcon, SendIcon, XIcon } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

async function submitContactForm(data: ContactFormData): Promise<{ success: boolean }> {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return { success: res.ok };
}

interface ContactFormProps {
  onClose: () => void;
}

export function ContactForm({ onClose }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const result = await submitContactForm(formData);
      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-300">
      <Card className="border-border/50 bg-card/50">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="font-mono text-base">Send a Message</CardTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="size-8"
            >
              <XIcon className="size-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {submitStatus === 'success'
            ? (
                <div className="py-4 text-center text-green-600 dark:text-green-400">
                  <p className="font-medium">Message sent!</p>
                  <p className="mt-1 text-sm text-muted-foreground">I'll get back to you soon.</p>
                </div>
              )
            : (
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="bg-background"
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    required
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-background"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    required
                  />
                  <Textarea
                    name="message"
                    placeholder="Your message..."
                    rows={4}
                    className="resize-none bg-background"
                    value={formData.message}
                    onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                    required
                  />
                  {submitStatus === 'error' && (
                    <p className="text-sm text-red-600 dark:text-red-400">
                      Failed to send. Please try again.
                    </p>
                  )}
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting
                      ? (
                          <LoaderIcon className="mr-2 size-4 animate-spin" />
                        )
                      : (
                          <SendIcon className="mr-2 size-4" />
                        )}
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
        </CardContent>
      </Card>
    </div>
  );
}
