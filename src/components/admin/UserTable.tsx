'use client';

import { css } from '@styled-system/css';

interface User {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  createdAt: Date;
}

interface UserTableProps {
  users: User[];
}

export function UserTable({ users }: UserTableProps) {
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
              연락처
            </th>
            <th className={css({ padding: '12px 16px', textAlign: 'left', fontWeight: '600' })}>
              가입일
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className={css({ borderBottom: '1px solid #e5e7eb' })}>
              <td className={css({ padding: '12px 16px' })}>{user.name}</td>
              <td className={css({ padding: '12px 16px', color: '#6b7280' })}>
                {user.email}
              </td>
              <td className={css({ padding: '12px 16px', color: '#6b7280' })}>
                {user.phone || '-'}
              </td>
              <td className={css({ padding: '12px 16px', color: '#6b7280' })}>
                {new Date(user.createdAt).toLocaleDateString('ko-KR')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {users.length === 0 && (
        <p className={css({ textAlign: 'center', padding: '32px', color: '#6b7280' })}>
          유저가 없습니다.
        </p>
      )}
    </div>
  );
}
