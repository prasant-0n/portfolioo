import { SocialLink } from './types';

// Personal information
export const PERSONAL_INFO = {
  name: 'Prasanta Kumar Sahoo',
  tagline: 'Building things that work, and work well',
  currentRole: 'Software Developer',
  location: 'India',
  email: 'sahooprasanta.dev@email.com',
  githubUsername: 'prasant-0n',
  calComLink: 'https://cal.com/akshad-jaiswal/15min',
  coverQuote: 'Crafting the future of the web with JavaScript, Node.js, and a passion for clean code.',
  bio: 'Full-stack engineer who thrives on end-to-end ownership from product discovery and rapid prototyping to scalable backends and polished UX. As a Founding SDE at a startup while freelancing, I balance delivery speed, reliability, and cost daily. My approach is simple: ship small, learn fast, and iterate with real user feedback.',
};

// Social links
export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/prasant-0n',
    username: 'prasant-on',
    icon: 'Github'
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/prasanta1/',
    username: 'prasanta1',
    icon: 'Linkedin'
  },
  {
    platform: 'X',
    url: 'https://x.com/prasanta_0n',
    username: '@prasanta_0n',
    icon: 'Twitter'
  }
];

// Animation configuration
export const ANIMATION_CONFIG = {
  fadeInDuration: 0.3,
  fadeInDelay: 0.2,
  staggerDelay: 0.1,
  slideDistance: 20,
  easing: [0.4, 0, 0.2, 1] as [number, number, number, number],

  // Extended animation presets
  pageTransitionDuration: 0.4,
  themeTransitionDuration: 0.3,
  hoverDuration: 0.2,
  microInteractionDuration: 0.15,
  scrollRevealDuration: 0.5,
  pulseDuration: 2,

  // Spring configurations
  spring: {
    stiffness: 300,
    damping: 20,
  },
  springButton: {
    stiffness: 400,
    damping: 10,
  },
};

// Layout configuration
export const LAYOUT_CONFIG = {
  maxWidth: '800px',
  sectionSpacing: '64px',
  cardSpacing: '24px',
};
