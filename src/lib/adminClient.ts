const PW_KEY = 'admin-pw';

export function getAdminPassword() {
  try {
    let pw = sessionStorage.getItem(PW_KEY);
    if (!pw) {
      pw = window.prompt('관리자 비밀번호를 입력하세요');
      if (pw) sessionStorage.setItem(PW_KEY, pw);
    }
    return pw;
  } catch {
    return window.prompt('관리자 비밀번호를 입력하세요');
  }
}

export function clearAdminPassword() {
  try {
    sessionStorage.removeItem(PW_KEY);
  } catch {}
}
