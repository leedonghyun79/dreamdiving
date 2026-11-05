'use client';

import { FormEvent, useState } from 'react';

const PRIVACY_TEXT = `회사명(이하 '회사'라 한다)는 개인정보 보호법 제30조에 따라 정보 주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리지침을 수립, 공개합니다.

제1조 (개인정보의 처리목적)
회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행합니다.
1. 문의 접수 및 답변
2. 프로그램 예약 상담 및 안내

제2조 (개인정보의 처리 및 보유기간)
회사는 법령에 따른 개인정보 보유·이용기간 또는 정보 주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다. 문의 처리가 완료된 개인정보는 지체 없이 파기합니다.`;

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 2px',
  border: 'none',
  borderBottom: '1px solid #ddd',
  fontSize: '16px',
  color: '#333',
  outline: 'none',
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '16px',
  color: '#333',
  marginBottom: '8px',
};

const requiredMark = <span style={{ color: '#e53e3e', marginLeft: '4px' }}>•</span>;

export default function InquiryPage() {
  const [name, setName] = useState('');
  const [phone1, setPhone1] = useState('');
  const [phone2, setPhone2] = useState('');
  const [phone3, setPhone3] = useState('');
  const [kakaoId, setKakaoId] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) return setError('성함을 입력해주세요.');
    if (!phone1 || !phone2 || !phone3) return setError('연락처를 입력해주세요.');
    if (!agreed) return setError('개인정보 수집 및 이용에 동의해주세요.');

    // TODO: 문의 저장 기능(DB/메일) 연결 필요
    alert('문의가 접수되었습니다. 빠르게 답변드릴게요.');
    setName('');
    setPhone1('');
    setPhone2('');
    setPhone3('');
    setKakaoId('');
    setTitle('');
    setContent('');
    setAgreed(false);
  };

  return (
    <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 20px 100px' }}>
      {/* 헤더 */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <p style={{ fontSize: '20px', fontStyle: 'italic', color: '#888', margin: 0 }}>Contact</p>
        <h1 style={{ fontSize: '36px', fontWeight: '800', color: '#267db6', margin: '10px 0 20px' }}>
          온라인 문의
        </h1>
        <div style={{ width: '40px', height: '1px', backgroundColor: '#ccc', margin: '0 auto' }} />
      </div>

      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: '36px', maxWidth: '420px', width: '100%', margin: '0 auto' }}
      >
        {/* 성함 */}
        <div>
          <label htmlFor="inquiry-name" style={labelStyle}>
            성함{requiredMark}
          </label>
          <input
            id="inquiry-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />
        </div>

        {/* 연락처 */}
        <div>
          <span style={labelStyle}>연락처{requiredMark}</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <input
              aria-label="연락처 앞 3자리"
              inputMode="numeric"
              maxLength={3}
              value={phone1}
              onChange={(e) => setPhone1(e.target.value.replace(/\D/g, ''))}
              style={{ ...inputStyle, textAlign: 'center' }}
            />
            <span>-</span>
            <input
              aria-label="연락처 가운데 4자리"
              inputMode="numeric"
              maxLength={4}
              value={phone2}
              onChange={(e) => setPhone2(e.target.value.replace(/\D/g, ''))}
              style={{ ...inputStyle, textAlign: 'center' }}
            />
            <span>-</span>
            <input
              aria-label="연락처 뒤 4자리"
              inputMode="numeric"
              maxLength={4}
              value={phone3}
              onChange={(e) => setPhone3(e.target.value.replace(/\D/g, ''))}
              style={{ ...inputStyle, textAlign: 'center' }}
            />
          </div>
        </div>

        {/* 카카오톡 ID */}
        <div>
          <label htmlFor="inquiry-kakao" style={labelStyle}>
            카카오톡ID
          </label>
          <input
            id="inquiry-kakao"
            type="text"
            value={kakaoId}
            onChange={(e) => setKakaoId(e.target.value)}
            style={inputStyle}
          />
        </div>

        {/* 제목 */}
        <div>
          <label htmlFor="inquiry-title" style={labelStyle}>
            제목
          </label>
          <input
            id="inquiry-title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={inputStyle}
          />
        </div>

        {/* 내용 */}
        <div>
          <label htmlFor="inquiry-content" style={labelStyle}>
            내용
          </label>
          <textarea
            id="inquiry-content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={6}
            style={{
              ...inputStyle,
              borderBottom: 'none',
              border: '1px solid #ddd',
              padding: '12px',
              resize: 'vertical',
              fontFamily: 'inherit',
            }}
          />
        </div>

        {/* 개인정보 동의 */}
        <div>
          <span style={labelStyle}>개인정보 수집 및 이용 동의{requiredMark}</span>
          <div
            style={{
              height: '160px',
              overflowY: 'auto',
              border: '1px solid #ddd',
              padding: '14px',
              fontSize: '14px',
              lineHeight: '1.7',
              color: '#555',
              whiteSpace: 'pre-line',
              wordBreak: 'keep-all',
            }}
          >
            {PRIVACY_TEXT}
          </div>
          <label
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginTop: '12px',
              fontSize: '15px',
              color: '#333',
              cursor: 'pointer',
            }}
          >
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              style={{ width: '18px', height: '18px' }}
            />
            개인정보 수집 및 이용에 동의합니다.
          </label>
        </div>

        {error && (
          <p role="alert" style={{ margin: 0, color: '#e53e3e', fontSize: '15px' }}>
            {error}
          </p>
        )}

        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <button
            type="submit"
            style={{
              minWidth: '180px',
              padding: '14px 32px',
              border: '1px solid #267db6',
              borderRadius: '8px',
              backgroundColor: '#267db6',
              color: '#fff',
              fontSize: '17px',
              fontWeight: '700',
              cursor: 'pointer',
            }}
          >
            제출하기
          </button>
        </div>
      </form>
    </main>
  );
}
