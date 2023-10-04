import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import {createRouter , createWebHistory} from 'vue-router'
import Home from './Home.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
    ],
  });


createApp(App).use(router).mount('#app');
