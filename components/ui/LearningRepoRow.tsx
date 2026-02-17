'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Star, Github } from 'lucide-react';
import { LearningRepo } from '@/lib/types';
import { ANIMATION_CONFIG } from '@/lib/constants';
import { AnimatedCounter } from './AnimatedCounter';

interface LearningRepoRowProps {
  repo: LearningRepo;
  index: number;
}

export default function LearningRepoRow({ repo, index }: LearningRepoRowProps) {
  return (
    <motion.a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: ANIMATION_CONFIG.fadeInDuration,
        ease: ANIMATION_CONFIG.easing,
        delay: index * 0.1,
      }}
      whileHover={{ scale: 1.01 }}
      className="group flex items-center gap-4 p-4 sm:p-6 rounded-xl border border-portfolio-light-border dark:border-portfolio-border/50 bg-portfolio-light-surface/30 dark:bg-portfolio-surface/30 hover:border-portfolio-accent/50 dark:hover:border-portfolio-accent/50 hover:bg-portfolio-light-surface/60 dark:hover:bg-portfolio-surface/50 transition-all duration-300"
    >
      {/* GitHub Logo */}
      <div className="flex-shrink-0">
        <Github size={24} className="text-portfolio-accent dark:text-portfolio-accentLight group-hover:scale-110 transition-transform" />
      </div>

      {/* Repo Info */}
      <div className="flex-1 min-w-0">
        <h3 className="text-base sm:text-lg font-semibold text-portfolio-light-text dark:text-portfolio-text group-hover:text-portfolio-accent dark:group-hover:text-portfolio-accentLight transition-colors line-clamp-1">
          {repo.name}
        </h3>
        <p className="text-xs sm:text-sm text-portfolio-muted mt-1 line-clamp-2">
          {repo.description}
        </p>
      </div>

      {/* Stars */}
      {repo.stars !== undefined && repo.stars > 0 && (
        <div className="flex items-center gap-1.5 text-portfolio-accent dark:text-portfolio-accentLight flex-shrink-0 bg-portfolio-light-bg dark:bg-portfolio-bg px-2.5 py-1 rounded-full">
          <Star size={16} className="fill-current" />
          <AnimatedCounter end={repo.stars} duration={1500} className="text-xs sm:text-sm font-bold" />
        </div>
      )}

      {/* External Link Icon */}
      <div className="flex-shrink-0">
        <ExternalLink
          size={18}
          className="text-portfolio-light-text/50 dark:text-portfolio-muted group-hover:text-portfolio-accent dark:group-hover:text-portfolio-accentLight transition-all transform group-hover:translate-x-1"
        />
      </div>
    </motion.a>
  );
}
