module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-unused-vars': ['off', { vars: 'all', args: 'none' }],
    'space-before-function-paren': ['error', 'always'],
    'space-before-blocks': ['error', 'always']
  }
};
