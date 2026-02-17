'use client';

import { useState } from 'react';
import Container from '../ui/Container';
import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';
import ExperienceCard from '../ui/ExperienceCard';
import CompanyExperienceGroup from '../ui/CompanyExperienceGroup';
import { EXPERIENCES } from '@/lib/data/experience';

export default function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const sortedExperiences = [...EXPERIENCES].sort((a, b) => {
    const aDate = a.positions?.[0]?.startDate || a.startDate || '';
    const bDate = b.positions?.[0]?.startDate || b.startDate || '';
    return new Date(bDate).getTime() - new Date(aDate).getTime();
  });

  const handleToggle = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <Section id="experience">
      <Container>
        <SectionHeader
          title="Experience"
          subtitle="My professional journey and roles"
        />

        <div className="relative">
          <div
            className="absolute left-4 sm:left-7 top-0 bottom-0 w-0.5 bg-gradient-to-b from-portfolio-accent via-portfolio-border to-transparent dark:from-portfolio-accent dark:via-portfolio-border"
            aria-hidden="true"
          />

          <div className="space-y-6">
            {sortedExperiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                <div
                  className="absolute left-4 sm:left-7 top-6 w-3 h-3 rounded-full bg-portfolio-accent border-4 border-portfolio-light-bg dark:border-portfolio-bg transform -translate-x-1/2 z-10 shadow-lg shadow-portfolio-accent/50"
                  aria-hidden="true"
                />

                <div className="pl-10 sm:pl-20">
                  {exp.positions ? (
                    <CompanyExperienceGroup
                      experience={exp}
                      isExpanded={expandedId === exp.id}
                      onToggle={() => handleToggle(exp.id)}
                    />
                  ) : (
                    <ExperienceCard
                      experience={exp}
                      isExpanded={expandedId === exp.id}
                      onToggle={() => handleToggle(exp.id)}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
