import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MyComponent from './MyComponent';

// 正確的測試
test('renders hello world text', () => {
  render(<MyComponent />);
  expect(screen.getByText('Hello, World!')).toBeInTheDocument();
});

// 錯誤的測試
test('renders incorrect text', () => {
  render(<MyComponent />);
  expect(screen.getByText('Hello, John!')).toBeInTheDocument(); // 這裡期望的文本是錯誤的
});
