// .eslintrc.js
module.exports = {
  extends: [
    'plugin:vue/recommended',
  ],
  Plugins: [
    'vuetify'
  ],
  rules: {
    'vuetify/no-deprecated-classes': 'error',
    'vuetify/no-legacy-grid': 'error',
    // 'indent': ["error", 2]
  }
}
