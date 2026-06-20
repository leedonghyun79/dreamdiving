'use client';

import ScrollRevealText from '@/app/components/common/ScrollRevealText';
import { COLOR } from '@/app/constants/styles';

export function BSACFeaturesSection3() {
  return (
    <section style={{ padding: '100px 0', backgroundColor: '#fff' }}>
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
        {/* 왼쪽 텍스트 */}
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
            <ScrollRevealText text="다이빙을 즐기는" charDelay={60} />
            <br />
            <span style={{ color: COLOR.primary }}>
              <ScrollRevealText text="전문가와 함께하는 안전한 교육" charDelay={60} />
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
              text="BSAC 다이빙 교육의 핵심은 안전이며, 글로벌과 국내 최고의 인재를 양성하는 교육기관으로서 깊은 바다에서 안전하게 다이빙을 즐기고 싶은 다이버의 꿈을 이루는 곳에 함께 하고 있습니다."
              charDelay={15}
            />
          </p>

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
              text="각 단계에서 인증된 다이빙 강사 수련생은 즐거움을 강화하고 전문성을 인정받은 강사가 교육하며, 더 많은 분들이 활동할 수 있는 강사로 교육하고 있습니다."
              charDelay={13}
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
              text="BSAC의 다이버들은 다이빙을 즐기는 방법을 배우는 것이 쉬운 일이 아닌 만큼 단체를 통해 우리가 최선을 다하며, 더 많은 분들이 언제나 다이빙을 즐기면서 새로운 도전을 쉽게 할 수 있는 곳이 되어야 한다고 생각합니다."
              charDelay={13}
            />
          </p>
        </div>

        {/* 오른쪽 이미지 */}
        <div
          style={{
            position: 'relative',
            borderRadius: '20px',
            overflow: 'hidden',
            height: '500px',
            background: 'linear-gradient(135deg, #1abc9c 0%, #16a085 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 20px 50px rgba(26, 188, 156, 0.3)',
          }}
        >
          <img
            src="/assets/main/fb5797dd599e9.jpg"
            alt="다이빙 교육"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
}
