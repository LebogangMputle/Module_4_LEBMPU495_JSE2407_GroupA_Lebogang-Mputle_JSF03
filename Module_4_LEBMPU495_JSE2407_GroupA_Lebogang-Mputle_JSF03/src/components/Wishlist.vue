<template>
    <div>
      <h1>Wishlist</h1>
      <div v-if="wishlist.length">
        <div v-for="item in wishlist" :key="item.id">
          <h2>{{ item.title }}</h2>
          <p>{{ item.price }}</p>
        </div>
      </div>
      <div v-else>
        <p>Your wishlist is empty</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      wishlist() {
        return this.$store.getters.wishlist;
      }
    }
  };
  </script>
  