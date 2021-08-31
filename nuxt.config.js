export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'cirgameth.com-ศูนย์รวมไม้จิ้มฟัน ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'สมัครสมาชิก cirgameth ศูนย์รวมของลิขสิทธิ์ พร้อมจัดจำหน่ายทั่วประเทศไทย มีแอดมินตอบ 24 ชม' }
    ],
    script: [
      {
        hid: 'global-js', src: 'https://www.googletagmanager.com/gtag/js?id=AW-475331606', defer: true
      },
      {
        hid: 'global-use-js', src: '/global-site.js'
      },
      // {
      //   hid: 'seo-js', src: '/seo.js'
      // }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.ico' }
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
