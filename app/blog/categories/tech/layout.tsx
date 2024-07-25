// 定義並匯出 BlogLayout 組件。這是一個函數組件，接受一個名為 children 的 prop。
export default function BlogLayout({
  children,
}: {
  // TypeScript 的類型聲明，表示 children prop 的類型是 React.ReactNode
  children: React.ReactNode
}) {
  // 返回一個包含導航和子內容的 JSX 元素
  return (
    <div>
      <h2>博客導航</h2>
      <nav>
        <a href="/blog/categories/tech">技術</a>
        <a href="/blog/categories/lifestyle">生活方式</a>
      </nav>
      {/* 渲染子內容，這部分由 BlogLayout 的父組件提供 */}
      {children}
    </div>
  )
}
