import { BsacBlockData } from '@/app/constants/bsac';
import { BsacText } from './BsacText';
import { styles } from './Bsac.styles';

export function BsacBlock({ title, paragraphs, imageSide }: BsacBlockData) {
  return (
    <section className={styles.block(imageSide)}>
      <div className={styles.imageBox} style={{ aspectRatio: '5 / 4' }} />
      <BsacText title={title} paragraphs={paragraphs} />
    </section>
  );
}
