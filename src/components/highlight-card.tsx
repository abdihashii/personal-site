import { CodeIcon, ExternalLinkIcon, FileTextIcon, MicIcon, PlayIcon } from 'lucide-react';

import type { Highlight } from '@/lib/types';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface HighlightCardProps {
  highlight: Highlight;
  showImage?: boolean;
}

function getTypeBadge(type: Highlight['type']) {
  switch (type) {
    case 'writing':
      return { label: 'Article', icon: FileTextIcon };
    case 'video':
      return { label: 'Video', icon: PlayIcon };
    case 'talk':
      return { label: 'Talk', icon: PlayIcon };
    case 'podcast':
      return { label: 'Podcast', icon: MicIcon };
    case 'oss':
      return { label: 'Open Source', icon: CodeIcon };
    default:
      return null;
  }
}

export function HighlightCard({ highlight, showImage = false }: HighlightCardProps) {
  const typeBadge = getTypeBadge(highlight.type);
  const hasImage = showImage && highlight.image;
  const hasThumbnail = showImage && 'thumbnail' in highlight && highlight.thumbnail;
  const imageUrl = hasImage ? highlight.image : hasThumbnail ? highlight.thumbnail : null;

  return (
    <a
      href={highlight.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <Card className="h-full overflow-hidden border-border/50 bg-card/50 pt-0 transition-colors hover:border-primary/50">
        {showImage && (
          <div className="relative aspect-video w-full overflow-hidden">
            {imageUrl
              ? (
                  <img src={imageUrl} alt={highlight.title} className="size-full object-cover" />
                )
              : (
                  <div className="flex size-full items-center justify-center bg-linear-to-br from-primary/20 via-primary/10 to-background">
                    <span className="font-mono text-lg text-muted-foreground/50">{highlight.title}</span>
                  </div>
                )}
            {(highlight.type === 'video' || highlight.type === 'talk') && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <div className="flex size-12 items-center justify-center rounded-full bg-white/90">
                  <PlayIcon className="size-6 text-black" />
                </div>
              </div>
            )}
          </div>
        )}
        <CardHeader className={showImage ? '' : 'pt-6'}>
          <CardTitle className="flex items-center justify-between font-mono text-lg">
            {highlight.title}
            <ExternalLinkIcon className="size-4 text-muted-foreground" />
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <p className="h-[3lh] line-clamp-3 text-sm text-muted-foreground">{highlight.description}</p>
          <div className="relative">
            {/* Left fade */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-4 bg-linear-to-r from-card/80 to-transparent" />
            {/* Right fade */}
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-4 bg-linear-to-l from-card/80 to-transparent" />
            <div className="flex gap-1.5 overflow-x-auto scrollbar-hide">
              {/* Type badge for non-projects */}
              {typeBadge && (
                <Badge variant="outline" className="gap-1 text-xs">
                  <typeBadge.icon className="size-3" />
                  {typeBadge.label}
                </Badge>
              )}

              {/* Duration for videos/talks/podcasts */}
              {'duration' in highlight && highlight.duration && (
                <Badge variant="secondary" className="text-xs">
                  {highlight.duration}
                </Badge>
              )}

              {/* Reading time for writing */}
              {'readingTime' in highlight && highlight.readingTime && (
                <Badge variant="secondary" className="text-xs">
                  {highlight.readingTime}
                </Badge>
              )}

              {/* Tech stack for projects and OSS */}
              {'tech' in highlight && highlight.tech.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </a>
  );
}
