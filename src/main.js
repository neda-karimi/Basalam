import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import { store } from './store/store';
import { routes } from './router'




Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: 'history'
})
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
