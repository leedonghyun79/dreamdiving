import SubPageHero from '../components/common/SubPageHero';

export default function CommunityLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SubPageHero />
      {children}
    </>
  );
}
