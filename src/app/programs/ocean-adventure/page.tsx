import { ProgramDetailLayout } from '../../components/domain/programs/ProgramDetailLayout';
import { ProgramDetail } from '../../types';

const programData: ProgramDetail = {
  id: 'ocean-adventure',
  nameEn: 'Ocean Adventure Diver',
  nameKo: '오션 어드벤쳐 다이버',
  description: '다양한 해양 환경에서의 경험을 넓히는 어드벤처 과정!\n야간 다이빙, 난파선 다이빙 등 새로운 모험에 도전하세요.',
  courseTitle: '오션 어드벤쳐 다이버 코스',
  courseDescriptions: [
    '오션 다이버 과정에서 배운 기술을 바탕으로, 좀 더 새롭고 도전적인 환경(야간, 조류, 보트 다이빙 등)에 적응하는 능력을 기릅니다.',
    '각종 스페셜티 맛보기 형식으로 진행되며, 다양한 장비 활용법과 향상된 중성 부력 기술을 연마하게 됩니다.',
    '더 깊고 넓은 바다를 탐험하기 위한 훌륭한 디딤돌이 되는 과정입니다.',
  ],
  details: [
    { label: '사전 자격', value: '오션 다이버 또는 동등 자격 보유자' },
    { label: '교육 내용', value: '어드벤처 다이빙 이론 및 해양 실습' },
    { label: '교육 시간', value: '이론 2시간 / 해양 3회' },
  ],
};

export default function OceanAdventurePage() {
  return <ProgramDetailLayout program={programData} />;
}
