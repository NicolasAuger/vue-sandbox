import Camera from './components/Camera.vue';
import Todos from './components/Todos.vue';
import JsonPlaceholder from './components/JsonPlaceholder.vue';

export const routes = [
  { path: '/', component: Todos },
  { path: '/camera', component: Camera },
  { path: '/jsonp', component: JsonPlaceholder },
  { path: '*', redirect: '/' },
];
