import { BSAC_SUBTITLE, BsacBlockData } from '@/app/constants/bsac';
import { BsacText } from './BsacText';
import { styles } from './Bsac.styles';

// 상단 BSAC KOREA 로고 + 첫 소개 블록 (텍스트 좌 / 이미지 우)
export function BsacLead({
  lead,
  imageRatio,
}: {
  lead: Pick<BsacBlockData, 'title' | 'paragraphs'>;
  imageRatio: string;
}) {
  return (
    <section className={styles.lead}>
      <div>
        <h2 className={styles.logo}>BSAC KOREA</h2>
        <p className={styles.subtitle}>{BSAC_SUBTITLE}</p>
        <BsacText {...lead} />
      </div>
      <div className={styles.imageBox} style={{ aspectRatio: imageRatio }} />
    </section>
  );
}
