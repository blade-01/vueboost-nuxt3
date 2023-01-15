// Importing i18n translations
import en from './locales/en.json';
import jp from './locales/jp.json';
import ar from './locales/ar.json';
import sp from './locales/sp.json';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Vue Boost + Nuxt 3',
      meta: [
        {
          name: 'description',
          content:
            'Boost your productivity with Vue Boost - work smarter, not harder.'
        }
      ]
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@nuxt/image-edge'
  ],
  // Internationalization options
  i18n: {
    // add `vueI18n` option to `@nuxtjs/i18n` module options
    vueI18n: {
      legacy: false,
      locale: 'en',
      messages: {
        en,
        sp,
        ar,
        jp
      }
    }
  },
  // Nuxt Color Mode
  colorMode: {
    classSuffix: ''
  },
  // Tailwind defaults options
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.ts',
    exposeConfig: false,
    injectPosition: 0,
    viewer: true
  }
});
