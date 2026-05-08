import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { developerInfo } from '@/data/photographer';
import { getFeaturedProjects } from '@/data/projects';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SEOHead } from '@/components/seo/SEOHead';
import { Button } from '@/components/ui/button';

export default function Home() {
  const featured = getFeaturedProjects();
  const { socialLinks } = developerInfo;

  return (
    <>
      <SEOHead />

      <div className="min-h-screen">
        {/* Hero */}
        <section className="relative min-h-screen flex items-center px-6 lg:px-8 pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_hsl(var(--accent))_0%,_transparent_60%)] opacity-60" />
          <div className="max-w-5xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              <p className="text-sm font-light tracking-[0.3em] text-muted-foreground uppercase">
                {developerInfo.tagline}
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight leading-[1.05]">
                Hi, I'm{' '}
                <span className="font-normal">{developerInfo.name.split(' ')[0]}</span>.<br />
                <span className="text-muted-foreground">I build software that thinks.</span>
              </h1>
              <p className="text-lg md:text-xl font-light leading-relaxed text-muted-foreground max-w-2xl">
                {developerInfo.heroIntroduction}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button asChild size="lg" className="rounded-full px-6">
                  <Link to="/portfolio">
                    View Projects <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-6">
                  <Link to="/contact">
                    <Mail className="mr-2 size-4" /> Get in touch
                  </Link>
                </Button>

                <div className="flex items-center gap-3 ml-auto">
                  {socialLinks.github && (
                    <a
                      href={socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="size-5" />
                    </a>
                  )}
                  {socialLinks.linkedin && (
                    <a
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="size-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About snippet */}
        <section className="py-24 md:py-32 px-6 lg:px-8 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="space-y-8">
                <p className="text-xs font-light tracking-[0.3em] text-muted-foreground uppercase">
                  About
                </p>
                {developerInfo.biography.split('\n\n').map((p, i) => (
                  <p key={i} className="text-lg md:text-xl font-light leading-relaxed text-foreground/90">
                    {p}
                  </p>
                ))}
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-base font-light tracking-wide text-foreground hover:text-muted-foreground transition-colors group"
                >
                  More about me
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-24 md:py-32 px-6 lg:px-8 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="flex items-end justify-between gap-6 mb-12 flex-wrap">
                <div className="space-y-3">
                  <p className="text-xs font-light tracking-[0.3em] text-muted-foreground uppercase">
                    Selected work
                  </p>
                  <h2 className="text-4xl md:text-5xl font-light tracking-tight">
                    Featured Projects
                  </h2>
                </div>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 text-sm font-light tracking-wide text-muted-foreground hover:text-foreground transition-colors group"
                >
                  All projects
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featured.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-24 md:py-32 px-6 lg:px-8 border-t border-border">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="space-y-3 mb-12">
                <p className="text-xs font-light tracking-[0.3em] text-muted-foreground uppercase">
                  Recognition
                </p>
                <h2 className="text-4xl md:text-5xl font-light tracking-tight">
                  Achievements
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-6">
              {developerInfo.achievements.map((a, i) => (
                <ScrollReveal key={a.title} delay={i * 0.1}>
                  <div className="flex gap-5 rounded-md border border-border bg-card p-6 md:p-8 h-full">
                    <div className="shrink-0 p-3 rounded-full bg-accent text-accent-foreground h-fit">
                      <Trophy className="size-5" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-normal tracking-wide text-foreground">
                        {a.title}
                      </h3>
                      <p className="text-sm font-light leading-relaxed text-muted-foreground">
                        {a.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 md:py-32 px-6 lg:px-8 border-t border-border">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight">
                Have an idea, role, or research problem?
              </h2>
              <p className="text-lg font-light text-muted-foreground">
                {developerInfo.availability}.
              </p>
              <Button asChild size="lg" className="rounded-full px-8 mt-4">
                <Link to="/contact">
                  Let's talk <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
}
