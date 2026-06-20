import { prisma } from '@/lib/prisma';
import { StatCard } from '@/components/admin/StatCard';
import { VisitorChart } from '@/components/admin/VisitorChart';
import { css } from '@styled-system/css';
import { grid } from '@styled-system/patterns';

export default async function DashboardPage() {
  // 통계 데이터 조회
  const totalUsers = await prisma.user.count();
  const totalInquiries = await prisma.inquiry.count();
  const pendingInquiries = await prisma.inquiry.count({
    where: { status: 'pending' },
  });

  // 최근 7일 방문자 데이터
  const visitorData = await prisma.visitorLog.findMany({
    orderBy: { date: 'desc' },
    take: 7,
  });

  const chartData = visitorData
    .reverse()
    .map((log) => ({
      date: log.date.toISOString().split('T')[0],
      count: log.count,
    }));

  return (
    <div className={css({ display: 'flex', flexDirection: 'column', gap: '24px' })}>
      <h1 className={css({ fontSize: '28px', fontWeight: '700' })}>
        대시보드
      </h1>

      <div className={grid({ columns: 3, gap: '20px' })}>
        <StatCard title="총 유저" value={totalUsers} />
        <StatCard title="총 문의" value={totalInquiries} />
        <StatCard
          title="미답변 문의"
          value={pendingInquiries}
          description={`${totalInquiries > 0 ? Math.round((pendingInquiries / totalInquiries) * 100) : 0}%`}
        />
      </div>

      <VisitorChart data={chartData} />
    </div>
  );
}
