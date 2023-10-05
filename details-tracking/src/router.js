import {createRouter , createWebHistory} from 'vue-router'
import Home from './Home.vue'
import Todos from './Todos.vue'

const routes = [
  { path: '/', component: Home, name: 'Home', meta:{ showUsersButton: true, showTodosButton: false, showPostsButton: false, showAlbumsButton: false },},
  { path: '/todos/:id', component: Todos, name: 'Todos', meta:{ showUsersButton: false, showTodosButton: true, showPostsButton: true, showAlbumsButton: true }, },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;