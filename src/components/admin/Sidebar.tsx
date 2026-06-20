'use client';

import { css } from '@styled-system/css';
import { flex } from '@styled-system/patterns';
import { NavLink } from './NavLink';

const menuItems = [
  { href: '/admin/dashboard', label: '대시보드' },
  { href: '/admin/users', label: '유저 관리' },
  { href: '/admin/customers', label: '고객 관리' },
  { href: '/admin/inquiries', label: '문의 관리' },
  { href: '/admin/reservations', label: '예약 관리' },
  { href: '/admin/settings', label: '설정' },
];

export function Sidebar() {
  return (
    <aside
      className={css({
        width: '240px',
        bg: 'white',
        borderRight: '1px solid #e5e7eb',
        padding: '24px 0',
        overflowY: 'auto',
      })}
    >
      <nav className={flex({ direction: 'column', gap: '8px', padding: '0 12px' })}>
        {menuItems.map((item) => (
          <NavLink key={item.href} href={item.href} label={item.label} />
        ))}
      </nav>
    </aside>
  );
}
