'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { SLIDES } from '@/app/constants/data';
import { styles } from './HeroSection.styles';

export function HeroSection() {
  const [slideIdx, setSlideIdx] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setSlideIdx((prev) => (prev + 1) % SLIDES.length);
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
    setSlideIdx(i);
  };

  const slide = SLIDES[slideIdx];

  return (
    <section className={styles.section}>
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

      <div className={styles.overlay} />

      <div
        key={slideIdx}
        className={styles.contentContainer}
      >
        <h1 className={styles.title}>
          {slide.main}
        </h1>

        <p className={styles.subtitle}>
          {slide.sub}
        </p>

        <Link
          href={slide.btnHref}
          className={styles.button}
        >
          {slide.btnText}
        </Link>
      </div>

      <div
        className={styles.indicatorContainer}
        style={{ transform: 'translateX(-50%)' }}
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={styles.indicatorButton(i === slideIdx)}
          />
        ))}
      </div>
    </section>
  );
}

