import Camera from './components/Camera.vue';
import Todos from './components/Todos.vue';

export const routes = [
  { path: '/', component: Todos },
  { path: '/camera', component: Camera },
  { path: '*', redirect: '/' },
];
