'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { css } from '../../../styled-system/css';
import { flex } from '../../../styled-system/patterns';

const PROGRAM_NAV = [
  { id: 'experience', label: '체험 다이빙' },
  { id: 'discovery', label: '디스커버리 다이버' },
  { id: 'ocean', label: '오션 다이버' },
  { id: 'ocean-adventure', label: '오션 어드벤쳐 다이버' },
  { id: 'advanced', label: '어드밴스드 오션 다이버' },
  { id: 'sports', label: '스포츠 다이버' },
  { id: 'leader', label: '다이브 리더' },
];

export default function ProgramsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  
  // To avoid animating from 0 on first load, we don't use transition initially
  const [isInitial, setIsInitial] = useState(true);
  const [lineStyle, setLineStyle] = useState({ width: 0, left: 0, opacity: 0 });

  // Extract current program ID from pathname (e.g. /programs/ocean -> ocean)
  const currentId = pathname.split('/').pop();

  useEffect(() => {
    if (!navRef.current) return;
    const activeLink = navRef.current.querySelector('[data-active="true"]') as HTMLElement;
    
    if (activeLink) {
      setLineStyle({
        width: activeLink.offsetWidth,
        left: activeLink.offsetLeft,
        opacity: 1,
      });
      
      if (isInitial) {
        // Allow a small delay before enabling transitions, so initial mount doesn't animate from 0
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsInitial(false);
          });
        });
      }
    }
  }, [currentId]);

  return (
    <div className={css({ width: '100%', bg: 'white', pb: '120px' })}>
      {/* Hero Section (Shared across all program pages) */}
      <div 
        className={flex({ 
          width: '100%', 
          height: '400px', 
          bg: 'black', 
          align: 'center', 
          justify: 'center' 
        })}
      >
        {/* Placeholder for future background image */}
      </div>

      {/* Shared Navigation */}
      <nav
        ref={navRef}
        className={flex({
          justify: 'center',
          gap: '40px',
          py: '24px',
          borderBottom: '1px solid #eaeaea',
          bg: 'white',
          position: 'sticky',
          top: '80px',
          zIndex: 10,
        })}
      >
        {PROGRAM_NAV.map((nav) => {
          const isActive = nav.id === currentId;
          return (
            <Link
              key={nav.id}
              href={`/programs/${nav.id}`}
              data-active={isActive}
              className={css({
                fontSize: '15px',
                fontWeight: isActive ? '700' : '500',
                color: isActive ? '#267db6' : '#666',
                position: 'relative',
                textDecoration: 'none',
                transition: 'color 0.2s',
                _hover: { color: '#267db6' },
              })}
            >
              {nav.label}
            </Link>
          );
        })}
        {/* Sliding Indicator */}
        <div 
          className={css({
            position: 'absolute',
            bottom: '-1px',
            left: 0,
            height: '2px',
            bg: '#267db6',
            // Only apply transition after initial mount to avoid sliding from 0 on page refresh
          })}
          style={{
            width: `${lineStyle.width}px`,
            transform: `translateX(${lineStyle.left}px)`,
            opacity: lineStyle.opacity,
            transition: isInitial ? 'none' : 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
      </nav>

      {/* Main Content Area (Dynamic children) */}
      <div className={css({ maxW: '1200px', mx: 'auto', px: '24px', pt: '80px' })}>
        {children}
      </div>
    </div>
  );
}
