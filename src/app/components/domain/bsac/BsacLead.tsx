import { BSAC_SUBTITLE, BsacBlockData } from '@/app/constants/bsac';
import { BsacText } from './BsacText';
import { styles } from './Bsac.styles';

// 상단 BSAC KOREA 로고 + 첫 소개 블록 (텍스트 좌 / 이미지 우)
export function BsacLead({
  lead,
  imageRatio,
  image,
}: {
  lead: Pick<BsacBlockData, 'title' | 'paragraphs'>;
  imageRatio: string;
  image?: string;
}) {
  return (
    <section className={styles.lead}>
      <div>
        <h2 className={styles.logo} style={{ margin: 0 }}>
          <img
            src={encodeURI('/assets/basc 단체/소개/BSAC_KOREA 상단.png')}
            alt="BSAC KOREA"
            style={{ display: 'block', width: 'min(100%, 420px)', height: 'auto' }}
          />
        </h2>
        <p className={styles.subtitle}>{BSAC_SUBTITLE}</p>
        <BsacText {...lead} />
      </div>
      <div className={styles.imageBox} style={{ aspectRatio: imageRatio, overflow: 'hidden' }}>
        {image && (
          <img src={image} alt={lead.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        )}
      </div>
    </section>
  );
}
