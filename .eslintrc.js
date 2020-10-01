module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: ['plugin:vue/essential', '@vue/prettier'],

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-unused-vars': 1,
    'vue/max-attributes-per-line': 'off'
  },

  parserOptions: {
    parser: '@typescript-eslint/parser',
  },

  'extends': [
    'plugin:vue/essential',
    '@vue/prettier',
    '@vue/typescript'
  ]
}
