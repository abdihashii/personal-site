import { createFileRoute, Link } from '@tanstack/react-router';
import {
  ChevronDownIcon,
  FileTextIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from 'lucide-react';
import { useEffect, useState } from 'react';
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

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const Route = createFileRoute('/')({
  component: HomePage,
});

const SOCIAL_LINKS = [
  { name: 'GitHub', href: 'https://github.com/abdihashii', icon: GithubIcon },
  { name: 'Twitter', href: 'https://twitter.com/abdihashii', icon: TwitterIcon },
  { name: 'Email', href: 'mailto:abdirahman.haji.13@gmail.com', icon: MailIcon },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/abdirahman-haji', icon: LinkedinIcon },
];

const SKILL_CATEGORIES = [
  {
    name: 'Languages',
    skills: [
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS', icon: SiCss3, color: '#1572B6' },
    ],
  },
  {
    name: 'Frontend',
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'Redis', icon: SiRedis, color: '#DC382D' },
      { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
    ],
  },
  {
    name: 'DevOps & Cloud',
    skills: [
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'AWS', icon: SiAmazonwebservices, color: '#FF9900' },
      { name: 'Vercel', icon: SiVercel, color: '#FFFFFF' },
      { name: 'CloudFlare', icon: SiCloudflare, color: '#F38020' },
    ],
  },
];

const EXPERIENCES = [
  {
    company: 'Helius',
    role: 'Software Engineer',
    period: 'May 2024 - Present',
    description: 'Building developer tools for the Solana ecosystem.',
  },
  {
    company: 'Google',
    role: 'Software Engineer',
    period: 'July 2021 - March 2024',
    description: 'Worked on large-scale distributed systems.',
  },
  {
    company: 'Intuit',
    role: 'Software Engineer',
    period: 'August 2019 - July 2021',
    description: 'Built financial software products.',
  },
];

const PROJECTS = [
  {
    title: 'Snippet Share',
    description: 'A tool for sharing code snippets with ease.',
    url: 'https://snippet-share.com',
  },
  {
    title: 'AI Dev Toolkit',
    description: 'Developer tools powered by AI.',
    url: 'https://ai-dev-toolkit.com',
  },
];

const SECTIONS = [
  { id: 'hero', name: 'Home' },
  { id: 'skills', name: 'Skills' },
  { id: 'experience', name: 'Experience' },
  { id: 'projects', name: 'Projects' },
  { id: 'contact', name: 'Contact' },
] as const;

