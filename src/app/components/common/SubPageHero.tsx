import { css } from '../../../../styled-system/css';
import { flex } from '../../../../styled-system/patterns';

interface SubPageHeroProps {
  title?: string;
  bgImage?: string;
}

export default function SubPageHero({ title, bgImage }: SubPageHeroProps) {
  return (
    <div 
      className={flex({ 
        width: '100%', 
        height: '400px', 
        bg: bgImage ? 'transparent' : 'black',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        align: 'center', 
        justify: 'center',
        position: 'relative',
        overflow: 'hidden'
      })}
      style={{ backgroundImage: bgImage ? `url(${bgImage})` : 'none' }}
    >
      {/* 배경 이미지가 있을 경우 어두운 오버레이 추가 */}
      {bgImage && (
        <div
          className={css({
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 20, 40, 0.35)',
          })}
        />
      )}
      {title && (
        <h1 className={css({ color: 'white', fontSize: '36px', fontWeight: '800', zIndex: 1 })}>
          {title}
        </h1>
      )}
    </div>
  );
}
