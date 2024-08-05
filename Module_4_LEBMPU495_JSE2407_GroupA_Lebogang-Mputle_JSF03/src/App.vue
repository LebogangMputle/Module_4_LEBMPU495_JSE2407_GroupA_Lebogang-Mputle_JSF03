<template>
  <div id="app">
    <Header @toggle-login="showLoginModal = !showLoginModal" />
    <ProductList v-if="isLoggedIn" @select-product="selectedProduct = $event" />
    <ProductDetails v-if="selectedProduct" :product="selectedProduct" @back="selectedProduct = null" />
    <LoginModal v-if="showLoginModal" @login="handleLogin" @cancel="showLoginModal = false" />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import ProductList from './components/ProductList.vue';
import ProductDetails from './components/ProductDetails.vue';
import LoginModal from './components/LoginModal.vue';

export default {
  components: {
    Header,
    ProductList,
    ProductDetails,
    LoginModal
  },
  data() {
    return {
      isLoggedIn: false,
      showLoginModal: true,
      selectedProduct: null
    };
  },
  methods: {
    handleLogin() {
      this.isLoggedIn = true;
      this.showLoginModal = false;
    }
  }
};
</script>
