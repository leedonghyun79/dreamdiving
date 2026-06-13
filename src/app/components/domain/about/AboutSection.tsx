'use client';

import ScrollRevealText from '../../common/ScrollRevealText';
import { COMMON_STYLES, COLOR } from '../../../constants/styles';

export function AboutSection() {
  return (
    <section
      style={{
        padding: '100px 0',
        backgroundColor: '#fff',
      }}
    >
      <div
        style={{
          maxWidth: '1520px',
          margin: '0 auto',
          padding: '0 50px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }}
      >
        <div>
          <div style={COMMON_STYLES.badge}>

            Expert Instructor
          </div>

          <h2
            style={{
              fontSize: '44px',
              fontWeight: '900',
              lineHeight: '1.2',
              marginBottom: '24px',
              wordBreak: 'keep-all',
            }}
          >
            <span style={{ color: COLOR.primary }}>
              <ScrollRevealText text="최고의 강사진과 함께하는" charDelay={45} />
            </span>
            <br />
            <span style={{ color: COLOR.text }}>
              <ScrollRevealText text="드림다이브 다이빙 여정." charDelay={45} />
            </span>
          </h2>

          <p
            style={{
              fontSize: '17px',
              color: COLOR.textSecondary,
              lineHeight: '1.85',
              marginBottom: '40px',
              wordBreak: 'keep-all',
            }}
          >
            <ScrollRevealText
              text="믿을 수 있는 전문 강사진과 함께하는 다이빙, 1:1 맞춤 교육부터 강사 자격취득까지"
              charDelay={20}
            />
            <br />
            <ScrollRevealText
              text="체계적인 교육 과정을 제공합니다."
              charDelay={20}
            />
          </p>

          <a
            href="/about"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 28px',
              border: `1px solid ${COLOR.primary}`,
              borderRadius: '8px',
              color: COLOR.primary,
              fontSize: '15px',
              fontWeight: '700',
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = COLOR.primary;
              (e.currentTarget as HTMLAnchorElement).style.color = 'white';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
              (e.currentTarget as HTMLAnchorElement).style.color = COLOR.primary;
            }}
          >
            드림다이브 소개
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: 'auto auto',
            gap: '12px',
          }}
        >
          <div
            style={{
              gridRow: '1 / 3',
              borderRadius: '16px',
              overflow: 'hidden',
              height: '460px',
              position: 'relative',
            }}
          >
            <img
              src="/assets/main/49eab77bb0b32.jpg"
              alt="다이빙 1"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ borderRadius: '16px', overflow: 'hidden', height: '220px' }}>
              <img
                src="/assets/main/fb5797dd599e9.jpg"
                alt="다이빙 2"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div style={{ borderRadius: '16px', overflow: 'hidden', height: '220px' }}>
              <img
                src="/assets/main/8521cb2ab2e41.jpg"
                alt="다이빙 3"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
