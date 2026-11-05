'use client';

import { FormEvent, useState } from 'react';

const TERMS_TEXT = `제1조 (목적)
본 이용약관은 "사이트명"(이하 "사이트")이 제공하는 서비스의 이용조건과 운영에 관한 제반 사항을 규정함을 목적으로 합니다.

제2조 (용어의 정의)
1. "회원"이란 사이트에 개인정보를 제공하여 회원 등록을 한 자를 말합니다.
2. "서비스"란 사이트가 제공하는 모든 서비스를 말합니다.

제3조 (약관의 효력 및 변경)
사이트는 필요한 경우 관련 법령을 위배하지 않는 범위에서 본 약관을 변경할 수 있으며, 변경 시 사이트에 공지합니다.`;

const PRIVACY_TEXT = `1. 개인정보 수집목적 및 이용목적

(1) 홈페이지 회원 가입 및 관리
회원 가입 의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리 등을 목적으로 개인정보를 처리합니다.

(2) 프로그램 예약 및 상담
프로그램 예약 확인, 상담 및 안내, 문의 응대를 목적으로 개인정보를 처리합니다.

2. 수집하는 개인정보 항목
이메일, 비밀번호, 이름

3. 개인정보 보유 및 이용기간
회원 탈퇴 시까지 보유하며, 탈퇴 후 지체 없이 파기합니다. 단, 관계 법령에 따라 보존이 필요한 경우 해당 기간 동안 보관합니다.`;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// 비밀번호 규칙
const PASSWORD_RULES = [
  { label: '8자 이상', test: (pw: string) => pw.length >= 8 },
  { label: '대문자 포함', test: (pw: string) => /[A-Z]/.test(pw) },
  { label: '소문자 포함', test: (pw: string) => /[a-z]/.test(pw) },
  { label: '숫자 포함', test: (pw: string) => /[0-9]/.test(pw) },
  { label: '특수문자 포함', test: (pw: string) => /[^A-Za-z0-9]/.test(pw) },
];

const isValidPassword = (pw: string) => PASSWORD_RULES.every((rule) => rule.test(pw));

const inputStyle: React.CSSProperties = {
  width: '100%',
  height: '50px',
  padding: '0 14px',
  border: '1px solid #ddd',
  borderRadius: '4px',
  fontSize: '15px',
  color: '#333',
  outline: 'none',
  boxSizing: 'border-box',
  backgroundColor: '#fff',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '15px',
  fontWeight: '600',
  color: '#333',
  marginBottom: '8px',
};

const errorTextStyle: React.CSSProperties = {
  fontSize: '13px',
  color: '#e53e3e',
  margin: '6px 0 0',
};

const checkRowStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  fontSize: '15px',
  color: '#333',
  cursor: 'pointer',
};

const checkboxStyle: React.CSSProperties = {
  width: '18px',
  height: '18px',
  accentColor: '#267db6',
  flexShrink: 0,
};

const viewButtonStyle: React.CSSProperties = {
  marginLeft: 'auto',
  border: 'none',
  background: 'none',
  fontSize: '14px',
  color: '#888',
  textDecoration: 'underline',
  cursor: 'pointer',
  padding: 0,
};

const termsBoxStyle: React.CSSProperties = {
  marginTop: '10px',
  height: '140px',
  overflowY: 'auto',
  border: '1px solid #ddd',
  borderRadius: '4px',
  padding: '14px',
  fontSize: '14px',
  lineHeight: '1.7',
  color: '#555',
  whiteSpace: 'pre-line',
  wordBreak: 'keep-all',
  boxSizing: 'border-box',
};

function TermsRow({
  label,
  checked,
  onChange,
  text,
  required,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
  text?: string;
  required: boolean;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <label style={{ ...checkRowStyle, flex: 1 }}>
          <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} style={checkboxStyle} />
          <span>
            {label}{' '}
            <span style={{ color: required ? '#e5484d' : '#999' }}>{required ? '(필수)' : '(선택)'}</span>
          </span>
        </label>
        {text && (
          <button type="button" onClick={() => setOpen((v) => !v)} style={viewButtonStyle} aria-expanded={open}>
            {open ? '접기' : '보기'}
          </button>
        )}
      </div>
      {text && open && <div style={termsBoxStyle}>{text}</div>}
    </div>
  );
}

