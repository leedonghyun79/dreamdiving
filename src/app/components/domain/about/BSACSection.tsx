'use client';

import { COLOR } from '../../../constants/styles';

export function BSACSection() {
  return (
    <section
      style={{
        padding: '120px 50px',
        backgroundColor: '#1a1a1a',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '500px',
        textAlign: 'center',
      }}
    >
      <p
        style={{
          fontSize: '18px',
          color: COLOR.textSecondary,
          marginBottom: '60px',
          letterSpacing: '0.15em',
          fontWeight: '600',
        }}
      >
        The Spirit of BSAC
      </p>

      <div
        style={{
          width: '200px',
          height: '200px',
          border: `2px solid ${COLOR.textSecondary}`,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '60px',
        }}
      >
        <p
          style={{
            fontSize: '32px',
            fontWeight: '700',
            color: COLOR.textSecondary,
            margin: '0',
          }}
        >
          BSAC
        </p>
      </div>

      <a
        href="https://www.bsac.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontSize: '16px',
          color: COLOR.textSecondary,
          textDecoration: 'none',
          transition: 'color 0.2s',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.color = COLOR.primary;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.color = COLOR.textSecondary;
        }}
      >
        www.bsac.com
      </a>
    </section>
  );
}

