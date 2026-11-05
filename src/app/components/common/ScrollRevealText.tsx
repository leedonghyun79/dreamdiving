'use client';

import { useEffect, useRef, useState } from 'react';

interface ScrollRevealTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  charDelay?: number; // 호환용 (현재 미사용: 문구 전체가 한 번에 올라오는 방식)
  delay?: number; // ms, 시작 전 대기 시간 (앞 문구 뒤에 이어서 나오게 할 때)
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
}

const EASE = 'cubic-bezier(0.25, 0.1, 0.25, 1)'; // 워드프레스 계열 기본 ease-out 느낌
const DURATION = 800; // ms
const DISTANCE = 30; // px, 아래에서 위로 올라오는 거리

// 문구 하나가 끝나는 데 걸리는 시간 (다음 문구의 delay 계산용)
export function getRevealTime(_text: string, _charDelay = 0, delay = 0) {
  return delay + DURATION;
}

export default function ScrollRevealText({
  text,
  className,
  style,
  delay = 0,
  tag: Tag = 'span',
}: ScrollRevealTextProps) {
  const ref = useRef<HTMLElement>(null);
  const [triggered, setTriggered] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // 모션 줄이기 설정이면 애니메이션 없이 바로 표시
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReduceMotion(true);
      setTriggered(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const shown = triggered || reduceMotion;

  return (
    <Tag
      ref={ref as React.RefObject<HTMLElement & HTMLHeadingElement & HTMLParagraphElement>}
      className={className}
      style={{
        ...style,
        display: 'inline-block',
        opacity: shown ? 1 : 0,
        transform: shown ? 'translate3d(0, 0, 0)' : `translate3d(0, ${DISTANCE}px, 0)`,
        transition: reduceMotion
          ? 'none'
          : `opacity ${DURATION}ms ${EASE} ${delay}ms, transform ${DURATION}ms ${EASE} ${delay}ms`,
        willChange: shown ? 'auto' : 'opacity, transform',
      }}
    >
      {text}
    </Tag>
  );
}
