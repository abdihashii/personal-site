import { createFileRoute, Link } from '@tanstack/react-router';
import {
  ArrowUpIcon,
  ChevronDownIcon,
  ExternalLinkIcon,
  FileTextIcon,
  GithubIcon,
  GlobeIcon,
  LinkedinIcon,
  MailIcon,
  MessageSquareIcon,
  MoonIcon,
  SendIcon,
  SunIcon,
  TwitterIcon,
  XIcon,
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
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

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

const EXPERIENCES = [
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

const PROJECTS = [
  {
    title: 'Snippet Share',
    description: 'A tool for sharing code snippets with ease.',
    url: 'https://snippet-share.com',
    tech: ['React', 'TypeScript', 'Node.js'],
  },
  {
    title: 'AI Dev Toolkit',
    description: 'Developer tools powered by AI.',
    url: 'https://ai-dev-toolkit.com',
    tech: ['Next.js', 'OpenAI', 'Tailwind'],
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
  const [showContactForm, setShowContactForm] = useState(false);

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
      <div className="fixed right-4 top-4 z-50 md:right-6 md:top-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsDark((prev) => !prev)}
          aria-label="Toggle theme"
        >
          {isDark ? <SunIcon className="size-5" /> : <MoonIcon className="size-5" />}
        </Button>
      </div>

      {/* Back to Top */}
      {activeSection !== 'hero' && (
        <Button
          variant="outline"
          size="icon"
          onClick={() => scrollToSection('hero')}
          aria-label="Back to top"
          className="fixed bottom-6 left-6 z-50 animate-in fade-in slide-in-from-bottom-2 duration-300"
        >
          <ArrowUpIcon className="size-4" />
        </Button>
      )}

      {/* Section Navigation */}
      <nav className="fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 animate-in fade-in fill-mode-backwards delay-1000 duration-700 md:right-6 md:flex">
        <div className="absolute bottom-[5px] right-[4.5px] top-[5px] w-px bg-border" />
        <div className="flex flex-col gap-4">
          {SECTIONS.map(({ id, name }) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollToSection(id)}
              aria-current={activeSection === id ? 'true' : undefined}
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
        <Avatar className="mb-6 size-24 border-2 border-primary/20 md:size-32">
          <AvatarImage src="/avatar-abdirahman.webp" alt="Abdirahman Haji" className="object-cover" />
          <AvatarFallback className="animate-pulse bg-muted font-mono text-2xl md:text-3xl">
            AH
          </AvatarFallback>
        </Avatar>
        <h1 className="text-center font-mono text-3xl font-bold tracking-tight md:text-4xl lg:text-6xl">
          Abdirahman Haji
        </h1>
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
        className="flex min-h-screen snap-start flex-col items-center justify-center px-6 py-16"
      >
        <div className="w-full max-w-4xl">
          <h2 className="font-mono text-2xl font-semibold">Skills</h2>
          <div className="mt-8 space-y-6">
            {SKILL_CATEGORIES.map((category) => (
              <div key={category.name}>
                <h3 className="mb-3 text-sm font-medium text-muted-foreground">{category.name}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => {
                    const badge = (
                      <Badge
                        variant="secondary"
                        className="gap-2 px-3 py-1.5 font-mono text-sm transition-all hover:scale-105 md:gap-2.5 md:px-4 md:py-2 md:text-base"
                      >
                        <skill.icon className="size-4 md:size-5" style={{ color: skill.color }} />
                        {skill.name}
                      </Badge>
                    );

                    if ('url' in skill && skill.url) {
                      return (
                        <a
                          key={skill.name}
                          href={skill.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {badge}
                        </a>
                      );
                    }

                    return <span key={skill.name}>{badge}</span>;
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="flex min-h-screen snap-start flex-col items-center justify-center px-6 py-16"
      >
        <div className="w-full max-w-4xl">
          <h2 className="font-mono text-2xl font-semibold">Experience</h2>
          <div className="mt-8 space-y-6">
            {EXPERIENCES.map((exp) => (
              <Card key={exp.company} className="border-border/50 bg-card/50 transition-colors hover:border-primary/50">
                <CardHeader className="pb-2">
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                    <CardTitle className="font-mono text-lg">{exp.role}</CardTitle>
                    <span className="font-mono text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <CardDescription>
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="h-5 max-w-28 object-contain object-left"
                    />
                  </CardDescription>
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
        className="flex min-h-screen snap-start flex-col items-center justify-center px-6 py-16"
      >
        <div className="w-full max-w-4xl">
          <h2 className="font-mono text-2xl font-semibold">Projects</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {PROJECTS.map((project) => (
              <a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="h-full border-border/50 bg-card/50 transition-colors hover:border-primary/50">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between font-mono text-lg">
                      {project.title}
                      <ExternalLinkIcon className="size-4 text-muted-foreground" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="h-[2lh] line-clamp-2 text-sm text-muted-foreground">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="flex min-h-screen snap-start flex-col items-center justify-center px-6 py-16"
      >
        <div className="text-center">
          <h2 className="font-mono text-2xl font-semibold">Get in Touch</h2>
          <p className="mt-4 text-balance text-muted-foreground">
            Feel free to reach out for collabs or just to say hi.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
            {SOCIAL_LINKS.map(({ name, href, icon: Icon }) => (
              <Button
                key={name}
                variant="outline"
                className="w-full sm:w-auto"
                asChild
              >
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

          {/* Hidden Contact Form */}
          <div className="mt-8">
            {!showContactForm
              ? (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowContactForm(true)}
                  >
                    <MessageSquareIcon className="mr-2 size-4" />
                    Send me a message
                  </Button>
                )
              : (
                  <div className="mx-auto w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-300">
                    <Card className="border-border/50 bg-card/50">
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between">
                          <CardTitle className="font-mono text-base">Send a Message</CardTitle>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setShowContactForm(false)}
                            className="size-8"
                          >
                            <XIcon className="size-4" />
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                          <div className="space-y-2">
                            <Input
                              type="text"
                              placeholder="Name"
                              className="bg-background"
                            />
                          </div>
                          <div className="space-y-2">
                            <Input
                              type="email"
                              placeholder="Email"
                              className="bg-background"
                            />
                          </div>
                          <div className="space-y-2">
                            <Textarea
                              placeholder="Your message..."
                              rows={4}
                              className="resize-none bg-background"
                            />
                          </div>
                          <Button type="submit" className="w-full">
                            <SendIcon className="mr-2 size-4" />
                            Send Message
                          </Button>
                        </form>
                      </CardContent>
                    </Card>
                  </div>
                )}
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
