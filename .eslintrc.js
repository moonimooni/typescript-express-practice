module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:prettier/recommended', 'prettier', 'plugin:@typescript-eslint/recommended'],
  ignorePatterns: ['dist'],

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['import', '@typescript-eslint'],
  rules: { '@typescript-eslint/no-namespace': 'off' },
};
