'use client';

import { motion } from 'framer-motion';
import { Tag, Calendar, RefreshCw } from 'lucide-react';
import { formatMonthYear, formatRelativeTime } from '@/lib/utils/date';

interface ProjectMetadataProps {
  category: string;
  createdAt: string;
  lastUpdated?: string;
  autoFetched?: boolean;
}

export default function ProjectMetadata({
  category,
  createdAt,
  lastUpdated,
  autoFetched,
}: ProjectMetadataProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl bg-portfolio-light-surface/30 dark:bg-portfolio-surface/30 border border-portfolio-light-border dark:border-portfolio-border/50 p-6 sm:p-8 backdrop-blur-sm"
    >
      <h3 className="text-2xl font-semibold text-portfolio-light-text dark:text-portfolio-text mb-6">
        Project Information
      </h3>

      <div className="space-y-6">
        {/* Category */}
        <div className="flex items-start gap-4 pb-6 border-b border-portfolio-light-border dark:border-portfolio-border/30">
          <Tag size={20} className="text-portfolio-accent dark:text-portfolio-accentLight mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-xs font-semibold text-portfolio-muted uppercase tracking-wide mb-2">Category</p>
            <p className="text-lg font-medium text-portfolio-light-text dark:text-portfolio-text">{category}</p>
          </div>
        </div>

        {/* Created Date */}
        <div className="flex items-start gap-4 pb-6 border-b border-portfolio-light-border dark:border-portfolio-border/30">
          <Calendar size={20} className="text-portfolio-accent dark:text-portfolio-accentLight mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-xs font-semibold text-portfolio-muted uppercase tracking-wide mb-2">Created</p>
            <p className="text-lg font-medium text-portfolio-light-text dark:text-portfolio-text">{formatMonthYear(createdAt)}</p>
          </div>
        </div>

        {/* Last Updated */}
        {lastUpdated && (
          <div className="flex items-start gap-4 pb-6 border-b border-portfolio-light-border dark:border-portfolio-border/30">
            <RefreshCw size={20} className="text-portfolio-accent dark:text-portfolio-accentLight mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs font-semibold text-portfolio-muted uppercase tracking-wide mb-2">Last Updated</p>
              <p className="text-lg font-medium text-portfolio-light-text dark:text-portfolio-text">{formatRelativeTime(lastUpdated)}</p>
            </div>
          </div>
        )}

        {/* Auto-synced Badge */}
        {autoFetched && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-portfolio-accent/10 dark:bg-portfolio-accent/5 border border-portfolio-accent/30 dark:border-portfolio-accent/30 rounded-full text-sm text-portfolio-accent dark:text-portfolio-accentLight font-medium">
              <RefreshCw size={14} className="animate-spin" />
              <span>Auto-synced from GitHub</span>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
