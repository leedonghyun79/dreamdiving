import { css } from '@styled-system/css';
import { flex } from '@styled-system/patterns';

export const styles = {
  container: css({ width: '100%', bg: 'white', pb: '120px' }),
  heroSection: flex({ 
    width: '100%', 
    height: '400px', 
    bg: 'black', 
    align: 'center', 
    justify: 'center' 
  }),
  navContainer: flex({
    justify: 'center',
    gap: '40px',
    py: '24px',
    borderBottom: '1px solid #eaeaea',
    bg: 'white',
    position: 'sticky',
    top: '80px',
    zIndex: 10,
  }),
  navLink: (isActive: boolean) => css({
    fontSize: '15px',
    fontWeight: isActive ? '700' : '500',
    color: isActive ? '#267db6' : '#666',
    position: 'relative',
    textDecoration: 'none',
    transition: 'color 0.2s',
    _hover: { color: '#267db6' },
  }),
  slidingIndicator: css({
    position: 'absolute',
    bottom: '-1px',
    left: 0,
    height: '2px',
    bg: '#267db6',
  }),
  mainContent: css({ maxW: '1200px', mx: 'auto', px: '24px', pt: '80px' })
};
