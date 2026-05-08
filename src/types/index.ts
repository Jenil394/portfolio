/**
 * Core TypeScript interfaces for Jenil Mansuriya's Engineering Portfolio
 */

export type ProjectCategory = 'machine-learning' | 'systems' | 'web' | 'research';

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  date: string;
  description: string;
  highlights: string[];
  techStack: string[];
  links?: ProjectLink[];
  featured?: boolean;
  slug: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface Achievement {
  title: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location?: string;
}

export interface DeveloperInfo {
  name: string;
  tagline: string;
  heroIntroduction: string;
  biography: string;
  location: string;
  email: string;
  phone: string;
  availability: string;
  education: Education;
  skills: SkillGroup[];
  achievements: Achievement[];
  socialLinks: {
    github?: string;
    linkedin?: string;
    leetcode?: string;
    geeksforgeeks?: string;
  };
}

export interface ContactSubmission {
  name: string;
  email: string;
  projectType: 'collaboration' | 'opportunity' | 'general';
  message: string;
  timestamp: Date;
}
