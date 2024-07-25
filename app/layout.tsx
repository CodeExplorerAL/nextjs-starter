// 匯出名為 MyCustomLayout 的函數組件
export default function MyCustomLayout({
  children, // 透過解構賦值獲取 props 中的 children
}: {
  children: React.ReactNode // 使用 TypeScript 類型聲明，指定 children 的類型為 React.ReactNode
}) {
  return (
    <html lang="en"> 
      <body> 
        <header>
          <nav> 
            <a href="/">首頁</a>｜
            <a href="/about">關於</a>｜
            <a href="/blog/categories/tech">技術博客</a>
          </nav>
        </header>
        <main>{children}</main> {/* 渲染子組件，這裡的 children 會顯示在 main 區域 */}
        <footer>© 2024 我的 Next.js 網站</footer>
      </body>
    </html>
  );
}
