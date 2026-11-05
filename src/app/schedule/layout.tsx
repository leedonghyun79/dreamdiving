import SubPageHero from '@/app/components/common/SubPageHero';
import { ScheduleSidebar } from '@/app/components/domain/schedule/ScheduleSidebar';
import { styles } from './layout.styles';

export default function ScheduleLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div style={{ paddingTop: '100px' }}><SubPageHero bgImage={encodeURI('/assets/프로그램 일정 히어로이미지.webp')} /></div>
      <div className={styles.wrap}>
        <ScheduleSidebar />
        <div className={styles.content}>{children}</div>
      </div>
    </>
  );
}
