import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowLeftIcon, DownloadIcon, ExternalLinkIcon, FileTextIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/resume')({
  component: ResumePage,
});

const RESUME_PDF = '/resume.pdf';

function ResumePage() {
  return (
    <main className="relative flex h-dvh flex-col bg-background text-foreground">
      {/* Header */}
      <header className="relative z-10 flex items-center justify-between border-b border-border bg-background px-6 py-4">
        <Button variant="ghost" asChild>
          <Link to="/">
            <ArrowLeftIcon className="mr-2 size-4" />
            Back
          </Link>
        </Button>
        {/* Desktop only: on mobile the body card owns the actions */}
        <Button variant="default" className="hidden md:flex" asChild>
          <a href={RESUME_PDF} download>
            <DownloadIcon className="mr-2 size-4" />
            Download
          </a>
        </Button>
      </header>

      {/* PDF viewer (desktop). <object> renders blank on most mobile browsers. */}
      <object
        data={RESUME_PDF}
        type="application/pdf"
        className="hidden flex-1 md:block"
        aria-label="Resume"
      >
        <p className="p-8 text-center">
          Unable to display PDF.
          {' '}
          <a href={RESUME_PDF} download className="text-primary underline">
            Download it instead
          </a>
        </p>
      </object>

      {/* Mobile fallback. Embedded PDFs don't render on mobile, so open in a new tab or download.
          Centered against the full viewport so the header bar doesn't bias it downward; the opaque
          header (bg-background, z-10) cleanly hides any overlap on very short/landscape viewports. */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-6 text-center md:hidden">
        <div className="flex size-16 items-center justify-center rounded-2xl bg-card text-muted-foreground">
          <FileTextIcon className="size-8" />
        </div>
        <div className="space-y-1">
          <p className="font-mono text-lg font-semibold">Resume</p>
          <p className="text-sm text-muted-foreground">
            Open the PDF in a new tab or download a copy.
          </p>
        </div>
        <div className="flex w-full max-w-xs flex-col gap-3">
          <Button asChild>
            <a href={RESUME_PDF} target="_blank" rel="noopener noreferrer">
              <ExternalLinkIcon className="mr-2 size-4" />
              Open PDF
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href={RESUME_PDF} download>
              <DownloadIcon className="mr-2 size-4" />
              Download
            </a>
          </Button>
        </div>
      </div>
    </main>
  );
}
