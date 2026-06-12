// src/app/constants/styles.ts
export const COMMON_STYLES = {
  // 배지 스타일
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#eaf4fb',
    color: '#267db6',
    fontSize: '13px',
    fontWeight: '700',
    letterSpacing: '0.08em',
    padding: '6px 14px',
    borderRadius: '9999px',
    marginBottom: '28px',
    textTransform: 'uppercase' as const,
  },
  // 배지 내 점
  badgeDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: '#267db6',
    display: 'inline-block',
  },
  // 섹션 패딩
  sectionPadding: {
    padding: '100px 0',
  },
  // 최대 너비 컨테이너
  container: {
    maxWidth: '1520px',
    margin: '0 auto',
    padding: '0 50px',
  },
  // 제목 스타일 (h2)
  heading2: {
    fontSize: '40px',
    fontWeight: '900',
    color: '#1f1e1e',
    lineHeight: '1.2',
    wordBreak: 'keep-all' as const,
    marginBottom: '16px',
  },
  // 부제 스타일 (p)
  subtitle: {
    fontSize: '17px',
    color: '#666',
    wordBreak: 'keep-all' as const,
  },
  // 버튼 공통 스타일
  buttonBase: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '14px 28px',
    border: '2px solid #267db6',
    borderRadius: '8px',
    color: '#267db6',
    fontSize: '15px',
    fontWeight: '700',
    textDecoration: 'none',
    transition: 'all 0.2s',
  },
} as const;

export const COLOR = {
  primary: '#267db6',
  primaryDark: '#1d6a9f',
  text: '#1f1e1e',
  textSecondary: '#666',
  textTertiary: '#555',
  border: '#ddd',
  lightBg: '#f8f9fb',
  white: '#fff',
  darkBg: '#0f1923',
  darkText: '#8b9bb4',
} as const;
