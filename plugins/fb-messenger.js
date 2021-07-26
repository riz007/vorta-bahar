/* eslint-disable */

import Vue from 'vue'

var chatbox = document.getElementById('fb-customer-chat');
chatbox.setAttribute("page_id", '105367497522198');
chatbox.setAttribute("attribution", "biz_inbox");

const vueFBMessenger = {}

vueFBMessenger.install = function install(Vue, options) {
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  window.fbAsyncInit = function onSDKInit() {
    FB.init(options)
    FB.AppEvents.logPageView()
    Vue.FB = FB
    window.dispatchEvent(new Event('fb-messenger-sdk-ready'))
  }
  Vue.FB = undefined
}

Vue.use(vueFBMessenger, {
  appId: '105367497522198',
  autoLogAppEvents: true,
  xfbml: true,
  version: 'v2.9',
})
