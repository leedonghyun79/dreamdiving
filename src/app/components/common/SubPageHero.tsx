import { css } from '../../../../styled-system/css';
import { flex } from '../../../../styled-system/patterns';

interface SubPageHeroProps {
  title?: string;
}

export default function SubPageHero({ title }: SubPageHeroProps) {
  return (
    <div 
      className={flex({ 
        width: '100%', 
        height: '400px', 
        bg: 'black', 
        align: 'center', 
        justify: 'center',
        position: 'relative'
      })}
    >
      {/* Placeholder for future background image */}
      {title && (
        <h1 className={css({ color: 'white', fontSize: '36px', fontWeight: '800', zIndex: 1 })}>
          {title}
        </h1>
      )}
    </div>
  );
}
