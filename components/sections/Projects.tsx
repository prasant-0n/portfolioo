'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import Container from '../ui/Container';
import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';
import ProjectCard from '../ui/ProjectCard';
import { Project } from '@/lib/types';

async function fetchProjects(): Promise<Project[]> {
  const response = await fetch('/api/github/projects');
  if (!response.ok) {
    throw new Error('Failed to fetch projects');
  }
  return response.json();
}

export default function Projects() {
  const { data: projects = [], isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  // Get featured projects only
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <Section id="projects">
      <Container>
        <SectionHeader
          title="Selected Work"
          subtitle="Projects I'm proud to have built"
        />

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-96 bg-portfolio-light-surface/50 dark:bg-portfolio-surface/50 border border-portfolio-light-border dark:border-portfolio-border rounded-2xl animate-pulse"
              />
            ))}
          </div>
        ) : featuredProjects.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

            {projects.length > 0 && (
              <div className="text-center pt-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-portfolio-accent/10 dark:bg-portfolio-accent/5 border border-portfolio-accent/30 dark:border-portfolio-accent/30 text-portfolio-accent dark:text-portfolio-accentLight hover:bg-portfolio-accent/20 dark:hover:bg-portfolio-accent/10 rounded-lg font-medium transition-all duration-300"
                >
                  <span>View All Projects</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <p className="text-portfolio-muted text-lg">
              No projects available at the moment.
            </p>
          </div>
        )}
      </Container>
    </Section>
  );
}
