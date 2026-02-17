'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO, ANIMATION_CONFIG, SOCIAL_LINKS } from '@/lib/constants';
import { Github, Linkedin, Twitter } from 'lucide-react';

const iconMap = {
  Github: Github,
  Linkedin: Linkedin,
  Twitter: Twitter,
};

export default function ProfileHeader() {
  return (
    <div className="relative bg-portfolio-light-bg dark:bg-portfolio-bg overflow-hidden">
      {/* Gradient background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-portfolio-accent/5 dark:bg-portfolio-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-portfolio-accent/5 dark:bg-portfolio-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-portfolio mx-auto px-4 sm:px-6 md:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: ANIMATION_CONFIG.fadeInDuration }}
          className="pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-12"
        >
          {/* Cover Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: ANIMATION_CONFIG.fadeInDuration,
              delay: 0.1,
            }}
            className="relative h-[250px] sm:h-[300px] md:h-[350px] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-black"
          >
            {/* Cover Image */}
            <Image
              src={"/mountains 🌄🫶🏻.jpeg"}
              alt="Cover"
              fill
              className="object-cover"
              priority
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />

            {/* Quote Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: ANIMATION_CONFIG.fadeInDuration,
                delay: 0.3,
              }}
              className="absolute inset-0 flex items-center justify-center px-4 sm:px-6"
            >
              <p className="text-white text-base sm:text-lg md:text-xl font-light italic text-center leading-relaxed max-w-3xl">
                {PERSONAL_INFO.coverQuote}
              </p>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <div className="relative -mt-12 sm:-mt-16 md:-mt-20 px-4 sm:px-0">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: ANIMATION_CONFIG.fadeInDuration,
                delay: 0.2,
              }}
              className="flex justify-center mb-8 sm:mb-10"
            >
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40">
                <Image
                  src="/images/profile.jpg"
                  alt={PERSONAL_INFO.name}
                  fill
                  className="rounded-full object-cover border-4 border-portfolio-light-bg dark:border-portfolio-bg shadow-2xl"
                  priority
                />
              </div>
            </motion.div>

            {/* Name and Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: ANIMATION_CONFIG.fadeInDuration,
                delay: 0.4,
              }}
              className="text-center space-y-6 pb-12 sm:pb-16"
            >
              {/* Name */}
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-portfolio-light-text dark:text-portfolio-text leading-tight">
                  {PERSONAL_INFO.name}
                </h1>
              </div>

              {/* Role and Location */}
              <div className="space-y-3">
                <p className="text-lg sm:text-xl md:text-2xl font-medium text-portfolio-accent dark:text-portfolio-accentLight">
                  {PERSONAL_INFO.currentRole}
                </p>
                <div className="flex items-center justify-center gap-2 text-sm sm:text-base text-portfolio-muted">
                  <MapPin size={18} />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>

              {/* Bio */}
              <p className="text-base sm:text-lg text-portfolio-light-text dark:text-portfolio-text leading-relaxed max-w-2xl mx-auto text-pretty">
                {PERSONAL_INFO.bio}
              </p>

              {/* Social Links */}
              <div className="flex justify-center gap-3 sm:gap-4 pt-6">
                {SOCIAL_LINKS.map((link) => {
                  const Icon = iconMap[link.icon as keyof typeof iconMap];
                  return (
                    <motion.a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${link.platform} profile`}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-portfolio-light-border dark:border-portfolio-border flex items-center justify-center hover:bg-portfolio-light-surface dark:hover:bg-portfolio-surface hover:border-portfolio-accent dark:hover:border-portfolio-accentLight transition-all duration-300"
                    >
                      <Icon size={20} className="text-portfolio-light-text dark:text-portfolio-text" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