function HomePage() {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      { threshold: 0.5 },
    );

    SECTIONS.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="h-screen snap-y snap-mandatory overflow-y-auto bg-background text-foreground">
      {/* Theme Toggle */}
      <div className="fixed right-6 top-6 z-50">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsDark((prev) => !prev)}
          aria-label="Toggle theme"
        >
          {isDark ? <SunIcon className="size-5" /> : <MoonIcon className="size-5" />}
        </Button>
      </div>

      {/* Section Navigation */}
      <nav className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 animate-in fade-in fill-mode-backwards delay-1000 duration-700 md:flex">
        <div className="absolute bottom-[5px] right-[4.5px] top-[5px] w-px bg-border" />
        <div className="flex flex-col gap-4">
          {SECTIONS.map(({ id, name }) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollToSection(id)}
              className="group relative flex cursor-pointer items-center justify-end gap-3"
            >
              <span
                className={`font-mono text-sm transition-all duration-300 ${
                  activeSection === id
                    ? 'text-foreground opacity-100'
                    : 'text-muted-foreground opacity-0 group-hover:opacity-100'
                }`}
              >
                {name}
              </span>
              <span
                className={`relative z-10 size-2.5 rounded-full transition-all duration-300 ${
                  activeSection === id
                    ? 'scale-125 bg-primary'
                    : 'bg-muted group-hover:bg-muted-foreground'
                }`}
              />
            </button>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section
        id="hero"
        className="relative flex h-screen snap-start flex-col items-center justify-center px-6"
      >
        <Avatar className="mb-6 size-32 border-2 border-primary/20">
          <AvatarImage src="/avatar.jpg" alt="Abdirahman Haji" />
          <AvatarFallback className="bg-muted text-3xl font-mono">AH</AvatarFallback>
        </Avatar>
        <h1 className="font-mono text-4xl font-bold tracking-tight md:text-6xl">Abdirahman Haji</h1>
        <p className="mt-4 text-lg text-muted-foreground md:text-xl">Software Engineer</p>

        <div className="mt-8 flex gap-4">
          {SOCIAL_LINKS.map(({ name, href, icon: Icon }) => (
            <Button key={name} variant="ghost" size="icon" asChild>
              <a
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                aria-label={name}
              >
                <Icon className="size-5" />
              </a>
            </Button>
          ))}
        </div>

        <Button variant="outline" className="mt-6" asChild>
          <Link to="/resume">
            <FileTextIcon className="mr-2 size-4" />
            Resume
          </Link>
        </Button>

        <button
          type="button"
          onClick={() => scrollToSection('skills')}
          className="absolute bottom-8 animate-bounce cursor-pointer opacity-60 transition-opacity hover:opacity-100"
          aria-label="Scroll to next section"
        >
          <ChevronDownIcon className="size-6" />
        </button>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="flex h-screen snap-start flex-col items-center justify-center px-6"
      >
        <div className="w-full max-w-4xl">
          <h2 className="font-mono text-2xl font-semibold">Skills</h2>
          <div className="mt-8 space-y-6">
            {SKILL_CATEGORIES.map((category) => (
              <div key={category.name}>
                <h3 className="mb-3 text-sm font-medium text-muted-foreground">{category.name}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill.name}
                      variant="secondary"
                      className="gap-2.5 px-4 py-2 font-mono text-base transition-all hover:scale-105"
                    >
                      <skill.icon className="size-5" style={{ color: skill.color }} />
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="flex h-screen snap-start flex-col items-center justify-center px-6"
      >
        <div className="w-full max-w-4xl">
          <h2 className="font-mono text-2xl font-semibold">Experience</h2>
          <div className="mt-8 space-y-6">
            {EXPERIENCES.map((exp) => (
              <Card key={exp.company} className="border-border/50 bg-card/50">
                <CardHeader className="pb-2">
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                    <CardTitle className="font-mono text-lg">{exp.role}</CardTitle>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <CardDescription className="text-primary">{exp.company}</CardDescription>
                </CardHeader>
                {exp.description && (
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{exp.description}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="flex h-screen snap-start flex-col items-center justify-center px-6"
      >
        <div className="w-full max-w-4xl">
          <h2 className="font-mono text-2xl font-semibold">Projects</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project) => (
              <Card
                key={project.title}
                className="border-border/50 bg-card/50 transition-colors hover:border-primary/50"
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <CardHeader>
                    <CardTitle className="font-mono text-lg">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </CardContent>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="flex h-screen snap-start flex-col items-center justify-center px-6"
      >
        <div className="text-center">
          <h2 className="font-mono text-2xl font-semibold">Get in Touch</h2>
          <p className="mt-4 text-muted-foreground">
            Feel free to reach out for collaborations or just to say hi.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {SOCIAL_LINKS.map(({ name, href, icon: Icon }) => (
              <Button key={name} variant={href.startsWith('mailto:') ? 'default' : 'outline'} asChild>
                <a
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                >
                  <Icon className="mr-2 size-4" />
                  {name}
                </a>
              </Button>
            ))}
          </div>

          <p className="mt-16 text-sm text-muted-foreground">
            &copy;
            {' '}
            {new Date().getFullYear()}
            {' '}
            Abdirahman Haji
          </p>
        </div>
      </section>
    </main>
  );
}
