'use client';

import ScrollRevealText from './ScrollRevealText';
import { COLOR } from '../constants/styles';

export function AboutSection() {
  return (
    <section
      style={{
        padding: '80px 0 100px',
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
          <h1
            style={{
              fontSize: '56px',
              fontWeight: '900',
              lineHeight: '1.2',
              marginBottom: '32px',
              wordBreak: 'keep-all',
              color: COLOR.primary,
            }}
          >
            <ScrollRevealText text="DREAM DIVE" charDelay={60} />
          </h1>

          <p
            style={{
              fontSize: '18px',
              color: COLOR.textSecondary,
              lineHeight: '1.9',
              marginBottom: '24px',
              wordBreak: 'keep-all',
              fontWeight: '700',
            }}
          >
            <ScrollRevealText
              text="수도권 최고의 스쿠버다이빙 교육센터 드림다이빙입니다."
              charDelay={20}
            />
          </p>

          <p
            style={{
              fontSize: '17px',
              color: COLOR.textSecondary,
              lineHeight: '1.85',
              marginBottom: '32px',
              wordBreak: 'keep-all',
            }}
          >
            <ScrollRevealText
              text="체계적이고 전문화된 강사진들의 안전하고 즐거운 교육,"
              charDelay={18}
            />
            <br />
            <ScrollRevealText
              text="드림다이브와 함께하세요."
              charDelay={18}
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
              text="교육전형은 프리이빗 1:1 교육 및 2:1교육과 클래스 두가지로 전문 강사진의 업격한 관리에 전향합니다."
              charDelay={15}
            />
          </p>
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
              alt="드림다이브"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ borderRadius: '16px', overflow: 'hidden', height: '220px' }}>
              <img
                src="/assets/main/fb5797dd599e9.jpg"
                alt="다이빙 교육"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div style={{ borderRadius: '16px', overflow: 'hidden', height: '220px' }}>
              <img
                src="/assets/main/8521cb2ab2e41.jpg"
                alt="다이빙 활동"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
