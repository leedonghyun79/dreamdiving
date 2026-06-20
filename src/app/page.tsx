'use client';

import { css } from '../../styled-system/css';
import { HeroSection } from './components/domain/main/HeroSection';
import { MainAboutSection } from './components/domain/main/MainAboutSection';
import { PartnerSection } from './components/domain/main/PartnerSection';

import { ProgramSection } from './components/domain/main/ProgramSection';
import { ReviewSection } from './components/domain/main/ReviewSection';
import { CtaSection } from './components/domain/main/CtaSection';
import { Footer } from './components/common/Footer';
import { TermsModal } from './components/common/modals/TermsModal';
import { PrivacyModal } from './components/common/modals/PrivacyModal';
import { useModalState } from './lib/modalState';

export default function Home() {
  const { modalOpen, openModal, closeModal } = useModalState();

  return (
    <div className={css({ width: '100%' })}>
      <main>
        <HeroSection />
        <MainAboutSection />
        <PartnerSection />

        <ProgramSection />
        <ReviewSection />
        <CtaSection />
        <Footer onOpenModal={openModal} />

        <TermsModal isOpen={modalOpen === 'terms'} onClose={closeModal} />
        <PrivacyModal isOpen={modalOpen === 'privacy'} onClose={closeModal} />
      </main>
    </div>
  );
}
