import Desk from './components/Desk.vue';
import Todos from './components/Todos.vue';

export const routes = [
  { path: '/', component: Desk },
  { path: '/todos', component: Todos },
  { path: '*', component: Desk },
];
