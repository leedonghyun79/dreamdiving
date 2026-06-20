'use client';

import { css } from '@styled-system/css';

interface Inquiry {
  id: string;
  subject: string;
  name: string | null;
  email: string | null;
  status: string;
  createdAt: Date;
}

interface InquiryTableProps {
  inquiries: Inquiry[];
}

export function InquiryTable({ inquiries }: InquiryTableProps) {
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
              제목
            </th>
            <th className={css({ padding: '12px 16px', textAlign: 'left', fontWeight: '600' })}>
              이메일
            </th>
            <th className={css({ padding: '12px 16px', textAlign: 'left', fontWeight: '600' })}>
              상태
            </th>
            <th className={css({ padding: '12px 16px', textAlign: 'left', fontWeight: '600' })}>
              날짜
            </th>
          </tr>
        </thead>
        <tbody>
          {inquiries.map((inquiry) => (
            <tr key={inquiry.id} className={css({ borderBottom: '1px solid #e5e7eb' })}>
              <td className={css({ padding: '12px 16px' })}>{inquiry.subject}</td>
              <td className={css({ padding: '12px 16px', color: '#6b7280' })}>
                {inquiry.email || inquiry.name || '-'}
              </td>
              <td className={css({ padding: '12px 16px' })}>
                <span
                  className={css({
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontWeight: '500',
                    ...(inquiry.status === 'pending'
                      ? { bg: '#fef3c7', color: '#92400e' }
                      : inquiry.status === 'answered'
                        ? { bg: '#dbeafe', color: '#0c2d6b' }
                        : { bg: '#dcfce7', color: '#166534' }),
                  })}
                >
                  {inquiry.status === 'pending'
                    ? '대기중'
                    : inquiry.status === 'answered'
                      ? '답변함'
                      : '해결됨'}
                </span>
              </td>
              <td className={css({ padding: '12px 16px', color: '#6b7280' })}>
                {new Date(inquiry.createdAt).toLocaleDateString('ko-KR')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {inquiries.length === 0 && (
        <p className={css({ textAlign: 'center', padding: '32px', color: '#6b7280' })}>
          문의가 없습니다.
        </p>
      )}
    </div>
  );
}
