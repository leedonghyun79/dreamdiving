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

      {title && (
        <h1 className={styles.title}>
          {title}
        </h1>
      )}
    </div>
  );
}
