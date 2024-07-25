// 匯出 Post 的函數組件。Post 組件從 props（參數）中提取 params（對象），
// params 對象中包含 id 屬性，且 id 的類型為 string（字串）。
// 如果去除 TypeScript 的類型聲明，這段程式碼可以直接作為 JavaScript 的寫法(參下方)。
export default function Post({ params }: { params: { id: string } }) {
  return <h1>文章 ID: {params.id}</h1>;
}

// JavaScript的寫法
// export default function Post({ params }) {
//   return <h1>文章 ID: {params.id}</h1>;
// }
