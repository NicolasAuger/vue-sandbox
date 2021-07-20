import Vue from 'vue';
import VueRouter from 'vue-router';

import { routes } from './routes';

import App from './components/App.vue';
import './services/polyfills';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import './theme/index.styl';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
});

new Vue({
  el: '#root',
  router,
  render: h => h(App),
});
