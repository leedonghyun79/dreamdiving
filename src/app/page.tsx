'use client';

import { css } from '../../styled-system/css';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { PartnerSection } from './components/PartnerSection';
import { EducationFeatureSection } from './components/EducationFeatureSection';
import { ProgramSection } from './components/ProgramSection';
import { ReviewSection } from './components/ReviewSection';
import { GallerySection } from './components/GallerySection';
import { Footer } from './components/Footer';
import { TermsModal } from './components/modals/TermsModal';
import { PrivacyModal } from './components/modals/PrivacyModal';
import { useModalState } from './lib/modalState';

export default function Home() {
  const { modalOpen, openModal, closeModal } = useModalState();

  return (
    <div className={css({ width: '100%' })}>
      <main>
        <HeroSection />
        <AboutSection />
        <PartnerSection />
        <EducationFeatureSection />
        <ProgramSection />
        <ReviewSection />
        <GallerySection />
        <Footer onOpenModal={openModal} />

        <TermsModal isOpen={modalOpen === 'terms'} onClose={closeModal} />
        <PrivacyModal isOpen={modalOpen === 'privacy'} onClose={closeModal} />
      </main>
    </div>
  );
}
