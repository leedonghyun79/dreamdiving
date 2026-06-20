'use client';

import { css } from '../../styled-system/css';
import { HeroSection } from './components/domain/main/HeroSection';
import { MainAboutSection } from './components/domain/main/MainAboutSection';
import { PartnerSection } from './components/domain/main/PartnerSection';

import { ProgramSection } from './components/domain/main/ProgramSection';
import { ReviewSection } from './components/domain/main/ReviewSection';

export default function Home() {
  return (
    <div className={css({ width: '100%' })}>
      <main>
        <HeroSection />
        <MainAboutSection />
        <PartnerSection />

        <ProgramSection />
        <ReviewSection />
      </main>
    </div>
  );
}
