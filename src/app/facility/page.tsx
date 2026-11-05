import { GalleryCarousel } from '@/app/components/common/GalleryCarousel';
import { K26_GALLERY } from '@/app/constants/facilityGallery';

const SPEC_ROWS: [string, string][] = [
  ['수량', '2600 톤'],
  ['풀장깊이', '가로 30미터, 세로 12미터'],
  ['계단식 수심', '1.3m, 2.5m, 5m, 10m, 26m'],
  ['최고의 뷰', '청평댐 인접, 최적의 자연환경'],
  ['최고의 수질', '가평 지하수 사용'],
  ['수온관리', '연중 수온 29도, 수영장 기온 30도 유지'],
  ['안전시설', '수중 cctv, 수중스피커 완비'],
  ['관람장', '대형관람창 3개 포함 8개의 관람창을 통한 물 안 관찰 소통'],
];

const FLOOR_ROWS: [string, string][] = [
  ['지상1층', '로비, 탈의실'],
  ['지상2층', '사무실, 탈의실'],
  ['지상3층', '참수풀 입구'],
  ['지상4층', '공조실'],
  ['옥상공원', '펜비치(sunbeach), 휴게공간'],
  ['지하1층', '기계실, 전기실'],
];

const sectionTitleStyle: React.CSSProperties = {
  fontSize: '28px',
  fontWeight: '700',
  color: '#222',
  margin: '0 0 36px',
};

function InfoTable({ rows }: { rows: [string, string][] }) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '16px' }}>
      <tbody>
        {rows.map(([label, value]) => (
          <tr key={label} style={{ borderBottom: '1px solid #eee' }}>
            <th
              scope="row"
              style={{
                width: '140px',
                padding: '14px 12px',
                textAlign: 'right',
                fontWeight: '600',
                color: '#267db6',
                verticalAlign: 'top',
              }}
            >
              {label}
            </th>
            <td style={{ padding: '14px 12px', color: '#444', lineHeight: '1.6' }}>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function FacilityPage() {
  return (
    <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 20px 100px' }}>
      {/* K26 소개 */}
      <section>
        <h1 style={{ fontSize: '36px', fontWeight: '800', color: '#267db6', textAlign: 'center', margin: 0 }}>
          K26 다이빙 풀장
        </h1>
        <div style={{ width: '40px', height: '1px', backgroundColor: '#ccc', margin: '24px auto 60px' }} />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          <div style={{ fontSize: '17px', color: '#333', lineHeight: '1.9', wordBreak: 'keep-all' }}>
            <p style={{ margin: '0 0 20px' }}>
              국내 최고 수심 26m의 깊이를 갖춘 K26 다이빙 풀장은
              <br />
              모든 다이버를 위한 최고의 트레이닝 공간입니다.
            </p>
            <p style={{ margin: '0 0 20px' }}>
              기온과 수온이 연중 일정하게 유지되어 언제나 최상의 교육 환경을 제공하며
              <br />
              입문자부터 프로 다이버까지, 모든 레벨을 위한 안전하고 쾌적한 공간이 마련되어 있습니다.
            </p>
            <p style={{ margin: 0 }}>
              최신 설비와 전문 스태프의 철저한 관리로 완벽한 트레이닝이 가능합니다.
              <br />
              당신의 첫 다이빙, 그리고 끝없는 도전의 시작을 드림다이브에서 함께하세요.
            </p>
          </div>

          <img
            src={encodeURI('/assets/시설 안내/K26 다이빙 풀장.webp')}
            alt="K26 다이빙 풀장 외관"
            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '4px' }}
          />
        </div>
      </section>

      {/* 시설 구조 */}
      <section style={{ marginTop: '120px' }}>
        <h2 style={sectionTitleStyle}>시설 구조</h2>

        <img
          src={encodeURI('/assets/시설 안내/시설구조.webp')}
          alt="K26 다이빙 풀장 시설 구조도"
          style={{ width: '100%', height: 'auto', display: 'block', marginBottom: '60px' }}
        />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
          <InfoTable rows={SPEC_ROWS} />
          <InfoTable rows={FLOOR_ROWS} />
        </div>
      </section>

      {/* 시설 갤러리 */}
      <section style={{ marginTop: '120px' }}>
        <h2 style={sectionTitleStyle}>시설 갤러리</h2>

        <GalleryCarousel items={K26_GALLERY} />
      </section>
    </main>
  );
}
