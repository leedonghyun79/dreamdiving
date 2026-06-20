'use client';

import { css } from '@styled-system/css';
import { flex } from '@styled-system/patterns';

export function Header() {
  return (
    <header
      className={css({
        bg: 'white',
        borderBottom: '1px solid #e5e7eb',
        padding: '16px 24px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      })}
    >
      <div className={flex({ justify: 'space-between', align: 'center' })}>
        <h1 className={css({ fontSize: '20px', fontWeight: '600', color: '#1f2937' })}>
          DreamDiving 어드민
        </h1>
        <div className={flex({ gap: '16px', align: 'center' })}>
          <span className={css({ fontSize: '14px', color: '#6b7280' })}>
            관리자
          </span>
        </div>
      </div>
    </header>
  );
}
