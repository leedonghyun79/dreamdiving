import SubPageHero from '../components/common/SubPageHero';

export default function FacilityLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SubPageHero />
      {children}
    </>
  );
}
