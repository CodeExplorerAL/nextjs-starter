import { notFound } from 'next/navigation';

// 定義書籍的 TypeScript 介面，描述書籍對象的結構
interface Book {
  isbn: string;        
  title: string;     
  author: string;    
  description: string; 
}

// 頁面組件：顯示單本書籍的詳細信息
export default function Book({ params }: { params: { isbn: string } }) {
  // 使用 ISBN 從數據源中獲取書籍信息
  const book = getBookByIsbn(params.isbn);
  
  // 如果沒有找到書籍，則調用 notFound() 函數來顯示 404 頁面
  if (!book) notFound();

  return (
    <div>
      <h1>{book.title}</h1>  
      <p>作者: {book.author}</p>
      <p>ISBN: {book.isbn}</p> 
      <p>{book.description}</p>
    </div>
  );
}

// 靜態參數生成函數：生成靜態頁面的參數
export async function generateStaticParams() {
  // 獲取所有書籍的列表
  const books = await getBooks();
  
  // 返回每本書籍的 ISBN 作為靜態頁面的參數
  return books.map((book) => ({
    isbn: book.isbn,
  }));
}

// 模擬獲取所有書籍的函數
function getBooks(): Book[] {
  return [
    { isbn: '9780261103573', title: '魔戒', author: 'J.R.R. 托爾金', description: '一個史詩奇幻小說...' },
    { isbn: '9780007117116', title: '哈利波特與魔法石', author: 'J.K. 羅琳', description: '一個男孩發現自己是巫師...' },
  ];
}

// 根據 ISBN 獲取單本書籍的函數
function getBookByIsbn(isbn: string): Book | undefined {
  // 獲取所有書籍
  const books = getBooks();
  
  // 查找並返回匹配的書籍
  return books.find(book => book.isbn === isbn);
}
