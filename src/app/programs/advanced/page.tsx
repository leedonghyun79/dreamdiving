import { ProgramDetailLayout } from '@/app/components/domain/programs/ProgramDetailLayout';
import { ProgramDetail } from '@/app/types';

const programData: ProgramDetail = {
  id: 'advanced',
  nameEn: 'Advanced Ocean Diver',
  nameKo: '어드밴스드 오션 다이버',
  description: '최대 수심 30m까지 한계를 돌파하는 심화 과정!\n수중 네비게이션과 정밀한 부력 조절을 마스터하세요.',
  courseTitle: '어드밴스드 오션 다이버 코스',
  courseDescriptions: [
    '깊은 수심에서의 다이빙 계획 수립, 질소 마취 대처법 및 비상시 구조 기술 등 더욱 안전하고 전문적인 다이빙 스킬을 배웁니다.',
    '수중 나침반을 이용한 정밀 네비게이션 훈련을 통해 방향 감각을 키우고 버디를 이끌 수 있는 능력을 배양합니다.',
    '수료 후 최대 30m 수심까지 접근이 가능해져 세계 유명 다이빙 포인트의 대부분을 즐길 수 있게 됩니다.',
  ],
  details: [
    { label: '사전 자격', value: '오션 다이버 이상, 수중 로그 20회 이상' },
    { label: '교육 내용', value: '심해 다이빙 이론, 네비게이션, 해양 실습' },
    { label: '교육 시간', value: '이론 4시간 / 수영장 2시간 / 해양 4회' },
  ],
};

export default function AdvancedPage() {
  return <ProgramDetailLayout program={programData} />;
}
