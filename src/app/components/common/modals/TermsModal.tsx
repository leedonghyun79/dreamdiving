interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
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
          <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#1f1e1e' }}>이용약관</h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '24px', color: '#666', lineHeight: 1 }}>×</button>
        </div>
        <div style={{ overflowY: 'auto', padding: '24px 28px', fontSize: '14px', lineHeight: '1.9', color: '#444' }}>
          <p><strong>제1조 목적</strong></p>
          <p>본 이용약관은 드림다이브(이하 &quot;사이트&quot;)의 서비스의 이용조건과 운영에 관한 제반 사항 규정을 목적으로 합니다.</p>
          <br />
          <p><strong>제2조 용어의 정의</strong></p>
          <p>본 약관에서 사용되는 주요한 용어의 정의는 다음과 같습니다.</p>
          <p>① 회원 : 사이트의 약관에 동의하고 개인정보를 제공하여 회원등록을 한 자로서, 사이트와의 이용계약을 체결하고 사이트를 이용하는 이용자를 말합니다.</p>
          <p>② 이용계약 : 사이트 이용과 관련하여 사이트와 회원간에 체결 하는 계약을 말합니다.</p>
          <p>③ 회원 아이디(이하 &quot;ID&quot;) : 회원의 식별과 회원의 서비스 이용을 위하여 회원별로 부여하는 고유한 문자와 숫자의 조합을 말합니다.</p>
          <p>④ 비밀번호 : 회원이 부여받은 ID와 일치된 회원임을 확인하고 회원의 권익 보호를 위하여 회원이 선정한 문자와 숫자의 조합을 말합니다.</p>
          <p>⑤ 운영자 : 서비스에 홈페이지를 개설하여 운영하는 운영자를 말합니다.</p>
          <p>⑥ 해지 : 회원이 이용계약을 해약하는 것을 말합니다.</p>
          <br />
          <p><strong>제3조 약관 외 준칙</strong></p>
          <p>운영자는 필요한 경우 별도로 운영정책을 공지 안내할 수 있으며, 본 약관과 운영정책이 중첩될 경우 운영정책이 우선 적용됩니다.</p>
          <br />
          <p><strong>제4조 이용계약 체결</strong></p>
          <p>① 이용계약은 회원으로 등록하여 사이트를 이용하려는 자의 본 약관 내용에 대한 동의와 가입신청에 대하여 운영자의 이용승낙으로 성립합니다.</p>
          <p>② 회원으로 등록하여 서비스를 이용하려는 자는 사이트 가입신청 시 본 약관을 읽고 아래에 있는 &quot;동의합니다&quot;를 선택하는 것으로 본 약관에 대한 동의 의사 표시를 합니다.</p>
          <br />
          <p><strong>제5조 서비스 이용 신청</strong></p>
          <p>① 회원으로 등록하여 사이트를 이용하려는 이용자는 사이트에서 요청하는 제반정보(이용자ID, 비밀번호, 닉네임 등)를 제공해야 합니다.</p>
          <p>② 타인의 정보를 도용하거나 허위의 정보를 등록하는 등 본인의 진정한 정보를 등록하지 않은 회원은 사이트 이용과 관련하여 아무런 권리를 주장할 수 없으며, 관계 법령에 따라 처벌받을 수 있습니다.</p>
          <br />
          <p><strong>제6조 개인정보처리방침</strong></p>
          <p>사이트 및 운영자는 회원가입 시 제공한 개인정보 중 비밀번호를 가지고 있지 않으며 이와 관련된 부분은 사이트의 개인정보처리방침을 따릅니다. 운영자는 관계 법령이 정하는 바에 따라 회원등록정보를 포함한 회원의 개인정보를 보호하기 위하여 노력합니다.</p>
          <br />
          <p><strong>제7조 운영자의 의무</strong></p>
          <p>① 운영자는 이용회원으로부터 제기되는 의견이나 불만이 정당하다고 인정할 경우에는 가급적 빨리 처리하여야 합니다.</p>
          <p>② 운영자는 계속적이고 안정적인 사이트 제공을 위하여 설비에 장애가 생기거나 유실된 때에는 이를 지체 없이 수리 또는 복구할 수 있도록 노력합니다.</p>
          <br />
          <p><strong>제8조 회원의 의무</strong></p>
          <p>① 회원은 본 약관에서 규정하는 사항과 운영자가 정한 제반 규정, 공지사항 및 운영정책 등 사이트가 공지하는 사항 및 관계 법령을 준수하여야 합니다.</p>
          <p>② 회원은 사이트의 명시적 동의가 없는 한 서비스의 이용 권한, 기타 이용계약상 지위를 타인에게 양도, 증여할 수 없으며, 이를 담보로 제공할 수 없습니다.</p>
          <p>③ 이용고객은 아이디 및 비밀번호 관리에 상당한 주의를 기울여야 하며, 운영자나 사이트의 동의 없이 제3자에게 아이디를 제공하여 이용하게 할 수 없습니다.</p>
          <p>④ 회원은 운영자와 사이트 및 제3자의 지적 재산권을 침해해서는 안 됩니다.</p>
          <br />
          <p><strong>제9조 서비스 이용 시간</strong></p>
          <p>① 서비스 이용 시간은 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴 1일 24시간을 원칙으로 합니다.</p>
          <p>② 사이트는 시스템 정기점검, 증설 및 교체를 위해 서비스를 일시중단 할 수 있습니다.</p>
          <br />
          <p><strong>제10조 서비스 이용 해지</strong></p>
          <p>① 회원이 사이트와의 이용계약을 해지하고자 하는 경우에는 회원 본인이 온라인을 통하여 등록해지 신청을 하여야 합니다.</p>
          <br />
          <p><strong>제15조 손해배상</strong></p>
          <p>① 본 사이트의 발생한 모든 민, 형법상 책임은 회원 본인에게 1차적으로 있습니다.</p>
          <p>② 본 사이트로부터 회원이 받은 손해가 천재지변 등 불가항력적이거나 회원의 고의 또는 과실로 인하여 발생한 때에는 손해배상을 하지 않습니다.</p>
          <br />
          <p><strong>부칙</strong></p>
          <p>이 약관은 2026.06.16.부터 시행합니다.</p>
        </div>
      </div>
    </div>
  );
}
