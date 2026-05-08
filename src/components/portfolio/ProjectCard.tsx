import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Project } from '@/types';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const categoryLabels: Record<Project['category'], string> = {
  'machine-learning': 'Machine Learning',
  systems: 'Systems',
  web: 'Web',
  research: 'Research',
};

/**
 * Card for engineering projects: title, date, summary, tech stack and links.
 */
export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const primaryLink = project.links?.[0];

  const Inner = (
    <div className="group flex h-full flex-col gap-5 rounded-md border border-border bg-card p-6 md:p-8 transition-all duration-300 hover:border-foreground/30 hover:shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {categoryLabels[project.category]} · {project.date}
          </p>
          <h3 className="text-2xl md:text-3xl font-light tracking-wide text-foreground">
            {project.title}
          </h3>
        </div>
        {primaryLink && (
          <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
        )}
      </div>

      <p className="text-base font-light leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      <ul className="space-y-2 text-sm font-light leading-relaxed text-muted-foreground">
        {project.highlights.map((h, i) => (
          <li key={i} className="flex gap-3">
            <span className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground/60" />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-2 pt-2">
        {project.techStack.map((t) => (
          <Badge key={t} variant="secondary" className="font-light tracking-wide">
            {t}
          </Badge>
        ))}
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="h-full"
    >
      {primaryLink && primaryLink.url !== '#' ? (
        <a href={primaryLink.url} target="_blank" rel="noopener noreferrer" className="block h-full">
          {Inner}
        </a>
      ) : (
        <div className="h-full">{Inner}</div>
      )}
    </motion.div>
  );
}
