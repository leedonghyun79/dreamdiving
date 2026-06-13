'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { css } from '../../../../styled-system/css';

const NAV_ITEMS = [
  {
    label: '드림다이브 소개',
    href: '/about',
    sub: [
      { label: '업체 소개', href: '/about/company' },
      { label: '강사진 소개', href: '/about/instructors' },
    ],
  },
  {
    label: 'BSAC Korea 단체',
    href: '/bsac',
    sub: [
      { label: 'BSAC 소개', href: '/bsac/intro' },
      { label: 'BSAC 특징', href: '/bsac/features' },
    ],
  },
  {
    label: '프로그램 안내',
    href: '/programs',
    sub: [
      { label: '체험다이빙', href: '/programs/experience' },
      { label: '디스커버리 다이버', href: '/programs/discovery' },
      { label: '오션 다이버', href: '/programs/ocean' },
      { label: '오션 어드벤쳐 다이버', href: '/programs/ocean-adventure' },
      { label: '어드밴스드 오션 다이버', href: '/programs/advanced' },
      { label: '스포츠 다이버', href: '/programs/sports' },
      { label: '다이브 리더', href: '/programs/leader' },
    ],
  },
  {
    label: '프로그램 일정',
    href: '/schedule',
    sub: [
      { label: '체험다이빙', href: '/schedule/experience' },
      { label: '디스커버리 다이버', href: '/schedule/discovery' },
      { label: '오션 다이버', href: '/schedule/ocean' },
      { label: '오션 어드벤쳐 다이버', href: '/schedule/ocean-adventure' },
      { label: '어드밴스드 오션 다이버', href: '/schedule/advanced' },
      { label: '스포츠 다이버', href: '/schedule/sports' },
      { label: '다이브 리더', href: '/schedule/leader' },
    ],
  },
  {
    label: '시설 안내',
    href: '/facility',
    sub: [
      { label: 'K26 다이빙 풀장', href: '/facility/k26' },
      { label: '해양 실습 - 강릉', href: '/facility/gangneung' },
      { label: '해양 실습 - 양양', href: '/facility/yangyang' },
    ],
  },
  {
    label: '예약하기',
    href: '/reservation',
    sub: [
      { label: '프로그램 비용 안내', href: '/reservation/pricing' },
      { label: '프로그램 예약', href: '/reservation/booking' },
      { label: '온라인 문의', href: '/reservation/inquiry' },
    ],
  },
  {
    label: '커뮤니티',
    href: '/community',
    sub: [
      { label: '공지사항', href: '/community/notice' },
      { label: '고객후기', href: '/community/reviews' },
      { label: '갤러리', href: '/community/gallery' },
    ],
  },
];

export default function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <header
      className={css({
        position: 'fixed',
        top: 0,
        width: '100%',
        height: '100px',
        backgroundColor: 'white',
        zIndex: 50,
        borderBottom: '1px solid #f3f4f6',
      })}
    >
      <nav
        className={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
          paddingLeft: '50px',
          paddingRight: '50px',
        })}
      >
        {/* 로고 */}
        <Link href="/">
          <img
            src="/assets/logo.png"
            alt="Dream Dive"
            className={css({ width: '83px', height: '81px', objectFit: 'contain', display: 'block' })}
          />
        </Link>

        {/* 메인 메뉴 ul */}
        <ul
          className={css({
            display: 'flex',
            alignItems: 'stretch',
            height: '100px',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          })}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
            const isOpen = openMenu === item.href;

            return (
              <li
                key={item.href}
                className={css({ position: 'relative' })}
                onMouseEnter={() => setOpenMenu(item.href)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                {/* 메인 메뉴 링크 */}
                <Link
                  href={item.href}
                  className={css({
                    display: 'flex',
                    alignItems: 'center',
                    height: '100px',
                    paddingLeft: '26px',
                    paddingRight: '26px',
                    fontSize: '15px',
                    fontWeight: '800',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                    color: isActive || isOpen ? '#267db6' : '#1f1e1e',
                    transition: 'color 0.2s, border-color 0.2s',
                  })}
                >
                  {item.label}
                </Link>

                {/* 서브 메뉴 ul */}
                {isOpen && (
                  <ul
                    className={css({
                      position: 'absolute',
                      top: '100px',
                      left: 0,
                      minWidth: 'max-content',
                      listStyle: 'none',
                      margin: 0,
                      backgroundColor: 'white',
                      borderLeft: '1px solid #e5e7eb',
                      borderRight: '1px solid #e5e7eb',
                      borderBottom: '1px solid #e5e7eb',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.10)',
                      zIndex: 100,
                    })}
                  >
                    {item.sub.map((sub) => (
                      <li key={sub.href}>
                        <Link
                          href={sub.href}
                          onClick={() => setOpenMenu(null)}
                          className={css({
                            display: 'block',
                            paddingTop: '12px',
                            paddingBottom: '12px',
                            paddingLeft: '20px',
                            paddingRight: '20px',
                            fontSize: '15px',
                            fontWeight: pathname === sub.href ? '700' : '400',
                            color: pathname === sub.href ? 'white' : '#333',
                            backgroundColor: pathname === sub.href ? '#267db6' : 'transparent',
                            textDecoration: 'none',
                            whiteSpace: 'nowrap',
                            _hover: {
                              backgroundColor: pathname === sub.href ? '#1d6a9f' : '#f0f7ff',
                              color: pathname === sub.href ? 'white' : '#267db6',
                            },
                          })}
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>

        {/* 우측 문의하기 버튼 */}
        <Link
          href="/reservation/inquiry"
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            paddingTop: '10px',
            paddingBottom: '10px',
            paddingLeft: '20px',
            paddingRight: '20px',
            backgroundColor: '#267db6',
            color: 'white',
            fontSize: '15px',
            fontWeight: '700',
            textDecoration: 'none',
            borderRadius: '9999px',
            whiteSpace: 'nowrap',
            flexShrink: 0,
            transition: 'background-color 0.2s',
            _hover: { backgroundColor: '#1d6a9f' },
          })}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          상담문의하기
        </Link>
      </nav>
    </header>
  );
}
