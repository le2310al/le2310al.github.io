// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  components: [
    {
      path: './app/components',
    },
  ],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['@fortawesome/fontawesome-svg-core/styles.css',
    './app/assets/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@vesp/nuxt-fontawesome'
  ]
})