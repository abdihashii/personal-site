import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowLeftIcon, DownloadIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/resume')({
  component: ResumePage,
});

function ResumePage() {
  return (
    <main className="flex h-screen flex-col bg-background text-foreground">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-border px-6 py-4">
        <Button variant="ghost" asChild>
          <Link to="/">
            <ArrowLeftIcon className="mr-2 size-4" />
            Back
          </Link>
        </Button>
        <Button variant="default" asChild>
          <a href="/resume.pdf" download>
            <DownloadIcon className="mr-2 size-4" />
            Download
          </a>
        </Button>
      </header>

      {/* PDF Viewer */}
      <div className="flex-1">
        <object
          data="/resume.pdf"
          type="application/pdf"
          className="size-full"
          aria-label="Resume"
        >
          <p className="p-8 text-center">
            Unable to display PDF.
            {' '}
            <a href="/resume.pdf" download className="text-primary underline">
              Download it instead
            </a>
          </p>
        </object>
      </div>
    </main>
  );
}
