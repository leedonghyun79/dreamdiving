'use client';

export function AboutTourSection() {
  return (
    <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
      <div 
        style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 20px', 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '60px', 
          alignItems: 'center' 
        }}
      >
        {/* Left text */}
        <div style={{ paddingRight: '20px' }}>
          <h2 
            style={{ 
              fontSize: '32px', 
              fontWeight: '700', 
              lineHeight: '1.5', 
              marginBottom: '40px', 
              wordBreak: 'keep-all' 
            }}
          >
            <span style={{ color: '#1a6fba' }}>체계적인 교육</span>과
            <br />
            <span style={{ color: '#1a6fba' }}>국내외 투어</span>로 완성되는
            <br />
            <span style={{ color: '#222' }}>다이버의 꿈</span>
          </h2>
          
          <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.7', marginBottom: '24px', wordBreak: 'keep-all' }}>
            드림 다이버는 수도권 최고의 스쿠버 교육 진행을 하고있는<br />
            오픈워터 입문 부터 스쿠버 강사교육 테크니컬 다이빙 강사<br />
            교육을 진행하는 전문 다이빙스쿨입니다.
          </p>
          <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.7', marginBottom: '24px', wordBreak: 'keep-all' }}>
            K26 다이빙 풀장과 서울 올림픽 수영장을 교육 전용<br />
            잠수풀로 편하게 사용가능합니다.
          </p>
          <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.7', wordBreak: 'keep-all' }}>
            체계적인 교육과 국내외 투어로 다이버의 꿈을 완성하세요.
          </p>
        </div>

        {/* Right grid images */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Top Row: 4:6 ratio */}
          <div style={{ display: 'flex', gap: '24px' }}>
            <div style={{ flex: '4', position: 'relative' }}>
              <img 
                src="/assets/main/49eab77bb0b32.jpg" 
                alt="투어 이미지 1" 
                style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: '16px' }} 
              />
            </div>
            <div style={{ flex: '6', position: 'relative' }}>
              <img 
                src="/assets/main/fb5797dd599e9.jpg" 
                alt="투어 이미지 2" 
                style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: '16px' }} 
              />
            </div>
          </div>
          
          {/* Bottom Row: 6:4 ratio */}
          <div style={{ display: 'flex', gap: '24px' }}>
            <div style={{ flex: '6', position: 'relative' }}>
              <img 
                src="/assets/main/8521cb2ab2e41.jpg" 
                alt="투어 이미지 3" 
                style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: '16px' }} 
              />
            </div>
            <div style={{ flex: '4', position: 'relative' }}>
              <img 
                src="/assets/main/오션 어드벤쳐 다이버.jpg" 
                alt="투어 이미지 4" 
                style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: '16px' }} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
