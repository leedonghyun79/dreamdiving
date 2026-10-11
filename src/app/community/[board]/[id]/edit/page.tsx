import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { getBoard } from '@/app/constants/board';
import { PostForm } from '@/app/components/domain/community/PostForm';

export const dynamic = 'force-dynamic';

export default async function EditPage({ params }: { params: Promise<{ board: string; id: string }> }) {
  const { board: boardId, id } = await params;
  const board = getBoard(boardId);
  if (!board) notFound();
  const post = await prisma.post.findUnique({ where: { id } });
  if (!post || post.board !== board.id) notFound();
  return <PostForm board={board} post={{ id: post.id, title: post.title, content: post.content }} />;
}
