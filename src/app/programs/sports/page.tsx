import { ProgramDetailLayout } from '../../components/domain/programs/ProgramDetailLayout';
import { ProgramDetail } from '../../types';

const programData: ProgramDetail = {
  id: 'sports',
  nameEn: 'Sports Diver',
  nameKo: '스포츠 다이버',
  description: '팀의 리더로 성장하기 위한 필수 코스!\n구조 다이빙과 응급 처치 기술을 습득하세요.',
  courseTitle: '스포츠 다이버 코스',
  courseDescriptions: [
    '스포츠 다이버 과정은 본인의 안전뿐만 아니라 다른 다이버의 안전까지 책임질 수 있는 구조 능력을 중점적으로 다룹니다.',
    '수면 및 수중에서의 다양한 조난 상황 시나리오를 바탕으로 한 실전 구조 훈련과 심폐소생술(CPR), 산소 공급기 사용법 등을 배웁니다.',
    '책임감 있고 성숙한 다이버로 거듭나며, 다이브 리더로 가기 위한 필수 자격을 갖추게 됩니다.',
  ],
  details: [
    { label: '사전 자격', value: '어드밴스드 오션 다이버 또는 동등 자격' },
    { label: '교육 내용', value: '레스큐 이론, 응급처치, 구조 해양 실습' },
    { label: '교육 시간', value: '이론 6시간 / 수영장 4시간 / 해양 4회' },
  ],
};

export default function SportsPage() {
  return <ProgramDetailLayout program={programData} />;
}
