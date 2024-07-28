import React, { useEffect, useState } from 'react';
// 從 React 庫中導入 React、useEffect 和 useState，用於處理副作用和狀態管理。

function UserData() {
  const [user, setUser] = useState<{ id: string; name: string } | null>(null);
  // 使用 useState 創建一個狀態變量 user，用於存儲從 API 獲取的用戶數據。初始值為 null。

  useEffect(() => {
    // 使用 useEffect 在組件渲染後執行副作用（即發送 API 請求）。
    const fetchUser = async () => {
      try {
        const response = await fetch('/api/users/123');
        // 發送 GET 請求到 /api/users/123 端點。
        const data = await response.json();
        // 將響應轉換為 JSON 格式。
        setUser(data);
        // 使用 setUser 更新狀態，以顯示從 API 獲取的用戶數據。
      } catch (error) {
        console.error('Error fetching user:', error);
        // 如果請求失敗，則輸出錯誤信息。
      }
    };

    fetchUser();
    // 調用 fetchUser 函數發送請求並處理響應。
  }, []);
  // 空依賴數組表示這個 useEffect 只在組件首次渲染時執行一次。

  return (
    <div>
      {user ? (
        <p>ID: {user.id}, Name: {user.name}</p>
        // 如果 user 有數據，則顯示用戶的 ID 和名稱。
      ) : (
        <p>Loading...</p>
        // 如果 user 沒有數據（即數據還在加載中），則顯示 "Loading..."。
      )}
    </div>
  );
}

export default UserData;
// 將 UserData 組件導出，以便在其他地方使用。
