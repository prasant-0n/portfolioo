'use client';

import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import Container from './Container';
import SocialLinks from './SocialLinks';
import { PERSONAL_INFO } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-portfolio-light-border dark:border-portfolio-border bg-portfolio-light-bg dark:bg-portfolio-bg/50 py-16 sm:py-20">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-portfolio-accent/5 dark:bg-portfolio-accent/10 rounded-full blur-3xl" />
      </div>

      <Container>
        <div className="relative space-y-12 sm:space-y-16">
          {/* Schedule Call Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl font-semibold text-portfolio-light-text dark:text-portfolio-text">
                Let&apos;s Work Together
              </h2>
              <p className="text-base text-portfolio-muted max-w-md">
                Have a project in mind? Schedule a call to discuss your ideas.
              </p>
            </div>

            <motion.a
              href={PERSONAL_INFO.calComLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-portfolio-accent hover:bg-portfolio-accentLight text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Calendar size={20} />
              <span>Schedule a Call</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-portfolio-light-border dark:via-portfolio-border to-transparent" />

          {/* Social and Info Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center sm:text-left"
            >
              <h3 className="text-lg font-semibold text-portfolio-light-text dark:text-portfolio-text mb-4">
                Connect With Me
              </h3>
              <div className="flex justify-center sm:justify-start gap-4">
                <SocialLinks />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center sm:text-right space-y-2"
            >
              <p className="text-sm text-portfolio-muted">
                © {currentYear} {PERSONAL_INFO.name}
              </p>
              <p className="text-xs text-portfolio-muted/70">
                Built with care and modern web technologies
              </p>
            </motion.div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
