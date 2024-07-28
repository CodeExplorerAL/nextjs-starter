import { NextResponse } from 'next/server'; // NextResponse 用於構建和返回響應。

export async function GET() {
  
  return NextResponse.json({ message: "歡迎來到我的 API！" }); // NextResponse.json() 方法會自動設置適當的 Content-Type 標頭並轉換對象為 JSON 格式。
}