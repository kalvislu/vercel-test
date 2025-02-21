module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
  },
  extends: ['plugin:vue/essential', '@vue/prettier', 'plugin:prettier/recommended', 'eslint:recommended'],
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
}
