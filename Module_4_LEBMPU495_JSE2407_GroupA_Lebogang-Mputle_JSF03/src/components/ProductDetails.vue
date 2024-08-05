<template>
  <div>
    <button @click="$router.go(-1)">Back</button>
    <div v-if="product">
      <h1>{{ product.title }}</h1>
      <img :src="product.image" :alt="product.title" class="w-full h-auto" />
      <p>{{ product.description }}</p>
      <p>\${{ product.price.toFixed(2) }}</p>
      <button @click="addToCart(product)">Add to Cart</button>
      <button @click="addToWishlist(product)">Add to Wishlist</button>
    </div>
    <div v-if="loading">Loading...</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: null,
      loading: true
    };
  },
  methods: {
    async fetchProduct() {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${this.$route.params.id}`);
        if (!response.ok) {
          throw new Error('Product not found');
        }
        this.product = await response.json();
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        this.loading = false;
      }
    },
    addToCart(product) {
      this.$store.commit('addToCart', product);
    },
    addToWishlist(product) {
      this.$store.commit('addToWishlist', product);
    }
  },
  watch: {
    '$route.params.id': 'fetchProduct' // Watch for route parameter changes
  },
  created() {
    this.fetchProduct();
  }
};
</script>

<style scoped>
/* Add any additional styles you need here */
</style>
