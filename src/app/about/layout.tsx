import SubPageHero from '../components/common/SubPageHero';

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SubPageHero />
      {children}
    </>
  );
}
