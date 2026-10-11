import { css } from '@styled-system/css';

export const styles = {
  wrap: css({
    display: 'flex',
    maxW: '1280px',
    mx: 'auto',
    minH: '700px',
    flexDirection: { base: 'column', md: 'row' },
  }),
  content: css({
    flex: 1,
    minW: 0,
    px: { base: '16px', md: '15px' },
    py: { base: '40px', md: '90px' },
    borderLeft: { md: '1px solid #ddd' },
  }),
};
