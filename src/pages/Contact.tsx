import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';
import { developerInfo } from '@/data/photographer';
import { ContactForm } from '@/components/forms/ContactForm';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';

export default function Contact() {
  const { socialLinks } = developerInfo;

  return (
    <>
      <SEOHead
        title="Contact"
        description={`Reach out to ${developerInfo.name} for collaborations, internships, and research opportunities.`}
      />

      <div className="min-h-screen pt-24">
        <section className="px-6 lg:px-8 py-12 md:py-20 border-b border-border">
          <div className="max-w-4xl mx-auto space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs font-light tracking-[0.3em] text-muted-foreground uppercase mb-3">
                Contact
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-4">
                Let's build something.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl">
                {developerInfo.availability}. Drop a message — I usually reply within a day or two.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-light tracking-wide">Send a message</h2>
                <p className="text-muted-foreground font-light text-sm">
                  Tell me about what you're working on or what you'd like to collaborate on.
                </p>
              </div>
              <ContactForm />
            </motion.div>

            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-light tracking-wide">Direct</h2>
                <p className="text-muted-foreground font-light text-sm">
                  Prefer to skip the form? Reach me directly.
                </p>
              </div>

              <Separator />

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-sm bg-accent">
                    <Mail className="size-5 text-muted-foreground" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-light tracking-wide text-muted-foreground">Email</p>
                    <a
                      href={`mailto:${developerInfo.email}`}
                      className="text-base font-light hover:text-muted-foreground transition-colors break-all"
                    >
                      {developerInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-sm bg-accent">
                    <MapPin className="size-5 text-muted-foreground" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-light tracking-wide text-muted-foreground">Location</p>
                    <p className="text-base font-light">{developerInfo.location}</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="flex items-center gap-3">
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
              </div>
            </motion.div>
          </div>
        </section>

        <div className="h-16" />
      </div>
    </>
  );
}
