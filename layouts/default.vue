<template>
  <div>
    <!-- Messenger Chat plugin Code -->
    <div id="fb-root"></div>

    <!-- Your Chat plugin code -->
    <div id="fb-customer-chat" class="fb-customerchat"></div>
    <Navbar />

    <main>
      <Nuxt />
    </main>

    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default {
  components: {
    Navbar,
    Footer,
  },
  mounted() {
    const chatbox = document.getElementById('fb-customer-chat')
    chatbox.setAttribute('page_id', '105367497522198')
    chatbox.setAttribute('attribution', 'biz_inbox')
  },
}
</script>
