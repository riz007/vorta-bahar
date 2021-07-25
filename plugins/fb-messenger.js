import Vue from 'vue'

const chatbox = document.getElementById('fb-customer-chat')
chatbox.setAttribute('page_id', process.env.FACEBOOK_PAGE_ID)
chatbox.setAttribute('attribution', 'biz_inbox')

const vue_fb = {}

vue_fb.install = function install(Vue, options) {
  ;(function (d, s, id) {
    let js
    const fjs = d.getElementsByTagName(s)[0]
    if (d.getElementById(id)) return
    js = d.createElement(s)
    js.id = id
    js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js'
    fjs.parentNode.insertBefore(js, fjs)
  })(document, 'script', 'facebook-jssdk')

  window.fbAsyncInit = function onSDKInit() {
    FB.init(options)
    FB.AppEvents.logPageView()
    Vue.FB = FB
    window.dispatchEvent(new Event('fb-messenger-sdk-ready'))
  }
  Vue.FB = undefined
}

Vue.use(vue_fb, {
  appId: process.env.FACEBOOK_PAGE_ID,
  autoLogAppEvents: true,
  xfbml: true,
  version: 'v2.9',
})
