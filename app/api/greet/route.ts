import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { name } = await request.json();
  return NextResponse.json({ message: `你好，${name}！` });
}