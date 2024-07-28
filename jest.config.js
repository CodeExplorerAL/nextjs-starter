/** @type {import('jest').Config} */
const config = {
  // 使用 ts-jest 預設配置來處理 TypeScript 文件
  preset: 'ts-jest',

  // 設置測試環境為 jest-environment-jsdom，用於模擬瀏覽器的 DOM 環境
  testEnvironment: 'jest-environment-jsdom',

  // 測試環境初始化後要運行的文件，這裡添加了 @testing-library/jest-dom
  setupFilesAfterEnv: ['@testing-library/jest-dom'],

  // 配置測試報告插件，生成 HTML 測試報告
  reporters: [
    "default",
    ["jest-html-reporter", {
      "pageTitle": "Test Report"
    }]
  ],

  // 配置文件轉換器，用於處理 TypeScript 和 JavaScript 文件
  transform: {
  '^.+\\.(ts|tsx|js|jsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },

  // 配置 Jest 可以解析的文件擴展名
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};

// 將配置導出
module.exports = config;