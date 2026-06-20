'use client';

import ScrollRevealText from '@/app/components/common/ScrollRevealText';
import { COLOR } from '@/app/constants/styles';

export function BSACFeaturesSection2() {
  return (
    <section style={{ padding: '100px 0', backgroundColor: '#f8f9fb' }}>
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
        {/* 왼쪽 이미지 */}
        <div
          style={{
            borderRadius: '20px',
            overflow: 'hidden',
            height: '420px',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1)',
          }}
        >
          <img
            src="/assets/main/49eab77bb0b32.jpg"
            alt="BSAC 교육"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* 오른쪽 텍스트 */}
        <div>
          <h2
            style={{
              fontSize: '48px',
              fontWeight: '900',
              lineHeight: '1.2',
              marginBottom: '32px',
              wordBreak: 'keep-all',
              color: COLOR.text,
            }}
          >
            <ScrollRevealText text="국제 공인" charDelay={60} />
            <br />
            <span style={{ color: COLOR.primary }}>
              <ScrollRevealText text="글로벌 표준 교육" charDelay={60} />
            </span>
          </h2>

          <p
            style={{
              fontSize: '18px',
              color: COLOR.textSecondary,
              lineHeight: '1.85',
              marginBottom: '24px',
              wordBreak: 'keep-all',
            }}
          >
            <ScrollRevealText
              text="BSAC 역사는 70년 이상으로 전 세계를 아우르는 다이빙 단체로 성장한 국제 단체이며, 다이빙 교육의 글로벌 표준, 안전 및 다양한 국제 교육을 통해 신뢰의 전통을 이어 BSAC 단체를 통해 지속적으로 발전하는 시스템을 보유하고 있습니다."
              charDelay={14}
            />
          </p>

          <p
            style={{
              fontSize: '18px',
              color: COLOR.textSecondary,
              lineHeight: '1.85',
              wordBreak: 'keep-all',
            }}
          >
            <ScrollRevealText
              text="현재 전 세계 BSAC은 국제 공인 안전성과 신뢰성을 기반으로 다이빙 교육과 지원을 이어가고 있으며, 다양한 프로그램 정보를 언제나 제공하고 있습니다."
              charDelay={14}
            />
          </p>
        </div>
      </div>
    </section>
  );
}
