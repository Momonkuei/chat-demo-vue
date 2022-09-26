import { createApp } from 'vue';
import App from './App.vue';
import router from '../router/index';
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

createApp(App).use(router).mount('#app');

// const router = new VueRouter({
// 	routes,
// });

// new Vue({
// 	el: '#app',
// 	router,
// 	render: h => h(App),
// });
