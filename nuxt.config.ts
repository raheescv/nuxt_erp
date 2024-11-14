// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
    "@nuxt/ui",
    "@nuxt/icon",
    "@sidebase/nuxt-auth",
  ],
  auth: {
    globalAppMiddleware: true,
    baseURL: process.env.NUXT_PUBLIC_API_URL,
    provider: {
      type: "local",
      endpoints: {
        signIn: { path: "/login", method: "post" },
        signOut: { path: "/logout", method: "post" },
        signUp: { path: "/register", method: "post" },
        getSession: { path: "/session", method: "get" },
      },
      pages: {
        login: "/login",
      },
      token: {
        signInResponseTokenPointer: "/token",
      },
      sessionDataType: {},
    },
    enableSessionRefreshPeriodically: 5000,
    enableSessionRefreshOnWindowFocus: true,
    globalMiddlewareOptions: {
      allow404WithoutAuth: true, // Defines if the 404 page will be accessible while unauthenticated
      addDefaultCallbackUrl: "/", // Where authenticated user will be redirected to by default
    },
  },
  css: [
    "@/assets/css/main.css",
    // "@/assets/css/vendors/tippy.css",
    "@/assets/css/vendors/litepicker.css",
    // "@/assets/css/vendors/tiny-slider.css",
    "@/assets/css/themes/enigma/side-nav.css",
    // "@/assets/css/vendors/leaflet.css",
    "@/assets/css/vendors/simplebar.css",
    "@/assets/css/components/mobile-menu.css",
    "@/assets/css/app.css",
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
        class: "opacity-0",
      },
      title: "My Erp Nuxt App",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "My Erp Nuxt App" },
      ],
      link: [],
      script: [
        { src: "assets/js/vendors/dom.js", defer: true },
        { src: "assets/js/vendors/lucide.js", defer: true },
        { src: "assets/js/vendors/tippy.js", defer: true },
        { src: "assets/js/vendors/dayjs.js", defer: true },
        { src: "assets/js/vendors/litepicker.js", defer: true },
        { src: "assets/js/vendors/popper.js", defer: true },
        { src: "assets/js/vendors/dropdown.js", defer: true },
        // { src: "assets/js/vendors/tiny-slider.js", defer: true },
        { src: "assets/js/vendors/transition.js", defer: true },
        // { src: "assets/js/vendors/leaflet-map.js", defer: true },
        { src: "assets/js/vendors/axios.js", defer: true },
        { src: "assets/js/utils/colors.js", defer: true },
        { src: "assets/js/utils/helper.js", defer: true },
        { src: "assets/js/vendors/simplebar.js", defer: true },
        { src: "assets/js/vendors/modal.js", defer: true },
        { src: "assets/js/components/base/theme-color.js", defer: true },
        { src: "assets/js/components/base/lucide.js", defer: true },
        { src: "assets/js/components/base/tippy.js", defer: true },
        { src: "assets/js/components/base/litepicker.js", defer: true },
        { src: "assets/js/vendors/tailwind-merge.js", defer: true },
        // { src: "assets/js/components/base/tiny-slider.js", defer: true },
        { src: "assets/js/themes/enigma.js", defer: true },
        // { src: "assets/js/components/base/leaflet-map-loader.js", defer: true },
        { src: "assets/js/components/mobile-menu.js", defer: true },
        { src: "assets/js/components/themes/enigma/top-bar.js", defer: true },
      ],
    },
  },
  experimental: {
    defaults: {
      nuxtLink: {
        componentName: "NuxtLink",
        externalRelAttribute: "noopener noreferrer",
        activeClass: "side-menu--active",
      },
    },
  },
  colorMode: {
    preference: "light",
  },
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY,
    public: {
      apiBase: process.env.API_BASE_URL,
      apiBaseUrl: process.env.API_BASE_URL + "/api/v1",
    },
  },
});
