import { css } from '@styled-system/css';
import { flex } from '@styled-system/patterns';

export const styles = {
  container: (bgImage?: string) => flex({ 
    width: '100%', 
    height: '410px', 
    bg: bgImage ? 'transparent' : 'black',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    align: 'center', 
    justify: 'center',
    position: 'relative',
    overflow: 'hidden'
  }),

  title: css({ 
    color: 'white', 
    fontSize: '36px', 
    fontWeight: '800', 
    zIndex: 1 
  })
};
