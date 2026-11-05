'use client';

import ScrollRevealText, { getRevealTime } from '@/app/components/common/ScrollRevealText';
import { COLOR } from '@/app/constants/styles';

// h2 → 본문 문단 순서로 이어서 나오도록 시간 계산
const H2_END = Math.max(
  getRevealTime('체계적인 교육과', 45),
  getRevealTime('국내의 투어로', 45),
  getRevealTime('완성되는 다이버의 꿈', 45)
);
const P1_TEXT = '드림다이브는 수도권 최고의 스쿠버다이빙 교육센터입니다.';
const P2_TEXT = 'K26 다이빙 풀장과 서울 올림픽 수영장을 교육 장소로 운영합니다.';
const P1_END = getRevealTime(P1_TEXT, 20, H2_END);
const P2_END = getRevealTime(P2_TEXT, 15, P1_END);

export function CompanySection() {
  return (
    <section
      style={{
        padding: '100px 50px',
        backgroundColor: '#fff',
      }}
    >
      <div
        style={{
          maxWidth: '1520px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
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
            }}
          >
            <span style={{ color: COLOR.primary }}>
              <ScrollRevealText text="체계적인 교육과" charDelay={45} />
            </span>
            <br />
            <span style={{ color: COLOR.primary }}>
              <ScrollRevealText text="국내의 투어로" charDelay={45} />
            </span>
            <br />
            <span style={{ color: COLOR.text }}>
              <ScrollRevealText text="완성되는 다이버의 꿈" charDelay={45} />
            </span>
          </h2>

          <p
            style={{
              fontSize: '17px',
              color: COLOR.textSecondary,
              lineHeight: '1.85',
              marginBottom: '24px',
              wordBreak: 'keep-all',
            }}
          >
            <ScrollRevealText
              text={P1_TEXT}
              charDelay={20}
              delay={H2_END}
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
              text={P2_TEXT}
              charDelay={15}
              delay={P1_END}
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
              text="체계적인 교육과 국내 투어로 다이버의 꿈을 완성하세요."
              charDelay={15}
              delay={P2_END}
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
          <div style={{ borderRadius: '16px', overflow: 'hidden', height: '220px' }}>
            <img
              src="/assets/main/1088f588f6785.webp"
              alt="다이빙 1"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div style={{ borderRadius: '16px', overflow: 'hidden', height: '220px' }}>
            <img
              src="/assets/main/16aaa59fbd5a9.webp"
              alt="다이빙 2"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div style={{ borderRadius: '16px', overflow: 'hidden', height: '220px' }}>
            <img
              src="/assets/main/49eab77bb0b32.webp"
              alt="다이빙 3"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div style={{ borderRadius: '16px', overflow: 'hidden', height: '220px' }}>
            <img
              src="/assets/main/8521cb2ab2e41.webp"
              alt="다이빙 4"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
