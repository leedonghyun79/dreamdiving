import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { formatRelative, isNewPost } from '@/lib/formatDate';
import { BoardConfig } from '@/app/constants/board';
import { BoardTitle } from './BoardTitle';
import { styles } from './Board.styles';

const PAGE_SIZE = 15;

export async function BoardList({ board, page }: { board: BoardConfig; page: number }) {
  const where = { board: board.id };
  const [total, posts] = await Promise.all([
    prisma.post.count({ where }),
    prisma.post.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      skip: (page - 1) * PAGE_SIZE,
      take: PAGE_SIZE,
    }),
  ]);
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const now = new Date();

  return (
    <div className={styles.wrap}>
      <BoardTitle board={board} />

      <table className={styles.table}>
        <thead>
          <tr>
            <th className={`${styles.th} ${styles.colNo}`}>No</th>
            <th className={styles.th}>제목</th>
            <th className={`${styles.th} ${styles.colAuthor}`}>글쓴이</th>
            <th className={`${styles.th} ${styles.colDate}`}>작성시간</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, i) => (
            <tr key={post.id}>
              <td className={`${styles.td} ${styles.colNo}`}>{total - (page - 1) * PAGE_SIZE - i}</td>
              <td className={styles.td}>
                <Link href={`/community/${board.id}/${post.id}`} className={styles.titleLink}>
                  {post.title}
                  {isNewPost(post.createdAt, now) && <span className={styles.badgeNew}>N</span>}
                </Link>
              </td>
              <td className={`${styles.td} ${styles.colAuthor} ${styles.subtle}`}>{post.author}</td>
              <td className={`${styles.td} ${styles.colDate} ${styles.subtle}`}>{formatRelative(post.createdAt, now)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {posts.length === 0 && <p className={styles.empty}>등록된 게시글이 없어요.</p>}

      <div className={styles.footer}>
        <span style={{ minWidth: 76 }} />
        <nav className={styles.pager}>
          {totalPages > 1 &&
            Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <Link key={p} href={`/community/${board.id}?page=${p}`} className={styles.pageLink(p === page)}>
                {p}
              </Link>
            ))}
        </nav>
        <Link href={`/community/${board.id}/write`} className={styles.btn}>
          글쓰기
        </Link>
      </div>
    </div>
  );
}
