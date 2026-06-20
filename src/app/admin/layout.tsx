import { PropsWithChildren } from 'react';
import { Sidebar } from '@/components/admin/Sidebar';
import { Header } from '@/components/admin/Header';
import { css } from '@styled-system/css';
import { flex } from '@styled-system/patterns';

export default function AdminLayout({ children }: PropsWithChildren) {
  return (
    <>
      <style>{`#site-header, #site-footer { display: none !important; }`}</style>
      <div className={flex({ direction: 'column', height: '100vh' })}>
        <Header />
        <div className={flex({ flex: 1 })}>
          <Sidebar />
          <main className={css({ flex: 1, overflow: 'auto', bg: '#f9fafb', padding: '24px' })}>
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
