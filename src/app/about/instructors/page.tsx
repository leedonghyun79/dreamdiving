'use client';

import { styles } from './styles';
import { INSTRUCTORS } from '@/app/constants/data';
import Image from 'next/image';
import { useState } from 'react';

export default function InstructorsPage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <main style={{ minHeight: '100vh' }}>
      {/* 제목 섹션 */}
      <section className={styles.headerSection}>
        <div className={styles.headerBadge}>
          Instructors
        </div>
        <h1 className={styles.headerTitle}>
          강사진 소개
        </h1>
        <p className={styles.headerDescription}>
          드림다이브의 강사진은 스쿠버 교육 분야에서 다년간의 경력을 갖춘 전문가들입니다.
          <br />
          국제 자격증(BSAC) 보유 강사진이 여러분의 안전하고 즐거운 다이빙을 책임집니다.
        </p>
      </section>

      {/* 메인 콘텐츠 섹션 */}
      <section className={styles.mainSection}>
        <div className={styles.mainGrid}>
          {/* 왼쪽: 소개 텍스트 */}
          <div className={styles.mainTextContainer}>
            <div className={styles.mainBadge}>
              Professional Team
            </div>
            <h2 className={styles.mainTitle}>
              전문성과 안전을 <br />
              최우선으로
            </h2>
            <p className={styles.mainDescription}>
              수도권 최고의 스쿠버 교육 전문 다이빙스쿨로, 10년차 이상의 베테랑 강사진이
              <br />
              체계적인 교육부터 국내외 투어까지 함께합니다.
              <br />
              <br />
              초보자부터 고급 다이버까지, 안전한 환경에서 신비로운 수중 세계로의 탐험을
              <br />
              책임지겠습니다.
            </p>
            <div className={styles.statsContainer}>
              <div>
                <div className={styles.statValue}>
                  10+
                </div>
                <div className={styles.statLabel}>
                  년 경력
                </div>
              </div>
              <div>
                <div className={styles.statValue}>
                  BSAC
                </div>
                <div className={styles.statLabel}>
                  공인 강사
                </div>
              </div>
            </div>
          </div>

          {/* 오른쪽: 이미지 */}
          <div className={styles.imageContainer}>
            <Image
              src="/assets/main/오션 어드벤쳐 다이버.jpg"
              alt="강사진과 함께하는 다이빙"
              fill
              className={styles.imageCover}
            />
          </div>
        </div>
      </section>

      {/* 강사 카드 섹션 */}
      <section className={styles.instructorSection}>
        <div className={styles.instructorContainer}>
          <h2 className={styles.instructorTitle}>
            우리 강사진을 소개합니다
          </h2>

          <div className={styles.instructorGrid}>
            {INSTRUCTORS.map((instructor, idx) => (
              <div
                key={idx}
                className={styles.instructorCard}
                onMouseEnter={() => setHoveredId(idx)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  transform:
                    hoveredId === idx
                      ? 'translateY(-8px) scale(1.02)'
                      : 'translateY(0)',
                }}
              >
                <div
                  className={styles.instructorImageWrapper}
                  style={{
                    boxShadow:
                      hoveredId === idx
                        ? '0 20px 50px rgba(8, 145, 178, 0.2)'
                        : '0 8px 24px rgba(0,0,0,0.1)',
                  }}
                >
                  <Image
                    src={instructor.img}
                    alt={instructor.name}
                    fill
                    className={styles.instructorImage}
                    style={{
                      transform:
                        hoveredId === idx ? 'scale(1.05)' : 'scale(1)',
                    }}
                  />
                  {/* 오버레이 */}
                  <div className={styles.instructorOverlay}>
                    <h3 className={styles.instructorName}>
                      {instructor.name}
                    </h3>
                    <div className={styles.instructorRole}>
                      {instructor.title}
                    </div>
                  </div>
                </div>

                {/* 텍스트 정보 */}
                <div className={styles.instructorTextInfo}>
                  <p className={styles.instructorDesc}>
                    {instructor.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
