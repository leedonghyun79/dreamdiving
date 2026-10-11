'use client';

import { useEffect, useState } from 'react';
import { ScheduleProgram, ScheduleItem } from '@/app/constants/schedule';
import { styles } from './ScheduleCalendar.styles';
import { getAdminPassword, clearAdminPassword } from '@/lib/adminClient';

const DOW = ['일', '월', '화', '수', '목', '금', '토'];
const MAX_CHIPS = 3;

const pad = (n: number) => String(n).padStart(2, '0');
const toYmd = (y: number, m: number, d: number) => `${y}-${pad(m + 1)}-${pad(d)}`;
const dowColor = (i: number) => (i === 0 ? '#e55' : i === 6 ? '#4a8bc9' : '#444');
const nowTime = () => {
  const d = new Date();
  return `${pad(d.getHours())}:${pad(d.getMinutes())}`;
};

export function ScheduleCalendar({ program }: { program: ScheduleProgram }) {
  const [now] = useState(() => new Date());
  const today = toYmd(now.getFullYear(), now.getMonth(), now.getDate());
  const [view, setView] = useState({ y: now.getFullYear(), m: now.getMonth() });
  const [items, setItems] = useState<ScheduleItem[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    const month = `${view.y}-${pad(view.m + 1)}`;
    let cancelled = false;
    fetch(`/api/schedule?program=${program.id}&month=${month}`)
      .then((res) => (res.ok ? res.json() : []))
      .catch(() => [])
      .then((data) => !cancelled && setItems(data));
    return () => {
      cancelled = true;
    };
  }, [view, program.id, reloadKey]);

  const reload = () => setReloadKey((k) => k + 1);

  const moveMonth = (delta: number) => {
    const d = new Date(view.y, view.m + delta, 1);
    setView({ y: d.getFullYear(), m: d.getMonth() });
  };

  const firstDow = new Date(view.y, view.m, 1).getDay();
  const weeks = Math.ceil((firstDow + new Date(view.y, view.m + 1, 0).getDate()) / 7);
  // 이전/다음 달 날짜까지 채운 6주 이하 그리드
  const cells = Array.from({ length: weeks * 7 }, (_, i) => {
    const d = new Date(view.y, view.m, 1 - firstDow + i);
    return { ymd: toYmd(d.getFullYear(), d.getMonth(), d.getDate()), day: d.getDate(), muted: d.getMonth() !== view.m };
  });

  const byDate = new Map<string, ScheduleItem[]>();
  items.forEach((it) => byDate.set(it.date, [...(byDate.get(it.date) ?? []), it]));

  return (
    <section>
      <div className={styles.head}>
        <p className={styles.en}>{program.nameEn}</p>
        <h2 className={styles.title}>{program.nameKo} 일정</h2>
      </div>

      <div className={styles.toolbar}>
        <span className={styles.month}>{view.y}년 {pad(view.m + 1)}월</span>
        <div className={styles.navBtns}>
          <button type="button" className={styles.navBtn} onClick={() => moveMonth(-1)} aria-label="이전 달">‹</button>
          <button type="button" className={styles.navBtn} onClick={() => moveMonth(1)} aria-label="다음 달">›</button>
        </div>
      </div>

      <div className={styles.scroller}>
        <div className={styles.grid}>
          {DOW.map((d, i) => (
            <div key={d} className={styles.dow(dowColor(i))}>{d}</div>
          ))}
          {cells.map((c, i) => {
            const list = byDate.get(c.ymd) ?? [];
            const isToday = c.ymd === today;
            return (
              <button key={c.ymd} type="button" className={styles.cell(c.muted, isToday)} onClick={() => setSelected(c.ymd)}>
                <span className={styles.day(dowColor(i % 7), isToday)}>{c.day}</span>
                {list.slice(0, MAX_CHIPS).map((it) => (
                  <span key={it.id} className={styles.chip}>{it.time ? `${it.time} ` : ''}{it.title}</span>
                ))}
                {list.length > MAX_CHIPS && <span className={styles.more}>+{list.length - MAX_CHIPS}개 더보기</span>}
              </button>
            );
          })}
        </div>
      </div>

      {selected && (
        <ScheduleModal
          program={program}
          date={selected}
          items={byDate.get(selected) ?? []}
          onClose={() => setSelected(null)}
          onChanged={reload}
        />
      )}
    </section>
  );
}

