import { createRouter, createWebHistory } from 'vue-router';

import loginPage from '../src/components/loginPage.vue';
import chatRoom from '../src/components/chatRoom.vue';

const routes = [
	{
		path: '/',
		name: 'chatRoom',
		component: chatRoom,
	},
	{
		path: '/login',
		name: 'loginPage',
		component: loginPage,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
