import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'EEG Signal Analysis Using Machine Learning',
    slug: 'eeg-signal-analysis',
    category: 'research',
    date: 'Nov 2025 – Present',
    featured: true,
    description:
      'Investigating brain aging in Autism Spectrum Disorder (ASD) versus neurotypical patients using multi-channel resting-state EEG recordings.',
    highlights: [
      'Analysed multi-channel resting-state EEG to study oscillatory patterns and phase synchronization.',
      'Built data pipelines for cleaning, signal processing, and feature extraction (Shannon Entropy and more).',
      'Achieved ~80% classification accuracy with current feature extraction strategies and models.',
    ],
    techStack: ['MNE-Python', 'PyWavelets', 'MATLAB', 'NumPy', 'scikit-learn'],
    links: [{ label: 'Project', url: '#' }],
  },
  {
    id: '2',
    title: 'Dynamic Ensemble for Plant Disease Detection',
    slug: 'plant-disease-moe',
    category: 'machine-learning',
    date: 'Nov 2025',
    featured: true,
    description:
      'A Mixture of Experts (MoE) deep learning system that dynamically combines four CNN backbones to detect plant leaf diseases with explainable predictions.',
    highlights: [
      'Architected an MoE pipeline over VGG16, VGG19, InceptionV3, and ResNet101, reaching over 97% accuracy.',
      'Engineered a custom CNN gate network that assigns input-dependent weights to each expert.',
      'Mitigated confidence dilution by systematically down-weighting unreliable experts.',
      'Integrated LIME for explainability, highlighting disease-relevant leaf regions for trust in real-world use.',
    ],
    techStack: ['Python', 'TensorFlow / Keras', 'NumPy', 'LIME'],
    links: [{ label: 'GitHub', url: '#' }],
  },
  {
    id: '3',
    title: 'CODAB — Collaborative Code Editor',
    slug: 'codab-collab-editor',
    category: 'systems',
    date: 'March 2025',
    featured: true,
    description:
      'Backend for an online collaborative code editor with real-time sync, isolated execution, and a scalable room system.',
    highlights: [
      'Built WebSocket-based real-time code synchronization for low-latency collaboration.',
      'Designed a Node.js + Socket.io room system supporting simultaneous coding and live peer communication.',
      'Implemented containerized, isolated code execution to prevent malicious code from affecting the host.',
      'Authored a complete Software Requirements Specification (SRS) to drive the development lifecycle.',
    ],
    techStack: ['Node.js', 'WebSocket', 'Socket.io', 'RPC APIs', 'Docker'],
    links: [{ label: 'GitHub', url: '#' }],
  },
  {
    id: '4',
    title: 'AssemblyX Execution Platform',
    slug: 'assemblyx',
    category: 'systems',
    date: 'Feb 2025',
    featured: true,
    description:
      'A lightweight, web-based educational platform to write, run, and test x86, ARM, and MIPS32 assembly directly from the browser.',
    highlights: [
      'Engineered a decoupled microservice architecture: Flask frontend + Linux-based execution API.',
      'Integrated nasm, ld, spim, and qemu to assemble and run code, returning real-time stdout/stderr.',
      'Built an interactive learning module with predefined challenges and automated output verification.',
    ],
    techStack: ['Flask', 'Python', 'REST APIs', 'Linux', 'nasm', 'qemu'],
    links: [{ label: 'GitHub', url: '#' }],
  },
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured);

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);

export const getProjectsByCategory = (category: Project['category']) =>
  projects.filter((p) => p.category === category);
