'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { css } from '../../../styled-system/css';
import { SLIDES } from '../constants/data';

export function HeroSection() {
  const [slideIdx, setSlideIdx] = useState(0);
  const [fade, setFade] = useState<'in' | 'out'>('in');
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade('out');
      setTimeout(() => {
        setSlideIdx((prev) => (prev + 1) % SLIDES.length);
        setFade('in');
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
    >
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

      <div className={css({ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.45)', zIndex: 1 })} />

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
