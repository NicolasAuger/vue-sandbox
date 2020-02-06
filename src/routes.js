import Camera from './components/Camera.vue';
import Todos from './components/Todos.vue';
import JsonPlaceholder from './components/JsonPlaceholder.vue';
import Overwatch from './components/Overwatch.vue';

export const routes = [
  { path: '/', component: Todos },
  { path: '/camera', component: Camera },
  { path: '/jsonp', component: JsonPlaceholder },
  { path: '/overwatch', component: Overwatch },
  { path: '*', redirect: '/' },
];
