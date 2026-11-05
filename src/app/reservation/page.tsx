const PROGRAMS = [
  { title: '체험다이빙', subtitle: '', price: '100,000원' },
  { title: '디스커버리 다이버', subtitle: '', price: '300,000원' },
  { title: '오션다이버', subtitle: '', price: '800,000원' },
  { title: '오션 어드벤쳐 다이버', subtitle: '(어드밴스 + 스페셜티)', price: '500,000원' },
  { title: '어드밴스드 오션 다이버', subtitle: '', price: '380,000원' },
  { title: '스포츠 다이버', subtitle: '', price: '600,000원' },
  { title: '다이브 리더', subtitle: '', price: '900,000원' },
];

export default function ReservationPage() {
  return (
    <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '80px 20px 100px' }}>
      {/* 헤더 */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <p style={{ fontSize: '20px', color: '#888', margin: 0 }}>Reservation</p>
        <h1 style={{ fontSize: '36px', fontWeight: '800', color: '#267db6', margin: '10px 0 20px' }}>
          예약하기
        </h1>
        <div style={{ width: '40px', height: '1px', backgroundColor: '#ccc', margin: '0 auto 28px' }} />
        <p style={{ fontSize: '18px', fontWeight: '700', color: '#222', margin: 0 }}>
          수중 세계의 전문가와 함께하는 맞춤형 스쿠버 다이빙 여정
        </p>
      </div>

      {/* 프로그램 목록 */}
      <ul style={{ listStyle: 'none', margin: '0 auto', padding: 0, maxWidth: '640px' }}>
        {PROGRAMS.map((program) => (
          <li
            key={program.title}
            style={{ display: 'flex', alignItems: 'center', gap: '28px', marginBottom: '40px' }}
          >
            {/* 이미지 자리 (임시 검정 박스) */}
            <div
              style={{
                flexShrink: 0,
                width: '160px',
                height: '120px',
                backgroundColor: '#000',
              }}
            />
            <div>
              <p style={{ fontSize: '20px', color: '#333', margin: 0 }}>
                {program.title}
                {program.subtitle && (
                  <>
                    <br />
                    <span style={{ fontSize: '16px', color: '#666' }}>{program.subtitle}</span>
                  </>
                )}
              </p>
              <p style={{ fontSize: '18px', color: '#333', margin: '10px 0 0' }}>{program.price}</p>
            </div>
          </li>
        ))}
      </ul>

      <div style={{ maxWidth: '640px', margin: '0 auto', borderTop: '1px solid #e5e5e5', paddingTop: '20px' }}>
        <p style={{ fontSize: '15px', color: '#555', margin: 0 }}>*프로그램 비용은 1:1 클래스 기준입니다.</p>
      </div>
    </main>
  );
}
