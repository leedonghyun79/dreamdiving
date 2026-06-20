import SubPageHero from '@/app/components/common/SubPageHero';

export default function BsacLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SubPageHero />
      {children}
    </>
  );
}
