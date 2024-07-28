import { NextResponse } from 'next/server';
// 從 'next/server' 模塊導入 NextResponse 對象。
// NextResponse 用於構建和返回響應。

export async function POST(request: Request) {
  // 定義一個異步函數 POST，用於處理 POST 請求。
  // 函數參數 request 是請求對象，類型為 Request。

  const { name } = await request.json();
  // 從請求的 JSON 體中解析出 name 屬性。
  // 使用 await 等待 request.json() 方法解析 JSON 體。

  return NextResponse.json({ message: `你好，${name}！` });
  // 返回一個 JSON 響應，其中包含一個 message 屬性，值為 `你好，${name}！`。
  // NextResponse.json() 方法會自動設置適當的 Content-Type 標頭並轉換對象為 JSON 格式。
}
