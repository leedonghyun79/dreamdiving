'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { css } from '../../styled-system/css';
import { hstack, vstack, container } from '../../styled-system/patterns';
import ScrollRevealText from './components/ScrollRevealText';

const SLIDES = [
  {
    main: '바닷속을 제대로 즐기는 첫걸음',
    sub: '처음이라 걱정되셔도 괜찮습니다. 10년 이상 경력의 강사진이 함께합니다.',
    btnText: '체험 다이빙 신청하기',
    btnHref: '/programs/experience',
  },
  {
    main: 'BSAC 공인 스쿠버다이빙 자격증, 드림다이브와 함께',
    sub: '처음부터 끝까지 검증된 BSAC 단계별 커리큘럼을 경험하세요.',
    btnText: '자격증 과정 알아보기',
    btnHref: '/programs',
  },
];

const PROGRAMS = [
  { title: '오션 다이버', subtitle: 'Ocean Diver', href: '/programs/ocean', img: '/assets/main/오션 다이버.jpg' },
  { title: '오션 어드벤쳐 다이버', subtitle: 'Ocean Adventure Diver', href: '/programs/ocean-adventure', img: '/assets/main/오션 어드벤쳐 다이버.jpg' },
  { title: '어드밴스드 오션 다이버', subtitle: 'Advanced Ocean Diver', href: '/programs/advanced', img: '/assets/main/어드밴스드 오션 다이버.jpg' },
  { title: '스포츠 다이버', subtitle: 'Sports Diver', href: '/programs/sports', img: '/assets/main/스포츠 다이버.jpg' },
  { title: '다이버 리더', subtitle: 'Diver Leader', href: '/programs/leader', img: '/assets/main/다이버 리더.jpg' },
];

const GALLERY_IMAGES = [
  '/assets/main/49eab77bb0b32.jpg',
  '/assets/main/오션 다이버.jpg',
  '/assets/main/스포츠 다이버.jpg',
  '/assets/main/어드밴스드 오션 다이버.jpg',
  '/assets/main/fb5797dd599e9.jpg',
  '/assets/main/다이버 리더.jpg',
  '/assets/main/오션 어드벤쳐 다이버.jpg',
  '/assets/main/1088f588f6785.jpg',
  '/assets/main/16aaa59fbd5a9.jpg',
  '/assets/main/8521cb2ab2e41.jpg',
];

// 홀짝 분리 후 무한루프용 복제
const COL1 = [...GALLERY_IMAGES.filter((_, i) => i % 2 === 0), ...GALLERY_IMAGES.filter((_, i) => i % 2 === 0)];
const COL2 = [...GALLERY_IMAGES.filter((_, i) => i % 2 === 1), ...GALLERY_IMAGES.filter((_, i) => i % 2 === 1)];

