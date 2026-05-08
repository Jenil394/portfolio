import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { SEOHead } from '@/components/seo/SEOHead';

export default function Portfolio() {
  return (
    <>
      <SEOHead
        title="Projects"
        description="Engineering projects by Jenil Mansuriya — machine learning, signal processing, distributed systems, and developer tools."
      />

      <div className="min-h-screen pt-24">
        <section className="px-6 lg:px-8 pt-12 pb-12 border-b border-border">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <p className="text-xs font-light tracking-[0.3em] text-muted-foreground uppercase">
                Work
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight">
                Projects
              </h1>
              <p className="text-lg md:text-xl font-light text-muted-foreground max-w-2xl">
                A selection of engineering work spanning machine learning research, systems
                programming, and developer tooling.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        </section>

        <div className="h-16" />
      </div>
    </>
  );
}
