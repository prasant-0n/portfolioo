'use client';

import { useQuery } from '@tanstack/react-query';
import Container from '../ui/Container';
import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';
import LearningRepoRow from '../ui/LearningRepoRow';
import { LearningRepo } from '@/lib/types';

async function fetchLearningRepos(): Promise<LearningRepo[]> {
  const response = await fetch('/api/learning');
  if (!response.ok) throw new Error('Failed to fetch learning repos');
  return response.json();
}

export default function MyLearning() {
  const { data: repos = [], isLoading } = useQuery({
    queryKey: ['learning'],
    queryFn: fetchLearningRepos,
    staleTime: 1000 * 60 * 10, // Cache for 10 minutes
  });

  if (isLoading) {
    return (
      <Section id="learning">
        <Container>
          <SectionHeader
            title="Learning Resources"
            subtitle="Educational content I've created and shared"
          />
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-20 bg-portfolio-light-surface/50 dark:bg-portfolio-surface/30 rounded-xl border border-portfolio-light-border dark:border-portfolio-border animate-pulse"
              />
            ))}
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section id="learning">
      <Container>
        <SectionHeader
          title="Learning Resources"
          subtitle="Educational content I've created and shared"
        />
        <div className="space-y-3">
          {repos.map((repo, index) => (
            <LearningRepoRow key={repo.name} repo={repo} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
