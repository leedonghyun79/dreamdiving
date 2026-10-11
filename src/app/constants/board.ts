export interface BoardConfig {
  id: string;
  en: string;
  ko: string;
}

export const BOARDS: BoardConfig[] = [
  { id: 'notice', en: 'Notice', ko: '공지사항' },
  { id: 'reviews', en: 'Review', ko: '고객후기' },
];

export const getBoard = (id: string) => BOARDS.find((b) => b.id === id);
