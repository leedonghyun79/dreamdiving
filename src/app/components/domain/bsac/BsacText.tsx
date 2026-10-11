import { RichText } from './RichText';
import { styles } from './Bsac.styles';

export function BsacText({ title, paragraphs }: { title: string; paragraphs: string[] }) {
  return (
    <div className={styles.textCol}>
      <h3 className={styles.title}>{title}</h3>
      {paragraphs.map((p, i) => (
        <p key={i} className={styles.p}>
          <RichText text={p} />
        </p>
      ))}
    </div>
  );
}
