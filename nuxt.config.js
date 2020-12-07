export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'circus789 บาบาร่า | สล็อคออนไลน์',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'ขายไม้จิ้มฟันสมุนไพร ระบบฝากถอนอัตโนมัติ 30 วินาที ทุกสลิปมีค่าแลกของรางวัลฟรี ยินดีให้บริการ ค่ายเกมส์เยอะที่สุดในเอเซีย สนใจรายละเอียดโปรโมชั่นติดต่อสอบถามได้ตลอดเวลา เราให้บริการ 24 ชม.' }
    ],
    script: [
      {
        hid: 'global-js', src: 'https://www.googletagmanager.com/gtag/js?id=AW-475331606', defer: true
      },
      {
        hid: 'global-use-js', src: '/global-site.js'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    'bootstrap-vue/nuxt'
  ],
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    babel: { compact: true }
  },
}
