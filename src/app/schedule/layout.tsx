import SubPageHero from '../components/common/SubPageHero';

export default function ScheduleLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SubPageHero />
      {children}
    </>
  );
}
