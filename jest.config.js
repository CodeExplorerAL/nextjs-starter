/** @type {import('jest').Config} */
const config = {
  // 使用 ts-jest 預設配置來處理 TypeScript 文件
  preset: 'ts-jest',

  // 設置測試環境為 jest-environment-jsdom，用於模擬瀏覽器的 DOM 環境
  testEnvironment: 'jest-environment-jsdom',

  // 測試環境初始化後要運行的文件，這裡添加了 @testing-library/jest-dom
  setupFilesAfterEnv: ['@testing-library/jest-dom'],

  // 配置文件轉換器，用於處理 TypeScript 和 JavaScript 文件
  transform: {
    // 使用 ts-jest 轉換 .ts 和 .tsx 文件
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    // 使用 babel-jest 轉換 .js 和 .jsx 文件
    '^.+\\.(js|jsx)?$': 'babel-jest',
  },

  // 配置 Jest 可以解析的文件擴展名
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};

// 將配置導出
module.exports = config;