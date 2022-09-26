<template>
	<!-- <img alt="Vue logo" src="./assets/logo.png"> -->
	<!-- <div>
		<ChatRoom />
		<loginPage />
	</div> -->
	<!-- <nav>
		<router-link to="/">chatRoom</router-link> |
		<router-link to="/login">登入</router-link>
	</nav> -->
	<!-- <loginPage /> -->
	<router-view />
</template>

<script>
import loginPage from './components/loginPage.vue';
import ChatRoom from './components/chatRoom.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

export default {
	name: 'App',
	components: {
		loginPage,
		ChatRoom,
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	/* color: #2c3e50; */
	/* margin-top: 60px; */
}
</style>
