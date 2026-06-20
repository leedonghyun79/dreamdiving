import { ProgramDetail } from '@/app/types';
import Link from 'next/link';
import { styles } from './ProgramDetailLayout.styles';

interface ProgramDetailLayoutProps {
  program: ProgramDetail;
}

export function ProgramDetailLayout({ program }: ProgramDetailLayoutProps) {
  return (
    <>
      {/* Title Section */}
      <div className={styles.titleSection}>
        <span className={styles.nameEn}>
          {program.nameEn}
        </span>
        <h1 className={styles.nameKo}>
          {program.nameKo}
        </h1>
        <div className={styles.titleDivider} />
        <p 
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: program.description.replace(/\n/g, '<br />') }}
        />
      </div>

      {/* Course Description Section */}
      <div className={styles.courseSection}>
        <div className={styles.courseTextContainer}>
          <h2 className={styles.courseTitle}>
            {program.courseTitle}
          </h2>
          <div className={styles.courseDescriptions}>
            {program.courseDescriptions.map((desc, idx) => (
              <p key={idx}>{desc}</p>
            ))}
          </div>
          <div>
            <Link 
              href="/reservation/pricing"
              className={styles.reserveButton}
            >
              예약하기
            </Link>
          </div>
        </div>
        
        {/* Course Image (Black background as requested) */}
        <div className={styles.courseImageContainer}>
          {program.courseImage && (
            <img 
              src={program.courseImage} 
              alt={program.courseTitle}
              className={styles.courseImage} 
            />
          )}
        </div>
      </div>

      {/* Detailed Info Table */}
      <div className={styles.infoSection}>
        <h2 className={styles.infoTitle}>
          상세 정보
        </h2>
        <div className={styles.infoTableContainer}>
          {program.details.map((detail, idx) => (
            <div 
              key={idx}
              className={styles.infoRow}
            >
              <div className={styles.infoLabel}>
                {detail.label}
              </div>
              <div className={styles.infoValue}>
                {detail.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
