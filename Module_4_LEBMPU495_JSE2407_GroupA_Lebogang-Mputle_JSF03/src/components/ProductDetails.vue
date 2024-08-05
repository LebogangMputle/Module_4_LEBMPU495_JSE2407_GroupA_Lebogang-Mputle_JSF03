<template>
    <div>
      <button @click="$router.go(-1)">Back</button>
      <div v-if="product">
        <h1>{{ product.title }}</h1>
        <img :src="product.image" :alt="product.title" class="w-full h-auto" />
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
        const product = this.$store.getters.products.find(product => product.id === Number(this.$route.params.id));
        console.log('Product:', product); // Log product to check image URL
        return product;
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
        this.$store.dispatch('fetchProducts').then(() => {
          this.$forceUpdate(); // Force component update after fetch
        });
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add any additional styles you need here */
  </style>
  