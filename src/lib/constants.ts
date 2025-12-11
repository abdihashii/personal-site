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

export const PROJECTS: Project[] = [
  {
    type: 'project',
    title: 'Snippet Share',
    description: 'A secure and easy way to share code snippets with others. Create self-destructing, password-protected snippets with end-to-end encryption.',
    url: 'https://snippet-share.com',
    image: 'https://snippet-share.com/og-image.png',
    tech: ['React', 'TypeScript', 'Node.js'],
    highlighted: true,
    priority: 1,
  },
  {
    type: 'project',
    title: 'AI Dev Toolkit',
    description: 'Developer tools powered by AI.',
    url: 'https://ai-dev-toolkit.com',
    tech: ['Next.js', 'OpenAI', 'Tailwind'],
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
