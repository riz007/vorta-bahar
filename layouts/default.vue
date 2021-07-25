<template>
  <div>
    <Navbar />

    <main>
      <Nuxt />
    </main>

    <Footer />
    <!-- Messenger Chat plugin Code -->
    <div id="fb-root"></div>

    <!-- Your Chat plugin code -->
    <div id="fb-customer-chat" class="fb-customerchat"></div>
  </div>
</template>

<script>
import Vue from 'vue'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      isFBMessengerReady: false,
    }
  },
  mounted() {
    this.isFBMessengerReady = Vue.FB !== undefined
    window.addEventListener('fb-messenger-ready', this.onFBMessengerReady)
  },
  beforeDestroy() {
    window.removeEventListener('fb-messenger-ready', this.onFBMessengerReady)
  },
  methods: {
    onFBMessengerReady() {
      this.isFBMessengerReady = true
    },
  },
}
</script>
