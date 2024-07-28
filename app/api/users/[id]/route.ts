import { NextResponse } from 'next/server';
// 從 'next/server' 模塊導入 NextResponse 對象。
// NextResponse 用於構建和返回響應。

export async function GET(
  request: Request, // 定義請求對象，類型為 Request。
  { params }: { params: { id: string } } // 解構參數對象，提取 id 屬性，類型為字符串。
) {
  // 定義一個異步函數 GET，用於處理 GET 請求。

  return NextResponse.json({ id: params.id, name: `用戶 ${params.id}` });
  // 返回一個 JSON 響應，其中包含 id 和 name 屬性。
  // NextResponse.json() 方法會自動設置適當的 Content-Type 標頭並轉換對象為 JSON 格式。
  // name 屬性中的 `用戶 ${params.id}` 會根據傳入的 id 動態生成。
}