export function SignupForm() {
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [agreeAge, setAgreeAge] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [name, setName] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [error, setError] = useState('');

  const agreeAll = agreeTerms && agreePrivacy && agreeAge;
  const requiredAgreed = agreeTerms && agreePrivacy && agreeAge;

  // 필드별 검증 메시지 (빈 문자열이면 통과)
  const emailError = !email.trim()
    ? '이메일을 입력해주세요.'
    : !EMAIL_RE.test(email)
      ? '이메일 형식이 올바르지 않아요.'
      : '';
  const passwordError = !password
    ? '비밀번호를 입력해주세요.'
    : !isValidPassword(password)
      ? '비밀번호 규칙을 모두 충족해 주세요.'
      : '';
  const confirmError = !passwordConfirm
    ? '비밀번호 확인을 입력해주세요.'
    : passwordConfirm !== password
      ? '비밀번호가 일치하지 않아요.'
      : '';
  const nameError = !name.trim() ? '이름을 입력해주세요.' : '';
  const isFormValid = requiredAgreed && !emailError && !passwordError && !confirmError && !nameError;

  // 포커스를 벗어났거나 제출을 시도했을 때만 메시지 표시
  const showError = (field: string) => (submitted || touched[field]) === true;
  const markTouched = (field: string) => setTouched((prev) => ({ ...prev, [field]: true }));

  const toggleAll = (checked: boolean) => {
    setAgreeTerms(checked);
    setAgreePrivacy(checked);
    setAgreeAge(checked);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setError('');

    if (!requiredAgreed) return setError('필수 약관에 모두 동의해주세요.');
    if (!isFormValid) return;

    // TODO: 회원가입 처리 (인증 연동 후)
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* 이메일 */}
      <div>
        <label htmlFor="signup-email" style={labelStyle}>
          이메일 <span style={{ color: '#e5484d' }}>*</span>
        </label>
        <div style={{ display: 'flex', gap: '8px' }}>
          <input
            id="signup-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => markTouched('email')}
            style={{ ...inputStyle, flex: 1 }}
          />
          {/* TODO: 중복 확인 로직 연결 (저장소 정해진 후) */}
          <button
            type="button"
            style={{
              height: '50px',
              padding: '0 16px',
              border: '1px solid #267db6',
              borderRadius: '4px',
              background: '#fff',
              color: '#267db6',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            중복 확인
          </button>
        </div>
        {showError('email') && emailError && <p style={errorTextStyle}>{emailError}</p>}
      </div>

      {/* 비밀번호 */}
      <div>
        <label htmlFor="signup-password" style={labelStyle}>
          비밀번호 <span style={{ color: '#e5484d' }}>*</span>
        </label>
        <input
          id="signup-password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={() => markTouched('password')}
          style={inputStyle}
        />
        <ul style={{ listStyle: 'none', margin: '10px 0 0', padding: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {PASSWORD_RULES.map((rule) => {
            const ok = rule.test(password);
            return (
              <li
                key={rule.label}
                style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: ok ? '#267db6' : '#888' }}
              >
                <span style={{ width: '14px', textAlign: 'center', fontWeight: '700' }}>{ok ? '✓' : '○'}</span>
                {rule.label}
              </li>
            );
          })}
        </ul>
        {showError('password') && passwordError && <p style={errorTextStyle}>{passwordError}</p>}
      </div>

      {/* 비밀번호 확인 */}
      <div>
        <label htmlFor="signup-password-confirm" style={labelStyle}>
          비밀번호 확인 <span style={{ color: '#e5484d' }}>*</span>
        </label>
        <input
          id="signup-password-confirm"
          type="password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          onBlur={() => markTouched('confirm')}
          style={inputStyle}
        />
        {showError('confirm') && confirmError && <p style={errorTextStyle}>{confirmError}</p>}
      </div>

      {/* 이름 */}
      <div>
        <label htmlFor="signup-name" style={labelStyle}>
          이름 <span style={{ color: '#e5484d' }}>*</span>
        </label>
        <input
          id="signup-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => markTouched('name')}
          style={inputStyle}
        />
        {showError('name') && nameError && <p style={errorTextStyle}>{nameError}</p>}
      </div>

      {/* 약관 */}
      <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <label style={{ ...checkRowStyle, fontWeight: '700' }}>
          <input type="checkbox" checked={agreeAll} onChange={(e) => toggleAll(e.target.checked)} style={checkboxStyle} />
          전체 동의
        </label>
        <TermsRow
          label="이용약관 동의"
          checked={agreeTerms}
          onChange={setAgreeTerms}
          text={TERMS_TEXT}
          required
        />
        <TermsRow
          label="개인정보 수집 및 이용 동의"
          checked={agreePrivacy}
          onChange={setAgreePrivacy}
          text={PRIVACY_TEXT}
          required
        />
        <TermsRow label="만 14세 이상입니다" checked={agreeAge} onChange={setAgreeAge} required />
      </div>

      {error && <p role="alert" style={{ margin: 0, color: '#e53e3e', fontSize: '15px' }}>{error}</p>}

      <button
        type="submit"
        style={{
          height: '54px',
          border: 'none',
          borderRadius: '4px',
          backgroundColor: isFormValid ? '#267db6' : '#c9d3dc',
          fontSize: '16px',
          fontWeight: '700',
          color: '#fff',
          cursor: isFormValid ? 'pointer' : 'not-allowed',
        }}
      >
        가입하기
      </button>
    </form>
  );
}
