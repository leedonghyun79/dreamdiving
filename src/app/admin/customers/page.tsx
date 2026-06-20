import { prisma } from '@/lib/prisma';
import { CustomerTable } from '@/components/admin/CustomerTable';
import { css } from '@styled-system/css';

export default async function CustomersPage() {
  const customers = await prisma.customer.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className={css({ display: 'flex', flexDirection: 'column', gap: '24px' })}>
      <h1 className={css({ fontSize: '28px', fontWeight: '700' })}>
        고객 관리
      </h1>
      <CustomerTable customers={customers} />
    </div>
  );
}
