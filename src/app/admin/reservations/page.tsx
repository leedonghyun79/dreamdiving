import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

export default function ReservationsPage() {
  return (
    <div className={css({ display: 'flex', flexDirection: 'column', gap: '24px' })}>
      <h1 className={css({ fontSize: '28px', fontWeight: '700' })}>
        예약 관리
      </h1>

      <div
        className={flex({
          direction: 'column',
          align: 'center',
          justify: 'center',
          gap: '16px',
          padding: '60px 20px',
          bg: 'white',
          borderRadius: '8px',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        })}
      >
        <p className={css({ fontSize: '20px', fontWeight: '600', color: '#1f2937' })}>
          곧 서비스될 예정입니다
        </p>
        <p className={css({ fontSize: '14px', color: '#6b7280' })}>
          예약 스케줄 관리 기능은 개발 중입니다.
        </p>
      </div>
    </div>
  );
}
