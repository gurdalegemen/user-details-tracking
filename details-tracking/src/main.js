import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import store from './store';

import {createRouter , createWebHistory} from 'vue-router'
import Home from './Home.vue'
import Todos from './Todos.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home, name: 'Home', meta:{ showUsersButton: true, showTodosButton: false, showPostsButton: false, showAlbumsButton: false },},
        { path: '/todos', component: Todos, name: 'Todos', meta:{ showUsersButton: false, showTodosButton: true, showPostsButton: true, showAlbumsButton: true }, },
    ],
  });


createApp(App).use(router).use(store).mount('#app');
