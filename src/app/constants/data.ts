// src/app/constants/data.ts
import { SlideData, ProgramCard, ReviewCard, PartnerLogo, InstructorCard } from '@/app/types';

export const SLIDES: SlideData[] = [
  {
    main: '바닷속을 제대로 즐기는 첫걸음',
    sub: '처음이라 걱정되셔도 괜찮습니다. 10년 이상 경력의 강사진이 함께합니다.',
    btnText: '체험 다이빙 신청하기',
    btnHref: '/programs/experience',
  },
  {
    main: 'BSAC 공인 스쿠버다이빙 자격증, 드림다이브와 함께',
    sub: '처음부터 끝까지 검증된 BSAC 단계별 커리큘럼을 경험하세요.',
    btnText: '자격증 과정 알아보기',
    btnHref: '/programs',
  },
];

export const PROGRAMS: ProgramCard[] = [
  { title: '오션 다이버', subtitle: 'Ocean Diver', href: '/programs/ocean', img: encodeURI('/assets/main/오션 다이버.jpg') },
  { title: '오션 어드벤쳐 다이버', subtitle: 'Ocean Adventure Diver', href: '/programs/ocean-adventure', img: encodeURI('/assets/main/오션 어드벤쳐 다이버.jpg') },
  { title: '어드밴스드 오션 다이버', subtitle: 'Advanced Ocean Diver', href: '/programs/advanced', img: encodeURI('/assets/main/어드밴스드 오션 다이버.jpg') },
  { title: '스포츠 다이버', subtitle: 'Sports Diver', href: '/programs/sports', img: encodeURI('/assets/main/스포츠 다이버.jpg') },
  { title: '다이버 리더', subtitle: 'Diver Leader', href: '/programs/leader', img: encodeURI('/assets/main/다이버 리더.jpg') },
];

export const GALLERY_IMAGES = [
  '/assets/main/49eab77bb0b32.jpg',
  encodeURI('/assets/main/오션 다이버.jpg'),
  encodeURI('/assets/main/스포츠 다이버.jpg'),
  encodeURI('/assets/main/어드밴스드 오션 다이버.jpg'),
  '/assets/main/fb5797dd599e9.jpg',
  encodeURI('/assets/main/다이버 리더.jpg'),
  encodeURI('/assets/main/오션 어드벤쳐 다이버.jpg'),
  '/assets/main/1088f588f6785.jpg',
  '/assets/main/16aaa59fbd5a9.jpg',
  '/assets/main/8521cb2ab2e41.jpg',
];

export const PARTNER_LOGOS: PartnerLogo[] = [
  { src: '/assets/main/bsac.png', alt: 'BSAC' },
  { src: '/assets/main/nllgrobal.png', alt: 'NL Global' },
  { src: '/assets/main/juno hair.png', alt: 'Juno Hair' },
  { src: '/assets/main/roral body.png', alt: 'Royal Body' },
  { src: encodeURI('/assets/main/profit 프로핏.png'), alt: 'Profit 프로핏' },
];

export const INSTRUCTORS: InstructorCard[] = [
  {
    name: '이태식',
    title: '대표 강사',
    description: '10년 이상의 다이빙 경력으로 체계적이고 안전한 교육을 제공합니다.',
    img: '/assets/main/49eab77bb0b32.jpg',
  },
  {
    name: '류재은',
    title: '강사',
    description: 'BSAC 공인 강사로서 친절하고 상세한 교육 방식이 특징입니다.',
    img: '/assets/main/fb5797dd599e9.jpg',
  },
  {
    name: '이용희',
    title: '원장',
    description: '드림다이브의 방향성을 이끌며 최고 수준의 교육 환경을 제공합니다.',
    img: '/assets/main/1088f588f6785.jpg',
  },
];

export const REVIEWS: ReviewCard[] = [
  {
    headline: '"처음인데도 하나도 안 무서웠어요"',
    body: '체험다이빙 처음 해봤는데 강사님이 처음부터 끝까지 정말 친절하게 설명해 주셨어요. 물속에 들어가기 전에 충분히 연습도 시켜주시고, 덕분에 긴장이 풀렸어요. 수중 세계가 이렇게 아름다운 줄 몰랐는데 정말 잊지 못할 경험이었습니다!',
    name: '김민지',
    program: '체험다이빙',
  },
  {
    headline: '"1:1 수업처럼 꼼꼼하게 봐주셨어요"',
    body: 'BSAC 오션 다이버 과정을 수료했어요. 강사님이 수강생 한 명 한 명 개인 수준에 맞게 가르쳐 주셔서 부담 없이 따라갈 수 있었습니다. K26 풀장 시설도 정말 잘 되어 있고, 강릉 해양 실습까지 경험이 알차게 구성되어 있어요.',
    name: '박준혁',
    program: '오션 다이버',
  },
  {
    headline: '"자격증 딸 수 있을까 걱정했는데 합격했어요"',
    body: '수영도 못하는 편이라 걱정이 많았는데, 강사님이 기초부터 차근차근 알려주시고 카카오톡으로도 궁금한 점 바로바로 답해주셔서 든든했어요. 어드밴스드 오션 다이버 자격증을 취득하고 나니 뿌듯함이 엄청납니다!',
    name: '이서연',
    program: '어드밴스드 오션 다이버',
  },
  {
    headline: '"타 지역에서 왔는데도 전혀 불편하지 않았어요"',
    body: '서울에서 올라왔는데 강사님이 숙소 정보부터 일정까지 세심하게 안내해 주셨어요. 강릉 해양 실습 포인트도 정말 좋았고, 시야도 맑아서 너무 만족스러웠습니다. 다음에 스포츠 다이버 과정도 꼭 여기서 하고 싶어요.',
    name: '최동훈',
    program: '오션 어드벤처 다이버',
  },
  {
    headline: '"아이와 함께 온 체험이 최고의 추억이 됐어요"',
    body: '초등학생 아이와 함께 가족 체험다이빙을 했어요. 아이가 물을 무서워했는데 강사님이 정말 인내심 있게 달래주시고 이끌어 주셔서 결국 바닷속을 헤엄치더라고요. 아이가 지금도 또 가고 싶다고 졸라요. 감사합니다!',
    name: '정유진',
    program: '체험다이빙',
  },
  {
    headline: '"디스커버리 과정이 생각보다 훨씬 체계적이에요"',
    body: '짧은 과정이라 가볍게 생각했는데, 이론부터 실기까지 커리큘럼이 너무 체계적으로 잘 짜여 있어 놀랐어요. 강사님도 BSAC 공인 강사님이시라 믿음이 갔고, 수료 후 바로 다음 과정 등록했습니다. 강력 추천해요!',
    name: '오승환',
    program: '디스커버리 다이버',
  },
];
