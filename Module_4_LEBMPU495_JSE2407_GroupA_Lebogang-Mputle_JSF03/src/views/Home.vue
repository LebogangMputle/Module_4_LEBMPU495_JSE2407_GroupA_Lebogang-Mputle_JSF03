<template>
    <div>
      <Header @toggle-login="showLoginModal = true" />
      <ProductList @select-product="selectProduct" />
      <LoginModal v-if="showLoginModal" @login="handleLogin" @cancel="showLoginModal = false" />
    </div>
  </template>
  
  <script>
  import Header from '../components/Header.vue';
  import ProductList from '../components/ProductList.vue';
  import LoginModal from '../components/LoginModal.vue';
  
  export default {
    components: {
      Header,
      ProductList,
      LoginModal
    },
    data() {
      return {
        showLoginModal: false
      };
    },
    methods: {
      handleLogin() {
        this.$store.commit('setIsLoggedIn', true);
        this.showLoginModal = false;
      },
      selectProduct(product) {
        this.$router.push({ name: 'ProductDetails', params: { id: product.id } });
      }
    }
  };
  </script>
  