<template>
  <div class="cart">
    <h1>Your Cart</h1>
    <div v-if="cart.length === 0">Your cart is empty.</div>
    <div v-else>
      <div v-for="product in cart" :key="product.id" class="cart-item">
        <img :src="product.image" :alt="product.title" class="cart-item-image" />
        <div class="cart-item-details">
          <h2>{{ product.title }}</h2>
          <p>{{ product.price }}</p>
          <button @click="removeFromCart(product.id)">Remove from Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.getters.cart;
    }
  },
  methods: {
    removeFromCart(productId) {
      this.$store.commit('removeFromCart', productId);
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
