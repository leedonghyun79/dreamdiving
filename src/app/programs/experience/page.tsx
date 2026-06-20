import { ProgramDetailLayout } from '@/app/components/domain/programs/ProgramDetailLayout';
import { ProgramDetail } from '@/app/types';

const experienceProgram: ProgramDetail = {
  id: 'experience',
  nameEn: 'Try Diving',
  nameKo: '체험 다이빙',
  description: '신비로운 바닷속 세계로 떠나는 특별한 경험!\n안전하고 즐겁게 체험 다이빙을 즐겨보세요.',
  courseTitle: '체험 다이빙 코스',
  courseDescriptions: [
    'BSAC 오션 다이버 교육과정을 이용해서 다이빙에 대해 경험하고 이해할 수 있는 기회를 제공합니다.',
    '다이빙 자격증 없이도 참여 가능하며, 약 2시간동안 수중 체험을 통해 다이빙의 즐거움을 느껴보세요.',
    '별도의 사전 교육 없이 간단한 브리핑 후 바로 입수하여 아름다운 해양 생물들과 만나는 특별한 경험을 제공합니다.',
  ],
  details: [
    { label: '사전 자격', value: '만 12세이상(보호자 동의), 건강 진술서' },
    { label: '교육 내용', value: '체험 다이빙' },
    { label: '교육 시간', value: '이론 2시간 / 실기 2시간' },
  ],
};

export default function ExperiencePage() {
  return <ProgramDetailLayout program={experienceProgram} />;
}
