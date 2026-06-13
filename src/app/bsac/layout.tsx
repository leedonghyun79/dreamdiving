import SubPageHero from '../components/common/SubPageHero';

export default function BsacLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SubPageHero />
      {children}
    </>
  );
}
