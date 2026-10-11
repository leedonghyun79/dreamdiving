const pad = (n: number) => String(n).padStart(2, '0');

export function formatRelative(date: Date, now = new Date()) {
  const min = Math.floor((now.getTime() - date.getTime()) / 60000);
  if (min < 1) return '방금';
  if (min < 60) return `${min}분 전`;
  if (min < 60 * 24) return `${Math.floor(min / 60)}시간 전`;
  return `${date.getFullYear()}.${pad(date.getMonth() + 1)}.${pad(date.getDate())}`;
}

export const isNewPost = (date: Date, now = new Date()) =>
  now.getTime() - date.getTime() < 1000 * 60 * 60 * 24 * 2;
