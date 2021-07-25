import Vue from 'vue'
import VueGtag from 'vue-gtag'

console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'production') {
  Vue.use(VueGtag, {
    config: { id: process.env.GOOGLE_ANALYTICS_ID },
  })
}
