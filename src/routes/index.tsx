import { createFileRoute, Link } from '@tanstack/react-router';
import { ChevronDownIcon, FileTextIcon, GithubIcon, LinkedinIcon, MailIcon, MoonIcon, SunIcon, TwitterIcon } from 'lucide-react';
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

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const Route = createFileRoute('/')({
  component: App,
});

const skillCategories = [
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

const experiences = [
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

const projects = [
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
  // {
  //   title: 'Coming Soon',
  //   description: 'Another project in the works.',
  //   url: '#',
  // },
];

const sections = [
  { id: 'hero', name: 'Home' },
  { id: 'skills', name: 'Skills' },
  { id: 'experience', name: 'Experience' },
  { id: 'projects', name: 'Projects' },
  { id: 'contact', name: 'Contact' },
];

function App() {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // Track active section with IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 },
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
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
          onClick={() => setIsDark(!isDark)}
          aria-label="Toggle theme"
        >
          {isDark ? <SunIcon className="size-5" /> : <MoonIcon className="size-5" />}
        </Button>
      </div>

      {/* Section Navigation */}
      <nav className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-3 md:flex">
        {sections.map((section) => (
          <button
            key={section.id}
            type="button"
            onClick={() => scrollToSection(section.id)}
            className={`cursor-pointer text-right font-mono text-sm transition-all duration-300 ${
              activeSection === section.id
                ? 'text-foreground'
                : 'text-muted-foreground/50 hover:text-muted-foreground'
            }`}
          >
            {activeSection === section.id ? section.name : '—'}
          </button>
        ))}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative flex h-screen snap-start flex-col items-center justify-center px-6">
        <h1 className="font-mono text-4xl font-bold tracking-tight md:text-6xl">
          Abdirahman Haji
        </h1>
        <p className="mt-4 text-lg text-muted-foreground md:text-xl">
          Software Engineer
        </p>
        <div className="mt-8 flex gap-4">
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/abdihashii"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GithubIcon className="size-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://twitter.com/abdihashii"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <TwitterIcon className="size-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:abdirahman.haji.13@gmail.com" aria-label="Email">
              <MailIcon className="size-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://linkedin.com/in/abdirahman-haji"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="size-5" />
            </a>
          </Button>
        </div>
        <Button variant="outline" className="mt-6" asChild>
          <Link to="/resume">
            <FileTextIcon className="mr-2 size-4" />
            Resume
          </Link>
        </Button>

        {/* Scroll Indicator */}
        <button
          type="button"
          onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-8 animate-bounce cursor-pointer opacity-60 transition-opacity hover:opacity-100"
          aria-label="Scroll to next section"
        >
          <ChevronDownIcon className="size-6" />
        </button>
      </section>

      {/* Skills Section */}
      <section id="skills" className="flex h-screen snap-start flex-col items-center justify-center px-6">
        <div className="w-full max-w-4xl">
          <h2 className="font-mono text-2xl font-semibold">Skills</h2>
          <div className="mt-8 space-y-6">
            {skillCategories.map((category) => (
              <div key={category.name}>
                <h3 className="mb-3 text-sm font-medium text-muted-foreground">{category.name}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill.name}
                      variant="secondary"
                      className="px-4 py-2 font-mono text-base gap-2.5 transition-all hover:scale-105"
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

      {/* Experience Section */}
      <section id="experience" className="flex h-screen snap-start flex-col items-center justify-center px-6">
        <div className="w-full max-w-4xl">
          <h2 className="font-mono text-2xl font-semibold">Experience</h2>
          <div className="mt-8 space-y-6">
            {experiences.map((exp) => (
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

      {/* Projects Section */}
      <section id="projects" className="flex h-screen snap-start flex-col items-center justify-center px-6">
        <div className="w-full max-w-4xl">
          <h2 className="font-mono text-2xl font-semibold">Projects</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
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

      {/* Contact / Footer */}
      <section id="contact" className="flex h-screen snap-start flex-col items-center justify-center px-6">
        <div className="text-center">
          <h2 className="font-mono text-2xl font-semibold">Get in Touch</h2>
          <p className="mt-4 text-muted-foreground">
            Feel free to reach out for collaborations or just to say hi.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button variant="outline" asChild>
              <a
                href="https://github.com/abdihashii"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className="mr-2 size-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://twitter.com/abdihashii"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon className="mr-2 size-4" />
                Twitter
              </a>
            </Button>
            <Button variant="default" asChild>
              <a href="mailto:abdirahman.haji.13@gmail.com">
                <MailIcon className="mr-2 size-4" />
                Email
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://linkedin.com/in/abdirahman-haji"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon className="mr-2 size-4" />
                LinkedIn
              </a>
            </Button>
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
