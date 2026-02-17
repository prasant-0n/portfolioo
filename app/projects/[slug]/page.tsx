"use client";

import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import Container from "@/components/ui/Container";
import ProjectMetadata from "@/components/ui/ProjectMetadata";
import VideoEmbed from "@/components/ui/VideoEmbed";
import ImageGallery from "@/components/ui/ImageGallery";
import { Project } from "@/lib/types";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ErrorFallback } from "@/components/ui/ErrorFallback";
import { ANIMATION_CONFIG } from "@/lib/constants";

async function fetchProjectBySlug(slug: string): Promise<Project> {
  const response = await fetch(`/api/github/projects?slug=${slug}`);
  if (!response.ok) {
    throw new Error("Project not found");
  }
  return response.json();
}

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const {
    data: project,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["project", slug],
    queryFn: () => fetchProjectBySlug(slug),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  if (isLoading) {
    return (
      <main className="min-h-screen bg-portfolio-light-bg dark:bg-portfolio-bg py-12 sm:py-16">
        <Container>
          <div className="animate-pulse space-y-8">
            <div className="h-8 w-32 bg-portfolio-light-surface dark:bg-portfolio-surface/50 rounded-lg" />
            <div className="aspect-video bg-portfolio-light-surface dark:bg-portfolio-surface/50 rounded-2xl" />
            <div className="space-y-4">
              <div className="h-8 w-3/4 bg-portfolio-light-surface dark:bg-portfolio-surface/50 rounded-lg" />
              <div className="h-6 w-1/2 bg-portfolio-light-surface dark:bg-portfolio-surface/50 rounded-lg" />
            </div>
          </div>
        </Container>
      </main>
    );
  }

  if (error || !project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-portfolio-light-bg dark:bg-portfolio-bg py-12 sm:py-16">
      <ErrorBoundary
        fallback={
          <Container>
            <div className="py-20">
              <ErrorFallback
                title="Project details unavailable"
                message="We couldn't load this project's details. Please try refreshing the page or go back to all projects."
              />
              <div className="mt-8 text-center">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 text-portfolio-accent dark:text-portfolio-accentLight hover:text-portfolio-light-text dark:hover:text-portfolio-text transition-colors font-medium"
                >
                  <ArrowLeft size={20} />
                  Back to All Projects
                </Link>
              </div>
            </div>
          </Container>
        }
      >
        <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-portfolio-accent dark:text-portfolio-accentLight hover:text-portfolio-light-text dark:hover:text-portfolio-text transition-all duration-300 font-medium"
          >
            <ArrowLeft size={20} />
            <span>Back to Projects</span>
          </Link>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: ANIMATION_CONFIG.fadeInDuration }}
          className="relative aspect-video rounded-2xl overflow-hidden mb-12 bg-portfolio-light-surface dark:bg-portfolio-surface/50 border border-portfolio-light-border dark:border-portfolio-border"
        >
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: ANIMATION_CONFIG.fadeInDuration, delay: 0.1 }}
          className="mb-12"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-portfolio-light-text dark:text-portfolio-text mb-6 leading-tight">
            {project.title}
          </h1>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="px-3 py-1.5 bg-portfolio-light-bg dark:bg-portfolio-bg border border-portfolio-light-border dark:border-portfolio-border hover:border-portfolio-accent/50 dark:hover:border-portfolio-accent/50 rounded-full text-sm text-portfolio-light-accent dark:text-portfolio-accentLight font-mono font-medium transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-portfolio-accent hover:bg-portfolio-accentLight text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <ExternalLink size={20} />
                <span>Live Demo</span>
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border border-portfolio-light-border dark:border-portfolio-border text-portfolio-light-text dark:text-portfolio-text rounded-xl hover:border-portfolio-accent dark:hover:border-portfolio-accentLight hover:bg-portfolio-light-surface/50 dark:hover:bg-portfolio-surface/50 transition-all duration-300 font-semibold"
              >
                <Github size={20} />
                <span>GitHub</span>
              </motion.a>
            )}
          </div>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: ANIMATION_CONFIG.fadeInDuration }}
          className="mb-12 sm:mb-16"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="h-1 w-12 bg-gradient-to-r from-portfolio-accent to-portfolio-acidentLight rounded-full flex-shrink-0 mt-1" />
            <h2 className="text-3xl sm:text-4xl font-semibold text-portfolio-light-text dark:text-portfolio-text">
              Overview
            </h2>
          </div>
          <p className="text-portfolio-light-text dark:text-portfolio-text leading-relaxed text-base sm:text-lg whitespace-pre-wrap text-pretty">
            {project.tagline}
          </p>
        </motion.section>
        {/* Metadata Card */}
        <div className="mb-12">
          <ProjectMetadata
            category={project.category}
            createdAt={project.createdAt}
            lastUpdated={project.lastUpdated}
            autoFetched={project.autoFetched}
          />
        </div>

        {/* Video Demo */}
        {project.videoUrl && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: ANIMATION_CONFIG.fadeInDuration }}
            className="mb-12 sm:mb-16"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="h-1 w-12 bg-gradient-to-r from-portfolio-accent to-portfolio-accentLight rounded-full flex-shrink-0 mt-1" />
              <h2 className="text-3xl sm:text-4xl font-semibold text-portfolio-light-text dark:text-portfolio-text">
                Video Demo
              </h2>
            </div>
            <VideoEmbed videoUrl={project.videoUrl} title={project.title} />
          </motion.section>
        )}

        {/* The Challenge */}
        {project.problem && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: ANIMATION_CONFIG.fadeInDuration }}
            className="mb-12 sm:mb-16"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="h-1 w-12 bg-gradient-to-r from-portfolio-accent to-portfolio-accentLight rounded-full flex-shrink-0 mt-1" />
              <h2 className="text-3xl sm:text-4xl font-semibold text-portfolio-light-text dark:text-portfolio-text">
                The Challenge
              </h2>
            </div>
            <p className="text-portfolio-light-text dark:text-portfolio-text leading-relaxed text-base sm:text-lg text-pretty">
              {project.problem}
            </p>
          </motion.section>
        )}

        {/* The Solution */}
        {project.solution && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: ANIMATION_CONFIG.fadeInDuration }}
            className="mb-12 sm:mb-16"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="h-1 w-12 bg-gradient-to-r from-portfolio-accent to-portfolio-accentLight rounded-full flex-shrink-0 mt-1" />
              <h2 className="text-3xl sm:text-4xl font-semibold text-portfolio-light-text dark:text-portfolio-text">
                The Solution
              </h2>
            </div>
            <p className="text-portfolio-light-text dark:text-portfolio-text leading-relaxed text-base sm:text-lg text-pretty">
              {project.solution}
            </p>
          </motion.section>
        )}

        {/* Impact */}
        {project.impact && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: ANIMATION_CONFIG.fadeInDuration }}
            className="mb-12 sm:mb-16"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="h-1 w-12 bg-gradient-to-r from-portfolio-accent to-portfolio-accentLight rounded-full flex-shrink-0 mt-1" />
              <h2 className="text-3xl sm:text-4xl font-semibold text-portfolio-light-text dark:text-portfolio-text">
                Impact
              </h2>
            </div>
            <p className="text-portfolio-light-text dark:text-portfolio-text leading-relaxed text-base sm:text-lg text-pretty">
              {project.impact}
            </p>
          </motion.section>
        )}

        {/* Image Gallery */}
        {project.images && project.images.length > 1 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: ANIMATION_CONFIG.fadeInDuration }}
            className="mb-12 sm:mb-16"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="h-1 w-12 bg-gradient-to-r from-portfolio-accent to-portfolio-accentLight rounded-full flex-shrink-0 mt-1" />
              <h2 className="text-3xl sm:text-4xl font-semibold text-portfolio-light-text dark:text-portfolio-text">
                Gallery
              </h2>
            </div>
            <ImageGallery
              images={project.images}
              projectTitle={project.title}
            />
          </motion.section>
        )}

        {/* Testimonial */}
        {project.testimonial && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: ANIMATION_CONFIG.fadeInDuration }}
            className="mb-12 sm:mb-16"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="h-1 w-12 bg-gradient-to-r from-portfolio-accent to-portfolio-accentLight rounded-full flex-shrink-0 mt-1" />
              <h2 className="text-3xl sm:text-4xl font-semibold text-portfolio-light-text dark:text-portfolio-text">
                Testimonial
              </h2>
            </div>
            <div className="border border-portfolio-light-border dark:border-portfolio-border rounded-2xl p-6 sm:p-8 bg-portfolio-light-surface/30 dark:bg-portfolio-surface/30 backdrop-blur-sm">
              <p className="text-base sm:text-lg text-portfolio-light-text dark:text-portfolio-text italic mb-6 text-pretty leading-relaxed">
                &ldquo;{project.testimonial.text}&rdquo;
              </p>
              <div className="flex items-center gap-4 border-t border-portfolio-light-border dark:border-portfolio-border pt-6">
                <div>
                  <p className="font-semibold text-portfolio-light-text dark:text-portfolio-text">
                    {project.testimonial.author}
                  </p>
                  <p className="text-sm text-portfolio-muted">
                    {project.testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
        )}
        </Container>
      </ErrorBoundary>
    </main>
  );
}
