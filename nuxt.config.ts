// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primeuix/themes/aura';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@primevue/nuxt-module'
  ],
  eslint: {
    config: {
      stylistic: true
    }
  },
  primevue: {
    options: {
      theme: {
        preset: Aura
      }
    }
  }
})