import Desk from './components/Desk.vue';
import Todos from './components/Todos.vue';

export const routes = [
  { path: '/', component: Todos },
  { path: '/desk', component: Desk },
  { path: '*', redirect: '/' },
];
