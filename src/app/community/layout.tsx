import SubPageHero from '@/app/components/common/SubPageHero';

export default function CommunityLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div style={{ paddingTop: '100px' }}><SubPageHero bgImage={encodeURI('/assets/커뮤니티 히어로이미지.webp')} /></div>
      {children}
    </>
  );
}
