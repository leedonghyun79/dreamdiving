import { BSAC_FEATURES_BLOCKS, BSAC_FEATURES_LEAD } from '@/app/constants/bsac';
import { BsacLead } from '@/app/components/domain/bsac/BsacLead';
import { BsacBlock } from '@/app/components/domain/bsac/BsacBlock';
import { styles } from '@/app/components/domain/bsac/Bsac.styles';

export default function BsacFeaturesPage() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <BsacLead lead={BSAC_FEATURES_LEAD} imageRatio="1 / 1" />
        {BSAC_FEATURES_BLOCKS.map((b) => (
          <BsacBlock key={b.title} {...b} />
        ))}
      </div>
    </main>
  );
}
