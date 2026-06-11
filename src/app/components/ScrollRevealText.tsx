'use client';

import { useEffect, useRef, useState } from 'react';

interface ScrollRevealTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  charDelay?: number; // ms between each char (default: 35)
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
}

export default function ScrollRevealText({
  text,
  className,
  style,
  charDelay = 35,
  tag: Tag = 'span',
}: ScrollRevealTextProps) {
  const ref = useRef<HTMLElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect(); // 스크롤 올려도 재실행 안 됨
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as React.RefObject<HTMLElement & HTMLHeadingElement & HTMLParagraphElement>}
      className={className}
      style={{ ...style, display: 'inline' }}
    >
      {text.split('').map((char, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            whiteSpace: char === ' ' ? 'pre' : 'normal',
            opacity: triggered ? undefined : 0,
            animation: triggered
              ? `charReveal 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards`
              : 'none',
            animationDelay: triggered ? `${i * charDelay}ms` : '0ms',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </Tag>
  );
}
