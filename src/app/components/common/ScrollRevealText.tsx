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
          observer.disconnect();
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
        // 諛붽묑 span: overflow hidden ??留덉뒪????븷 (?꾨옒 怨듦컙 ?대━??
        <span
          key={i}
          style={{
            display: 'inline-block',
            overflow: 'hidden',
            verticalAlign: 'bottom',
            lineHeight: 'inherit',
          }}
        >
          {/* ?덉そ span: ?꾨옒???꾨줈 ?щ씪?대뱶 */}
          <span
            style={{
              display: 'inline-block',
              whiteSpace: char === ' ' ? 'pre' : 'normal',
              transform: triggered ? 'translateY(0)' : 'translateY(110%)',
              transition: triggered
                ? `transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${i * charDelay}ms`
                : 'none',
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        </span>
      ))}
    </Tag>
  );
}
