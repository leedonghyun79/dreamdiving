'use client';

import { Footer } from './Footer';
import { TermsModal } from './modals/TermsModal';
import { PrivacyModal } from './modals/PrivacyModal';
import { useModalState } from '@/app/lib/modalState';
import { CtaSection } from '@/app/components/domain/main/CtaSection';

export function GlobalFooter() {
  const { modalOpen, openModal, closeModal } = useModalState();

  return (
    <>
      <CtaSection />
      <Footer onOpenModal={openModal} />
      <TermsModal isOpen={modalOpen === 'terms'} onClose={closeModal} />
      <PrivacyModal isOpen={modalOpen === 'privacy'} onClose={closeModal} />
    </>
  );
}
