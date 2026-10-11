'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SCHEDULE_PROGRAMS } from '@/app/constants/schedule';
import { styles } from './ScheduleSidebar.styles';

export function ScheduleSidebar() {
  const current = usePathname().split('/').pop();
  return (
    <nav className={styles.nav}>
      {SCHEDULE_PROGRAMS.map((p) => (
        <Link key={p.id} href={`/schedule/${p.id}`} className={styles.link(p.id === current)}>
          {p.nameKo} 일정
        </Link>
      ))}
    </nav>
  );
}
