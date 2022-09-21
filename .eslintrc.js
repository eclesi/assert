module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  ignorePatterns: ['.eslintrc.js', 'build/'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
    createDefaultProgram: true,
    ecmaVersion: '2020'
  },
  plugins: ['@typescript-eslint', 'import'],
  settings: {
    'import/internal-regex': '^@/'
  },
  extends: [
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    'no-useless-constructor': 'off',
    'import/no-unresolved': 'off',
    'no-empty-function': 'off'
  }
}
