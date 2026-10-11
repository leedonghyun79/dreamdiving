export interface ScheduleProgram {
  id: string;
  nameEn: string;
  nameKo: string;
}

export const SCHEDULE_PROGRAMS: ScheduleProgram[] = [
  { id: 'experience', nameEn: 'Try Diving', nameKo: '체험 다이빙' },
  { id: 'discovery', nameEn: 'Discover Diver', nameKo: '디스커버리 다이버' },
  { id: 'ocean', nameEn: 'Ocean Diver', nameKo: '오션 다이버' },
  { id: 'ocean-adventure', nameEn: 'Ocean Adventure Diver', nameKo: '오션 어드벤쳐 다이버' },
  { id: 'advanced', nameEn: 'Advanced Ocean Diver', nameKo: '어드밴스드 오션 다이버' },
  { id: 'sports', nameEn: 'Sports Diver', nameKo: '스포츠 다이버' },
  { id: 'leader', nameEn: 'Dive Leader', nameKo: '다이브 리더' },
];

export interface ScheduleItem {
  id: string;
  program: string;
  date: string; // YYYY-MM-DD
  time: string | null;
  title: string;
  capacity: number | null;
  memo: string | null;
}
