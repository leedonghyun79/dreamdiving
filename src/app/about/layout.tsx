import SubPageHero from '@/app/components/common/SubPageHero';

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div style={{ paddingTop: '100px' }}>
        <SubPageHero bgImage="/assets/main/49eab77bb0b32.jpg" />
      </div>
      {children}
    </>
  );
}
