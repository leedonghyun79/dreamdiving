import SubPageHero from '@/app/components/common/SubPageHero';

export default function BsacLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div style={{ paddingTop: '100px' }}><SubPageHero bgImage={encodeURI('/assets/basc 단체/basc 단체 히어로 이미지.webp')} /></div>
      {children}
    </>
  );
}
