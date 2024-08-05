# Vue.js E-Commerce

## Project Overview

This project showcases an e-commerce website layout built with Vue.js. It includes product listing, category filtering, sorting options, and user authentication. The project utilizes Vuex 
for state management to handle the cart and wishlist functionalities effectively.

## Setup and Installed Packages

1. Install dependecies: 
    -npm install
    -npm run serve

2. Installed Packages:
    -Vue.js
    -Vuex (State management library for Vue.js)
    -Vue Router (For managing application routes)
    -Tailwind CSS (Utility-first CSS framework)

## Vuex Store Method

The project uses Vuex for state management. Here’s a brief overview of the store methods:

## State:
    -products: Stores the list of products fetched from the API.
    -cart: Stores the list of products added to the cart.
    -wishlist: Stores the list of products added to the wishlist.
    -isLoggedIn: Boolean indicating the user's login status

## Mutations:
    -setProducts(state, products): Sets the products state with the fetched product data.
    -addToCart(state, product): Adds a product to the cart state.
    -removeFromCart(state, productId): Removes a product from the cart state by its ID.
    -addToWishlist(state, product): Adds a product to the wishlist state.
    -removeFromWishlist(state, productId): Removes a product from the wishlist state by its ID.
    -setIsLoggedIn(state, status): Sets the isLoggedIn state based on the user's authentication status.

## Actions:
    -fetchProducts({ commit }): Fetches the product data from the API and commits the setProducts mutation.

## Getters:
    -products: Retrieves the list of products from the state.
    -cart: Retrieves the list of products in the cart.
    -wishlist: Retrieves the list of products in the wishlist.
    -isLoggedIn: Retrieves the user's login status.

## Conversion from Other Frameworks

## Background
Initially, the project was developed using Reactjs. Over the past week, the project was refactored to use Vue.js for a more manageable and feature-rich approach.

## Steps-taken:
1. Assessment of Existing Components: Evaluated the components and identified core functionalities and states.
2. HTML Structure Creation: Recreated the layout using Vue.js components and Tailwind CSS for styling.
3. State Management: Implemented Vuex for managing state and actions across the application.
4. Routing: Utilized Vue Router to manage navigation between different pages (Home, Cart, Wishlist, Product Details).
5. Dynamic Content: Implemented dynamic content updates and user interactions using Vue.js reactivity and directives.

## Difficulties Faced: 
1. State Management: Adapting complex state management to Vuex and ensuring proper state mutations and actions were challenging.
2. Routing: Configuring Vue Router for smooth navigation between different components and handling dynamic routes.
3. Component Structure: Reworking the component structure and ensuring proper data flow and reactivity in Vue.js.

## What I Leanerd:
1. Vue.js Fundamentals: Gained a comprehensive understanding of Vue.js directives, reactivity, and component-based architecture.
2. Vuex and Vue Router: Learned how to effectively use Vuex for state management and Vue Router for navigation and routing.
3. Enhanced Design: Discovered how Vue.js simplifies complex interactions and state management compared to other frameworks.

## Improvements:
1. User Authentication: Enhance the login functionality with real authentication mechanisms and user management.
2. Product Detail Page: Improve the product detail view with more advanced features like reviews and related products.
3. Performance Optimization: Optimize the loading times and performance of the product listing and filtering functionalities.
4. UI/UX Enhancements: Refine the user interface and experience to be more engaging and intuitive.