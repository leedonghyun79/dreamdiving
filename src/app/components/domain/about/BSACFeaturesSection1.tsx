'use client';

import ScrollRevealText from '../../common/ScrollRevealText';
import { COLOR } from '../../../constants/styles';

export function BSACFeaturesSection1() {
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
            <ScrollRevealText text="다이버를 위한" charDelay={60} />
            <br />
            <span style={{ color: COLOR.primary }}>
              <ScrollRevealText text="다이빙의 표준" charDelay={60} />
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
              text="영국에서 BSAC은 스포츠 다이빙 업계 최고의 표준을 다이버들에게 제공하기 위해 노력하였고,"
              charDelay={16}
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
              text="그 노력의 국제적인 인정을 받아 '다이버를 위한 다이빙 표준'이 되었습니다."
              charDelay={16}
            />
          </p>
        </div>

        {/* 오른쪽 이미지 + 장식 요소 */}
        <div style={{ position: 'relative', height: '450px' }}>
          {/* 메인 이미지 */}
          <div
            style={{
              position: 'absolute',
              right: '0',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '320px',
              height: '320px',
              borderRadius: '50%',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
            }}
          >
            <img
              src="/assets/main/8521cb2ab2e41.jpg"
              alt="다이빙"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* 노란색 원형 장식 */}
          <div
            style={{
              position: 'absolute',
              top: '40px',
              right: '280px',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: '#FFD54F',
              boxShadow: '0 4px 12px rgba(255, 213, 79, 0.3)',
            }}
          />

          {/* 파란색 점 패턴 배경 */}
          <div
            style={{
              position: 'absolute',
              bottom: '60px',
              left: '80px',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              backgroundColor: 'rgba(38, 125, 182, 0.1)',
              border: '2px solid rgba(38, 125, 182, 0.2)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '8px',
                padding: '12px',
                height: '100%',
                alignItems: 'center',
                justifyItems: 'center',
              }}
            >
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(38, 125, 182, 0.4)',
                  }}
                />
              ))}
            </div>
          </div>

          {/* 세로 선형 장식 */}
          <div
            style={{
              position: 'absolute',
              top: '0',
              right: '140px',
              width: '2px',
              height: '120px',
              backgroundColor: '#FFD54F',
              opacity: 0.6,
            }}
          />
        </div>
      </div>
    </section>
  );
}
