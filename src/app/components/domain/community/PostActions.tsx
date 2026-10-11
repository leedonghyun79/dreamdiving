'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getAdminPassword, clearAdminPassword } from '@/lib/adminClient';
import { styles } from './Board.styles';

export function PostActions({ boardId, postId }: { boardId: string; postId: string }) {
  const router = useRouter();

  const remove = async () => {
    if (!window.confirm('이 글을 삭제할까요?')) return;
    const pw = getAdminPassword();
    if (!pw) return;
    const res = await fetch(`/api/posts/${postId}`, { method: 'DELETE', headers: { 'x-admin-password': pw } });
    if (res.status === 401) {
      clearAdminPassword();
      return window.alert('비밀번호가 올바르지 않아요.');
    }
    if (!res.ok) return window.alert('삭제에 실패했어요.');
    router.push(`/community/${boardId}`);
    router.refresh();
  };

  return (
    <>
      <Link href={`/community/${boardId}/${postId}/edit`} className={styles.actionBtn}>
        수정
      </Link>
      <button type="button" className={styles.actionBtn} onClick={remove}>
        지우기
      </button>
    </>
  );
}
