import type { Metadata } from "next";
import Header from "./components/common/Header";
import { GlobalFooter } from "./components/common/GlobalFooter";
import { styles } from "./layout.styles";
import "./globals.css";

export const metadata: Metadata = {
  title: '드림다이브 | 수도권 BSAC 공인 스쿠버다이빙 교육센터',
  description: '수도권 최고의 스쿠버다이빙 교육센터 드림다이브입니다. 1:1 맞춤 교육부터 강사 양성까지 체계적인 교육 과정을 제공합니다. BSAC 공인 커리큘럼, 10년 이상 전문 강사진과 함께하세요.',
  icons: {
    icon: '/assets/logo.png',
    apple: '/assets/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" style={{ height: "100%" }}>
      <body
        suppressHydrationWarning
        className={styles.body}
      >
        <div id="site-header">
          <Header />
        </div>
        {children}
        <div id="site-footer">
          <GlobalFooter />
        </div>
      </body>
    </html>
  );
}
