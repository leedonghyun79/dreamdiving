'use client';

import { css } from '../../../../styled-system/css';
import { flex, grid } from '../../../../styled-system/patterns';
import { ProgramDetail } from '../../../types';
import Link from 'next/link';
import { useState } from 'react';

const PROGRAM_NAV = [
  { id: 'experience', label: 'Ï≤¥Ìóò ?§Ïù¥Îπ? },
  { id: 'discovery', label: '?îÏä§Ïª§Î≤Ñ ?§Ïù¥Î≤? },
  { id: 'ocean', label: '?§ÏÖò ?§Ïù¥Î≤? },
  { id: 'ocean-adventure', label: '?§ÏÖò ?¥ÎìúÎ≤§Ï≤ò ?§Ïù¥Î≤? },
  { id: 'advanced', label: '?¥ÎìúÎ∞¥Ïä§???§ÏÖò ?§Ïù¥Î≤? },
  { id: 'sports', label: '?§Ìè¨Ï∏??§Ïù¥Î≤? },
  { id: 'leader', label: '?§Ïù¥Î≤?Î¶¨Îçî' },
];

interface ProgramDetailLayoutProps {
  program: ProgramDetail;
}

export function ProgramDetailLayout({ program }: ProgramDetailLayoutProps) {
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  return (
    <main className={css({ width: '100%', bg: '#f9fafb' })}>
      {/* Program Navigation */}
      <nav
        className={flex({
          direction: 'column',
          gap: '0.5',
          px: '6',
          py: '4',
          bg: '#fff',
          borderBottom: '1px solid #e5e7eb',
          position: 'sticky',
          top: '0',
          zIndex: '10',
        })}
      >
        {PROGRAM_NAV.map((nav) => (
          <Link
            key={nav.id}
            href={`/programs/${nav.id}`}
            className={css({
              fontSize: 'sm',
              py: '1.5',
              px: '0',
              color: nav.id === program.id ? '#1a3a52' : '#6b7280',
              fontWeight: nav.id === program.id ? '600' : '400',
              transition: 'all 0.2s',
              _hover: {
                color: '#1a3a52',
                fontWeight: '600',
              },
            })}
            onMouseEnter={() => setHoveredNav(nav.id)}
            onMouseLeave={() => setHoveredNav(null)}
          >
            {nav.label}
          </Link>
        ))}
      </nav>

      {/* Header Section */}
      <section
        className={flex({
          direction: 'column',
          align: 'center',
          justify: 'center',
          gap: '3',
          px: '6',
          py: '12',
          textAlign: 'center',
          borderBottom: '2px solid #e5e7eb',
          backgroundImage: 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)',
        })}
      >
        <p
          className={css({
            fontSize: 'xs',
            fontWeight: '600',
            color: '#00a8a8',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          })}
        >
          {program.nameEn}
        </p>
        <h1
          className={css({
            fontSize: '4xl',
            fontWeight: '700',
            color: '#1a3a52',
            lineHeight: '1.2',
          })}
        >
          {program.nameKo}
        </h1>
        <p
          className={css({
            fontSize: 'base',
            color: '#4b5563',
            maxWidth: '600px',
            lineHeight: '1.6',
          })}
        >
          {program.tagline}
        </p>
      </section>

      {/* Description Section */}
      <section
        className={css({
          px: '6',
          py: '10',
          borderBottom: '2px solid #e5e7eb',
        })}
      >
        <p
          className={css({
            fontSize: 'base',
            color: '#4b5563',
            lineHeight: '1.8',
            whiteSpace: 'pre-wrap',
          })}
        >
          {program.description}
        </p>
      </section>

      {/* Main Content Section */}
      <section
        className={css({
          px: '6',
          py: '10',
          borderBottom: '2px solid #e5e7eb',
        })}
      >
        <div
          className={grid({
            columns: { base: 1, md: 2 },
            gap: '8',
            align: 'center',
          })}
        >
          {/* Left Side - Course Info */}
          <div className={flex({ direction: 'column', gap: '4' })}>
            <h2
              className={css({
                fontSize: '2xl',
                fontWeight: '700',
                color: '#1a3a52',
              })}
            >
              {program.nameKo} ÏΩîÏä§
            </h2>
            <p
              className={css({
                fontSize: 'base',
                color: '#4b5563',
                lineHeight: '1.8',
                whiteSpace: 'pre-wrap',
              })}
            >
              {program.courseInfo}
            </p>
            <button
              className={css({
                alignSelf: 'flex-start',
                px: '6',
                py: '2.5',
                border: '1px solid #1a3a52',
                bg: 'transparent',
                color: '#1a3a52',
                fontSize: 'sm',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s',
                _hover: {
                  bg: '#1a3a52',
                  color: '#fff',
                },
              })}
            >
              ?àÏïΩ?òÍ∏∞
            </button>
          </div>

          {/* Right Side - Image */}
          <div
            className={css({
              position: 'relative',
              width: '100%',
              aspectRatio: '4/3',
            })}
          >
            <img
              src={program.imageUrl}
              alt={program.nameKo}
              className={css({
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '12px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
              })}
            />
          </div>
        </div>
      </section>

      {/* Details Table Section */}
      <section className={css({ px: '6', py: '10' })}>
        <h2
          className={css({
            fontSize: '2xl',
            fontWeight: '700',
            color: '#1a3a52',
            mb: '6',
          })}
        >
          ?ÅÏÑ∏ ?ïÎ≥¥
        </h2>
        <div
          className={css({
            width: '100%',
            overflowX: 'auto',
          })}
        >
          <table
            className={css({
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: 'base',
            })}
          >
            <tbody>
              {program.details.map((detail, index) => (
                <tr
                  key={index}
                  className={css({
                    borderBottom: '1px solid #e5e7eb',
                    _lastChild: {
                      borderBottom: 'none',
                    },
                  })}
                >
                  <td
                    className={css({
                      py: '3.5',
                      px: '4',
                      fontWeight: '600',
                      color: '#1a3a52',
                      width: '30%',
                      minWidth: '150px',
                      bg: '#f9fafb',
                    })}
                  >
                    {detail.label}
                  </td>
                  <td
                    className={css({
                      py: '3.5',
                      px: '4',
                      color: '#4b5563',
                    })}
                  >
                    {detail.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

