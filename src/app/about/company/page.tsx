'use client';

import { AboutSection } from '@/app/components/domain/about/AboutSection';
import { AboutVideoSection } from '@/app/components/domain/about/AboutVideoSection';
import { AboutTourSection } from '@/app/components/domain/about/AboutTourSection';

export default function CompanyPage() {
  return (
    <main>
      <AboutSection />
      <AboutVideoSection />
      <AboutTourSection />
    </main>
  );
}

