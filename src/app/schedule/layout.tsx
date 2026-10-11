import SubPageHero from '@/app/components/common/SubPageHero';
import { ScheduleSidebar } from '@/app/components/domain/schedule/ScheduleSidebar';
import { styles } from './layout.styles';

export default function ScheduleLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SubPageHero />
      <div className={styles.wrap}>
        <ScheduleSidebar />
        <div className={styles.content}>{children}</div>
      </div>
    </>
  );
}
