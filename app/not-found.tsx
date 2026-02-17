'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-portfolio-light-bg dark:bg-portfolio-bg flex items-center justify-center py-12 px-4">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="text-7xl sm:text-8xl font-bold text-portfolio-accent dark:text-portfolio-accentLight"
            >
              404
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl sm:text-3xl font-semibold text-portfolio-light-text dark:text-portfolio-text"
            >
              Page not found
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-portfolio-muted max-w-md mx-auto"
            >
              Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-portfolio-accent hover:bg-portfolio-accentLight text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <ArrowLeft size={20} />
              Back to Home
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </main>
  );
}
