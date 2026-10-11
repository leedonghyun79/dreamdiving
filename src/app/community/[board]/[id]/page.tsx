import { notFound } from 'next/navigation';
import { getBoard } from '@/app/constants/board';
import { PostDetail } from '@/app/components/domain/community/PostDetail';

export const dynamic = 'force-dynamic';

export default async function PostPage({ params }: { params: Promise<{ board: string; id: string }> }) {
  const { board: boardId, id } = await params;
  const board = getBoard(boardId);
  if (!board) notFound();
  return <PostDetail board={board} id={id} />;
}
