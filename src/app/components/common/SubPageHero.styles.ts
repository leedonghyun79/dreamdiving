import { css } from '@styled-system/css';
import { flex } from '@styled-system/patterns';

export const styles = {
  container: (bgImage?: string) => flex({ 
    width: '100%', 
    height: '400px', 
    bg: bgImage ? 'transparent' : 'black',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    align: 'center', 
    justify: 'center',
    position: 'relative',
    overflow: 'hidden'
  }),
  overlay: css({
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0, 20, 40, 0.35)',
  }),
  title: css({ 
    color: 'white', 
    fontSize: '36px', 
    fontWeight: '800', 
    zIndex: 1 
  })
};
