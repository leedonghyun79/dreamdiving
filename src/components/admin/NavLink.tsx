'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { css } from '@/styled-system/css';

interface NavLinkProps {
  href: string;
  label: string;
}

export function NavLink({ href, label }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={css({
        display: 'block',
        padding: '12px 16px',
        borderRadius: '6px',
        transition: 'all 0.2s',
        _hover: { bg: '#f3f4f6' },
        ...(isActive && {
          bg: '#dbeafe',
          color: '#1e40af',
          fontWeight: '600',
        }),
        color: isActive ? '#1e40af' : '#374151',
      })}
    >
      {label}
    </Link>
  );
}
