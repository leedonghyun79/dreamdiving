import Link from 'next/link';
import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { formatRelative } from '@/lib/formatDate';
import { BoardConfig } from '@/app/constants/board';
import { BoardTitle } from './BoardTitle';
import { PostActions } from './PostActions';
import { styles } from './Board.styles';

export async function PostDetail({ board, id }: { board: BoardConfig; id: string }) {
  const post = await prisma.post.findUnique({ where: { id } });
  if (!post || post.board !== board.id) notFound();

  return (
    <div className={styles.wrap}>
      <BoardTitle board={board} />

      <h3 className={styles.postTitle}>{post.title}</h3>
      <div className={styles.meta}>
        <div className={styles.avatar} />
        <div>
          <div className={styles.authorName}>{post.author}</div>
          <div className={styles.metaSub}>
            <span>{board.ko}</span>
            <span>{formatRelative(post.createdAt)}</span>
            <PostActions boardId={board.id} postId={post.id} />
          </div>
        </div>
      </div>

      <div className={styles.content}>{post.content}</div>

      <div className={styles.detailFooter}>
        <Link href={`/community/${board.id}`} className={styles.btn}>
          목록
        </Link>
        <Link href={`/community/${board.id}/write`} className={styles.btn}>
          글쓰기
        </Link>
      </div>
    </div>
  );
}
