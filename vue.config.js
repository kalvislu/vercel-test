const path = require('path')
const appRoot = '/src/'
const src = path.resolve(__dirname) + appRoot

module.exports = {
  lintOnSave: true,

  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    allowedHosts: 'all',
    host: 'local.ekool.dev',
    server: 'https',
  },

  configureWebpack: {
    resolve: {
      alias: {
        '@': src,
        '@env': src + 'env.js',
      },
    },
  },

  pluginOptions: {
    i18n: {
      locale: process.env.VUE_APP_FRONTEND_DEFAULT_LOCALE,
      fallbackLocale: process.env.VUE_APP_FRONTEND_DEFAULT_LOCALE,
      localeDir: src + 'i18n/locales',
      enableInSFC: false,
    },
  },

  transpileDependencies: ['vuetify', '@k12tech/ekool-vue-framework'],
}
