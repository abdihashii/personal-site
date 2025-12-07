import { createFileRoute } from '@tanstack/react-router';
import { Github, Mail, Moon, Sun, Twitter } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const Route = createFileRoute('/')({
  component: App,
});

const skills = [
  'TypeScript',
  'JavaScript',
  'HTML',
  'CSS',
  'React',
  'Tailwind',
  'AWS',
  'CloudFlare',
];

const experiences = [
  {
    company: 'Helius',
    role: 'Software Engineer',
    period: 'May 2024 - Present',
    description: '',
  },
  {
    company: 'Google',
    role: 'Software Engineer',
    period: 'July 2021 - March 2024',
    description: '',
  },
  {
    company: 'Intuit',
    role: 'Software Engineer',
    period: 'August 2019 - July 2021',
    description: '',
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
  {
    title: 'Coming Soon',
    description: 'Another project in the works.',
    url: '#',
  },
];

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

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
          {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
        </Button>
      </div>

      {/* Hero Section */}
      <section className="flex h-screen snap-start flex-col items-center justify-center px-6">
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
              <Github className="size-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://twitter.com/abdihashii"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <Twitter className="size-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:abdirahman.haji.13@gmail.com" aria-label="Email">
              <Mail className="size-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* Skills Section */}
      <section className="flex h-screen snap-start flex-col items-center justify-center px-6">
        <div className="w-full max-w-4xl">
          <h2 className="font-mono text-2xl font-semibold">Skills</h2>
          <div className="mt-8 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="font-mono text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="flex h-screen snap-start flex-col items-center justify-center px-6">
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
      <section className="flex h-screen snap-start flex-col items-center justify-center px-6">
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
      <section className="flex h-screen snap-start flex-col items-center justify-center px-6">
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
                <Github className="mr-2 size-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://twitter.com/abdihashii"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="mr-2 size-4" />
                Twitter
              </a>
            </Button>
            <Button variant="default" asChild>
              <a href="mailto:abdirahman.haji.13@gmail.com">
                <Mail className="mr-2 size-4" />
                Email
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