function GallerySection() {
  return (
    <section style={{ padding: '100px 0', backgroundColor: '#fff', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1520px', margin: '0 auto', padding: '0 50px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>

        {/* 좌측 CTA */}
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            backgroundColor: '#eaf4fb', color: '#267db6', fontSize: '13px', fontWeight: '700',
            letterSpacing: '0.08em', padding: '6px 14px', borderRadius: '9999px',
            marginBottom: '28px', textTransform: 'uppercase' as const,
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#267db6', display: 'inline-block' }} />
            Gallery
          </div>

          <h2 style={{ fontSize: '44px', fontWeight: '900', lineHeight: '1.3', marginBottom: '24px', wordBreak: 'keep-all' as const, color: '#1f1e1e' }}>
            <ScrollRevealText text="안전한 교육과 풍부한 경험으로" charDelay={35} />
            <br />
            <ScrollRevealText text="특별한 추억을" charDelay={35} />
            <br />
            <span style={{ color: '#267db6' }}>
              <ScrollRevealText text="드림다이브와 함께하세요." charDelay={35} />
            </span>
          </h2>

          <p style={{ fontSize: '17px', color: '#666', lineHeight: '1.85', marginBottom: '40px', wordBreak: 'keep-all' as const }}>
            <ScrollRevealText text="K26 풀장부터 강릉·양양 해양 실습까지, 드림다이브의 생생한 현장을 만나보세요." charDelay={18} />
          </p>

          <a
            href="/reservation/inquiry"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '16px 32px', border: '2px solid #267db6', borderRadius: '8px',
              color: '#267db6', fontSize: '16px', fontWeight: '700',
              textDecoration: 'none', transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#267db6';
              (e.currentTarget as HTMLAnchorElement).style.color = 'white';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
              (e.currentTarget as HTMLAnchorElement).style.color = '#267db6';
            }}
          >
            상담 문의하기
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* 우측 갤러리 — 2열 무한 스크롤 */}
        <div style={{ display: 'flex', gap: '16px', height: '600px', overflow: 'hidden', borderRadius: '24px' }}>
          {/* 열 1: 위로 스크롤 */}
          <div style={{ flex: 1, overflow: 'hidden' }}>
            <div style={{
              display: 'flex', flexDirection: 'column', gap: '16px',
              animation: 'galleryScrollUp 20s linear infinite',
            }}>
              {COL1.map((img, i) => (
                <div key={i} style={{ borderRadius: '12px', overflow: 'hidden', flexShrink: 0 }}>
                  <img src={img} alt={`갤러리 ${i + 1}`} style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} />
                </div>
              ))}
            </div>
          </div>

          {/* 열 2: 아래로 스크롤 */}
          <div style={{ flex: 1, overflow: 'hidden' }}>
            <div style={{
              display: 'flex', flexDirection: 'column', gap: '16px',
              animation: 'galleryScrollDown 24s linear infinite',
            }}>
              {COL2.map((img, i) => (
                <div key={i} style={{ borderRadius: '12px', overflow: 'hidden', flexShrink: 0 }}>
                  <img src={img} alt={`갤러리 ${i + 1}`} style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

const PARTNER_LOGOS = [
  { src: '/assets/main/bsac.png', alt: 'BSAC' },
  { src: '/assets/main/nllgrobal.png', alt: 'NL Global' },
  { src: '/assets/main/juno hair.png', alt: 'Juno Hair' },
  { src: '/assets/main/roral body.png', alt: 'Royal Body' },
  { src: '/assets/main/profit 프로핏.png', alt: 'Profit 프로핏' },
];
// 무한루프용 복제
const PARTNER_TRACK = [...PARTNER_LOGOS, ...PARTNER_LOGOS];

function PartnerSection() {
  return (
    <section style={{ padding: '60px 0 100px', backgroundColor: '#fff', overflow: 'hidden' }}>
      {/* 로고 트랙 */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        {/* 좌우 페이드 마스크 */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px', zIndex: 2,
          background: 'linear-gradient(to right, white, transparent)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px', zIndex: 2,
          background: 'linear-gradient(to left, white, transparent)',
          pointerEvents: 'none',
        }} />

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px',
          width: 'max-content',
          animation: 'logoScrollLeft 18s linear infinite',
        }}>
          {PARTNER_TRACK.map((logo, i) => (
            <div key={i} style={{
              flexShrink: 0,
              width: '280px',
              height: '108px',
              border: '1px solid rgb(229, 231, 235)',
              borderRadius: '0px',
              overflow: 'hidden',
            }}>
              <img
                src={logo.src}
                alt={logo.alt}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramSection() {
  const [current, setCurrent] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const visible = 3;
  const max = PROGRAMS.length - visible;

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(max, c + 1));

  return (
    <section style={{ padding: '100px 0', backgroundColor: '#f8f9fb' }}>
      <div style={{ maxWidth: '1520px', margin: '0 auto', padding: '0 50px' }}>
        {/* 헤딩 */}
        <div style={{ marginBottom: '60px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            backgroundColor: '#eaf4fb', color: '#267db6', fontSize: '13px', fontWeight: '700',
            letterSpacing: '0.08em', padding: '6px 14px', borderRadius: '9999px',
            marginBottom: '20px', textTransform: 'uppercase' as const,
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#267db6', display: 'inline-block' }} />
            Programs
          </div>
          <h2 style={{ fontSize: '40px', fontWeight: '900', color: '#1f1e1e', lineHeight: '1.2', wordBreak: 'keep-all' as const, marginBottom: '16px' }}>
            <ScrollRevealText text="프로그램 안내" charDelay={40} />
          </h2>
          <p style={{ fontSize: '17px', color: '#666', wordBreak: 'keep-all' as const }}>
            <ScrollRevealText text="입문부터 강사과정까지, 수도권 최고의 다이빙 교육을 경험하세요." charDelay={25} />
          </p>
        </div>

        {/* 슬라이더 */}
        <div style={{ position: 'relative' }}>
          <div style={{ overflow: 'hidden' }}>
            <div style={{
              display: 'flex', gap: '24px',
              transition: 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: `translateX(calc(-${current} * (100% / ${visible} + 8px)))`,
            }}>
              {PROGRAMS.map((prog, i) => (
                <div key={prog.title}
                  style={{ flex: `0 0 calc((100% - ${(visible - 1) * 24}px) / ${visible})` }}
                  onMouseEnter={() => setHoveredIdx(i)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  {/* 이미지 카드 */}
                  <div style={{
                    borderRadius: '20px', overflow: 'hidden', position: 'relative',
                    aspectRatio: '4/3', marginBottom: '16px', cursor: 'pointer',
                    boxShadow: hoveredIdx === i ? '0 12px 40px rgba(0,0,0,0.15)' : '0 4px 16px rgba(0,0,0,0.08)',
                    transition: 'box-shadow 0.3s, transform 0.3s',
                    transform: hoveredIdx === i ? 'translateY(-4px)' : 'translateY(0)',
                  }}>
                    <img src={prog.img} alt={prog.title} style={{
                      width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                      transition: 'transform 0.4s',
                      transform: hoveredIdx === i ? 'scale(1.04)' : 'scale(1)',
                    }} />
                    <a href={prog.href} style={{
                      position: 'absolute', bottom: '16px', right: '16px',
                      width: '40px', height: '40px', borderRadius: '50%',
                      backgroundColor: hoveredIdx === i ? '#267db6' : 'white',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.2)', transition: 'background-color 0.25s',
                      textDecoration: 'none',
                    }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke={hoveredIdx === i ? 'white' : '#267db6'}
                        strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                  {/* 타이틀 */}
                  <p style={{ fontSize: '11px', color: '#267db6', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase' as const, marginBottom: '4px' }}>{prog.subtitle}</p>
                  <p style={{ fontSize: '18px', fontWeight: '700', color: '#1f1e1e', wordBreak: 'keep-all' as const }}>{prog.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 네비게이션 */}
          <div style={{ display: 'flex', gap: '12px', marginTop: '40px', alignItems: 'center' }}>
            <button onClick={prev} disabled={current === 0} style={{
              width: '48px', height: '48px', borderRadius: '50%', border: '1.5px solid #ddd',
              backgroundColor: current === 0 ? '#f5f5f5' : 'white',
              cursor: current === 0 ? 'not-allowed' : 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s',
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={current === 0 ? '#ccc' : '#1f1e1e'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <button onClick={next} disabled={current === max} style={{
              width: '48px', height: '48px', borderRadius: '50%', border: '1.5px solid #ddd',
              backgroundColor: current === max ? '#f5f5f5' : 'white',
              cursor: current === max ? 'not-allowed' : 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s',
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={current === max ? '#ccc' : '#1f1e1e'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: '8px' }}>
              {Array.from({ length: max + 1 }).map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} style={{
                  width: i === current ? '28px' : '8px', height: '8px', borderRadius: '9999px',
                  border: 'none', backgroundColor: i === current ? '#267db6' : '#d1d5db',
                  cursor: 'pointer', transition: 'all 0.3s', padding: 0,
                }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const REVIEWS = [
  {
    headline: '"처음인데도 하나도 안 무서웠어요"',
    body: '체험다이빙 처음 해봤는데 강사님이 처음부터 끝까지 정말 친절하게 설명해 주셨어요. 물속에 들어가기 전에 충분히 연습도 시켜주시고, 덕분에 긴장이 풀렸어요. 수중 세계가 이렇게 아름다운 줄 몰랐는데 정말 잊지 못할 경험이었습니다!',
    name: '김민지',
    program: '체험다이빙',
  },
  {
    headline: '"1:1 수업처럼 꼼꼼하게 봐주셨어요"',
    body: 'BSAC 오션 다이버 과정을 수료했어요. 강사님이 수강생 한 명 한 명 개인 수준에 맞게 가르쳐 주셔서 부담 없이 따라갈 수 있었습니다. K26 풀장 시설도 정말 잘 되어 있고, 강릉 해양 실습까지 경험이 알차게 구성되어 있어요.',
    name: '박준혁',
    program: '오션 다이버',
  },
  {
    headline: '"자격증 딸 수 있을까 걱정했는데 합격했어요"',
    body: '수영도 못하는 편이라 걱정이 많았는데, 강사님이 기초부터 차근차근 알려주시고 카카오톡으로도 궁금한 점 바로바로 답해주셔서 든든했어요. 어드밴스드 오션 다이버 자격증을 취득하고 나니 뿌듯함이 엄청납니다!',
    name: '이서연',
    program: '어드밴스드 오션 다이버',
  },
  {
    headline: '"타 지역에서 왔는데도 전혀 불편하지 않았어요"',
    body: '서울에서 올라왔는데 강사님이 숙소 정보부터 일정까지 세심하게 안내해 주셨어요. 강릉 해양 실습 포인트도 정말 좋았고, 시야도 맑아서 너무 만족스러웠습니다. 다음에 스포츠 다이버 과정도 꼭 여기서 하고 싶어요.',
    name: '최동훈',
    program: '오션 어드벤처 다이버',
  },
  {
    headline: '"아이와 함께 온 체험이 최고의 추억이 됐어요"',
    body: '초등학생 아이와 함께 가족 체험다이빙을 했어요. 아이가 물을 무서워했는데 강사님이 정말 인내심 있게 달래주시고 이끌어 주셔서 결국 바닷속을 헤엄치더라고요. 아이가 지금도 또 가고 싶다고 졸라요. 감사합니다!',
    name: '정유진',
    program: '체험다이빙',
  },
  {
    headline: '"디스커버리 과정이 생각보다 훨씬 체계적이에요"',
    body: '짧은 과정이라 가볍게 생각했는데, 이론부터 실기까지 커리큘럼이 너무 체계적으로 잘 짜여 있어 놀랐어요. 강사님도 BSAC 공인 강사님이시라 믿음이 갔고, 수료 후 바로 다음 과정 등록했습니다. 강력 추천해요!',
    name: '오승환',
    program: '디스커버리 다이버',
  },
];

function StarRating() {
  return (
    <div style={{ display: 'flex', gap: '3px', justifyContent: 'center', marginBottom: '16px' }}>
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} width="18" height="18" viewBox="0 0 24 24" fill="#f59e0b">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewSection() {
  return (
    <section style={{ padding: '100px 0', backgroundColor: '#f8f9fb' }}>
      <div style={{ maxWidth: '1520px', margin: '0 auto', padding: '0 50px' }}>
        {/* 헤딩 */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            backgroundColor: '#eaf4fb', color: '#267db6', fontSize: '13px', fontWeight: '700',
            letterSpacing: '0.08em', padding: '6px 14px', borderRadius: '9999px',
            marginBottom: '20px', textTransform: 'uppercase' as const,
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#267db6', display: 'inline-block' }} />
            Reviews
          </div>
          <h2 style={{ fontSize: '40px', fontWeight: '900', color: '#1f1e1e', lineHeight: '1.2', marginBottom: '16px' }}>
            <ScrollRevealText text="수강생들의 생생한 후기" charDelay={40} />
          </h2>
          <p style={{ fontSize: '17px', color: '#666' }}>
            <ScrollRevealText text="드림다이브를 경험한 분들의 솔직한 이야기를 확인해보세요." charDelay={20} />
          </p>
        </div>

        {/* 리뷰 카드 그리드 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '28px',
        }}>
          {REVIEWS.map((review, i) => (
            <div key={i} style={{
              backgroundColor: 'white',
              borderRadius: '20px',
              padding: '36px 32px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0',
            }}>
              {/* VERIFIED REVIEW 뱃지 */}
              <div style={{
                textAlign: 'center',
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '0.12em',
                color: '#999',
                marginBottom: '14px',
              }}>
                VERIFIED REVIEW
              </div>

              {/* 별점 */}
              <StarRating />

              {/* 헤드라인 */}
              <p style={{
                fontSize: '20px',
                fontWeight: '800',
                color: '#267db6',
                textAlign: 'center',
                lineHeight: '1.4',
                marginBottom: '20px',
                wordBreak: 'keep-all' as const,
              }}>
                {review.headline}
              </p>

              {/* 본문 */}
              <p style={{
                fontSize: '15px',
                color: '#555',
                lineHeight: '1.85',
                wordBreak: 'keep-all' as const,
                flexGrow: 1,
                textAlign: 'center',
              }}>
                {review.body}
              </p>

              {/* 구분선 */}
              <div style={{ borderTop: '1px solid #f0f0f0', marginTop: '24px', paddingTop: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '50%',
                  backgroundColor: '#eaf4fb',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '14px', fontWeight: '700', color: '#267db6',
                }}>
                  {review.name[0]}
                </div>
                <div>
                  <p style={{ fontSize: '14px', fontWeight: '700', color: '#1f1e1e', margin: 0 }}>{review.name}</p>
                  <p style={{ fontSize: '12px', color: '#999', margin: 0 }}>{review.program}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroSection() {
  const [slideIdx, setSlideIdx] = useState(0);
  const [fade, setFade] = useState<'in' | 'out'>('in');
  const [videoLoaded, setVideoLoaded] = useState(false);

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

  // iframe onLoad가 크로스오리진에서 불안정한 경우를 위한 폴백 타이머
  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoLoaded(true);
    }, 3000);
    return () => clearTimeout(timer);
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
      style={{ overflow: 'hidden' }}
    >
      {/* 배경 — 썸네일 포스터 (영상 로드 전 표시) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          backgroundImage: 'url(https://vumbnail.com/1073125652.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'opacity 1s ease',
          opacity: videoLoaded ? 0 : 1,
        }}
      />

      {/* Vimeo 배경 영상 */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
          opacity: videoLoaded ? 1 : 0,
          transition: 'opacity 1s ease',
        }}
      >
        <iframe
          src="https://player.vimeo.com/video/1073125652?background=1&autoplay=1&loop=1&muted=1"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: 'max(177.78vh, 100vw)',
            height: 'max(56.25vw, 100vh)',
            transform: 'translate(-50%, -50%)',
            border: 'none',
          }}
          allow="autoplay; fullscreen"
          title="hero video"
          onLoad={() => setVideoLoaded(true)}
        />
      </div>

      {/* 어두운 오버레이 */}
      <div className={css({ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.45)', zIndex: 1 })} />

      {/* 카피라이팅 */}
      <div
        key={slideIdx}
        className={css({
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          paddingLeft: '24px',
          paddingRight: '24px',
          maxWidth: '800px',
        })}
      >
        <h1
          className={css({
            fontSize: { base: '36px', md: '64px' },
            fontWeight: '800',
            color: 'white',
            lineHeight: '1.3',
            marginBottom: '20px',
            wordBreak: 'keep-all',
            overflowWrap: 'break-word',
            opacity: 0,
            animation: 'fadeSlideUp 0.7s ease forwards',
            animationDelay: '0.1s',
          })}
        >
          {slide.main}
        </h1>

        <p
          className={css({
            color: 'rgba(255,255,255,0.85)',
            fontSize: { base: '16px', md: '20px' },
            lineHeight: '1.7',
            marginBottom: '36px',
            wordBreak: 'keep-all',
            overflowWrap: 'break-word',
            opacity: 0,
            animation: 'fadeSlideUp 0.7s ease forwards',
            animationDelay: '0.5s',
          })}
        >
          {slide.sub}
        </p>

        <Link
          href={slide.btnHref}
          className={css({
            display: 'inline-flex',
            alignItems: 'center',
            paddingTop: '18px',
            paddingBottom: '18px',
            paddingLeft: '44px',
            paddingRight: '44px',
            backgroundColor: '#267db6',
            color: 'white',
            fontSize: '20px',
            fontWeight: '700',
            textDecoration: 'none',
            borderRadius: '9999px',
            transition: 'background-color 0.2s, transform 0.2s',
            opacity: 0,
            animation: 'fadeSlideUp 0.7s ease forwards',
            animationDelay: '0.9s',
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
  const [modalOpen, setModalOpen] = useState<'terms' | 'privacy' | null>(null);
  return (
    <div className={css({ width: '100%' })}>
      <main>
        <HeroSection />

        {/* About Section */}
        <section
          style={{
            padding: '100px 0',
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
            {/* 좌측 텍스트 */}
            <div>
              {/* 라벨 */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#eaf4fb',
                  color: '#267db6',
                  fontSize: '13px',
                  fontWeight: '700',
                  letterSpacing: '0.08em',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  marginBottom: '28px',
                  textTransform: 'uppercase',
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#267db6', display: 'inline-block' }} />
                Expert Instructor
              </div>

              {/* 헤딩 */}
              <h2
                style={{
                  fontSize: '44px',
                  fontWeight: '900',
                  lineHeight: '1.2',
                  marginBottom: '24px',
                  wordBreak: 'keep-all',
                }}
              >
                <span style={{ color: '#267db6' }}>
                  <ScrollRevealText text="수중 세계의 전문가와 함께하는" charDelay={45} />
                </span>
                <br />
                <span style={{ color: '#1f1e1e' }}>
                  <ScrollRevealText text="맞춤형 스쿠버 다이빙 여정." charDelay={45} />
                </span>
              </h2>



              {/* 본문 */}
              <p
                style={{
                  fontSize: '17px',
                  color: '#555',
                  lineHeight: '1.85',
                  marginBottom: '40px',
                  wordBreak: 'keep-all',
                }}
              >
                <ScrollRevealText
                  text="믿을 수 있는 전문 강사진과 함께하는 다이빙, 1:1 맞춤 교육부터 강사 양성까지"
                  charDelay={20}
                />
                <br />
                <ScrollRevealText
                  text="체계적인 교육 과정을 제공합니다."
                  charDelay={20}
                />
              </p>

              {/* 버튼 */}
              <a
                href="/about"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 28px',
                  border: '2px solid #267db6',
                  borderRadius: '8px',
                  color: '#267db6',
                  fontSize: '15px',
                  fontWeight: '700',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#267db6';
                  (e.currentTarget as HTMLAnchorElement).style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
                  (e.currentTarget as HTMLAnchorElement).style.color = '#267db6';
                }}
              >
                드림다이브 소개
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* 우측 5장 이미지 그리드 */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gridTemplateRows: 'auto auto',
                gap: '12px',
              }}
            >
              {/* 이미지 1 — 왼쪽 상단 (2행 차지) */}
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
                  alt="다이빙 1"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* 우측 상단 2장 */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ borderRadius: '16px', overflow: 'hidden', height: '220px' }}>
                  <img
                    src="/assets/main/fb5797dd599e9.jpg"
                    alt="다이빙 2"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div style={{ borderRadius: '16px', overflow: 'hidden', height: '220px' }}>
                  <img
                    src="/assets/main/8521cb2ab2e41.jpg"
                    alt="다이빙 3"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Partner Section */}
        <PartnerSection />

        {/* Program Section */}
        <ProgramSection />

        {/* Review Section */}
        <ReviewSection />

        {/* Gallery + CTA Section */}
        <GallerySection />


        {/* Footer */}
        <footer style={{ backgroundColor: '#0f1923', color: '#8b9bb4', padding: '48px 0 32px' }}>
          <div style={{ maxWidth: '1520px', margin: '0 auto', padding: '0 50px' }}>

            {/* 회사 정보 */}
            <div style={{ marginBottom: '24px' }}>
              <p style={{ fontSize: '14px', lineHeight: '2', color: '#8b9bb4' }}>
                업체명: 드림다이브 &nbsp;|&nbsp; 센터장: 이용희
              </p>
              <p style={{ fontSize: '14px', lineHeight: '2', color: '#8b9bb4' }}>
                교육 &amp; 다이빙 문의: 010-2786-4468
              </p>
            </div>

            {/* 구분선 */}
            <div style={{ borderTop: '1px solid #1e2d3d', marginBottom: '20px' }} />

            {/* 하단 링크 + 카피라이트 */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
              <div style={{ display: 'flex', gap: '20px' }}>
                <button
                  onClick={() => setModalOpen('terms')}
                  style={{ background: 'none', border: 'none', color: '#8b9bb4', fontSize: '13px', cursor: 'pointer', padding: 0, textDecoration: 'underline' }}
                >
                  이용약관
                </button>
                <button
                  onClick={() => setModalOpen('privacy')}
                  style={{ background: 'none', border: 'none', color: '#8b9bb4', fontSize: '13px', cursor: 'pointer', padding: 0, textDecoration: 'underline' }}
                >
                  개인정보처리방침
                </button>
              </div>
              <p style={{ fontSize: '13px', color: '#4a5568' }}>
                © 2026 드림다이브. All rights reserved.
              </p>
            </div>
          </div>
        </footer>

        {/* ── 이용약관 모달 ── */}
        {modalOpen === 'terms' && (
          <div
            onClick={() => setModalOpen(null)}
            style={{
              position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)',
              zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '20px',
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                background: '#fff', borderRadius: '12px', maxWidth: '760px', width: '100%',
                maxHeight: '80vh', display: 'flex', flexDirection: 'column', overflow: 'hidden',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 28px', borderBottom: '1px solid #e5e7eb' }}>
                <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#1f1e1e' }}>이용약관</h2>
                <button onClick={() => setModalOpen(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '24px', color: '#666', lineHeight: 1 }}>×</button>
              </div>
              <div style={{ overflowY: 'auto', padding: '24px 28px', fontSize: '14px', lineHeight: '1.9', color: '#444' }}>
                <p><strong>제1조 목적</strong></p>
                <p>본 이용약관은 드림다이브(이하 "사이트")의 서비스의 이용조건과 운영에 관한 제반 사항 규정을 목적으로 합니다.</p>
                <br />
                <p><strong>제2조 용어의 정의</strong></p>
                <p>본 약관에서 사용되는 주요한 용어의 정의는 다음과 같습니다.</p>
                <p>① 회원 : 사이트의 약관에 동의하고 개인정보를 제공하여 회원등록을 한 자로서, 사이트와의 이용계약을 체결하고 사이트를 이용하는 이용자를 말합니다.</p>
                <p>② 이용계약 : 사이트 이용과 관련하여 사이트와 회원간에 체결 하는 계약을 말합니다.</p>
                <p>③ 회원 아이디(이하 "ID") : 회원의 식별과 회원의 서비스 이용을 위하여 회원별로 부여하는 고유한 문자와 숫자의 조합을 말합니다.</p>
                <p>④ 비밀번호 : 회원이 부여받은 ID와 일치된 회원임을 확인하고 회원의 권익 보호를 위하여 회원이 선정한 문자와 숫자의 조합을 말합니다.</p>
                <p>⑤ 운영자 : 서비스에 홈페이지를 개설하여 운영하는 운영자를 말합니다.</p>
                <p>⑥ 해지 : 회원이 이용계약을 해약하는 것을 말합니다.</p>
                <br />
                <p><strong>제3조 약관 외 준칙</strong></p>
                <p>운영자는 필요한 경우 별도로 운영정책을 공지 안내할 수 있으며, 본 약관과 운영정책이 중첩될 경우 운영정책이 우선 적용됩니다.</p>
                <br />
                <p><strong>제4조 이용계약 체결</strong></p>
                <p>① 이용계약은 회원으로 등록하여 사이트를 이용하려는 자의 본 약관 내용에 대한 동의와 가입신청에 대하여 운영자의 이용승낙으로 성립합니다.</p>
                <p>② 회원으로 등록하여 서비스를 이용하려는 자는 사이트 가입신청 시 본 약관을 읽고 아래에 있는 "동의합니다"를 선택하는 것으로 본 약관에 대한 동의 의사 표시를 합니다.</p>
                <br />
                <p><strong>제5조 서비스 이용 신청</strong></p>
                <p>① 회원으로 등록하여 사이트를 이용하려는 이용자는 사이트에서 요청하는 제반정보(이용자ID, 비밀번호, 닉네임 등)를 제공해야 합니다.</p>
                <p>② 타인의 정보를 도용하거나 허위의 정보를 등록하는 등 본인의 진정한 정보를 등록하지 않은 회원은 사이트 이용과 관련하여 아무런 권리를 주장할 수 없으며, 관계 법령에 따라 처벌받을 수 있습니다.</p>
                <br />
                <p><strong>제6조 개인정보처리방침</strong></p>
                <p>사이트 및 운영자는 회원가입 시 제공한 개인정보 중 비밀번호를 가지고 있지 않으며 이와 관련된 부분은 사이트의 개인정보처리방침을 따릅니다. 운영자는 관계 법령이 정하는 바에 따라 회원등록정보를 포함한 회원의 개인정보를 보호하기 위하여 노력합니다.</p>
                <br />
                <p><strong>제7조 운영자의 의무</strong></p>
                <p>① 운영자는 이용회원으로부터 제기되는 의견이나 불만이 정당하다고 인정할 경우에는 가급적 빨리 처리하여야 합니다.</p>
                <p>② 운영자는 계속적이고 안정적인 사이트 제공을 위하여 설비에 장애가 생기거나 유실된 때에는 이를 지체 없이 수리 또는 복구할 수 있도록 노력합니다.</p>
                <br />
                <p><strong>제8조 회원의 의무</strong></p>
                <p>① 회원은 본 약관에서 규정하는 사항과 운영자가 정한 제반 규정, 공지사항 및 운영정책 등 사이트가 공지하는 사항 및 관계 법령을 준수하여야 합니다.</p>
                <p>② 회원은 사이트의 명시적 동의가 없는 한 서비스의 이용 권한, 기타 이용계약상 지위를 타인에게 양도, 증여할 수 없으며, 이를 담보로 제공할 수 없습니다.</p>
                <p>③ 이용고객은 아이디 및 비밀번호 관리에 상당한 주의를 기울여야 하며, 운영자나 사이트의 동의 없이 제3자에게 아이디를 제공하여 이용하게 할 수 없습니다.</p>
                <p>④ 회원은 운영자와 사이트 및 제3자의 지적 재산권을 침해해서는 안 됩니다.</p>
                <br />
                <p><strong>제9조 서비스 이용 시간</strong></p>
                <p>① 서비스 이용 시간은 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴 1일 24시간을 원칙으로 합니다.</p>
                <p>② 사이트는 시스템 정기점검, 증설 및 교체를 위해 서비스를 일시중단 할 수 있습니다.</p>
                <br />
                <p><strong>제10조 서비스 이용 해지</strong></p>
                <p>① 회원이 사이트와의 이용계약을 해지하고자 하는 경우에는 회원 본인이 온라인을 통하여 등록해지 신청을 하여야 합니다.</p>
                <br />
                <p><strong>제15조 손해배상</strong></p>
                <p>① 본 사이트의 발생한 모든 민, 형법상 책임은 회원 본인에게 1차적으로 있습니다.</p>
                <p>② 본 사이트로부터 회원이 받은 손해가 천재지변 등 불가항력적이거나 회원의 고의 또는 과실로 인하여 발생한 때에는 손해배상을 하지 않습니다.</p>
                <br />
                <p><strong>부칙</strong></p>
                <p>이 약관은 2026.06.16.부터 시행합니다.</p>
              </div>
            </div>
          </div>
        )}

        {/* ── 개인정보처리방침 모달 ── */}
        {modalOpen === 'privacy' && (
          <div
            onClick={() => setModalOpen(null)}
            style={{
              position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)',
              zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '20px',
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                background: '#fff', borderRadius: '12px', maxWidth: '760px', width: '100%',
                maxHeight: '80vh', display: 'flex', flexDirection: 'column', overflow: 'hidden',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 28px', borderBottom: '1px solid #e5e7eb' }}>
                <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#1f1e1e' }}>개인정보처리방침</h2>
                <button onClick={() => setModalOpen(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '24px', color: '#666', lineHeight: 1 }}>×</button>
              </div>
              <div style={{ overflowY: 'auto', padding: '24px 28px', fontSize: '14px', lineHeight: '1.9', color: '#444' }}>
                <p>드림다이브(이하 &apos;회사&apos;라 한다)는 개인정보 보호법 제30조에 따라 정보 주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리지침을 수립, 공개합니다.</p>
                <br />
                <p><strong>제1조 (개인정보의 처리목적)</strong></p>
                <p>회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
                <p>1. 홈페이지 회원 가입 및 관리 — 회원 가입 의사 확인, 본인 식별·인증, 회원자격 유지·관리, 고충 처리 등</p>
                <p>2. 재화 또는 서비스 제공 — 서비스 제공, 콘텐츠 제공, 맞춤서비스 제공, 요금 결제 및 정산 등</p>
                <p>3. 고충 처리 — 민원인의 신원 확인, 민원사항 확인, 처리 결과 통보 등</p>
                <br />
                <p><strong>제2조 (개인정보의 처리 및 보유기간)</strong></p>
                <p>① 회사는 법령에 따른 개인정보 보유, 이용 기간 내에서 개인정보를 처리, 보유합니다.</p>
                <p>② 홈페이지 회원 가입 및 관리 : 사업자/단체 홈페이지 탈퇴 시까지</p>
                <br />
                <p><strong>제3조 (개인정보의 제3자 제공)</strong></p>
                <p>회사는 정보주체의 개인정보를 제1조에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.</p>
                <br />
                <p><strong>제4조 (개인정보처리의 위탁)</strong></p>
                <p>회사는 원활한 개인정보 업무처리를 위하여 필요한 경우 개인정보 처리업무를 위탁할 수 있으며, 위탁 시 개인정보 보호법 제25조에 따라 필요한 사항을 계약서에 명시합니다.</p>
                <br />
                <p><strong>제5조 (정보주체 및 법정대리인의 권리와 그 행사 방법)</strong></p>
                <p>① 정보주체는 회사에 대해 언제든지 개인정보 열람, 정정, 삭제, 처리정지 요구 등의 권리를 행사할 수 있습니다.</p>
                <p>② 권리 행사는 서면, 전화, 전자우편 등을 통하여 하실 수 있으며 회사는 이에 대해 지체없이 조치하겠습니다.</p>
                <br />
                <p><strong>제6조 (처리하는 개인정보 항목)</strong></p>
                <p>1. 홈페이지 회원 가입 및 관리 — 성명, 연락처, 이메일주소 등</p>
                <p>2. 재화 또는 서비스 제공 — 성명, 연락처, 이메일주소, 결제정보 등</p>
                <br />
                <p><strong>제7조 (개인정보의 파기)</strong></p>
                <p>① 회사는 개인정보 보유 기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.</p>
                <p>② 전자적 파일 형태의 개인정보는 기록을 재생할 수 없도록 파기하며, 종이 문서는 분쇄기로 분쇄하거나 소각하여 파기합니다.</p>
                <br />
                <p><strong>제8조 (개인정보의 안전성 확보조치)</strong></p>
                <p>1. 관리적 조치 : 내부관리계획 수립 및 시행, 정기적 직원 교육 등</p>
                <p>2. 기술적 조치 : 개인정보처리시스템 등의 접근 권한 관리, 접근통제시스템 설치, 암호화, 보안프로그램 설치</p>
                <p>3. 물리적 조치 : 전산실, 자료보관실 등의 접근통제</p>
                <br />
                <p><strong>제9조 (개인정보 자동 수집 장치의 설치·운영 및 거부)</strong></p>
                <p>① 회사는 이용자에게 개별적인 맞춤 서비스를 제공하기 위해 쿠키(cookie)를 사용합니다.</p>
                <p>② 정보주체는 웹 브라우저 옵션 설정을 통해 쿠키 허용, 차단 등의 설정을 할 수 있습니다.</p>
                <br />
                <p><strong>제10조 (개인정보 보호책임자)</strong></p>
                <p>▶ 개인정보 보호책임자</p>
                <p>성명 : 이용희 &nbsp;|&nbsp; 연락처 : 010-2786-4468</p>
                <br />
                <p><strong>제12조 (권익침해 구제 방법)</strong></p>
                <p>1. 개인정보 분쟁조정위원회 : (국번없이) 1833-6972 (www.kopico.go.kr)</p>
                <p>2. 개인정보침해신고센터 : (국번없이) 118 (privacy.kisa.or.kr)</p>
                <p>3. 대검찰청 : (국번없이) 1301 (www.spo.go.kr)</p>
                <p>4. 경찰청 : (국번없이) 182 (ecrm.police.go.kr/minwon/main)</p>
                <br />
                <p><strong>제13조 (개인정보 처리방침 시행 및 변경)</strong></p>
                <p>이 개인정보 처리방침은 2026.06.16.부터 적용됩니다.</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
