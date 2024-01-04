// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: "Santa's Squad Shop",
      meta: [
        { name: 'description', content: "The official shop of Santa's Squad"}
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/myFavicon.ico' }
      ]
    }
  }
})