// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  css: [
    'primevue/resources/themes/saga-blue/theme.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css',
    'primeflex/primeflex.css'
  ],
  build: {
    transpile: ['primevue'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  devtools: { enabled: true },
});
