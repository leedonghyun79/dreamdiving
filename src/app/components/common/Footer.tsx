'use client';

import { ModalType } from '@/app/types';

interface FooterProps {
  onOpenModal: (modal: ModalType) => void;
}

export function Footer({ onOpenModal }: FooterProps) {
  return (
    <footer style={{ backgroundColor: '#0f1923', color: '#8b9bb4', padding: '48px 0 32px' }}>
      <div style={{ maxWidth: '1520px', margin: '0 auto', padding: '0 50px' }}>

        {/* 회사 정보 */}
        <div style={{ marginBottom: '24px' }}>
          <p style={{ fontSize: '14px', lineHeight: '2', color: '#8b9bb4' }}>
            업체명: 드림다이브&nbsp;|&nbsp; 센터장: 이용희
          </p>
          <p style={{ fontSize: '14px', lineHeight: '2', color: '#8b9bb4' }}>
            교육 &amp; 다이빙 문의: 010-2786-4468
          </p>
        </div>

        {/* 구분선 */}
        <div style={{ borderTop: '1px solid #1e2d3d', marginBottom: '20px' }} />

        {/* 하단 링크 + 카피라이트 */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', gap: '20px' }}>
            <button
              onClick={() => onOpenModal('terms')}
              style={{ background: 'none', border: 'none', color: '#8b9bb4', fontSize: '13px', cursor: 'pointer', padding: 0, textDecoration: 'underline' }}
            >
              이용약관
            </button>
            <button
              onClick={() => onOpenModal('privacy')}
              style={{ background: 'none', border: 'none', color: '#8b9bb4', fontSize: '13px', cursor: 'pointer', padding: 0, textDecoration: 'underline' }}
            >
              개인정보처리방침
            </button>
          </div>
          <p style={{ fontSize: '13px', color: '#4a5568' }}>
            © 2026 드림다이브. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
