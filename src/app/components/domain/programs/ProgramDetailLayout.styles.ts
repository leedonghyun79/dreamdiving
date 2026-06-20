import { css } from '@styled-system/css';
import { flex, grid } from '@styled-system/patterns';

export const styles = {
  titleSection: flex({ direction: 'column', align: 'center', mb: '80px', textAlign: 'center' }),
  nameEn: css({ fontSize: '18px', color: '#888', fontStyle: 'italic', mb: '8px' }),
  nameKo: css({ fontSize: '36px', fontWeight: '800', color: '#267db6', mb: '24px' }),
  titleDivider: css({ width: '40px', height: '1px', bg: '#ddd', mb: '32px' }),
  description: css({ fontSize: '16px', color: '#444', lineHeight: '1.6' }),

  courseSection: grid({ columns: { base: 1, md: 2 }, gap: '60px', mb: '80px', alignItems: 'center' }),
  courseTextContainer: flex({ direction: 'column', gap: '24px' }),
  courseTitle: css({ fontSize: '24px', fontWeight: '700', color: '#222' }),
  courseDescriptions: flex({ direction: 'column', gap: '16px', color: '#555', fontSize: '15px', lineHeight: '1.6', wordBreak: 'keep-all' }),
  
  reserveButton: css({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    px: '32px',
    py: '14px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    fontSize: '15px',
    fontWeight: '600',
    color: '#333',
    bg: 'white',
    textDecoration: 'none',
    transition: 'all 0.2s',
    _hover: { bg: '#f5f5f5', borderColor: '#ccc' }
  }),

  courseImageContainer: css({ 
    width: '100%', 
    aspectRatio: '3/2', 
    bg: 'black',
    borderRadius: '8px',
    overflow: 'hidden'
  }),
  courseImage: css({ width: '100%', height: '100%', objectFit: 'cover' }),

  infoSection: flex({ direction: 'column', gap: '20px' }),
  infoTitle: css({ fontSize: '20px', fontWeight: '700', color: '#222' }),
  infoTableContainer: css({ borderTop: '2px solid #222' }),
  infoRow: flex({ 
    py: '20px', 
    borderBottom: '1px solid #eee',
    flexDirection: { base: 'column', md: 'row' },
    gap: { base: '8px', md: '0' }
  }),
  infoLabel: css({ width: '200px', flexShrink: 0, fontSize: '15px', color: '#666', fontWeight: '500' }),
  infoValue: css({ flex: 1, fontSize: '15px', color: '#222' })
};
