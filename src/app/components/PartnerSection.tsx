'use client';

export function PartnerSection() {
  return (
    <section
      style={{
        padding: '100px 0',
        backgroundColor: '#1a1a1a',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '1520px',
          margin: '0 auto',
          padding: '0 50px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          minHeight: '400px',
        }}
      >
        <p
          style={{
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 0.7)',
            marginBottom: '32px',
            wordBreak: 'keep-all',
            fontWeight: '600',
          }}
        >
          The Spirit of BSAC
        </p>

        <svg
          width="180"
          height="180"
          viewBox="0 0 200 200"
          style={{ marginBottom: '40px' }}
        >
          <circle
            cx="100"
            cy="100"
            r="95"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
          <text
            x="100"
            y="110"
            textAnchor="middle"
            fontSize="24"
            fontWeight="bold"
            fill="white"
            fontFamily="Arial, sans-serif"
          >
            BSAC
          </text>
        </svg>

        <p
          style={{
            fontSize: '16px',
            color: 'rgba(255, 255, 255, 0.6)',
            marginBottom: '8px',
            wordBreak: 'keep-all',
          }}
        >
          www.bsac.com
        </p>
      </div>
    </section>
  );
}
