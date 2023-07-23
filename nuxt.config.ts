// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "nuxt-icon"],
  runtimeConfig: {
    // Keys within public, will be also exposed to the client-side
    public: {
      CLIENT_ID: process.env.CLIENT_ID,
      CLIENT_SECRET: process.env.CLIENT_SECRET,
      CALLBACK_URL: process.env.CALLBACK_URL,
      API_URL: process.env.API_URL,
    },
  },
});
