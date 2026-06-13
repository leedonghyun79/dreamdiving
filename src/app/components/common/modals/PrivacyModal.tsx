interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#fff',
          borderRadius: '12px',
          maxWidth: '760px',
          width: '100%',
          maxHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 28px', borderBottom: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#1f1e1e' }}>개인정보처리방침</h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '24px', color: '#666', lineHeight: 1 }}>×</button>
        </div>
        <div style={{ overflowY: 'auto', padding: '24px 28px', fontSize: '14px', lineHeight: '1.9', color: '#444' }}>
          <p>드림다이브(이하 &apos;회사&apos;라 한다)는 개인정보 보호법 제30조에 따라 정보 주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리지침을 수립, 공개합니다.</p>
          <br />
          <p><strong>제1조 (개인정보의 처리목적)</strong></p>
          <p>회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
          <p>1. 홈페이지 회원 가입 및 관리 — 회원 가입 의사 확인, 본인 식별·인증, 회원자격 유지·관리, 고충 처리 등</p>
          <p>2. 재화 또는 서비스 제공 — 서비스 제공, 콘텐츠 제공, 맞춤서비스 제공, 요금 결제 및 정산 등</p>
          <p>3. 고충 처리 — 민원인의 신원 확인, 민원사항 확인, 처리 결과 통보 등</p>
          <br />
          <p><strong>제2조 (개인정보의 처리 및 보유기간)</strong></p>
          <p>① 회사는 법령에 따른 개인정보 보유, 이용 기간 내에서 개인정보를 처리, 보유합니다.</p>
          <p>② 홈페이지 회원 가입 및 관리 : 사업자/단체 홈페이지 탈퇴 시까지</p>
          <br />
          <p><strong>제3조 (개인정보의 제3자 제공)</strong></p>
          <p>회사는 정보주체의 개인정보를 제1조에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.</p>
          <br />
          <p><strong>제4조 (개인정보처리의 위탁)</strong></p>
          <p>회사는 원활한 개인정보 업무처리를 위하여 필요한 경우 개인정보 처리업무를 위탁할 수 있으며, 위탁 시 개인정보 보호법 제25조에 따라 필요한 사항을 계약서에 명시합니다.</p>
          <br />
          <p><strong>제5조 (정보주체 및 법정대리인의 권리와 그 행사 방법)</strong></p>
          <p>① 정보주체는 회사에 대해 언제든지 개인정보 열람, 정정, 삭제, 처리정지 요구 등의 권리를 행사할 수 있습니다.</p>
          <p>② 권리 행사는 서면, 전화, 전자우편 등을 통하여 하실 수 있으며 회사는 이에 대해 지체없이 조치하겠습니다.</p>
          <br />
          <p><strong>제6조 (처리하는 개인정보 항목)</strong></p>
          <p>1. 홈페이지 회원 가입 및 관리 — 성명, 연락처, 이메일주소 등</p>
          <p>2. 재화 또는 서비스 제공 — 성명, 연락처, 이메일주소, 결제정보 등</p>
          <br />
          <p><strong>제7조 (개인정보의 파기)</strong></p>
          <p>① 회사는 개인정보 보유 기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.</p>
          <p>② 전자적 파일 형태의 개인정보는 기록을 재생할 수 없도록 파기하며, 종이 문서는 분쇄기로 분쇄하거나 소각하여 파기합니다.</p>
          <br />
          <p><strong>제8조 (개인정보의 안전성 확보조치)</strong></p>
          <p>1. 관리적 조치 : 내부관리계획 수립 및 시행, 정기적 직원 교육 등</p>
          <p>2. 기술적 조치 : 개인정보처리시스템 등의 접근 권한 관리, 접근통제시스템 설치, 암호화, 보안프로그램 설치</p>
          <p>3. 물리적 조치 : 전산실, 자료보관실 등의 접근통제</p>
          <br />
          <p><strong>제9조 (개인정보 자동 수집 장치의 설치·운영 및 거부)</strong></p>
          <p>① 회사는 이용자에게 개별적인 맞춤 서비스를 제공하기 위해 쿠키(cookie)를 사용합니다.</p>
          <p>② 정보주체는 웹 브라우저 옵션 설정을 통해 쿠키 허용, 차단 등의 설정을 할 수 있습니다.</p>
          <br />
          <p><strong>제10조 (개인정보 보호책임자)</strong></p>
          <p>▶ 개인정보 보호책임자</p>
          <p>성명 : 이용희 &nbsp;|&nbsp; 연락처 : 010-2786-4468</p>
          <br />
          <p><strong>제12조 (권익침해 구제 방법)</strong></p>
          <p>1. 개인정보 분쟁조정위원회 : (국번없이) 1833-6972 (www.kopico.go.kr)</p>
          <p>2. 개인정보침해신고센터 : (국번없이) 118 (privacy.kisa.or.kr)</p>
          <p>3. 대검찰청 : (국번없이) 1301 (www.spo.go.kr)</p>
          <p>4. 경찰청 : (국번없이) 182 (ecrm.police.go.kr/minwon/main)</p>
          <br />
          <p><strong>제13조 (개인정보 처리방침 시행 및 변경)</strong></p>
          <p>이 개인정보 처리방침은 2026.06.16.부터 적용됩니다.</p>
        </div>
      </div>
    </div>
  );
}
