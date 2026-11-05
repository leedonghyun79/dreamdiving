'use client';

import { useRef, useState } from 'react';
import { css } from '@styled-system/css';

export interface GalleryItem {
  src: string; // 공개 경로 (예: /assets/xxx/yyy.webp)
  caption: string; // 사진 아래 표시 이름
}

interface GalleryCarouselProps {
  items: GalleryItem[];
  aspectRatio?: string; // 기본 2:1
}

const DRAG_THRESHOLD = 60; // px, 이 이상 끌면 다음/이전 사진으로 넘어감
const SLIDE_TRANSITION = 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)';

const arrowBaseStyle: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  width: '64px',
  height: '64px',
  borderRadius: '50%',
  border: 'none',
  backgroundColor: '#5c5c5c3d',
  color: 'rgba(255,255,255,0.7)',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 2,
  transition: 'background-color 0.2s',
};

// 호버 시 배경만 살짝 진하게
const arrowHoverClass = css({ _hover: { backgroundColor: '#5c5c5c66' } });

export function GalleryCarousel({ items, aspectRatio = '2 / 1' }: GalleryCarouselProps) {
  const total = items.length;
  const [index, setIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [dragging, setDragging] = useState(false);
  const startX = useRef<number | null>(null);

  if (total === 0) return null;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // 화살표 버튼을 누른 경우는 드래그로 보지 않음 (포인터 캡처가 클릭을 막는 것 방지)
    if ((e.target as HTMLElement).closest('button')) return;
    startX.current = e.clientX;
    setDragging(true);
    setDragOffset(0);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (startX.current === null) return;
    setDragOffset(e.clientX - startX.current);
  };

  const handlePointerUp = () => {
    if (startX.current === null) return;
    startX.current = null;
    setDragging(false);
    if (dragOffset <= -DRAG_THRESHOLD) next();
    else if (dragOffset >= DRAG_THRESHOLD) prev();
    setDragOffset(0);
  };

  const current = items[index];

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio,
        borderRadius: '4px',
        overflow: 'hidden',
        backgroundColor: '#111',
        cursor: dragging ? 'grabbing' : 'grab',
        touchAction: 'pan-y',
        userSelect: 'none',
      }}
    >
      {/* 사진을 가로로 나란히 둔 트랙: 손가락(마우스)을 따라 함께 움직임 */}
      <div
        style={{
          display: 'flex',
          width: `${total * 100}%`,
          height: '100%',
          transform: `translateX(calc(-${index} * 100% / ${total} + ${dragOffset}px))`,
          transition: dragging ? 'none' : SLIDE_TRANSITION,
        }}
      >
        {items.map((item) => (
          <div key={item.src} style={{ flex: `0 0 ${100 / total}%`, height: '100%' }}>
            <img
              src={encodeURI(item.src)}
              alt={item.caption}
              loading="lazy"
              draggable={false}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        ))}
      </div>

      <button type="button" onClick={prev} aria-label="이전 사진" className={arrowHoverClass} style={{ ...arrowBaseStyle, left: '16px' }}>
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 5l-7 7 7 7" />
        </svg>
      </button>
      <button type="button" onClick={next} aria-label="다음 사진" className={arrowHoverClass} style={{ ...arrowBaseStyle, right: '16px' }}>
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <p
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: '20px',
          margin: 0,
          textAlign: 'center',
          fontSize: '18px',
          fontWeight: '600',
          color: '#fff',
          textShadow: '0 1px 4px rgba(0,0,0,0.5)',
          pointerEvents: 'none',
        }}
      >
        {current.caption}
      </p>
    </div>
  );
}
