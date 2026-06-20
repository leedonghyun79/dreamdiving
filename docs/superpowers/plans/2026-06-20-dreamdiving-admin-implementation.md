# DreamDiving 어드민 시스템 구현 계획

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** dreamdiving 프로젝트의 `/admin` 경로에 어드민 관리 시스템 구축 (User, Customer, Inquiry, Reservation, 방문자 통계 관리)

**Architecture:** Prisma ORM으로 데이터 관리, Next.js 16 App Router로 라우팅, Panda CSS로 UI 구현. CRM_client의 대시보드 패턴(통계 카드, 차트, 테이블)을 참고하되, dreamdiving의 기술 스택 유지.

**Tech Stack:** 
- Next.js 16.2.1 (App Router)
- Prisma 5.x (ORM)
- Panda CSS (스타일링)
- React 19.2.4
- SQLite (개발용) / PostgreSQL (프로덕션)

---

## Phase 1: 기초 설정

### Task 1: Prisma 초기화 및 의존성 추가

**Files:**
- Modify: `package.json`
- Create: `prisma/schema.prisma`
- Create: `.env.local`

- [ ] **Step 1: package.json에 Prisma 의존성 추가**

현재 package.json:
```json
{
  "name": "freight",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "prebuild": "panda codegen",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "next": "16.2.1",
    "react": "19.2.4",
    "react-dom": "19.2.4"
  },
  ...
}
```

수정:
```json
{
  "scripts": {
    "dev": "next dev",
    "prebuild": "panda codegen",
    "build": "next build",
    "start": "next start",
    "lint": "eslint",
    "postinstall": "prisma generate"
  },
  "dependencies": {
    "@prisma/client": "^5.10.2",
    "next": "16.2.1",
    "react": "19.2.4",
    "react-dom": "19.2.4"
  },
  "devDependencies": {
    "@pandacss/dev": "^1.11.3",
    "@pandacss/node": "^1.11.3",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.2.1",
    "prisma": "^5.10.2",
    "typescript": "^5"
  }
}
```

- [ ] **Step 2: .env.local 파일 생성**

```
DATABASE_URL="file:./dev.db"
```

- [ ] **Step 3: npm install 실행**

```bash
npm install
```

Expected: `@prisma/client` 와 `prisma` 패키지 설치 완료

- [ ] **Step 4: Commit**

```bash
git add package.json package-lock.json .env.local
git commit -m "feat: add Prisma ORM setup"
```

---

### Task 2: Prisma 스키마 정의

**Files:**
- Create: `prisma/schema.prisma`

- [ ] **Step 1: prisma/schema.prisma 작성**

```prisma
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

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

model Customer {
  id String @id @default(cuid())
  name String
  email String
  phone String?
  company String?
  status String @default("active")
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Inquiry {
  id String @id @default(cuid())
  userId String?
  user User? @relation(fields: [userId], references: [id])
  name String?
  email String?
  subject String
  message String
  status String @default("pending")
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Reservation {
  id String @id @default(cuid())
  userId String
  user User @relation(fields: [userId], references: [id])
  courseType String
  date DateTime
  peopleCount Int
  notes String?
  status String @default("pending")
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model VisitorLog {
  id String @id @default(cuid())
  date DateTime @db.Date
  count Int @default(1)
  createdAt DateTime @default(now())
  
  @@unique([date])
}
```

- [ ] **Step 2: Commit**

```bash
git add prisma/schema.prisma
git commit -m "feat: define Prisma schema for admin system"
```

---

### Task 3: 데이터베이스 마이그레이션 실행

**Files:**
- Create: `prisma/migrations/` (자동 생성)

- [ ] **Step 1: 마이그레이션 생성**

```bash
npx prisma migrate dev --name init
```

Expected: 
```
✔ Name of migration… › init
✔ Your database is now in sync with your schema.

Generated Prisma Client (X.X.X) to ./node_modules/@prisma/client in Xms
```

- [ ] **Step 2: prisma/dev.db 파일 확인**

```bash
ls -la prisma/dev.db
```

Expected: `prisma/dev.db` 파일이 생성됨

- [ ] **Step 3: Prisma Studio로 확인 (선택사항)**

```bash
npx prisma studio
```

- [ ] **Step 4: Commit**

```bash
git add prisma/migrations/ .env.local
git commit -m "feat: initialize database with Prisma migration"
```

