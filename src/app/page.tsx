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

function ProgramSection() {
  const [current, setCurrent] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const visible = 3;
  const max = PROGRAMS.length - visible;

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(max, c + 1));

  return (
    <section style={{ padding: '150px 0', backgroundColor: '#f8f9fb' }}>
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
            <ScrollRevealText text="BSAC 공인 단계별 자격증 과정" charDelay={40} />
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
      {[1,2,3,4,5].map((s) => (
        <svg key={s} width="18" height="18" viewBox="0 0 24 24" fill="#f59e0b">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewSection() {
  return (
    <section style={{ padding: '150px 0', backgroundColor: '#f8f9fb' }}>
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
  return (
    <div className={css({ width: '100%' })}>
      <main>
        <HeroSection />

        {/* About Section */}
        <section
          style={{
            padding: '150px 0',
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


        {/* Program Section */}
        <ProgramSection />

        {/* Review Section */}
        <ReviewSection />


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
