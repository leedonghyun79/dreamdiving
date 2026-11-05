'use client';

export function AboutVideoSection() {
  return (
    <section style={{ padding: '60px 0', backgroundColor: '#fff' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
        {/* 우측 상단 로고 */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <img
            src="/assets/dreamdive_about/dreamdivie.webp"
            alt="Dream Dive Logo"
            style={{ height: '100px', width: 'auto', objectFit: 'contain' }}
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
          <iframe
            src="https://player.vimeo.com/video/1070954112?title=0&muted=1&autoplay=1&autopause=0&controls=0&loop=1&transparent=0&app_id=122963"
            width="426"
            height="240"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            title="소개영상"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', margin: 0 }}
          />
        </div>

      </div>
    </section>
  );
}
