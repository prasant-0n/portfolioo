'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/constants';

const iconMap = {
  Github: Github,
  Linkedin: Linkedin,
  Twitter: Twitter,
};

export default function SocialLinks() {
  return (
    <div className="flex justify-center gap-3">
      {SOCIAL_LINKS.map((link, index) => {
        const Icon = iconMap[link.icon as keyof typeof iconMap];
        return (
          <motion.a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${link.platform} profile`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 rounded-xl border border-portfolio-light-border dark:border-portfolio-border flex items-center justify-center bg-portfolio-light-surface/30 dark:bg-portfolio-surface/30 hover:border-portfolio-accent dark:hover:border-portfolio-accentLight hover:bg-portfolio-light-surface dark:hover:bg-portfolio-surface transition-all duration-300"
          >
            <Icon size={22} className="text-portfolio-light-text dark:text-portfolio-text group-hover:text-portfolio-accent dark:group-hover:text-portfolio-accentLight transition-colors" />
          </motion.a>
        );
      })}
    </div>
  );
}
