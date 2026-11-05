import { BsacBlockData } from '@/app/constants/bsac';
import { BsacText } from './BsacText';
import { styles } from './Bsac.styles';

export function BsacBlock({ title, paragraphs, imageSide, image }: BsacBlockData) {
  return (
    <section className={styles.block(imageSide)}>
      <div className={styles.imageBox} style={{ aspectRatio: '5 / 4', overflow: 'hidden' }}>
        {image && (
          <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        )}
      </div>
      <BsacText title={title} paragraphs={paragraphs} />
    </section>
  );
}
