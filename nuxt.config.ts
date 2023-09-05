// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@sidebase/nuxt-auth", "@pinia/nuxt"],
  css: ["~/assets/css/main.css"],
  auth: {
    globalAppMiddleware: false,
  },
});
