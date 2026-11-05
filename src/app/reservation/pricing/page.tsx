import Link from 'next/link';
import { css } from '@styled-system/css';

const BORDER = '1px solid #e5e5e5';

const thStyle: React.CSSProperties = {
  padding: '14px 12px',
  fontSize: '17px',
  fontWeight: '700',
  color: '#222',
  borderBottom: BORDER,
  textAlign: 'center',
  backgroundColor: '#fff',
};

const tdStyle: React.CSSProperties = {
  padding: '16px 12px',
  fontSize: '17px',
  color: '#333',
  borderBottom: BORDER,
  textAlign: 'center',
  verticalAlign: 'middle',
  wordBreak: 'keep-all',
};

const titleBarStyle: React.CSSProperties = {
  padding: '14px 12px',
  fontSize: '22px',
  fontWeight: '700',
  color: '#222',
  backgroundColor: '#efefef',
  textAlign: 'center',
};

const footnoteStyle: React.CSSProperties = {
  fontSize: '15px',
  color: '#555',
  margin: '14px 0 0',
};

export default function PricingPage() {
  return (
    <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '80px 20px 100px' }}>
      {/* 헤더 */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <p style={{ fontSize: '20px', fontStyle: 'italic', color: '#888', margin: 0 }}>Program price</p>
        <h1 style={{ fontSize: '36px', fontWeight: '800', color: '#267db6', margin: '10px 0 20px' }}>
          프로그램 비용 안내
        </h1>
        <div style={{ width: '40px', height: '1px', backgroundColor: '#ccc', margin: '0 auto 24px' }} />
        <p style={{ fontSize: '20px', color: '#333', lineHeight: '1.6', margin: 0 }}>
          수중 세계의 전문가와 함께하는
          <br />
          맞춤형 스쿠버다이빙 여정.
        </p>
      </div>

      <div style={{ textAlign: 'right', marginBottom: '24px' }}>
        <Link
          href="/reservation/booking"
          className={css({
            display: 'inline-block',
            padding: '12px 24px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            fontSize: '17px',
            color: '#333',
            textDecoration: 'none',
            transition: 'background-color 0.2s',
            _hover: { backgroundColor: '#e5e7eb' },
          })}
        >
          프로그램 예약하기
        </Link>
      </div>

      {/* 1:1 강습 비용 */}
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '1000px', maxWidth: '100%', borderCollapse: 'collapse', border: BORDER, minWidth: '600px' }}>
          <thead>
            <tr>
              <th colSpan={3} style={titleBarStyle}>1:1 강습 비용</th>
            </tr>
            <tr>
              <th style={thStyle}></th>
              <th style={thStyle}>정상가</th>
              <th style={thStyle}>패키지</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ ...tdStyle, textAlign: 'left' }}>오션 다이버(오픈워터)</td>
              <td style={tdStyle}>800,000원</td>
              <td style={tdStyle}></td>
            </tr>
            <tr>
              <td style={{ ...tdStyle, textAlign: 'left' }}>
                오션 어드벤쳐 다이버
                <br />
                <span style={{ fontSize: '15px', color: '#666' }}>(어드밴스 + 스페셜티)</span>
              </td>
              <td style={tdStyle}>500,000원</td>
              <td style={tdStyle}>
                오션 다이버 + 오션 어드벤쳐 다이버
                <br />
                950,000원
              </td>
            </tr>
            <tr>
              <td style={{ ...tdStyle, textAlign: 'left' }}>스포츠 다이버(래스큐)</td>
              <td style={tdStyle}>600,000원</td>
              <td style={tdStyle}></td>
            </tr>
            <tr>
              <td style={{ ...tdStyle, textAlign: 'left' }}>다이버 리더(마스터)</td>
              <td style={tdStyle}>900,000원</td>
              <td style={tdStyle}></td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style={footnoteStyle}>*스페셜티: 별도 비용</p>

      {/* 2:1 강습 비용 */}
      <div style={{ overflowX: 'auto', marginTop: '60px' }}>
        <table style={{ width: '1000px', maxWidth: '100%', borderCollapse: 'collapse', border: BORDER, minWidth: '640px' }}>
          <thead>
            <tr>
              <th colSpan={4} style={titleBarStyle}>2:1 강습 비용</th>
            </tr>
            <tr>
              <th style={thStyle}></th>
              <th style={thStyle}>정상가</th>
              <th style={thStyle}>할인 금액</th>
              <th style={thStyle}>패키지</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ ...tdStyle, textAlign: 'left' }}>오션 다이버</td>
              <td style={{ ...tdStyle, color: '#999', textDecoration: 'line-through' }}>700,000원</td>
              <td style={tdStyle}>530,000원</td>
              <td style={tdStyle}></td>
            </tr>
            <tr>
              <td style={{ ...tdStyle, textAlign: 'left' }}>오션 어드벤쳐 다이버</td>
              <td style={{ ...tdStyle, color: '#999', textDecoration: 'line-through' }}>400,000원</td>
              <td style={tdStyle}>300,000원</td>
              <td style={tdStyle}>
                오션 다이버 + 오션 어드벤쳐 다이버
                <br />
                800,000원
              </td>
            </tr>
            <tr>
              <td style={{ ...tdStyle, textAlign: 'left' }}>스포츠 다이버</td>
              <td style={{ ...tdStyle, color: '#999', textDecoration: 'line-through' }}>500,000원</td>
              <td style={tdStyle}>380,000원</td>
              <td style={tdStyle}></td>
            </tr>
            <tr>
              <td style={{ ...tdStyle, textAlign: 'left' }}>다이버 리더</td>
              <td style={{ ...tdStyle, color: '#999', textDecoration: 'line-through' }}>800,000원</td>
              <td style={tdStyle}>600,000원</td>
              <td style={tdStyle}></td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style={footnoteStyle}>*스페셜티: 별도 비용</p>

      {/* 스페셜티 비용 */}
      <div style={{ overflowX: 'auto', marginTop: '60px' }}>
        <table style={{ width: '1000px', maxWidth: '100%', borderCollapse: 'collapse', border: BORDER, minWidth: '400px' }}>
          <thead>
            <tr>
              <th colSpan={2} style={titleBarStyle}>스페셜티 비용</th>
            </tr>
            <tr>
              <th style={thStyle}></th>
              <th style={thStyle}>정상가</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ ...tdStyle, textAlign: 'left' }}>펀다이빙(2회)</td>
              <td style={tdStyle}>120,000원</td>
            </tr>
            <tr>
              <td style={{ ...tdStyle, textAlign: 'left' }}>야간 다이빙(1회)</td>
              <td style={tdStyle}>90,000원</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 포함/불포함 안내 */}
      <div
        style={{
          marginTop: '60px',
          border: BORDER,
          padding: '24px',
          fontSize: '16px',
          lineHeight: '1.8',
          color: '#333',
          wordBreak: 'keep-all',
        }}
      >
        <p style={{ margin: '0 0 16px' }}>
          <strong>[포함 사항]</strong>
          <br />
          교제, 로그북, 감압표, 나이트록스북, 자격증 발급 비용, 수영장 실습비용
        </p>
        <p style={{ margin: 0 }}>
          <strong>[불포함 사항]</strong>
          <br />
          식대/교통비/해양실습 장비대여비
          <br />
          만약 1박2일 수업진행시
          <br />
          (리조트 숙소 비용별도 지불)
        </p>
      </div>
    </main>
  );
}
