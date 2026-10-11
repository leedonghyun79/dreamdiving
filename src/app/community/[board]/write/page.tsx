import { notFound } from 'next/navigation';
import { getBoard } from '@/app/constants/board';
import { PostForm } from '@/app/components/domain/community/PostForm';

export default async function WritePage({ params }: { params: Promise<{ board: string }> }) {
  const board = getBoard((await params).board);
  if (!board) notFound();
  return <PostForm board={board} />;
}
