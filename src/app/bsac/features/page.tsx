'use client';

import { Footer } from '../../components/common/Footer';
import { useModalState } from '../../lib/modalState';
import { TermsModal } from '../../components/common/modals/TermsModal';
import { PrivacyModal } from '../../components/common/modals/PrivacyModal';
import { BSACFeaturesSection1 } from '../../components/domain/about/BSACFeaturesSection1';
import { BSACFeaturesSection2 } from '../../components/domain/about/BSACFeaturesSection2';
import { BSACFeaturesSection3 } from '../../components/domain/about/BSACFeaturesSection3';

export default function FeaturesPage() {
  const { modalOpen, openModal, closeModal } = useModalState();

  return (
    <main style={{ width: '100%' }}>
      {/* 배너 섹션 */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          height: '500px',
          backgroundImage: 'url(/assets/main/49eab77bb0b32.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '0',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.4)',
          }}
        />
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            textAlign: 'center',
            color: 'white',
          }}
        >
          <h1
            style={{
              fontSize: '64px',
              fontWeight: '900',
              marginBottom: '20px',
              lineHeight: '1.2',
            }}
          >
            BSAC KOREA
          </h1>
          <p
            style={{
              fontSize: '20px',
              color: 'rgba(255,255,255,0.85)',
            }}
          >
            그 권위와 전통으로 세계를 이끌어 갑니다.
          </p>
        </div>
      </section>

      {/* 주요 섹션들 */}
      <BSACFeaturesSection1 />
      <BSACFeaturesSection2 />
      <BSACFeaturesSection3 />

      {/* Footer */}
      <Footer onOpenModal={openModal} />

      {/* 모달 */}
      <TermsModal isOpen={modalOpen === 'terms'} onClose={closeModal} />
      <PrivacyModal isOpen={modalOpen === 'privacy'} onClose={closeModal} />
    </main>
  );
}
