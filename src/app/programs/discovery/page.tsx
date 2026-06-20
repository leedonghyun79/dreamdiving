import { ProgramDetailLayout } from '@/app/components/domain/programs/ProgramDetailLayout';
import { ProgramDetail } from '@/app/types';

const programData: ProgramDetail = {
  id: 'discovery',
  nameEn: 'Discovery Diver',
  nameKo: '디스커버리 다이버',
  description: '다이빙의 기초를 배우고 물에 대한 자신감을 기르는 과정!\n체계적인 교육으로 안전하게 다이빙에 입문하세요.',
  courseTitle: '디스커버리 다이버 코스',
  courseDescriptions: [
    '다이빙을 처음 접하는 분들을 위해 설계된 입문 과정으로, 스쿠버 장비의 기본 사용법과 수중 적응 훈련을 진행합니다.',
    '수영장(또는 제한 수역)에서 필수 스킬을 연습하고, 바다에서 안전하게 첫 다이빙을 경험할 수 있습니다.',
    '본 과정을 수료하시면 BSAC 디스커버리 다이버 자격증이 발급되며, 향후 오션 다이버 과정으로 자연스럽게 이어질 수 있습니다.',
  ],
  details: [
    { label: '사전 자격', value: '만 12세 이상, 건강 진단서' },
    { label: '교육 내용', value: '이론 교육, 수영장 실습, 해양 실습' },
    { label: '교육 시간', value: '이론 3시간 / 수영장 2시간 / 해양 2회' },
  ],
};

export default function DiscoveryPage() {
  return <ProgramDetailLayout program={programData} />;
}
