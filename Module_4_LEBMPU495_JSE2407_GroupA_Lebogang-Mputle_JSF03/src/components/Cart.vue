<template>
    <div>
      <h1>Cart</h1>
      <div v-if="cart.length">
        <div v-for="item in cart" :key="item.id">
          <h2>{{ item.title }}</h2>
          <p>{{ item.price }}</p>
        </div>
      </div>
      <div v-else>
        <p>Your cart is empty</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      cart() {
        return this.$store.getters.cart;
      }
    }
  };
  </script>
  