module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/strongly-recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'no-new': 0,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    "no-throw-literal": 0,
    'generator-star-spacing': 0,
    "eqeqeq": 0,
    "space-before-function-paren": [2, "always"],
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === 'production' ? 2 : 0,
    "quotes": [2, "single", { "avoidEscape": true }],
    // no need semi
    "semi": [2, "never"],
    // "unix" (默认) 强制使用 Unix 换行符： \n。
    "linebreak-style": [2, "unix"],
    "vue/no-parsing-error": [2, {"x-invalid-end-tag": false}]
  }
}
