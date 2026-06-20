'use client';

import ScrollRevealText from '@/app/components/common/ScrollRevealText';
import { COLOR } from '@/app/constants/styles';

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
              text="드림다이브는 수도권 최고의 스쿠버다이빙 교육센터입니다."
              charDelay={20}
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
              text="K26 다이빙 풀장과 서울 올림픽 수영장을 교육 장소로 운영합니다."
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
              text="체계적인 교육과 국내 투어로 다이버의 꿈을 완성하세요."
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
          <div style={{ borderRadius: '16px', overflow: 'hidden', height: '220px' }}>
            <img
              src="/assets/main/1088f588f6785.jpg"
              alt="다이빙 1"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div style={{ borderRadius: '16px', overflow: 'hidden', height: '220px' }}>
            <img
              src="/assets/main/16aaa59fbd5a9.jpg"
              alt="다이빙 2"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div style={{ borderRadius: '16px', overflow: 'hidden', height: '220px' }}>
            <img
              src="/assets/main/49eab77bb0b32.jpg"
              alt="다이빙 3"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div style={{ borderRadius: '16px', overflow: 'hidden', height: '220px' }}>
            <img
              src="/assets/main/8521cb2ab2e41.jpg"
              alt="다이빙 4"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
