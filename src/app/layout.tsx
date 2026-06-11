import type { Metadata } from "next";
import { css } from "../../styled-system/css";
import Header from "./components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dream Diving - 꿈다이빙",
  description: "수중의 최고의 스쿠버다이빙, 안전하고 즐거운 다이빙 체험",
  icons: {
    icon: "/assets/logo.png",
    apple: "/assets/logo.png",
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
        className={css({
          minHeight: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          fontFamily: "'Noto Sans KR', sans-serif",
        })}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
