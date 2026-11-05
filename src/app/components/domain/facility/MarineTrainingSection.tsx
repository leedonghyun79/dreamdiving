'use client';

import { useState } from 'react';
import { GalleryCarousel } from '@/app/components/common/GalleryCarousel';
import { GANGNEUNG_GALLERY, YANGYANG_GALLERY } from '@/app/constants/facilityGallery';

type LocationKey = 'gangneung' | 'yangyang';

const LOCATION_TABS: { key: LocationKey; label: string }[] = [
  { key: 'gangneung', label: '강릉' },
  { key: 'yangyang', label: '양양' },
];

const GALLERY_BY_LOCATION = {
  gangneung: GANGNEUNG_GALLERY,
  yangyang: YANGYANG_GALLERY,
};

const sectionTitleStyle: React.CSSProperties = {
  fontSize: '28px',
  fontWeight: '700',
  color: '#222',
  margin: '0 0 36px',
};

// 강릉/양양 탭 (선택된 탭은 파란색 + 밑줄)
function LocationTabs({ active, onChange }: { active: LocationKey; onChange: (key: LocationKey) => void }) {
  return (
    <div role="tablist" style={{ display: 'flex', justifyContent: 'center', gap: '48px', margin: '80px 0 40px' }}>
      {LOCATION_TABS.map((tab) => {
        const selected = tab.key === active;
        return (
          <button
            key={tab.key}
            type="button"
            role="tab"
            aria-selected={selected}
            onClick={() => onChange(tab.key)}
            style={{
              background: 'none',
              border: 'none',
              padding: '8px 0',
              fontSize: '22px',
              fontWeight: selected ? '700' : '500',
              color: selected ? '#267db6' : '#999',
              cursor: 'pointer',
              borderBottom: `2px solid ${selected ? '#267db6' : 'transparent'}`,
              transition: 'color 0.2s, border-color 0.2s',
            }}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

export function MarineTrainingSection({ defaultLocation }: { defaultLocation: LocationKey }) {
  const [location, setLocation] = useState<LocationKey>(defaultLocation);
  const items = GALLERY_BY_LOCATION[location];

  return (
    <>
      {/* 해양 실습 장소 소개 */}
      <section>
        <h1 style={{ fontSize: '36px', fontWeight: '800', color: '#267db6', textAlign: 'center', margin: 0 }}>
          해양 실습 장소
        </h1>
        <div style={{ width: '40px', height: '1px', backgroundColor: '#ccc', margin: '24px auto 60px' }} />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          <div style={{ fontSize: '17px', color: '#333', lineHeight: '1.9', wordBreak: 'keep-all' }}>
            <p style={{ margin: '0 0 20px' }}>
              강원도의 맑고 깊은 바다, 그 속에서 진짜 스쿠버다이빙을 만납니다.
              <br />
              BSAC 공인 플리퍼 다이빙 센터는 이론부터 해양 실습까지,
              <br />
              전문적인 교육 환경을 제공합니다.
            </p>
            <p style={{ margin: 0 }}>
              바다와 바로 맞닿은 실습 장소에서 안전하고 체계적인 교육이 이루어지며,
              <br />
              모든 장비와 편의시설이 완비된 쾌적한 공간에서 집중도 높은 수업이 가능합니다.
              <br />
              지금, 아름다운 동해의 품에서 당신만의 다이빙 여정을 시작해보세요.
            </p>
          </div>

          <img
            src={encodeURI('/assets/시설 안내/해양실습장소 이미지오른쪽.webp')}
            alt="해양 실습 장소"
            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '4px' }}
          />
        </div>
      </section>

      {/* 강릉 / 양양 탭 */}
      <LocationTabs active={location} onChange={setLocation} />

      {/* 탭에 따라 바뀌는 갤러리 */}
      <section>
        <h2 style={sectionTitleStyle}>시설 갤러리</h2>
        <GalleryCarousel key={location} items={items} />
      </section>
    </>
  );
}
