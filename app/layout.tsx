import type { Metadata } from "next"; // 導入 Next.js 的 Metadata 類型
import { Inter } from "next/font/google"; // 從 Google 字體導入 Inter 字體
import "./globals.css"; // 導入全局 CSS 樣式

const inter = Inter({ subsets: ["latin"] }); // 配置 Inter 字體，使用拉丁子集

export const metadata: Metadata = {
  title: "Create Next App", // 頁面標題
  description: "Generated by create next app", // 頁面描述
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 應用 Inter 字體 */}
      <body className={inter.className}>{children}</body> 
    </html>
  );
}
