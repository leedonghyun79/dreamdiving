import { prisma } from '@/lib/prisma';
import { InquiryTable } from '@/components/admin/InquiryTable';
import { css } from '@styled-system/css';

export default async function InquiriesPage() {
  const inquiries = await prisma.inquiry.findMany({
    orderBy: { createdAt: 'desc' },
    include: { user: true },
  });

  const mappedInquiries = inquiries.map((inquiry) => ({
    id: inquiry.id,
    subject: inquiry.subject,
    name: inquiry.user?.name || inquiry.name,
    email: inquiry.user?.email || inquiry.email,
    status: inquiry.status,
    createdAt: inquiry.createdAt,
  }));

  return (
    <div className={css({ display: 'flex', flexDirection: 'column', gap: '24px' })}>
      <h1 className={css({ fontSize: '28px', fontWeight: '700' })}>
        문의 관리
      </h1>
      <InquiryTable inquiries={mappedInquiries} />
    </div>
  );
}
