'use client';

import { useEffect, useState } from 'react';
import ScrollRevealText, { getRevealTime } from '@/app/components/common/ScrollRevealText';
import { REVIEWS } from '@/app/constants/data';
import { COMMON_STYLES, COLOR } from '@/app/constants/styles';

const VISIBLE = 3;
const GAP = 28;

const AUTO_INTERVAL = 4000; // ms, 자동 슬라이드 간격

// 이름 가운데 글자를 O로 가림 (김민지 → 김O지, 김철 → 김O)
const maskName = (name: string) => {
  if (name.length <= 1) return name;
  if (name.length === 2) return `${name[0]}O`;
  return `${name[0]}${'O'.repeat(name.length - 2)}${name[name.length - 1]}`;
};

export function ReviewSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const max = Math.max(0, REVIEWS.length - VISIBLE);

  // 자동 슬라이드: 마지막 후기 다음에는 처음으로 돌아감 (마우스를 올리면 잠시 멈춤)
  useEffect(() => {
    if (paused || max === 0) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c >= max ? 0 : c + 1));
    }, AUTO_INTERVAL);
    return () => clearInterval(timer);
  }, [paused, max]);

  return (
    <section style={{ padding: '100px 0', backgroundColor: '#f8f9fb' }}>
      <div style={{ maxWidth: '1520px', margin: '0 auto', padding: '0 50px' }}>
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <h2 style={{ ...COMMON_STYLES.heading2, marginBottom: '16px' }}>
            <ScrollRevealText text="수강생들의 다이빙 후기" charDelay={40} />
          </h2>
          <p style={{ ...COMMON_STYLES.subtitle, textAlign: 'center' }}>
            <ScrollRevealText
              text="드림다이브를 경험한 분들의 솔직한 이야기를 확인해보세요."
              charDelay={20}
              delay={getRevealTime('수강생들의 다이빙 후기', 40)}
            />
          </p>
        </div>

        {/* 캐러셀 */}
        <div
          style={{ overflow: 'hidden' }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            style={{
              display: 'flex',
              gap: `${GAP}px`,
              transition: 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: `translateX(calc(-${current} * (100% / ${VISIBLE} + ${GAP / VISIBLE}px)))`,
            }}
          >
            {REVIEWS.map((review, i) => (
              <div
                key={i}
                style={{
                  flex: `0 0 calc((100% - ${(VISIBLE - 1) * GAP}px) / ${VISIBLE})`,
                  backgroundColor: 'white',
                  borderRadius: '20px',
                  padding: '36px 32px',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  boxSizing: 'border-box',
                }}
              >

                <p
                  style={{
                    fontSize: '20px',
                    fontWeight: '800',
                    color: COLOR.primary,
                    textAlign: 'left',
                    lineHeight: '1.4',
                    marginBottom: '20px',
                    wordBreak: 'keep-all',
                  }}
                >
                  {review.headline}
                </p>

                <p
                  style={{
                    fontSize: '16px',
                    color: COLOR.textTertiary,
                    lineHeight: '1.85',
                    wordBreak: 'keep-all',
                    flexGrow: 1,
                    textAlign: 'left',
                    margin: 0,
                  }}
                >
                  {review.body}
                </p>

                <p style={{ fontSize: '15px', color: COLOR.text, margin: '24px 0 0' }}>
                  - <strong>{maskName(review.name)}</strong>{' '}
                  <span style={{ fontSize: '14px', color: '#999' }}>({review.program})</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 진행 표시 (자동 슬라이드 + 클릭 이동) */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: '40px' }}>
          {Array.from({ length: max + 1 }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={`${i + 1}번째 후기로 이동`}
              style={{
                display: 'block',
                width: i === current ? '40px' : '12px',
                height: '12px',
                padding: 0,
                border: 'none',
                borderRadius: '9999px',
                backgroundColor: i === current ? COLOR.primary : '#d1d5db',
                cursor: 'pointer',
                transition: 'all 0.4s',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
