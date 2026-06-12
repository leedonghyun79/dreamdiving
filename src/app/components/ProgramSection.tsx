'use client';

import { useState } from 'react';
import ScrollRevealText from './ScrollRevealText';
import { PROGRAMS } from '../constants/data';
import { COMMON_STYLES, COLOR } from '../constants/styles';

export function ProgramSection() {
  const [current, setCurrent] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const visible = 3;
  const max = PROGRAMS.length - visible;

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(max, c + 1));

  return (
    <section style={{ padding: '100px 0', backgroundColor: '#f8f9fb' }}>
      <div style={{ maxWidth: '1520px', margin: '0 auto', padding: '0 50px' }}>
        <div style={{ marginBottom: '60px' }}>
          <div style={COMMON_STYLES.badge}>
            <span style={COMMON_STYLES.badgeDot} />
            Programs
          </div>
          <h2 style={COMMON_STYLES.heading2}>
            <ScrollRevealText text="프로그램 안내" charDelay={40} />
          </h2>
          <p style={COMMON_STYLES.subtitle}>
            <ScrollRevealText text="입문부터 강사과정까지, 수도권 최고의 다이빙 교육을 경험하세요." charDelay={25} />
          </p>
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{ overflow: 'hidden' }}>
            <div
              style={{
                display: 'flex',
                gap: '24px',
                transition: 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: `translateX(calc(-${current} * (100% / ${visible} + 8px)))`,
              }}
            >
              {PROGRAMS.map((prog, i) => (
                <div
                  key={prog.title}
                  style={{ flex: `0 0 calc((100% - ${(visible - 1) * 24}px) / ${visible})` }}
                  onMouseEnter={() => setHoveredIdx(i)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  <div
                    style={{
                      borderRadius: '20px',
                      overflow: 'hidden',
                      position: 'relative',
                      aspectRatio: '4/3',
                      marginBottom: '16px',
                      cursor: 'pointer',
                      boxShadow: hoveredIdx === i ? '0 12px 40px rgba(0,0,0,0.15)' : '0 4px 16px rgba(0,0,0,0.08)',
                      transition: 'box-shadow 0.3s, transform 0.3s',
                      transform: hoveredIdx === i ? 'translateY(-4px)' : 'translateY(0)',
                    }}
                  >
                    <img
                      src={prog.img}
                      alt={prog.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.4s',
                        transform: hoveredIdx === i ? 'scale(1.04)' : 'scale(1)',
                      }}
                    />
                    <a
                      href={prog.href}
                      style={{
                        position: 'absolute',
                        bottom: '16px',
                        right: '16px',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: hoveredIdx === i ? COLOR.primary : 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                        transition: 'background-color 0.25s',
                        textDecoration: 'none',
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={hoveredIdx === i ? 'white' : COLOR.primary}
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                  <p style={{ fontSize: '11px', color: COLOR.primary, fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '4px' }}>
                    {prog.subtitle}
                  </p>
                  <p style={{ fontSize: '18px', fontWeight: '700', color: COLOR.text, wordBreak: 'keep-all' }}>{prog.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', marginTop: '40px', alignItems: 'center' }}>
            <button
              onClick={prev}
              disabled={current === 0}
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                border: '1.5px solid #ddd',
                backgroundColor: current === 0 ? '#f5f5f5' : 'white',
                cursor: current === 0 ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s',
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke={current === 0 ? '#ccc' : COLOR.text}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              disabled={current === max}
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                border: '1.5px solid #ddd',
                backgroundColor: current === max ? '#f5f5f5' : 'white',
                cursor: current === max ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s',
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke={current === max ? '#ccc' : COLOR.text}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: '8px' }}>
              {Array.from({ length: max + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  style={{
                    width: i === current ? '28px' : '8px',
                    height: '8px',
                    borderRadius: '9999px',
                    border: 'none',
                    backgroundColor: i === current ? COLOR.primary : '#d1d5db',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
