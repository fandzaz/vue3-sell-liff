import { createApp } from 'vue'
import App from './App.vue'
import {createRouter,createWebHistory} from 'vue-router'
import page from './page'

const routes = [{path:'',component:page}];
const router = createRouter({
    history: createWebHistory('/'),
    routes,
  });
const app = createApp(App)
app.use(router);
app.mount('#app')
