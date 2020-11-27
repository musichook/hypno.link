// Layout
import DefaultLayout from '~/layouts/Default.vue'

// Styles
import '~/assets/style/lib/ress.scss'
import '~/assets/style/lib/chota.scss'
import '~/assets/style/main.sass'
import '~/assets/style/components/markdown.scss'


export default function (Vue, { head }) {
  Vue.component('Layout', DefaultLayout)

  head.htmlAttrs = { lang: 'en', class: '' }
  head.bodyAttrs = { class: '' }

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,700;0,800;1,400&display=swap'
  })
}
