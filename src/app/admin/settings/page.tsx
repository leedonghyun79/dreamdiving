import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

export default function SettingsPage() {
  return (
    <div className={css({ display: 'flex', flexDirection: 'column', gap: '24px' })}>
      <h1 className={css({ fontSize: '28px', fontWeight: '700' })}>
        설정
      </h1>

      <div
        className={css({
          bg: 'white',
          borderRadius: '8px',
          padding: '24px',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        })}
      >
        <h2 className={css({ fontSize: '18px', fontWeight: '600', marginBottom: '16px' })}>
          일반 설정
        </h2>

        <div className={flex({ direction: 'column', gap: '16px' })}>
          <div>
            <label className={css({ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px' })}>
              사이트 이름
            </label>
            <input
              type="text"
              defaultValue="DreamDiving"
              className={css({
                width: '100%',
                padding: '8px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '14px',
              })}
            />
          </div>

          <div>
            <label className={css({ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px' })}>
              관리자 이메일
            </label>
            <input
              type="email"
              defaultValue="admin@dreamdiving.com"
              className={css({
                width: '100%',
                padding: '8px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '14px',
              })}
            />
          </div>

          <button
            className={css({
              alignSelf: 'flex-start',
              padding: '10px 20px',
              bg: '#3b82f6',
              color: 'white',
              borderRadius: '6px',
              border: 'none',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s',
              _hover: { bg: '#1e40af' },
            })}
          >
            저장
          </button>
        </div>
      </div>
    </div>
  );
}