interface ModalProps {
  program: ScheduleProgram;
  date: string;
  items: ScheduleItem[];
  onClose: () => void;
  onChanged: () => void;
}

function ScheduleModal({ program, date, items, onClose, onChanged }: ModalProps) {
  const [title, setTitle] = useState(program.nameKo);
  const [time, setTime] = useState(nowTime);
  const [capacity, setCapacity] = useState('1');
  const [memo, setMemo] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const request = async (url: string, init: RequestInit) => {
    const pw = getAdminPassword();
    if (!pw) return null;
    const res = await fetch(url, { ...init, headers: { 'Content-Type': 'application/json', 'x-admin-password': pw } });
    if (res.status === 401) {
      clearAdminPassword();
      setError('비밀번호가 올바르지 않아요.');
      return null;
    }
    if (!res.ok) {
      setError('요청에 실패했어요. 다시 시도해주세요.');
      return null;
    }
    return res;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!title.trim()) return setError('제목을 입력해주세요.');
    setBusy(true);
    const res = await request('/api/schedule', {
      method: 'POST',
      body: JSON.stringify({
        program: program.id,
        date,
        title,
        time,
        capacity: capacity ? Number(capacity) : null,
        memo,
      }),
    });
    setBusy(false);
    if (res) {
      setTime(nowTime());
      setCapacity('1');
      setMemo('');
      onChanged();
    }
  };

  const remove = async (id: string) => {
    if (!window.confirm('이 일정을 삭제할까요?')) return;
    setError('');
    const res = await request(`/api/schedule/${id}`, { method: 'DELETE' });
    if (res) onChanged();
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <h3 className={styles.modalTitle}>{date.replace(/-/g, '.')} 일정</h3>

        {items.length > 0 && (
          <ul className={styles.list}>
            {items.map((it) => (
              <li key={it.id} className={styles.item}>
                <div>
                  <div>{it.time ? `${it.time} ` : ''}{it.title}</div>
                  <div className={styles.itemMeta}>
                    {[it.capacity ? `정원 ${it.capacity}명` : '', it.memo].filter(Boolean).join(' · ')}
                  </div>
                </div>
                <button type="button" className={styles.delBtn} onClick={() => remove(it.id)}>삭제</button>
              </li>
            ))}
          </ul>
        )}

        <form className={styles.form} onSubmit={submit}>
          <label className={styles.label}>
            제목
            <input className={styles.input} value={title} onChange={(e) => setTitle(e.target.value)} />
          </label>
          <div className={styles.row}>
            <label className={styles.label}>
              시간
              <input className={styles.input} type="time" value={time} onChange={(e) => setTime(e.target.value)} />
            </label>
            <label className={styles.label}>
              정원(명)
              <input className={styles.input} type="number" min={1} value={capacity} onChange={(e) => setCapacity(e.target.value.replace(/\D/g, '').replace(/^0+/, ''))} onBlur={() => !capacity && setCapacity('1')} />
            </label>
          </div>
          <label className={styles.label}>
            메모
            <input className={styles.input} value={memo} onChange={(e) => setMemo(e.target.value)} />
          </label>
          {error && <p className={styles.error}>{error}</p>}
          <div className={styles.actions}>
            <button type="button" className={styles.btn(false)} onClick={onClose}>닫기</button>
            <button type="submit" className={styles.btn(true)} disabled={busy}>일정 등록</button>
          </div>
        </form>
      </div>
    </div>
  );
}
