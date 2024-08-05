<template>
  <div class="wishlist">
    <h1>Your Wishlist</h1>
    <div v-if="wishlist.length === 0">Your wishlist is empty.</div>
    <div v-else>
      <div v-for="product in wishlist" :key="product.id" class="wishlist-item">
        <img :src="product.image" :alt="product.title" class="wishlist-item-image" />
        <div class="wishlist-item-details">
          <h2>{{ product.title }}</h2>
          <p>{{ product.price }}</p>
          <button @click="removeFromWishlist(product.id)">Remove from Wishlist</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    wishlist() {
      return this.$store.getters.wishlist;
    }
  },
  methods: {
    removeFromWishlist(productId) {
      this.$store.commit('removeFromWishlist', productId);
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