---

## Phase 2: Admin 레이아웃 및 공통 컴포넌트

### Task 4: Admin 레이아웃 기본 구조

**Files:**
- Create: `src/app/admin/layout.tsx`
- Create: `src/app/admin/page.tsx` (redirect to dashboard)

- [ ] **Step 1: src/app/admin/layout.tsx 작성**

```typescript
import { PropsWithChildren } from 'react';
import { Sidebar } from '@/components/admin/Sidebar';
import { Header } from '@/components/admin/Header';
import { css, cva } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

export default function AdminLayout({ children }: PropsWithChildren) {
  return (
    <div className={flex({ direction: 'column', height: '100vh' })}>
      <Header />
      <div className={flex({ flex: 1 })}>
        <Sidebar />
        <main className={css({ flex: 1, overflow: 'auto', bg: '#f9fafb', padding: '24px' })}>
          {children}
        </main>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: src/app/admin/page.tsx 작성 (대시보드로 리다이렉트)**

```typescript
import { redirect } from 'next/navigation';

export default function AdminPage() {
  redirect('/admin/dashboard');
}
```

- [ ] **Step 3: Commit**

```bash
git add src/app/admin/layout.tsx src/app/admin/page.tsx
git commit -m "feat: create admin layout structure"
```

---

### Task 5: Admin Header 컴포넌트

**Files:**
- Create: `src/components/admin/Header.tsx`

- [ ] **Step 1: src/components/admin/Header.tsx 작성**

```typescript
'use client';

import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

