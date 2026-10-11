import { css } from '@styled-system/css';

export const styles = {
  nav: css({
    display: 'flex',
    flexDirection: { base: 'row', md: 'column' },
    flexWrap: 'wrap',
    gap: { base: '8px 16px', md: '22px' },
    w: { md: '300px' },
    flexShrink: 0,
    px: { base: '16px', md: '0' },
    pt: { base: '24px', md: '105px' },
    pl: { md: '15px' },
  }),
  link: (active: boolean) =>
    css({
      fontSize: '16px',
      fontWeight: active ? '700' : '400',
      color: active ? '#2f9de4' : '#267db6',
      textDecoration: 'none',
      _hover: { color: '#2f9de4' },
    }),
};
