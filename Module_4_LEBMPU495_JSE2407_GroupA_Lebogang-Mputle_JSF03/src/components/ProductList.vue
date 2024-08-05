<template>
    <div>
      <div v-if="loading" class="flex items-center justify-center h-64">
        <svg class="animate-spin h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
        </svg>
      </div>
  
      <div v-else>
        <div v-for="product in products" :key="product.id" @click="selectProduct(product)" class="product-card border shadow p-4 bg-white">
          <img :src="product.image" :alt="product.title" class="h-40 w-full object-contain mb-4">
          <h2 class="text-lg font-semibold mb-2">{{ product.title }}</h2>
          <p class="text-gray-500 mb-2">{{ product.category }}</p>
          <p class="text-blue-500 font-bold mb-2">${{ product.price.toFixed(2) }}</p>
          <div class="flex items-center mb-2">
            <template v-for="star in 5" :key="star">
              <svg :class="star <= product.rating.rate ? 'text-yellow-500' : 'text-gray-300'" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049.999a1 1 0 011.902 0l2.462 5.004 5.511.8a1 1 0 01.554 1.706l-3.989 3.886.942 5.484a1 1 0 01-1.451 1.054L10 15.347l-4.926 2.59a1 1 0 01-1.451-1.054l.942-5.484-3.989-3.886a1 1 0 01.554-1.706l5.511-.8 2.462-5.004z"></path>
              </svg>
            </template>
            <span class="text-gray-600 ml-2">{{ product.rating.count }} reviews</span>
          </div>
          <div class="flex justify-between">
            <button @click.stop="addToCart(product)" class="bg-blue-500 text-white px-3 py-2 rounded">Add to Cart</button>
            <button @click.stop="addToWishlist(product)" class="bg-gray-500 text-white px-3 py-2 rounded">Add to Wishlist</button>
          </div>
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
      },
      addToCart(product) {
        alert(`Added ${product.title} to cart!`);
        // Implement actual add to cart functionality
      },
      addToWishlist(product) {
        alert(`Added ${product.title} to wishlist!`);
        // Implement actual add to wishlist functionality
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
    border-radius: 15px;
    overflow: hidden;
  }
  </style>
  