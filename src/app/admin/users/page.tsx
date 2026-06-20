import { prisma } from '@/lib/prisma';
import { UserTable } from '@/components/admin/UserTable';
import { css } from '@styled-system/css';

export default async function UsersPage() {
  const users = await prisma.user.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className={css({ display: 'flex', flexDirection: 'column', gap: '24px' })}>
      <h1 className={css({ fontSize: '28px', fontWeight: '700' })}>
        유저 관리
      </h1>
      <UserTable users={users} />
    </div>
  );
}
