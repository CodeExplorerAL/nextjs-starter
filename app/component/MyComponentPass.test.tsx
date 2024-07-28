import React from 'react';
import { render, screen } from '@testing-library/react'; // 引入 React Testing Library 的方法
import '@testing-library/jest-dom'; // 引入 jest-dom 提供的自定義匹配器
import MyComponent from './MyComponent'; // 引入要測試的組件

// 定義一個測試，檢查組件是否正確渲染了 "Hello, World!" 文本
test('renders hello world text', () => {
  render(<MyComponent />); // 渲染組件
  expect(screen.getByText('Hello, World!')).toBeInTheDocument(); // 斷言組件包含文本 "Hello, World!"
});
