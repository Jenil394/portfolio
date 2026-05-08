import { motion } from 'framer-motion';
import { Github, Linkedin, Code2, Brain, GraduationCap, Trophy, MapPin, Mail } from 'lucide-react';
import { developerInfo } from '@/data/photographer';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { SEOHead } from '@/components/seo/SEOHead';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function About() {
  const { socialLinks } = developerInfo;

  return (
    <>
      <SEOHead
        title="About"
        description={`About ${developerInfo.name} — ${developerInfo.tagline}.`}
      />

      <div className="min-h-screen pt-24">
        {/* Hero */}
        <section className="px-6 lg:px-8 py-12 md:py-20 border-b border-border">
          <div className="max-w-4xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <p className="text-xs font-light tracking-[0.3em] text-muted-foreground uppercase">
                About
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight">
                {developerInfo.name}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light">
                {developerInfo.tagline}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Biography + sidebar */}
        <section className="px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6">
              {developerInfo.biography.split('\n\n').map((p, i) => (
                <p key={i} className="text-base md:text-lg font-light leading-relaxed text-foreground/90">
                  {p}
                </p>
              ))}

              <div className="flex flex-wrap items-center gap-3 pt-4">
                {socialLinks.github && (
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-border rounded-sm hover:bg-accent transition-colors"
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
                    className="p-3 border border-border rounded-sm hover:bg-accent transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="size-5" />
                  </a>
                )}
                {socialLinks.leetcode && (
                  <a
                    href={socialLinks.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-border rounded-sm hover:bg-accent transition-colors"
                    aria-label="LeetCode"
                  >
                    <Code2 className="size-5" />
                  </a>
                )}
                {socialLinks.geeksforgeeks && (
                  <a
                    href={socialLinks.geeksforgeeks}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-border rounded-sm hover:bg-accent transition-colors"
                    aria-label="GeeksforGeeks"
                  >
                    <Brain className="size-5" />
                  </a>
                )}
              </div>
            </div>

            <aside className="space-y-6 text-sm font-light">
              <div className="flex items-start gap-3">
                <MapPin className="size-4 mt-0.5 text-muted-foreground" />
                <div>
                  <p className="text-muted-foreground">Based in</p>
                  <p className="text-foreground">{developerInfo.location}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="size-4 mt-0.5 text-muted-foreground" />
                <div>
                  <p className="text-muted-foreground">Email</p>
                  <a
                    href={`mailto:${developerInfo.email}`}
                    className="text-foreground hover:text-muted-foreground transition-colors break-all"
                  >
                    {developerInfo.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <GraduationCap className="size-4 mt-0.5 text-muted-foreground" />
                <div>
                  <p className="text-muted-foreground">Education</p>
                  <p className="text-foreground">{developerInfo.education.degree}</p>
                  <p className="text-muted-foreground text-xs mt-1">
                    {developerInfo.education.institution}
                  </p>
                  <p className="text-muted-foreground text-xs">{developerInfo.education.period}</p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <Separator />

        {/* Skills */}
        <section className="px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="space-y-3 mb-10">
                <p className="text-xs font-light tracking-[0.3em] text-muted-foreground uppercase">
                  Toolkit
                </p>
                <h2 className="text-3xl md:text-4xl font-light tracking-tight">Skills</h2>
              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 gap-8">
              {developerInfo.skills.map((group, i) => (
                <ScrollReveal key={group.label} delay={i * 0.05}>
                  <div className="space-y-3">
                    <h3 className="text-sm font-light tracking-[0.2em] uppercase text-muted-foreground">
                      {group.label}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <Badge key={item} variant="secondary" className="font-light tracking-wide">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <Separator />

        {/* Achievements */}
        <section className="px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="space-y-3 mb-10">
                <p className="text-xs font-light tracking-[0.3em] text-muted-foreground uppercase">
                  Highlights
                </p>
                <h2 className="text-3xl md:text-4xl font-light tracking-tight">Achievements</h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-6">
              {developerInfo.achievements.map((a, i) => (
                <ScrollReveal key={a.title} delay={i * 0.1}>
                  <div className="flex gap-5 rounded-md border border-border bg-card p-6 h-full">
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

        <div className="h-16" />
      </div>
    </>
  );
}
