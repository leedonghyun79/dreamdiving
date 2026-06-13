'use client';

import { PARTNER_LOGOS } from '../../../constants/data';

// 무한 롤링을 위해 로고 배열을 2배로 복제
const LOGOS = [...PARTNER_LOGOS, ...PARTNER_LOGOS];

export function PartnerSection() {
  return (
    <section
      style={{
        padding: '60px 0px 150px',
        backgroundColor: '#ffffff',
        overflow: 'hidden',
      }}
    >
      <style>
        {`
          @keyframes logoScrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 16px)); } /* gap 32px의 절반을 고려하여 정확하게 스크롤 */
          }
        `}
      </style>
      <div
        style={{
          maxWidth: '1520px',
          margin: '0 auto',
          padding: '0 50px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* 양옆 그라데이션 오버레이 */}
        <div
          style={{
            position: 'absolute',
            left: '0px',
            top: '0px',
            bottom: '0px',
            width: '120px',
            zIndex: 2,
            background: 'linear-gradient(to right, white, transparent)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: '0px',
            top: '0px',
            bottom: '0px',
            width: '120px',
            zIndex: 2,
            background: 'linear-gradient(to left, white, transparent)',
            pointerEvents: 'none',
          }}
        />

        {/* 슬라이딩 컨테이너 */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
            width: 'max-content',
            animation: '18s linear 0s infinite normal none running logoScrollLeft',
            position: 'relative',
          }}
        >
          {LOGOS.map((logo, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                width: '280px',
                height: '108px',
                border: '1px solid rgb(229, 231, 235)',
                borderRadius: '0px',
                overflow: 'hidden',
              }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
