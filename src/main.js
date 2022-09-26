import { createApp } from 'vue';
import App from './App.vue';
import router from '../router/index';
createApp(App).use(router).mount('#app');

// const router = new VueRouter({
// 	routes,
// });

// new Vue({
// 	el: '#app',
// 	router,
// 	render: h => h(App),
// });
