// Importing i18n translations
import en from './locales/en.json';
import jp from './locales/jp.json';
import ar from './locales/ar.json';
import sp from './locales/sp.json';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: '%s - Boost your productivity',
      title: 'Vue Boost for Nuxt 3',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width: device-width, initial-scale: 1' },
        {
          name: 'description',
          content:
            'Boost your productivity with Vue Boost - work smarter, not harder.'
        },
        { name: 'theme-color', content: '#1e1e2e' }
      ],
      link: [{ rel: 'icon', href: '/favicon.ico' }]
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
  // External Image Provider
  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/bladencove/image/upload/RC'
    }
  },
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
