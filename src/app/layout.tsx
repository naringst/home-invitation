import type { Metadata } from "next";
import { Gaegu } from "next/font/google";
import "./globals.css";

const gaegu = Gaegu({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "🎉 나리 집들이 초대장",
  description: "나리네 집들이에 초대합니다! 꼭 와주세요 💕",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${gaegu.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
