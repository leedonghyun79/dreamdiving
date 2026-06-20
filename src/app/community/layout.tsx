import SubPageHero from '@/app/components/common/SubPageHero';

export default function CommunityLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SubPageHero />
      {children}
    </>
  );
}
