import { GithubIcon, GlobeIcon, LinkedinIcon, MailIcon, TwitterIcon } from 'lucide-react';
import {
  SiAmazonwebservices,
  SiCloudflare,
  SiCss3,
  SiDocker,
  SiGit,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si';

import type { Highlight, OpenSource, Podcast, Project, Talk, Video, Writing } from './types';

export const SOCIAL_LINKS = [
  { name: 'GitHub', href: 'https://github.com/abdihashii', icon: GithubIcon },
  { name: 'Twitter', href: 'https://twitter.com/abdihashii', icon: TwitterIcon },
  { name: 'Email', href: 'mailto:abdirahman.haji.13@gmail.com', icon: MailIcon },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/abdirahman-haji', icon: LinkedinIcon },
];

export const SKILL_CATEGORIES = [
  {
    name: 'Languages',
    skills: [
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', url: 'https://www.typescriptlang.org/' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { name: 'Python', icon: SiPython, color: '#3776AB', url: 'https://www.python.org/' },
      { name: 'HTML', icon: SiHtml5, color: '#E34F26', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
      { name: 'CSS', icon: SiCss3, color: '#1572B6', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    ],
  },
  {
    name: 'Frontend',
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB', url: 'https://react.dev/' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF', url: 'https://nextjs.org/' },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4', url: 'https://tailwindcss.com/' },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933', url: 'https://nodejs.org/' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', url: 'https://www.postgresql.org/' },
      { name: 'Redis', icon: SiRedis, color: '#DC382D', url: 'https://redis.io/' },
      { name: 'RESTful API', icon: GlobeIcon, color: '#009688', url: 'https://aws.amazon.com/what-is/restful-api/' },
      { name: 'GraphQL', icon: SiGraphql, color: '#E10098', url: 'https://graphql.org/' },
    ],
  },
  {
    name: 'DevOps & Cloud',
    skills: [
      { name: 'Docker', icon: SiDocker, color: '#2496ED', url: 'https://www.docker.com/' },
      { name: 'Git', icon: SiGit, color: '#F05032', url: 'https://git-scm.com/' },
      { name: 'AWS', icon: SiAmazonwebservices, color: '#FF9900', url: 'https://aws.amazon.com/' },
      { name: 'Vercel', icon: SiVercel, color: '#FFFFFF', url: 'https://vercel.com/' },
      { name: 'CloudFlare', icon: SiCloudflare, color: '#F38020', url: 'https://www.cloudflare.com/' },
    ],
  },
];

export const TECH = {
  // 1-2: Anchors
  REACT: 'React',
  TYPESCRIPT: 'TypeScript',

  // 3: Frameworks
  NEXTJS: 'Next.js',
  TANSTACK_START: 'TanStack Start',

  // 4: Data Fetching
  TANSTACK_QUERY: 'TanStack Query',

  // 5: API Framework
  HONO: 'Hono',

  // 6: Infrastructure
  CLOUDFLARE_WORKERS: 'Cloudflare Workers',
  VERCEL: 'Vercel',

  // 7: Databases
  POSTGRESQL: 'PostgreSQL',
  SUPABASE: 'Supabase',

  // 8: Styling
  TAILWIND_CSS: 'Tailwind CSS',

  // 9: AI
  VERCEL_AI_SDK: 'Vercel AI SDK',

  // 10: Validation
  ZOD: 'Zod',

  // 11: Architecture
  MONOREPO: 'Monorepo',

  // 12: Hooks (differentiators - always last)
  E2E_ENCRYPTION: 'End-to-End Encryption',
  ZERO_KNOWLEDGE_BYOK: 'Zero-Knowledge BYOK',
} as const;

export const EXPERIENCES = [
  {
    company: 'Helius',
    role: 'Software Engineer',
    period: 'May 2024 - Present',
    description:
      'Built and lead Helius\' developer portal, creating a unified UI/UX that onboards hundreds of enterprise customers and hundreds of thousands of developers. Architected auth (traditional + Solana wallet) and billing (fiat/crypto) systems.',
    logo: '/logos/helius.svg',
  },
  {
    company: 'Google',
    role: 'Software Engineer',
    period: 'August 2021 - May 2024',
    description:
      'Search Infrastructure team. Helped pioneer the transition from monolithic to micro-frontend architecture for Search features. Contributed to an AI-driven UI Agent to streamline feature development.',
    logo: '/logos/google.svg',
  },
  {
    company: 'Intuit',
    role: 'Software Engineer',
    period: 'August 2019 - July 2021',
    description:
      'Re-engineered platform UI to React, improving user experience. Collaborated in full-stack development to equip thousands of engineers and marketers with experimentation tools.',
    logo: '/logos/intuit.png',
  },
];

// Tech badges should follow the order defined in TECH constant:
// anchors → frameworks → data fetching → API → infra → db → styling → AI → validation → architecture → hooks
export const PROJECTS: Project[] = [
  {
    type: 'project',
    title: 'Snippet Share',
    description: 'Privacy-first code sharing where encryption happens in your browser. End-to-end encrypted snippets with password protection and self-destruct timers.',
    url: 'https://snippet-share.com',
    image: 'https://snippet-share.com/og-image.png',
    tech: [TECH.REACT, TECH.TYPESCRIPT, TECH.TANSTACK_START, TECH.HONO, TECH.CLOUDFLARE_WORKERS, TECH.POSTGRESQL, TECH.SUPABASE, TECH.TAILWIND_CSS, TECH.ZOD, TECH.MONOREPO, TECH.E2E_ENCRYPTION],
    highlighted: true,
    priority: 1,
  },
  {
    type: 'project',
    title: 'AI Dev Toolkit',
    description: 'Suite of AI dev tools where your API keys never touch the server. BYOK architecture means browser-to-provider encryption with zero backend storage.',
    url: 'https://ai-dev-toolkit.com',
    tech: [TECH.REACT, TECH.TYPESCRIPT, TECH.TANSTACK_START, TECH.TANSTACK_QUERY, TECH.HONO, TECH.CLOUDFLARE_WORKERS, TECH.VERCEL_AI_SDK, TECH.ZERO_KNOWLEDGE_BYOK],
    highlighted: true,
    priority: 2,
  },
];

export const WRITING: Writing[] = [];
export const VIDEOS: Video[] = [];
export const TALKS: Talk[] = [];
export const PODCASTS: Podcast[] = [];
export const OPEN_SOURCE: OpenSource[] = [];

export function getHighlights(): Highlight[] {
  return [
    ...PROJECTS.filter((p) => p.highlighted),
    ...WRITING.filter((w) => w.highlighted),
    ...VIDEOS.filter((v) => v.highlighted),
    ...TALKS.filter((t) => t.highlighted),
    ...PODCASTS.filter((p) => p.highlighted),
    ...OPEN_SOURCE.filter((o) => o.highlighted),
  ]
    .sort((a, b) => (a.priority ?? 99) - (b.priority ?? 99))
    .slice(0, 3);
}

export const SECTIONS = [
  { id: 'hero', name: 'Home' },
  { id: 'experience', name: 'Experience' },
  { id: 'projects', name: 'Projects' },
  { id: 'contact', name: 'Contact' },
] as const;
