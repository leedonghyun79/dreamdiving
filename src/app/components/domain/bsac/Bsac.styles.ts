import { css } from '@styled-system/css';

const split = {
  display: 'grid',
  gridTemplateColumns: { base: '1fr', md: '1fr 1fr' },
  gap: { base: '32px', md: '60px' },
  alignItems: 'center',
} as const;

export const styles = {
  page: css({ w: '100%', bg: 'white', pt: { base: '60px', md: '90px' }, pb: { base: '60px', md: '120px' } }),
  inner: css({
    w: '100%',
    maxW: '1200px',
    mx: 'auto',
    px: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: { base: '70px', md: '130px' },
  }),

  lead: css(split),
  logo: css({
    fontSize: { base: '52px', md: '84px' },
    lineHeight: 1,
    letterSpacing: '-0.04em',
    fontWeight: '400',
    fontFamily: "Georgia, 'Times New Roman', serif",
    color: '#1d3557',
  }),
  subtitle: css({ fontSize: '19px', color: '#888', mt: '8px', mb: { base: '40px', md: '70px' } }),

  block: (imageSide: 'left' | 'right') =>
    css({
      ...split,
      '& > :first-child': { order: { md: imageSide === 'left' ? 0 : 1 } },
    }),
  textCol: css({ display: 'flex', flexDirection: 'column', gap: '18px' }),
  title: css({ fontSize: '26px', fontWeight: '700', color: '#111', mb: '2px', wordBreak: 'keep-all' }),
  p: css({ fontSize: '17px', lineHeight: 1.8, color: '#444', wordBreak: 'keep-all' }),
  em: css({ fontWeight: '700', color: '#267db6' }),

  // 이미지가 들어갈 자리 (검정 박스)
  imageBox: css({ w: '100%', bg: 'black', borderRadius: '4px' }),
  video: css({ w: '100%', bg: 'black', borderRadius: '4px', aspectRatio: '1200 / 780' }),
};
