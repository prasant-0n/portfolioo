'use client';

import { Moon, Sun, Monitor } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useThemeStore } from '@/lib/stores/theme-store';

export function ThemeToggle() {
  const { theme, setTheme } = useThemeStore();

  const icons = {
    light: Sun,
    dark: Moon,
    system: Monitor,
  };

  const nextTheme = {
    light: 'dark',
    dark: 'system',
    system: 'light',
  } as const;

  const Icon = icons[theme];

  const handleToggle = () => {
    setTheme(nextTheme[theme]);
  };

  return (
    <motion.button
      onClick={handleToggle}
      className="relative w-11 h-11 rounded-xl border border-portfolio-light-border dark:border-portfolio-border bg-portfolio-light-surface/50 dark:bg-portfolio-surface/50 backdrop-blur-sm hover:border-portfolio-accent dark:hover:border-portfolio-accentLight hover:bg-portfolio-light-surface dark:hover:bg-portfolio-surface transition-all duration-300 shadow-lg hover:shadow-xl"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${nextTheme[theme]} theme`}
      title={`Current: ${theme} theme`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Icon size={22} className="text-portfolio-accent dark:text-portfolio-accentLight" />
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
}
