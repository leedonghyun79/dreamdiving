'use client';

import ScrollRevealText from './ScrollRevealText';
import { COLOR } from '../constants/styles';

const FEATURE_IMAGES = [
  { src: '/assets/main/49eab77bb0b32.jpg', alt: '체계적인 교육' },
  { src: '/assets/main/fb5797dd599e9.jpg', alt: '국내 투어' },
  { src: '/assets/main/8521cb2ab2e41.jpg', alt: '다이빙 경험' },
  { src: '/assets/main/49eab77bb0b32.jpg', alt: '전문 강사진' },
];

export function EducationFeatureSection() {
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
          alignItems: 'start',
        }}
      >
        <div>
          <h2
            style={{
              fontSize: '44px',
              fontWeight: '900',
              lineHeight: '1.3',
              marginBottom: '32px',
              wordBreak: 'keep-all',
              color: COLOR.text,
            }}
          >
            <span>
              <ScrollRevealText text="체계적인 교육과" charDelay={40} />
            </span>
            <br />
            <span>
              <ScrollRevealText text="국내의 투어로" charDelay={40} />
            </span>
            <br />
            <span style={{ color: COLOR.primary }}>
              <ScrollRevealText text="완성되는 다이버의 꿈" charDelay={40} />
            </span>
          </h2>

          <p
            style={{
              fontSize: '17px',
              color: COLOR.textSecondary,
              lineHeight: '1.85',
              marginBottom: '20px',
              wordBreak: 'keep-all',
            }}
          >
            <ScrollRevealText
              text="드림다이브는 수도권 최고의 스쿠버 교육 전형을 운영하며 오픈워터 입문 부터 스쿠버 강사교육 다니크널 다이빙 강사 교육을 전형하는 전문 다이빙스쿨입니다."
              charDelay={15}
            />
          </p>

          <p
            style={{
              fontSize: '16px',
              color: COLOR.textSecondary,
              lineHeight: '1.8',
              marginBottom: '20px',
              wordBreak: 'keep-all',
            }}
          >
            <ScrollRevealText
              text="K26 다이빙 풀장과 서울 올림픽 수영장을 교육 장소"
              charDelay={15}
            />
          </p>

          <p
            style={{
              fontSize: '16px',
              color: COLOR.textSecondary,
              lineHeight: '1.8',
              wordBreak: 'keep-all',
            }}
          >
            <ScrollRevealText
              text="체계적인 교육과 국내의 투어로 다이버의 꿈을 완성하세요."
              charDelay={15}
            />
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
          }}
        >
          {FEATURE_IMAGES.map((image, idx) => (
            <div
              key={idx}
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                aspectRatio: '1/1',
                position: 'relative',
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
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
