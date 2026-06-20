'use client';

import ScrollRevealText from '@/app/components/common/ScrollRevealText';
import { REVIEWS } from '@/app/constants/data';
import { COMMON_STYLES, COLOR } from '@/app/constants/styles';

function StarRating() {
  return (
    <div style={{ display: 'flex', gap: '3px', justifyContent: 'center', marginBottom: '16px' }}>
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} width="18" height="18" viewBox="0 0 24 24" fill="#f59e0b">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function ReviewSection() {
  return (
    <section style={{ padding: '100px 0', backgroundColor: '#f8f9fb' }}>
      <div style={{ maxWidth: '1520px', margin: '0 auto', padding: '0 50px' }}>
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div style={COMMON_STYLES.badge}>

            Reviews
          </div>
          <h2 style={{ ...COMMON_STYLES.heading2, marginBottom: '16px' }}>
            <ScrollRevealText text="수강생들의 생생한 후기" charDelay={40} />
          </h2>
          <p style={COMMON_STYLES.subtitle}>
            <ScrollRevealText text="드림다이브를 경험한 분들의 솔직한 이야기를 확인해보세요." charDelay={20} />
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '28px',
          }}
        >
          {REVIEWS.map((review, i) => (
            <div
              key={i}
              style={{
                backgroundColor: 'white',
                borderRadius: '20px',
                padding: '36px 32px',
                boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0',
              }}
            >
              <div
                style={{
                  textAlign: 'center',
                  fontSize: '11px',
                  fontWeight: '700',
                  letterSpacing: '0.12em',
                  color: '#999',
                  marginBottom: '14px',
                }}
              >
                VERIFIED REVIEW
              </div>

              <StarRating />

              <p
                style={{
                  fontSize: '20px',
                  fontWeight: '800',
                  color: COLOR.primary,
                  textAlign: 'center',
                  lineHeight: '1.4',
                  marginBottom: '20px',
                  wordBreak: 'keep-all',
                }}
              >
                {review.headline}
              </p>

              <p
                style={{
                  fontSize: '15px',
                  color: COLOR.textTertiary,
                  lineHeight: '1.85',
                  wordBreak: 'keep-all',
                  flexGrow: 1,
                  textAlign: 'center',
                }}
              >
                {review.body}
              </p>

              <div
                style={{
                  borderTop: '1px solid #f0f0f0',
                  marginTop: '24px',
                  paddingTop: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: '#eaf4fb',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                    fontWeight: '700',
                    color: COLOR.primary,
                  }}
                >
                  {review.name[0]}
                </div>
                <div>
                  <p style={{ fontSize: '14px', fontWeight: '700', color: COLOR.text, margin: 0 }}>{review.name}</p>
                  <p style={{ fontSize: '12px', color: '#999', margin: 0 }}>{review.program}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
