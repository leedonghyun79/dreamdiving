'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { getAdminPassword, clearAdminPassword } from '@/lib/adminClient';
import { BoardConfig } from '@/app/constants/board';
import { BoardTitle } from './BoardTitle';
import { styles } from './Board.styles';

interface Props {
  board: BoardConfig;
  post?: { id: string; title: string; content: string };
}

export function PostForm({ board, post }: Props) {
  const router = useRouter();
  const [title, setTitle] = useState(post?.title ?? '');
  const [content, setContent] = useState(post?.content ?? '');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!title.trim() || !content.trim()) return setError('제목과 내용을 입력해주세요.');
    const pw = getAdminPassword();
    if (!pw) return;

    setBusy(true);
    try {
      const res = await fetch(post ? `/api/posts/${post.id}` : '/api/posts', {
        method: post ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json', 'x-admin-password': pw },
        body: JSON.stringify({ board: board.id, title, content }),
      });
      if (res.status === 401) {
        clearAdminPassword();
        return setError('비밀번호가 올바르지 않아요.');
      }
      if (!res.ok) return setError('저장에 실패했어요. 다시 시도해주세요.');
      const saved = await res.json();
      router.push(`/community/${board.id}/${saved.id}`);
      router.refresh();
    } catch {
      setError('저장에 실패했어요. 다시 시도해주세요.');
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className={styles.wrap}>
      <BoardTitle board={board} />
      <form className={styles.form} onSubmit={submit}>
        <input
          className={styles.input}
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={200}
        />
        <textarea
          className={styles.textarea}
          placeholder="내용을 입력하세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        {error && <p className={styles.error}>{error}</p>}
        <div className={styles.formActions}>
          <Link href={post ? `/community/${board.id}/${post.id}` : `/community/${board.id}`} className={styles.btn}>
            취소
          </Link>
          <button type="submit" className={`${styles.btn} ${styles.btnPrimary}`} disabled={busy}>
            {post ? '수정' : '등록'}
          </button>
        </div>
      </form>
    </div>
  );
}
