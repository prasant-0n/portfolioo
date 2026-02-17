'use client';

import { useEffect, useRef } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { ExternalLink } from 'lucide-react';
import Container from '../ui/Container';
import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';
import { PERSONAL_INFO } from '@/lib/constants';
import { useThemeStore } from '@/lib/stores/theme-store';

export default function GitHubContributions() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useThemeStore();

  useEffect(() => {
    // Scroll to the right (most recent contributions) after calendar renders
    const scrollToRight = () => {
      if (containerRef.current) {
        // Try multiple possible selectors for the scrollable container
        const possibleSelectors = [
          'article',
          '.react-activity-calendar',
          '[class*="activity-calendar"]',
          'div[style*="overflow"]'
        ];

        for (const selector of possibleSelectors) {
          const scrollable = containerRef.current.querySelector(selector) as HTMLElement;
          if (scrollable && scrollable.scrollWidth > scrollable.clientWidth) {
            scrollable.scrollLeft = scrollable.scrollWidth;
            break;
          }
        }
      }
    };

    // Try multiple times with increasing delays to ensure calendar is fully rendered
    const timer1 = setTimeout(scrollToRight, 100);
    const timer2 = setTimeout(scrollToRight, 300);
    const timer3 = setTimeout(scrollToRight, 500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <Section id="github">
      <Container>
        <SectionHeader
          title="Contributions"
          subtitle="My active involvement in open source development"
        />
        <div ref={containerRef} className="flex justify-center mb-8 overflow-x-auto pb-4 -mx-4 sm:mx-0 px-4 sm:px-0">
          <div className="bg-portfolio-light-surface/30 dark:bg-portfolio-surface/30 border border-portfolio-light-border dark:border-portfolio-border rounded-xl p-6 backdrop-blur-sm">
            <GitHubCalendar
              username={PERSONAL_INFO.githubUsername}
              theme={{
                light: ['#e0e7ff', '#a5d8ff', '#60a5fa', '#3b82f6', '#1d4ed8'],
                dark: ['#1a1f2e', '#1d4ed8', '#3b82f6', '#60a5fa', '#a5d8ff'],
              }}
              colorScheme={resolvedTheme === 'dark' ? 'dark' : 'light'}
              blockSize={14}
              blockMargin={4}
            />
          </div>
        </div>
        <div className="text-center pt-4">
          <a
            href={`https://github.com/${PERSONAL_INFO.githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-portfolio-accent/10 dark:bg-portfolio-accent/5 border border-portfolio-accent/30 dark:border-portfolio-accent/30 text-portfolio-accent dark:text-portfolio-accentLight hover:bg-portfolio-accent/20 dark:hover:bg-portfolio-accent/10 rounded-lg font-medium transition-all duration-300"
          >
            <span>View on GitHub</span>
            <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </Container>
    </Section>
  );
}
