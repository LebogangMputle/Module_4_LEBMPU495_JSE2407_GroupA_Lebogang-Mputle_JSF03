<template>
    <div>
      <div v-if="loading" class="loading">Loading...</div>
      <div v-else>
        <div v-for="product in products" :key="product.id" @click="selectProduct(product)">
          <h2>{{ product.title }}</h2>
          <p>{{ product.price }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      products() {
        return this.$store.getters.products;
      },
      loading() {
        return !this.products.length;
      }
    },
    methods: {
      selectProduct(product) {
        this.$emit('select-product', product);
      }
    },
    created() {
      if (!this.products.length) {
        this.$store.dispatch('fetchProducts');
      }
    }
  };
  </script>
  