'use client';

import { motion } from 'framer-motion';
import { ANIMATION_CONFIG } from '@/lib/constants';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: ANIMATION_CONFIG.fadeInDuration }}
      className="mb-10 sm:mb-12 md:mb-16"
    >
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-portfolio-accent to-portfolio-accentLight rounded-full flex-shrink-0"
          />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-portfolio-light-text dark:text-portfolio-text pt-1">
            {title}
          </h2>
        </div>
        {subtitle && (
          <p className="text-base sm:text-lg text-portfolio-muted max-w-2xl leading-relaxed pl-0 sm:pl-16">
            {subtitle}
          </p>
        )}
      </div>
    </motion.div>
  );
}
