'use client';

import { css } from '@/styled-system/css';

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  status: string;
  createdAt: Date;
}

interface CustomerTableProps {
  customers: Customer[];
}

export function CustomerTable({ customers }: CustomerTableProps) {
  return (
    <div className={css({ overflowX: 'auto' })}>
      <table
        className={css({
          width: '100%',
          borderCollapse: 'collapse',
          bg: 'white',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        })}
      >
        <thead>
          <tr className={css({ bg: '#f3f4f6', borderBottom: '1px solid #e5e7eb' })}>
            <th className={css({ padding: '12px 16px', textAlign: 'left', fontWeight: '600' })}>
              이름
            </th>
            <th className={css({ padding: '12px 16px', textAlign: 'left', fontWeight: '600' })}>
              이메일
            </th>
            <th className={css({ padding: '12px 16px', textAlign: 'left', fontWeight: '600' })}>
              회사
            </th>
            <th className={css({ padding: '12px 16px', textAlign: 'left', fontWeight: '600' })}>
              상태
            </th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id} className={css({ borderBottom: '1px solid #e5e7eb' })}>
              <td className={css({ padding: '12px 16px' })}>{customer.name}</td>
              <td className={css({ padding: '12px 16px', color: '#6b7280' })}>
                {customer.email}
              </td>
              <td className={css({ padding: '12px 16px', color: '#6b7280' })}>
                {customer.company || '-'}
              </td>
              <td className={css({ padding: '12px 16px' })}>
                <span
                  className={css({
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontWeight: '500',
                    ...(customer.status === 'active'
                      ? { bg: '#dcfce7', color: '#166534' }
                      : { bg: '#fee2e2', color: '#7f1d1d' }),
                  })}
                >
                  {customer.status === 'active' ? '활성' : '비활성'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {customers.length === 0 && (
        <p className={css({ textAlign: 'center', padding: '32px', color: '#6b7280' })}>
          고객이 없습니다.
        </p>
      )}
    </div>
  );
}
