import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: "https://code.jquery.com/jquery-3.6.0.min.js",
          type: "text/javascript",
          defer: true,
        },
        {
          src: "https://unpkg.com/swiper/swiper-bundle.min.js",
          type: "text/javascript",
          defer: true,
        },
      ],
    },
  },
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "nuxt-swiper",
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  swiper: {
    // Swiper options
    //----------------------
    // prefix: 'Swiper',
    // styleLang: 'css',
    // modules: ['navigation', 'pagination'], // all modules are imported by default
  },
});
