'use client';

import { PARTNER_LOGOS } from '../constants/data';

const PARTNER_TRACK = [...PARTNER_LOGOS, ...PARTNER_LOGOS];

export function PartnerSection() {
  return (
    <section style={{ padding: '60px 0 100px', backgroundColor: '#fff', overflow: 'hidden' }}>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '120px',
            zIndex: 2,
            background: 'linear-gradient(to right, white, transparent)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: '120px',
            zIndex: 2,
            background: 'linear-gradient(to left, white, transparent)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
            width: 'max-content',
            animation: 'logoScrollLeft 18s linear infinite',
          }}
        >
          {PARTNER_TRACK.map((logo, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                width: '280px',
                height: '108px',
                border: '1px solid rgb(229, 231, 235)',
                borderRadius: '0px',
                overflow: 'hidden',
              }}
            >
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
