'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Project } from '@/lib/types';
import { ANIMATION_CONFIG } from '@/lib/constants';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: ANIMATION_CONFIG.fadeInDuration,
        ease: ANIMATION_CONFIG.easing,
      }}
      whileHover={{ scale: 1.02, y: -4 }}
      className="group overflow-hidden rounded-2xl border border-portfolio-light-border dark:border-portfolio-border hover:border-portfolio-accent dark:hover:border-portfolio-accentLight transition-all duration-300 bg-portfolio-light-surface dark:bg-portfolio-surface/50 backdrop-blur-sm"
    >
      {/* Thumbnail with Overlay */}
      <Link href={`/projects/${project.slug}`}>
        <div className="relative h-56 sm:h-64 overflow-hidden bg-portfolio-light-surface dark:bg-portfolio-surface">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4 sm:p-6">
            <div className="flex items-center gap-2 text-white font-medium text-sm sm:text-base">
              View Project
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Fresh Build Badge */}
          {project.freshBuild && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-portfolio-accent/90 dark:bg-portfolio-accent/80 backdrop-blur-sm border border-portfolio-accentLight/30 rounded-full text-xs text-white font-medium shadow-lg">
                <Sparkles size={14} />
                <span>Fresh Build</span>
              </div>
            </motion.div>
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="p-4 sm:p-6">
        <Link href={`/projects/${project.slug}`}>
          <h3 className="text-lg sm:text-xl font-semibold text-portfolio-light-text dark:text-portfolio-text mb-2 group-hover:text-portfolio-accent dark:group-hover:text-portfolio-accentLight transition-colors line-clamp-2">
            {project.title}
          </h3>
        </Link>
        <p className="text-xs sm:text-sm text-portfolio-muted mb-3 font-medium uppercase tracking-wide">
          {project.tagline}
        </p>
        <p className="text-sm text-portfolio-light-text dark:text-portfolio-text mb-4 leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-portfolio-light-bg dark:bg-portfolio-bg border border-portfolio-light-border dark:border-portfolio-border rounded-full text-xs text-portfolio-light-accent dark:text-portfolio-accentLight font-mono font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-3 py-1 text-xs text-portfolio-muted font-medium">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
