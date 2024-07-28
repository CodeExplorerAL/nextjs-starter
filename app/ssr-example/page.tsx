import React from 'react';

// 定義頁面組件的屬性類型
interface PageProps {
  currentTime: string;
}
// 在 TypeScript 中，interface 關鍵字用於定義一個介面，這是一種描述對象結構的方式。
// PageProps 是介面的名稱，它用來描述 React 頁面組件的屬性（props）。介面 PageProps 包含一個屬性 currentTime，這個屬性的類型是 string，意味著任何使用 PageProps 介面的對象都必須有一個 currentTime 屬性，且這個屬性必須是字符串類型。


// 伺服器端獲取數據的函數
async function fetchServerTime(): Promise<string> {
  // 返回當前的伺服器時間作為字符串
  return new Date().toLocaleString();
}
// 定義 fetchServerTime 的異步函數，它返回一個 Promise<string>。它會創建一個新的 Date 對象，並使用 toLocaleString() 方法將時間轉換為易於閱讀的字符串形式。由於該函數是異步的，它會返回一個承諾（Promise），該承諾在完成後會解決為格式化的時間字符串。


// 伺服器端渲染的頁面組件
const SSRPage: React.FC<PageProps> = async () => {
  // 調用 fetchServerTime 函數來獲取伺服器時間
  const currentTime = await fetchServerTime();
// 定義了一個名為 SSRPage 的 React 函數組件，這個組件使用 async 關鍵字，使其能夠異步地調用 fetchServerTime 函數以獲取伺服器時間，並將這個時間值賦給 currentTime 變量。

  return (
    <div>
      <h1>Server-Side Rendered</h1>
      {/* 顯示當前的伺服器時間 */}
      <p>當前伺服器時間: {currentTime}</p>
    </div>
  );
};

export default SSRPage;