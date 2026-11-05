'use client';

import { SignupForm } from '@/app/components/domain/auth/SignupForm';

export default function SignupPage() {

  return (
    <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '180px 20px 100px' }}>
      <div style={{ maxWidth: '520px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '700', color: '#111', textAlign: 'center', margin: '0 0 40px' }}>
          회원가입
        </h1>
        <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '40px 32px', boxSizing: 'border-box' }}>
          <SignupForm />
        </div>
      </div>
    </main>
  );
}
