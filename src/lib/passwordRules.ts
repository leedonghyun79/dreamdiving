// 비밀번호 규칙 (클라이언트 안내 + 서버 검증에 같이 사용)

// 3개 이상 연속되거나 같은 문자/숫자가 반복되는지 검사 (true = 통과)
export function hasNoRepeatOrSequence(pw: string): boolean {
  for (let i = 0; i < pw.length - 2; i++) {
    const a = pw.charCodeAt(i);
    const b = pw.charCodeAt(i + 1);
    const c = pw.charCodeAt(i + 2);
    if (a === b && b === c) return false; // 동일 문자 3개
    if (b === a + 1 && c === b + 1) return false; // 오름차순 연속 (abc, 123)
    if (b === a - 1 && c === b - 1) return false; // 내림차순 연속 (cba, 321)
  }
  return true;
}

export const PASSWORD_RULES: { label: string; test: (pw: string, email: string) => boolean }[] = [
  {
    label: '영문/숫자/특수문자 2가지 이상 조합 (8~20자)',
    test: (pw) =>
      pw.length >= 8 &&
      pw.length <= 20 &&
      [/[A-Za-z]/, /[0-9]/, /[^A-Za-z0-9]/].filter((r) => r.test(pw)).length >= 2,
  },
  {
    label: '3개 이상 연속되거나 동일한 문자/숫자 제외',
    test: (pw) => hasNoRepeatOrSequence(pw),
  },
  {
    label: '아이디(이메일) 제외',
    test: (pw, email) => {
      const id = email.split('@')[0];
      return !id || !pw.toLowerCase().includes(id.toLowerCase());
    },
  },
];

export function isValidPassword(pw: string, email: string): boolean {
  return PASSWORD_RULES.every((rule) => rule.test(pw, email));
}

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