export function Header() {
  return (
    <header
      className={css({
        bg: 'white',
        borderBottom: '1px solid #e5e7eb',
        padding: '16px 24px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      })}
    >
      <div className={flex({ justify: 'space-between', align: 'center' })}>
        <h1 className={css({ fontSize: '20px', fontWeight: '600', color: '#1f2937' })}>
          DreamDiving 어드민
        </h1>
        <div className={flex({ gap: '16px', align: 'center' })}>
          <span className={css({ fontSize: '14px', color: '#6b7280' })}>
            관리자
          </span>
        </div>
      </div>
    </header>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/admin/Header.tsx
git commit -m "feat: add admin Header component"
```

---

### Task 6: Admin Sidebar 컴포넌트

**Files:**
- Create: `src/components/admin/Sidebar.tsx`
- Create: `src/components/admin/NavLink.tsx`

- [ ] **Step 1: src/components/admin/NavLink.tsx 작성**

```typescript
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { css } from '@/styled-system/css';

interface NavLinkProps {
  href: string;
  label: string;
}

export function NavLink({ href, label }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={css({
        display: 'block',
        padding: '12px 16px',
        borderRadius: '6px',
        transition: 'all 0.2s',
        _hover: { bg: '#f3f4f6' },
        ...(isActive && {
          bg: '#dbeafe',
          color: '#1e40af',
          fontWeight: '600',
        }),
        color: isActive ? '#1e40af' : '#374151',
      })}
    >
      {label}
    </Link>
  );
}
```

- [ ] **Step 2: src/components/admin/Sidebar.tsx 작성**

```typescript
'use client';

import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';
import { NavLink } from './NavLink';

const menuItems = [
  { href: '/admin/dashboard', label: '대시보드' },
  { href: '/admin/users', label: '유저 관리' },
  { href: '/admin/customers', label: '고객 관리' },
  { href: '/admin/inquiries', label: '문의 관리' },
  { href: '/admin/reservations', label: '예약 관리' },
  { href: '/admin/settings', label: '설정' },
];

export function Sidebar() {
  return (
    <aside
      className={css({
        width: '240px',
        bg: 'white',
        borderRight: '1px solid #e5e7eb',
        padding: '24px 0',
        overflowY: 'auto',
      })}
    >
      <nav className={flex({ direction: 'column', gap: '8px', padding: '0 12px' })}>
        {menuItems.map((item) => (
          <NavLink key={item.href} href={item.href} label={item.label} />
        ))}
      </nav>
    </aside>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/admin/NavLink.tsx src/components/admin/Sidebar.tsx
git commit -m "feat: add admin Sidebar and NavLink components"
```

---

## Phase 3: Admin 페이지 구현

### Task 7: Dashboard 페이지

**Files:**
- Create: `src/app/admin/dashboard/page.tsx`
- Create: `src/components/admin/StatCard.tsx`
- Create: `src/components/admin/VisitorChart.tsx`

- [ ] **Step 1: src/components/admin/StatCard.tsx 작성**

```typescript
import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
}

export function StatCard({ title, value, description }: StatCardProps) {
  return (
    <div
      className={css({
        bg: 'white',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      })}
    >
      <p className={css({ fontSize: '14px', color: '#6b7280', marginBottom: '8px' })}>
        {title}
      </p>
      <p className={css({ fontSize: '32px', fontWeight: '700', color: '#1f2937' })}>
        {value}
      </p>
      {description && (
        <p className={css({ fontSize: '12px', color: '#9ca3af', marginTop: '8px' })}>
          {description}
        </p>
      )}
    </div>
  );
}
```

- [ ] **Step 2: src/components/admin/VisitorChart.tsx 작성**

```typescript
'use client';

import { css } from '@/styled-system/css';

interface VisitorChartProps {
  data: Array<{ date: string; count: number }>;
}

export function VisitorChart({ data }: VisitorChartProps) {
  const maxCount = Math.max(...data.map((d) => d.count), 1);

  return (
    <div
      className={css({
        bg: 'white',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      })}
    >
      <h3 className={css({ fontSize: '16px', fontWeight: '600', marginBottom: '16px' })}>
        방문자 통계
      </h3>
      <div className={css({ display: 'flex', gap: '8px', alignItems: 'flex-end', height: '200px' })}>
        {data.slice(-7).map((item) => (
          <div
            key={item.date}
            className={css({
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            })}
          >
            <div
              className={css({
                width: '100%',
                height: `${(item.count / maxCount) * 180}px`,
                bg: '#3b82f6',
                borderRadius: '4px 4px 0 0',
                transition: 'all 0.2s',
                _hover: { bg: '#1e40af' },
              })}
            />
            <span className={css({ fontSize: '12px', color: '#6b7280', marginTop: '8px' })}>
              {item.date.split('-')[2]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 3: src/app/admin/dashboard/page.tsx 작성**

```typescript
import { prisma } from '@/lib/prisma';
import { StatCard } from '@/components/admin/StatCard';
import { VisitorChart } from '@/components/admin/VisitorChart';
import { css } from '@/styled-system/css';
import { grid } from '@/styled-system/patterns';

export default async function DashboardPage() {
  // 통계 데이터 조회
  const totalUsers = await prisma.user.count();
  const totalInquiries = await prisma.inquiry.count();
  const pendingInquiries = await prisma.inquiry.count({
    where: { status: 'pending' },
  });
  
  // 최근 7일 방문자 데이터
  const visitorData = await prisma.visitorLog.findMany({
    orderBy: { date: 'desc' },
    take: 7,
  });

  const chartData = visitorData
    .reverse()
    .map((log) => ({
      date: log.date.toISOString().split('T')[0],
      count: log.count,
    }));

  return (
    <div className={css({ display: 'flex', flexDirection: 'column', gap: '24px' })}>
      <h1 className={css({ fontSize: '28px', fontWeight: '700' })}>
        대시보드
      </h1>

      <div className={grid({ columns: 3, gap: '20px' })}>
        <StatCard title="총 유저" value={totalUsers} />
        <StatCard title="총 문의" value={totalInquiries} />
        <StatCard
          title="미답변 문의"
          value={pendingInquiries}
          description={`${totalInquiries > 0 ? Math.round((pendingInquiries / totalInquiries) * 100) : 0}%`}
        />
      </div>

      <VisitorChart data={chartData} />
    </div>
  );
}
```

- [ ] **Step 4: src/lib/prisma.ts 생성 (Prisma 클라이언트)**

```typescript
import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log:
      process.env.NODE_ENV === 'development'
        ? ['query', 'error', 'warn']
        : ['error'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
```

- [ ] **Step 5: Commit**

```bash
git add src/app/admin/dashboard/page.tsx src/components/admin/StatCard.tsx src/components/admin/VisitorChart.tsx src/lib/prisma.ts
git commit -m "feat: add admin dashboard with visitor statistics"
```

---

### Task 8: Users 페이지 - 테이블 및 조회

**Files:**
- Create: `src/app/admin/users/page.tsx`
- Create: `src/components/admin/UserTable.tsx`

- [ ] **Step 1: src/components/admin/UserTable.tsx 작성**

```typescript
'use client';

import { css } from '@/styled-system/css';
import { box } from '@/styled-system/patterns';

interface User {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  createdAt: Date;
}

interface UserTableProps {
  users: User[];
}

export function UserTable({ users }: UserTableProps) {
  return (
    <div className={css({ overflowX: 'auto' })}>
      <table
        className={css({
          width: '100%',
          borderCollapse: 'collapse',
          bg: 'white',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        })}
      >
        <thead>
          <tr className={css({ bg: '#f3f4f6', borderBottom: '1px solid #e5e7eb' })}>
            <th className={css({ padding: '12px 16px', textAlign: 'left', fontWeight: '600' })}>
              이름
            </th>
            <th className={css({ padding: '12px 16px', textAlign: 'left', fontWeight: '600' })}>
              이메일
            </th>
            <th className={css({ padding: '12px 16px', textAlign: 'left', fontWeight: '600' })}>
              연락처
            </th>
            <th className={css({ padding: '12px 16px', textAlign: 'left', fontWeight: '600' })}>
              가입일
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className={css({ borderBottom: '1px solid #e5e7eb' })}>
              <td className={css({ padding: '12px 16px' })}>{user.name}</td>
              <td className={css({ padding: '12px 16px', color: '#6b7280' })}>
                {user.email}
              </td>
              <td className={css({ padding: '12px 16px', color: '#6b7280' })}>
                {user.phone || '-'}
              </td>
              <td className={css({ padding: '12px 16px', color: '#6b7280' })}>
                {new Date(user.createdAt).toLocaleDateString('ko-KR')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {users.length === 0 && (
        <p className={css({ textAlign: 'center', padding: '32px', color: '#6b7280' })}>
          유저가 없습니다.
        </p>
      )}
    </div>
  );
}
```

- [ ] **Step 2: src/app/admin/users/page.tsx 작성**

```typescript
import { prisma } from '@/lib/prisma';
import { UserTable } from '@/components/admin/UserTable';
import { css } from '@/styled-system/css';

export default async function UsersPage() {
  const users = await prisma.user.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className={css({ display: 'flex', flexDirection: 'column', gap: '24px' })}>
      <h1 className={css({ fontSize: '28px', fontWeight: '700' })}>
        유저 관리
      </h1>
      <UserTable users={users} />
    </div>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/app/admin/users/page.tsx src/components/admin/UserTable.tsx
git commit -m "feat: add users management page with table"
```

---

### Task 9: Customers 페이지

**Files:**
- Create: `src/app/admin/customers/page.tsx`
- Create: `src/components/admin/CustomerTable.tsx`

- [ ] **Step 1: src/components/admin/CustomerTable.tsx 작성**

```typescript
'use client';

import { css } from '@/styled-system/css';

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  status: string;
  createdAt: Date;
}

interface CustomerTableProps {
  customers: Customer[];
}

export function CustomerTable({ customers }: CustomerTableProps) {
  return (
    <div className={css({ overflowX: 'auto' })}>
      <table
        className={css({
          width: '100%',
          borderCollapse: 'collapse',
          bg: 'white',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        })}
      >
        <thead>
          <tr className={css({ bg: '#f3f4f6', borderBottom: '1px solid #e5e7eb' })}>
            <th className={css({ padding: '12px 16px', textAlign: 'left', fontWeight: '600' })}>
              이름
            </th>
            <th className={css({ padding: '12px 16px', textAlign: 'left', fontWeight: '600' })}>
              이메일
            </th>
            <th className={css({ padding: '12px 16px', textAlign: 'left', fontWeight: '600' })}>
              회사
            </th>
            <th className={css({ padding: '12px 16px', textAlign: 'left', fontWeight: '600' })}>
              상태
            </th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id} className={css({ borderBottom: '1px solid #e5e7eb' })}>
              <td className={css({ padding: '12px 16px' })}>{customer.name}</td>
              <td className={css({ padding: '12px 16px', color: '#6b7280' })}>
                {customer.email}
              </td>
              <td className={css({ padding: '12px 16px', color: '#6b7280' })}>
                {customer.company || '-'}
              </td>
              <td className={css({ padding: '12px 16px' })}>
                <span
                  className={css({
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontWeight: '500',
                    ...(customer.status === 'active'
                      ? { bg: '#dcfce7', color: '#166534' }
                      : { bg: '#fee2e2', color: '#7f1d1d' }),
                  })}
                >
                  {customer.status === 'active' ? '활성' : '비활성'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {customers.length === 0 && (
        <p className={css({ textAlign: 'center', padding: '32px', color: '#6b7280' })}>
          고객이 없습니다.
        </p>
      )}
    </div>
  );
}
```

- [ ] **Step 2: src/app/admin/customers/page.tsx 작성**

```typescript
import { prisma } from '@/lib/prisma';
import { CustomerTable } from '@/components/admin/CustomerTable';
import { css } from '@/styled-system/css';

export default async function CustomersPage() {
  const customers = await prisma.customer.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className={css({ display: 'flex', flexDirection: 'column', gap: '24px' })}>
      <h1 className={css({ fontSize: '28px', fontWeight: '700' })}>
        고객 관리
      </h1>
      <CustomerTable customers={customers} />
    </div>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/app/admin/customers/page.tsx src/components/admin/CustomerTable.tsx
git commit -m "feat: add customers management page"
```

---

### Task 10: Inquiries 페이지

**Files:**
- Create: `src/app/admin/inquiries/page.tsx`
- Create: `src/components/admin/InquiryTable.tsx`

- [ ] **Step 1: src/components/admin/InquiryTable.tsx 작성**

```typescript
'use client';

import { css } from '@/styled-system/css';

interface Inquiry {
  id: string;
  subject: string;
  name: string | null;
  email: string | null;
  status: string;
  createdAt: Date;
}

interface InquiryTableProps {
  inquiries: Inquiry[];
}

export function InquiryTable({ inquiries }: InquiryTableProps) {
  return (
    <div className={css({ overflowX: 'auto' })}>
      <table
        className={css({
          width: '100%',
          borderCollapse: 'collapse',
          bg: 'white',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        })}
      >
        <thead>
          <tr className={css({ bg: '#f3f4f6', borderBottom: '1px solid #e5e7eb' })}>
            <th className={css({ padding: '12px 16px', textAlign: 'left', fontWeight: '600' })}>
              제목
            </th>
            <th className={css({ padding: '12px 16px', textAlign: 'left', fontWeight: '600' })}>
              이메일
            </th>
            <th className={css({ padding: '12px 16px', textAlign: 'left', fontWeight: '600' })}>
              상태
            </th>
            <th className={css({ padding: '12px 16px', textAlign: 'left', fontWeight: '600' })}>
              날짜
            </th>
          </tr>
        </thead>
        <tbody>
          {inquiries.map((inquiry) => (
            <tr key={inquiry.id} className={css({ borderBottom: '1px solid #e5e7eb' })}>
              <td className={css({ padding: '12px 16px' })}>{inquiry.subject}</td>
              <td className={css({ padding: '12px 16px', color: '#6b7280' })}>
                {inquiry.email || inquiry.name || '-'}
              </td>
              <td className={css({ padding: '12px 16px' })}>
                <span
                  className={css({
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontWeight: '500',
                    ...(inquiry.status === 'pending'
                      ? { bg: '#fef3c7', color: '#92400e' }
                      : inquiry.status === 'answered'
                        ? { bg: '#dbeafe', color: '#0c2d6b' }
                        : { bg: '#dcfce7', color: '#166534' }),
                  })}
                >
                  {inquiry.status === 'pending'
                    ? '대기중'
                    : inquiry.status === 'answered'
                      ? '답변함'
                      : '해결됨'}
                </span>
              </td>
              <td className={css({ padding: '12px 16px', color: '#6b7280' })}>
                {new Date(inquiry.createdAt).toLocaleDateString('ko-KR')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {inquiries.length === 0 && (
        <p className={css({ textAlign: 'center', padding: '32px', color: '#6b7280' })}>
          문의가 없습니다.
        </p>
      )}
    </div>
  );
}
```

- [ ] **Step 2: src/app/admin/inquiries/page.tsx 작성**

```typescript
import { prisma } from '@/lib/prisma';
import { InquiryTable } from '@/components/admin/InquiryTable';
import { css } from '@/styled-system/css';

export default async function InquiriesPage() {
  const inquiries = await prisma.inquiry.findMany({
    orderBy: { createdAt: 'desc' },
    include: { user: true },
  });

  const mappedInquiries = inquiries.map((inquiry) => ({
    id: inquiry.id,
    subject: inquiry.subject,
    name: inquiry.user?.name || inquiry.name,
    email: inquiry.user?.email || inquiry.email,
    status: inquiry.status,
    createdAt: inquiry.createdAt,
  }));

  return (
    <div className={css({ display: 'flex', flexDirection: 'column', gap: '24px' })}>
      <h1 className={css({ fontSize: '28px', fontWeight: '700' })}>
        문의 관리
      </h1>
      <InquiryTable inquiries={mappedInquiries} />
    </div>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/app/admin/inquiries/page.tsx src/components/admin/InquiryTable.tsx
git commit -m "feat: add inquiries management page"
```

---

### Task 11: Reservations 페이지 (메뉴만)

**Files:**
- Create: `src/app/admin/reservations/page.tsx`

- [ ] **Step 1: src/app/admin/reservations/page.tsx 작성**

```typescript
import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

export default function ReservationsPage() {
  return (
    <div className={css({ display: 'flex', flexDirection: 'column', gap: '24px' })}>
      <h1 className={css({ fontSize: '28px', fontWeight: '700' })}>
        예약 관리
      </h1>
      
      <div
        className={flex({
          direction: 'column',
          align: 'center',
          justify: 'center',
          gap: '16px',
          padding: '60px 20px',
          bg: 'white',
          borderRadius: '8px',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        })}
      >
        <p className={css({ fontSize: '20px', fontWeight: '600', color: '#1f2937' })}>
          곧 서비스될 예정입니다
        </p>
        <p className={css({ fontSize: '14px', color: '#6b7280' })}>
          예약 스케줄 관리 기능은 개발 중입니다.
        </p>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/admin/reservations/page.tsx
git commit -m "feat: add empty reservations page placeholder"
```

---

### Task 12: Settings 페이지

**Files:**
- Create: `src/app/admin/settings/page.tsx`

- [ ] **Step 1: src/app/admin/settings/page.tsx 작성**

```typescript
import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

export default function SettingsPage() {
  return (
    <div className={css({ display: 'flex', flexDirection: 'column', gap: '24px' })}>
      <h1 className={css({ fontSize: '28px', fontWeight: '700' })}>
        설정
      </h1>

      <div className={css({ bg: 'white', borderRadius: '8px', padding: '24px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' })}>
        <h2 className={css({ fontSize: '18px', fontWeight: '600', marginBottom: '16px' })}>
          일반 설정
        </h2>
        
        <div className={flex({ direction: 'column', gap: '16px' })}>
          <div>
            <label className={css({ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px' })}>
              사이트 이름
            </label>
            <input
              type="text"
              defaultValue="DreamDiving"
              className={css({
                width: '100%',
                padding: '8px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '14px',
              })}
            />
          </div>

          <div>
            <label className={css({ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px' })}>
              관리자 이메일
            </label>
            <input
              type="email"
              defaultValue="admin@dreamdiving.com"
              className={css({
                width: '100%',
                padding: '8px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '14px',
              })}
            />
          </div>

          <button
            className={css({
              alignSelf: 'flex-start',
              padding: '10px 20px',
              bg: '#3b82f6',
              color: 'white',
              borderRadius: '6px',
              border: 'none',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s',
              _hover: { bg: '#1e40af' },
            })}
          >
            저장
          </button>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/admin/settings/page.tsx
git commit -m "feat: add settings page"
```

---

## Phase 4: API 라우트 및 마무리

### Task 13: 기본 API 라우트 설정

**Files:**
- Create: `src/app/api/admin/users/route.ts`
- Create: `src/app/api/admin/inquiries/route.ts`

- [ ] **Step 1: src/app/api/admin/users/route.ts 작성**

```typescript
import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const users = await prisma.user.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        phone: body.phone,
      },
    });
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
  }
}
```

- [ ] **Step 2: src/app/api/admin/inquiries/route.ts 작성**

```typescript
import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const inquiries = await prisma.inquiry.findMany({
      orderBy: { createdAt: 'desc' },
      include: { user: true },
    });
    return NextResponse.json(inquiries);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch inquiries' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const inquiry = await prisma.inquiry.create({
      data: {
        name: body.name,
        email: body.email,
        subject: body.subject,
        message: body.message,
      },
    });
    return NextResponse.json(inquiry);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create inquiry' }, { status: 500 });
  }
}
```

- [ ] **Step 3: Commit**

```bash
git add src/app/api/admin/users/route.ts src/app/api/admin/inquiries/route.ts
git commit -m "feat: add basic admin API routes"
```

---

### Task 14: 홈페이지에 VisitorLog 기록 미들웨어

**Files:**
- Create: `src/middleware.ts`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: src/middleware.ts 작성**

```typescript
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  // 홈페이지 방문만 추적
  if (request.nextUrl.pathname === '/') {
    // 비동기로 방문자 로그 기록 (응답을 막지 않음)
    fetch(`${request.nextUrl.origin}/api/admin/visitor-log`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    }).catch(() => {}); // 에러는 무시
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
```

- [ ] **Step 2: src/app/api/admin/visitor-log/route.ts 작성**

```typescript
import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // 오늘 날짜의 로그가 있는지 확인
    const existingLog = await prisma.visitorLog.findUnique({
      where: { date: today },
    });

    if (existingLog) {
      // 카운트 증가
      await prisma.visitorLog.update({
        where: { date: today },
        data: { count: { increment: 1 } },
      });
    } else {
      // 새로 생성
      await prisma.visitorLog.create({
        data: {
          date: today,
          count: 1,
        },
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Visitor log error:', error);
    return NextResponse.json({ error: 'Failed to log visitor' }, { status: 500 });
  }
}
```

- [ ] **Step 3: Commit**

```bash
git add src/middleware.ts src/app/api/admin/visitor-log/route.ts
git commit -m "feat: add visitor log tracking for home page"
```

---

### Task 15: 최종 테스트 및 검증

- [ ] **Step 1: dev 서버 시작**

```bash
npm run dev
```

Expected: Next.js dev server 정상 실행

- [ ] **Step 2: Admin 페이지 접근 테스트**

브라우저에서 다음 URL들 확인:
- `http://localhost:3000/admin/dashboard` - 대시보드 로드
- `http://localhost:3000/admin/users` - 유저 페이지 로드
- `http://localhost:3000/admin/customers` - 고객 페이지 로드
- `http://localhost:3000/admin/inquiries` - 문의 페이지 로드
- `http://localhost:3000/admin/reservations` - 예약 페이지 로드 (placeholder)
- `http://localhost:3000/admin/settings` - 설정 페이지 로드

Expected: 모든 페이지가 오류 없이 로드됨

- [ ] **Step 3: API 테스트**

```bash
# 사용자 조회
curl http://localhost:3000/api/admin/users

# 문의 조회
curl http://localhost:3000/api/admin/inquiries
```

Expected: 빈 배열 `[]` 반환

- [ ] **Step 4: 테스트 데이터 생성**

Prisma Studio에서 샘플 데이터 추가:

```bash
npx prisma studio
```

다음 데이터 추가:
- User: name="테스트유저", email="test@example.com"
- Customer: name="테스트고객", email="customer@example.com"
- Inquiry: subject="테스트문의", message="테스트입니다", status="pending"

- [ ] **Step 5: 대시보드 통계 확인**

브라우저 새로고침 후 Dashboard에서 통계 표시 확인

- [ ] **Step 6: 전체 커밋**

```bash
git log --oneline | head -15
```

Expected: 15개의 커밋이 보임

- [ ] **Step 7: .gitignore 확인**

```bash
cat .gitignore | grep -E "dev.db|.env"
```

Expected: dev.db와 .env.local이 gitignore에 있음

- [ ] **Step 8: 최종 커밋**

```bash
git status
```

Expected: Clean working tree

---

## 요약

**구현 완료 사항:**
- ✅ Prisma ORM 설정 (SQLite)
- ✅ Admin 레이아웃 및 네비게이션
- ✅ Dashboard (방문자 통계)
- ✅ Users 관리 페이지
- ✅ Customers 관리 페이지
- ✅ Inquiries 관리 페이지
- ✅ Reservations 페이지 (placeholder)
- ✅ Settings 페이지
- ✅ 기본 API 라우트
- ✅ 방문자 추적 미들웨어

**다음 단계:**
1. 예약 스케줄 기능 구현
2. 관리자 인증/권한 관리
3. 통계 리포트 기능 강화
4. 이메일 알림 시스템
