<template>
  <div id="app">
    <!-- <Header @toggle-login="showLoginModal = !showLoginModal" /> -->
    <router-view></router-view> <!-- Display routed components -->
    <LoginModal v-if="showLoginModal" @login="handleLogin" @cancel="showLoginModal = false" />
  </div>
</template>

<script>
// import Header from './components/Header.vue';
import LoginModal from './components/LoginModal.vue';

export default {
  components: {
    // Header,
    LoginModal
  },
  data() {
    return {
      showLoginModal: false, // Set to false initially
    };
  },
  methods: {
    handleLogin() {
      this.$router.push('/product-list'); // Navigate to product list on login
      this.showLoginModal = false;
    }
  }
};
</script>
