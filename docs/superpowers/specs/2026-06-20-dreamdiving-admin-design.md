# DreamDiving 어드민 시스템 설계

**작성일**: 2026-06-20  
**상태**: 설계 완료  
**목표**: CRM_client 기반으로 dreamdiving 프로젝트에 통합 어드민 시스템 구축

---

## 개요

dreamdiving 프로젝트에 `/admin` 경로로 어드민 시스템을 추가한다. CRM_client의 검증된 구조를 재사용하면서 dreamdiving만의 기능(유저 관리, 방문자 통계, 예약 관리)을 추가한다.

---

## 요구사항

### 기능 요구사항
- **방문자 통계**: 대시보드에서 일일 방문자 수 시각화
- **유저 정보 관리**: 회원 가입 정보 및 프로필 관리
- **고객 관리**: 기존 CRM 기능 유지
- **문의 관리**: 유저 문의 포함하여 관리
- **예약 스케줄**: 메뉴만 추가 (기능은 추후 구현)
- **설정**: 기본 설정 페이지

### 비기능 요구사항
- CRM_client의 기존 UI/UX 패턴 재사용
- 동일한 데이터베이스(Prisma) 사용
- dreamdiving 프로젝트 내 통합 운영

---

## 아키텍처

### 라우트 구조
```
/admin
├── /dashboard          - 통계 및 개요
├── /users             - 유저 정보 관리
├── /customers         - 고객 관리
├── /inquiries         - 문의 관리
├── /reservations      - 예약 관리 (메뉴만)
├── /settings          - 설정
└── /layout.tsx        - Admin 레이아웃
```

### 컴포넌트 재사용
- **레이아웃**: CRM_client의 Header, Sidebar 구조
- **공통 컴포넌트**: Spinner, PageLoader, Modal, Button 등
- **대시보드 차트**: StatChart, VisitorChart 등 기존 컴포넌트 활용
- **테이블 컴포넌트**: 고객/문의/유저 목록 표시

---

## 데이터 구조

### Prisma 스키마

#### User 테이블 (새로 추가)
```typescript
model User {
  id String @id @default(cuid())
  name String
  email String @unique
  phone String?
  profileImage String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  inquiries Inquiry[]
  reservations Reservation[]
}
```

#### Inquiry 테이블 (기존 유지 + User 연결)
```typescript
model Inquiry {
  id String @id @default(cuid())
  userId String?
  user User?
  subject String
  message String
  status String @default("pending")
  createdAt DateTime @default(now())
}
```

#### Reservation 테이블 (예약용)
```typescript
model Reservation {
  id String @id @default(cuid())
  userId String
  user User
  courseType String
  date DateTime
  peopleCount Int
  notes String?
  status String @default("pending")
  createdAt DateTime @default(now())
}
```

#### VisitorLog 테이블 (방문자 통계용)
```typescript
model VisitorLog {
  id String @id @default(cuid())
  date DateTime
  count Int @default(1)
  createdAt DateTime @default(now())
}
```

---

## 페이지별 상세

### 1. Dashboard (`/admin/dashboard`)
- **내용**: 
  - 방문자 통계 차트 (일일/주간/월간)
  - 주요 지표 카드 (총 방문자, 신규 유저, 미답변 문의)
  - 최근 문의 목록
  - 예정된 예약 목록 (나중에 추가)
- **데이터 소스**: VisitorLog, User, Inquiry, Reservation

### 2. Users (`/admin/users`)
- **내용**: 
  - 유저 목록 (페이지네이션)
  - 유저 상세 정보 조회
  - 프로필 수정/삭제
  - 유저별 문의 및 예약 내역 확인
- **데이터 소스**: User, Inquiry, Reservation

### 3. Customers (`/admin/customers`)
- **내용**: CRM_client 기존 구조 유지
  - 고객 목록
  - 고객 상세 정보
  - 고객 추가/수정/삭제
- **데이터 소스**: Customer (기존)

### 4. Inquiries (`/admin/inquiries`)
- **내용**:
  - 문의 목록 (필터: 유저/비유저, 상태)
  - 문의 상세 조회
  - 답변 추가
  - 상태 변경 (pending → answered → resolved)
- **데이터 소스**: Inquiry, User

### 5. Reservations (`/admin/reservations`)
- **내용**: 
  - "예약 관리 시스템 준비 중" 메시지
  - 메뉴는 활성화, 기능은 추후 구현
- **데이터 소스**: 없음 (추후)

### 6. Settings (`/admin/settings`)
- **내용**: 기본 설정 페이지 (CRM_client 유지)

---

## 데이터 플로우

### 방문자 통계
1. 홈페이지 방문 시 VisitorLog 기록 (middleware에서 요청 감지)
   - `/page.tsx` 방문 시마다 카운트 증가
   - 중복 방문 체크 (동일 IP/세션 같은 날은 1회만 기록) - 추후 정의
2. Dashboard에서 VisitorLog 조회 및 차트 렌더링
3. 일일/주간/월간 집계 (DB 쿼리에서 처리)

### 유저 문의
1. 홈페이지 "문의하기" → User 정보 + Inquiry 생성
2. Inquiries 페이지에서 조회 및 답변 추가
3. Users 페이지에서 유저별 문의 내역 확인

### 유저 예약 (나중에 추가)
1. 유저가 예약 신청 → Reservation 생성
2. Reservations 페이지에서 관리
3. Dashboard에서 예정된 예약 확인

---

## 구현 순서

### Phase 1: 기초 설정
1. Prisma 스키마 업데이트 (User, VisitorLog, Inquiry 연결)
2. DB 마이그레이션
3. `/admin` 라우트 구조 생성

### Phase 2: 레이아웃 및 공통 컴포넌트
1. CRM_client의 Header, Sidebar 복사 및 수정
2. Admin 레이아웃 통합
3. 공통 컴포넌트 (Button, Modal, Table 등) 공유 설정

### Phase 3: 페이지 구현
1. Dashboard (기본 레이아웃 + 방문자 통계)
2. Users (CRUD)
3. Customers (기존 유지)
4. Inquiries (기존 유지)
5. Reservations (빈 페이지)
6. Settings (기존 유지)

### Phase 4: 통합 및 테스트
1. 전체 흐름 테스트
2. API 연동 확인
3. 권한 관리 (관리자만 접근)

---

## 기술 스택

- **프레임워크**: Next.js 15+
- **ORM**: Prisma
- **UI**: React + Tailwind CSS
- **상태 관리**: React Query (TanStack Query)
- **인증**: 기존 CRM_client 방식 유지

---

## 향후 계획

1. **예약 관리 기능 완성** (메뉴는 먼저 추가)
2. **이메일 알림** (예약, 문의 답변)
3. **분석 리포트** (월간 방문자, 문의 통계)
4. **다중 관리자 지원** (권한 구분)

---

## 변경 이력

| 날짜 | 항목 | 내용 |
|------|------|------|
| 2026-06-20 | 초안 | 설계 문서 작성 완료 |
