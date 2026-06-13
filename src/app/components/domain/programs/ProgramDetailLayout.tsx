import { css } from '../../../../../styled-system/css';
import { flex, grid } from '../../../../../styled-system/patterns';
import { ProgramDetail } from '../../../types';
import Link from 'next/link';

interface ProgramDetailLayoutProps {
  program: ProgramDetail;
}

export function ProgramDetailLayout({ program }: ProgramDetailLayoutProps) {
  return (
    <>
      {/* Title Section */}
      <div className={flex({ direction: 'column', align: 'center', mb: '80px', textAlign: 'center' })}>
        <span className={css({ fontSize: '18px', color: '#888', fontStyle: 'italic', mb: '8px' })}>
          {program.nameEn}
        </span>
        <h1 className={css({ fontSize: '36px', fontWeight: '800', color: '#267db6', mb: '24px' })}>
          {program.nameKo}
        </h1>
        <div className={css({ width: '40px', height: '1px', bg: '#ddd', mb: '32px' })} />
        <p 
          className={css({ fontSize: '16px', color: '#444', lineHeight: '1.6' })}
          dangerouslySetInnerHTML={{ __html: program.description.replace(/\n/g, '<br />') }}
        />
      </div>

      {/* Course Description Section */}
      <div className={grid({ columns: { base: 1, md: 2 }, gap: '60px', mb: '80px', alignItems: 'center' })}>
        <div className={flex({ direction: 'column', gap: '24px' })}>
          <h2 className={css({ fontSize: '24px', fontWeight: '700', color: '#222' })}>
            {program.courseTitle}
          </h2>
          <div className={flex({ direction: 'column', gap: '16px', color: '#555', fontSize: '15px', lineHeight: '1.6', wordBreak: 'keep-all' })}>
            {program.courseDescriptions.map((desc, idx) => (
              <p key={idx}>{desc}</p>
            ))}
          </div>
          <div>
            <Link 
              href="/reservation/pricing"
              className={css({
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
              })}
            >
              예약하기
            </Link>
          </div>
        </div>
        
        {/* Course Image (Black background as requested) */}
        <div 
          className={css({ 
            width: '100%', 
            aspectRatio: '3/2', 
            bg: 'black',
            borderRadius: '8px',
            overflow: 'hidden'
          })}
        >
          {program.courseImage && (
            <img 
              src={program.courseImage} 
              alt={program.courseTitle}
              className={css({ width: '100%', height: '100%', objectFit: 'cover' })} 
            />
          )}
        </div>
      </div>

      {/* Detailed Info Table */}
      <div className={flex({ direction: 'column', gap: '20px' })}>
        <h2 className={css({ fontSize: '20px', fontWeight: '700', color: '#222' })}>
          상세 정보
        </h2>
        <div className={css({ borderTop: '2px solid #222' })}>
          {program.details.map((detail, idx) => (
            <div 
              key={idx}
              className={flex({ 
                py: '20px', 
                borderBottom: '1px solid #eee',
                flexDirection: { base: 'column', md: 'row' },
                gap: { base: '8px', md: '0' }
              })}
            >
              <div className={css({ width: '200px', flexShrink: 0, fontSize: '15px', color: '#666', fontWeight: '500' })}>
                {detail.label}
              </div>
              <div className={css({ flex: 1, fontSize: '15px', color: '#222' })}>
                {detail.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
