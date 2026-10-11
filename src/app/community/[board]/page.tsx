import { notFound } from 'next/navigation';
import { getBoard } from '@/app/constants/board';
import { BoardList } from '@/app/components/domain/community/BoardList';

export const dynamic = 'force-dynamic';

export default async function BoardPage({
  params,
  searchParams,
}: {
  params: Promise<{ board: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const board = getBoard((await params).board);
  if (!board) notFound();
  const page = Math.max(1, parseInt((await searchParams).page ?? '1', 10) || 1);
  return <BoardList board={board} page={page} />;
}
