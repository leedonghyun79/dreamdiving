import SubPageHero from '@/app/components/common/SubPageHero';

export default function FacilityLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div style={{ paddingTop: '100px' }}><SubPageHero bgImage={encodeURI('/assets/시설 안내/시설 안내 히어로 이미지.webp')} /></div>
      {children}
    </>
  );
}
