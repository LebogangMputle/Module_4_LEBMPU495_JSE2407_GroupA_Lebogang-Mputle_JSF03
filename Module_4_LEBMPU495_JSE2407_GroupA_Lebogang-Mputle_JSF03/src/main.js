import { createApp } from 'vue';
import App from './App.vue';
import router from './store/index';
import store from './store/index'; // import Vuex store

createApp(App)
  .use(router)
  .use(store) // use Vuex store
  .mount('#app');
