'use client';

import { css } from '@styled-system/css';

interface VisitorChartProps {
  data: Array<{ date: string; count: number }>;
}

export function VisitorChart({ data }: VisitorChartProps) {
  const maxCount = Math.max(...data.map((d) => d.count), 1);

  return (
    <div
      className={css({
        bg: 'white',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      })}
    >
      <h3 className={css({ fontSize: '16px', fontWeight: '600', marginBottom: '16px' })}>
        방문자 통계
      </h3>
      <div className={css({ display: 'flex', gap: '8px', alignItems: 'flex-end', height: '200px' })}>
        {data.slice(-7).map((item) => (
          <div
            key={item.date}
            className={css({
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            })}
          >
            <div
              className={css({
                width: '100%',
                height: `${(item.count / maxCount) * 180}px`,
                bg: '#3b82f6',
                borderRadius: '4px 4px 0 0',
                transition: 'all 0.2s',
                _hover: { bg: '#1e40af' },
              })}
            />
            <span className={css({ fontSize: '12px', color: '#6b7280', marginTop: '8px' })}>
              {item.date.split('-')[2]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
