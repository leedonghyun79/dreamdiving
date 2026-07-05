'use client';

export function AboutSection() {
  return (
    <section
      style={{
        padding: '100px 0',
        backgroundColor: '#fff',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
        }}
      >
        {/* Left Side: Texts */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <div style={{ marginBottom: '16px' }}>
            <img
              src="/assets/dreamdive_about/title.png"
              alt="DREAM DIVE"
              style={{ width: '400px', maxWidth: '100%', height: 'auto', objectFit: 'contain' }}
            />
          </div>
          <p
            style={{
              fontSize: '18px',
              color: '#888',
              marginBottom: '60px',
              wordBreak: 'keep-all',
            }}
          >
            수도권 최고의 스쿠버다이빙 교육센터 드림 다이버입니다.
          </p>

          <h2
            style={{
              fontSize: '26px',
              fontWeight: '700',
              lineHeight: '1.4',
              color: '#1a6fba', // Deep blue color based on screenshot
              marginBottom: '30px',
              wordBreak: 'keep-all',
            }}
          >
            체계적이고 전문화된 강사진들의 안전하고
            <br />
            즐거운 고퀄리티 전담 수중 교육,
          </h2>

          <p
            style={{
              fontSize: '16px',
              color: '#666',
              lineHeight: '1.6',
              wordBreak: 'keep-all',
            }}
          >
            교육진행은 프라이빗 1:1 교육 및 2:1교육과 클래스 두가지로
            <br />
            전문 강사진의 엄격한 관리하에 진행됩니다.
          </p>
        </div>

        {/* Right Side: Image with gradient fade */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '503px',
              height: '570px',
              borderRadius: '16px',
              overflow: 'hidden',
            }}
          >
            <img
              src="/assets/dreamdive_about/right_img.png"
              alt="Dream Dive Instructors"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            {/* White gradient overlay at the bottom */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '150px',
                background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)',
                pointerEvents: 'none',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
