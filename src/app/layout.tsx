'use client';

import { usePathname } from "next/navigation";
import Header from "./components/common/Header";
import { GlobalFooter } from "./components/common/GlobalFooter";
import { styles } from "./layout.styles";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith('/admin');

  return (
    <html lang="ko" style={{ height: "100%" }}>
      <body
        suppressHydrationWarning
        className={styles.body}
      >
        {!isAdminRoute && <Header />}
        {children}
        {!isAdminRoute && <GlobalFooter />}
      </body>
    </html>
  );
}
