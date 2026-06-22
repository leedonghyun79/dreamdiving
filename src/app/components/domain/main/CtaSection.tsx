'use client';

import ScrollRevealText from '@/app/components/common/ScrollRevealText';
import { GALLERY_IMAGES } from '@/app/constants/data';
import { COMMON_STYLES, COLOR } from '@/app/constants/styles';

const COL1 = [...GALLERY_IMAGES.filter((_, i) => i % 2 === 0), ...GALLERY_IMAGES.filter((_, i) => i % 2 === 0)];
const COL2 = [...GALLERY_IMAGES.filter((_, i) => i % 2 === 1), ...GALLERY_IMAGES.filter((_, i) => i % 2 === 1)];

export function CtaSection() {
  return (
    <section style={{ padding: '100px 0', backgroundColor: '#fff' }}>
      <div style={{ maxWidth: '1520px', margin: '0 auto', padding: '0 50px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
        <div>
          <div style={COMMON_STYLES.badge}>

            Consultation
          </div>

          <h2
            style={{
              fontSize: '44px',
              fontWeight: '900',
              lineHeight: '1.3',
              marginBottom: '24px',
              wordBreak: 'keep-all',
              color: COLOR.text,
            }}
          >
            <ScrollRevealText text="안전한 교육과 풍부한 경험으로" charDelay={35} />
            <br />
            <ScrollRevealText text="특별한 추억을" charDelay={35} />
            <br />
            <span style={{ color: COLOR.primary }}>
              <ScrollRevealText text="드림다이브와 함께하세요." charDelay={35} />
            </span>
          </h2>

          <p style={{ fontSize: '17px', color: COLOR.textSecondary, lineHeight: '1.85', marginBottom: '40px', wordBreak: 'keep-all' }}>
            <ScrollRevealText text="K26 풀장부터 강릉·양양 해양 실습까지, 드림다이브의 생생한 현장을 만나보세요." charDelay={18} />
          </p>

          <a
            href="/reservation/inquiry"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '16px 32px',
              border: `1px solid ${COLOR.primary}`,
              borderRadius: '8px',
              color: COLOR.primary,
              fontSize: '16px',
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
            상담 문의하기
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div style={{ display: 'flex', gap: '16px', height: '600px', overflow: 'hidden', borderRadius: '24px' }}>
          <div style={{ flex: 1, overflow: 'hidden' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                animation: 'galleryScrollUp 20s linear infinite',
              }}
            >
              {COL1.map((img, i) => (
                <div key={i} style={{ borderRadius: '12px', overflow: 'hidden', flexShrink: 0 }}>
                  <img src={img} alt={`갤러리 ${i + 1}`} style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} />
                </div>
              ))}
            </div>
          </div>

          <div style={{ flex: 1, overflow: 'hidden' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                animation: 'galleryScrollDown 24s linear infinite',
              }}
            >
              {COL2.map((img, i) => (
                <div key={i} style={{ borderRadius: '12px', overflow: 'hidden', flexShrink: 0 }}>
                  <img src={img} alt={`갤러리 ${i + 1}`} style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
