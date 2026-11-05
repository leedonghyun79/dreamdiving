'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useState } from 'react';
import { styles } from './Header.styles';
import { AuthModal } from './AuthModal';

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
      { label: '해양 실습 장소', href: '/facility/gangneung' },
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
  // TODO: 인증 연동 후 실제 로그인 상태로 교체
  const isLoggedIn = false;
  const [loginOpen, setLoginOpen] = useState(false);
  const closeLogin = useCallback(() => setLoginOpen(false), []);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* 로고 */}
        <Link href="/">
          <img
            src="/assets/logo.png"
            alt="Dream Dive"
            className={styles.logoImage}
          />
        </Link>

        {/* 메인 메뉴 ul */}
        <ul className={styles.menuList}>
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
            const isOpen = openMenu === item.href;

            return (
              <li
                key={item.href}
                className={styles.menuItem}
                onMouseEnter={() => setOpenMenu(item.href)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                {/* 메인 메뉴 링크 */}
                <Link
                  href={item.href}
                  className={styles.menuLink(isActive, isOpen)}
                >
                  {item.label}
                </Link>

                {/* 서브 메뉴 ul */}
                {isOpen && (
                  <ul className={styles.subMenuList}>
                    {item.sub.map((sub) => {
                      const isSubActive = pathname === sub.href;
                      return (
                        <li key={sub.href}>
                          <Link
                            href={sub.href}
                            onClick={() => setOpenMenu(null)}
                            className={styles.subMenuLink(isSubActive)}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>

        {/* 우측 로그인 / 회원가입 */}
        <div className={styles.authGroup}>
          {isLoggedIn ? (
            <>
              <Link href="/mypage" className={styles.authLink}>
                마이페이지
              </Link>
              <button
                type="button"
                className={styles.authLink}
                onClick={() => {
                  // TODO: 로그아웃 처리 연결 (인증 연동 후)
                }}
              >
                로그아웃
              </button>
            </>
          ) : (
            <>
              <button type="button" className={styles.authLink} onClick={() => setLoginOpen(true)}>
                로그인
              </button>
              <Link href="/signup" className={styles.authLink}>
                회원가입
              </Link>
            </>
          )}
        </div>
      </nav>

      {!isLoggedIn && (
        <AuthModal open={loginOpen} onClose={closeLogin} />
      )}
    </header>
  );
}
