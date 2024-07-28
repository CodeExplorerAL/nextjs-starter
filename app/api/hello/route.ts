import { NextResponse } from 'next/server';
// 從 'next/server' 模塊導入 NextResponse 對象。
// NextResponse 用於構建和返回響應。

export async function GET() {
  // 定義一個異步函數 GET，用於處理 GET 請求。
  
  return NextResponse.json({ message: "歡迎來到我的 API！" });
  // 返回一個 JSON 響應，其中包含一個 message 屬性，值為 "歡迎來到我的 API！"。
  // NextResponse.json() 方法會自動設置適當的 Content-Type 標頭並轉換對象為 JSON 格式。
}
