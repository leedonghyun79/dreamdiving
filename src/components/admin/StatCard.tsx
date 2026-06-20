import { css } from '@styled-system/css';

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
}

export function StatCard({ title, value, description }: StatCardProps) {
  return (
    <div
      className={css({
        bg: 'white',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      })}
    >
      <p className={css({ fontSize: '14px', color: '#6b7280', marginBottom: '8px' })}>
        {title}
      </p>
      <p className={css({ fontSize: '32px', fontWeight: '700', color: '#1f2937' })}>
        {value}
      </p>
      {description && (
        <p className={css({ fontSize: '12px', color: '#9ca3af', marginTop: '8px' })}>
          {description}
        </p>
      )}
    </div>
  );
}
