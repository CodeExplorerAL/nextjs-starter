import React from 'react';

// 伺服器端獲取數據的函數
async function fetchServerTime(): Promise<string> {
  return new Date().toLocaleString();
}

// Server Component
const SSRPage = async () => {
  // 調用 fetchServerTime 函數來獲取伺服器時間
  const currentTime = await fetchServerTime();

  return (
    <div>
      <h1>Server-Side Rendered Page</h1>
      <p>Current server time: {currentTime}</p>
    </div>
  );
};

export default SSRPage;
