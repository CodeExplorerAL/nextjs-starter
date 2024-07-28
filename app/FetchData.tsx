import React, { useEffect, useState } from 'react';
// 從 React 中導入 useEffect 和 useState，用於處理副作用和狀態管理。

function FetchData() {
  const [message, setMessage] = useState<string>('');
  // 使用 useState 創建一個狀態變量 message，用於存儲從 API 獲取的消息。初始值為空字符串。

  useEffect(() => {
    // 使用 useEffect 在組件渲染後執行副作用（即發送 API 請求）。
    const fetchData = async () => {
      try {
        const response = await fetch('/api/hello');
        // 發送 GET 請求到 /api/hello 端點。
        const data = await response.json();
        // 將響應轉換為 JSON 格式。
        setMessage(data.message);
        // 使用 setMessage 更新狀態，以顯示從 API 獲取的數據。
      } catch (error) {
        console.error('Error fetching data:', error);
        // 如果請求失敗，則輸出錯誤信息。
      }
    };

    fetchData();
    // 調用 fetchData 函數發送請求並處理響應。
  }, []);
  // 空依賴數組表示這個 useEffect 只在組件首次渲染時執行一次。

  return (
    <div>
      <p>{message}</p>
      {/* 顯示從 API 返回的消息 */}
    </div>
  );
}

export default FetchData;
// 將 FetchData 組件導出，以便在其他地方使用。
