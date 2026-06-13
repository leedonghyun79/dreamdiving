import { ProgramDetailLayout } from '../../components/domain/programs/ProgramDetailLayout';
import { ProgramDetail } from '../../types';

const programData: ProgramDetail = {
  id: 'leader',
  nameEn: 'Dive Leader',
  nameKo: '다이브 리더',
  description: '프로 다이버의 시작, 그룹 가이딩과 다이브 마스터의 역할!\n다이빙 투어를 기획하고 리딩할 수 있는 전문가가 되세요.',
  courseTitle: '다이브 리더 코스',
  courseDescriptions: [
    '다이빙 운영 및 관리, 날씨와 해양 조건 분석, 그룹 통제 등 프로페셔널 다이버로서 갖춰야 할 지도력과 실무 능력을 기릅니다.',
    '실제 다이빙 현장에서 브리핑을 진행하고 투어를 리딩하는 실습을 통해 실전 감각을 극대화합니다.',
    '수료 시 전 세계 다이빙 리조트에서 가이드로 활동할 수 있으며, 강사 과정으로 진입할 수 있는 최고의 단계입니다.',
  ],
  details: [
    { label: '사전 자격', value: '스포츠 다이버 이상, 로그 50회 이상' },
    { label: '교육 내용', value: '다이빙 관리, 그룹 가이딩, 현장 실습' },
    { label: '교육 시간', value: '이론 8시간 / 수영장 4시간 / 해양 6회 이상' },
  ],
};

export default function LeaderPage() {
  return <ProgramDetailLayout program={programData} />;
}
