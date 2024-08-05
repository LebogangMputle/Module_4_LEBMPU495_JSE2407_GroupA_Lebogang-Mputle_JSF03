<template>
    <div>
      <div v-if="loading" class="loading">Loading...</div>
      <div v-else>
        <div v-for="product in products" :key="product.id" @click="selectProduct(product)" class="product-card">
          <img :src="product.image" :alt="product.title" class="product-image" />
          <h2>{{ product.title }}</h2>
          <p>Price: ${{ product.price }}</p>
          <p>Rating: {{ product.rating.rate }} ({{ product.rating.count }} reviews)</p>
          <p>Category: {{ product.category }}</p>
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
  
  <style scoped>
  .product-card {
    border: 1px solid #ddd;
    padding: 16px;
    margin-bottom: 16px;
    cursor: pointer;
    transition: transform 0.2s;
  }
  .product-card:hover {
    transform: scale(1.05);
  }
  .product-image {
    width: 100%;
    height: auto;
  }
  .loading {
    text-align: center;
    font-size: 1.5em;
  }
  </style>
  