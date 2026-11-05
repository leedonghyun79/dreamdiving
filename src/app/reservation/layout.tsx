import SubPageHero from '@/app/components/common/SubPageHero';

export default function ReservationLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div style={{ paddingTop: '100px' }}><SubPageHero bgImage={encodeURI('/assets/예약하기 히어로이미지.webp')} /></div>
      {children}
    </>
  );
}
