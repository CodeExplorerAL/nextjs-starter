import React from 'react';
import { render, screen } from '@testing-library/react'; // 引入 React Testing Library 的方法
import '@testing-library/jest-dom'; // 引入 jest-dom 提供的自定義匹配器
import MyComponent from './MyComponent'; // 引入要測試的組件

// 故意檢查錯誤的內容，期望的文本與實際不符
test('renders incorrect text', () => {
  render(<MyComponent />); // 渲染組件
  expect(screen.getByText('Hello, John!')).toBeInTheDocument(); // 這裡期望的文本是錯誤的，因為組件實際上渲染的是 "Hello, World!"
});
