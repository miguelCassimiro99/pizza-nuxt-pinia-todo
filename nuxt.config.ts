// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    'nuxt-icon',
    'nuxt-vitest',
    'nuxt-headlessui'
  ],
  css: ['~/assets/styles/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE_URL
    }
  },

  headlessui: {
    prefix: 'Headless'
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in'}
  }
})
