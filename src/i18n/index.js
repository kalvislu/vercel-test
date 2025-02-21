export const validLocales = process.env.VUE_APP_FRONTEND_VALID_LOCALES.split(',')
export const defaultLocale = process.env.VUE_APP_FRONTEND_DEFAULT_LOCALE

const Locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)

const messagesObj = {}

Locales.keys().forEach((lang) => {
  // new babel translator fix
  const langEntries = Locales(lang)
  // converts file name into locale key (lv_LV and so on)
  // could not figure out how to do from-to search that works on safari,if you can remove slice
  const langName = lang.match(/(.*)(?=\.json)/g)[0].slice(2)
  messagesObj[langName] = {
    ...langEntries,
  }
})

export const messages = messagesObj
