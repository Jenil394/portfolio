import type { DeveloperInfo } from '@/types';

/**
 * Personal info for Jenil Mansuriya — kept at this path for backwards compatibility.
 * Prefer importing `developerInfo` going forward.
 */
export const developerInfo: DeveloperInfo = {
  name: 'Jenil Mansuriya',
  tagline: 'Computer Science Engineer · ML & Systems',
  heroIntroduction:
    'I build intelligent systems and developer tools — from EEG signal pipelines and ensemble deep learning models to real-time collaborative platforms.',
  biography: `I'm a Computer Science and Engineering undergraduate at IIIT Vadodara with a focus on machine learning, signal processing, and systems engineering. I enjoy taking ideas from a research paper or a rough sketch all the way to a deployed, working system.

My recent work spans EEG-based brain aging analysis, mixture-of-experts deep learning for plant disease detection, and low-latency collaborative tooling. I also compete actively in CTFs and hackathons, where I focus on PWN, Reverse Engineering, and AI security.`,
  location: 'Jamnagar, Gujarat, India',
  email: 'jenilmansuriya@gmail.com',
  phone: '+91-7861933364',
  availability: 'Open to internships and research collaborations',
  education: {
    institution: 'Indian Institute of Information Technology, Vadodara — ICD',
    degree: 'B.Tech in Computer Science and Engineering',
    period: '2023 – 2027',
  },
  skills: [
    {
      label: 'Languages',
      items: ['C', 'C++', 'Python', 'JavaScript', 'SQL'],
    },
    {
      label: 'Frameworks & Libraries',
      items: ['Node.js', 'Flask', 'TensorFlow / Keras', 'scikit-learn', 'WebSocket', 'Socket.io'],
    },
    {
      label: 'Databases',
      items: ['MySQL', 'MongoDB'],
    },
    {
      label: 'Tools & Platforms',
      items: ['Git / GitHub', 'Linux', 'VS Code', 'Azure', 'MNE-Python', 'MATLAB'],
    },
  ],
  achievements: [
    {
      title: 'Top 10 — National AI × Cybersecurity Hackathon',
      description:
        'Finished 6th nationally in the AI × Cybersecurity Hackathon organised by ACM SVNIT and ISEA (Ministry of Electronics and Information Technology, India).',
    },
    {
      title: 'National CTF Team — Rank 27',
      description:
        'Competed as part of a top-ranked national CTF team, solving challenges across Misc, PWN, and Reverse Engineering categories.',
    },
  ],
  socialLinks: {
    github: 'https://github.com/',
    linkedin: 'https://linkedin.com/',
    leetcode: 'https://leetcode.com/',
    geeksforgeeks: 'https://auth.geeksforgeeks.org/',
  },
};

// Backwards-compatible alias used by older imports.
export const photographerInfo = developerInfo;
