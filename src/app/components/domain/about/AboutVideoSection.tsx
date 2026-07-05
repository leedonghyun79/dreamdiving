'use client';

export function AboutVideoSection() {
  return (
    <section style={{ padding: '60px 0', backgroundColor: '#fff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        {/* 우측 상단 로고 */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
          <img 
            src="/assets/dreamdive_about/dreamdivie.png" 
            alt="Dream Dive Logo" 
            style={{ height: '50px', width: 'auto', objectFit: 'contain' }}
          />
        </div>
        
        {/* 동영상 영역 */}
        <div 
          style={{ 
            width: '100%', 
            aspectRatio: '16/9', 
            backgroundColor: '#111',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
          }}
        >
          {/* 추후 실제 <video> 태그나 유튜브 <iframe>으로 교체하시면 됩니다 */}
          <div style={{ textAlign: 'center', color: '#fff' }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px', opacity: 0.8 }}>
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            <p style={{ fontSize: '18px', opacity: 0.8 }}>동영상 영역</p>
          </div>
        </div>
      </div>
    </section>
  );
}
