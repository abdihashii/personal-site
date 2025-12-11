export type HighlightType = 'project' | 'writing' | 'video' | 'talk' | 'podcast' | 'oss';

export interface BaseHighlight {
  type: HighlightType;
  title: string;
  description: string;
  url: string;
  highlighted?: boolean;
  priority?: number; // lower = higher priority
  image?: string;
  date?: string;
}

export interface Project extends BaseHighlight {
  type: 'project';
  tech: string[];
}

export interface Writing extends BaseHighlight {
  type: 'writing';
  readingTime?: string;
}

export interface Video extends BaseHighlight {
  type: 'video';
  thumbnail?: string;
  duration?: string;
}

export interface Talk extends BaseHighlight {
  type: 'talk';
  thumbnail?: string;
  duration?: string;
}

export interface Podcast extends BaseHighlight {
  type: 'podcast';
  duration?: string;
}

export interface OpenSource extends BaseHighlight {
  type: 'oss';
  tech: string[];
}

export type Highlight = Project | Writing | Video | Talk | Podcast | OpenSource;
