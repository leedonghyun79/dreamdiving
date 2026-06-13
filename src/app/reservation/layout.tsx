import SubPageHero from '../components/common/SubPageHero';

export default function ReservationLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SubPageHero />
      {children}
    </>
  );
}
