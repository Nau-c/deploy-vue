// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // test
  app: {
    baseURL: "/deploy-vue/",
    buildAssetsDir: "assets",
  },
  //Lo vemos en clase pasarlo de true a false para evitar en produccion devtools
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "nuxt-icon",
    "@pinia-plugin-persistedstate/nuxt",
  ],
});
