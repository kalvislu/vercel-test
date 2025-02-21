import { createI18n } from 'vue-i18n'

import { defaultLocale, messages } from '@/i18n'

export default createI18n({
  allowComposition: true, // you need to specify that!
  locale: defaultLocale,
  fallbackLocale: defaultLocale,
  silentFallbackWarn: process.env.VUE_APP_FRONTEND_ENVIRONMENT !== 'development',
  messages,
})
