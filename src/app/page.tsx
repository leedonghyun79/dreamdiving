'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { css } from '../../styled-system/css';
import { hstack, vstack, container } from '../../styled-system/patterns';

const SLIDES = [
  {
    main: '바닷속을 제대로 즐기는 첫걸음',
    sub: '처음이라 걱정되셔도 괜찮아요, 10년 이상 강사진이 함께합니다',
    btnText: '체험 다이빙 신청하기',
    btnHref: '/programs/experience',
  },
  {
    main: 'BSAC 공인 스쿠버다이빙 자격증, 드림다이브와 함께',
    sub: '처음부터 끝까지 검증된 BSAC 단계별 커리큘럼을 경험하세요',
    btnText: '자격증 과정 알아보기',
    btnHref: '/programs',
  },
];

function HeroSection() {
  const [slideIdx, setSlideIdx] = useState(0);
  const [fade, setFade] = useState<'in' | 'out'>('in');

  useEffect(() => {
    // 5초마다 다음 슬라이드로
    const interval = setInterval(() => {
      setFade('out');
      setTimeout(() => {
        setSlideIdx((prev) => (prev + 1) % SLIDES.length);
        setFade('in');
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goTo = (i: number) => {
    if (i === slideIdx) return;
    setFade('out');
    setTimeout(() => {
      setSlideIdx(i);
      setFade('in');
    }, 500);
  };

  const slide = SLIDES[slideIdx];

  return (
    <section
      className={css({
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      })}
    >
      {/* Vimeo 배경 영상 */}
      <div
        className={css({
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
        })}
      >
        <iframe
          src="https://player.vimeo.com/video/1073125652?title=0&muted=1&autoplay=1&autopause=0&controls=0&loop=1&transparent=0&app_id=122963"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '177.78vh',   /* 16:9 비율 유지 */
            height: '56.25vw',
            minWidth: '100%',
            minHeight: '100%',
            transform: 'translate(-50%, -50%)',
            border: 'none',
          }}
          allow="autoplay; fullscreen"
          title="hero video"
        />
      </div>

      {/* 어두운 오버레이 */}
      <div className={css({ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.45)', zIndex: 1 })} />

      {/* 카피라이팅 */}
      <div
        className={css({
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          paddingLeft: '24px',
          paddingRight: '24px',
          maxWidth: '800px',
          transition: 'opacity 0.5s ease, transform 0.5s ease',
        })}
        style={{
          opacity: fade === 'in' ? 1 : 0,
          transform: fade === 'in' ? 'translateY(0)' : 'translateY(12px)',
        }}
      >
        <h1
          className={css({
            fontSize: { base: '26px', md: '48px' },
            fontWeight: '800',
            color: 'white',
            lineHeight: '1.3',
            marginBottom: '20px',
            wordBreak: 'keep-all',
            overflowWrap: 'break-word',
          })}
        >
          {slide.main}
        </h1>

        <p
          className={css({
            color: 'rgba(255,255,255,0.85)',
            fontSize: { base: '14px', md: '18px' },
            lineHeight: '1.7',
            marginBottom: '36px',
            wordBreak: 'keep-all',
            overflowWrap: 'break-word',
          })}
        >
          {slide.sub}
        </p>

        <Link
          href={slide.btnHref}
          className={css({
            display: 'inline-flex',
            alignItems: 'center',
            paddingTop: '14px',
            paddingBottom: '14px',
            paddingLeft: '32px',
            paddingRight: '32px',
            backgroundColor: '#267db6',
            color: 'white',
            fontSize: '16px',
            fontWeight: '700',
            textDecoration: 'none',
            borderRadius: '9999px',
            transition: 'background-color 0.2s, transform 0.2s',
            _hover: {
              backgroundColor: '#1d6a9f',
              transform: 'translateY(-2px)',
            },
          })}
        >
          {slide.btnText}
        </Link>
      </div>

      {/* 슬라이드 인디케이터 */}
      <div
        className={css({
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          zIndex: 10,
          display: 'flex',
          gap: '10px',
        })}
        style={{ transform: 'translateX(-50%)' }}
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={css({
              width: i === slideIdx ? '28px' : '10px',
              height: '10px',
              borderRadius: '9999px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s',
              backgroundColor: i === slideIdx ? 'white' : 'rgba(255,255,255,0.45)',
            })}
          />
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className={css({ width: '100%' })}>
      <main>
        <HeroSection />

        {/* About Section */}
        <section className={container({ maxWidth: '80rem', paddingX: '4', paddingY: { base: '4', md: '6' } })}>
          <div
            className={css({
              display: 'grid',
              gridTemplateColumns: { base: '1fr', md: '1fr 1fr' },
              gap: '12',
              alignItems: 'center',
            })}
          >
            <div className={css({ height: { base: '256px', md: '384px' }, borderRadius: 'lg', overflow: 'hidden', backgroundColor: '#d1d5db' })}>
              <img
                src="https://images.unsplash.com/photo-1583422409516-2895a77efded?w=600&h=600&fit=crop"
                alt="다이빙"
                className={css({ width: '100%', height: '100%', objectFit: 'cover' })}
              />
            </div>
            <div>
              <h2
                className={css({
                  fontSize: { base: '24px', md: '32px' },
                  fontWeight: 'bold',
                  marginBottom: '6',
                  color: '#1f1e1e',
                })}
              >
                신비로운 수중 세계의 첫걸음,
                <br />
                <span className={css({ color: '#267db6' })}>드림다이빙과 함께하세요.</span>
              </h2>
              <p className={css({ color: '#666666', fontSize: 'lg', lineHeight: 'relaxed', marginBottom: '4' })}>
                전문적인 교육과 안전한 장비로 바다의 신비로움을 경험하세요.
              </p>
              <button className={css({ backgroundColor: '#267db6', color: 'white', paddingX: '8', paddingY: '3', borderRadius: 'lg', fontWeight: 'bold' })}>
                더 알아보기
              </button>
            </div>
          </div>
        </section>

        {/* Gallery Section 1 */}
        <section className={css({ backgroundColor: '#f9fafb', paddingY: { base: '4', md: '6' } })}>
          <div className={container({ maxWidth: '80rem', paddingX: '4' })}>
            <h2 className={css({ fontSize: { base: '24px', md: '32px' }, fontWeight: 'bold', marginBottom: '4', color: '#1f1e1e' })}>
              수중 세계의 신비로운 모습
            </h2>
            <p className={css({ color: '#666666', marginBottom: '12', fontSize: 'lg' })}>우리가 경험하는 다양한 다이빙 스팟들</p>

            <div
              className={css({
                display: 'grid',
                gridTemplateColumns: { base: '1fr', md: 'repeat(3, 1fr)' },
                gap: '6',
              })}
            >
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className={css({ backgroundColor: '#d1d5db', borderRadius: 'lg', overflow: 'hidden', height: '256px' })}>
                  <img
                    src={`https://images.unsplash.com/photo-${1559827260 + i}?w=600&h=600&fit=crop`}
                    alt={`갤러리 ${i}`}
                    className={css({ width: '100%', height: '100%', objectFit: 'cover' })}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={css({ backgroundColor: '#111827', color: '#d1d5db', paddingY: '12' })}>
          <div className={container({ maxWidth: '80rem', paddingX: '4' })}>
            <div
              className={css({
                display: 'grid',
                gridTemplateColumns: { base: '1fr', md: 'repeat(4, 1fr)' },
                gap: '8',
                marginBottom: '8',
              })}
            >
              <div>
                <h3 className={css({ color: 'white', fontWeight: 'bold', marginBottom: '4' })}>꿈다이빙</h3>
                <p>안전하고 즐거운 다이빙 체험</p>
              </div>
              <div>
                <h4 className={css({ color: 'white', fontWeight: 'bold', marginBottom: '4' })}>메뉴</h4>
                <ul className={vstack({ gap: '2' })}>
                  <li>
                    <a href="#">소개</a>
                  </li>
                  <li>
                    <a href="#">서비스</a>
                  </li>
                  <li>
                    <a href="#">갤러리</a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className={css({ color: 'white', fontWeight: 'bold', marginBottom: '4' })}>연락처</h4>
                <ul className={vstack({ gap: '2' })}>
                  <li>전화: 010-0000-0000</li>
                  <li>이메일: info@dreamdiving.com</li>
                </ul>
              </div>
              <div>
                <h4 className={css({ color: 'white', fontWeight: 'bold', marginBottom: '4' })}>팔로우</h4>
                <ul className={vstack({ gap: '2' })}>
                  <li>
                    <a href="#">인스타그램</a>
                  </li>
                  <li>
                    <a href="#">페이스북</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={css({ borderTopWidth: '1px', borderTopColor: '#374151', paddingTop: '8', textAlign: 'center' })}>
              <p>&copy; 2024 Dream Diving.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
