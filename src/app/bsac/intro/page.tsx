import { BSAC_INTRO_BLOCKS, BSAC_INTRO_LEAD } from '@/app/constants/bsac';
import { BsacLead } from '@/app/components/domain/bsac/BsacLead';
import { BsacBlock } from '@/app/components/domain/bsac/BsacBlock';
import { styles } from '@/app/components/domain/bsac/Bsac.styles';

export default function BsacIntroPage() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <BsacLead lead={BSAC_INTRO_LEAD} imageRatio="3 / 4" />
        <div className={styles.video} />
        {BSAC_INTRO_BLOCKS.map((b) => (
          <BsacBlock key={b.title} {...b} />
        ))}
      </div>
    </main>
  );
}
