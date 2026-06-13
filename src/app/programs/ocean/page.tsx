import { ProgramDetailLayout } from '../../components/domain/programs/ProgramDetailLayout';
import { ProgramDetail } from '../../types';

const programData: ProgramDetail = {
  id: 'ocean',
  nameEn: 'Ocean Diver',
  nameKo: '오션 다이버',
  description: '독립적인 다이버로 성장하기 위한 첫 정규 자격증 코스!\n전 세계 어디서나 통용되는 자격을 취득하세요.',
  courseTitle: '오션 다이버 코스',
  courseDescriptions: [
    'BSAC 오션 다이버 코스는 초보자가 안전하게 펀 다이빙을 즐길 수 있도록 필수 지식과 기술을 깊이 있게 다루는 핵심 과정입니다.',
    '다양한 수중 환경에 대처할 수 있는 실전 스킬을 반복 숙달하며, 다이빙 계획 수립 및 버디 시스템의 중요성을 배웁니다.',
    '수료 후 최대 수심 20m까지 비슷한 수준의 다이버와 함께 독립적으로 다이빙을 즐길 수 있는 자격이 주어집니다.',
  ],
  details: [
    { label: '사전 자격', value: '만 12세 이상, 건강 진단서' },
    { label: '교육 내용', value: '이론 교육, 수영장 실습, 해양 실습' },
    { label: '교육 시간', value: '이론 6시간 / 수영장 5시간 / 해양 4회' },
  ],
};

export default function OceanPage() {
  return <ProgramDetailLayout program={programData} />;
}
