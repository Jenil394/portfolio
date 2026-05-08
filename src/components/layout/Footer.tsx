import { Github, Linkedin } from 'lucide-react';
import { developerInfo } from '@/data/photographer';

/**
 * Minimal footer with social links and copyright.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();
  const { socialLinks } = developerInfo;

  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground font-light tracking-wide">
            © {currentYear} {developerInfo.name}. Built with care.
          </p>

          <div className="flex items-center gap-6">
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
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
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-5" />
              </a>
            )}

          </div>
        </div>
      </div>
    </footer>
  );
}
