<template>
  <div class="bg-[#caf0f8] p-4">
    <div class="flex items-center justify-between mb-4">
      <select v-model="selectedCategory" @change="getProducts" class="p-2 border rounded">
        <option value="all">All categories</option>
        <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
      </select>
      <input type="text" v-model="searchQuery" @input="filterProducts" placeholder="Search products..." class="p-2 border rounded mx-4 flex-1">
      <select v-model="sortOrder" @change="sortProducts" class="p-2 border rounded">
        <option value="default">Sort by: Default</option>
        <option value="price-asc">Sort by: Price - Low to High</option>
        <option value="price-desc">Sort by: Price - High to Low</option>
      </select>
    </div>
    <div v-if="loading" class="flex items-center justify-center">
      <svg class="animate-spin h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
      </svg>
    </div>
    <div v-if="!loading" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div v-for="product in products" :key="product.id" class="product-card border shadow p-4 bg-white" @click="selectProduct(product)">
        <img :src="product.image" :alt="product.title" class="h-40 w-full object-contain mb-4">
        <h2 class="text-lg font-semibold mb-2">{{ product.title }}</h2>
        <p class="text-gray-500 mb-2">{{ product.category }}</p>
        <p class="text-blue-500 font-bold mb-2">${{ product.price.toFixed(2) }}</p>
        <div>
          <div class="flex items-center mb-2">
            <svg v-for="star in 5" :key="star" :class="star <= product.rating.rate ? 'text-yellow-500' : 'text-gray-300'" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049.999a1 1 0 011.902 0l2.462 5.004 5.511.8a1 1 0 01.554 1.706l-3.989 3.886.942 5.484a1 1 0 01-1.451 1.054L10 15.347l-4.926 2.59a1 1 0 01-1.451-1.054l.942-5.484-3.989-3.886a1 1 0 01.554-1.706l5.511-.8 2.462-5.004z"></path>
            </svg>
            <span class="text-gray-600 ml-2">({{ product.rating.count }} reviews)</span>
          </div>
        </div>
        <div class="flex justify-between">
          <button @click.stop="addToCart(product)" class="bg-blue-500 text-white py-2 px-4 rounded">Add to Cart</button>
          <button @click.stop="addToWishlist(product)" class="bg-gray-200 text-gray-800 py-2 px-4 rounded">Add to Wishlist</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      categories: [],
      loading: true,
      selectedCategory: 'all',
      searchQuery: '',
      sortOrder: 'default'
    };
  },
  methods: {
    async getProducts() {
      this.loading = true;
      const response = await fetch('https://fakestoreapi.com/products');
      let data = await response.json();
      if (this.selectedCategory !== 'all') {
        data = data.filter(product => product.category === this.selectedCategory);
      }
      this.products = data;
      this.loading = false;
    },
    async getCategories() {
      const response = await fetch('https://fakestoreapi.com/products/categories');
      this.categories = await response.json();
    },
    filterProducts() {
      this.products = this.products.filter(product => product.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
    },
    sortProducts() {
      if (this.sortOrder === 'price-asc') {
        this.products.sort((a, b) => a.price - b.price);
      } else if (this.sortOrder === 'price-desc') {
        this.products.sort((a, b) => b.price - a.price);
      }
    },
    selectProduct(product) {
      this.$emit('select-product', product);
    },
    addToCart(product) {
      // Add product to cart logic
    },
    addToWishlist(product) {
      // Add product to wishlist logic
    }
  },
  mounted() {
    this.getProducts();
    this.getCategories();
  }
};
</script>
