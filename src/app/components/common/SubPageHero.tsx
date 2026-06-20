import { styles } from './SubPageHero.styles';

interface SubPageHeroProps {
  title?: string;
  bgImage?: string;
}

export default function SubPageHero({ title, bgImage }: SubPageHeroProps) {
  return (
    <div 
      className={styles.container(bgImage)}
      style={{ backgroundImage: bgImage ? `url(${bgImage})` : 'none' }}
    >
      {/* 배경 이미지가 있을 경우 어두운 오버레이 추가 */}
      {bgImage && (
        <div className={styles.overlay} />
      )}
      {title && (
        <h1 className={styles.title}>
          {title}
        </h1>
      )}
    </div>
  );
}
