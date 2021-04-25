import en from '../lang/en.js'
import tr from '../lang/tr.js'

export const I18N = {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English'
    },
    {
      code: 'tr',
      iso: 'tr-TR',
      name: 'TÜR'
    }
  ],
  defaultLocale: 'en',
  routes: {
    about: {
      tr: '/hakkimizda',
      en: '/about-us'
    },
    posts: {
      tr: '/gonderiler'
    },
    'post/_id': {
      tr: '/article/:id?'
    },
    'dynamicNested/_category': {
      tr: 'imbrication-dynamique/:category'
    }
  },
  vueI18n: {
    fallbackLocale: 'en',
    messages: { en, tr }
  }
}