import Vue from 'vue'
import VueI18n from 'vue-i18n'

export const validLocales = import.meta.env.VITE_APP_FRONTEND_VALID_LOCALES.split(',')
export const defaultLocale = import.meta.env.VITE_APP_FRONTEND_DEFAULT_LOCALE
const userLocale = defaultLocale

Vue.use(VueI18n)

const Locales = require.context('./locales/', true, /\.json$/)

const messages = {}

Locales.keys().forEach((lang) => {
  // new babel translator fix
  const langEntries = Locales(lang)
  // converts file name into locale key (lv_LV and so on)
  // could not figure out how to do from-to search that works on safari,if you can remove slice
  const langName = lang.match(/(.*)(?=\.json)/g)[0].slice(2)
  messages[langName] = {
    ...langEntries,
  }
})

export default new VueI18n({
  locale: userLocale,
  fallbackLocale: defaultLocale,
  silentFallbackWarn: import.meta.env.VITE_APP_FRONTEND_ENVIRONMENT !== 'development',
  messages,
})
