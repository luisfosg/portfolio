module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  globals: {
    JSX: true
  },
  extends: ['plugin:react/recommended', 'next/core-web-vitals', 'standard'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@next/next/no-document-import-in-page': 'off',
    'no-use-before-define': 'off'
  }
}
