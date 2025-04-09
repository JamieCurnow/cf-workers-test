// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: "cloudflare_module",
  },
  compatibilityDate: "2025-04-09",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/ui"],
});
