<template>
    <div>
      <button @click="$router.go(-1)">Back</button>
      <div v-if="product">
        <h1>{{ product.title }}</h1>
        <img :src="product.image" :alt="product.title" />
        <p>{{ product.description }}</p>
        <p>{{ product.price }}</p>
        <button @click="addToCart(product)">Add to Cart</button>
        <button @click="addToWishlist(product)">Add to Wishlist</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      product() {
        return this.$store.getters.products.find(product => product.id === Number(this.$route.params.id));
      }
    },
    methods: {
      addToCart(product) {
        this.$store.commit('addToCart', product);
      },
      addToWishlist(product) {
        this.$store.commit('addToWishlist', product);
      }
    },
    created() {
      if (!this.product) {
        this.$store.dispatch('fetchProducts');
      }
    }
  };
  </script>
  