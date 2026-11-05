'use client';

import Link from 'next/link';
import { FormEvent, useEffect, useState } from 'react';

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
}

const overlayStyle: React.CSSProperties = {
  position: 'fixed',
  inset: 0,
  zIndex: 200,
  backgroundColor: 'rgba(0,0,0,0.45)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
};

const panelStyle: React.CSSProperties = {
  position: 'relative',
  width: '100%',
  maxWidth: '370px',
  maxHeight: '90vh',
  overflowY: 'auto',
  backgroundColor: '#fff',
  borderRadius: '8px',
  padding: '48px 24px 32px',
  boxSizing: 'border-box',
};

const closeButtonStyle: React.CSSProperties = {
  position: 'absolute',
  top: '16px',
  right: '16px',
  border: 'none',
  background: 'none',
  fontSize: '24px',
  lineHeight: 1,
  color: '#999',
  cursor: 'pointer',
};

const linkTextStyle: React.CSSProperties = {
  fontSize: '15px',
  color: '#222',
  textDecoration: 'none',
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
};

function LoginForm({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepLogin, setKeepLogin] = useState(true);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: 인증 연동 후 로그인 처리
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ border: '1px solid #ddd', borderRadius: '4px' }}>
        <input
          type="email"
          aria-label="이메일"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: '100%',
            height: '50px',
            padding: '0 14px',
            border: 'none',
            borderBottom: '1px solid #ddd',
            fontSize: '15px',
            outline: 'none',
            boxSizing: 'border-box',
          }}
        />
        <input
          type="password"
          aria-label="비밀번호"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: '100%',
            height: '50px',
            padding: '0 14px',
            border: 'none',
            fontSize: '15px',
            outline: 'none',
            boxSizing: 'border-box',
          }}
        />
      </div>

      <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px', color: '#333', cursor: 'pointer' }}>
        <input
          type="checkbox"
          checked={keepLogin}
          onChange={(e) => setKeepLogin(e.target.checked)}
          style={{ width: '18px', height: '18px', accentColor: '#267db6' }}
        />
        로그인상태유지
      </label>

      <button
        type="submit"
        style={{
          height: '50px',
          border: 'none',
          borderRadius: '8px',
          backgroundColor: '#267db6',
          fontSize: '16px',
          fontWeight: '700',
          color: '#fff',
          cursor: 'pointer',
        }}
      >
        로그인
      </button>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/signup" onClick={onClose} style={linkTextStyle}>
          회원가입
        </Link>
        <span style={{ ...linkTextStyle, cursor: 'default' }}>아이디 · 비밀번호 찾기</span>
      </div>
    </form>
  );
}

export function AuthModal({ open, onClose }: AuthModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div style={overlayStyle} onClick={onClose} role="presentation">
      <div style={panelStyle} onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <button type="button" onClick={onClose} aria-label="닫기" style={closeButtonStyle}>
          ×
        </button>
        <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#111', textAlign: 'center', margin: '0 0 28px' }}>
          로그인
        </h2>
        <LoginForm onClose={onClose} />
      </div>
    </div>
  );
}
