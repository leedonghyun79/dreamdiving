'use client';

import { css } from '../../../../styled-system/css';
import { INSTRUCTORS } from '../../constants/data';
import Image from 'next/image';
import { useState } from 'react';

export default function InstructorsPage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <main style={{ minHeight: '100vh' }}>
      {/* 제목 섹션 */}
      <section
        className={css({
          paddingTop: { base: '60px', md: '80px' },
          paddingBottom: { base: '40px', md: '60px' },
          paddingLeft: { base: '20px', md: '50px' },
          paddingRight: { base: '20px', md: '50px' },
          backgroundColor: 'white',
          textAlign: 'center',
        })}
      >
        <div
          className={css({
            fontSize: { base: '12px', md: '14px' },
            fontWeight: '600',
            letterSpacing: '2px',
            color: '#0891b2',
            marginBottom: '16px',
            textTransform: 'uppercase',
          })}
        >
          Instructors
        </div>
        <h1
          className={css({
            fontSize: { base: '32px', md: '48px' },
            fontWeight: '700',
            color: '#001428',
            marginBottom: { base: '20px', md: '32px' },
            lineHeight: '1.3',
            wordBreak: 'keep-all',
          })}
        >
          강사진 소개
        </h1>
        <p
          className={css({
            fontSize: { base: '14px', md: '16px' },
            color: '#4b5563',
            lineHeight: '1.8',
            maxWidth: '700px',
            margin: '0 auto',
            wordBreak: 'keep-all',
          })}
        >
          드림다이브의 강사진은 스쿠버 교육 분야에서 다년간의 경력을 갖춘 전문가들입니다.
          <br />
          국제 자격증(BSAC) 보유 강사진이 여러분의 안전하고 즐거운 다이빙을 책임집니다.
        </p>
      </section>

      {/* 메인 콘텐츠 섹션 */}
      <section
        className={css({
          paddingTop: { base: '40px', md: '60px' },
          paddingBottom: { base: '60px', md: '100px' },
          paddingLeft: { base: '20px', md: '50px' },
          paddingRight: { base: '20px', md: '50px' },
          backgroundColor: '#f8fafb',
        })}
      >
        <div
          className={css({
            display: { base: 'block', lg: 'grid' },
            gridTemplateColumns: '1fr 1fr',
            gap: { base: '40px', md: '60px' },
            alignItems: 'start',
            maxWidth: '1400px',
            margin: '0 auto',
          })}
        >
          {/* 왼쪽: 소개 텍스트 */}
          <div
            className={css({
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            })}
          >
            <div
              className={css({
                fontSize: { base: '12px', md: '13px' },
                fontWeight: '600',
                letterSpacing: '1.5px',
                color: '#0891b2',
                marginBottom: '16px',
                textTransform: 'uppercase',
              })}
            >
              Professional Team
            </div>
            <h2
              className={css({
                fontSize: { base: '28px', md: '36px' },
                fontWeight: '700',
                color: '#001428',
                marginBottom: '24px',
                lineHeight: '1.4',
                wordBreak: 'keep-all',
              })}
            >
              전문성과 안전을 <br />
              최우선으로
            </h2>
            <p
              className={css({
                fontSize: { base: '14px', md: '15px' },
                color: '#4b5563',
                lineHeight: '1.8',
                marginBottom: '20px',
                wordBreak: 'keep-all',
              })}
            >
              수도권 최고의 스쿠버 교육 전문 다이빙스쿨로, 10년차 이상의 베테랑 강사진이
              <br />
              체계적인 교육부터 국내외 투어까지 함께합니다.
              <br />
              <br />
              초보자부터 고급 다이버까지, 안전한 환경에서 신비로운 수중 세계로의 탐험을
              <br />
              책임지겠습니다.
            </p>
            <div
              className={css({
                display: 'flex',
                gap: '20px',
                marginTop: '24px',
                flexWrap: 'wrap',
                wordBreak: 'keep-all',
              })}
            >
              <div>
                <div
                  className={css({
                    fontSize: '24px',
                    fontWeight: '700',
                    color: '#0891b2',
                  })}
                >
                  10+
                </div>
                <div
                  className={css({
                    fontSize: '12px',
                    color: '#4b5563',
                    marginTop: '4px',
                  })}
                >
                  년 경력
                </div>
              </div>
              <div>
                <div
                  className={css({
                    fontSize: '24px',
                    fontWeight: '700',
                    color: '#0891b2',
                  })}
                >
                  BSAC
                </div>
                <div
                  className={css({
                    fontSize: '12px',
                    color: '#4b5563',
                    marginTop: '4px',
                  })}
                >
                  공인 강사
                </div>
              </div>
            </div>
          </div>

          {/* 오른쪽: 이미지 */}
          <div
            className={css({
              position: 'relative',
              height: { base: '300px', md: '450px' },
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
            })}
          >
            <Image
              src="/assets/main/오션 어드벤쳐 다이버.jpg"
              alt="강사진과 함께하는 다이빙"
              fill
              className={css({
                objectFit: 'cover',
              })}
            />
          </div>
        </div>
      </section>

      {/* 강사 카드 섹션 */}
      <section
        className={css({
          paddingTop: { base: '60px', md: '80px' },
          paddingBottom: { base: '80px', md: '120px' },
          paddingLeft: { base: '20px', md: '50px' },
          paddingRight: { base: '20px', md: '50px' },
          backgroundColor: 'white',
        })}
      >
        <div
          className={css({
            maxWidth: '1200px',
            margin: '0 auto',
          })}
        >
          <h2
            className={css({
              fontSize: { base: '28px', md: '36px' },
              fontWeight: '700',
              color: '#001428',
              marginBottom: { base: '40px', md: '60px' },
              textAlign: 'center',
              wordBreak: 'keep-all',
            })}
          >
            우리 강사진을 소개합니다
          </h2>

          <div
            className={css({
              display: 'grid',
              gridTemplateColumns: { base: '1fr', md: 'repeat(3, 1fr)' },
              gap: { base: '30px', md: '40px' },
            })}
          >
            {INSTRUCTORS.map((instructor, idx) => (
              <div
                key={idx}
                className={css({
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                })}
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
                  className={css({
                    position: 'relative',
                    width: '100%',
                    height: { base: '320px', md: '380px' },
                    borderRadius: '12px',
                    overflow: 'hidden',
                    marginBottom: '20px',
                    boxShadow:
                      hoveredId === idx
                        ? '0 20px 50px rgba(8, 145, 178, 0.2)'
                        : '0 8px 24px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    backgroundColor: '#e0f2fe',
                  })}
                >
                  <Image
                    src={instructor.img}
                    alt={instructor.name}
                    fill
                    className={css({
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease',
                    })}
                    style={{
                      transform:
                        hoveredId === idx ? 'scale(1.05)' : 'scale(1)',
                    }}
                  />
                  {/* 오버레이 */}
                  <div
                    className={css({
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,20,40,0.8) 100%)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      padding: { base: '24px', md: '28px' },
                      transition: 'all 0.3s ease',
                    })}
                  >
                    <h3
                      className={css({
                        fontSize: { base: '20px', md: '24px' },
                        fontWeight: '700',
                        color: 'white',
                        marginBottom: '6px',
                      })}
                    >
                      {instructor.name}
                    </h3>
                    <div
                      className={css({
                        fontSize: { base: '13px', md: '14px' },
                        color: '#0891b2',
                        fontWeight: '600',
                        marginBottom: '12px',
                      })}
                    >
                      {instructor.title}
                    </div>
                  </div>
                </div>

                {/* 텍스트 정보 */}
                <div
                  className={css({
                    padding: '0 8px',
                  })}
                >
                  <p
                    className={css({
                      fontSize: { base: '14px', md: '15px' },
                      color: '#4b5563',
                      lineHeight: '1.6',
                      wordBreak: 'keep-all',
                      minHeight: { base: '48px', md: '60px' },
                      display: 'flex',
                      alignItems: 'center',
                    })}
                  >
                    {instructor.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section
        className={css({
          paddingTop: { base: '60px', md: '80px' },
          paddingBottom: { base: '60px', md: '80px' },
          paddingLeft: { base: '20px', md: '50px' },
          paddingRight: { base: '20px', md: '50px' },
          background: 'linear-gradient(135deg, #0891b2 0%, #0e7490 100%)',
          textAlign: 'center',
        })}
      >
        <div
          className={css({
            maxWidth: '600px',
            margin: '0 auto',
          })}
        >
          <h2
            className={css({
              fontSize: { base: '28px', md: '36px' },
              fontWeight: '700',
              color: 'white',
              marginBottom: '20px',
              wordBreak: 'keep-all',
            })}
          >
            드림다이브 강사진과 함께하세요
          </h2>
          <p
            className={css({
              fontSize: { base: '14px', md: '16px' },
              color: 'rgba(255,255,255,0.9)',
              marginBottom: '32px',
              lineHeight: '1.7',
              wordBreak: 'keep-all',
            })}
          >
            안전하고 즐거운 다이빙 경험을 위해 저희 전문 강사진이 준비되어 있습니다.
            <br />
            당신의 다이빙 목표를 달성하도록 함께하겠습니다.
          </p>
          <a
            href="/programs/experience"
            className={css({
              display: 'inline-flex',
              alignItems: 'center',
              paddingTop: '16px',
              paddingBottom: '16px',
              paddingLeft: '40px',
              paddingRight: '40px',
              backgroundColor: 'white',
              color: '#0891b2',
              fontSize: '16px',
              fontWeight: '700',
              textDecoration: 'none',
              borderRadius: '9999px',
              transition: 'all 0.3s ease',
              _hover: {
                backgroundColor: '#f0f9ff',
                transform: 'translateY(-2px)',
              },
            })}
          >
            체험 다이빙 신청
          </a>
        </div>
      </section>
    </main>
  );
}
