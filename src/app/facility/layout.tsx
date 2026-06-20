import SubPageHero from '@/app/components/common/SubPageHero';

export default function FacilityLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SubPageHero />
      {children}
    </>
  );
}
